import inquirer from 'inquirer';
import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createBox } from './src/formatting.js';
import { launchMultiAgent } from './multiAgentLauncher.js';
import logger from './src/logger.js';

// Global deactivation of LangChain logs
process.env.LANGCHAIN_TRACING = 'false';
process.env.LANGCHAIN_VERBOSE = 'false';

const createLink = (text: string, url: string): string =>
	`\u001B]8;;${url}\u0007${text}\u001B]8;;\u0007`;

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
 * Appends a single environment variable to the .env file
 * @param key - The name of the environment variable
 * @param value - The value to assign to the environment variable
 * @returns A Promise that resolves when the variable has been successfully added to the .env file
 * @throws Will throw an error if writing to the .env file fails
 */

const appendToEnvFile = async (key: string, value: string): Promise<void> => {
	return new Promise<void>((resolve, reject) => {
	  const entry = `${key}=${value}\n`;
	  fs.appendFile('.env', entry, (err) => {
		if (err)
			reject(new Error('Error when trying to write on .env file'));
		resolve();
	  });
	});
  };

/**
 * Validates required environment variables and prompts for missing ones
 * @remarks
 * This function checks for required environment variables and interactively prompts
 * the user to provide values for any that are missing. The entered values are both
 * stored in the current process.env and appended to the .env file for future use.
 * @returns A Promise that resolves when all required variables have been validated
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

	let missings = required.filter((key) => !process.env[key]);

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
		process.env[missing] = prompt;
		await appendToEnvFile(missing, prompt);
	  }
	}
  };

/**
 * Loads command line arguments and resolves the multi-agent configuration path
 * @returns The resolved path to the configuration file
 * @throws Error if the configuration file cannot be found
 */
const loadCommand = async (): Promise<string> => {
  const argv = await yargs(hideBin(process.argv))
    .option('config', {
      alias: 'c',
      describe: 'Multi-agent configuration file path',
      type: 'string',
      default: '../config/multi-agents/default.multi-agent.json',
    })
    .strict()
    .parse();

  const configPath = argv['config'] as string;
  logger.info(`Looking for multi-agent config at: ${configPath}`);

  if (path.isAbsolute(configPath) && fs.existsSync(configPath)) {
    return path.normalize(configPath);
  }

  const relativePath = path.resolve(process.cwd(), configPath);
  if (fs.existsSync(relativePath)) {
    return path.normalize(relativePath);
  }
  throw new Error(`Configuration file not found at: ${relativePath}`);
};

/**
 * Runs the Multi-Agent Launcher application
 *
 * This function:
 * 1. Initializes the UI with a welcome message
 * 2. Validates environment variables
 * 3. Loads the multi-agent configuration
 * 4. Launches all agents based on the configuration
 * 5. Sets up graceful shutdown handling
 *
 * @returns A Promise that resolves when initialization is complete
 */
const runMultiAgentLauncher = async (): Promise<void> => {
  clearScreen();
  console.log(logo);
  console.log(
    createBox(
      'Welcome to Snak Multi-Agent Launcher',
      'Launch multiple Starknet agents in autonomous mode from a single configuration file.'
    )
  );

  const loadingSpinner = createSpinner('Initializing Multi-Agent Launcher').start();

  try {
    loadingSpinner.stop();
    await validateEnvVars();
	const configPath = await loadCommand();
    loadingSpinner.success({
      text: chalk.black(
        `Multi-agent configuration loaded from: ${chalk.cyan(configPath)}`
      ),
    });
    console.log(chalk.dim('\nLaunching multi-agent environment...\n'));

    const terminateAgents = await launchMultiAgent(configPath);

    console.log(chalk.green('\nAll agents have been launched successfully.'));
    console.log(chalk.dim('Press Ctrl+C to terminate all agents and exit.'));

    process.on('SIGINT', async () => {
      console.log('\nGracefully shutting down from SIGINT (Ctrl+C)');
      await terminateAgents();
      process.exit(0);
    });

  } catch (error) {
    loadingSpinner.error({ text: 'Failed to initialize multi-agent launcher' });
    console.error(
      createBox("Fatal Error", error.message)
    );
    process.exit(1);
  }
};

runMultiAgentLauncher()
