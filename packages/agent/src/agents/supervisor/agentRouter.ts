import { BaseMessage, AIMessage, HumanMessage } from '@langchain/core/messages';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { logger } from '@snakagent/core';
import { ModelSelectionAgent } from '../operators/modelSelectionAgent.js';
import { IAgent } from '../core/baseAgent.js';

/**
 * Options pour l'enregistrement d'un agent dans le router
 */
export interface AgentRegistrationOptions {
  /** Identifiant unique de l'agent */
  id: string;
  /** Instance de l'agent */
  agent: IAgent;
  /** Description des capacités de l'agent en langage naturel */
  description: string;
  /** Exemples de requêtes qui devraient être dirigées vers cet agent */
  examples: string[];
  /** Catégorie de l'agent (operator, snak, etc.) */
  category: 'operator' | 'snak' | 'system';
  /** Niveau de priorité (plus élevé = plus prioritaire en cas d'ambiguïté) */
  priority?: number;
}

/**
 * Résultat de l'analyse de routing
 */
export interface RoutingDecision {
  /** ID de l'agent ciblé */
  targetAgentId: string;
  /** Confiance dans la décision (0-1) */
  confidence: number;
  /** ID de l'agent Snak spécifique si applicable */
  snakAgentId?: string;
  /** Explication du choix */
  explanation: string;
  /** Paramètres extraits de la requête */
  parameters?: Record<string, any>;
}

/**
 * Agent Router qui utilise un LLM pour déterminer l'agent approprié pour chaque requête
 */
export class AgentRouter {
  private agents: Map<string, AgentRegistrationOptions> = new Map();
  private modelSelectionAgent: ModelSelectionAgent;
  private routingPromptTemplate: string;
  private snakAgents: Record<string, string> = {};
  private debug: boolean;

  /**
   * Crée une nouvelle instance du router d'agents
   * @param modelSelectionAgent Agent de sélection de modèle pour le LLM de routing
   * @param debug Active le mode debug
   */
  constructor(
    modelSelectionAgent: ModelSelectionAgent,
    debug: boolean = false
  ) {
    this.modelSelectionAgent = modelSelectionAgent;
    this.debug = debug;

    // Prompt utilisé pour déterminer l'agent approprié
    this.routingPromptTemplate = `
Tu es un système intelligent de routing de requêtes qui détermine quel agent spécialisé est le plus approprié pour traiter une demande utilisateur.

# Agents disponibles

{agentsDescription}

# Requête utilisateur
"{userRequest}"

# Instructions
1. Analyse la requête utilisateur pour comprendre son intention
2. Détermine l'agent le plus approprié pour cette requête
3. Si la requête concerne un agent Snak spécifique, identifie-le
4. Estime ta confiance dans cette décision (0-1)
5. Explique brièvement ton raisonnement
6. Extrait tous les paramètres pertinents de la requête

# Format de réponse
Réponds uniquement avec un objet JSON au format suivant:
\`\`\`json
{
  "targetAgentId": "id_de_l_agent_ciblé",
  "confidence": 0.9,
  "snakAgentId": "id_agent_snak_spécifique", // Uniquement si un agent Snak spécifique est demandé
  "explanation": "Explication brève de la raison de ce choix",
  "parameters": {
    // Paramètres extraits de la requête, si applicables
  }
}
\`\`\`
`;
  }

  /**
   * Enregistre un agent Snak avec ses identifiants
   * @param idToName Mapping des IDs d'agents vers leurs noms
   */
  public registerSnakAgents(idToName: Record<string, string>): void {
    this.snakAgents = idToName;
    if (this.debug) {
      logger.debug(
        `AgentRouter: Registered ${Object.keys(idToName).length} Snak agents`
      );
    }
  }

  /**
   * Enregistre un agent dans le router
   * @param options Options d'enregistrement
   */
  public registerAgent(options: AgentRegistrationOptions): void {
    this.agents.set(options.id, options);
    if (this.debug) {
      logger.debug(
        `AgentRouter: Registered agent "${options.id}" (${options.category})`
      );
    }
  }

  /**
   * Désenregistre un agent
   * @param id ID de l'agent à désenregistrer
   * @returns true si l'agent a été désenregistré, false sinon
   */
  public unregisterAgent(id: string): boolean {
    if (!this.agents.has(id)) {
      return false;
    }
    this.agents.delete(id);
    if (this.debug) {
      logger.debug(`AgentRouter: Unregistered agent "${id}"`);
    }
    return true;
  }

  /**
   * Détermine l'agent approprié pour une requête
   * @param message Message utilisateur à analyser
   * @returns Décision de routing
   */
  public async determineTargetAgent(
    message: BaseMessage
  ): Promise<RoutingDecision> {
    const userContent =
      typeof message.content === 'string'
        ? message.content
        : JSON.stringify(message.content);

    try {
      // Vérification rapide pour un agent Snak explicitement mentionné (cas trivial)
      const explicitAgentMatch = this.checkForExplicitAgentRequest(userContent);
      if (explicitAgentMatch && explicitAgentMatch.confidence > 0.9) {
        if (this.debug) {
          logger.debug(
            `AgentRouter: Explicit agent request detected for "${explicitAgentMatch.targetAgentId}${explicitAgentMatch.snakAgentId ? ' [' + explicitAgentMatch.snakAgentId + ']' : ''}"`
          );
        }
        return explicitAgentMatch;
      }

      // Générer la description de tous les agents pour le prompt
      const agentsDescription = this.generateAgentsDescription();

      // Créer et formater le prompt
      const prompt = ChatPromptTemplate.fromTemplate(
        this.routingPromptTemplate
      );
      const formattedPrompt = await prompt.formatMessages({
        agentsDescription,
        userRequest: userContent,
      });

      // Utiliser le modelSelectionAgent pour obtenir un modèle et l'invoquer
      const model = await this.modelSelectionAgent.getModelForTask([], 'fast');
      const response = await model.invoke(formattedPrompt);

      // Extraire la décision JSON de la réponse
      const decision = this.extractDecisionFromResponse(response);

      if (this.debug) {
        logger.debug(
          `AgentRouter: LLM routing decision: ${decision.targetAgentId} (confidence: ${decision.confidence})`
        );
        if (decision.snakAgentId) {
          logger.debug(
            `AgentRouter: Specific Snak agent: ${decision.snakAgentId}`
          );
        }
      }

      return decision;
    } catch (error) {
      logger.error(`AgentRouter: Error determining target agent: ${error}`);

      // Fallback - utiliser l'agent supervisor en cas d'erreur
      return {
        targetAgentId: 'supervisor',
        confidence: 0.5,
        explanation: `Erreur lors de la détermination de l'agent cible: ${error}`,
      };
    }
  }

