import { BaseAgent, AgentType } from '../../core/baseAgent.js';
import { BaseMessage, AIMessage, HumanMessage } from '@langchain/core/messages';
import { ChatOpenAI } from '@langchain/openai';
import { logger } from '@snakagent/core';
import { OperatorRegistry } from '../operatorRegistry.js';
import { getConfigAgentTools } from './configAgentTools.js';
import { createReactAgent } from '@langchain/langgraph/prebuilt';
import { configurationAgentSystemPrompt } from '../../../prompt/configAgentPrompts.js';

/**
 * Interface defining the configuration structure for an agent
 */
export interface AgentConfig {
  id?: string;
  name: string;
  group: string;
  description: string;
  lore?: string[];
  objectives?: string[];
  knowledge?: string[];
  system_prompt?: string;
  interval?: number;
  plugins?: string[];
  memory?: any;
  mode?: string;
  max_iterations?: number;
}

/**
 * Interface defining the configuration options for the ConfigurationAgent
 */
export interface ConfigurationAgentConfig {
  debug?: boolean;
  llmConfig?: {
    modelName?: string;
    temperature?: number;
    apiKey?: string;
    baseURL?: string;
  };
}

/**
 * Enhanced Configuration Agent using LangChain Tools for intelligent operation selection
 */
export class ConfigurationAgent extends BaseAgent {
  private debug: boolean = false;
  private llm: ChatOpenAI;
  private reactAgent: any;
  private tools: any[];

  constructor(config: ConfigurationAgentConfig = {}) {
    super(
      'configuration-agent',
      AgentType.OPERATOR,
      'I specialize in managing agent configurations in the database. I can create, read, update, delete, and list agent configurations using intelligent tool selection based on your natural language requests.'
    );

    this.debug = config.debug !== undefined ? config.debug : true;

    // Initialize LLM
    const llmConfig = config.llmConfig || {};
    this.llm = new ChatOpenAI({
      modelName: llmConfig.modelName || 'gpt-4',
      temperature: llmConfig.temperature || 0.1,
      openAIApiKey: llmConfig.apiKey || process.env.OPENAI_API_KEY,
      ...(llmConfig.baseURL && {
        configuration: { baseURL: llmConfig.baseURL },
      }),
    });

    // Get configuration tools
    this.tools = getConfigAgentTools();

    if (this.debug) {
      logger.debug(
        `ConfigurationAgent initialized with ${this.tools.length} tools: ${this.tools.map((t) => t.name).join(', ')}`
      );
    }
  }

  /**
   * Initializes the ConfigurationAgent by setting up the React agent and registering with the operator registry
   * @throws {Error} If initialization fails
   * @returns {Promise<void>}
   */
  public async init(): Promise<void> {
    try {
      // Create React agent with tools
      this.reactAgent = createReactAgent({
        llm: this.llm,
        tools: this.tools,
        stateModifier: configurationAgentSystemPrompt(),
      });

      // Register with operator registry
      const registry = OperatorRegistry.getInstance();
      registry.register(this.id, this);

      logger.debug(
        'ConfigurationAgent initialized with React agent and registered successfully'
      );
    } catch (error) {
      logger.error(`ConfigurationAgent initialization failed: ${error}`);
      throw new Error(`ConfigurationAgent initialization failed: ${error}`);
    }
  }

  /**
   * Executes configuration operations using the React agent and tools
   * @param {string | BaseMessage | BaseMessage[]} input - The input message(s) to process
   * @param {Record<string, any>} config - Additional configuration options
   * @returns {Promise<AIMessage>} The agent's response as an AIMessage
   * @throws {Error} If execution fails or the agent is not initialized
   */
  public async execute(
    input: string | BaseMessage | BaseMessage[],
    config?: Record<string, any>
  ): Promise<AIMessage> {
    try {
      // Extract the original human message content
      const content = this.extractOriginalUserContent(input, config);

      if (this.debug) {
        logger.debug(`ConfigurationAgent: Processing request: "${content}"`);
        logger.debug(`ConfigurationAgent: Config received:`, {
          originalUserQuery: config?.originalUserQuery,
          hasConfig: !!config,
          configKeys: config ? Object.keys(config) : [],
        });
      }

      if (!this.reactAgent) {
        throw new Error('React agent not initialized. Call init() first.');
      }

      // Execute with React agent using the original user content
      const result = await this.reactAgent.invoke({
        messages: [new HumanMessage(content)],
      });

      // Extract final response
      const messages = result.messages || [];
      const lastMessage = messages[messages.length - 1];

      let responseContent = '';
      if (lastMessage && lastMessage.content) {
        responseContent =
          typeof lastMessage.content === 'string'
            ? lastMessage.content
            : JSON.stringify(lastMessage.content);
      } else {
        responseContent = 'Configuration operation completed.';
      }

      return new AIMessage({
        content: responseContent,
        additional_kwargs: {
          from: 'configuration-agent',
          final: true,
          success: true,
        },
      });
    } catch (error) {
      logger.error(`ConfigurationAgent execution error: ${error}`);

      return new AIMessage({
        content: `Configuration operation failed: ${error instanceof Error ? error.message : String(error)}`,
        additional_kwargs: {
          from: 'configuration-agent',
          final: true,
          success: false,
          error: error instanceof Error ? error.message : String(error),
        },
      });
    }
  }

