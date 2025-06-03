import { DynamicStructuredTool } from '@langchain/core/tools';
import { z } from 'zod';
import { Postgres } from '@snakagent/database';
import { logger } from '@snakagent/core';
import { AgentConfig } from '../../configAgent.js';

const DeleteAgentSchema = z.object({
  identifier: z.string().describe('Agent ID or name to delete'),
  searchBy: z.enum(['id', 'name']).default('name').describe('Search by ID or name'),
  confirm: z.boolean().default(false).describe('Confirmation to delete the agent'),
});

export const deleteAgentTool = new DynamicStructuredTool({
  name: 'delete_agent',
  description: 'Delete an agent configuration from the database',
  schema: DeleteAgentSchema,
  func: async (input) => {
    try {
      if (!input.confirm) {
        return JSON.stringify({
          success: false,
          message: 'Deletion requires explicit confirmation. Set confirm to true.',
        });
      }

      // First, find the agent
      let findQuery: Postgres.Query;
      if (input.searchBy === 'id') {
        findQuery = new Postgres.Query('SELECT * FROM agents WHERE id = $1', [
          input.identifier,
        ]);
      } else {
        findQuery = new Postgres.Query('SELECT * FROM agents WHERE name = $1', [
          input.identifier,
        ]);
      }

      const existingAgent = await Postgres.query<AgentConfig>(findQuery);
      if (existingAgent.length === 0) {
        return JSON.stringify({
          success: false,
          message: `Agent not found with ${input.searchBy}: ${input.identifier}`,
        });
      }

      const agent = existingAgent[0];

      // Delete the agent
      const deleteQuery = new Postgres.Query('DELETE FROM agents WHERE id = $1', [
        agent.id,
      ]);
      await Postgres.query(deleteQuery);

      logger.info(`✅ Deleted agent "${agent.name}" successfully`);
      return JSON.stringify({
        success: true,
        message: `Agent "${agent.name}" deleted successfully`,
      });
    } catch (error) {
      logger.error(`❌ Error deleting agent: ${error}`);
      return JSON.stringify({
        success: false,
        message: 'Failed to delete agent',
        error: error instanceof Error ? error.message : String(error),
      });
    }
  },
}); 