/**
 * @fileoverview Données des services du portfolio
 * @description Ce fichier contient toutes les données des services offerts
 * avec leurs icônes, descriptions et configurations d'affichage
 * @author Raphael Fremont
 * @version 1.0.0
 */

import {
  ComputerDesktopIcon,
  ArrowPathIcon,
  CogIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

/**
 * Interface définissant la structure d'un service
 * @interface ServiceItem
 * @property {string} id - Identifiant unique du service
 * @property {string} title - Titre du service
 * @property {string} description - Description détaillée du service
 * @property {React.ReactNode} icon - Icône du service (Heroicons)
 * @property {number} delay - Délai d'animation en secondes
 * @property {number} [colSpan] - Nombre de colonnes à occuper (optionnel)
 */
export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  colSpan?: number;
};

/**
 * Données des services offerts
 * @description Array contenant tous les services à afficher dans la section services
 * Chaque service suit l'interface ServiceItem définie ci-dessus
 * 
 * @type {ServiceItem[]}
 * 
 * @example
 * {
 *   id: 'custom-web-app',
 *   title: 'APPLICATION WEB SUR-MESURE',
 *   description: 'CRM, plateforme e-commerce...',
 *   icon: <ComputerDesktopIcon />,
 *   delay: 0,
 *   colSpan: 2
 * }
 */
export const servicesData: ServiceItem[] = [
  {
    id: 'custom-web-app',
    title: 'APPLICATION WEB SUR-MESURE',
    description: 'CRM, plateforme e-commerce, outil de gestion interne. Analyse des besoins, conception de l\'architecture (front-end, back-end, base de données), développement complet et déploiement.',
    icon: <ComputerDesktopIcon className="w-6 h-6 text-gray-600 stroke-1 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
    delay: 0,
    colSpan: 2
  },
  {
    id: 'website-optimization',
    title: 'REFONTE & OPTIMISATION',
    description: 'Amélioration du design, montée en version du framework, meilleure performance. Audit technique et UX, mise à jour du stack, SEO et temps de chargement optimisés.',
    icon: <ArrowPathIcon className="w-6 h-6 text-gray-600 stroke-1 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
    delay: 0.2
  },
  {
    id: 'business-automation',
    title: 'AUTOMATISATION DE PROCESSUS',
    description: 'Génération automatique de documents, synchronisation entre outils, reporting. Développement d\'APIs ou de scripts personnalisés, connexion avec des outils tiers.',
    icon: <CogIcon className="w-6 h-6 text-gray-600 stroke-1 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
    delay: 0.4
  },
  {
    id: 'mvp-development',
    title: 'DÉVELOPPEMENT MVP',
    description: 'Sprint rapide de développement (1 à 3 mois) pour tester une idée rapidement. Stack légère et scalable, livrable fonctionnel pour valider le marché.',
    icon: <RocketLaunchIcon className="w-6 h-6 text-gray-600 stroke-1 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
    delay: 0.6,
    colSpan: 2
  }
]; 