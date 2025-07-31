/**
 * @fileoverview En-tête de la section projets
 * @description Composant affichant le titre et la description de la section projets
 * avec badge et animations
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { motion } from 'framer-motion';
import { Badge } from '../services/badge';

/**
 * Composant en-tête de la section projets
 * @description Affiche l'en-tête de la section projets avec :
 * - Badge "Projets" avec style personnalisé
 * - Titre principal "Mes Projets"
 * - Description des projets réalisés
 * - Animations d'apparition fluides
 * - Design responsive
 * - Police Clash Display personnalisée
 * - Accessibilité optimisée
 * 
 * @returns {JSX.Element} En-tête de la section projets
 * 
 * @example
 * <ProjectsHeader />
 */
export const ProjectsHeader = () => {
  return (
    <motion.div 
      className="flex flex-col gap-1 items-center mb-4 sm:gap-2 lg:gap-3 sm:mb-6 lg:mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      {/* Badge "Projets" avec style personnalisé */}
      <div>
        <Badge variant="secondary" className="!bg-black !text-white hover:!bg-black/80">Projets</Badge>
      </div>
      
      {/* Contenu principal : titre et description */}
      <div className="flex flex-col gap-1 items-center sm:gap-2">
        {/* Titre principal */}
        <h2 
          id="projects-heading"
          className="max-w-xs text-2xl tracking-tighter text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl sm:max-w-sm md:max-w-xl font-clash"
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 600
          }}
          aria-label="Mes projets de développement web"
        >
          Mes Projets
        </h2>
        
        {/* Description des projets */}
        <p 
          className="max-w-xs text-xs tracking-tight leading-relaxed text-center text-gray-600 sm:text-sm md:text-base lg:text-lg sm:max-w-sm md:max-w-xl lg:max-w-lg font-clash"
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 400
          }}
        >
          Découvrez une sélection de mes projets récents, 
          allant du développement front-end au back-end, 
          en passant par l'optimisation SEO et la gestion de projet.
        </p>
      </div>
    </motion.div>
  );
}; 