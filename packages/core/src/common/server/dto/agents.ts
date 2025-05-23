import { IsNotEmpty } from 'class-validator';

// TODO Create a common interfaces for the DTO of SNAK and SNAK-AP

interface AgentPrompt {
  bio: string;
  lore: string[];
  objectives: string[];
  knowledge: string[];
}

// TODO Need to change to the real agent config
export interface AgentConfigDatabase {
  name: string;
  prompt: AgentPrompt;
  group: string;
  interval: number;
  plugins: string[];
}

export class AddAgentRequestDTO {
  @IsNotEmpty()
  agent: AgentConfigDatabase;
}

export class MessageFromAgentIdDTO {
  @IsNotEmpty()
  agent_id: string;
  limit_message: number | undefined;
}

// TODO Create a common interfaces for the DTO of SNAK and SNAK-APP

export interface MessageRequest {
  agent_id: string;
  user_request: string;
}

interface AgentMemory {
  enabled: boolean;
  short_term_memory_size: number;
}

interface AgentPrompt {
  bio: string;
  lore: string[];
  objectives: string[];
  knowledge: string[];
}

export class AgentInitializationDTO {
  name: string;
  prompt: AgentPrompt;
  group: string;
  interval: number;
  plugins: string[];
  memory: AgentMemory;
}

export class InitializesRequestDTO {
  @IsNotEmpty()
  agents: AgentInitializationDTO[];
}

export class AgentDeleteRequestDTO {
  @IsNotEmpty()
  agent_id: string;
}

export class AgentsDeleteRequestDTO {
  @IsNotEmpty()
  agent_id: string[];
}

export class AgentAddRequestDTO {
  @IsNotEmpty()
  agent: AgentInitializationDTO;
}

export class AgentRequestDTO {
  @IsNotEmpty()
  request: {
    agent_id: string;
    user_request: string;
  };
}

export class UpdateModelConfigDTO {
  @IsNotEmpty()
  provider: string;
  @IsNotEmpty()
  model_name: string;
  @IsNotEmpty()
  description: string;
}
