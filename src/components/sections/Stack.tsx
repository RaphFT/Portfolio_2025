/**
 * @fileoverview Section Stack technique du portfolio
 * @description Composant de la section Stack avec présentation
 * des technologies et outils utilisés
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { StackHeader } from '../stack/StackHeader';
import { StackGrid } from '../stack/StackGrid';

/**
 * Composant section Stack technique
 * @description Affiche la section Stack avec :
 * - Hauteur minimale adaptée à l'écran
 * - Layout centré verticalement et horizontalement
 * - Arrière-plan blanc
 * - En-tête avec titre et description
 * - Grille des technologies avec cartes interactives
 * - Padding responsive optimisé
 * - Largeur maximale centrée
 * - Espacement adaptatif entre les éléments
 * - Accessibilité avec aria-labelledby
 * 
 * @returns {JSX.Element} Section Stack complète
 * 
 * @example
 * <Stack />
 */
export const Stack = () => {
  return (
    <section 
      id="stack" 
      className="min-h-screen w-full bg-white flex items-center justify-center py-4 sm:py-6 lg:py-8 pb-8 sm:pb-6"
      aria-labelledby="stack-heading"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-6 lg:space-y-8">
          <StackHeader />
          <StackGrid />
        </div>
      </div>
    </section>
  );
}; 