  /**
   * Vérifie si la requête mentionne explicitement un agent Snak
   * @param content Contenu du message
   * @returns Décision de routing si un agent est explicitement mentionné, null sinon
   */
  private checkForExplicitAgentRequest(
    content: string
  ): RoutingDecision | null {
    // Pattern pour détecter une requête d'agent explicite
    const explicitAgentPattern =
      /\b(use|using|with|via|through|agent|par|avec)\s+(?:agent\s+)?['"]?([a-z0-9_-]+)['"]?/i;
    const match = content.match(explicitAgentPattern);

    if (match && match[2]) {
      const agentName = match[2].toLowerCase();

      // Vérifier si c'est un nom d'agent Snak connu
      for (const [id, name] of Object.entries(this.snakAgents)) {
        if (
          name.toLowerCase() === agentName ||
          id.toLowerCase() === agentName
        ) {
          return {
            targetAgentId: 'snak',
            snakAgentId: id,
            confidence: 0.95,
            explanation: `L'utilisateur a explicitement demandé à utiliser l'agent Snak "${name}"`,
          };
        }
      }
    }

    return null;
  }

  /**
   * Génère une description de tous les agents enregistrés
   * @returns Description formatée des agents
   */
  private generateAgentsDescription(): string {
    const agentDescriptions: string[] = [];

    // Trier les agents par catégorie puis par priorité
    const sortedAgents = Array.from(this.agents.values()).sort((a, b) => {
      // D'abord par catégorie
      if (a.category !== b.category) {
        // Ordre de priorité des catégories
        const categoryOrder = { system: 0, operator: 1, snak: 2 };
        return categoryOrder[a.category] - categoryOrder[b.category];
      }
      // Ensuite par priorité (valeur plus élevée = plus prioritaire)
      return (b.priority || 0) - (a.priority || 0);
    });

    // Générer les descriptions
    for (const agent of sortedAgents) {
      let description = `## Agent: ${agent.id} (${agent.category})\n`;
      description += `${agent.description}\n\n`;

      if (agent.examples && agent.examples.length > 0) {
        description += 'Exemples de requêtes:\n';
        for (const example of agent.examples) {
          description += `- "${example}"\n`;
        }
        description += '\n';
      }

      agentDescriptions.push(description);
    }

    // Ajouter des informations sur les agents Snak spécifiques
    if (Object.keys(this.snakAgents).length > 0) {
      let snakDescription = '## Agents Snak spécifiques\n';
      snakDescription +=
        'Ces agents peuvent être explicitement demandés par nom:\n\n';

      for (const [id, name] of Object.entries(this.snakAgents)) {
        snakDescription += `- ID: ${id}, Nom: ${name}\n`;
      }

      agentDescriptions.push(snakDescription);
    }

    return agentDescriptions.join('\n');
  }

  /**
   * Extrait la décision JSON de la réponse du LLM
   * @param response Réponse du LLM
   * @returns Décision de routing
   */
  private extractDecisionFromResponse(response: AIMessage): RoutingDecision {
    const content =
      typeof response.content === 'string'
        ? response.content
        : JSON.stringify(response.content);

    try {
      // Chercher un bloc JSON dans la réponse
      const jsonMatch = content.match(
        /```(?:json)?\s*([\s\S]*?)\s*```|(\{[\s\S]*\})/
      );

      if (jsonMatch) {
        const jsonContent = (jsonMatch[1] || jsonMatch[2]).trim();
        const decision = JSON.parse(jsonContent);

        // Vérifier que les champs requis sont présents
        if (!decision.targetAgentId) {
          throw new Error('La décision ne contient pas de targetAgentId');
        }

        // Vérifier et convertir les valeurs
        return {
          targetAgentId: decision.targetAgentId,
          confidence:
            typeof decision.confidence === 'number' ? decision.confidence : 0.7,
          snakAgentId: decision.snakAgentId || undefined,
          explanation: decision.explanation || "Pas d'explication fournie",
          parameters: decision.parameters || {},
        };
      } else {
        // Aucun JSON trouvé, utiliser une heuristique de fallback
        if (content.toLowerCase().includes('snak')) {
          return {
            targetAgentId: 'snak',
            confidence: 0.6,
            explanation: "Fallback: Contenu contient 'snak'",
          };
        }

        // Par défaut, router vers le superviseur
        return {
          targetAgentId: 'supervisor',
          confidence: 0.5,
          explanation: 'Fallback: Aucune décision JSON détectée',
        };
      }
    } catch (error) {
      logger.error(
        `AgentRouter: Error extracting decision from response: ${error}`
      );

      // Fallback en cas d'erreur
      return {
        targetAgentId: 'supervisor',
        confidence: 0.5,
        explanation: `Erreur lors de l'extraction de la décision: ${error}`,
      };
    }
  }
}
