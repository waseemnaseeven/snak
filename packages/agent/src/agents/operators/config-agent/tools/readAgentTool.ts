import { DynamicStructuredTool } from '@langchain/core/tools';
import { z } from 'zod';
import { Postgres } from '@snakagent/database';
import { logger } from '@snakagent/core';
import { AgentConfig } from '../../configAgent.js';

const ReadAgentSchema = z.object({
  identifier: z.string().describe('Agent ID or name to retrieve'),
  searchBy: z.enum(['id', 'name']).default('name').describe('Search by ID or name'),
});

export const readAgentTool = new DynamicStructuredTool({
  name: 'read_agent',
  description: 'Get details of a specific agent by ID or name',
  schema: ReadAgentSchema,
  func: async (input) => {
    try {
      let query: Postgres.Query;

      if (input.searchBy === 'id') {
        query = new Postgres.Query('SELECT * FROM agents WHERE id = $1', [
          input.identifier,
        ]);
      } else {
        query = new Postgres.Query('SELECT * FROM agents WHERE name = $1', [
          input.identifier,
        ]);
      }

      const result = await Postgres.query<AgentConfig>(query);

      if (result.length > 0) {
        return JSON.stringify({
          success: true,
          message: 'Agent configuration retrieved successfully',
          data: result[0],
        });
      } else {
        return JSON.stringify({
          success: false,
          message: `Agent not found with ${input.searchBy}: ${input.identifier}`,
        });
      }
    } catch (error) {
      logger.error(`❌ Error reading agent: ${error}`);
      return JSON.stringify({
        success: false,
        message: 'Failed to read agent configuration',
        error: error instanceof Error ? error.message : String(error),
      });
    }
  },
}); 