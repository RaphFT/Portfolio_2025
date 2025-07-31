/**
 * @fileoverview Données de navigation du portfolio
 * @description Ce fichier contient la configuration de la navigation principale
 * avec les liens vers les différentes sections du site
 * @author Raphael Fremont
 * @version 1.0.0
 */

/**
 * Interface définissant la structure d'un élément de navigation
 * @interface NavigationItem
 * @property {string} id - Identifiant unique de l'élément
 * @property {string} label - Texte affiché dans la navigation
 * @property {string} href - Lien vers la section (format #section-id)
 * @property {boolean} [isCurrent] - Indique si c'est la page courante
 */
export type NavigationItem = {
  id: string;
  label: string;
  href: string;
  isCurrent?: boolean;
};

/**
 * Configuration de la navigation principale
 * @description Contient tous les éléments de navigation avec leurs propriétés
 * Chaque élément correspond à une section du portfolio
 * 
 * @type {Object}
 * @property {NavigationItem[]} items - Array des éléments de navigation
 * 
 * @example
 * {
 *   items: [
 *     {
 *       id: 'home',
 *       label: 'RAPHAEL F.',
 *       href: '#home',
 *       isCurrent: true
 *     }
 *   ]
 * }
 */
export const navigationData = {
  items: [
    {
      id: 'home',
      label: 'RAPHAEL F.',
      href: '#home',
      isCurrent: true
    },
    {
      id: 'stack',
      label: 'STACK',
      href: '#stack'
    },
    {
      id: 'projects',
      label: 'PROJETS',
      href: '#projects'
    },
    {
      id: 'contact',
      label: 'CONTACT',
      href: '#contact'
    }
  ]
} as const; 