/**
 * @fileoverview Section About2 alternative du portfolio
 * @description Composant de la section About2 avec arrière-plan animé
 * et effets visuels sophistiqués
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { About2Background } from '../about2/About2Background';
import { About2Title } from '../about2/About2Title';
import { About2Description } from '../about2/About2Description';

/**
 * Composant section About2 alternative
 * @description Affiche la section About2 avec :
 * - Hauteur minimale adaptée à l'écran
 * - Layout centré verticalement et horizontalement
 * - Arrière-plan animé avec Three.js
 * - Titre avec effet mix-blend-exclusion
 * - Description avec animation
 * - Padding responsive optimisé
 * - Accessibilité avec aria-labelledby
 * 
 * @returns {JSX.Element} Section About2 complète
 * 
 * @example
 * <About2 />
 */
export const About2 = () => {
  return (
    <section 
      id="about2" 
      className="min-h-screen sm:min-h-screen relative flex flex-col justify-center items-center bg-white py-4 sm:py-8 pb-8 sm:pb-8"
      aria-labelledby="about2-heading"
    >
      <About2Background />
      <About2Title />
      <About2Description />
    </section>
  );
}; 