/**
 * @fileoverview Données de la section about2
 * @description Ce fichier contient les données de texte pour la section about2
 * avec support multilingue et gestion des versions
 * @author Raphael Fremont
 * @version 1.0.0
 */

/**
 * Interface définissant la structure des données de texte about2
 * @interface About2TextData
 * @property {string} id - Identifiant unique du texte
 * @property {string} title - Titre principal de la section
 * @property {string} description - Description détaillée
 * @property {'fr' | 'en'} language - Langue du texte
 * @property {string} version - Version des données
 */
export type About2TextData = {
  id: string;
  title: string;
  description: string;
  language: 'fr' | 'en';
  version: string;
};

/**
 * Données de texte pour la section about2
 * @description Contient le titre et la description de la section about2
 * avec informations sur la vision globale et les résultats
 *
 * @type {About2TextData}
 *
 * @example
 * {
 *   id: 'about2-main',
 *   title: "Une vision globale. Des résultats qui font la différence.",
 *   description: "Une synergie unique entre le design et la technique...",
 *   language: 'fr',
 *   version: '1.0.0'
 * }
 */
export const about2TextData: About2TextData = {
  id: 'about2-main',
  title: "Une vision globale. Des résultats qui font la différence.",
  description: "Une synergie unique entre le design et la technique, la créativité et la conception. Pour des résultats qui font la différence et des solutions au service de vos innovations.",
  language: 'fr',
  version: '1.0.0'
};

/**
 * Fonction pour récupérer le texte about2 selon la langue
 * @description Retourne le titre et la description dans la langue demandée
 * Actuellement supporte le français, avec placeholder pour l'anglais
 *
 * @param {'fr' | 'en'} [language='fr'] - Langue souhaitée
 * @returns {Object} Objet contenant title et description
 * @returns {string} returns.title - Titre dans la langue demandée
 * @returns {string} returns.description - Description dans la langue demandée
 *
 * @example
 * const { title, description } = getAbout2Text('fr');
 * const englishText = getAbout2Text('en'); // TODO: Implémenter
 */
export const getAbout2Text = (language: 'fr' | 'en' = 'fr'): { title: string; description: string } => {
  // Pour l'instant, nous n'avons que le texte français
  // À l'avenir, cela pourrait être étendu pour supporter plusieurs langues
  if (language === 'fr') {
    return {
      title: about2TextData.title,
      description: about2TextData.description
    };
  }
  
  // Placeholder pour la traduction anglaise
  return {
    title: about2TextData.title, // TODO: Ajouter la traduction anglaise
    description: about2TextData.description // TODO: Ajouter la traduction anglaise
  };
}; 