// packages/server/src/agents.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AgentService } from '../services/agent.service.js';
import { AgentStorage } from '../agents.storage.js';
import {
  AgentDeleteRequestDTO,
  AgentRequestDTO,
  getMessagesFromAgentsDTO,
  AgentDeletesRequestDTO,
} from '../dto/agents.js';
import { SupervisorService } from '../services/supervisor.service.js';
import { Reflector } from '@nestjs/core';
import { ServerError } from '../utils/error.js';
import {
  logger,
  metrics,
  MessageFromAgentIdDTO,
  AgentsDeleteRequestDTO,
  AgentAddRequestDTO,
} from '@snakagent/core';

export interface AgentResponse {
  status: 'success' | 'failure';
  data?: unknown;
}

export interface SupervisorRequestDTO {
  request: {
    content: string;
    agentId?: string;
  };
}

/**
 * Controller for handling agent-related operations
 */
@Controller('agents')
export class AgentsController {
  constructor(
    private readonly agentService: AgentService,
    private readonly agentFactory: AgentStorage,
    private readonly supervisorService: SupervisorService,
    private readonly reflector: Reflector
  ) {}

  /**
   * Handle user request to a specific agent
   * @param userRequest - The user request containing agent ID and content
   * @returns Promise<AgentResponse> - Response with status and data
   */
  @Post('request')
  async handleUserRequest(
    @Body() userRequest: AgentRequestDTO
  ): Promise<AgentResponse> {
    try {
      const route = this.reflector.get('path', this.handleUserRequest);
      const agent = this.supervisorService.getAgentInstance(
        userRequest.request.agent_id
      );
      if (!agent) {
        throw new ServerError('E01TA400');
      }

      const messageRequest = {
        agent_id: userRequest.request.agent_id,
        user_request: userRequest.request.content,
      };

      const action = this.agentService.handleUserRequest(agent, messageRequest);

      const response_metrics = await metrics.metricsAgentResponseTime(
        userRequest.request.agent_id.toString(),
        'key',
        route,
        action
      );

      const response: AgentResponse = {
        status: 'success',
        data: response_metrics,
      };
      logger.warn(JSON.stringify(action));
      return response;
    } catch (error) {
      logger.error('Error in handleUserRequest:', error);
      throw new ServerError('E03TA100');
    }
  }

  /**
   * Initialize and add a new agent
   * @param userRequest - Request containing agent configuration
   * @returns Promise<AgentResponse> - Response with status and confirmation message
   */
  @Post('init_agent')
  async addAgent(
    @Body() userRequest: AgentAddRequestDTO
  ): Promise<AgentResponse> {
    try {
      const newAgentConfig = await this.agentFactory.addAgent(
        userRequest.agent
      );

      await this.supervisorService.addAgentInstance(
        newAgentConfig.id,
        newAgentConfig
      );

      const response: AgentResponse = {
        status: 'success',
        data: `Agent ${newAgentConfig.name} added and registered with supervisor`,
      };
      return response;
    } catch (error) {
      logger.error('Error in addAgent:', error);
      throw new ServerError('E02TA200');
    }
  }

  /**
   * Get messages from a specific agent
   * @param userRequest - Request containing agent ID
   * @returns Promise<AgentResponse> - Response with agent messages
   */
  @Post('get_messages_from_agent')
  async getMessagesFromAgent(
    @Body() userRequest: MessageFromAgentIdDTO
  ): Promise<AgentResponse> {
    try {
      const agentConfig = this.agentFactory.getAgentConfig(
        userRequest.agent_id
      );
      if (!agentConfig) {
        throw new ServerError('E01TA400');
      }
      const messages =
        await this.agentService.getMessageFromAgentId(userRequest);
      const response: AgentResponse = {
        status: 'success',
        data: messages,
      };
      return response;
    } catch (error) {
      logger.error('Error in getMessagesFromAgent:', error);
      throw new ServerError('E04TA100');
    }
  }

  /**
   * Delete a specific agent
   * @param userRequest - Request containing agent ID to delete
   * @returns Promise<AgentResponse> - Response with deletion confirmation
   */
  @Post('delete_agent')
  async deleteAgent(
    @Body() userRequest: AgentDeleteRequestDTO
  ): Promise<AgentResponse> {
    try {
      const agentConfig = this.agentFactory.getAgentConfig(
        userRequest.agent_id
      );
      if (!agentConfig) {
        throw new ServerError('E01TA400');
      }

      await this.supervisorService.removeAgentInstance(userRequest.agent_id);
      await this.agentFactory.deleteAgent(userRequest.agent_id);

      const response: AgentResponse = {
        status: 'success',
        data: `Agent ${userRequest.agent_id} deleted and unregistered from supervisor`,
      };
      return response;
    } catch (error) {
      logger.error('Error in deleteAgent:', error);
      throw new ServerError('E05TA100');
    }
  }

