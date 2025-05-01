import { Injectable } from '@nestjs/common';
import { ConfigurationService } from '../config/configuration.js';
import { StarknetAgent, JsonConfig, load_json_config } from '@snakagent/agents';

@Injectable()
export class AgentFactory {
  private json_config: JsonConfig;
  private singletonAgent: StarknetAgent | null = null;
  private initialized: boolean = false;
  private initPromise: Promise<void>;

  constructor(private readonly config: ConfigurationService) {
    this.initPromise = this.initialize();
  }

  private async initialize() {
    try {
      const fs = await import('fs/promises');
      const path = await import('path');

      const projectRoot = path.resolve(process.cwd(), '..');
      const configPath = path.join(
        projectRoot,
        'config',
        'agents',
        'default.agent.json'
      );

      try {
        await fs.access(configPath);
      } catch (error) {
        console.error('Config file not found:', configPath);
        throw new Error(`Config file not found: ${configPath}`);
      }

      const jsonData = await fs.readFile(configPath, 'utf8');

      console.log('jsonData', jsonData);
      const json = JSON.parse(jsonData);

      if (!json) {
        throw new Error('Empty JSON configuration');
      }

      const { SystemMessage } = await import('@langchain/core/messages');

      const systemMessage = new SystemMessage(json.name);
      this.json_config = {
        prompt: systemMessage,
        name: json.name,
        interval: json.interval || 30000,
        chat_id: json.chat_id || 'default',
        mode: {
          interactive: true,
          autonomous: json.autonomous || false,
          recursionLimit: 15,
        },
        plugins: Array.isArray(json.plugins)
          ? json.plugins.map((tool: string) => tool.toLowerCase())
          : [],
        memory: json.memory || false,
      };

      console.log('json_config', this.json_config);

      this.initialized = true;
    } catch (error) {
      console.error('Error in initialize:', error);
      throw error;
    }
  }

  /**
   * Obtient l'instance unique d'agent, la crée si elle n'existe pas encore
   * @param agentMode - Mode de l'agent (par défaut 'agent')
   * @returns L'instance unique de StarknetAgent
   */
  async getAgent(agentMode: string = 'agent'): Promise<StarknetAgent> {
    if (!this.initialized) {
      await this.initPromise;
    }

    if (!this.json_config) {
      throw new Error(
        'Agent configuration is still undefined after initialization'
      );
    }

    try {
      // Si l'agent existe déjà, on le retourne
      if (this.singletonAgent) {
        return this.singletonAgent;
      }

      // Sinon, on crée une nouvelle instance
      const database = {
        database: process.env.POSTGRES_DB as string,
        host: process.env.POSTGRES_HOST as string,
        user: process.env.POSTGRES_USER as string,
        password: process.env.POSTGRES_PASSWORD as string,
        port: parseInt(process.env.POSTGRES_PORT as string),
      };

      this.singletonAgent = new StarknetAgent({
        provider: this.config.starknet.provider,
        accountPrivateKey: this.config.starknet.privateKey,
        accountPublicKey: this.config.starknet.publicKey,
        aiModel: this.config.ai.model,
        aiProvider: this.config.ai.provider,
        aiProviderApiKey: this.config.ai.apiKey,
        agentconfig: this.json_config,
        db_credentials: database,
        signature: 'key',
        agentMode: agentMode,
      });

      // Initialiser l'exécuteur React
      await this.singletonAgent.createAgentReactExecutor();

      console.log('Singleton agent created successfully');
      return this.singletonAgent;
    } catch (error) {
      console.error('Error creating singleton agent:', error);
      throw error;
    }
  }

  /**
   * Méthode maintenue pour compatibilité avec le code existant
   * @deprecated Utilisez getAgent() à la place
   */
  async createAgent(
    signature: string = 'singleton',
    agentMode: string = 'agent'
  ): Promise<StarknetAgent> {
    console.log('Deprecated createAgent called, using singleton agent instead');
    return this.getAgent(agentMode);
  }
}
