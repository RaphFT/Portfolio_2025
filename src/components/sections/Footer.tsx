/**
 * @fileoverview Section Footer du portfolio
 * @description Composant de la section Footer avec contact
 * et effets visuels Matrix
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { FooterHeader } from '../footer/FooterHeader';
import { FooterContact } from '../footer/FooterContact';
import { MatrixParticles } from '../effects/MatrixParticles';

/**
 * Composant section Footer
 * @description Affiche la section Footer avec :
 * - Hauteur minimale adaptée à l'écran
 * - Layout centré verticalement et horizontalement
 * - Arrière-plan avec couleur primaire
 * - Effet de particules Matrix en arrière-plan
 * - En-tête avec titre inspirant
 * - Liens de contact avec animations
 * - Padding responsive optimisé
 * - Largeur maximale centrée
 * - Espacement adaptatif entre les éléments
 * - Accessibilité avec aria-labelledby et role
 * 
 * @returns {JSX.Element} Section Footer complète
 * 
 * @example
 * <Footer />
 */
export const Footer = () => {
  return (
    <footer 
      id="contact" 
      className="flex relative justify-center items-center py-4 min-h-screen text-white sm:min-h-screen bg-primary sm:py-12 lg:py-16"
      aria-labelledby="contact-heading"
      role="contentinfo"
    >
      {/* Particules Matrix - Footer uniquement */}
      <MatrixParticles intensity={0.4} speed={1.5} color="#00FF00" />
      
      <div className="relative z-10 px-4 mx-auto w-full max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center mx-auto space-y-8 max-w-5xl text-center sm:space-y-12 lg:space-y-16">
          <FooterHeader />
          <FooterContact />
        </div>
      </div>
    </footer>
  );
}; 