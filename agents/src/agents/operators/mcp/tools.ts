import { z } from 'zod';
import { tool } from '@langchain/core/tools';
import { logger } from '@snakagent/core';

/**
 * Crée les outils MCP disponibles pour l'agent
 * @param mcpController Le contrôleur MCP
 * @returns Un tableau d'outils MCP
 */
export function createMCPTools(mcpController: any): any[] {
  // Outil de recherche MCP
  const searchMCPTool = tool(
    async ({ query, serverName }): Promise<string> => {
      try {
        if (!mcpController) {
          return 'MCP controller is not initialized.';
        }

        const results = await mcpController.search(query, serverName);
        
        if (Array.isArray(results) && results.length === 0) {
          return 'No MCP servers or Smithery servers found for this query.';
        }
        
        return JSON.stringify(results);
      } catch (error) {
        logger.error(`MCPOperatorAgent: Error searching MCP: ${error}`);
        return `Failed to search MCP: ${error}`;
      }
    },
    {
      name: 'searchMCPTool',
      schema: z.object({
        query: z.string().describe('The search query for MCP or Smithery servers'),
        serverName: z.string().optional().describe('Optional server name to search on a specific MCP server')
      }),
      description: 'Search MCP servers or Smithery registry for information matching the query',
    }
  );

  // Outil d'ajout de serveur MCP avec support pour Smithery
  const addMCPTool = tool(
    async ({ serverName, qualifiedName, serverUrl, serverKey, env }): Promise<string> => {
      try {
        if (!mcpController) {
          return 'MCP controller is not initialized.';
        }

        if (qualifiedName) {
          // Ajouter un serveur Smithery
          return await mcpController.addSmitheryServer(serverName, qualifiedName, env || {});
        } else if (serverUrl && serverKey) {
          // Ajouter un serveur MCP standard
          await mcpController.addServer(serverName, serverUrl, serverKey);
          return `MCP server ${serverName} added successfully.`;
        } else {
          return 'Either qualifiedName (for Smithery) or both serverUrl and serverKey (for standard MCP) are required.';
        }
      } catch (error) {
        logger.error(`MCPOperatorAgent: Error adding MCP server: ${error}`);
        return `Failed to add MCP server: ${error}`;
      }
    },
    {
      name: 'addMCPTool',
      schema: z.object({
        serverName: z.string().describe('Name of the MCP server'),
        qualifiedName: z.string().optional().describe('Qualified name of the Smithery server to add'),
        serverUrl: z.string().optional().describe('URL of the MCP server (for standard MCP)'),
        serverKey: z.string().optional().describe('API key for the MCP server (for standard MCP)'),
        env: z.record(z.string()).optional().describe('Environment variables required by the Smithery server')
      }),
      description: 'Add a new MCP server or Smithery server to the configuration',
    }
  );

  // Outil de suppression de serveur MCP
  const removeMCPTool = tool(
    async ({ serverName }): Promise<string> => {
      try {
        if (!mcpController) {
          return 'MCP controller is not initialized.';
        }

        await mcpController.removeServer(serverName);
        return `MCP server ${serverName} removed successfully.`;
      } catch (error) {
        logger.error(`MCPOperatorAgent: Error removing MCP server: ${error}`);
        return `Failed to remove MCP server: ${error}`;
      }
    },
    {
      name: 'removeMCPTool',
      schema: z.object({
        serverName: z.string().describe('Name of the MCP server to remove')
      }),
      description: 'Remove an MCP server from the configuration',
    }
  );

  // Outil de rechargement MCP
  const reloadMCPTool = tool(
    async ({}): Promise<string> => {
      try {
        if (!mcpController) {
          return 'MCP controller is not initialized.';
        }

        await mcpController.reload();
        return 'MCP controller reloaded successfully.';
      } catch (error) {
        logger.error(`MCPOperatorAgent: Error reloading MCP: ${error}`);
        return `Failed to reload MCP: ${error}`;
      }
    },
    {
      name: 'reloadMCPTool',
      schema: z.object({}),
      description: 'Reload the MCP controller configuration',
    }
  );

  // Outil pour obtenir la liste des outils MCP
  const getMCPToolsTool = tool(
    async ({}): Promise<string> => {
      try {
        if (!mcpController) {
          return 'MCP controller is not initialized.';
        }

        const tools = mcpController.getTools();
        return JSON.stringify(tools.map((t: any) => ({ name: t.name, description: t.description })));
      } catch (error) {
        logger.error(`MCPOperatorAgent: Error getting MCP tools: ${error}`);
        return `Failed to get MCP tools: ${error}`;
      }
    },
    {
      name: 'getMCPToolsTool',
      schema: z.object({}),
      description: 'Get the list of available MCP tools',
    }
  );

  // Outil pour lister les serveurs MCP
  const listMCPServersTool = tool(
    async ({}): Promise<string> => {
      try {
        if (!mcpController) {
          return 'MCP controller is not initialized.';
        }

        const servers = mcpController.getServers();
        return JSON.stringify(servers);
      } catch (error) {
        logger.error(`MCPOperatorAgent: Error listing MCP servers: ${error}`);
        return `Failed to list MCP servers: ${error}`;
      }
    },
    {
      name: 'listMCPServersTool',
      schema: z.object({}),
      description: 'Get the list of configured MCP servers',
    }
  );

  // Outil de mise à jour de serveur MCP
  const updateMCPTool = tool(
    async ({ serverName, serverUrl, serverKey, qualifiedName, env }): Promise<string> => {
      try {
        if (!mcpController) {
          return 'MCP controller is not initialized.';
        }

        if (qualifiedName) {
          // Mise à jour d'un serveur Smithery
          return await mcpController.updateSmitheryServer(serverName, qualifiedName, env || {});
        } else if (serverUrl || serverKey) {
          // Mise à jour d'un serveur MCP standard
          await mcpController.updateServer(serverName, serverUrl, serverKey);
          return `MCP server ${serverName} updated successfully.`;
        } else {
          return 'Either qualifiedName (for Smithery) or serverUrl/serverKey (for standard MCP) must be provided.';
        }
      } catch (error) {
        logger.error(`MCPOperatorAgent: Error updating MCP server: ${error}`);
        return `Failed to update MCP server: ${error}`;
      }
    },
    {
      name: 'updateMCPTool',
      schema: z.object({
        serverName: z.string().describe('Name of the MCP server to update'),
        serverUrl: z.string().optional().describe('New URL for the MCP server'),
        serverKey: z.string().optional().describe('New API key for the MCP server'),
        qualifiedName: z.string().optional().describe('New qualified name for the Smithery server'),
        env: z.record(z.string()).optional().describe('New environment variables for the Smithery server')
      }),
      description: 'Update an existing MCP server or Smithery server configuration',
    }
  );

  // Outil de rechargement des connexions MCP
  const reloadMCPConnectionsTool = tool(
    async ({}): Promise<string> => {
      try {
        if (!mcpController) {
          return 'MCP controller is not initialized.';
        }

        await mcpController.reloadConnections();
        return 'MCP connections reloaded successfully.';
      } catch (error) {
        logger.error(`MCPOperatorAgent: Error reloading MCP connections: ${error}`);
        return `Failed to reload MCP connections: ${error}`;
      }
    },
    {
      name: 'reloadMCPConnectionsTool',
      schema: z.object({}),
      description: 'Force reload MCP connections without changing configuration',
    }
  );

  return [
    searchMCPTool,
    addMCPTool,
    removeMCPTool,
    reloadMCPTool,
    getMCPToolsTool,
    listMCPServersTool,
    updateMCPTool,
    reloadMCPConnectionsTool
  ];
}