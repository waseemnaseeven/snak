/**
 * Prompts for the ConfigurationAgent
 * These prompts are used for AI-enhanced configuration management operations
 */

/**
 * System prompt for analyzing configuration requests
 */
export const requestAnalysisSystemPrompt = `You are an expert at analyzing configuration requests for AI agents.

Your task is to analyze user requests and extract:
1. The operation they want to perform (create, read, update, delete, list)
2. Any parameters they've provided (agent name, description, group, mode, etc.)
3. Any missing required information
4. Your reasoning

Available operations:
- CREATE: Create a new agent (requires: name, group, description)
- READ: Get details of a specific agent (requires: agent name or ID)
- UPDATE: Modify an existing agent (requires: agent identifier + fields to update)
- DELETE: Remove an agent (requires: agent name or ID)
- LIST: Show multiple agents (optional: filters like group, mode)

You must respond with a valid JSON object in this exact format:
{
  "operation": "create|read|update|delete|list",
  "parameters": {
    "agentId": "string or null",
    "agentName": "string or null", 
    "config": {},
    "filters": {}
  },
  "confidence": 0-100,
  "missingInfo": ["array", "of", "missing", "fields"],
  "reasoning": "explanation of your analysis"
}`;

/**
 * Creates a prompt for analyzing a specific user request
 */
export const createRequestAnalysisPrompt = (content: string): string => {
  return `Analyze this request: "${content}"`;
};

/**
 * System prompt for generating clarification questions
 */
export const clarificationSystemPrompt = `You are a helpful assistant that asks clarifying questions.`;

/**
 * Creates a prompt for generating clarification questions
 */
export const createClarificationPrompt = (
  operation: string,
  originalInput: string,
  missingInfo: string[]
): string => {
  return `The user wants to ${operation} an agent but is missing some required information.

Original request: "${originalInput}"
Missing information: ${missingInfo.join(', ')}

Generate a helpful, conversational question to ask the user for the missing information.
Be specific about what you need and provide examples if helpful.
Keep it concise and friendly.`;
};

/**
 * System prompt for enhancing configurations with AI
 */
export const configEnhancementSystemPrompt = `You generate brief, professional descriptions for AI agents.`;

/**
 * Creates a prompt for generating agent descriptions
 */
export const createDescriptionGenerationPrompt = (
  name: string,
  group: string
): string => {
  return `Generate a concise, professional description for an AI agent named "${name}"
        in the "${group || 'default'}" group. Keep it under 100 characters and describe what the agent might do.`;
};

/**
 * System prompt for generating error messages
 */
export const errorMessageSystemPrompt = `You are a helpful assistant that explains errors in a user-friendly way.`;

/**
 * Creates a prompt for generating user-friendly error messages
 */
export const createErrorMessagePrompt = (
  userRequest: string,
  errorMessage: string
): string => {
  return `A user tried to perform a configuration operation but encountered an error.

User request: "${userRequest}"
Error: ${errorMessage}

Generate a helpful, user-friendly error message that:
1. Acknowledges what they were trying to do
2. Explains what went wrong in simple terms
3. Suggests what they can try instead
4. Keeps a helpful, professional tone

Keep it concise but informative.`;
};

/**
 * System prompt for formatting responses
 */
export const responseFormattingSystemPrompt = `You format technical responses in a user-friendly, conversational way.`;

/**
 * Creates a prompt for formatting operation results
 */
export const createResponseFormattingPrompt = (
  originalInput: string,
  result: any
): string => {
  return `Format this configuration operation result in a user-friendly way:

Original request: "${originalInput}"
Operation result: ${JSON.stringify(result, null, 2)}

Create a clear, conversational response that:
1. Confirms what was accomplished
2. Shows relevant details in an organized way
3. Uses appropriate emojis for visual appeal
4. Keeps it concise but informative

Use markdown formatting for better readability.`;
}; 