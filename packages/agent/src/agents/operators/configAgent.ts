import { BaseAgent, AgentType, IAgent } from '../core/baseAgent.js';
import {
  BaseMessage,
  HumanMessage,
  AIMessage,
  SystemMessage,
} from '@langchain/core/messages';
import { Postgres } from '@snakagent/database';
import { logger } from '@snakagent/core';
import { OperatorRegistry } from './operatorRegistry.js';

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
}

/**
 * Response structure for configuration operations
 */
export interface ConfigResponse {
  success: boolean;
  message: string;
  data?: AgentConfig | AgentConfig[];
  error?: string;
}

/**
 * ConfigurationAgent manages agent configurations stored in the database.
 * It provides CRUD operations for agent settings and integrates with the operator registry.
 */
export class ConfigurationAgent extends BaseAgent {
  private debug: boolean = false;

  constructor(config: ConfigurationAgentConfig = {}) {
    super('config-agent', AgentType.OPERATOR);
    this.debug = config.debug !== undefined ? config.debug : true; // Enable debug by default

    if (this.debug) {
      logger.debug('ConfigurationAgent initialized with debug mode enabled');
    }
  }

  /**
   * Initializes the ConfigurationAgent and registers it with the OperatorRegistry
   */
  public async init(): Promise<void> {
    try {
      // Register this agent with the operator registry
      const registry = OperatorRegistry.getInstance();
      registry.register(this.id, this);

      logger.debug(
        'ConfigurationAgent initialized and registered successfully'
      );
    } catch (error) {
      logger.error(`ConfigurationAgent initialization failed: ${error}`);
      throw new Error(`ConfigurationAgent initialization failed: ${error}`);
    }
  }

