import { logger } from '@snakagent/core';

export class TokenTracker {
  // A simple heuristic: average 4 characters per token.
  // This is a very rough estimate and should be replaced with a proper tokenizer if possible.
  private static readonly CHARS_PER_TOKEN = 4;

  /**
   * Estimates the number of tokens in a given text.
   * @param text The text to count tokens from.
   * @returns The estimated number of tokens.
   */
  public static countTokens(text: string): number {
    if (!text) {
      return 0;
    }
    return Math.ceil(text.length / TokenTracker.CHARS_PER_TOKEN);
  }

  /**
   * Tracks and logs token usage for a model call.
   * @param prompt The prompt sent to the model. Can be a string or a structured object.
   * @param response The response received from the model. Can be a string or a structured object.
   * @param modelName Optional name of the model being called.
   * @returns An object containing prompt, response, and total token counts.
   */
  public static trackCall(
    prompt: any,
    response: any,
    modelName: string = 'unknown_model'
  ): { promptTokens: number; responseTokens: number; totalTokens: number } {
    const promptString =
      typeof prompt === 'string' ? prompt : JSON.stringify(prompt);
    const responseString =
      typeof response === 'string' ? response : JSON.stringify(response);

    const promptTokens = TokenTracker.countTokens(promptString);
    const responseTokens = TokenTracker.countTokens(responseString);
    const totalTokens = promptTokens + responseTokens;

    logger.debug(
      `Token usage for model [${modelName}]: Prompt tokens: ${promptTokens}, Response tokens: ${responseTokens}, Total tokens: ${totalTokens}`
    );

    return { promptTokens, responseTokens, totalTokens };
  }
}
