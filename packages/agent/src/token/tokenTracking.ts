import { logger } from '@snakagent/core';
import type { AIMessage } from '@langchain/core/messages';

export class TokenTracker {
  // Add static session counters
  private static sessionPromptTokens: number = 0;
  private static sessionResponseTokens: number = 0;
  private static sessionTotalTokens: number = 0;

  /**
   * Resets the session token counters
   */
  public static resetSessionCounters(): void {
    this.sessionPromptTokens = 0;
    this.sessionResponseTokens = 0;
    this.sessionTotalTokens = 0;
  }

  /**
   * Returns the current session token usage
   */
  public static getSessionTokenUsage(): {
    promptTokens: number;
    responseTokens: number;
    totalTokens: number;
  } {
    return {
      promptTokens: this.sessionPromptTokens,
      responseTokens: this.sessionResponseTokens,
      totalTokens: this.sessionTotalTokens,
    };
  }

  /**
   * Suit et enregistre l'utilisation des tokens en utilisant les métadonnées de LangChain
   */
  public static trackCall(
    result: any,
    modelName: string = 'unknown_model'
  ): { promptTokens: number; responseTokens: number; totalTokens: number } {
    // Gestion des différents formats de retour possibles
    let messageToProcess: AIMessage | null = null;

    // Cas 1: Si c'est déjà un AIMessage directement
    if (
      result &&
      typeof result === 'object' &&
      'content' in result &&
      result.content !== undefined
    ) {
      if (result._getType && result._getType() === 'ai') {
        messageToProcess = result as AIMessage;
      }
    }

    // Cas 2: Si c'est un tableau de messages, prendre le dernier message qui est probablement l'AIMessage
    if (Array.isArray(result)) {
      for (let i = result.length - 1; i >= 0; i--) {
        const msg = result[i];
        if (
          msg &&
          typeof msg === 'object' &&
          msg._getType &&
          msg._getType() === 'ai'
        ) {
          messageToProcess = msg as AIMessage;
          break;
        }
      }
    }

    // Si on a trouvé un AIMessage à traiter
    if (messageToProcess) {
      // Essayer d'abord usage_metadata (format standardisé)
      if (messageToProcess.usage_metadata) {
        const {
          input_tokens = 0,
          output_tokens = 0,
          total_tokens = 0,
        } = messageToProcess.usage_metadata;

        logger.debug(
          `Token usage for model [${modelName}]: Prompt tokens: ${input_tokens}, Response tokens: ${output_tokens}, Total tokens: ${total_tokens}`
        );

        // Update session counters
        this.sessionPromptTokens += input_tokens;
        this.sessionResponseTokens += output_tokens;
        this.sessionTotalTokens += total_tokens || input_tokens + output_tokens;

        return {
          promptTokens: input_tokens,
          responseTokens: output_tokens,
          totalTokens: total_tokens || input_tokens + output_tokens,
        };
      }

      // Essayer ensuite response_metadata (format spécifique au fournisseur)
      if (messageToProcess.response_metadata) {
        // Format OpenAI
        if ('tokenUsage' in messageToProcess.response_metadata) {
          const {
            promptTokens = 0,
            completionTokens = 0,
            totalTokens = 0,
          } = messageToProcess.response_metadata.tokenUsage;

          logger.debug(
            `Token usage for model [${modelName}]: Prompt tokens: ${promptTokens}, Response tokens: ${completionTokens}, Total tokens: ${totalTokens}`
          );

          // Update session counters
          this.sessionPromptTokens += promptTokens;
          this.sessionResponseTokens += completionTokens;
          this.sessionTotalTokens +=
            totalTokens || promptTokens + completionTokens;

          return {
            promptTokens: promptTokens,
            responseTokens: completionTokens,
            totalTokens: totalTokens || promptTokens + completionTokens,
          };
        }

        // Format Anthropic
        if ('usage' in messageToProcess.response_metadata) {
          const { input_tokens = 0, output_tokens = 0 } =
            messageToProcess.response_metadata.usage;
          const total_tokens = input_tokens + output_tokens;

          logger.debug(
            `Token usage for model [${modelName}]: Prompt tokens: ${input_tokens}, Response tokens: ${output_tokens}, Total tokens: ${total_tokens}`
          );

          // Update session counters
          this.sessionPromptTokens += input_tokens;
          this.sessionResponseTokens += output_tokens;
          this.sessionTotalTokens += total_tokens;

          return {
            promptTokens: input_tokens,
            responseTokens: output_tokens,
            totalTokens: total_tokens,
          };
        }
      }
    }

    // Si aucune information sur les tokens n'est disponible, utiliser une estimation fallback
    logger.warn(
      `No token usage information available for model [${modelName}], using fallback estimation`
    );
    const estimation = this.estimateTokensFromResult(result, modelName);

    // Update session counters with estimation
    this.sessionPromptTokens += estimation.promptTokens;
    this.sessionResponseTokens += estimation.responseTokens;
    this.sessionTotalTokens += estimation.totalTokens;

    return estimation;
  }