  /**
   * Main execution entry point for the agent
   * Parses the input to determine the configuration operation to perform
   */
  public async execute(
    input: string | BaseMessage | BaseMessage[],
    config?: Record<string, any>
  ): Promise<AIMessage> {
    try {
      const request = this.parseInput(input);
      const response = await this.handleConfigOperation(request);

      return new AIMessage({
        content: this.formatResponse(response),
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
      return new AIMessage({
        content: `Configuration operation failed: ${error instanceof Error ? error.message : String(error)}`,
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
   * Parses input to extract configuration request details
   */
  private parseInput(
    input: string | BaseMessage | BaseMessage[]
  ): ConfigRequest {
    let content: string;

    if (Array.isArray(input)) {
      const lastMessage = input[input.length - 1];
      content =
        typeof lastMessage.content === 'string'
          ? lastMessage.content
          : JSON.stringify(lastMessage.content);
    } else if (typeof input === 'string') {
      content = input;
    } else {
      content =
        typeof input.content === 'string'
          ? input.content
          : JSON.stringify(input.content);
    }

    // Simple parsing logic - in a real implementation, you might want to use NLP or more sophisticated parsing
    const lowerContent = content.toLowerCase();

    if (this.debug) {
      logger.debug(`ConfigurationAgent: Parsing content: "${content}"`);
      logger.debug(`ConfigurationAgent: Lowercase content: "${lowerContent}"`);
    }

    if (
      lowerContent.includes('create') ||
      lowerContent.includes('add') ||
      lowerContent.includes('new agent')
    ) {
      if (this.debug) {
        logger.debug(`ConfigurationAgent: Detected CREATE operation`);
      }
      return this.parseCreateRequest(content);
    } else if (
      lowerContent.includes('update') ||
      lowerContent.includes('modify') ||
      lowerContent.includes('change') ||
      lowerContent.includes('edit')
    ) {
      if (this.debug) {
        logger.debug(`ConfigurationAgent: Detected UPDATE operation`);
      }
      return this.parseUpdateRequest(content);
    } else if (
      lowerContent.includes('delete') ||
      lowerContent.includes('remove') ||
      lowerContent.includes('drop')
    ) {
      if (this.debug) {
        logger.debug(`ConfigurationAgent: Detected DELETE operation`);
      }
      return this.parseDeleteRequest(content);
    } else if (
      lowerContent.includes('list') ||
      lowerContent.includes('show all') ||
      lowerContent.includes('get all')
    ) {
      if (this.debug) {
        logger.debug(`ConfigurationAgent: Detected LIST operation`);
      }
      return this.parseListRequest(content);
    } else if (
      lowerContent.includes('get') ||
      lowerContent.includes('show') ||
      lowerContent.includes('find')
    ) {
      if (this.debug) {
        logger.debug(`ConfigurationAgent: Detected READ operation`);
      }
      return this.parseReadRequest(content);
    }

    // Default to list operation if unclear
    if (this.debug) {
      logger.debug(
        `ConfigurationAgent: No clear operation detected, defaulting to LIST`
      );
    }
    return { operation: ConfigOperation.LIST };
  }

  /**
   * Parses create operation request
   */
  private parseCreateRequest(content: string): ConfigRequest {
    // Extract agent details from content
    const config: Partial<AgentConfig> = {};

    // Extract name with more flexible patterns
    let nameMatch = content.match(/name[:\s]+["']?([^"'\n]+)["']?/i);
    if (!nameMatch) {
      // Try "called X" or "named X" patterns
      nameMatch = content.match(/(?:called|named)\s+["']?([^"'\n,]+)["']?/i);
    }
    if (!nameMatch) {
      // Try "agent X" patterns
      nameMatch = content.match(/agent\s+["']?([^"'\n,]+)["']?/i);
    }
    if (nameMatch) config.name = nameMatch[1].trim();

    // Extract group with flexible patterns
    let groupMatch = content.match(/group[:\s]+["']?([^"'\n]+)["']?/i);
    if (!groupMatch) {
      // Try "in X group" patterns
      groupMatch = content.match(
        /in\s+(?:the\s+)?["']?([^"'\n,]+)["']?\s+group/i
      );
    }
    if (groupMatch) {
      config.group = groupMatch[1].trim();
    } else {
      // Default group if not specified
      config.group = 'default';
    }

    // Extract description with flexible patterns
    let descriptionMatch = content.match(
      /description[:\s]+["']?([^"'\n]+)["']?/i
    );
    if (!descriptionMatch) {
      // Try "for X" or "that does X" patterns
      descriptionMatch = content.match(
        /(?:for|that does|to)\s+["']?([^"'\n]+)["']?/i
      );
    }
    if (descriptionMatch) {
      config.description = descriptionMatch[1].trim();
    } else if (config.name) {
      // Default description based on name
      config.description = `Agent ${config.name} for automated tasks`;
    }

    // Extract mode
    const modeMatch = content.match(/mode[:\s]+["']?([^"'\n]+)["']?/i);
    if (modeMatch) config.mode = modeMatch[1].trim();

    return {
      operation: ConfigOperation.CREATE,
      config,
    };
  }

  /**
   * Parses update operation request
   */
  private parseUpdateRequest(content: string): ConfigRequest {
    const config: Partial<AgentConfig> = {};
    let agentId: string | undefined;
    let agentName: string | undefined;

    // Extract agent identifier
    const idMatch = content.match(/id[:\s]+["']?([^"'\s]+)["']?/i);
    if (idMatch) agentId = idMatch[1].trim();

    const nameMatch = content.match(/agent[:\s]+["']?([^"'\n]+)["']?/i);
    if (nameMatch) agentName = nameMatch[1].trim();

    // Extract fields to update (similar to create parsing)
    const descriptionMatch = content.match(
      /description[:\s]+["']?([^"'\n]+)["']?/i
    );
    if (descriptionMatch) config.description = descriptionMatch[1].trim();

    const modeMatch = content.match(/mode[:\s]+["']?([^"'\n]+)["']?/i);
    if (modeMatch) config.mode = modeMatch[1].trim();

    const intervalMatch = content.match(/interval[:\s]+(\d+)/i);
    if (intervalMatch) config.interval = parseInt(intervalMatch[1]);

    return {
      operation: ConfigOperation.UPDATE,
      agentId,
      agentName,
      config,
    };
  }

  /**
   * Parses delete operation request
   */
  private parseDeleteRequest(content: string): ConfigRequest {
    const idMatch = content.match(/id[:\s]+["']?([^"'\s]+)["']?/i);
    const nameMatch = content.match(/agent[:\s]+["']?([^"'\n]+)["']?/i);

    return {
      operation: ConfigOperation.DELETE,
      agentId: idMatch?.[1]?.trim(),
      agentName: nameMatch?.[1]?.trim(),
    };
  }

  /**
   * Parses read operation request
   */
  private parseReadRequest(content: string): ConfigRequest {
    const idMatch = content.match(/id[:\s]+["']?([^"'\s]+)["']?/i);
    const nameMatch = content.match(/agent[:\s]+["']?([^"'\n]+)["']?/i);

    return {
      operation: ConfigOperation.READ,
      agentId: idMatch?.[1]?.trim(),
      agentName: nameMatch?.[1]?.trim(),
    };
  }

  /**
   * Parses list operation request
   */
  private parseListRequest(content: string): ConfigRequest {
    const filters: Record<string, any> = {};

    // Extract optional filters
    const groupMatch = content.match(/group[:\s]+["']?([^"'\n]+)["']?/i);
    if (groupMatch) filters.group = groupMatch[1].trim();

    const modeMatch = content.match(/mode[:\s]+["']?([^"'\n]+)["']?/i);
    if (modeMatch) filters.mode = modeMatch[1].trim();

    return {
      operation: ConfigOperation.LIST,
      filters: Object.keys(filters).length > 0 ? filters : undefined,
    };
  }

  /**
   * Handles the configuration operation based on the request
   */
  private async handleConfigOperation(
    request: ConfigRequest
  ): Promise<ConfigResponse> {
    switch (request.operation) {
      case ConfigOperation.CREATE:
        return await this.createAgent(request.config!);
      case ConfigOperation.READ:
        return await this.readAgent(request.agentId, request.agentName);
      case ConfigOperation.UPDATE:
        return await this.updateAgent(
          request.agentId,
          request.agentName,
          request.config!
        );
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
   * Creates a new agent configuration in the database
   */
  private async createAgent(
    config: Partial<AgentConfig>
  ): Promise<ConfigResponse> {
    try {
      // Validate required fields
      if (!config.name || !config.group || !config.description) {
        return {
          success: false,
          message:
            'Missing required fields: name, group, and description are required',
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
  private async readAgent(
    agentId?: string,
    agentName?: string
  ): Promise<ConfigResponse> {
    try {
      let query: Postgres.Query;

      if (agentId) {
        query = new Postgres.Query('SELECT * FROM agents WHERE id = $1', [
          agentId,
        ]);
      } else if (agentName) {
        query = new Postgres.Query('SELECT * FROM agents WHERE name = $1', [
          agentName,
        ]);
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
  private async deleteAgent(
    agentId?: string,
    agentName?: string
  ): Promise<ConfigResponse> {
    try {
      // First, find the agent to get its details for the response
      const existingAgent = await this.readAgent(agentId, agentName);
      if (!existingAgent.success || !existingAgent.data) {
        return existingAgent;
      }

      const agent = existingAgent.data as AgentConfig;

      const query = new Postgres.Query('DELETE FROM agents WHERE id = $1', [
        agent.id,
      ]);
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
  private async listAgents(
    filters?: Record<string, any>
  ): Promise<ConfigResponse> {
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
   * Formats the response for display
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
