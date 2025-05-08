import { AgentConfig } from '../../../config/jsonConfig.js';
import { StarknetAgentInterface } from '@snakagent/agents';

/**
 * Configuration pour le MCPOperatorAgent
 */
export interface MCPOperatorConfig {
  starknetAgent: StarknetAgentInterface;
  agentConfig: AgentConfig;
  configPath?: string;
}

/**
 * Interface pour les gestionnaires de mise à jour d'outils
 */
export type ToolUpdateHandler = (tools: any[]) => void;

/**
 * Types d'actions que l'agent MCP peut exécuter
 */
export type MCPAction = 
  'search' | 
  'add' | 
  'remove' | 
  'reload' | 
  'getTools' | 
  'listServers' | 
  'update' | 
  'reloadConnections';