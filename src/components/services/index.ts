/**
 * @fileoverview Exports de la section services
 * @description Fichier d'index centralisant tous les exports de la section services
 * incluant les composants principaux, les données et les badges
 * @author Raphael Fremont
 * @version 1.0.0
 */

// Composants principaux de la section services
export { ServicesHeader } from './ServicesHeader';
export { ServicesGrid } from './ServicesGrid';
export { ServiceCard } from './ServiceCard';

// Données et types de la section services
export { servicesData, type ServiceItem } from './servicesData';

// Composants de badges et leurs constantes
export { Badge, type BadgeProps } from './badge';
export { badgeVariants } from './badgeConstants'; 