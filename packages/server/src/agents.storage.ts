import {
  Injectable,
  Inject,
  forwardRef,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import { ConfigurationService } from '../config/configuration.js';
import { DatabaseService } from './services/database.service.js';
import { SupervisorService } from './services/supervisor.service.js';
import { Postgres } from '@snakagent/database';
import {
  AgentConfig,
  ModelsConfig,
  ModelProviders,
  ModelLevelConfig,
  RawAgentConfig,
} from '@snakagent/core';
import { AgentConfigSQL, AgentMemorySQL } from './interfaces/sql_interfaces.js';
import { AgentSystemConfig, AgentSystem, AgentMode } from '@snakagent/agents';
import { SystemMessage } from '@langchain/core/messages';
import DatabaseStorage from '../common/database/database.js';

const logger = new Logger('AgentStorage');

/**
 * Service responsible for managing agent storage, configuration, and lifecycle
 */
@Injectable()
export class AgentStorage implements OnModuleInit {
  private agentConfigs: AgentConfigSQL[] = [];
  private agentInstances: Map<string, AgentSystem> = new Map();
  private initialized: boolean = false;

  constructor(
    private readonly config: ConfigurationService,
    private readonly databaseService: DatabaseService,
    @Inject(forwardRef(() => SupervisorService))
    private readonly supervisorService: SupervisorService
  ) {}

  async onModuleInit() {
    await this.initialize();
  }

  /**
   * Initialize models configuration with default values if not exists
   * @private
   */
  private async init_models_config() {
    try {
      logger.debug('Initializing models configuration');
      const q = new Postgres.Query(
        `SELECT EXISTS(SELECT * FROM models_config)`
      );
      const result = await Postgres.query<{ exists: boolean }>(q);

      if (!result[0].exists) {
        logger.debug('Models configuration not found, creating default config');

        const fast: ModelLevelConfig = {
          provider: ModelProviders.OpenAI,
          model_name: 'gpt-4o-mini',
          description: 'Optimized for speed and simple tasks.',
        };
        const smart: ModelLevelConfig = {
          provider: ModelProviders.Anthropic,
          model_name: 'claude-3-5-sonnet-latest',
          description: 'Optimized for complex reasoning.',
        };
        const cheap: ModelLevelConfig = {
          provider: ModelProviders.OpenAI,
          model_name: 'gpt-4o-mini',
          description: 'Good cost-performance balance.',
        };

        const q = new Postgres.Query(
          `INSERT INTO models_config (fast, smart, cheap) VALUES (ROW($1, $2, $3), ROW($4, $5, $6), ROW($7, $8, $9))`,
          [
            fast.provider,
            fast.model_name,
            fast.description,
            smart.provider,
            smart.model_name,
            smart.description,
            cheap.provider,
            cheap.model_name,
            cheap.description,
          ]
        );
        await Postgres.query(q);
      } else {
        logger.debug('Models configuration already exists, skipping creation.');
      }
    } catch (error) {
      logger.error('Error during models configuration initialization:', error);
      throw error;
    }
  }

  /**
   * Initialize the agent storage service
   * @private
   */
  private async initialize() {
    try {
      if (this.initialized) {
        return;
      }

      if (!this.databaseService.isInitialized()) {
        logger.log('Waiting for database initialization...');
        let attempts = 0;
        const maxAttempts = 10;
        const waitTime = 500;

        while (
          !this.databaseService.isInitialized() &&
          attempts < maxAttempts
        ) {
          await new Promise((resolve) => setTimeout(resolve, waitTime));
          attempts++;
          logger.debug(
            `Database initialization attempt ${attempts}/${maxAttempts}`
          );
        }

        if (!this.databaseService.isInitialized()) {
          throw new Error(
            `Database not initialized after ${maxAttempts} attempts`
          );
        }
      }

      await new Promise((resolve) => setTimeout(resolve, 500));

      await DatabaseStorage.connect();
      await this.init_models_config();
      await this.init_agents_config();
      this.initialized = true;
    } catch (error) {
      logger.error('Error during agent storage initialization:', error);
      this.initialized = false;
      throw error;
    }
  }

  /**
   * Parse agent configuration from database format
   * @param config - Raw configuration string from database
   * @returns Parsed ModelLevelConfig
   * @private
   */
  private parseAgentConfig(config: any): ModelLevelConfig {
    try {
      const content = config.trim().slice(1, -1);
      const parts = content.split(',');
      const model: ModelLevelConfig = {
        provider: parts[0],
        model_name: parts[1],
        description: parts[2],
      };
      return model;
    } catch (error) {
      logger.error('Error parsing agent config:', error);
      throw error;
    }
  }

  /**
   * Initialize agents configuration from database
   * @private
   */
  private async init_agents_config() {
    try {
      logger.debug('Initializing agents configuration');
      const q = new Postgres.Query(`SELECT * FROM agents`);
      const q_res = await Postgres.query<any>(q);
      this.agentConfigs = [...q_res];

      logger.debug(
        `Agents configuration loaded: ${JSON.stringify(this.agentConfigs)}`
      );

      for (const agentConfig of this.agentConfigs) {
        await this.createAgentInstance(agentConfig);
        logger.debug(`Agent instance created: ${JSON.stringify(agentConfig)}`);
      }

      return q_res;
    } catch (error) {
      logger.error('Error during agents configuration initialization:', error);
      throw error;
    }
  }

  /**
   * Get models configuration from database
   * @returns Promise<ModelsConfig> - The models configuration
   * @private
   */
  private async get_models_config(): Promise<ModelsConfig> {
    try {
      const q = new Postgres.Query(`SELECT * FROM models_config`);
      logger.debug(`Query to get models config: ${q}`);
      const q_res = await Postgres.query<ModelsConfig>(q);

      if (q_res.length === 0) {
        throw new Error('No models configuration found');
      }

      const fast = this.parseAgentConfig(q_res[0].fast);
      const smart = this.parseAgentConfig(q_res[0].smart);
      const cheap = this.parseAgentConfig(q_res[0].cheap);

      const modelsConfig: ModelsConfig = {
        fast: fast,
        smart: smart,
        cheap: cheap,
      };
      return modelsConfig;
    } catch (error) {
      logger.error('Error getting models configuration:', error);
      throw error;
    }
  }

  /**
   * Create an agent instance from configuration
   * @param agent_config - Agent configuration from database
   * @returns Promise<AgentSystem> - The created agent instance
   * @private
   */
  private async createAgentInstance(agent_config: any): Promise<AgentSystem> {
    try {
      const database = {
        database: process.env.POSTGRES_DB as string,
        host: process.env.POSTGRES_HOST as string,
        user: process.env.POSTGRES_USER as string,
        password: process.env.POSTGRES_PASSWORD as string,
        port: parseInt(process.env.POSTGRES_PORT as string),
      };

      logger.debug(
        `Creating agent instance with config: ${JSON.stringify(agent_config)}`
      );

      const systemPrompt =
        agent_config.system_prompt ||
        this.buildSystemPromptFromConfig({
          name: agent_config.name,
          description: agent_config.description,
          lore: agent_config.lore || [],
          objectives: agent_config.objectives || [],
          knowledge: agent_config.knowledge || [],
          mode: agent_config.mode,
        });

      const systemMessage = new SystemMessage(systemPrompt);

      const json_config: AgentConfig = {
        id: agent_config.id,
        name: agent_config.name,
        group: agent_config.group,
        description: agent_config.description,
        plugins: agent_config.plugins,
        interval: agent_config.interval,
        memory: {
          enabled: agent_config.memory?.enabled || false,
          shortTermMemorySize: agent_config.memory?.short_term_memory_size || 5,
        },
        chatId: `agent_${agent_config.id}`,
        maxIterations: agent_config.max_iterations || 15,
        mode: agent_config.mode || AgentMode.INTERACTIVE,
        prompt: systemMessage,
      };

      const modelsConfig = await this.get_models_config();
      logger.warn(modelsConfig);

      const config: AgentSystemConfig = {
        starknetProvider: this.config.starknet.provider,
        accountPrivateKey: this.config.starknet.privateKey,
        accountPublicKey: this.config.starknet.publicKey,
        modelsConfig: modelsConfig,
        agentMode: json_config.mode,
        databaseCredentials: database,
        agentConfigPath: json_config,
      };

      const agent = new AgentSystem(config);
      await agent.init();

      if (this.agentInstances.has(agent_config.id)) {
        logger.debug(
          `Agent with id ${agent_config.id} already exists, returning existing instance`
        );
        const existingAgent = this.agentInstances.get(agent_config.id);
        if (existingAgent) {
          return existingAgent;
        }
        throw new Error('AgentExecutor not found in instances map');
      }

      this.agentInstances.set(agent_config.id, agent);
      return agent;
    } catch (error) {
      console.error('Error creating agent instance:', error);
      throw error;
    }
  }

  /**
   * Create an agent and register it with the supervisor
   * @param agent_config - Agent configuration
   * @returns Promise<AgentSystem> - The created agent
   * @private
   */
  private async createAgent(
    agent_config: AgentConfigSQL
  ): Promise<AgentSystem> {
    try {
      const agent = await this.createAgentInstance(agent_config);

      if (this.supervisorService.isInitialized()) {
        const metadata = {
          name: agent_config.name,
          description: agent_config.description,
          group: agent_config.group,
        };

        await this.supervisorService.registerAgentWithSupervisor(
          agent_config.id,
          agent,
          metadata
        );

        logger.debug(`Agent ${agent_config.id} registered with supervisor`);
      } else {
        logger.warn(
          `Supervisor not initialized, agent ${agent_config.id} not registered with supervisor`
        );
      }

      return agent;
    } catch (error) {
      console.error('Error creating agent:', error);
      throw error;
    }
  }

  /**
   * Add a new agent to the system
   * @param agent_config - Raw agent configuration
   * @returns Promise<void>
   */
  public async addAgent(agent_config: RawAgentConfig): Promise<void> {
    logger.debug(`Adding agent with config: ${JSON.stringify(agent_config)}`);

    if (!this.initialized) {
      await this.initialize();
    }

    const baseName = agent_config.name;
    const group = agent_config.group;

    let finalName = baseName;
    const nameCheckQuery = new Postgres.Query(
      `SELECT name FROM agents WHERE "group" = $1 AND (name = $2 OR name LIKE $2 || '-%') ORDER BY LENGTH(name) DESC, name DESC LIMIT 1`,
      [group, baseName]
    );
    logger.debug(`Name check query: ${nameCheckQuery}`);
    const nameCheckResult = await Postgres.query<{ name: string }>(
      nameCheckQuery
    );

    if (nameCheckResult.length > 0) {
      const existingName = nameCheckResult[0].name;
      if (existingName === baseName) {
        finalName = `${baseName}-1`;
      } else {
        const escapedBaseName = baseName.replace(/[.*+?^${}()|[\\]]/g, '\\$&');
        const suffixMatch = existingName.match(
          new RegExp(`^${escapedBaseName}-(\\d+)$`)
        );
        if (suffixMatch && suffixMatch[1]) {
          const lastIndex = parseInt(suffixMatch[1], 10);
          finalName = `${baseName}-${lastIndex + 1}`;
        } else {
          logger.warn(
            `Unexpected name format found: ${existingName} for baseName: ${baseName} in group: ${group}. Attempting to suffix with -1.`
          );
          finalName = `${baseName}-1`;
        }
      }
    }

    const systemPrompt = this.buildSystemPromptFromConfig({
      name: finalName,
      description: agent_config.description,
      lore: agent_config.lore,
      objectives: agent_config.objectives,
      knowledge: agent_config.knowledge,
      mode: agent_config.mode,
    });

    console.log(agent_config);
    const q = new Postgres.Query(
      `INSERT INTO agents (name, "group", description, lore, objectives, knowledge, system_prompt, interval, plugins, memory, mode, max_iterations) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, ROW($10, $11), $12, $13) RETURNING *`,
      [
        finalName,
        group,
        agent_config.description,
        agent_config.lore,
        agent_config.objectives,
        agent_config.knowledge,
        systemPrompt,
        agent_config.interval,
        agent_config.plugins,
        agent_config.memory.enabled || false,
        agent_config.memory.shortTermMemorySize || 5,
        agent_config.mode,
        15,
      ]
    );
    const q_res = await Postgres.query<AgentConfigSQL>(q);
    logger.debug(`Agent added to database: ${JSON.stringify(q_res)}`);

    if (q_res.length > 0) {
      const newAgentDbRecord = q_res[0];
      const agentToCreate: AgentConfigSQL = newAgentDbRecord;

      await this.createAgent(agentToCreate);

      logger.debug(
        `Agent ${newAgentDbRecord.id} created and registered with supervisor`
      );
    } else {
      logger.error('Failed to add agent to database, no record returned.');
      throw new Error('Failed to add agent to database.');
    }
  }

  /**
   * Build system prompt from configuration components
   * @param promptComponents - Components to build the prompt from
   * @returns string - The built system prompt
   * @private
   */
  private buildSystemPromptFromConfig(promptComponents: {
    name?: string;
    description?: string;
    lore: string[];
    objectives: string[];
    knowledge: string[];
    mode?: AgentMode;
  }): string {
    const contextParts: string[] = [];

    if (promptComponents.name) {
      contextParts.push(`Your name : [${promptComponents.name}]`);
    }
    if (promptComponents.description) {
      contextParts.push(`Your Description : [${promptComponents.description}]`);
    }

    if (
      Array.isArray(promptComponents.lore) &&
      promptComponents.lore.length > 0
    ) {
      contextParts.push(`Your lore : [${promptComponents.lore.join(']\n[')}]`);
    }

    if (
      Array.isArray(promptComponents.objectives) &&
      promptComponents.objectives.length > 0
    ) {
      contextParts.push(
        `Your objectives : [${promptComponents.objectives.join(']\n[')}]`
      );
    }

    if (
      Array.isArray(promptComponents.knowledge) &&
      promptComponents.knowledge.length > 0
    ) {
      contextParts.push(
        `Your knowledge : [${promptComponents.knowledge.join(']\n[')}]`
      );
    }

    return contextParts.join('\n');
  }

  /**
   * Get an agent by ID
   * @param id - Agent ID
   * @returns AgentSystem | undefined - The agent instance or undefined if not found
   */
  public getAgent(id: string): AgentSystem | undefined {
    if (!this.initialized) {
      return undefined;
    }
    return this.agentInstances.get(id);
  }

  /**
   * Get all agent instances
   * @returns AgentSystem[] | undefined - Array of all agent instances or undefined if not initialized
   */
  public getAllAgents(): AgentSystem[] | undefined {
    if (!this.initialized) {
      return undefined;
    }

    return Array.from(this.agentInstances.values());
  }

  /**
   * Delete an agent from the system
   * @param id - Agent ID to delete
   * @returns Promise<void>
   */
  public async deleteAgent(id: string): Promise<void> {
    if (!this.initialized) {
      await this.initialize();
    }

    const q = new Postgres.Query(
      `DELETE FROM agents WHERE id = $1 RETURNING *`,
      [id]
    );
    const q_res = await Postgres.query<AgentConfigSQL>(q);
    logger.debug(`Agent deleted from database: ${JSON.stringify(q_res)}`);

    if (this.agentInstances.has(id)) {
      const agent = this.agentInstances.get(id);

      if (agent) {
        try {
          await agent.dispose();
        } catch (error) {
          logger.error(`Error disposing agent ${id}:`, error);
        }
      }

      this.agentInstances.delete(id);
    }

    if (this.supervisorService.isInitialized()) {
      try {
        await this.supervisorService.unregisterAgentFromSupervisor(id);
        logger.debug(`Agent ${id} unregistered from supervisor`);
      } catch (error) {
        logger.error(`Error unregistering agent ${id} from supervisor:`, error);
      }
    }
  }

  /**
   * Get supervisor service instance
   * @returns SupervisorService - The supervisor service instance
   */
  public getSupervisorService(): SupervisorService {
    return this.supervisorService;
  }

  /**
   * Execute a request through the supervisor
   * @param input - Input string for the request
   * @param config - Optional configuration for the request
   * @returns Promise<any> - The result of the request execution
   */
  public async executeRequestThroughSupervisor(
    input: string,
    config?: Record<string, any>
  ): Promise<any> {
    if (!this.supervisorService.isInitialized()) {
      throw new Error('Supervisor service not initialized');
    }

    return await this.supervisorService.executeRequest(input, config);
  }
}
