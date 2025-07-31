/**
 * @fileoverview Section Services du portfolio
 * @description Composant de la section Services avec présentation
 * des services offerts et animations sophistiquées
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { ServicesHeader } from '../services/ServicesHeader';
import { ServicesGrid } from '../services/ServicesGrid';

/**
 * Composant section Services
 * @description Affiche la section Services avec :
 * - Hauteur minimale adaptée à l'écran
 * - Layout centré horizontalement, aligné en haut
 * - Arrière-plan blanc
 * - En-tête avec titre et badge
 * - Grille des services avec cartes animées
 * - Padding responsive optimisé
 * - Container avec espacement adaptatif
 * - Espacement adaptatif entre les éléments
 * - Accessibilité avec aria-labelledby
 * 
 * @returns {JSX.Element} Section Services complète
 * 
 * @example
 * <Services />
 */
export const Services = () => {
  return (
    <section 
      id="services" 
      className="min-h-screen sm:min-h-screen w-full bg-white flex items-start justify-center py-4 sm:py-8 pt-6 sm:pt-12 pb-8 sm:pb-8"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 lg:gap-6">
          <ServicesHeader />
          <ServicesGrid />
        </div>
      </div>
    </section>
  );
}; 