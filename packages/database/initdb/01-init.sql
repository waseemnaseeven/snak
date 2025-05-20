
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TYPE agent_prompt AS (
    bio TEXT,
    lore TEXT[] ,
    objectives TEXT[],
    knowledge TEXT[]
);
          
CREATE TYPE memory AS (
    memory BOOLEAN,
    shortTermMemorySize INTEGER
);

CREATE TYPE model AS (
              provider TEXT,
              model_name TEXT,
              description TEXT
          );

CREATE TABLE IF NOT EXISTS agents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    "group" VARCHAR(255) NOT NULL DEFAULT 'default_group',
    prompt agent_prompt NOT NULL,
    interval INTEGER NOT NULL DEFAULT 5,
    plugins TEXT[] NOT NULL DEFAULT '{}',
    memory memory NOT NULL DEFAULT ROW(false, 5)::memory
);

CREATE TABLE IF NOT EXISTS agent_iterations (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            data JSONB NOT NULL
            );

CREATE TABLE IF NOT EXISTS message (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            agent_id UUID NOT NULL,
            content TEXT NOT NULL,
            -- agent_iteration_id UUID NOT NULL,
            sender_type TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (agent_id) REFERENCES agents(id) ON DELETE CASCADE
        );

CREATE TABLE IF NOT EXISTS models_config (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            fast model NOT NULL,
            smart model NOT NULL,
            cheap model NOT NULL
        );