import {
  Body,
  Controller,
  Get,
  Logger,
  NotFoundException,
  OnModuleInit,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  AgentAddRequestDTO,
  AgentDeleteRequestDTO,
  AgentInitializationDTO,
  AgentRequestDTO,
  InitializesRequestDTO,
} from './dto/agents.js';
import { StarknetAgent } from '@snakagent/agents';
import { AgentService } from './services/agent.service.js';
import { AgentResponseInterceptor } from './interceptors/response.js';
import { FileTypeGuard } from './guard/file-validator.guard.js';
import { FastifyRequest } from 'fastify';
import { promises as fs, stat } from 'fs';
import { getFilename } from './utils/index.js';
import { AgentFactory } from './agents.factory.js';
import { metrics } from '@snakagent/core';
import { Reflector } from '@nestjs/core';
import errorMap from './utils/error.js';

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

@Controller('key')
@UseInterceptors(AgentResponseInterceptor)
export class AgentsController implements OnModuleInit {
  private agent: StarknetAgent;
  private agents: StarknetAgent[] = [];
  constructor(
    private readonly agentService: AgentService,
    private readonly agentFactory: AgentFactory,
    private readonly reflector: Reflector
  ) {}

  async onModuleInit() {
    try {
      // this.agent = await this.agentFactory.createAgent('key', 'agent');
      // await this.agent.createAgentReactExecutor();
    } catch (error) {
      console.error('Failed to initialize AgentsController:', error);
      throw error;
    }
  }

  @Post('request')
  async handleUserRequest(@Body() userRequest: AgentRequestDTO) {
    try {
      const route = this.reflector.get('path', this.handleUserRequest);
      const agent = this.agents.find(
        (agent) => agent.getAgentConfig()?.name === userRequest.agent
      );
      if (!agent) {
        throw new ServerError('E01TA400');
      }
      const action = this.agentService.handleUserRequest(agent, userRequest);
      return await metrics.metricsAgentResponseTime(
        userRequest.agent,
        'key',
        route,
        action
      );
    } catch (error) {
      throw new ServerError('E03TA100');
    }
  }

  @Post('delete_agent')
  async deleteAgent(@Body() userRequest: AgentDeleteRequestDTO) {
    try {
      const agent = this.agents.find(
        (agent) => agent.getAgentConfig()?.name === userRequest.agent
      );
      if (!agent) {
        throw new ServerError('E01TA400');
      }
      this.agents = this.agents.filter(
        (agent) => agent.getAgentConfig()?.name !== userRequest.agent
      );
      console.log('Agent deleted:', userRequest.agent);
      return { status: 'success', data: 'Agent deleted' };
    } catch (error) {
      throw new ServerError('E04TA100');
    }
  }

  @Post('add_agent')
  async addAgent(@Body() userRequest: AgentAddRequestDTO) {
    try {
      console.log('Adding agent with data:', JSON.stringify(userRequest));
      const agent = await this.agentFactory.createAgent(userRequest.agent);
      await agent.createAgentReactExecutor();
      this.agents.push(agent);
      console.log('Agent added:', userRequest.agent.name);
      console.log('Agent config:', agent.getAgentConfig());
      console.log('Agent mode:', agent.getAgentMode());
      return { status: 'success', data: 'Agent added' };
    } catch (error) {
      throw new ServerError('E02TA200');
    }
  }
  @Post('init')
  async initAgent(@Body() userRequest: InitializesRequestDTO) {
    try {
      console.log('Initializing agent with data:', JSON.stringify(userRequest));
      this.agents = [];
      for (const agentConfig of userRequest.agents) {
        const agent = await this.agentFactory.createAgent(agentConfig);
        await agent.createAgentReactExecutor();
        this.agents.push(agent);
        console.log('Agent initialized:', agentConfig.name);
        console.log('Agent config:', agent.getAgentConfig());
        console.log('Agent mode:', agent.getAgentMode());
      }
      return { status: 'success', data: 'Agent initialized' };
    } catch (error) {
      throw new ServerError('E02TA200');
    }
  }

  @Get('status')
  async getAgentStatus() {
    return await this.agentService.getAgentStatus(this.agent);
  }
  @Get('health')
  async getAgentHealth() {
    return { status: 'success', data: 'Agent is healthy' };
  }

  @Post('upload_large_file')
  @UseGuards(
    new FileTypeGuard([
      'application/json',
      'application/zip',
      'image/jpeg',
      'image/png',
    ])
  )
  async uploadFile(@Req() req: FastifyRequest) {
    const logger = new Logger('Upload service');
    logger.debug({ message: 'The file has been uploaded' });
    return { status: 'success', data: 'The file has been uploaded.' };
  }

  @Post('delete_large_file')
  async deleteUploadFile(@Body() filename: { filename: string }) {
    const logger = new Logger('Upload service');

    const path = process.env.PATH_UPLOAD_DIR;
    if (!path) throw new Error(`PATH_UPLOAD_DIR must be defined in .env file`);

    const fullPath = await getFilename(filename.filename);
    const normalizedPath = fullPath.normalize();

    try {
      await fs.access(normalizedPath);
    } catch {
      throw new NotFoundException(`File not found : ${path}`);
    }

    try {
      await fs.unlink(fullPath);
      logger.debug({ message: `File ${filename.filename} has been deleted` });
      return { status: 'success', data: 'The file has been deleted.' };
    } catch (error) {
      logger.error('Error delete file', {
        error: {
          message: error.message,
          name: error.name,
          stack: error.stack,
        },
        filePath: fullPath,
      });
      switch (error.code) {
        case 'ENOENT':
          throw new NotFoundException(
            `File not found : ${path}${filename.filename}`
          ); // HttpException(404)
        case 'EACCES':
          throw new Error(
            `Insufficient permits for ${path}${filename.filename}`
          ); // HttpException(403)
        default:
          throw new Error(`Deletion error : ${error.message}`); // throw personalised error
      }
    }
  }
}
