import { Postgres } from '@snakagent/database';
import { logger } from '@snakagent/core';

export const check_if_conversation_exists = async (
  conversation_id: number
): Promise<boolean> => {
  try {
    if (!conversation_id) {
      logger.debug(`Conversation ID is not provided`);
      return false;
    }
    const conversation_q = new Postgres.Query(
      `SELECT EXISTS(SELECT 1 FROM conversation WHERE conversation_id = $1)`,
      [conversation_id]
    );
    const result = await Postgres.query<{ exists: boolean }>(conversation_q);
    if (!result[0].exists) {
      logger.debug(`Conversation don't exists: ${conversation_id}`);
      return false;
    }
    logger.debug(`Conversation exists: ${conversation_id}`);
    return true;
  } catch (error) {
    logger.error(error);
    throw new Error(`Error checking conversation existence: ${error}`);
  }
};
