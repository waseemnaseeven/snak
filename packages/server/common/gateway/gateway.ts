import { AgentResponse } from '../../src/agents.controller.js';
import { AgentStorage } from '../../src/agents.storage.js';
import {
  AgentAddRequestDTO,
  AgentDeleteRequestDTO,
  WebsocketAgentAddRequestDTO,
  WebsocketAgentDeleteRequestDTO,
  WebsocketAgentRequestDTO,
  WebsocketGetAgentsRequestDTO,
} from '../../src/dto/agents.js';
import { AgentService } from '../../src/services/agent.service.js';
import ServerError from '../../src/utils/error.js';
import { OnModuleInit } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { logger, metrics } from '@snakagent/core';

@WebSocketGateway()
export class MyGateway implements OnModuleInit {
  constructor(
    private readonly agentService: AgentService,
    private readonly agentFactory: AgentStorage
  ) {
    console.log('Gateway initialized');
  }

  client: Map<string, Socket> = new Map();
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log('Client connected:', socket.id);
      this.client.set(socket.id, socket);
      socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
      });
    });
  }

  @SubscribeMessage('agents_request')
  async handleUserRequest(
    @MessageBody() userRequest: WebsocketAgentRequestDTO
  ): Promise<void> {
    try {
      //   const route = this.reflector.get('path', this.handleUserRequest);
      console.log('handleUserRequest:', userRequest.socket_id);
      const agent = this.agentFactory.getAgent(userRequest.agent_id);
      if (!agent) {
        throw new ServerError('E01TA400');
      }
      //   const action = this.agentService.handleUserRequest(agent, userRequest);

      //   const response_metrics = await metrics.metricsAgentResponseTime(
      //     userRequest.agent_id.toString(),
      //     'key',
      //     route,
      //     action
      //   );

      // Simulate a delay for the story chunks
      const storyChunks = [
        "Once upon a time, in a dense forest shrouded in mist, there lived a peculiar creature known only to the locals as 'The Whisperer.'",
        'No one had ever seen The Whisperer clearly, but many claimed to have heard its melodic voice drifting through the trees on foggy nights.',
        'In the nearby village of Elmwood, a young cartographer named Elara had become obsessed with mapping the unmappable forest.',
        'Her grandmother had told her stories of The Whisperer since childhood—tales of how it guided lost travelers home, asking only for a story in return.',
        'Armed with her compass, journal, and a determination that bordered on recklessness, Elara ventured into the forest one misty dawn.',
        'The first day passed uneventfully as she marked paths and noted landmarks, disappointed not to encounter anything unusual.',
        'But as twilight descended and the mist thickened around her, Elara heard it—a soft humming that seemed to come from everywhere and nowhere at once.',
      ];

      const client = this.client.get(userRequest.socket_id);
      if (!client) {
        console.error('Client not found');
        throw new ServerError('E01TA400'); // TODO Need to create a new error for socket not found
      }
      // Send initial response

      // Send each chunk with a delay
      for (let i = 0; i < storyChunks.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        logger.debug('Sending chunk:', storyChunks[i]);
        const response: AgentResponse = {
          status: 'success',
          data: {
            chunk: storyChunks[i],
            isLastChunk: i === storyChunks.length - 1,
          },
        };
        // TODO add to the response if its the last chunk or not
        client.emit('onAgentRequest', response);
      }
    } catch (error) {
      const client = this.client.get(userRequest.socket_id);
      if (!client) {
        console.error('Client not found');
        throw new ServerError('E01TA400'); // TODO Need to create a new error for socket not found
      }
      if (error instanceof ServerError) {
        client.emit('onAgentRequest', error);
      }
    }
  }

  @SubscribeMessage('init-agent')
  async addAgent(
    @MessageBody() userRequest: WebsocketAgentAddRequestDTO
  ): Promise<void> {
    try {
      const client = this.client.get(userRequest.socket_id);
      if (!client) {
        console.error('Client not found');
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
        console.error('Client not found');
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
    @MessageBody() userRequest: WebsocketGetAgentsRequestDTO
  ): Promise<void> {
    try {
      console.log('getAgents:', userRequest.socket_id);
      const client = this.client.get(userRequest.socket_id);
      if (!client) {
        console.error('Client not found');
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

  @SubscribeMessage('chunk')
  async newMessage(@MessageBody() body: any) {
    console.log('New message received:', body);

    // Define your story in chunks
    const storyChunks = [
      "Once upon a time, in a dense forest shrouded in mist, there lived a peculiar creature known only to the locals as 'The Whisperer.'",
      'No one had ever seen The Whisperer clearly, but many claimed to have heard its melodic voice drifting through the trees on foggy nights.',
      'In the nearby village of Elmwood, a young cartographer named Elara had become obsessed with mapping the unmappable forest.',
      'Her grandmother had told her stories of The Whisperer since childhood—tales of how it guided lost travelers home, asking only for a story in return.',
      'Armed with her compass, journal, and a determination that bordered on recklessness, Elara ventured into the forest one misty dawn.',
      'The first day passed uneventfully as she marked paths and noted landmarks, disappointed not to encounter anything unusual.',
      'But as twilight descended and the mist thickened around her, Elara heard it—a soft humming that seemed to come from everywhere and nowhere at once.',
    ];

    const client = this.client.get(body.id as string);
    if (!client) {
      console.error('Client not found');
      return;
    }
    // Send initial response
    client.emit('onRequest', {
      msg: 'Story Chunk 1',
      content: storyChunks[0],
      isLastChunk: false,
    });

    // Send each chunk with a delay
    for (let i = 0; i < storyChunks.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // 3-second delay between chunks

      client.emit('onRequest', {
        msg: `Story Chunk ${i + 2}`,
        content: storyChunks[i],
        isLastChunk: i === storyChunks.length - 1,
      });
    }

    // Send final message
    await new Promise((resolve) => setTimeout(resolve, 3000));
    this.server.emit('onRequest', {
      msg: 'Story complete. What did you think?',
      content: body,
    });

    return body;
  }
}
