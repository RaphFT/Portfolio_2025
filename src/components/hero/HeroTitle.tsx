/**
 * @fileoverview Titre principal de la section hero
 * @description Composant affichant le titre principal avec effet glitch
 * et design responsive pour mobile et desktop
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { motion } from 'framer-motion';
import { GlitchText } from '../effects/GlitchText';

/**
 * Interface des props du composant HeroTitle
 * @interface HeroTitleProps
 */
type HeroTitleProps = {
  variant?: 'mobile' | 'desktop';
};

/**
 * Composant titre principal de la section hero
 * @description Affiche le titre principal avec :
 * - Effet glitch sur chaque ligne
 * - Design responsive (mobile/desktop)
 * - Animations fluides (desktop uniquement)
 * - Accessibilité optimisée
 * - Police Clash Display personnalisée
 * 
 * @param {HeroTitleProps} props - Props du composant
 * @param {'mobile' | 'desktop'} [props.variant='mobile'] - Variante d'affichage
 * 
 * @returns {JSX.Element} Titre principal avec effets visuels
 * 
 * @example
 * <HeroTitle variant="desktop" />
 */
export const HeroTitle = ({ variant = 'mobile' }: HeroTitleProps) => {
  // Style de police personnalisé
  const titleStyle = {
    fontFamily: '"Clash Display", sans-serif',
    fontWeight: 600
  };

  // Version mobile - Optimisée pour les petits écrans
  if (variant === 'mobile') {
    return (
      <div 
        className="px-4 mx-auto mt-2 w-full text-center"
        role="banner"
        aria-labelledby="hero-title-mobile"
      >
        <h1 
          id="hero-title-mobile"
          className="text-xl font-bold leading-tight sm:text-3xl font-clash"
          aria-label="Developer profile headline - Fullstack Developer, Constant Learner, Independent Freelancer"
          tabIndex={0}
          style={{ 
            ...titleStyle,
            willChange: 'transform',
            opacity: 1
          }}
        >
          {/* Ligne 1 - Fullstack Developer */}
          <span className="block" aria-label="Fullstack Developer">
            <GlitchText glitchInterval={8000} intensity={0.3}>FULLSTACK DEV</GlitchText>
          </span>
          {/* Ligne 2 - Constant Learner */}
          <span className="block mt-1" aria-label="Constant Learner">
            <GlitchText glitchInterval={10000} intensity={0.2}>CONSTANT LEARNER</GlitchText>
          </span>
          {/* Ligne 3 - Independent Freelancer */}
          <span className="block mt-1 whitespace-nowrap" aria-label="Independent Freelancer">
            <GlitchText glitchInterval={12000} intensity={0.25}>INDEPENDENT FREELANCER</GlitchText>
          </span>
        </h1>
        {/* Description pour lecteurs d'écran */}
        <p className="sr-only">
          Raphael Fremont is a fullstack developer who is constantly learning new technologies and works as an independent freelancer.
        </p>
      </div>
    );
  }

  // Version desktop - Avec animations et design étendu
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(20px)' }}
      animate={{ opacity: 1, transform: 'translateY(0px)' }}
      transition={{ duration: 0.8 }}
      className="hidden px-4 mx-auto mt-4 max-w-4xl text-center md:block md:mt-20 lg:mt-24 xl:mt-28"
      role="banner"
      aria-labelledby="hero-title-desktop"
      style={{ willChange: 'transform, opacity' }}
    >
      <h1 
        id="hero-title-desktop"
        className="text-3xl font-bold leading-tight lg:text-5xl font-clash"
        aria-label="Developer profile headline - Fullstack Developer, Constant Learner, Independent Freelancer"
        tabIndex={0}
        style={titleStyle}
      >
        {/* Ligne 1 - Fullstack Developer */}
        <span aria-label="Fullstack Developer">
          <GlitchText glitchInterval={8000} intensity={0.3}>FULLSTACK DEV</GlitchText>
        </span>
        <br />
        {/* Ligne 2 - Constant Learner */}
        <span aria-label="Constant Learner">
          <GlitchText glitchInterval={10000} intensity={0.2}>CONSTANT LEARNER</GlitchText>
        </span>
        <br />
        {/* Ligne 3 - Independent Freelancer */}
        <span aria-label="Independent Freelancer">
          <GlitchText glitchInterval={12000} intensity={0.25}>INDEPENDENT FREELANCER</GlitchText>
        </span>
      </h1>
      {/* Description détaillée pour lecteurs d'écran */}
      <p className="sr-only">
        Raphael Fremont is a fullstack developer who is constantly learning new technologies and works as an independent freelancer.
        This section introduces the main professional identity and skills.
      </p>
    </motion.div>
  );
}; 