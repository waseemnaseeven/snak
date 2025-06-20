import { MessageRequest } from '@snakagent/core';
import { IAgent } from './agent.interface.js';
import { AgentSystem } from '@snakagent/agents';

export interface AgentExecutionResponse {
  status: 'success' | 'failure';
  data?: unknown;
  error?: {
    message: string;
    code?: string;
    details?: unknown;
  };
}

export interface AgentExecutionCallDataResponse {
  status: 'success' | 'failure';
  data?: unknown;
  error?: {
    message: string;
    code?: string;
    details?: unknown;
  };
}

export interface IAgentService {
  handleUserRequest(
    agent: AgentSystem | IAgent,
    userRequest: MessageRequest
  ): Promise<any>;
  getAgentStatus(agent: IAgent): Promise<{
    isReady: boolean;
    walletConnected: boolean;
    apiKeyValid: boolean;
  }>;
}
