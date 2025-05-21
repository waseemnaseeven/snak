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
  id: string;
  name: string;
  group: string;
  prompt: any;
  interval: number;
  plugins: string[];
  memory: any;
}
