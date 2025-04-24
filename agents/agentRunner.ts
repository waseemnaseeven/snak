import { RpcProvider } from 'starknet';
import { load_json_config } from './src/jsonConfig.js';
import logger from './src/logger.js';
import { StarknetAgent } from './src/starknetAgent.js';
import chalk from 'chalk';
import { agentEventBus } from './multiAgentLauncher.js';

// Immediately load environment variables

/**
 * Creates and runs a single agent instance asynchronously
 */
export async function createAndRunAgent(options: {
  agentPath: string;
  agentId: number;
  agentType: string;
  silentLlm?: boolean;
  autoMode?: boolean;
  abortSignal?: AbortSignal;
}): Promise<{ agent: StarknetAgent; stop: () => Promise<void> }> {
  const { agentPath, agentId, agentType, silentLlm = true, autoMode = true, abortSignal } = options;

  // Configure agent-specific logging
  const agentPrefix = `[${agentType}-${agentId}]`;

  // Configure custom logger for this agent
  const agentLogger = {
    info: (message: string) => {
      logger.info(`${agentPrefix} ${message}`);
      console.log(chalk.blue(agentPrefix) + ` INFO: ${message}`);
    },
    error: (message: string) => {
      logger.error(`${agentPrefix} ${message}`);
      console.log(chalk.red(agentPrefix) + ` ERROR: ${message}`);
    },
    warn: (message: string) => {
      logger.warn(`${agentPrefix} ${message}`);
      console.log(chalk.yellow(agentPrefix) + ` WARN: ${message}`);
    },
    debug: (message: string) => {
      logger.debug(`${agentPrefix} ${message}`);
      // Only send debug messages if in debug mode
    }
  };

  agentLogger.info(`Starting agent ${agentId} for agent type: ${agentType}`);

  try {
    // Validate required environment variables

    // Load agent configuration
    const agentConfig = await load_json_config(agentPath);
	console.log(JSON.stringify(agentConfig))

    if (!agentConfig) {
      throw new Error(`Failed to load agent configuration from ${agentPath}`);
    }

    agentLogger.info(`Agent "${agentConfig.name}" configuration loaded successfully`);

    // Create unique chat_id for this agent instance to avoid collisions
    // Make a deep copy of the agent config to avoid modifying the original
    const uniqueAgentConfig = JSON.parse(JSON.stringify(agentConfig));

    // Set a unique chat_id for this instance
    uniqueAgentConfig.chat_id = `${uniqueAgentConfig.chat_id || agentType}_${agentId}`;

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
      langchainVerbose: !silentLlm,
      tokenLogging: !silentLlm,
    });

    agentLogger.info(`Agent initialized. Ready for execution.`);

    // Set up abort handler if provided
    if (abortSignal) {
      abortSignal.addEventListener('abort', () => {
        agentLogger.info('Received abort signal - stopping agent');
        // Any specific cleanup needed for this agent
      });
    }

    // Set up communication through the event bus
    setupEventBusListeners(agent, agentId, agentType);

    // Return the agent and a function to stop it
    return {
      agent,
      stop: async () => {
        agentLogger.info('Stopping agent execution');
        // Any cleanup needed for the agent
        // For example, you might need to call a method on the agent to stop it gracefully

        // Clean up event listeners
        cleanupEventBusListeners(agent, agentId, agentType);

        // Any other cleanup
        return Promise.resolve();
      }
    };
  } catch (error) {
    agentLogger.error(`Fatal error in agent: ${error.message}`);
    throw error;
  }
}

/**
 * Sets up event listeners for inter-agent communication
 */
function setupEventBusListeners(agent: StarknetAgent, agentId: number, agentType: string) {
  // Example: Listen for messages addressed to this agent
  const messageHandler = (message: any) => {
    if (message.to === `${agentType}-${agentId}` || message.to === 'all') {
      // Process the message
      console.log(chalk.green(`[${agentType}-${agentId}]`) + ` Received message: ${JSON.stringify(message.data)}`);

      // You might want to add the message to the agent's context or trigger some action
    }
  };

  agentEventBus.on('message', messageHandler);

  // Store the handler on the agent for later cleanup
  (agent as any)._eventHandlers = {
    message: messageHandler,
    // Add other handlers as needed
  };
}

/**
 * Cleans up event listeners to prevent memory leaks
 */
function cleanupEventBusListeners(agent: StarknetAgent, agentId: number, agentType: string) {
  const handlers = (agent as any)._eventHandlers;
  if (handlers) {
    if (handlers.message) agentEventBus.off('message', handlers.message);
    // Remove other handlers as needed
  }
}

/**
 * Execute an agent in autonomous mode
 */
export async function executeAgent(
  agent: StarknetAgent,
  agentId: number,
  agentType: string,
  abortSignal?: AbortSignal
): Promise<void> {
  const agentPrefix = `[${agentType}-${agentId}]`;

  try {
    console.log(chalk.blue(agentPrefix) + ` Starting autonomous execution`);

    // Set up abort handler logic
    let aborted = false;
    if (abortSignal) {
      abortSignal.addEventListener('abort', () => {
        aborted = true;
        console.log(chalk.yellow(agentPrefix) + ` Execution aborted`);
      });
    }

    // Start the agent's autonomous execution
    await agent.execute_autonomous();

  } catch (error) {
    console.error(chalk.red(agentPrefix) + ` Error during execution: ${error.message}`);
    logger.error(`${agentPrefix} Error during execution: ${error.message}`);
    throw error;
  }
}
