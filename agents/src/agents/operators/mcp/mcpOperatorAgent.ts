import { BaseAgent, AgentType } from '../../core/baseAgent.js';
import { logger } from '@snakagent/core';
import { BaseMessage } from '@langchain/core/messages';
import { MCP_CONTROLLER } from '../../../services/mcp/src/mcp.js';
import { createMCPTools } from './tools.js';
import { MCPOperatorConfig, ToolUpdateHandler, MCPAction } from './types.js';

/**
 * Agent opérateur qui gère les outils et services MCP
 */
export class MCPOperatorAgent extends BaseAgent {
  private agentConfig: any;
  private mcpController: any | null = null;
  private mcpTools: any[] = [];
  private toolUpdateHandlers: ToolUpdateHandler[] = [];

  constructor(config: MCPOperatorConfig) {
    super('mcp-operator', AgentType.OPERATOR);
    this.agentConfig = config.agentConfig;
  }

  /**
   * Initialise l'agent MCP
   */
  public async init(): Promise<void> {
    try {
      logger.debug('MCPOperatorAgent: Starting initialization');
      
      if (!this.agentConfig.mcpServers || Object.keys(this.agentConfig.mcpServers).length === 0) {
        logger.warn('MCPOperatorAgent: No MCP servers configured. Some functionality will be limited.');
      } else {
        this.mcpController = MCP_CONTROLLER.fromJsonConfig(this.agentConfig);
        
        // Enregistrer pour recevoir les mises à jour d'outils MCP
        this.mcpController.onToolsUpdate((updatedTools: any[]) => {
          logger.debug(`MCPOperatorAgent: Received tools update with ${updatedTools.length} tools`);
          // Notifier les gestionnaires d'événements enregistrés
          this.notifyToolsUpdate(updatedTools);
        });
        
        await this.mcpController.initializeConnections();
        logger.debug('MCPOperatorAgent: MCP controller initialized successfully');
      }
      
      this.mcpTools = createMCPTools(this.mcpController);
      logger.debug(`MCPOperatorAgent: Created ${this.mcpTools.length} MCP tools`);
      
      logger.debug('MCPOperatorAgent: Initialized successfully');
    } catch (error) {
      logger.error(`MCPOperatorAgent: Initialization failed: ${error}`);
      throw new Error(`MCPOperatorAgent initialization failed: ${error}`);
    }
  }

  /**
   * Enregistre un gestionnaire pour les mises à jour d'outils
   */
  public onToolsUpdate(handler: ToolUpdateHandler): void {
    this.toolUpdateHandlers.push(handler);
    logger.debug('MCPOperatorAgent: Registered new tool update handler');
  }

  /**
   * Notifie tous les gestionnaires enregistrés d'une mise à jour des outils
   */
  private notifyToolsUpdate(tools: any[]): void {
    for (const handler of this.toolUpdateHandlers) {
      try {
        handler(tools);
      } catch (error) {
        logger.error(`MCPOperatorAgent: Error in tool update handler: ${error}`);
      }
    }
  }

  /**
   * Exécute une action avec l'agent MCP
   * @param input L'entrée à traiter
   * @param config Configuration optionnelle
   */
  public async execute(
    input: string | BaseMessage | any,
  ): Promise<any> {
    try {
      logger.debug('MCPOperatorAgent: Executing action');
      
      if (!this.mcpController) {
        return 'MCP controller is not initialized. Cannot execute action.';
      }
      
      let action: MCPAction;
      let params: any = {};
      
      // Extraire l'action et les paramètres de l'entrée
      if (typeof input === 'string') {
        try {
          const parsed = JSON.parse(input);
          action = parsed.action || 'search';
          params = parsed.params || {};
        } catch (e) {
          // Si ce n'est pas du JSON valide, considérer comme une requête de recherche
          action = 'search';
          params = { query: input };
        }
      } else if (input instanceof BaseMessage) {
        const content = input.content;
        if (typeof content === 'string') {
          try {
            const parsed = JSON.parse(content);
            action = parsed.action || 'search';
            params = parsed.params || {};
          } catch (e) {
            action = 'search';
            params = { query: content };
          }
        } else {
          action = 'search';
          params = { query: JSON.stringify(content) };
        }
      } else if (input && typeof input === 'object') {
        action = input.action || 'search';
        params = input.params || {};
      } else {
        return 'Invalid input format';
      }
      
      logger.debug(`MCPOperatorAgent: Executing action '${action}' with params: ${JSON.stringify(params)}`);
      
      // Exécuter l'action appropriée
      switch (action) {
        case 'search':
          return this.searchMCP(params.query, params.serverName);
        case 'add':
          if (params.qualifiedName) {
            // Ajouter un serveur Smithery
            return this.addSmitheryServer(params.serverName, params.qualifiedName, params.env || {});
          } else {
            // Ajouter un serveur MCP standard
            return this.addMCPServer(params.serverName, params.serverUrl, params.serverKey);
          }
        case 'remove':
          return this.removeMCPServer(params.serverName);
        case 'reload':
          return this.reloadMCP();
        case 'getTools':
          return this.getMCPTools();
        case 'listServers':
          return this.listMCPServers();
        case 'update':
          if (params.qualifiedName) {
            // Mettre à jour un serveur Smithery
            return this.updateSmitheryServer(params.serverName, params.qualifiedName, params.env || {});
          } else {
            // Mettre à jour un serveur MCP standard
            return this.updateMCPServer(params.serverName, params.serverUrl, params.serverKey);
          }
        case 'reloadConnections':
          return this.reloadMCPConnections();
        default:
          return `Unknown action: ${action}`;
      }
    } catch (error) {
      logger.error(`MCPOperatorAgent: Execution error: ${error}`);
      return `Error executing MCP action: ${error}`;
    }
  }

