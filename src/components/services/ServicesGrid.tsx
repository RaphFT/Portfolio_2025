/**
 * @fileoverview Grille des services
 * @description Composant affichant la grille des services avec les cartes
 * de services dans un layout responsive
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { ServiceCard } from './ServiceCard';
import { servicesData } from './servicesData';

/**
 * Composant grille des services
 * @description Affiche une grille responsive des services avec :
 * - Layout responsive (1 colonne mobile, 2 tablette, 3 desktop)
 * - Espacement adaptatif selon l'écran
 * - Largeur maximale centrée
 * - Cartes de services générées dynamiquement
 * 
 * @returns {JSX.Element} Grille des services
 * 
 * @example
 * <ServicesGrid />
 */
export const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
      {servicesData.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}; 