  /**
   * Estimation fallback des tokens basée sur le contenu du message
   */
  private static estimateTokensFromResult(
    result: any,
    modelName: string
  ): { promptTokens: number; responseTokens: number; totalTokens: number } {
    let responseText = '';

    // Extraire le texte de réponse de différents formats possibles
    if (typeof result === 'string') {
      responseText = result;
    } else if (Array.isArray(result)) {
      // Si c'est un tableau, joindre le contenu de tous les messages
      responseText = result
        .map((msg) =>
          typeof msg === 'object' && msg.content
            ? typeof msg.content === 'string'
              ? msg.content
              : JSON.stringify(msg.content)
            : ''
        )
        .join(' ');
    } else if (result && typeof result === 'object') {
      if ('content' in result) {
        responseText =
          typeof result.content === 'string'
            ? result.content
            : JSON.stringify(result.content);
      } else {
        responseText = JSON.stringify(result);
      }
    }

    // Estimation basique: ~1.3 tokens par mot
    const estimateTokensFromText = (text: string): number => {
      if (!text) return 0;
      const wordCount = text.split(/\s+/).filter(Boolean).length;
      const specialChars = text.replace(/[a-zA-Z0-9\s]/g, '').length;
      return Math.ceil(wordCount * 1.3 + specialChars * 0.5);
    };

    const responseTokens = estimateTokensFromText(responseText);

    logger.debug(
      `[FALLBACK ESTIMATE] Token usage for model [${modelName}]: ` +
        `Response tokens: ~${responseTokens} (prompt unknown)`
    );

    return { promptTokens: 0, responseTokens, totalTokens: responseTokens };
  }

  /**
   * Version pour le tracking complet avec prompt et response (compatible avec callback handleLLMEnd)
   */
  public static trackFullUsage(
    promptText: any,
    resultObj: any,
    modelName: string = 'unknown_model'
  ): { promptTokens: number; responseTokens: number; totalTokens: number } {
    // Vérifier si les données d'utilisation des tokens sont disponibles dans llmOutput
    if (resultObj.llmOutput?.tokenUsage) {
      const {
        promptTokens = 0,
        completionTokens = 0,
        totalTokens = 0,
      } = resultObj.llmOutput.tokenUsage;

      logger.debug(
        `Token usage for model [${modelName}]: Prompt tokens: ${promptTokens}, Response tokens: ${completionTokens}, Total tokens: ${totalTokens}`
      );

      // Update session counters
      this.sessionPromptTokens += promptTokens;
      this.sessionResponseTokens += completionTokens;
      this.sessionTotalTokens += totalTokens || promptTokens + completionTokens;

      return {
        promptTokens,
        responseTokens: completionTokens,
        totalTokens: totalTokens || promptTokens + completionTokens,
      };
    }

    // Vérifier si nous avons un AIMessage avec des métadonnées
    if (resultObj.generations?.[0]?.[0]?.message) {
      const message = resultObj.generations[0][0].message;
      const messageUsage = this.trackCall(message, modelName);

      // Si nous avons le prompt, mais que les tokens du prompt sont inconnus, essayer de les estimer
      if (messageUsage.promptTokens === 0 && promptText) {
        const promptString =
          typeof promptText === 'string'
            ? promptText
            : JSON.stringify(promptText);
        const estimatedPromptTokens = this.estimateTokensFromText(promptString);

        // Update session prompt tokens (response tokens already updated in trackCall)
        this.sessionPromptTokens += estimatedPromptTokens;
        this.sessionTotalTokens += estimatedPromptTokens;

        return {
          promptTokens: estimatedPromptTokens,
          responseTokens: messageUsage.responseTokens,
          totalTokens: estimatedPromptTokens + messageUsage.responseTokens,
        };
      }

      return messageUsage;
    }

    // Si nous n'avons pas d'informations de token, utiliser une estimation
    const promptString =
      typeof promptText === 'string' ? promptText : JSON.stringify(promptText);
    let responseString = '';

    if (resultObj.generations?.[0]?.[0]?.text) {
      responseString = resultObj.generations[0][0].text;
    } else if (resultObj.content) {
      responseString =
        typeof resultObj.content === 'string'
          ? resultObj.content
          : JSON.stringify(resultObj.content);
    } else {
      responseString = JSON.stringify(resultObj);
    }

    const promptTokens = this.estimateTokensFromText(promptString);
    const responseTokens = this.estimateTokensFromText(responseString);
    const totalTokens = promptTokens + responseTokens;

    logger.debug(
      `[FALLBACK ESTIMATE] Token usage for model [${modelName}]: ` +
        `Prompt tokens: ~${promptTokens}, Response tokens: ~${responseTokens}, Total tokens: ~${totalTokens}`
    );

    // Update session counters
    this.sessionPromptTokens += promptTokens;
    this.sessionResponseTokens += responseTokens;
    this.sessionTotalTokens += totalTokens;

    return { promptTokens, responseTokens, totalTokens };
  }

  /**
   * Méthode utilitaire pour estimer les tokens dans un texte
   */
  private static estimateTokensFromText(text: string): number {
    if (!text) return 0;
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const specialChars = text.replace(/[a-zA-Z0-9\s]/g, '').length;
    return Math.ceil(wordCount * 1.3 + specialChars * 0.5);
  }

  /**
   * Version synchrone simplifiée pour les cas où l'attente n'est pas possible
   */
  public static trackCallSync(
    prompt: any,
    response: any,
    modelName: string = 'unknown_model'
  ): { promptTokens: number; responseTokens: number; totalTokens: number } {
    const promptString =
      typeof prompt === 'string' ? prompt : JSON.stringify(prompt);
    const responseString =
      typeof response === 'string' ? response : JSON.stringify(response);

    const promptTokens = this.estimateTokensFromText(promptString);
    const responseTokens = this.estimateTokensFromText(responseString);
    const totalTokens = promptTokens + responseTokens;

    logger.debug(
      `[SYNC] Token usage for model [${modelName}]: Prompt tokens: ~${promptTokens}, Response tokens: ~${responseTokens}, Total tokens: ~${totalTokens}`
    );

    // Update session counters
    this.sessionPromptTokens += promptTokens;
    this.sessionResponseTokens += responseTokens;
    this.sessionTotalTokens += totalTokens;

    return { promptTokens, responseTokens, totalTokens };
  }
}
