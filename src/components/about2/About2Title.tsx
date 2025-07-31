/**
 * @fileoverview Titre principal de la section about2
 * @description Composant affichant le titre principal avec animation
 * d'apparition et effet mix-blend-exclusion
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { motion } from 'framer-motion';
import { getAbout2Text } from './about2Data';

/**
 * Composant titre principal de la section about2
 * @description Affiche le titre principal avec :
 * - Animation d'apparition fluide avec translation
 * - Effet mix-blend-exclusion pour l'intégration visuelle
 * - Design responsive avec tailles adaptatives
 * - Police Clash Display personnalisée
 * - Division du titre en deux parties
 * - Accessibilité avec aria-label
 * - Optimisation GPU avec willChange
 * 
 * @returns {JSX.Element} Titre principal avec animation
 * 
 * @example
 * <About2Title />
 */
export const About2Title = () => {
  // Récupération du titre depuis les données
  const { title } = getAbout2Text('fr');
  const titleParts = title.split('. ');

  return (
    <motion.h1 
      id="journey-heading"
      initial={{ opacity: 0, transform: 'translateY(30px)' }}
      whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative z-10 px-2 max-w-full text-4xl font-bold tracking-tight leading-tight text-center text-white mix-blend-exclusion sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-clash"
      style={{
        fontFamily: '"Clash Display", sans-serif',
        fontWeight: 600,
        willChange: 'transform, opacity'
      }}
      aria-label="La curiosité m'a mené ici. Je suis un Développeur."
    >
      {/* Première partie du titre */}
      <span className="block">{titleParts[0]}.</span>
      
      {/* Deuxième partie du titre avec espacement */}
      <span className="block mt-1 sm:mt-2 md:mt-3 lg:mt-4">{titleParts[1]}</span>
    </motion.h1>
  );
}; 