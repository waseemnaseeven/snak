import { IsNotEmpty } from 'class-validator';

export interface Message {
  conversation_id: number;
  sender_type: string;
  content: string;
  status: string;
}

export class AgentRequestDTO {
  @IsNotEmpty()
  request: Message;
  @IsNotEmpty()
  agent_id: number;
}

// TODO add agentgs to the request(to be able to devide the request to the agent,
// and also create same convesation name but for two distinc agents)
export class CreateConversationRequestDTO {
  @IsNotEmpty()
  conversation_name: string;
  @IsNotEmpty()
  agent_id: number;
}

export class DeleteConversationRequestDTO {
  @IsNotEmpty()
  conversation_id: number;
  @IsNotEmpty()
  agent_id: number;
}

export class ConversationsFromConversationIdDTO {
  @IsNotEmpty()
  conversation_id: number;
}

// Only to get all the conversations
export class ConversationsRequestDTO {
  @IsNotEmpty()
  agent_id: number;
}

export class getMessagesFromConversationIdDTO {
  @IsNotEmpty()
  conversation_id: number;
  @IsNotEmpty()
  agent_id: number;
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
  agent_id: number;
}

export class AgentDeletesRequestDTO {
  @IsNotEmpty()
  agent_id: number[];
}

export class AgentAddRequestDTO {
  @IsNotEmpty()
  agent: AgentInitializationDTO;
}
