import { DynamicStructuredTool } from '@langchain/core/tools';
import { z } from 'zod';
import { Postgres } from '@snakagent/database';
import { logger } from '@snakagent/core';
import { AgentConfig } from '../../configAgent.js';

const UpdateAgentSchema = z.object({
  identifier: z.string().describe('Agent ID or name to update'),
  searchBy: z
    .enum(['id', 'name'])
    .default('name')
    .describe('Search by ID or name'),
  updates: z
    .object({
      name: z.string().optional().describe('New name for the agent'),
      group: z.string().optional().describe('New group for the agent'),
      description: z.string().optional().describe('New description'),
      lore: z.array(z.string()).optional().describe('New lore entries'),
      objectives: z.array(z.string()).optional().describe('New objectives'),
      knowledge: z
        .array(z.string())
        .optional()
        .describe('New knowledge entries'),
      system_prompt: z.string().optional().describe('New system prompt'),
      interval: z.number().optional().describe('New execution interval'),
      plugins: z.array(z.string()).optional().describe('New plugins list'),
      mode: z.string().optional().describe('New agent mode'),
      max_iterations: z.number().optional().describe('New max iterations'),
    })
    .describe('Fields to update'),
});

export const updateAgentTool = new DynamicStructuredTool({
  name: 'update_agent',
  description: 'Update an existing agent configuration',
  schema: UpdateAgentSchema,
  func: async (input) => {
    try {
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
      const updates = input.updates;

      // Build dynamic update query
      const updateFields: string[] = [];
      const updateValues: any[] = [];
      let paramIndex = 1;

      Object.entries(updates).forEach(([key, value]) => {
        if (value !== undefined) {
          updateFields.push(`"${key}" = $${paramIndex}`);
          updateValues.push(value);
          paramIndex++;
        }
      });

      if (updateFields.length === 0) {
        return JSON.stringify({
          success: false,
          message: 'No valid fields to update',
        });
      }

      updateValues.push(agent.id);
      const updateQuery = new Postgres.Query(
        `UPDATE agents SET ${updateFields.join(', ')} WHERE id = $${paramIndex} RETURNING *`,
        updateValues
      );

      const result = await Postgres.query<AgentConfig>(updateQuery);

      if (result.length > 0) {
        logger.info(`✅ Updated agent "${agent.name}" successfully`);
        return JSON.stringify({
          success: true,
          message: `Agent "${agent.name}" updated successfully`,
          data: result[0],
        });
      } else {
        return JSON.stringify({
          success: false,
          message: 'Failed to update agent',
        });
      }
    } catch (error) {
      logger.error(`❌ Error updating agent: ${error}`);
      return JSON.stringify({
        success: false,
        message: 'Failed to update agent configuration',
        error: error instanceof Error ? error.message : String(error),
      });
    }
  },
});
