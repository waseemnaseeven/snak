import { IsNotEmpty } from 'class-validator';
import { AgentMode } from '../../agent.js';

// TODO Create a common interfaces for the DTO of SNAK and SNAK-AP

// Interface unifiée pour la mémoire
export interface AgentMemory {
  enabled: boolean;
  short_term_memory_size: number;
}

// Configuration d'agent pour la base de données - Interface unifiée
export interface AgentConfigDatabase {
  name: string;
  group: string;
  description: string;
  lore: string[];
  objectives: string[];
  knowledge: string[];
  system_prompt?: string; // Prompt pré-construit (optionnel pour la création)
  interval: number;
  plugins: string[];
  memory: AgentMemory;
  mode: AgentMode;
  max_iterations: number;
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

export class AgentInitializationDTO {
  name: string;
  group: string;
  description: string;
  lore: string[];
  objectives: string[];
  knowledge: string[];
  system_prompt?: string;
  interval: number;
  plugins: string[];
  memory: AgentMemory;
  mode: AgentMode;
  max_iterations: number;
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
