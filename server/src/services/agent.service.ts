import { Injectable, Logger } from '@nestjs/common';

import {
  IAgentService,
  AgentExecutionResponse,
} from '../interfaces/agent-service.interface.js';
import { IAgent } from '../interfaces/agent.interface.js';
import {
  AgentRequestDTO,
  CreateConversationRequestDTO,
} from '../dto/agents.js';
import {
  AgentValidationError,
  AgentExecutionError,
} from '../../common/errors/agent.errors.js';
import { ConfigurationService } from '../../config/configuration.js';
import { StarknetTransactionError } from '../../common/errors/starknet.errors.js';
import { AgentSystem } from '@snakagent/agents';
import { check_if_conversation_exists } from '../utils/database.js';
import { Postgres } from '@snakagent/database';
import {
  AgentConfigSQL,
  ConversationSQL,
  MessageSQL,
} from '../interfaces/sql_interfaces.js';

@Injectable()
export class AgentService implements IAgentService {
  private readonly logger = new Logger(AgentService.name);

  constructor(private readonly config: ConfigurationService) {}

  async handleUserRequest(
    agent: AgentSystem,
    userRequest: AgentRequestDTO
  ): Promise<AgentExecutionResponse> {
    this.logger.debug({
      message: 'Processing agent request',
      request: userRequest.request,
    });

    try {
      // const status = await this.getAgentStatus(agent);
      // if (!status.isReady) {
      //   throw new AgentCredentialsError('Agent is not properly configured');
      // }

      // if (!(await agent.validateRequest(userRequest.request))) {
      //   throw new AgentValidationError('Invalid request format or parameters');
      // }

      const result = await agent.execute(userRequest.request);

      this.logger.debug({
        message: 'Agent request processed successfully',
        result,
      });

      return {
        status: 'success',
        data: result,
      };
    } catch (error: any) {
      this.logger.error('Error processing agent request', {
        error: {
          message: error.message,
          name: error.name,
          stack: error.stack,
        },
        request: userRequest.request,
      });

      if (error instanceof AgentValidationError) {
        throw error;
      }

      if (error.message?.includes('transaction')) {
        throw new StarknetTransactionError('Failed to execute transaction', {
          originalError: error.message,
          cause: error,
        });
      }

      throw new AgentExecutionError('Failed to process agent request', {
        originalError: error.message,
        cause: error,
      });
    }
  }

  async getAllAgents(): Promise<AgentConfigSQL[]> {
    try {
      const q = new Postgres.Query(`SELECT * FROM agents`);
      const res = await Postgres.query<AgentConfigSQL>(q);
      this.logger.debug(`All agents:', ${JSON.stringify(res)} `);
      return res;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async createConversation(
    request: CreateConversationRequestDTO
  ): Promise<void> {
    try {
      const is_conversation_exist = await check_if_conversation_exists(
        request.conversation_name
      );

      // TODO how to we want to handle  this case in the future of this app
      if (is_conversation_exist) {
        this.logger.debug(
          `Conversation already exists: ${request.conversation_name}`
        );
        return;
      }
      const q = new Postgres.Query(
        `INSERT INTO conversation (conversation_name, agent_id) VALUES ($1, $2) RETURNING conversation_id`,
        [request.conversation_name, request.agent_id]
      );
      const res = await Postgres.query<number>(q);
      this.logger.debug(`Conversation added:', ${JSON.stringify(res)} `);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async deleteConversation(conversation_id: number): Promise<void> {
    try {
      const is_conversation_exist = await check_if_conversation_exists(
        undefined,
        conversation_id
      );

      // TODO how to we want to handle  this case in the future of this app
      if (!is_conversation_exist) {
        this.logger.debug(`Conversation does not exist: ${conversation_id}`);
        return;
      }
      const q = new Postgres.Query(
        `DELETE FROM conversation WHERE conversation_name = $1 RETURNING conversation_id`,
        [conversation_id]
      );
      const res = await Postgres.query<number>(q);
      console.log(JSON.stringify(res));
      this.logger.debug(`Conversation deleted:', ${JSON.stringify(res)} `);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async getConversation(conversation_id: number): Promise<ConversationSQL> {
    try {
      const is_conversation_exist = await check_if_conversation_exists(
        undefined,
        conversation_id
      );

      // TODO how to we want to handle  this case in the future of this app
      if (!is_conversation_exist) {
        this.logger.debug(`Conversation does not exist: ${conversation_id}`);
        throw new Error(`Conversation does not exist: ${conversation_id}`);
      }
      const q = new Postgres.Query(
        `SELECT * FROM conversation WHERE conversation_id = $1`,
        [conversation_id]
      );
      const res = await Postgres.query<ConversationSQL>(q);
      this.logger.debug(`All conversations:', ${JSON.stringify(res)} `);
      return res[0];
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async getConversationsFromAgentId(
    agent_id: number
  ): Promise<ConversationSQL[]> {
    try {
      const q = new Postgres.Query(
        `SELECT * FROM conversation WHERE agent_id = $1`,
        [agent_id]
      );
      const res = await Postgres.query<ConversationSQL>(q);
      this.logger.debug(`All conversations:', ${JSON.stringify(res)} `);
      return res;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async getMessageFromConversation(
    conversation_id: number
  ): Promise<MessageSQL[]> {
    try {
      const is_conversation_exist = await check_if_conversation_exists(
        undefined,
        conversation_id
      );

      // TODO how to we want to handle  this case in the future of this app
      if (!is_conversation_exist) {
        this.logger.debug(`Conversation does not exist: ${conversation_id}`);
        throw new Error(`Conversation does not exist: ${conversation_id}`);
      }
      const q = new Postgres.Query(
        `SELECT * FROM message WHERE conversation_id = $1`,
        [conversation_id]
      );
      const res = await Postgres.query<MessageSQL>(q);
      this.logger.debug(`All messages:', ${JSON.stringify(res)} `);
      console.log(`All messages:', ${JSON.stringify(res)} `);
      return res;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async getAgentStatus(agent: IAgent): Promise<{
    isReady: boolean;
    walletConnected: boolean;
    apiKeyValid: boolean;
  }> {
    try {
      const credentials = agent.getAccountCredentials();

      // Check if the AI provider API keys are configured
      let apiKeyValid = false;
      try {
        const aiConfig = this.config.ai;
        apiKeyValid = Boolean(aiConfig && aiConfig.apiKey);
      } catch (error) {
        this.logger.debug('AI API key verification failed', error);
      }

      return {
        isReady: Boolean(credentials && apiKeyValid),
        walletConnected: Boolean(credentials.accountPrivateKey),
        apiKeyValid,
      };
    } catch (error) {
      this.logger.error('Error checking agent status', error);
      return {
        isReady: false,
        walletConnected: false,
        apiKeyValid: false,
      };
    }
  }
}
