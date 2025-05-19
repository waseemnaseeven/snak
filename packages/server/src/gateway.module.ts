import { Module } from '@nestjs/common';
import { MyGateway } from '../common/gateway/gateway.js';
import { AgentService } from './services/agent.service.js';
import { AgentStorage } from './agents.storage.js';
import { ConfigurationService } from '../config/configuration.js';

@Module({
  providers: [MyGateway, AgentService, AgentStorage, ConfigurationService],
})
export class GatewayModule {}
