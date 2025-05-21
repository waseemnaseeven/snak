import { IsNotEmpty } from 'class-validator';

export interface Message {
  agent_id: string;
  sender_type: string;
  content: string;
  status: string;
}

export class AgentRequestDTO {
  @IsNotEmpty()
  request: Message;
  @IsNotEmpty()
  agent_id: string;
}

export class getMessagesFromAgentsDTO {
  @IsNotEmpty()
  agent_id: string;
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
  group: string;
  prompt: AgentPrompt;
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

export class AgentDeletesRequestDTO {
  @IsNotEmpty()
  agent_id: string[];
}

export class AgentAddRequestDTO {
  @IsNotEmpty()
  agent: AgentInitializationDTO;
}

export class UpdateModelConfigDTO {
  @IsNotEmpty()
  provider: string;
  @IsNotEmpty()
  model_name: string;
  @IsNotEmpty()
  description: string;
}
