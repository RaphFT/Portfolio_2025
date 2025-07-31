/**
 * @fileoverview Description de la section about2
 * @description Composant affichant la description avec animation
 * d'apparition et effet mix-blend-exclusion
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { motion } from 'framer-motion';
import { getAbout2Text } from './about2Data';

/**
 * Composant description de la section about2
 * @description Affiche la description avec :
 * - Animation d'apparition fluide avec translation
 * - Effet mix-blend-exclusion pour l'intégration visuelle
 * - Design responsive avec tailles et espacements adaptatifs
 * - Police Clash Display personnalisée
 * - Largeur maximale adaptative selon l'écran
 * - Optimisation GPU avec willChange
 * - Marges et padding optimisés
 * 
 * @returns {JSX.Element} Description avec animation
 * 
 * @example
 * <About2Description />
 */
export const About2Description = () => {
  // Récupération de la description depuis les données
  const { description } = getAbout2Text('fr');

  return (
    <motion.p 
      initial={{ opacity: 0, transform: 'translateY(30px)' }}
      whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
      transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative z-10 px-2 mt-4 max-w-xs text-sm leading-relaxed text-center text-white mix-blend-exclusion sm:text-base md:text-lg lg:text-xl sm:max-w-sm md:max-w-lg lg:max-w-2xl font-clash sm:mt-6 md:mt-8 sm:px-4"
      style={{
        fontFamily: '"Clash Display", sans-serif',
        fontWeight: 400,
        willChange: 'transform, opacity'
      }}
    >
      {description}
    </motion.p>
  );
}; 