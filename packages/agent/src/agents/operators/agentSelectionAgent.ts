import { BaseAgent, AgentType, IAgent } from '../core/baseAgent.js';
import { logger } from '@snakagent/core';
import { BaseMessage, AIMessage, HumanMessage } from '@langchain/core/messages';
import { ModelSelectionAgent } from './modelSelectionAgent.js';

export interface AgentInfo {
  id: string;
  type: AgentType;
  description: string;
  capabilities?: string[];
  name?: string;
}

export interface AgentSelectionConfig {
  availableAgents: Record<string, IAgent>;
  modelSelector: ModelSelectionAgent | null;
  debug?: boolean;
}

export class AgentSelectionAgent extends BaseAgent {
  private availableAgents: Record<string, IAgent>;
  private agentInfo: Record<string, AgentInfo> = {};
  private modelSelector: ModelSelectionAgent | null;
  private debug: boolean;

  constructor(config: AgentSelectionConfig) {
    super('agent-selector', AgentType.OPERATOR);
    this.availableAgents = config.availableAgents || {};
    this.modelSelector = config.modelSelector;
    this.debug = config.debug || false;

    // Initialiser les informations sur les agents
    this.updateAgentInfo();
  }

  public async init(): Promise<void> {
    logger.debug('AgentSelectionAgent: Initializing');
    if (!this.modelSelector) {
      logger.warn(
        'AgentSelectionAgent: No ModelSelectionAgent provided, selection capabilities will be limited'
      );
    }

    if (Object.keys(this.availableAgents).length === 0) {
      logger.warn(
        'AgentSelectionAgent: No available agents provided for selection'
      );
    } else {
      logger.debug(
        `AgentSelectionAgent: Initialized with ${Object.keys(this.availableAgents).length} available agents`
      );
    }
  }

  /**
   * Met à jour la liste des agents disponibles
   */
  public setAvailableAgents(agents: Record<string, IAgent>): void {
    this.availableAgents = agents;
    this.updateAgentInfo();
  }

  /**
   * Met à jour les informations descriptives sur chaque agent
   */
  private updateAgentInfo(): void {
    this.agentInfo = {};

    Object.entries(this.availableAgents).forEach(([id, agent]) => {
      // Information de base
      const info: AgentInfo = {
        id,
        type: agent.type,
        description: this.getAgentDescription(id, agent.type),
      };

      // Si l'agent a des métadonnées supplémentaires, les utiliser
      if ((agent as any).metadata) {
        const metadata = (agent as any).metadata;
        if (metadata.name) info.name = metadata.name;
        if (metadata.description) info.description = metadata.description;
        if (metadata.capabilities) info.capabilities = metadata.capabilities;
      }

      this.agentInfo[id] = info;
    });

    if (this.debug) {
      logger.debug(
        `AgentSelectionAgent: Updated info for ${Object.keys(this.agentInfo).length} agents`
      );
    }
  }

  public async execute(
    input: string | BaseMessage,
    _config?: Record<string, any>
  ): Promise<AIMessage> {
    let queryString: string;
    if (typeof input === 'string') {
      queryString = input;
    } else if (input instanceof BaseMessage) {
      if (typeof input.content === 'string') {
        queryString = input.content;
      } else if (Array.isArray(input.content)) {
        // Handle MessageContentComplex[] by joining or serializing
        queryString = input.content
          .map((part) => {
            if (typeof part === 'string') {
              return part;
            }
            switch (part.type) {
              case 'text':
                return part.text || '';
              case 'image_url':
                // Represent image with a placeholder or serialize URL
                return '[Image]'; // Or: typeof part.image_url === 'string' ? part.image_url : JSON.stringify(part.image_url)
              default:
                return '';
            }
          })
          .join(' ');
      } else {
        // Fallback for other MessageContent types if necessary, or if input.content is a non-array object
        queryString = JSON.stringify(input.content);
      }
    } else {
      // This path should ideally not be hit due to type signature
      queryString = JSON.stringify(input);
    }

    if (this.debug) {
      logger.debug(
        `AgentSelectionAgent: Analyzing query: "${queryString.substring(0, 100)}${queryString.length > 100 ? '...' : ''}"`
      );
    }

    // Vérifie d'abord s'il y a une mention explicite d'un agent
    const explicitAgentId = this.checkForExplicitAgentMention(queryString);
    if (explicitAgentId && this.availableAgents[explicitAgentId]) {
      if (this.debug) {
        logger.debug(
          `AgentSelectionAgent: Detected explicit mention of agent "${explicitAgentId}"`
        );
      }
      return this.createSelectionResponse(explicitAgentId, queryString);
    }

    // Sinon, utiliser le modèle pour analyser la requête et déterminer l'agent approprié
    return await this.analyzeQueryWithModel(queryString);
  }

