import { BaseAgent, AgentType } from '../core/baseAgent.js';
import { BaseMessage, AIMessage, HumanMessage, SystemMessage } from '@langchain/core/messages';
import { ChatOpenAI } from '@langchain/openai';
import { Postgres } from '@snakagent/database';
import { logger } from '@snakagent/core';
import { OperatorRegistry } from './operatorRegistry.js';
import { DatabaseSync } from 'node:sqlite';

/**
 * Interface representing an agent configuration in the database
 */
export interface AgentConfig {
  id?: string; // UUID, auto-generated
  name: string;
  group: string;
  description: string;
  lore?: string[];
  objectives?: string[];
  knowledge?: string[];
  system_prompt?: string;
  interval?: number;
  plugins?: string[];
  memory?: any; // ROW(false, 5)::memory type
  mode?: string;
  max_iterations?: number;
}

/**
 * Configuration for the ConfigurationAgent
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
 * Configuration operations that can be performed
 */
export enum ConfigOperation {
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  CLARIFY = 'clarify',
}

/**
 * Request structure for configuration operations
 */
export interface ConfigRequest {
  operation: ConfigOperation;
  agentId?: string;
  agentName?: string;
  config?: Partial<AgentConfig>;
  filters?: Record<string, any>;
  confidence?: number;
  missingInfo?: string[];
  clarification?: string;
}

/**
 * Response structure for configuration operations
 */
export interface ConfigResponse {
  success: boolean;
  message: string;
  data?: AgentConfig | AgentConfig[];
  error?: string;
  needsClarification?: boolean;
  suggestedValues?: Record<string, any>;
}

/**
 * AI Analysis result structure
 */
interface AIAnalysis {
  operation: ConfigOperation;
  parameters: {
    agentId?: string;
    agentName?: string;
    config?: Partial<AgentConfig>;
    filters?: Record<string, any>;
  };
  confidence: number;
  missingInfo: string[];
  reasoning: string;
}

/**
 * ConfigurationAgent manages agent configurations stored in the database.
 * It provides CRUD operations for agent settings and integrates with the operator registry.
 * Enhanced with AI for natural language understanding and intelligent responses.
 */
export class ConfigurationAgent extends BaseAgent {
  private debug: boolean = false;
  private llm: ChatOpenAI;

  constructor(config: ConfigurationAgentConfig = {}) {
    super(
      'configuration-agent',
      AgentType.OPERATOR,
      'I specialize in handling the project\'s database. I can list, modify, delete configurations as an example but I basically can do anything that is related to the database.'
    );

    this.debug = config.debug !== undefined ? config.debug : true;

    // Initialize LLM with configuration
    const llmConfig = config.llmConfig || {};
    this.llm = new ChatOpenAI({
      modelName: llmConfig.modelName || 'gpt-4',
      temperature: llmConfig.temperature || 0.1,
      openAIApiKey: llmConfig.apiKey || process.env.OPENAI_API_KEY,
      ...(llmConfig.baseURL && { configuration: { baseURL: llmConfig.baseURL } }),
    });

    if (this.debug) {
      logger.debug('ConfigurationAgent initialized with AI capabilities enabled');
    }
  }

  /**
   * Initializes the ConfigurationAgent and registers it with the OperatorRegistry
   */
  public async init(): Promise<void> {
    try {
      // Test AI connection

      const registry = OperatorRegistry.getInstance();
      registry.register(this.id, this);

      logger.debug('ConfigurationAgent initialized and registered successfully');
    } catch (error) {
      logger.error(`ConfigurationAgent initialization failed: ${error}`);
      throw new Error(`ConfigurationAgent initialization failed: ${error}`);
    }
  }

  /**
   * Test AI connection to ensure the LLM is working
   */

