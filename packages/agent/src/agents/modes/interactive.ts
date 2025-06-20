import { StateGraph, MemorySaver, Annotation } from '@langchain/langgraph';
import { ToolNode } from '@langchain/langgraph/prebuilt';
import { AIMessage, BaseMessage, HumanMessage } from '@langchain/core/messages';
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from '@langchain/core/prompts';
import { logger, AgentConfig } from '@snakagent/core';
import { SnakAgentInterface } from '../../tools/tools.js';
import {
  initializeToolsList,
  initializeDatabase,
  truncateToolResults,
  formatAgentResponse,
} from '../core/utils.js';
import { ModelSelector } from '../operators/modelSelector.js';
import { SupervisorAgent } from '../supervisor/supervisorAgent.js';
import { interactiveRules } from '../../prompt/prompts.js';
import { TokenTracker } from '../../token/tokenTracking.js';

/**
 * Retrieves the memory agent instance from the SupervisorAgent.
 * @returns A promise that resolves to the memory agent instance or null if not found or an error occurs.
 */
const getMemoryAgent = async () => {
  try {
    // Try to get supervisor instance
    const supervisorAgent = SupervisorAgent.getInstance?.() || null;
    if (supervisorAgent) {
      return await supervisorAgent.getMemoryAgent();
    }
    return null;
  } catch (error) {
    logger.error(`Failed to get memory agent: ${error}`);
    return null;
  }
};

/**
 * Creates and configures an interactive agent.
 * @param snakAgent - The SnakAgentInterface instance.
 * @param modelSelector - An optional ModelSelector instance for dynamic model selection.
 * @returns A promise that resolves to the compiled agent application.
 * @throws Will throw an error if agent configuration is missing or invalid.
 */
