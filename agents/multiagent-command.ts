#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { config } from 'dotenv';
import { createBox } from './src/formatting.js';
import { launchMultiAgent } from './multiAgentLauncher.js';
import logger from './src/logger.js';

// Global deactivation of LangChain logs
process.env.LANGCHAIN_TRACING = 'false';
process.env.LANGCHAIN_VERBOSE = 'false';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const createLink = (text: string, url: string): string =>
	`\u001B]8;;${url}\u0007${text}\u001B]8;;\u0007`;

// Application logo with styling
const logo = `${chalk.cyan(`
   _____             __
  / ___/____  ____ _/ /__
  \\__ \\/ __ \\/ __ \`/ //_/
 ___/ / / / / /_/ / ,<
/____/_/ /_/\\__,_/_/|_|

 ${chalk.dim('v0.0.11 by ')}${createLink('Kasar', 'https://kasar.io')}`)}`;

/**
 * Clears the terminal screen
 */
const clearScreen = (): void => {
  process.stdout.write('\x1Bc');
};

/**
 * Reloads environment variables from .env file
 */
function reloadEnvVars(): Record<string, string> | undefined {
  Object.keys(process.env).forEach((key) => {
    delete process.env[key];
  });
  console.log("TEST")
  console.log(path.resolve(process.cwd(), '.env'))
  const result = config({
    path: path.resolve(process.cwd(), '.env'),
    override: true,
  });

  if (result.error) {
    throw new Error('Failed to reload .env file');
  }

  return result.parsed;
}

/**
 * Validates required environment variables and prompts for missing ones
 */
const validateEnvVars = async (): Promise<void> => {
  const required = [
    'STARKNET_RPC_URL',
    'STARKNET_PRIVATE_KEY',
    'STARKNET_PUBLIC_ADDRESS',
    'AI_MODEL',
    'AI_PROVIDER',
    'AI_PROVIDER_API_KEY',
  ];
  const missings = required.filter((key) => !process.env[key]);

  if (missings.length > 0) {
    console.error(
      createBox(missings.join('\n'), {
        title: 'Missing Environment Variables',
        isError: true,
      })
    );

    for (const missing of missings) {
      const { prompt } = await inquirer.prompt([
        {
          type: 'input',
          name: 'prompt',
          message: chalk.redBright(`Enter the value of ${missing}:`),
          validate: (value: string) => {
            const trimmed = value.trim();
            if (!trimmed) return 'Please enter a valid message';
            return true;
          },
        },
      ]);

      await new Promise<void>((resolve, reject) => {
        fs.appendFile('.env', `\n${missing}=${prompt}\n`, (err) => {
          if (err) reject(new Error('Error when trying to write on .env file'));
          resolve();
        });
      });
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    reloadEnvVars();
    await validateEnvVars();
  }
};

/**
 * Loads command line arguments and resolves the multi-agent configuration path
 */
const loadCommand = async (): Promise<string> => {
  const argv = await yargs(hideBin(process.argv))
    .option('config', {
      alias: 'c',
      describe: 'Multi-agent configuration file path',
      type: 'string',
      default: '../config/multi-agents/multi-agent.json',
    })
    .strict()
    .parse();

  const configPath = argv['config'] as string;

  // Check if this is a full path
  if (path.isAbsolute(configPath) && fs.existsSync(configPath)) {
    return configPath;
  }

  // Check for path relative to current directory
  const relativePath = path.resolve(process.cwd(), configPath);
  if (fs.existsSync(relativePath)) {
    return relativePath;
  }

  // Return the path even if it doesn't exist - the error will be handled later
  console.log(`Looking for multi-agent config at: ${relativePath}`);
  return relativePath;
};

/**
 * Main function to run the application
 */
const run = async (): Promise<void> => {
  clearScreen();
  console.log(logo);
  console.log(
    createBox(
      'Welcome to Snak Multi-Agent Launcher',
      'Launch multiple Starknet agents in autonomous mode from a single configuration file.'
    )
  );

  const spinner = createSpinner('Initializing Multi-Agent Launcher').start();

  try {
    spinner.stop();
    await validateEnvVars();

    const configPath = await loadCommand();

    if (!fs.existsSync(configPath)) {
      throw new Error(`Multi-agent configuration file not found: ${configPath}`);
    }

    spinner.success({
      text: chalk.black(
        `Multi-agent configuration loaded from: ${chalk.cyan(configPath)}`
      ),
    });

    console.log(chalk.dim('\nLaunching multi-agent environment...\n'));

    // Launch the agents and get the termination function
    const terminateAgents = await launchMultiAgent(configPath);

    console.log(chalk.green('\nAll agents have been launched successfully.'));
    console.log(chalk.dim('Press Ctrl+C to terminate all agents and exit.'));

    // Handle graceful shutdown
    process.on('SIGINT', async () => {
      console.log('\nGracefully shutting down from SIGINT (Ctrl+C)');
      await terminateAgents(); // Call the termination function
      process.exit(0);
    });

  } catch (error) {
    spinner.error({ text: 'Failed to initialize multi-agent launcher' });
    console.error(
      createBox(error.message, { title: 'Fatal Error', isError: true })
    );
    process.exit(1);
  }
};

// Run the application
run().catch((error) => {
  console.error(
    createBox(error.message, { title: 'Fatal Error', isError: true })
  );
  process.exit(1);
});
