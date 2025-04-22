import { parentPort, workerData } from 'worker_threads';
import { StarknetAgent } from './src/starknetAgent.js';
import { RpcProvider } from 'starknet';
import { config } from 'dotenv';
import { load_json_config } from './src/jsonConfig.js';
import { createBox } from './src/formatting.js';
import path from 'path';
import * as fs from 'fs';
import logger from './src/logger.js';
import { SystemMessage } from '@langchain/core/messages';

// Immediately load environment variables
config();

// Configure worker-specific logging
const { workerId, agentPath, agentType, silentLlm = true, autoMode = true } = workerData;

// Send log messages back to the main thread
function workerLog(message: string) {
  if (parentPort) {
    parentPort.postMessage({
      type: 'log',
      data: message
    });
  }
}

// Configure custom logger for this worker
const workerLogger = {
  info: (message: string) => {
    logger.info(`[Worker ${workerId}] ${message}`);
    workerLog(`INFO: ${message}`);
  },
  error: (message: string) => {
    logger.error(`[Worker ${workerId}] ${message}`);
    workerLog(`ERROR: ${message}`);
  },
  warn: (message: string) => {
    logger.warn(`[Worker ${workerId}] ${message}`);
    workerLog(`WARN: ${message}`);
  },
  debug: (message: string) => {
    logger.debug(`[Worker ${workerId}] ${message}`);
    // Only send debug messages if in debug mode
  }
};

async function runAgent() {
  workerLogger.info(`Starting agent worker ${workerId} for agent type: ${agentType}`);

  try {
    // Validate required environment variables for this worker
    validateEnvVars();
    // Load agent configuration
    const agentConfig = await load_json_config(agentPath);
	console.log("CHAT ID :" , JSON.stringify(agentConfig, null, 2 ))


    if (!agentConfig) {
      throw new Error(`Failed to load agent configuration from ${agentPath}`);
    }

    workerLogger.info(`Agent "${agentConfig.name}" configuration loaded successfully`);

    // Create unique chat_id for this worker instance to avoid collisions
    // Make a deep copy of the agent config to avoid modifying the original
    const uniqueAgentConfig = JSON.parse(JSON.stringify(agentConfig));


    // Set a unique chat_id for this instance
    uniqueAgentConfig.chat_id = `${uniqueAgentConfig.chat_id || agentType}_${workerId}`;

    // Create agent instance with proper configuration
    const agent = new StarknetAgent({
      provider: new RpcProvider({ nodeUrl: process.env.STARKNET_RPC_URL }),
      accountPrivateKey: process.env.STARKNET_PRIVATE_KEY as string,
      accountPublicKey: process.env.STARKNET_PUBLIC_ADDRESS as string,
      aiModel: process.env.AI_MODEL as string,
      aiProvider: process.env.AI_PROVIDER as string,
      aiProviderApiKey: process.env.AI_PROVIDER_API_KEY as string,
      signature: 'key',
      agentMode: 'auto', // Always use autonomous mode for worker threads
      agentconfig: uniqueAgentConfig,
    });

    await agent.createAgentReactExecutor();

    // Configure logging options
    agent.setLoggingOptions({
      langchainVerbose: !silentLlm,
      tokenLogging: !silentLlm,
    });

    workerLogger.info(`Agent worker initialized. Starting autonomous execution...`);

    // Start autonomous execution
    await agent.execute_autonomous();

  } catch (error) {
    workerLogger.error(`Fatal error in agent worker: ${error.message}`);
    if (parentPort) {
      parentPort.postMessage({
        type: 'error',
        error: error.message
      });
    }
    process.exit(1);
  }
}

function validateEnvVars() {
  const required = [
    'STARKNET_RPC_URL',
    'STARKNET_PRIVATE_KEY',
    'STARKNET_PUBLIC_ADDRESS',
    'AI_MODEL',
    'AI_PROVIDER',
    'AI_PROVIDER_API_KEY',
  ];

  const missing = required.filter(key => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}

// Handle messages from the parent
if (parentPort) {
  parentPort.on('message', (message) => {
    if (message === 'shutdown') {
      workerLogger.info('Received shutdown signal');
      process.exit(0);
    }
  });
}

console.log("test")

// Start the agent
runAgent().catch(error => {
  workerLogger.error(`Unhandled error in worker: ${error.message}`);
  process.exit(1);
});
