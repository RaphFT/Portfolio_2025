/**
 * @fileoverview Section Parcours du portfolio
 * @description Composant de la section Parcours avec présentation
 * du parcours de formation et récompenses
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { ParcoursHeader } from './ParcoursHeader';
import { ParcoursContent } from './ParcoursContent';

/**
 * Composant section Parcours
 * @description Affiche la section Parcours avec :
 * - Hauteur réduite par rapport aux autres sections
 * - Layout centré horizontalement
 * - Arrière-plan blanc
 * - En-tête avec titre et badge
 * - Contenu avec logos et badges de récompense
 * - Padding responsive optimisé
 * - Container avec espacement adaptatif
 * - Espacement adaptatif entre les éléments
 * - Accessibilité avec aria-labelledby
 * 
 * @returns {JSX.Element} Section Parcours complète
 * 
 * @example
 * <Parcours />
 */
export const Parcours = () => {
  return (
    <section 
      id="parcours" 
      className="min-h-[40vh] w-full bg-white flex items-center justify-center py-8 sm:py-12 lg:py-16"
      aria-labelledby="parcours-heading"
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 justify-center items-center sm:gap-8 lg:gap-12">
          <ParcoursHeader />
          <ParcoursContent />
        </div>
      </div>
    </section>
  );
}; 