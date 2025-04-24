import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import chalk from 'chalk';
import { createBox } from './src/formatting.js';
import { load_json_config } from './src/jsonConfig.js';
import logger from './src/logger.js';

// For signal handling and cleanup
import { EventEmitter } from 'events';

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

// Global event bus for inter-agent communication
export const agentEventBus = new EventEmitter();

// Increase max listeners to handle many agents
agentEventBus.setMaxListeners(100);

/**
 * Locates the agent config file
 */
function findAgentConfig(agentName: string): string | null {
  const configFileName = `${agentName}.agent.json`;
  const configPath = path.resolve(process.cwd(), '..', 'config', 'agents', configFileName);
  console.log(configPath);

  if (fs.existsSync(configPath)) {
    return configPath;
  }

  return null;
}

/**
 * Launches a single agent instance as an async process
 */
async function launchAgentAsync(
  agentPath: string,
  agentId: number,
  agentType: string,
  abortController: AbortController
): Promise<{ stop: () => Promise<void> }> {
  try {
    // Load agent configuration
    const agentConfig = await load_json_config(agentPath);
    if (!agentConfig) {
      throw new Error(`Failed to load agent configuration from ${agentPath}`);
    }

    // Make a deep copy to avoid modifying the original
    const uniqueAgentConfig = JSON.parse(JSON.stringify(agentConfig));

    // Set a unique chat_id for this instance
    uniqueAgentConfig.chat_id = `${uniqueAgentConfig.chat_id || agentType}_${agentId}`;

    // Import the agent dynamically to avoid circular dependencies
    const { StarknetAgent } = await import('./src/starknetAgent.js');
    const { RpcProvider } = await import('starknet');

    // Create agent instance with proper configuration
    const agent = new StarknetAgent({
      provider: new RpcProvider({ nodeUrl: process.env.STARKNET_RPC_URL }),
      accountPrivateKey: process.env.STARKNET_PRIVATE_KEY as string,
      accountPublicKey: process.env.STARKNET_PUBLIC_ADDRESS as string,
      aiModel: process.env.AI_MODEL as string,
      aiProvider: process.env.AI_PROVIDER as string,
      aiProviderApiKey: process.env.AI_PROVIDER_API_KEY as string,
      signature: 'key',
      agentMode: 'auto', // Always use autonomous mode for async agents
      agentconfig: uniqueAgentConfig,
    });

    await agent.createAgentReactExecutor();

    // Configure logging options
    agent.setLoggingOptions({
      langchainVerbose: false,
      tokenLogging: false,
    });

    // Custom logging function
    const agentLog = (message: string) => {
      console.log(chalk.blue(`[${agentType}-${agentId}] `) + message);
    };

    agentLog(`Agent initialized. Starting autonomous execution...`);

    // Signal handler for abort controller
    const signalListener = () => {
      agentLog(`Stopping agent execution...`);
      // Any cleanup needed
    };

    abortController.signal.addEventListener('abort', signalListener);

    // Start agent in non-blocking async mode
    const executePromise = agent.execute_autonomous().catch(error => {
      logger.error(`Error in agent ${agentType}-${agentId}: ${error.message}`);
    });

    // Return a stop function that can be called to terminate this agent
    return {
      stop: async () => {
        agentLog(`Stopping agent...`);
        abortController.abort();
        // Any additional cleanup needed

        // Wait for any pending operations to complete
        try {
          // Wait for execution with a timeout
          await Promise.race([
            executePromise,
            new Promise(resolve => setTimeout(resolve, 5000)) // 5s timeout
          ]);
        } catch (e) {
          agentLog(`Error during shutdown: ${e.message}`);
        }
      }
    };
  } catch (error) {
    logger.error(`Failed to launch agent ${agentType}-${agentId}: ${error.message}`);
    throw error;
  }
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
 * @returns A function that can be called to stop all agents
 */
export async function launchMultiAgent(configPath: string): Promise<() => Promise<void>> {
  try {
    // Load the multi-agent configuration
    const multiAgentConfig = await loadMultiAgentConfig(configPath);

    if (!multiAgentConfig || !multiAgentConfig.agents || !Array.isArray(multiAgentConfig.agents)) {
      throw new Error('Invalid multi-agent configuration');
    }

    const agentStopFunctions: Array<() => Promise<void>> = [];
    let totalAgentsLaunched = 0;
    const masterAbortController = new AbortController();

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

        // Launch the specified number of agents for this agent type
        const agentPromises = [];

        for (let i = 0; i < count; i++) {
          const agentId = totalAgentsLaunched + i;
          // Create individual abort controller for each agent
          const agentAbortController = new AbortController();

          // Launch agent asynchronously
          const agentPromise = launchAgentAsync(
            agentConfigPath,
            agentId,
            type,
            agentAbortController
          ).then(({ stop }) => {
            // Store the stop function
            agentStopFunctions.push(stop);
            return agentId;
          });

          agentPromises.push(agentPromise);

          // Brief delay between agent launches to stagger resource usage
          await new Promise(resolve => setTimeout(resolve, 200));
        }

        // Wait for all agents of this type to be initialized
        const agentIds = await Promise.all(agentPromises);

        totalAgentsLaunched += count;
      } catch (configError) {
        logger.error(`Error with agent configuration for ${type}: ${configError.message}`);
        continue;
      }
    }

    const successMessage = `Successfully launched ${totalAgentsLaunched} agent instances across ${multiAgentConfig.agents.length} agent types`;
    console.log(createBox('Multi-Agent Launcher', successMessage));

    // Return a function that will stop all agents when called
    return async () => {
      console.log('\nShutting down all agents...');

      // Call all stop functions in parallel
      await Promise.all(agentStopFunctions.map(stopFn => {
        try {
          return stopFn();
        } catch (e) {
          logger.error(`Error stopping agent: ${e.message}`);
          return Promise.resolve();
        }
      }));

      console.log('All agents terminated.');
    };
  } catch (error) {
    logger.error(`Failed to launch multi-agent configuration: ${error.message}`);
    throw error;
  }
}
