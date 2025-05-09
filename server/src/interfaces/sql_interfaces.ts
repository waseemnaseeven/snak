export interface ConversationSQL {
  conversation_id: number;
  conversation_name: string;
  created_at: Date;
  status: string;
}

export interface MessageSQL {
  message_id: number;
  conversation_id: number;
  content: string;
  sender_type: string;
  created_at: Date;
}

export interface AgentPromptSQL {
  bio: string;
  lore: string[];
  objectives: string[];
  knowledge: string[];
}
export interface AgentConfigSQL {
  id : number;
  name: string;
  prompt: AgentPromptSQL;
  group_id: number;
  plugins: string[];
  interval: number;
  memory: {
    enabled: boolean;
    short_term_memory_size: number;
  };
}
