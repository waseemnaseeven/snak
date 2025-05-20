import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  AgentAddRequestDTO,
  AgentDeleteRequestDTO,
  AgentRequestDTO,
  getMessagesFromAgentsDTO,
  AgentDeletesRequestDTO,
} from './dto/agents.js';
import { AgentService } from './services/agent.service.js';
import { AgentStorage } from './agents.storage.js';
import { metrics } from '@snakagent/core';
import { Reflector } from '@nestjs/core';
import { ServerError } from './utils/error.js';
import { logger } from '@snakagent/core';
export interface AgentResponse {
  status: 'success' | 'failure';
  data?: unknown;
}

@Controller('agents')
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

      const response_metrics = await metrics.metricsAgentResponseTime(
        userRequest.agent_id.toString(),
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

  @Post('init_agent')
  async addAgent(
    @Body() userRequest: AgentAddRequestDTO
  ): Promise<AgentResponse> {
    try {
      await this.agentFactory.addAgent(userRequest.agent);
      const response: AgentResponse = {
        status: 'success',
        data: `Agent ${userRequest.agent.name} added`,
      };
      return response;
    } catch (error) {
      logger.error('Error in addAgent:', error);
      throw new ServerError('E02TA200');
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
      const response: AgentResponse = {
        status: 'success',
        data: `Agent ${userRequest.agent_id} deleted`,
      };
      return response;
    } catch (error) {
      if (error instanceof ServerError) {
        throw error;
      }
      throw new ServerError('E02TA300');
    }
  }

  @Post('delete_agents')
  async deleteAgents(
    @Body() userRequest: AgentDeletesRequestDTO
  ): Promise<AgentResponse[]> {
    try {
      let arr_response: AgentResponse[] = [];
      for (const agentId of userRequest.agent_id) {
        const agent = this.agentFactory.getAgent(agentId);
        if (!agent) {
          throw new ServerError('E01TA400');
        }
        await this.agentFactory.deleteAgent(agentId);
        logger.error('Agent deleted:', agentId);
        const response: AgentResponse = {
          status: 'success',
          data: `Agent ${userRequest.agent_id} deleted`,
        };
        arr_response.push(response);
      }
      return arr_response;
    } catch (error) {
      if (error instanceof ServerError) {
        throw error;
      }
      throw new ServerError('E02TA300');
    }
  }

  // TODO: Implement createConversation function to support multiple conversations for the same agent
  // @Post('create_conversation')
  // async createConversation(
  //   @Body() userRequest: CreateConversationRequestDTO
  // ): Promise<AgentResponse> {
  //   try {
  //     const agent = this.agentFactory.getAgent(userRequest.agent_id);
  //     if (!agent) {
  //       throw new ServerError('E01TA400');
  //     }

  //     const conversation =
  //       await this.agentService.createConversation(userRequest);
  //     const response: AgentResponse = {
  //       status: 'success',
  //       data: conversation,
  //     };
  //     return response;
  //   } catch (error) {
  //     throw new ServerError('E02TA200');
  //   }
  // }

  @Post('get_messages_from_agents_id')
  async getMessageFromAgentsId(
    @Body() userRequest: getMessagesFromAgentsDTO
  ): Promise<AgentResponse> {
    try {
      const agent = this.agentFactory.getAgent(userRequest.agent_id);
      if (!agent) {
        throw new ServerError('E01TA400');
      }
      const messages = await this.agentService.getMessageFromAgentId(
        userRequest.agent_id,
        undefined
      );
      const response: AgentResponse = {
        status: 'success',
        data: messages,
      };
      return response;
    } catch (error) {
      logger.error('Error in getMessagesFromConversationName:', error);
      throw new ServerError('E05TA100');
    }
  }

  @Get('get_agents')
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
      logger.error('Error in getAgents:', error);
      throw new ServerError('E05TA100');
    }
  }

  // TODO: Implement the following methods
  @Post('requestSupervisor')
  async handleSupervisorRequest(
    @Body() userRequest: AgentRequestDTO
  ): Promise<AgentResponse> {
    try {
      const route = this.reflector.get('path', this.handleSupervisorRequest);
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
      logger.error('Error in handleSupervisorRequest:', error);
      throw new ServerError('E03TA100');
    }
  }

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
      logger.error('Error in getAgentStatus:', error);
      throw new ServerError('E05TA100');
    }
  }

  //   requestSupervisor(human_prompt)
  // requestAgent(agent_id, human_prompt)
  // initAgent(agent_config, models_config)
  // deleteAgent(agent_id)
  // deleteAgents([agent_ids])
  // startAgent(agent_id)
  // stopAgent(agent_id)
  // pauseAgent(agent_id)
  // resumeAgent(agent_id)
  // getAgentStatus(agent_id)
  // getAgentThread(agent_id, time_range)
  // storeAgentIteration(agent_id, agent_iteration)
  // storeHumanInput(agent_id, human_prompt)
  // storeAgentResponse(agent_id, agent_message)
  // storeAgentNextStep(agent_id, agent_next_steps)
  // storeAgentFinalAnswer(agent_id, agent_final_answer)
  // storeAgentAction(agent_id, agent_action)
  // interuptAgentThread(agent_id, human_prompt)
  // resetAgent(agent_id)
  // cloneAgent(agent_id, new_config)
  // switchAgentMode(agent_id, agent_mode)

  @Get('health')
  async getAgentHealth(): Promise<AgentResponse> {
    const response: AgentResponse = {
      status: 'success',
      data: 'Agent is healthy',
    };
    return response;
  }
}
