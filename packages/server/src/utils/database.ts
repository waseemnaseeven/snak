import { Postgres } from '@snakagent/database';
import { logger } from '@snakagent/core';

// Modify converdastion name os usefull we have to avoir using name as index even if he is UNIQUE
export const check_if_conversation_exists = async (
  conversation_name?: string,
  conversation_id?: number
): Promise<boolean> => {
  try {
    if (conversation_id && conversation_name) {
      logger.error(
        'Both conversation_id and conversation_name are provided. Please provide only one.'
      );
      throw new Error(
        'Both conversation_id and conversation_name are provided. Please provide only one.'
      );
    }
    let conversation_q;
    if (typeof conversation_name === 'string') {
      conversation_q = new Postgres.Query(
        `SELECT EXISTS(SELECT 1 FROM conversation WHERE conversation_name = $1)`,
        [conversation_name]
      );
    } else {
      conversation_q = new Postgres.Query(
        `SELECT EXISTS(SELECT 1 FROM conversation WHERE conversation_id = $1)`,
        [conversation_id]
      );
    }

    const result = await Postgres.query<{ exists: boolean }>(conversation_q);
    if (!result[0].exists) {
      logger.debug(`Conversation don't exists: ${conversation_name}`);
      return false;
    }
    logger.debug(`Conversation exists: ${conversation_name}`);
    return true;
  } catch (error) {
    logger.error(error);
    return false;
  }
};
