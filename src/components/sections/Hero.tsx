/**
 * @fileoverview Section Hero principale du portfolio
 * @description Composant principal de la section Hero avec layout responsive
 * et optimisations pour mobile et desktop
 * @author Raphael Fremont
 * @version 1.0.0
 */

import '../../styles/fonts.css';
import { TextMarquee } from '../hero/TextMarquee';
import { HeroTopBar } from '../hero/HeroTopBar';
import { HeroTitle } from '../hero/HeroTitle';
import { HeroTerminal } from '../hero/HeroTerminal';
import { HeroSkipLink } from '../hero/HeroSkipLink';
import { MobileOptimizedAnimation } from '../hero/MobileOptimizedAnimation';

/**
 * Composant section Hero principale
 * @description Affiche la section Hero avec :
 * - Layout responsive optimisé (mobile/desktop)
 * - Barre supérieure avec version et contact
 * - Titre principal avec variantes mobile/desktop
 * - Terminal interactif avec variantes
 * - Animation de texte défilant
 * - Lien de saut pour l'accessibilité
 * - Optimisations de performance (LCP, FID)
 * - Accessibilité complète
 * 
 * @returns {JSX.Element} Section Hero complète
 * 
 * @example
 * <Hero />
 */
export const Hero = () => {
  return (
    <section 
      id="home" 
      className="overflow-hidden relative h-screen pb-4 md:pb-0"
      aria-label="Hero section"
    >
      {/* Barre supérieure avec version et contact */}
      <HeroTopBar />

      {/* Contenu principal */}
      <div className="container px-4 mx-auto h-full">
        <div className="flex relative flex-col items-center h-full">
          {/* Layout Mobile - Uniquement pour mobile */}
          <div className="flex flex-col justify-center items-center -mt-8 w-full h-full md:hidden">
            {/* 1. H1 en premier - Optimisé pour le LCP mobile */}
            <HeroTitle variant="mobile" />

            {/* TextMarquee pour mobile */}
            <MobileOptimizedAnimation
              animation="fadeIn"
              duration={0.5}
              className="mt-2 w-full"
            >
              <TextMarquee />
            </MobileOptimizedAnimation>

            {/* 2. Terminal au milieu */}
            <HeroTerminal variant="mobile" />
          </div>

          {/* Layout Desktop - Terminal côté droit (visible uniquement sur md et plus) */}
          <HeroTerminal variant="desktop" />

          {/* Contenu central - Uniquement pour desktop */}
          <HeroTitle variant="desktop" />

          {/* TextMarquee pour desktop */}
          <MobileOptimizedAnimation
            animation="fadeIn"
            duration={0.5}
            className="mt-2 w-full hidden md:block"
          >
            <TextMarquee />
          </MobileOptimizedAnimation>
        </div>
      </div>

      {/* Lien de saut vers le contenu principal - caché visuellement mais disponible pour les lecteurs d'écran */}
      <HeroSkipLink />
    </section>
  );
}; 