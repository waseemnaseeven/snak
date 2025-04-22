import { Worker } from 'worker_threads';
import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import chalk from 'chalk';
import { createBox } from './src/formatting.js';
import { load_json_config } from './src/jsonConfig.js';
import logger from './src/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface MultiAgentConfig {
  description?: string;
  agents: AgentConfig[];
}

interface AgentConfig {
  type: string;
  count: number;
}

/**
 * Locates the agent config file
 */
function findAgentConfig(agentName: string): string | null {
  const configFileName = `${agentName}.agent.json`;
  const configPath = path.resolve(process.cwd(), '..', 'config', 'agents', configFileName);
  console.log(configPath)

  if (fs.existsSync(configPath)) {
    return configPath;
  }

  return null;
}

/**
 * Launches a single agent instance in a worker thread
 */
function launchAgentWorker(agentPath: string, workerId: number, agentType: string): Promise<Worker> {
  return new Promise((resolve, reject) => {
    try {
      const worker = new Worker('./dist/agentWorker.js', {
        workerData: {
          agentPath,
          workerId,
          agentType,
          silentLlm: true,
          autoMode: true // Force autonomous mode for multi-agent setup
        },
      });

      worker.on('online', () => {
        logger.info(`Worker ${workerId} (${agentType}) is online`);
        resolve(worker);
      });

      worker.on('error', (err) => {
        logger.error(`Worker ${workerId} (${agentType}) error: ${err.message}`);
      });

      worker.on('exit', (code) => {
        if (code !== 0) {
          logger.warn(`Worker ${workerId} (${agentType}) exited with code ${code}`);
        }
      });

      // Listen for messages from the worker
      worker.on('message', (message) => {
        if (message.type === 'log') {
          console.log(chalk.blue(`[${agentType}-${workerId}] `) + message.data);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}

async function loadMultiAgentConfig(configPath: string): Promise<MultiAgentConfig | null> {
	try {
	  await fs.promises.access(configPath);
	  const jsonData = await fs.promises.readFile(configPath, 'utf8');
	  const config = JSON.parse(jsonData);
	  // Validation logic...
	  return config as MultiAgentConfig;
	} catch (error) {
	  logger.error(`Failed to load multi-agent configuration: ${error.message}`);
	  return null;
	}
  }

/**
 * Main function to launch multiple agents based on configuration
 */
export async function launchMultiAgent(configPath: string): Promise<void> {
  try {
    // Load the multi-agent configuration
    const multiAgentConfig = await loadMultiAgentConfig(configPath);

    if (!multiAgentConfig || !multiAgentConfig.agents || !Array.isArray(multiAgentConfig.agents)) {
      throw new Error('Invalid multi-agent configuration');
    }

    const workers: Worker[] = [];
    let totalAgentsLaunched = 0;

    // Process each agent type in the configuration
    for (const agentConfig of multiAgentConfig.agents) {
      const { type, count } = agentConfig;

      if (!type || typeof type !== 'string' || !count || typeof count !== 'number' || count <= 0) {
        logger.warn(`Invalid agent configuration for type: ${type}`);
        continue;
      }

      // Find the agent configuration file
      const agentConfigPath = findAgentConfig(type);

      if (!agentConfigPath) {
        logger.error(`Agent configuration not found for type: ${type}`);
        continue;
      }

      // Load the agent configuration to verify it exists and is valid
      try {
        const agentConfigContent = await load_json_config(agentConfigPath);
        if (!agentConfigContent) {
          throw new Error(`Invalid configuration for agent type: ${type}`);
        }

        logger.info(`Launching ${count} instances of agent type: ${type}`);

        // Launch the specified number of workers for this agent type
        for (let i = 0; i < count; i++) {
          const workerId = totalAgentsLaunched + i;

          try {
            const worker = await launchAgentWorker(agentConfigPath, workerId, type);
            workers.push(worker);

            // Brief delay between worker launches to avoid resource contention
            await new Promise(resolve => setTimeout(resolve, 500));
          } catch (workerError) {
            logger.error(`Failed to launch worker ${workerId} for agent type ${type}: ${workerError.message}`);
          }
        }

        totalAgentsLaunched += count;
      } catch (configError) {
        logger.error(`Error with agent configuration for ${type}: ${configError.message}`);
        continue;
      }
    }

    const successMessage = `Successfully launched ${totalAgentsLaunched} agent instances across ${multiAgentConfig.agents.length} agent types`;
    console.log(createBox('Multi-Agent Launcher', successMessage));

    // Set up process exit handling
    process.on('SIGINT', async () => {
      console.log('\nShutting down all agent workers...');

      const terminationPromises = workers.map(worker => {
        return new Promise<void>((resolve) => {
          worker.once('exit', () => resolve());
          worker.terminate();
        });
      });

      await Promise.all(terminationPromises);
      console.log('All workers terminated. Exiting.');
      process.exit(0);
    });

  } catch (error) {
    logger.error(`Failed to launch multi-agent configuration: ${error.message}`);
    throw error;
  }
}