  /**
   * Delete multiple agents
   * @param userRequest - Request containing array of agent IDs to delete
   * @returns Promise<AgentResponse[]> - Array of responses for each deletion
   */
  @Post('delete_agents')
  async deleteAgents(
    @Body() userRequest: AgentDeletesRequestDTO
  ): Promise<AgentResponse[]> {
    try {
      const responses: AgentResponse[] = [];

      for (const agentId of userRequest.agent_id) {
        try {
          const agentConfig = this.agentFactory.getAgentConfig(agentId);
          if (!agentConfig) {
            responses.push({
              status: 'failure',
              data: `Agent ${agentId} not found`,
            });
            continue;
          }

          await this.supervisorService.removeAgentInstance(agentId);
          await this.agentFactory.deleteAgent(agentId);

          responses.push({
            status: 'success',
            data: `Agent ${agentId} deleted and unregistered from supervisor`,
          });
        } catch (error) {
          logger.error(`Error deleting agent ${agentId}:`, error);
          responses.push({
            status: 'failure',
            data: `Failed to delete agent ${agentId}: ${error.message}`,
          });
        }
      }

      return responses;
    } catch (error) {
      logger.error('Error in deleteAgents:', error);
      throw new ServerError('E05TA100');
    }
  }

  /**
   * Get messages from multiple agents
   * @param userRequest - Request containing agent ID
   * @returns Promise<AgentResponse> - Response with messages from all agents
   */
  @Post('get_messages_from_agents')
  async getMessageFromAgentsId(
    @Body() userRequest: getMessagesFromAgentsDTO
  ): Promise<AgentResponse> {
    try {
      const agentConfig = this.agentFactory.getAgentConfig(
        userRequest.agent_id
      );
      if (!agentConfig) {
        logger.warn(`Agent ${userRequest.agent_id} not found`);
        throw new ServerError('E01TA400');
      }

      const messages = await this.agentService.getMessageFromAgentId({
        agent_id: userRequest.agent_id,
        limit_message: undefined,
      });

      const response: AgentResponse = {
        status: 'success',
        data: messages,
      };
      return response;
    } catch (error) {
      logger.error('Error in getMessageFromAgentsId:', error);
      throw new ServerError('E04TA100');
    }
  }

  /**
   * Get all agents
   * @returns Promise<AgentResponse> - Response with all agents
   */
  @Get('get_agents')
  async getAgents(): Promise<AgentResponse> {
    try {
      const agents = await this.agentService.getAllAgents();
      const response: AgentResponse = {
        status: 'success',
        data: agents,
      };
      return response;
    } catch (error) {
      logger.error('Error in getAgents:', error);
      throw new ServerError('E06TA100');
    }
  }

  /**
   * Get supervisor status
   * @returns Promise<AgentResponse> - Response with supervisor status
   */
  @Get('supervisor/status')
  async getSupervisorStatus(): Promise<AgentResponse> {
    try {
      const isInitialized = this.supervisorService.isInitialized();
      const supervisor = this.supervisorService.getSupervisor();

      const response: AgentResponse = {
        status: 'success',
        data: {
          initialized: isInitialized,
          supervisorAvailable: !!supervisor,
          registeredAgents:
            this.supervisorService.getAllAgentInstances()?.length || 0,
        },
      };
      return response;
    } catch (error) {
      logger.error('Error in getSupervisorStatus:', error);
      throw new ServerError('E07TA100');
    }
  }

  /**
   * Get agent status (alias for get_agents)
   * @returns Promise<AgentResponse> - Response with agents status
   */
  @Get('get_agent_status')
  async getAgentStatus(): Promise<AgentResponse> {
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
      logger.error('Error in getAgentStatus:', error);
      throw new ServerError('E05TA100');
    }
  }

  /**
   * Get agent thread information (alias for get_agents)
   * @returns Promise<AgentResponse> - Response with agents thread data
   */
  @Get('get_agent_thread')
  async getAgentThread(): Promise<AgentResponse> {
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
      logger.error('Error in getAgentThread:', error);
      throw new ServerError('E05TA100');
    }
  }

  /**
   * Health check endpoint
   * @returns Promise<AgentResponse> - Health status response
   */
  @Get('health')
  async getAgentHealth(): Promise<AgentResponse> {
    const response: AgentResponse = {
      status: 'success',
      data: 'Agent is healthy',
    };
    return response;
  }
}