export const createInteractiveAgent = async (
  snakAgent: SnakAgentInterface,
  modelSelector: ModelSelector | null
) => {
  try {
    const agent_config: AgentConfig = snakAgent.getAgentConfig();
    if (!agent_config) {
      throw new Error('Agent configuration is required');
    }

    await initializeDatabase(snakAgent.getDatabaseCredentials());

    const toolsList = await initializeToolsList(snakAgent, agent_config);

    let memoryAgent = null;
    if (agent_config.memory) {
      try {
        memoryAgent = await getMemoryAgent();
        if (memoryAgent) {
          logger.debug('Successfully retrieved memory agent');
          const memoryTools = memoryAgent.prepareMemoryTools();
          toolsList.push(...memoryTools);
        } else {
          logger.warn(
            'Memory agent not available, memory features will be limited'
          );
        }
      } catch (error) {
        logger.error(`Error retrieving memory agent: ${error}`);
      }
    }

    const GraphState = Annotation.Root({
      messages: Annotation<BaseMessage[]>({
        reducer: (x, y) => x.concat(y),
      }),
      memories: Annotation<string>,
    });

    const toolNode = new ToolNode(toolsList);
    // Add wrapper to log tool executions
    const originalInvoke = toolNode.invoke.bind(toolNode);
    toolNode.invoke = async (state, config) => {
      const lastMessage = state.messages[state.messages.length - 1];
      const toolCalls = lastMessage?.tool_calls || [];

      if (toolCalls.length > 0) {
        for (const call of toolCalls) {
          logger.info(
            `Executing tool: ${call.name} with args: ${JSON.stringify(call.args).substring(0, 150)}${JSON.stringify(call.args).length > 150 ? '...' : ''}`
          );
        }
      }

      const startTime = Date.now();
      const result = await originalInvoke(state, config);
      const executionTime = Date.now() - startTime;

      const truncatedResult = truncateToolResults(result, 5000);

      if (truncatedResult?.messages?.length > 0) {
        const resultMessage =
          truncatedResult.messages[truncatedResult.messages.length - 1];
        logger.debug(
          `Tool execution completed in ${executionTime}ms with result type: ${resultMessage._getType?.() || typeof resultMessage}`
        );
      }

      return truncatedResult;
    };

    const configPrompt = agent_config.prompt?.content || '';
    const finalPrompt = `${configPrompt}`;

    /**
     * Calls the appropriate language model with the current state and tools.
     * @param state - The current state of the graph.
     * @returns A promise that resolves to an object containing the model's response messages.
     * @throws Will throw an error if agent configuration is incomplete or if model invocation fails.
     */
    async function callModel(
      state: typeof GraphState.State
    ): Promise<{ messages: BaseMessage[] }> {
      if (!agent_config) {
        throw new Error('Agent configuration is required but not available');
      }

      const interactiveSystemPrompt = `
        ${interactiveRules}
        Available tools: ${toolsList.map((tool) => tool.name).join(', ')}
      `;
      const prompt = ChatPromptTemplate.fromMessages([
        [
          'system',
          `${finalPrompt.trim()}
        ${interactiveSystemPrompt}`.trim(),
        ],
        new MessagesPlaceholder('messages'),
      ]);

      try {
        const filteredMessages = state.messages.filter(
          (msg) =>
            !(
              msg instanceof AIMessage &&
              msg.additional_kwargs?.from === 'model-selector'
            )
        );

        const currentMessages = filteredMessages;
        const currentFormattedPrompt = await prompt.formatMessages({
          tool_names: toolsList.map((tool) => tool.name).join(', '),
          messages: currentMessages,
        });

        if (modelSelector) {
          const stateModelType =
            typeof state.memories === 'object' && state.memories
              ? (state.memories as any).modelType
              : null;

          // Extract originalUserQuery from first HumanMessage if available
          const originalUserMessage = currentMessages.find(
            (msg): msg is HumanMessage => msg instanceof HumanMessage
          );
          const originalUserQuery = originalUserMessage
            ? typeof originalUserMessage.content === 'string'
              ? originalUserMessage.content
              : JSON.stringify(originalUserMessage.content)
            : '';

          const selectedModelType =
            stateModelType ||
            (await modelSelector.selectModelForMessages(currentMessages, {
              originalUserQuery,
            }));

          logger.debug(
            `Using dynamically selected model: ${selectedModelType}`
          );
          const modelForThisTask = await modelSelector.getModelForTask(
            currentMessages,
            selectedModelType
          );

          const boundModel =
            typeof modelForThisTask.bindTools === 'function'
              ? modelForThisTask.bindTools(toolsList)
              : modelForThisTask;

          const result = await boundModel.invoke(currentMessages);
          logger.debug(result);
          TokenTracker.trackCall(result, selectedModelType);
          return formatAIMessageResult(result);
        } else {
          const existingModelSelector = ModelSelector.getInstance();
          if (existingModelSelector) {
            logger.debug('Using existing model selector with smart model');
            const smartModel = await existingModelSelector.getModelForTask(
              currentMessages,
              'smart'
            );
            const boundSmartModel =
              typeof smartModel.bindTools === 'function'
                ? smartModel.bindTools(toolsList)
                : smartModel;
            const result = await boundSmartModel.invoke(currentFormattedPrompt);
            TokenTracker.trackCall(result, 'smart');
            return formatAIMessageResult(result);
          } else {
            logger.warn(
              'No model selector available, using direct provider selection is not supported without a ModelSelector.'
            );
            throw new Error(
              'Model selection requires a configured ModelSelector'
            );
          }
        }
      } catch (error) {
        if (
          error instanceof Error &&
          (error.message.includes('token limit') ||
            error.message.includes('tokens exceed') ||
            error.message.includes('context length'))
        ) {
          logger.error(`Token limit error: ${error.message}`);
          const minimalMessages = state.messages.slice(-2);

          try {
            const emergencyPrompt = await prompt.formatMessages({
              tool_names: toolsList.map((tool) => tool.name).join(', '),
              messages: minimalMessages,
            });

            const existingModelSelector = ModelSelector.getInstance();
            if (existingModelSelector) {
              const emergencyModel =
                await existingModelSelector.getModelForTask(
                  minimalMessages,
                  'smart'
                );
              const boundEmergencyModel =
                typeof emergencyModel.bindTools === 'function'
                  ? emergencyModel.bindTools(toolsList)
                  : emergencyModel;
              const result = await boundEmergencyModel.invoke(emergencyPrompt);
              TokenTracker.trackCall(result, 'smart_emergency');
              return formatAIMessageResult(result);
            } else {
              throw new Error(
                'Model selection requires a configured ModelSelector for emergency fallback.'
              );
            }
          } catch (emergencyError) {
            logger.error(`Emergency prompt failed: ${emergencyError}`);
            return {
              messages: [
                new AIMessage({
                  content:
                    'The conversation has become too long and exceeds token limits, even for a minimal recovery attempt. Please start a new conversation.',
                  additional_kwargs: {
                    from: 'snak',
                    final: true,
                    error: 'token_limit_exceeded_emergency_failed',
                  },
                }),
              ],
            };
          }
        }
        logger.error(`Model invocation failed: ${error}`);
        throw error;
      }
    }

    /**
     * Formats the result from an AI model call into a consistent AIMessage structure.
     * Also truncates the message content if it's too long and logs the response.
     * @param result - The raw result from the AI model.
     * @returns An object containing an array with a single formatted AIMessage.
     */
    function formatAIMessageResult(result: any): { messages: BaseMessage[] } {
      let finalResult = result;
      if (!(finalResult instanceof AIMessage)) {
        finalResult = new AIMessage({
          content:
            typeof finalResult.content === 'string'
              ? finalResult.content
              : JSON.stringify(finalResult.content),
          additional_kwargs: {
            from: 'snak',
            final: true,
          },
        });
      } else if (!finalResult.additional_kwargs) {
        finalResult.additional_kwargs = { from: 'snak', final: true };
      } else if (!finalResult.additional_kwargs.from) {
        finalResult.additional_kwargs.from = 'snak';
        finalResult.additional_kwargs.final = true;
      }

      const truncatedResultInstance = truncateToolResults(finalResult, 5000);

      const resultToLog = truncatedResultInstance || finalResult;

      if (
        resultToLog instanceof AIMessage ||
        (resultToLog &&
          typeof resultToLog === 'object' &&
          'content' in resultToLog)
      ) {
        const content =
          typeof resultToLog.content === 'string'
            ? resultToLog.content
            : JSON.stringify(resultToLog.content || '');

        if (content?.trim()) {
          logger.info(`Agent Response:

${formatAgentResponse(content)}`);
        }
      }
      return {
        messages: [result],
      };
    }

    /**
     * Determines the next step in the workflow based on the last message.
     * If the last message contains tool calls, it routes to the 'tools' node.
     * Otherwise, it ends the execution.
     * @param state - The current state of the graph.
     * @returns 'tools' if tool calls are present, otherwise 'end'.
     */
    function shouldContinue(state: typeof GraphState.State) {
      const messages = state.messages;
      const lastMessage = messages[messages.length - 1] as AIMessage;
      if (lastMessage.tool_calls?.length) {
        logger.debug(
          `Detected ${lastMessage.tool_calls.length} tool calls, routing to tools node.`
        );
        return 'tools';
      }
      return 'end';
    }

    const workflow = new StateGraph(GraphState)
      .addNode('agent', callModel)
      .addNode('tools', toolNode);

    if (agent_config.memory && memoryAgent) {
      workflow
        .addNode('memory', memoryAgent.createMemoryNode())
        .addEdge('__start__', 'memory')
        .addEdge('memory', 'agent');
    } else {
      workflow.addEdge('__start__', 'agent');
    }

    workflow
      .addConditionalEdges('agent', shouldContinue)
      .addEdge('tools', 'agent');

    const checkpointer = new MemorySaver();
    const app = workflow.compile({
      ...(agent_config.memory
        ? {
            checkpointer: checkpointer,
            configurable: {},
          }
        : {}),
    });
    return app;
  } catch (error) {
    logger.error('Failed to create an interactive agent:', error);
    throw error;
  }
};
