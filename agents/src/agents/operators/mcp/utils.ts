import { logger } from '@snakagent/core';

/**
 * Formate les détails d'un serveur MCP pour l'affichage
 * @param name Nom du serveur
 * @param config Configuration du serveur
 * @returns Chaîne formatée avec les détails du serveur
 */
export function formatServerDetails(name: string, config: any): string {
  try {
    // Extraire le qualifiedName si disponible
    let qualifiedName = 'N/A';
    if (config.args && config.args.includes('run')) {
      const runIndex = config.args.indexOf('run');
      if (runIndex >= 0 && runIndex + 1 < config.args.length) {
        qualifiedName = config.args[runIndex + 1];
      }
    }
    
    // Formater les variables d'environnement
    const envVars = config.env ? Object.keys(config.env).join(', ') : 'None';
    
    return `- ${name}:
  Qualified Name: ${qualifiedName}
  Command: ${config.command} ${config.args.join(' ')}
  Environment Variables: ${envVars}`;
  } catch (error) {
    logger.error(`Error formatting server details: ${error}`);
    return `- ${name}: Error formatting details`;
  }
}

/**
 * Vérifie si un serveur est un serveur Smithery
 * @param config Configuration du serveur
 * @returns true si c'est un serveur Smithery, false sinon
 */
export function isSmitheryServer(config: any): boolean {
  if (!config || !config.args) return false;
  
  // Un serveur Smithery a généralement @smithery/cli dans ses arguments
  return config.args.some((arg: string) => 
    arg.includes('@smithery/cli') || 
    arg.includes('smithery-ai')
  );
}