  /**
   * Recherche dans les serveurs MCP
   */
  private async searchMCP(query: string, serverName?: string): Promise<string> {
    try {
      const results = await this.mcpController.search(query, serverName);
      return JSON.stringify(results);
    } catch (error) {
      logger.error(`MCPOperatorAgent: Error searching MCP: ${error}`);
      return `Failed to search MCP: ${error}`;
    }
  }

  /**
   * Ajoute un serveur MCP standard
   */
  private async addMCPServer(serverName: string, serverUrl: string, serverKey: string): Promise<string> {
    try {
      await this.mcpController.addServer(serverName, serverUrl, serverKey);
      return `MCP server ${serverName} added successfully.`;
    } catch (error) {
      logger.error(`MCPOperatorAgent: Error adding MCP server: ${error}`);
      return `Failed to add MCP server: ${error}`;
    }
  }

  /**
   * Ajoute un serveur Smithery
   */
  private async addSmitheryServer(serverName: string, qualifiedName: string, env: Record<string, string>): Promise<string> {
    try {
      // Utiliser la nouvelle méthode d'ajout de serveur Smithery
      const result = await this.mcpController.addSmitheryServer(serverName, qualifiedName, env);
      return result;
    } catch (error) {
      logger.error(`MCPOperatorAgent: Error adding Smithery server: ${error}`);
      return `Failed to add Smithery server: ${error}`;
    }
  }

  /**
   * Supprime un serveur MCP
   */
  private async removeMCPServer(serverName: string): Promise<string> {
    try {
      await this.mcpController.removeServer(serverName);
      return `MCP server ${serverName} removed successfully.`;
    } catch (error) {
      logger.error(`MCPOperatorAgent: Error removing MCP server: ${error}`);
      return `Failed to remove MCP server: ${error}`;
    }
  }

  /**
   * Recharge la configuration MCP
   */
  private async reloadMCP(): Promise<string> {
    try {
      await this.mcpController.reload();
      return 'MCP controller reloaded successfully.';
    } catch (error) {
      logger.error(`MCPOperatorAgent: Error reloading MCP: ${error}`);
      return `Failed to reload MCP: ${error}`;
    }
  }

  /**
   * Recharge les connexions MCP sans changer la configuration
   */
  private async reloadMCPConnections(): Promise<string> {
    try {
      await this.mcpController.reloadConnections();
      return 'MCP connections reloaded successfully.';
    } catch (error) {
      logger.error(`MCPOperatorAgent: Error reloading MCP connections: ${error}`);
      return `Failed to reload MCP connections: ${error}`;
    }
  }

  /**
   * Obtient la liste des outils MCP
   */
  private async getMCPTools(): Promise<string> {
    try {
      const tools = this.mcpController.getTools();
      return JSON.stringify(tools.map((t: any) => ({ name: t.name, description: t.description })));
    } catch (error) {
      logger.error(`MCPOperatorAgent: Error getting MCP tools: ${error}`);
      return `Failed to get MCP tools: ${error}`;
    }
  }

  /**
   * Liste les serveurs MCP configurés
   */
  private async listMCPServers(): Promise<string> {
    try {
      const servers = this.mcpController.getServers();
      return JSON.stringify(servers);
    } catch (error) {
      logger.error(`MCPOperatorAgent: Error listing MCP servers: ${error}`);
      return `Failed to list MCP servers: ${error}`;
    }
  }

  /**
   * Met à jour un serveur MCP standard
   */
  private async updateMCPServer(serverName: string, serverUrl?: string, serverKey?: string): Promise<string> {
    try {
      await this.mcpController.updateServer(serverName, serverUrl, serverKey);
      return `MCP server ${serverName} updated successfully.`;
    } catch (error) {
      logger.error(`MCPOperatorAgent: Error updating MCP server: ${error}`);
      return `Failed to update MCP server: ${error}`;
    }
  }

  /**
   * Met à jour un serveur Smithery
   */
  private async updateSmitheryServer(serverName: string, qualifiedName: string, env: Record<string, string>): Promise<string> {
    try {
      // Utiliser la nouvelle méthode de mise à jour de serveur Smithery
      const result = await this.mcpController.updateSmitheryServer(serverName, qualifiedName, env);
      return result;
    } catch (error) {
      logger.error(`MCPOperatorAgent: Error updating Smithery server: ${error}`);
      return `Failed to update Smithery server: ${error}`;
    }
  }

  /**
   * Obtient les outils MCP
   */
  public getMCPToolList(): any[] {
    return [...this.mcpTools];
  }

  /**
   * Nettoie les ressources de l'agent
   */
  public async cleanup(): Promise<void> {
    try {
      if (this.mcpController) {
        await this.mcpController.close();
        this.mcpController = null;
      }
      this.toolUpdateHandlers = [];
      logger.debug('MCPOperatorAgent: Cleaned up resources');
    } catch (error) {
      logger.error(`MCPOperatorAgent: Error during cleanup: ${error}`);
    }
  }
}