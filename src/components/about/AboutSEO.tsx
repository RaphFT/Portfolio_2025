/**
 * @fileoverview Composant SEO pour la section about
 * @description Gère les meta tags et données structurées pour optimiser
 * le référencement de la section about
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { useMetaTags, useStructuredData } from '../hero/hooks';

/**
 * Interface des props du composant AboutSEO
 * @interface AboutSEOProps
 */
type AboutSEOProps = {
  title?: string;
  description?: string;
  keywords?: string[];
};

/**
 * Composant SEO pour la section about
 * @description Gère l'optimisation SEO de la section about avec :
 * - Meta tags personnalisées
 * - Données structurées pour les moteurs de recherche
 * - Mots-clés optimisés
 * - Type de contenu 'profile' pour les réseaux sociaux
 * 
 * @param {AboutSEOProps} props - Props du composant
 * @param {string} [props.title] - Titre de la page (meta title)
 * @param {string} [props.description] - Description de la page (meta description)
 * @param {string[]} [props.keywords] - Mots-clés pour le SEO
 * 
 * @returns {null} Ce composant ne rend rien visuellement
 * 
 * @example
 * <AboutSEO 
 *   title="À propos - Raphael Fremont"
 *   description="Développeur web freelance..."
 *   keywords={['développeur', 'freelance', 'web']}
 * />
 */
export const AboutSEO = ({
  title = 'À propos - Raphael Fremont | Développeur Web Freelance',
  description = 'Découvrez Raphael Fremont, développeur web freelance basé en France. Spécialisé dans la création de sites web sur mesure, haute performance avec les meilleures pratiques SEO et un design créatif.',
  keywords = ['développeur web', 'freelance', 'sites web', 'SEO', 'design créatif', 'France', 'Raphael Fremont']
}: AboutSEOProps) => {
  // Meta tags pour la section About
  useMetaTags({
    title,
    description,
    keywords,
    type: 'profile',
    url: 'https://raphaelfremont.com/about'
  });

  // Données structurées pour la section About
  useStructuredData();

  // Ce composant ne rend rien visuellement
  return null;
}; 