import { Injectable } from '@nestjs/common';
import { ConfigurationService } from '../config/configuration.js';
import {
  AgentConfig,
  AgentMode,
  AgentSystem,
  AgentSystemConfig,
  createContextFromJson,
} from '@snakagent/agents';
import { Postgres } from '@snakagent/database';
import { SystemMessage } from '@langchain/core/messages';
import { AgentPromptSQL, AgentConfigSQL } from './interfaces/sql_interfaces.js';

export interface AgentConfigJson {
  name: string;
  prompt: AgentPromptSQL;
  interval: number;
  plugins: string[];
  memory: {
    enabled: boolean;
    short_term_memory_size: number;
  };
}

@Injectable()
export class AgentStorage {
  private agentConfigs: AgentConfigSQL[] = [];
  private agentInstances: Map<number, AgentSystem> = new Map();
  private initialized: boolean = false;
  private initPromise: Promise<void>;
  constructor(private readonly config: ConfigurationService) {
    this.initPromise = this.initialize();
  }

  private async initalize_database() {
    try {
      const q = [
        new Postgres.Query(`
          CREATE TYPE agent_prompt AS (
            bio TEXT,
            lore TEXT[] ,
            objectives TEXT[],
            knowledge TEXT[]
          );`),
        new Postgres.Query(`
          CREATE TYPE memory AS (
              memory BOOLEAN,
              shortTermMemorySize INTEGER
          );`),
        // TODO : Use id as the unique
        new Postgres.Query(`
            CREATE TABLE IF NOT EXISTS agents (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            group_id INTEGER DEFAULT 0,
            prompt agent_prompt NOT NULL,
            interval INTEGER NOT NULL DEFAULT 5,
            plugins TEXT[] NOT NULL DEFAULT '{}',
            memory memory NOT NULL DEFAULT (false, 5)
            );`),
        new Postgres.Query(`
            CREATE TABLE IF NOT EXISTS conversation (
            conversation_id SERIAL PRIMARY KEY,
            agent_id INTEGER NOT NULL,
            conversation_name TEXT NOT NULL UNIQUE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            status TEXT NOT NULL DEFAULT 'success',
            FOREIGN KEY (agent_id) REFERENCES agents(id) ON DELETE CASCADE
        );`),
        new Postgres.Query(`
        CREATE TABLE IF NOT EXISTS message (
            message_id SERIAL PRIMARY KEY,
            conversation_id TEXT NOT NULL,
            content TEXT NOT NULL,
            sender_type TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (conversation_id) REFERENCES conversation(conversation_id) ON DELETE CASCADE
        );`),
        new Postgres.Query(`
            CREATE TABLE IF NOT EXISTS chat (
            id SERIAL PRIMARY KEY,
            agent_id INTEGER NOT NULL,
            conversation_name TEXT,
            messages message NOT NULL
        );`),
      ];
      for (const query of q) {
        await Postgres.query(query).catch((error) => {
          if (error.code === '42710') {
            console.log('Table already exists, skipping creation.');
            return;
          }
          console.error('Error creating table:', error);
        });
      }
      console.log('Database tables created successfully');
    } catch (error) {
      console.error('Error during agents_controller initialisation:', error);
      throw error;
    }
  }

  private async initialize() {
    try {
      if (this.initialized) {
        return;
      }
      console.log('Initializing AgentFactory...');
      console.log('Connecting to database...');
      console.log(process.env.POSTGRES_DB);
      console.log(process.env.POSTGRES_HOST);
      console.log(process.env.POSTGRES_USER);
      console.log(process.env.POSTGRES_PASSWORD);
      console.log(process.env.POSTGRES_PORT);
      await Postgres.connect({
        database: process.env.POSTGRES_DB as string,
        host: process.env.POSTGRES_HOST as string,
        user: process.env.POSTGRES_USER as string,
        password: process.env.POSTGRES_PASSWORD as string,
        port: parseInt(process.env.POSTGRES_PORT as string),
      });

      await this.initalize_database();
      await this.init_agents_config();
      this.initialized = true;
    } catch (error) {
      console.error('Error during agents_controller initialisation:', error);
      throw error;
    }
  }

  // After being return by the database the agent prompt is a string
  private parseAgentPrompt(agent_prompt: any): AgentPromptSQL {
    const str_without_double_quote: string = agent_prompt.replace(/"/g, '');
    const agent_prompt_split: string[] = str_without_double_quote.split('{');
    for (let i = 0; i < agent_prompt_split.length; i++) {
      agent_prompt_split[i] = agent_prompt_split[i].replace(/}/g, '');
    }
    const AgentPrompt: AgentPromptSQL = {
      bio: agent_prompt_split[0],
      lore: agent_prompt_split[1].split(','),
      objectives: agent_prompt_split[2].split(','),
      knowledge: agent_prompt_split[3].split(','),
    };
    return AgentPrompt;
  }
  private async init_agents_config() {
    try {
      const q = new Postgres.Query(`SELECT * FROM agents`);
      const q_res = await Postgres.query<AgentConfigSQL>(q);
      this.agentConfigs = [...q_res];
      q_res.forEach((agent) => {
        agent.prompt = this.parseAgentPrompt(agent.prompt);
      });
      console.log('Agent configurations loaded:', this.agentConfigs);
      for (const agentConfig of this.agentConfigs) {
        await this.createAgent(agentConfig);
        console.log('Agent created:', agentConfig.id);
      }
      return q_res;
    } catch (error) {
      console.error('Error during agents_controller initialisation:', error);
      throw error;
    }
  }

