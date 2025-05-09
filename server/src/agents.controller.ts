import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  AgentAddRequestDTO,
  AgentDeleteRequestDTO,
  AgentRequestDTO,
  CreateConversationRequestDTO,
  ConversationsRequestDTO,
  getMessagesFromConversationIdDTO,
  DeleteConversationRequestDTO,
} from './dto/agents.js';
import { AgentService } from './services/agent.service.js';
import { AgentStorage } from './agents.storage.js';
import { metrics } from '@snakagent/core';
import { Reflector } from '@nestjs/core';
import errorMap from './utils/error.js';
// import { Postgres } from '@snakagent/database';

export class ServerError extends Error {
  errorCode: string;
  statusCode: number;
  constructor(errorCode: string) {
    const errorMessage = errorMap.get(errorCode) || 'Unknown error';
    super(errorMessage);
    this.name = 'ServerError';
    this.errorCode = errorCode;
    this.statusCode = 500;
    Object.setPrototypeOf(this, ServerError.prototype);
  }
}

export interface AgentResponse {
  status: 'success' | 'failure';
  data?: unknown;
}

@Controller('agents')
// @UseInterceptors(AgentResponseInterceptor)
export class AgentsController {
  constructor(
    private readonly agentService: AgentService,
    private readonly agentFactory: AgentStorage,
    private readonly reflector: Reflector
  ) {}

  @Post('request')
  async handleUserRequest(
    @Body() userRequest: AgentRequestDTO
  ): Promise<AgentResponse> {
    try {
      const route = this.reflector.get('path', this.handleUserRequest);
      const agent = this.agentFactory.getAgent(userRequest.agent_id);
      if (!agent) {
        throw new ServerError('E01TA400');
      }
      const action = this.agentService.handleUserRequest(agent, userRequest);
      await metrics.metricsAgentResponseTime(
        userRequest.agent_id.toString(),
        'key',
        route,
        action
      );
      const response: AgentResponse = {
        status: 'success',
        data: action,
      };
      return response;
    } catch (error) {
      console.log(process.env.POSTGRES_USER);
      console.log('Error in handleUserRequest:', error);
      throw new ServerError('E03TA100');
    }
  }

  @Post('delete_agent')
  async deleteAgent(
    @Body() userRequest: AgentDeleteRequestDTO
  ): Promise<AgentResponse> {
    try {
      const agent = this.agentFactory.getAgent(userRequest.agent_id);
      if (!agent) {
        throw new ServerError('E01TA400');
      }
      await this.agentFactory.deleteAgent(userRequest.agent_id);
      console.log('Agent deleted:', userRequest.agent_id);
      const response: AgentResponse = {
        status: 'success',
        data: `Agent ${userRequest.agent_id} deleted`,
      };
      return response;
    } catch (error) {
      throw new ServerError('E04TA100');
    }
  }

  @Post('add_agent')
  async addAgent(
    @Body() userRequest: AgentAddRequestDTO
  ): Promise<AgentResponse> {
    try {
      await this.agentFactory.addAgent(userRequest.agent);
      console.log('Agent added:', userRequest.agent);
      const response: AgentResponse = {
        status: 'success',
        data: `Agent ${userRequest.agent.name} added`,
      };
      return response;
    } catch (error) {
      console.log('Error in addAgent:', error);
      throw new ServerError('E02TA200');
    }
  }

  @Post('create_conversation')
  async createConversation(
    @Body() userRequest: CreateConversationRequestDTO
  ): Promise<AgentResponse> {
    try {
      const agent = this.agentFactory.getAgent(userRequest.agent_id);
      if (!agent) {
        throw new ServerError('E01TA400');
      }

      const conversation =
        await this.agentService.createConversation(userRequest);
      const response: AgentResponse = {
        status: 'success',
        data: conversation,
      };
      return response;
    } catch (error) {
      throw new ServerError('E02TA200');
    }
  }

  @Post('delete_conversation')
  async deleteConversation(
    @Body() userRequest: DeleteConversationRequestDTO
  ): Promise<AgentResponse> {
    try {
      const agent = this.agentFactory.getAgent(userRequest.agent_id);
      if (!agent) {
        throw new ServerError('E01TA400');
      }

      await this.agentService.deleteConversation(userRequest.conversation_id);
      const response: AgentResponse = {
        status: 'success',
        data: `Conversation ${userRequest.conversation_id} deleted`,
      };
      return response;
    } catch (error) {
      throw new ServerError('E02TA200');
    }
  }

  @Post('get_conversations_from_agent_id')
  async getConversationsFromAgentId(
    @Body() userRequest: ConversationsRequestDTO
  ): Promise<AgentResponse> {
    try {
      const agent = this.agentFactory.getAgent(userRequest.agent_id);
      if (!agent) {
        throw new ServerError('E01TA400');
      }
      const conversations = await this.agentService.getConversationsFromAgentId(
        userRequest.agent_id
      );
      const response: AgentResponse = {
        status: 'success',
        data: conversations,
      };
      return response;
    } catch (error) {
      console.log('Error in getAllConversations:', error);
      throw new ServerError('E05TA100');
    }
  }

  @Post('get_messages_from_conversation_id')
  async getMessagesFromConversationId(
    @Body() userRequest: getMessagesFromConversationIdDTO
  ): Promise<AgentResponse> {
    try {
      const agent = this.agentFactory.getAgent(userRequest.agent_id);
      if (!agent) {
        throw new ServerError('E01TA400');
      }
      const messages = await this.agentService.getMessageFromConversation(
        userRequest.conversation_id
      );
      const response: AgentResponse = {
        status: 'success',
        data: messages,
      };
      return response;
    } catch (error) {
      console.log('Error in getMessagesFromConversationName:', error);
      throw new ServerError('E05TA100');
    }
  }

  @Post('get_agents')
  async getAgents(): Promise<AgentResponse> {
    try {
      const agents = await this.agentService.getAllAgents();
      if (!agents) {
        throw new ServerError('E01TA400');
      }
      const response: AgentResponse = {
        status: 'success',
        data: agents,
      };
      return response;
    } catch (error) {
      console.log('Error in getAgents:', error);
      throw new ServerError('E05TA100');
    }
  }

  @Get('health')
  async getAgentHealth(): Promise<AgentResponse> {
    const response: AgentResponse = {
      status: 'success',
      data: 'Agent is healthy',
    };
    return response;
  }
}