  private checkForExplicitAgentMention(query: string): string | null {
    // Recherche de patterns simples pour les mentions d'agents
    const idPattern = /agent(?:\\s+id)?\\s+(\\d+|[a-zA-Z_-]+)/i;
    const namePattern = /agent (?:named|called) ["']?([a-zA-Z_-]+)["']?/i;

    // Vérifier le pattern d'ID
    const idMatch = query.match(idPattern);
    if (idMatch && idMatch[1]) {
      const agentId = idMatch[1];
      // Vérifier que cet agent existe
      for (const [id, _agent] of Object.entries(this.availableAgents)) {
        if (id === agentId || id === `snak-${agentId}`) {
          return id;
        }
      }
    }

    // Vérifier le pattern de nom
    const nameMatch = query.match(namePattern);
    if (nameMatch && nameMatch[1]) {
      const agentName = nameMatch[1].toLowerCase();
      // Chercher un agent avec ce nom
      for (const [id, _agent] of Object.entries(this.availableAgents)) {
        if (id.toLowerCase().includes(agentName)) {
          return id;
        }
      }
    }

    return null;
  }

  private async analyzeQueryWithModel(query: string): Promise<AIMessage> {
    if (!this.modelSelector) {
      logger.warn(
        'AgentSelectionAgent: No ModelSelectionAgent available, defaulting to "snak"'
      );
      return this.createSelectionResponse('snak', query);
    }

    try {
      // Préparer les descriptions des agents pour le prompt
      const agentDescriptions = Object.entries(this.agentInfo)
        .map(([id, info]) => {
          const name = info.name || id;
          const capabilities = info.capabilities
            ? `\\n   Capabilities: ${info.capabilities.join(', ')}`
            : '';
          return `- ${id} (${name}): ${info.description}${capabilities}`;
        })
        .join('\\n');

      const prompt = new HumanMessage({
        content: `Analyze the following user query and determine which agent should handle it:
        
USER QUERY: "${query}"

Available agents:
${agentDescriptions}

Respond with ONLY the ID of the most appropriate agent to handle this query. 
If the query is about managing agent configurations or database operations related to agents, choose the appropriate operator agent.
If the query is a general request or conversational, respond with "snak".`,
      });

      // Utiliser le modèle 'fast' pour une analyse rapide
      const fastModel = await this.modelSelector.getModelForTask([], 'fast');
      const result = await fastModel.invoke([prompt]);

      // Extraire l'ID de l'agent
      const content =
        typeof result.content === 'string'
          ? result.content.trim()
          : JSON.stringify(result.content);

      // Extraire uniquement l'ID de l'agent, en supprimant tout texte supplémentaire
      const agentId = content.replace(/^[^a-zA-Z0-9_-]+|[^a-zA-Z0-9_-]+$/g, '');

      // Vérifier si l'agent sélectionné existe
      if (this.availableAgents[agentId]) {
        logger.debug(`AgentSelectionAgent: Model selected agent "${agentId}"`);
        return this.createSelectionResponse(agentId, query);
      } else {
        // Si le modèle a retourné un ID d'agent invalide, par défaut "snak"
        logger.warn(
          `AgentSelectionAgent: Model returned invalid agent ID "${agentId}", defaulting to "snak"`
        );
        return this.createSelectionResponse('snak', query);
      }
    } catch (error) {
      logger.error(
        `AgentSelectionAgent: Error during model analysis: ${error}`
      );
      // En cas d'erreur, utiliser l'agent principal par défaut
      return this.createSelectionResponse('snak', query);
    }
    // Fallback return, though theoretically unreachable if try/catch is exhaustive
    logger.error(
      'AgentSelectionAgent: Reached theoretically unreachable code in analyzeQueryWithModel. Defaulting to snak.'
    );
    return this.createSelectionResponse('snak', query);
  }

  private getAgentDescription(id: string, type: AgentType): string {
    if (id === 'supervisor') {
      return 'The main coordinator agent that orchestrates system operations';
    } else if (id === 'model-selector') {
      return 'Responsible for selecting the appropriate AI model for each task';
    } else if (id === 'memory') {
      return 'Manages persisting and retrieving memories across conversations';
    } else if (id === 'tools') {
      return 'Handles executing various tools and external integrations';
    } else if (id.startsWith('snak')) {
      return 'A general-purpose agent created by the user to handle various tasks';
    } else if (type === AgentType.OPERATOR) {
      return 'An operator agent that performs specific system functions';
    }
    return 'An agent in the system';
  }

  private createSelectionResponse(
    agentId: string,
    originalQuery: string
  ): AIMessage {
    return new AIMessage({
      content: `Selected agent: ${agentId}`,
      additional_kwargs: {
        from: 'agent-selector',
        nextAgent: agentId,
        originalUserQuery: originalQuery,
      },
    });
  }
}
