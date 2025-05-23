import { IsNotEmpty } from 'class-validator';

// TODO Create a common interfaces for the DTO of SNAK and SNAK-AP

export class AgentRequestDTO {
  @IsNotEmpty()
  request: {
    agent_id: string;
    user_request: string;
  };
}

interface AgentPrompt {
  bio: string;
  lore: string[];
  objectives: string[];
  knowledge: string[];
}

// Need to change to the real agent config
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

export class WebsocketAgentRequestDTO {
  @IsNotEmpty()
  request: {
    agent_id: string;
    user_request: string;
  };
  @IsNotEmpty()
  socket_id: string;
}

export class MessageFromAgentIdDTO {
  @IsNotEmpty()
  agent_id: string;
  limit_message: number | undefined;
}