  /**
   * Extracts the original user content from various input sources
   * @private
   * @param {string | BaseMessage | BaseMessage[]} input - The input to extract content from
   * @param {Record<string, any>} config - Additional configuration containing potential original user query
   * @returns {string} The extracted user content
   */
  private extractOriginalUserContent(
    input: string | BaseMessage | BaseMessage[],
    config?: Record<string, any>
  ): string {
    // First priority: originalUserQuery from config (set by SupervisorAgent)
    if (
      config?.originalUserQuery &&
      typeof config.originalUserQuery === 'string'
    ) {
      if (this.debug) {
        logger.debug(
          `ConfigurationAgent: Using originalUserQuery from config: "${config.originalUserQuery}"`
        );
      }
      return config.originalUserQuery;
    }

    // Second priority: originalUserQuery from message additional_kwargs
    if (Array.isArray(input)) {
      // Look through messages for originalUserQuery in additional_kwargs
      for (const message of input) {
        if (
          message.additional_kwargs?.originalUserQuery &&
          typeof message.additional_kwargs.originalUserQuery === 'string'
        ) {
          if (this.debug) {
            logger.debug(
              `ConfigurationAgent: Using originalUserQuery from message additional_kwargs`
            );
          }
          return message.additional_kwargs.originalUserQuery;
        }
      }

      // Look for the first HumanMessage in the array
      for (const message of input) {
        if (
          message instanceof HumanMessage &&
          typeof message.content === 'string'
        ) {
          if (this.debug) {
            logger.debug(
              `ConfigurationAgent: Using first HumanMessage content`
            );
          }
          return message.content;
        }
      }

      // Fallback to last message content
      const lastMessage = input[input.length - 1];
      const content =
        typeof lastMessage.content === 'string'
          ? lastMessage.content
          : JSON.stringify(lastMessage.content);

      if (this.debug) {
        logger.debug(`ConfigurationAgent: Fallback to last message content`);
      }
      return content;
    }

    // Handle single BaseMessage
    if (input instanceof BaseMessage) {
      // Check for originalUserQuery in additional_kwargs first
      if (
        input.additional_kwargs?.originalUserQuery &&
        typeof input.additional_kwargs.originalUserQuery === 'string'
      ) {
        if (this.debug) {
          logger.debug(
            `ConfigurationAgent: Using originalUserQuery from single message additional_kwargs`
          );
        }
        return input.additional_kwargs.originalUserQuery;
      }

      // Use the message content
      const content =
        typeof input.content === 'string'
          ? input.content
          : JSON.stringify(input.content);

      if (this.debug) {
        logger.debug(`ConfigurationAgent: Using single message content`);
      }
      return content;
    }

    // Handle string input
    if (typeof input === 'string') {
      if (this.debug) {
        logger.debug(`ConfigurationAgent: Using string input directly`);
      }
      return input;
    }

    // Final fallback
    if (this.debug) {
      logger.debug(`ConfigurationAgent: Using fallback content extraction`);
    }
    return this.extractContent(input);
  }

  /**
   * Extracts content from various input types (fallback method)
   * @private
   * @param {string | BaseMessage | BaseMessage[]} input - The input to extract content from
   * @returns {string} The extracted content
   */
  private extractContent(input: string | BaseMessage | BaseMessage[]): string {
    if (Array.isArray(input)) {
      const lastMessage = input[input.length - 1];
      return typeof lastMessage.content === 'string'
        ? lastMessage.content
        : JSON.stringify(lastMessage.content);
    } else if (typeof input === 'string') {
      return input;
    } else {
      return typeof input.content === 'string'
        ? input.content
        : JSON.stringify(input.content);
    }
  }

  /**
   * Returns the list of available tools for the configuration agent
   * @returns {any[]} Array of available tools
   */
  public getTools() {
    return this.tools;
  }

  /**
   * Cleans up resources and unregisters the agent from the operator registry
   * @returns {Promise<void>}
   */
  public async dispose(): Promise<void> {
    try {
      const registry = OperatorRegistry.getInstance();
      registry.unregister(this.id);
      logger.debug('ConfigurationAgent disposed and unregistered');
    } catch (error) {
      logger.error(`Error disposing ConfigurationAgent: ${error}`);
    }
  }
}