  /**
   * Main execution entry point for the agent
   * Uses AI to understand the input and determine the appropriate action
   */
  public async execute(input: string | BaseMessage | BaseMessage[]): Promise<AIMessage> {
    try {
      const content = this.extractContent(input);

      if (this.debug) {
        logger.debug(`ConfigurationAgent: Processing input: "${content}"`);
      }

      // Use AI to analyze the request
      const aiAnalysis = await this.analyzeRequestWithAI(content);

      if (this.debug) {
        logger.debug(`ConfigurationAgent: AI Analysis: ${JSON.stringify(aiAnalysis, null, 2)}`);
      }

      // Convert AI analysis to config request
      const request = this.convertAIAnalysisToRequest(aiAnalysis);

      // Handle the configuration operation
      const response = await this.handleConfigOperation(request, content);

      return new AIMessage({
        content: await this.formatResponseWithAI(response, content),
        additional_kwargs: {
          from: 'config-agent',
          final: true,
          success: response.success,
          operation: request.operation,
          ...(response.data && { data: response.data }),
        },
      });
    } catch (error) {
      logger.error(`ConfigurationAgent execution error: ${error}`);

      // Use AI to generate a helpful error message
      const errorMessage = await this.generateErrorMessage(error, input);

      return new AIMessage({
        content: errorMessage,
        additional_kwargs: {
          from: 'config-agent',
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
   * Use AI to analyze and understand the user's request
   */
  private async analyzeRequestWithAI(content: string): Promise<AIAnalysis> {
    const systemPrompt = `You are an expert at analyzing configuration requests for AI agents.

Your task is to analyze user requests and extract:
1. The operation they want to perform (create, read, update, delete, list)
2. Any parameters they've provided (agent name, description, group, mode, etc.)
3. Any missing required information
4. Your reasoning

Available operations:
- CREATE: Create a new agent (requires: name, group, description)
- READ: Get details of a specific agent (requires: agent name or ID)
- UPDATE: Modify an existing agent (requires: agent identifier + fields to update)
- DELETE: Remove an agent (requires: agent name or ID)
- LIST: Show multiple agents (optional: filters like group, mode)

}`;

    try {
      const response = await this.llm.invoke([
        new SystemMessage(systemPrompt),
        new HumanMessage(`Analyze this request: "${content}"`)
      ]);

      const aiResponse = typeof response.content === 'string'
        ? response.content
        : JSON.stringify(response.content);

      return JSON.parse(aiResponse);
    } catch (error) {
      logger.error(`AI analysis failed: ${error}`);
      // Fallback to rule-based parsing
      return this.fallbackAnalysis(content);
    }
  }

  /**
   * Fallback analysis when AI fails
   */
  private fallbackAnalysis(content: string): AIAnalysis {
    const lowerContent = content.toLowerCase();

    if (lowerContent.includes('create') || lowerContent.includes('add') || lowerContent.includes('new agent')) {
      return {
        operation: ConfigOperation.CREATE,
        parameters: { config: {} },
        confidence: 50,
        missingInfo: ['name', 'group', 'description'],
        reasoning: 'Fallback analysis detected create operation'
      };
    } else if (lowerContent.includes('list') || lowerContent.includes('show all')) {
      return {
        operation: ConfigOperation.LIST,
        parameters: {},
        confidence: 70,
        missingInfo: [],
        reasoning: 'Fallback analysis detected list operation'
      };
    }

    return {
      operation: ConfigOperation.LIST,
      parameters: {},
      confidence: 30,
      missingInfo: [],
      reasoning: 'Fallback analysis defaulting to list operation'
    };
  }

  /**
   * Convert AI analysis to ConfigRequest
   */
  private convertAIAnalysisToRequest(analysis: AIAnalysis): ConfigRequest {
    return {
      operation: analysis.operation,
      agentId: analysis.parameters.agentId,
      agentName: analysis.parameters.agentName,
      config: analysis.parameters.config,
      filters: analysis.parameters.filters,
      confidence: analysis.confidence,
      missingInfo: analysis.missingInfo,
    };
  }

  /**
   * Enhanced request handling with AI assistance
   */
  private async handleConfigOperation(
    request: ConfigRequest,
    originalInput: string
  ): Promise<ConfigResponse> {
    // Check if we need clarification for missing information
    if (request.missingInfo && request.missingInfo.length > 0) {
      const clarification = await this.generateClarificationQuestion(request, originalInput);
      return {
        success: false,
        message: clarification,
        needsClarification: true,
      };
    }

    // Use AI to generate smart defaults for missing optional fields
    if (request.operation === ConfigOperation.CREATE && request.config) {
      request.config = await this.enhanceConfigWithAI(request.config);
    }

    // Execute the operation
    switch (request.operation) {
      case ConfigOperation.CREATE:
        return await this.createAgent(request.config!);
      case ConfigOperation.READ:
        return await this.readAgent(request.agentId, request.agentName);
      case ConfigOperation.UPDATE:
        return await this.updateAgent(request.agentId, request.agentName, request.config!);
      case ConfigOperation.DELETE:
        return await this.deleteAgent(request.agentId, request.agentName);
      case ConfigOperation.LIST:
        return await this.listAgents(request.filters);
      default:
        return {
          success: false,
          message: 'Unknown operation',
          error: `Unsupported operation: ${request.operation}`,
        };
    }
  }

  /**
   * Generate clarifying questions using AI
   */
  private async generateClarificationQuestion(
    request: ConfigRequest,
    originalInput: string
  ): Promise<string> {
    const prompt = `The user wants to ${request.operation} an agent but is missing some required information.

Original request: "${originalInput}"
Missing information: ${request.missingInfo?.join(', ')}

Generate a helpful, conversational question to ask the user for the missing information.
Be specific about what you need and provide examples if helpful.
Keep it concise and friendly.`;

    try {
      const response = await this.llm.invoke([
        new SystemMessage('You are a helpful assistant that asks clarifying questions.'),
        new HumanMessage(prompt)
      ]);

      return typeof response.content === 'string'
        ? response.content
        : 'I need some additional information to help you with that request.';
    } catch (error) {
      logger.error(`Failed to generate clarification: ${error}`);
      return `I need some additional information: ${request.missingInfo?.join(', ')}`;
    }
  }

  /**
   * Use AI to enhance configuration with smart defaults
   */
  private async enhanceConfigWithAI(config: Partial<AgentConfig>): Promise<Partial<AgentConfig>> {
    try {
      // Generate description if missing
      if (!config.description && config.name) {
        const prompt = `Generate a concise, professional description for an AI agent named "${config.name}"
        in the "${config.group || 'default'}" group. Keep it under 100 characters and describe what the agent might do.`;

        const response = await this.llm.invoke([
          new SystemMessage('You generate brief, professional descriptions for AI agents.'),
          new HumanMessage(prompt)
        ]);

        if (typeof response.content === 'string') {
          config.description = response.content.replace(/"/g, '').trim();
        }
      }

      // Set smart defaults
      if (!config.group) config.group = 'default';
      if (!config.mode) config.mode = 'interactive';
      if (!config.interval) config.interval = 5;
      if (!config.max_iterations) config.max_iterations = 15;

      return config;
    } catch (error) {
      logger.error(`Failed to enhance config with AI: ${error}`);
      return config;
    }
  }

  /**
   * Generate helpful error messages using AI
   */
  private async generateErrorMessage(error: any, input: string | BaseMessage | BaseMessage[]): Promise<string> {
    const content = this.extractContent(input);
    const errorMsg = error instanceof Error ? error.message : String(error);

    const prompt = `A user tried to perform a configuration operation but encountered an error.

User request: "${content}"
Error: ${errorMsg}

Generate a helpful, user-friendly error message that:
1. Acknowledges what they were trying to do
2. Explains what went wrong in simple terms
3. Suggests what they can try instead
4. Keeps a helpful, professional tone

Keep it concise but informative.`;

    try {
      const response = await this.llm.invoke([
        new SystemMessage('You are a helpful assistant that explains errors in a user-friendly way.'),
        new HumanMessage(prompt)
      ]);

      return typeof response.content === 'string'
        ? `❌ ${response.content}`
        : `❌ Configuration operation failed: ${errorMsg}`;
    } catch (aiError) {
      logger.error(`Failed to generate error message: ${aiError}`);
      return `❌ Configuration operation failed: ${errorMsg}`;
    }
  }

  /**
   * Enhanced response formatting with AI assistance
   */
  private async formatResponseWithAI(response: ConfigResponse, originalInput: string): Promise<string> {
    if (!response.success) {
      return response.message;
    }

    // For successful operations, enhance the response with AI
    try {
      const prompt = `Format this configuration operation result in a user-friendly way:

Original request: "${originalInput}"
Operation result: ${JSON.stringify(response, null, 2)}

Create a clear, conversational response that:
1. Confirms what was accomplished
2. Shows relevant details in an organized way
3. Uses appropriate emojis for visual appeal
4. Keeps it concise but informative

Use markdown formatting for better readability.`;

      const aiResponse = await this.llm.invoke([
        new SystemMessage('You format technical responses in a user-friendly, conversational way.'),
        new HumanMessage(prompt)
      ]);

      if (typeof aiResponse.content === 'string') {
        return aiResponse.content;
      }
    } catch (error) {
      logger.error(`Failed to format response with AI: ${error}`);
    }

    // Fallback to original formatting
    return this.formatResponse(response);
  }

  // [Keep all the existing database methods: createAgent, readAgent, updateAgent, deleteAgent, listAgents]

  /**
   * Creates a new agent configuration in the database
   */
  private async createAgent(config: Partial<AgentConfig>): Promise<ConfigResponse> {
    try {
      // Validate required fields
      if (!config.name || !config.group || !config.description) {
        return {
          success: false,
          message: 'Missing required fields: name, group, and description are required',
          error: 'Validation error',
        };
      }

      const query = new Postgres.Query(
        `INSERT INTO agents (
          name, "group", description, lore, objectives, knowledge,
          system_prompt, interval, plugins, memory, mode, max_iterations
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        RETURNING *`,
        [
          config.name,
          config.group,
          config.description,
          config.lore || null,
          config.objectives || null,
          config.knowledge || null,
          config.system_prompt || null,
          config.interval || 5,
          config.plugins || null,
          config.memory || null,
          config.mode || 'interactive',
          config.max_iterations || 15,
        ]
      );

      const result = await Postgres.query<AgentConfig>(query);

      if (result.length > 0) {
        logger.info(`ConfigurationAgent: Created new agent "${config.name}"`);
        return {
          success: true,
          message: `Agent "${config.name}" created successfully`,
          data: result[0],
        };
      } else {
        return {
          success: false,
          message: 'Failed to create agent',
          error: 'No data returned from insert operation',
        };
      }
    } catch (error) {
      logger.error(`ConfigurationAgent: Error creating agent: ${error}`);
      return {
        success: false,
        message: 'Failed to create agent',
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }

  /**
   * Reads an agent configuration from the database
   */
  private async readAgent(agentId?: string, agentName?: string): Promise<ConfigResponse> {
    try {
      let query: Postgres.Query;

      if (agentId) {
        query = new Postgres.Query('SELECT * FROM agents WHERE id = $1', [agentId]);
      } else if (agentName) {
        query = new Postgres.Query('SELECT * FROM agents WHERE name = $1', [agentName]);
      } else {
        return {
          success: false,
          message: 'Agent ID or name must be provided',
          error: 'Missing identifier',
        };
      }

      const result = await Postgres.query<AgentConfig>(query);

      if (result.length > 0) {
        return {
          success: true,
          message: 'Agent configuration retrieved successfully',
          data: result[0],
        };
      } else {
        return {
          success: false,
          message: 'Agent not found',
          error: 'No agent found with the provided identifier',
        };
      }
    } catch (error) {
      logger.error(`ConfigurationAgent: Error reading agent: ${error}`);
      return {
        success: false,
        message: 'Failed to read agent configuration',
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }

  /**
   * Updates an agent configuration in the database
   */
  private async updateAgent(
    agentId?: string,
    agentName?: string,
    config?: Partial<AgentConfig>
  ): Promise<ConfigResponse> {
    try {
      if (!config || Object.keys(config).length === 0) {
        return {
          success: false,
          message: 'No configuration changes provided',
          error: 'Empty update config',
        };
      }

      // First, find the agent
      const existingAgent = await this.readAgent(agentId, agentName);
      if (!existingAgent.success || !existingAgent.data) {
        return existingAgent;
      }

      const agent = existingAgent.data as AgentConfig;
      const updateFields: string[] = [];
      const updateValues: any[] = [];
      let paramIndex = 1;

      // Build dynamic update query
      Object.entries(config).forEach(([key, value]) => {
        if (key !== 'id' && value !== undefined) {
          updateFields.push(`"${key}" = $${paramIndex}`);
          updateValues.push(value);
          paramIndex++;
        }
      });

      if (updateFields.length === 0) {
        return {
          success: false,
          message: 'No valid fields to update',
          error: 'No updatable fields provided',
        };
      }

      updateValues.push(agent.id);
      const query = new Postgres.Query(
        `UPDATE agents SET ${updateFields.join(', ')} WHERE id = $${paramIndex} RETURNING *`,
        updateValues
      );

      const result = await Postgres.query<AgentConfig>(query);

      if (result.length > 0) {
        logger.info(`ConfigurationAgent: Updated agent "${agent.name}"`);
        return {
          success: true,
          message: `Agent "${agent.name}" updated successfully`,
          data: result[0],
        };
      } else {
        return {
          success: false,
          message: 'Failed to update agent',
          error: 'No data returned from update operation',
        };
      }
    } catch (error) {
      logger.error(`ConfigurationAgent: Error updating agent: ${error}`);
      return {
        success: false,
        message: 'Failed to update agent configuration',
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }

  /**
   * Deletes an agent configuration from the database
   */
  private async deleteAgent(agentId?: string, agentName?: string): Promise<ConfigResponse> {
    try {
      // First, find the agent to get its details for the response
      const existingAgent = await this.readAgent(agentId, agentName);
      if (!existingAgent.success || !existingAgent.data) {
        return existingAgent;
      }

      const agent = existingAgent.data as AgentConfig;

      const query = new Postgres.Query('DELETE FROM agents WHERE id = $1', [agent.id]);
      await Postgres.query(query);

      logger.info(`ConfigurationAgent: Deleted agent "${agent.name}"`);
      return {
        success: true,
        message: `Agent "${agent.name}" deleted successfully`,
      };
    } catch (error) {
      logger.error(`ConfigurationAgent: Error deleting agent: ${error}`);
      return {
        success: false,
        message: 'Failed to delete agent',
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }

  /**
   * Lists agent configurations from the database with optional filters
   */
  private async listAgents(filters?: Record<string, any>): Promise<ConfigResponse> {
    try {
      let query: Postgres.Query;

      if (filters && Object.keys(filters).length > 0) {
        const whereConditions: string[] = [];
        const values: any[] = [];
        let paramIndex = 1;

        Object.entries(filters).forEach(([key, value]) => {
          whereConditions.push(`"${key}" = $${paramIndex}`);
          values.push(value);
          paramIndex++;
        });

        query = new Postgres.Query(
          `SELECT * FROM agents WHERE ${whereConditions.join(' AND ')} ORDER BY name`,
          values
        );
      } else {
        query = new Postgres.Query('SELECT * FROM agents ORDER BY name');
      }
	  console.log("Query : ", query)
      const result = await Postgres.query<AgentConfig>(query);

      return {
        success: true,
        message: `Found ${result.length} agent(s)`,
        data: result,
      };
    } catch (error) {
      logger.error(`ConfigurationAgent: Error listing agents: ${error}`);
      return {
        success: false,
        message: 'Failed to list agents',
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }

  /**
   * Fallback response formatting (original method)
   */
  private formatResponse(response: ConfigResponse): string {
    if (!response.success) {
      return `❌ ${response.message}${response.error ? `: ${response.error}` : ''}`;
    }

    let output = `✅ ${response.message}\n`;

    if (response.data) {
      if (Array.isArray(response.data)) {
        // List of agents
        if (response.data.length === 0) {
          output += '\nNo agents found.';
        } else {
          output += '\n📋 **Agent List:**\n';
          response.data.forEach((agent, index) => {
            output += `\n${index + 1}. **${agent.name}** (${agent.group})\n`;
            output += `   • ID: ${agent.id}\n`;
            output += `   • Description: ${agent.description}\n`;
            output += `   • Mode: ${agent.mode}\n`;
            output += `   • Interval: ${agent.interval}s\n`;
            output += `   • Max Iterations: ${agent.max_iterations}\n`;
          });
        }
      } else {
        // Single agent
        const agent = response.data;
        output += '\n📄 **Agent Details:**\n';
        output += `• **Name:** ${agent.name}\n`;
        output += `• **Group:** ${agent.group}\n`;
        output += `• **ID:** ${agent.id}\n`;
        output += `• **Description:** ${agent.description}\n`;
        output += `• **Mode:** ${agent.mode}\n`;
        output += `• **Interval:** ${agent.interval}s\n`;
        output += `• **Max Iterations:** ${agent.max_iterations}\n`;

        if (agent.system_prompt) {
          output += `• **System Prompt:** ${agent.system_prompt.substring(0, 100)}...\n`;
        }

        if (agent.lore && agent.lore.length > 0) {
          output += `• **Lore:** ${agent.lore.length} item(s)\n`;
        }

        if (agent.objectives && agent.objectives.length > 0) {
          output += `• **Objectives:** ${agent.objectives.length} item(s)\n`;
        }

        if (agent.knowledge && agent.knowledge.length > 0) {
          output += `• **Knowledge:** ${agent.knowledge.length} item(s)\n`;
        }

        if (agent.plugins && agent.plugins.length > 0) {
          output += `• **Plugins:** ${agent.plugins.join(', ')}\n`;
        }
      }
    }

    return output;
  }

  /**
   * Cleanup method for the agent
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
