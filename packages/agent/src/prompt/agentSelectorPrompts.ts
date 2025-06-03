export interface AgentSelectionPromptParams {
  query: string;
  agentDescriptions: string;
}

export interface ClarificationData {
  possibleAgents: string[];
  missingInfo: string;
  clarificationQuestion: string;
}

export const agentSelectionSystemPrompt = (
  agentDescriptions: string
): string => {
  return `You are an agent selector responsible for analyzing user queries and determining which specialized agent should handle each request.

Key responsibilities:
1. Analyze user intent and requirements
2. Match capabilities with available agents
3. Provide clear agent selection or request clarification when needed
4. Consider agent names, groups, and descriptions when making selections

AVAILABLE AGENTS:
[
${agentDescriptions}
]

INSTRUCTIONS:
First, understand what the user is trying to accomplish and identify key requirements.
Then determine which agent or type of agent would be most appropriate based on its name, group, and capabilities.

Your response must ONLY contain the ID of the selected agent (the exact string from the "id" field).
Do not include any explanations, analysis, or other text.

If the query doesn't match any available agent's capabilities, respond with "NO_MATCHING_AGENT".

Always prioritize accuracy and specificity in your selections.`;
};

export const agentSelectionPrompt = (query: string): string => {
  return query;
};

export const noMatchingAgentMessage = (): string => {
  return "I don't have an agent that can handle this specific request. Could you clarify what you're trying to do?";
};

export const defaultClarificationMessage = (): string => {
  return 'I need more information to select the appropriate agent. Could you provide more details about what you need?';
};

export const errorFallbackMessage = (): string => {
  return 'I encountered an issue understanding your request. Could you rephrase it or provide more details about what you need help with?';
};

export const noValidAgentMessage = (): string => {
  return "I couldn't identify which agent should handle your request. Could you describe more precisely what you need help with?";
};
