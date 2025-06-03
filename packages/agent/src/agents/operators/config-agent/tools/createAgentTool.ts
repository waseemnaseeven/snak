import { DynamicStructuredTool } from '@langchain/core/tools';
import { z } from 'zod';
import { Postgres } from '@snakagent/database';
import { logger } from '@snakagent/core';
import { AgentConfig } from '../../configAgent.js';

const CreateAgentSchema = z.object({
  name: z.string().describe('The name of the agent to create'),
  group: z.string().describe('The group/category of the agent'),
  description: z.string().describe('A description of what the agent does'),
  lore: z.array(z.string()).optional().describe('Optional lore/background information'),
  objectives: z.array(z.string()).optional().describe('Optional objectives for the agent'),
  knowledge: z.array(z.string()).optional().describe('Optional knowledge base entries'),
  system_prompt: z.string().optional().describe('Optional system prompt'),
  interval: z.number().default(5).describe('Execution interval in seconds'),
  plugins: z.array(z.string()).optional().describe('Optional plugins to enable'),
  mode: z.string().default('interactive').describe('Agent mode (interactive, autonomous, hybrid)'),
  max_iterations: z.number().default(15).describe('Maximum iterations per execution'),
});

export const createAgentTool = new DynamicStructuredTool({
  name: 'create_agent',
  description: 'Create a new agent configuration in the database',
  schema: CreateAgentSchema,
  func: async (input) => {
    try {
      const query = new Postgres.Query(
        `INSERT INTO agents (
          name, "group", description, lore, objectives, knowledge,
          system_prompt, interval, plugins, memory, mode, max_iterations
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        RETURNING *`,
        [
          input.name,
          input.group,
          input.description,
          input.lore || null,
          input.objectives || null,
          input.knowledge || null,
          input.system_prompt || null,
          input.interval,
          input.plugins || null,
          null, // memory - will be set to default
          input.mode,
          input.max_iterations,
        ]
      );

      const result = await Postgres.query<AgentConfig>(query);

      if (result.length > 0) {
        logger.info(`✅ Created new agent "${input.name}" successfully`);
        return JSON.stringify({
          success: true,
          message: `Agent "${input.name}" created successfully`,
          data: result[0],
        });
      } else {
        return JSON.stringify({
          success: false,
          message: 'Failed to create agent - no data returned',
        });
      }
    } catch (error) {
      logger.error(`❌ Error creating agent: ${error}`);
      return JSON.stringify({
        success: false,
        message: 'Failed to create agent',
        error: error instanceof Error ? error.message : String(error),
      });
    }
  },
}); 