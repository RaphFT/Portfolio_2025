/**
 * @fileoverview En-tête de la section footer
 * @description Composant affichant le titre principal du footer avec
 * animation d'apparition et design responsive
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { motion } from 'framer-motion';

/**
 * Composant en-tête de la section footer
 * @description Affiche le titre principal du footer avec :
 * - Animation d'apparition fluide
 * - Design responsive avec tailles adaptatives
 * - Police Clash Display personnalisée
 * - Texte centré avec espacement optimisé
 * - Mise en évidence du mot "BONJOUR" en vert
 * - Accessibilité avec ID unique
 * 
 * @returns {JSX.Element} En-tête du footer avec animation
 * 
 * @example
 * <FooterHeader />
 */
export const FooterHeader = () => {
  return (
    <motion.h2
      id="contact-heading"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="px-2 text-2xl tracking-tighter leading-tight text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-clash sm:px-0"
      style={{
        fontFamily: '"Clash Display", sans-serif',
        fontWeight: 600
      }}
    >
      {/* Première ligne du titre */}
      <div className="block whitespace-nowrap">DE GRANDE CHOSES</div>
      
      {/* Deuxième ligne du titre */}
      <div className="block whitespace-nowrap">PEUVENT NAÎTRE AVEC UN SIMPLE</div>
      
      {/* Troisième ligne avec mot mis en évidence */}
      <div className="block whitespace-nowrap">
        <span className="text-[#47D649]">BONJOUR</span>
      </div>
    </motion.h2>
  );
}; 