  private async createAgent(
    agent_config: AgentConfigSQL
  ): Promise<AgentSystem> {
    try {
      const database = {
        database: process.env.POSTGRES_DB as string,
        host: process.env.POSTGRES_HOST as string,
        user: process.env.POSTGRES_USER as string,
        password: process.env.POSTGRES_PASSWORD as string,
        port: parseInt(process.env.POSTGRES_PORT as string),
      };

      console.log('Creating agent:', agent_config.name);
      console.log('Agent config:', agent_config);
      console.log('Agent config prompt:', agent_config.prompt);
      const systemMessagefromjson = new SystemMessage(
        createContextFromJson(agent_config.prompt)
      );
      const json_config: AgentConfig = {
        name: agent_config.name,
        prompt: systemMessagefromjson,
        plugins: agent_config.plugins,
        chat_id: 'chat_id', // Need to be removed
        interval: agent_config.interval,
        memory: {
          enabled: agent_config.memory.enabled,
          shortTermMemorySize: agent_config.memory.short_term_memory_size,
        },
        maxIteration: 15,
        mode: AgentMode.INTERACTIVE,
      };

      const config: AgentSystemConfig = {
        starknetProvider: this.config.starknet.provider,
        accountPrivateKey: this.config.starknet.privateKey,
        accountPublicKey: this.config.starknet.publicKey,
        modelsConfigPath:
          '/Users/hijodelaluna/snak_package/config/models/default.models.json',
        agentMode: json_config.mode,
        signature: '',
        databaseCredentials: database,
        agentConfigPath: json_config,
      };

      const agent = new AgentSystem(config);

      await agent.init();
      // Store for later reuse
      if (this.agentInstances.has(agent_config.id)) {
        console.log('Agent already exists, skipping creation.');
        const existingAgent = this.agentInstances.get(agent_config.id);
        if (existingAgent) {
          return existingAgent;
        }
        throw new Error('AgentExecutor not found in instances map');
      }
      this.agentInstances.set(agent_config.id, agent);
      return agent;
    } catch (error) {
      console.error('Error creating agent:', error);
      throw error;
    }
  }

  public async addAgent(agent_config: AgentConfigJson): Promise<void> {
    console.log('Adding agent:', agent_config);
    if (!this.initialized) {
      await this.initPromise;
    }

    //     BEGIN;

    // -- Insérer une nouvelle ligne avec un groupe_id incrémenté
    // INSERT INTO votre_table (name, groupe_id, description)
    // SELECT
    //     'nom_à_insérer',  -- Remplacez par la valeur du nom
    //     COALESCE(MAX(groupe_id), 0) + 1,  -- Trouve le plus grand groupe_id pour ce nom et ajoute 1
    //     'description_à_insérer'  -- Remplacez par la valeur de la description
    // FROM votre_table
    // WHERE name = 'nom_à_insérer';  -- Filtre pour trouver les entrées avec le même nom

    // COMMIT;
    const q = new Postgres.Query(
      `INSERT INTO agents (name, prompt, interval, plugins, memory, group_id) 
VALUES ($1, ROW($2, $3, $4, $5), $6, $7, ROW($8, $9),     
    (
        CASE WHEN EXISTS (SELECT 1 FROM agents WHERE name = $10)
             THEN COALESCE((SELECT MAX(group_id) FROM agents WHERE name = $11), 0) + 1
             ELSE 0
        END
    )
) RETURNING *`,
      [
        agent_config.name,
        agent_config.prompt.bio,
        agent_config.prompt.lore,
        agent_config.prompt.objectives,
        agent_config.prompt.knowledge,
        agent_config.interval,
        agent_config.plugins,
        agent_config.memory.enabled,
        agent_config.memory.short_term_memory_size,
        agent_config.name,
        agent_config.name,
      ]
    );
    const q_res = await Postgres.query<AgentConfigSQL>(q);
    console.log('Agent added:', q_res);
    await this.createAgent(q_res[0]);
  }

  public getAgent(id: number): AgentSystem | undefined {
    if (!this.initialized) {
      return undefined;
    }
    return this.agentInstances.get(id);
  }

  public getAllAgents(): AgentSystem[] | undefined {
    if (!this.initialized) {
      return undefined;
    }

    return Array.from(this.agentInstances.values());
  }

  // Add ResponseDTO for Error Handling in any public function
  public async deleteAgent(id: number): Promise<void> {
    if (!this.initialized) {
      await this.initPromise;
    }
    const q = new Postgres.Query(
      `DELETE FROM agents WHERE name = $1 RETURNING *`,
      [id]
    );
    const q_res = await Postgres.query<AgentConfig>(q);
    console.log('Agent deleted:', q_res);
    if (this.agentInstances.has(id)) {
      this.agentInstances.delete(id);
    }
  }
}
