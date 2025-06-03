import { BaseAgent, AgentType } from '../../core/baseAgent.js';
import {
  BaseMessage,
  AIMessage,
  HumanMessage,
  SystemMessage,
} from '@langchain/core/messages';
import { ChatOpenAI } from '@langchain/openai';
import { logger } from '@snakagent/core';
import { OperatorRegistry } from '../operatorRegistry.js';
import { getConfigAgentTools } from './configAgentTools.js';
import { createReactAgent } from '@langchain/langgraph/prebuilt';

// Keep existing interfaces but simplify the implementation
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
      "I specialize in managing agent configurations in the database. I can create, read, update, delete, and list agent configurations using intelligent tool selection based on your natural language requests."
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
        `ConfigurationAgent initialized with ${this.tools.length} tools: ${this.tools.map(t => t.name).join(', ')}`
      );
    }
  }

  /**
   * Initialize the ConfigurationAgent with React agent and tools
   */
  public async init(): Promise<void> {
    try {
      // Create React agent with tools
      this.reactAgent = createReactAgent({
        llm: this.llm,
        tools: this.tools,
        stateModifier: `You are a Configuration Agent specialized in managing agent configurations.
        
Available operations:
- CREATE: Create new agents (use create_agent tool)
- READ: Get agent details (use read_agent tool)  
- UPDATE: Modify existing agents (use update_agent tool)
- DELETE: Remove agents (use delete_agent tool)
- LIST: Show multiple agents (use list_agents tool)

Instructions:
1. Analyze the user's request to understand what they want to do
2. Select the appropriate tool(s) to fulfill their request
3. Use the tools intelligently based on the context
4. Provide clear, helpful responses about the operations performed
5. If information is missing, ask for clarification

Always be specific about what you're doing and provide useful feedback about the results.`,
      });

      // Register with operator registry
      const registry = OperatorRegistry.getInstance();
      registry.register(this.id, this);

      logger.debug('ConfigurationAgent initialized with React agent and registered successfully');
    } catch (error) {
      logger.error(`ConfigurationAgent initialization failed: ${error}`);
      throw new Error(`ConfigurationAgent initialization failed: ${error}`);
    }
  }

  /**
   * Execute configuration operations using React agent and tools
   */
  public async execute(
    input: string | BaseMessage | BaseMessage[]
  ): Promise<AIMessage> {
    try {
      const content = this.extractContent(input);

      if (this.debug) {
        logger.debug(`ConfigurationAgent: Processing request: "${content}"`);
      }

      if (!this.reactAgent) {
        throw new Error('React agent not initialized. Call init() first.');
      }

      // Execute with React agent
      const result = await this.reactAgent.invoke({
        messages: [new HumanMessage(content)]
      });

      // Extract final response
      const messages = result.messages || [];
      const lastMessage = messages[messages.length - 1];
      
      let responseContent = '';
      if (lastMessage && lastMessage.content) {
        responseContent = typeof lastMessage.content === 'string' 
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
        content: `❌ Configuration operation failed: ${error instanceof Error ? error.message : String(error)}`,
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
   * Extract content from various input types
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
   * Get available tools
   */
  public getTools() {
    return this.tools;
  }

  /**
   * Cleanup method
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