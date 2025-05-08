import { Injectable } from '@nestjs/common';
import { ConfigurationService } from '../config/configuration.js';
import { JsonConfig, AgentSystemConfig, AgentSystem } from '@snakagent/agents';
import { Postgres } from '@snakagent/database';
import { SystemMessage } from '@langchain/core/messages';

export const createContextFromJson = (json: AgentConfig): string => {
  if (!json) {
    throw new Error(
      'Error while trying to parse your context from the config file.'
    );
  }
  const contextParts: string[] = [];

  // Objectives Section

  // Identity Section
  const identityParts: string[] = [];
  if (json.name) {
    identityParts.push(`Name: ${json.name}`);
    contextParts.push(`Your name : [${json.name}]`);
  }
  if (json.prompt.bio) {
    identityParts.push(`Bio: ${json.prompt.bio}`);
    contextParts.push(`Your Bio : [${json.prompt.bio}]`);
  }

  if (Array.isArray(json.prompt.objectives)) {
    contextParts.push(
      `Your objectives : [${json.prompt.objectives.join(']\n[')}]`
    );
  }

  // Knowledge Section
  if (Array.isArray(json.prompt.knowledge)) {
    contextParts.push(
      `Your knowledge : [${json.prompt.knowledge.join(']\n[')}]`
    );
  }

  return contextParts.join('\n');
};

export interface AgentPrompt {
  bio: string;
  lore: string[];
  objectives: string[];
  knowledge: string[];
}
export interface AgentConfig {
  name: string;
  prompt: AgentPrompt;
  plugins: string[];
  interval: number;
  memory: {
    enabled: boolean;
    short_term_memory_size: number;
  };
}
@Injectable()
export class AgentStorage {
  private agentConfigs: AgentConfig[] = [];
  private agentInstances: Map<string, AgentSystem> = new Map();
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
        new Postgres.Query(`
            CREATE TABLE IF NOT EXISTS agents (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            prompt agent_prompt NOT NULL DEFAULT (ROW('', '{}', '{}', '{}')),
            interval INTEGER NOT NULL DEFAULT 5,
            plugins TEXT[] NOT NULL DEFAULT '{}',
            memory memory NOT NULL DEFAULT (false, 5),
            UNIQUE (name)
            );`),
        new Postgres.Query(`
            CREATE TABLE IF NOT EXISTS conversation (
            conversation_id SERIAL PRIMARY KEY,
            conversation_name TEXT NOT NULL UNIQUE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            status TEXT NOT NULL DEFAULT 'success'
        );`),
        new Postgres.Query(`
        CREATE TABLE IF NOT EXISTS message (
            message_id SERIAL PRIMARY KEY,
            conversation_id INTEGER NOT NULL,
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
  private parseAgentPrompt(agent_prompt: any): AgentPrompt {
    const str_without_double_quote: string = agent_prompt.replace(/"/g, '');
    const agent_prompt_split: string[] = str_without_double_quote.split('{');
    for (let i = 0; i < agent_prompt_split.length; i++) {
      agent_prompt_split[i] = agent_prompt_split[i].replace(/}/g, '');
    }
    const AgentPrompt: AgentPrompt = {
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
      const q_res = await Postgres.query<AgentConfig>(q);
      this.agentConfigs = [...q_res];
      q_res.forEach((agent) => {
        agent.prompt = this.parseAgentPrompt(agent.prompt);
      });
      console.log('Agent configurations loaded:', this.agentConfigs);
      for (const agentConfig of this.agentConfigs) {
        await this.createAgent(agentConfig);
        console.log('Agent created:', agentConfig.name);
      }
      return q_res;
    } catch (error) {
      console.error('Error during agents_controller initialisation:', error);
      throw error;
    }
  }

  private async createAgent(agent_config: AgentConfig): Promise<AgentSystem> {
    try {
      const database = {
        database: process.env.POSTGRES_DB as string,
        host: process.env.POSTGRES_HOST as string,
        user: process.env.POSTGRES_USER as string,
        password: process.env.POSTGRES_PASSWORD as string,
        port: parseInt(process.env.POSTGRES_PORT as string),
      };

      console.log('Creating agent:', agent_config.prompt);
      // Check if the agent already exists in the databaseco
       const systemMessagefromjson = new SystemMessage(
        createContextFromJson(agent_config)
      );
      console.log('System message:', systemMessagefromjson);
      const json_config: JsonConfig = {
        name: agent_config.name,
        prompt: systemMessagefromjson,
        plugins: agent_config.plugins,
        chat_id: 'chat_id', // Need to be removed
        interval: agent_config.interval,
        memory: {
          enabled: agent_config.memory.enabled,
          shortTermMemorySize: agent_config.memory.short_term_memory_size,
        },
        mode: {
          interactive: true,
          autonomous: false,
          maxIteration: 15,
        },
      };


      const new_agent : AgentSystemConfig = {
        starknetProvider: this.config.starknet.provider,
        accountPrivateKey: this.config.starknet.privateKey,
        accountPublicKey: this.config.starknet.publicKey,
        modelsConfigPath : "/Users/hijodelaluna/snak_package/config/models/default.models.json",
        agentMode:
        json_config?.mode?.autonomous === true ? 'autonomous' : 'interactive',
        signature : "",
        databaseCredentials : database,
        agentConfigPath: json_config,
        debug: true,
      }
      const agent = new AgentSystem(new_agent);
      await agent.init();

      // Store for later reuse
      if (this.agentInstances.has(agent_config.name)) {
        console.log('Agent already exists, skipping creation.');
        const existingAgent = this.agentInstances.get(agent_config.name);
        if (existingAgent) {
          return existingAgent;
        }
        throw new Error('AgentExecutor not found in instances map');
      }
      this.agentInstances.set(agent_config.name, agent);
      return agent;
    } catch (error) {
      console.error('Error creating agent:', error);
      throw error;
    }
  }

  public async addAgent(agent_config: AgentConfig): Promise<void> {
    console.log('Adding agent:', agent_config.prompt);

    if (!this.initialized) {
      await this.initPromise;
    }
    const q = new Postgres.Query(
      `INSERT INTO agents (name, prompt, interval, plugins, memory) 
       VALUES ($1, ROW($2, $3, $4, $5), $6, $7, ROW($8, $9)) RETURNING *`,
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
      ]
    );
    const q_res = await Postgres.query<AgentConfig>(q);
    console.log('Agent added:', q_res);
    await this.createAgent(agent_config);
  }

  public getAgent(name: string): AgentSystem | undefined {
    if (!this.initialized) {
      return undefined;
    }
    return this.agentInstances.get(name);
  }

  public getAllAgents(): AgentSystem[] | undefined {
    if (!this.initialized) {
      return undefined;
    }

    return Array.from(this.agentInstances.values());
  }

  // Add ResponseDTO for Error Handling in any public function
  public async deleteAgent(name: string): Promise<void> {
    if (!this.initialized) {
      await this.initPromise;
    }
    const q = new Postgres.Query(
      `DELETE FROM agents WHERE name = $1 RETURNING *`,
      [name]
    );
    const q_res = await Postgres.query<AgentConfig>(q);
    console.log('Agent deleted:', q_res);
    if (this.agentInstances.has(name)) {
      this.agentInstances.delete(name);
    }
  }
}
