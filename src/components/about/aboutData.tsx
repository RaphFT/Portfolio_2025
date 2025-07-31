/**
 * @fileoverview Données de la section about
 * @description Ce fichier contient les données de texte pour la section about
 * avec support multilingue et gestion des versions
 * @author Raphael Fremont
 * @version 1.0.0
 */

/**
 * Interface définissant la structure des données de texte about
 * @interface AboutTextData
 * @property {string} id - Identifiant unique du texte
 * @property {string} text - Contenu du texte de présentation
 * @property {'fr' | 'en'} language - Langue du texte
 * @property {string} version - Version des données
 */
export type AboutTextData = {
  id: string;
  text: string;
  language: 'fr' | 'en';
  version: string;
};

/**
 * Données de texte pour la section about
 * @description Contient le texte de présentation principal de Raphael Fremont
 * avec informations sur ses compétences et services
 * 
 * @type {AboutTextData}
 * 
 * @example
 * {
 *   id: 'about-main',
 *   text: "Je suis Raphael Fremont, développeur web freelance...",
 *   language: 'fr',
 *   version: '1.0.0'
 * }
 */
export const aboutTextData: AboutTextData = {
  id: 'about-main',
  text: "Je suis Raphael Fremont, développeur web freelance créant des sites web sur mesure, haute performance qui reflètent la véritable identité de votre marque. Je combine du code propre, les meilleures pratiques SEO, et un design créatif pour construire des expériences numériques qui engagent les utilisateurs et génèrent des résultats. Que vous lanciez une marque ou amélioriez votre présence en ligne, je suis là pour vous aider à vous démarquer.",
  language: 'fr',
  version: '1.0.0'
};

/**
 * Fonction pour récupérer le texte about selon la langue
 * @description Retourne le texte de présentation dans la langue demandée
 * Actuellement supporte le français, avec placeholder pour l'anglais
 * 
 * @param {'fr' | 'en'} [language='fr'] - Langue souhaitée
 * @returns {string} Texte de présentation dans la langue demandée
 * 
 * @example
 * const frenchText = getAboutText('fr');
 * const englishText = getAboutText('en'); // TODO: Implémenter
 */
export const getAboutText = (language: 'fr' | 'en' = 'fr'): string => {
  // Pour l'instant, nous n'avons que le texte français
  // À l'avenir, cela pourrait être étendu pour supporter plusieurs langues
  if (language === 'fr') {
    return aboutTextData.text;
  }
  
  // Placeholder pour la traduction anglaise
  return aboutTextData.text; // TODO: Ajouter la traduction anglaise
}; 