/**
 * @fileoverview Grille des technologies de la stack
 * @description Composant affichant la grille des technologies avec les cartes
 * de technologies dans un layout responsive
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { TechCard } from './TechCard';
import { getStackData } from './stackData';

/**
 * Composant grille des technologies
 * @description Affiche une grille responsive des technologies avec :
 * - Layout responsive (2 colonnes mobile, 2 tablette, 3 desktop)
 * - Espacement adaptatif selon l'écran
 * - Largeur maximale centrée avec padding
 * - Cartes de technologies générées dynamiquement
 * - Données récupérées via getStackData()
 * 
 * @returns {JSX.Element} Grille des technologies
 * 
 * @example
 * <StackGrid />
 */
export const StackGrid = () => {
  // Récupération des données de la stack technique
  const techStack = getStackData();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 lg:gap-8">
        {techStack.map((tech) => (
          <TechCard key={tech.id} tech={tech} />
        ))}
      </div>
    </div>
  );
}; 