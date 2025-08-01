/**
 * @fileoverview En-tête de la section parcours
 * @description Composant affichant le titre de la section parcours
 * avec animations et style cohérent
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { motion } from 'framer-motion';
import { Badge } from '../services/badge';

/**
 * Composant en-tête de la section parcours
 * @description Affiche l'en-tête de la section parcours avec :
 * - Badge "Parcours" avec style personnalisé
 * - Titre principal "Mon Parcours"
 * - Animations d'apparition fluides
 * - Design responsive
 * - Police Clash Display personnalisée
 * 
 * @returns {JSX.Element} En-tête de la section parcours
 * 
 * @example
 * <ParcoursHeader />
 */
export const ParcoursHeader = () => {
  return (
    <motion.div 
      className="flex flex-col gap-1 items-center mb-4 sm:gap-2 lg:gap-3 sm:mb-6 lg:mb-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      {/* Badge "Parcours" avec style personnalisé */}
      <div>
        <Badge variant="secondary" className="!bg-black !text-white hover:!bg-black/80">Formations</Badge>
      </div>
      
      {/* Contenu principal : titre */}
      <div className="flex flex-col gap-1 items-center sm:gap-2">
        {/* Titre principal */}
        <h2 
          id="parcours-heading"
          className="max-w-xs text-2xl tracking-tighter text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl sm:max-w-sm md:max-w-xl font-clash"
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 600
          }}
        >
          Parcours
        </h2>
      </div>
    </motion.div>
  );
}; 