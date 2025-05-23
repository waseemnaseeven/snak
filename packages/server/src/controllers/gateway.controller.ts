import { AgentResponse } from './agents.controller.js';
import { AgentStorage } from '../agents.storage.js';
import { AgentService } from '../services/agent.service.js';
import ServerError from '../utils/error.js';
import { OnModuleInit } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import {
  logger,
  metrics,
  AgentAddRequestDTO,
  AgentDeleteRequestDTO,
  WebsocketAgentAddRequestDTO,
  WebsocketAgentDeleteRequestDTO,
  WebsocketAgentRequestDTO,
  WebsocketGetAgentsConfigRequestDTO,
  WebsocketGetMessagesRequestDTO,
} from '@snakagent/core';

// TODO remove this is for mock

function divideString(str: string, parts: number): string[] {
  const partLength = Math.ceil(str.length / parts);
  const result: string[] = [];

  for (let i = 0; i < str.length; i += partLength) {
    result.push(str.substring(i, i + partLength));
  }

  return result;
}
@WebSocketGateway({
  cors: {
    origin: 'http://localhost:4000',
    methods: ['GET', 'POST'],
    credentials: true,
  },
})
export class MyGateway implements OnModuleInit {
  constructor(
    private readonly agentService: AgentService,
    private readonly agentFactory: AgentStorage,
    private readonly reflector: Reflector
  ) {
    logger.info('Gateway initialized');
  }

  client: Map<string, Socket> = new Map();
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      logger.info('Client connected:', socket.id);
      this.client.set(socket.id, socket);
      socket.on('disconnect', () => {
        logger.error('Client disconnected:', socket.id);
      });
    });
  }

  @SubscribeMessage('agents_request')
  async handleUserRequest(
    @MessageBody() userRequest: WebsocketAgentRequestDTO
  ): Promise<void> {
    try {
      logger.info('handleUserRequest called');
      const route = this.reflector.get('path', this.handleUserRequest);
      logger.debug('handleUserRequest:', userRequest);
      // TODO add the agents check when the project will use the database instead of the mock
      const agent = this.agentFactory.getAgent(userRequest.request.agent_id);
      if (!agent) {
        throw new ServerError('E01TA400');
      }
      const action = this.agentService.handleUserRequest(
        agent,
        userRequest.request
      );
      const response_metrics = await metrics.metricsAgentResponseTime(
        userRequest.request.agent_id.toString(),
        'key',
        route,
        action
      );
      // Simulate a delay for the story chunks
      const storyChunks = divideString(response_metrics.data as string, 5);

      const client = this.client.get(userRequest.socket_id);
      if (!client) {
        logger.error('Client not found');
        throw new ServerError('E01TA400');
      }

      for (let i = 0; i < storyChunks.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        logger.debug('Sending chunk:', storyChunks[i]);
        const response: AgentResponse = {
          status: 'success',
          data: {
            chunk: storyChunks[i],
            isLastChunk: i === storyChunks.length - 1,
          },
        };
        client.emit('onAgentRequest', response);
      }
    } catch (error) {
      const client = this.client.get(userRequest.socket_id);
      if (!client) {
        logger.error('Client not found');
        throw new ServerError('E01TA400');
      }
      if (error instanceof ServerError) {
        client.emit('onAgentRequest', error);
      }
    }
  }

  @SubscribeMessage('init_agent')
  async addAgent(
    @MessageBody() userRequest: WebsocketAgentAddRequestDTO
  ): Promise<void> {
    try {
      logger.info('init_agent called');
      const client = this.client.get(userRequest.socket_id);
      if (!client) {
        logger.error('Client not found');
        throw new ServerError('E01TA400'); // TODO Need to create a new error for socket not found
      }
      await this.agentFactory.addAgent(userRequest.agent);
      const response: AgentResponse = {
        status: 'success',
        data: `Agent ${userRequest.agent.name} added`,
      };
      client.emit('onInitAgentRequest', response);
    } catch (error) {
      logger.error('Error in addAgent:', error);
      throw new ServerError('E02TA200');
    }
  }

  @SubscribeMessage('delete_agent')
  async deleteAgent(
    @MessageBody() userRequest: WebsocketAgentDeleteRequestDTO
  ): Promise<void> {
    try {
      const client = this.client.get(userRequest.socket_id);
      if (!client) {
        logger.error('Client not found');
        throw new ServerError('E01TA400'); // TODO Need to create a new error for socket not found
      }
      const agent = this.agentFactory.getAgent(userRequest.agent_id);
      if (!agent) {
        throw new ServerError('E01TA400');
      }
      await this.agentFactory.deleteAgent(userRequest.agent_id);
      const response: AgentResponse = {
        status: 'success',
        data: `Agent ${userRequest.agent_id} deleted`,
      };
      client.emit('onDeleteAgentRequest', response);
    } catch (error) {
      if (error instanceof ServerError) {
        throw error;
      }
      throw new ServerError('E02TA300');
    }
  }

  @SubscribeMessage('get_agents')
  async getAgents(
    @MessageBody() userRequest: WebsocketGetAgentsConfigRequestDTO
  ): Promise<void> {
    try {
      logger.info('getAgents called');
      const client = this.client.get(userRequest.socket_id);
      if (!client) {
        logger.error('Client not found');
        throw new ServerError('E01TA400'); // TODO Need to create a new error for socket not found
      }
      const agents = await this.agentService.getAllAgents();
      if (!agents) {
        throw new ServerError('E01TA400');
      }
      const response: AgentResponse = {
        status: 'success',
        data: agents,
      };
      client.emit('onGetAgentsRequest', response);
    } catch (error) {
      logger.error('Error in getAgents:', error);
      throw new ServerError('E05TA100');
    }
  }

  @SubscribeMessage('get_messages')
  async getMessages(
    @MessageBody() userRequest: WebsocketGetMessagesRequestDTO
  ): Promise<void> {
    try {
      logger.info('getMessages called');
      const client = this.client.get(userRequest.socket_id);
      if (!client) {
        logger.error('Client not found');
        throw new ServerError('E01TA400'); // TODO Need to create a new error for socket not found
      }
      const messages = await this.agentService.getMessageFromAgentId({
        agent_id: userRequest.agent_id,
        limit_message: userRequest.limit_message,
      });
      if (!messages) {
        throw new ServerError('E01TA400');
      }
      const response: AgentResponse = {
        status: 'success',
        data: messages,
      };
      client.emit('onGetMessagesRequest', response);
    } catch (error) {
      logger.error('Error in getMessages:', error);
      throw new ServerError('E05TA100');
    }
  }
}
