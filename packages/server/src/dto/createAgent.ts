import { IsNotEmpty } from 'class-validator';
import { SnakAgentInterface } from '@snakagent/core';

export class CreateAgentDTO {
  @IsNotEmpty()
  accountagent: SnakAgentInterface;
  @IsNotEmpty()
  anthropicApiKey: string;
  @IsNotEmpty()
  agentName: string;
}
