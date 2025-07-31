/**
 * @fileoverview Section About principale du portfolio
 * @description Composant de la section About avec présentation
 * et animation de texte optimisée
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { AboutContainer } from '../about/AboutContainer';
import { AboutText } from '../about/AboutText';

/**
 * Composant section About principale
 * @description Affiche la section About avec :
 * - Hauteur minimale adaptée à l'écran
 * - Centrage vertical et horizontal
 * - Arrière-plan blanc
 * - Padding responsive optimisé
 * - Container avec espacement adaptatif
 * - Composant de texte avec animation
 * - Accessibilité avec aria-labelledby
 * 
 * @returns {JSX.Element} Section About complète
 * 
 * @example
 * <About />
 */
export const About = () => {
  return (
    <section 
      id="about" 
      className="flex justify-center items-center pt-0 pb-8 min-h-screen bg-white sm:min-h-screen sm:pt-6 lg:pt-8 sm:pb-6 lg:pb-8"
      aria-labelledby="about-heading"
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="py-8 sm:py-0">
          <AboutContainer>
            <AboutText />
          </AboutContainer>
        </div>
      </div>
    </section>
  );
}; 