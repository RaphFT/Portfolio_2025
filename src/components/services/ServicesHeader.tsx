/**
 * @fileoverview En-tête de la section services
 * @description Composant affichant le titre et la description de la section services
 * avec animations et badge
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { motion } from 'framer-motion';
import { Badge } from './badge';

/**
 * Composant en-tête de la section services
 * @description Affiche l'en-tête de la section services avec :
 * - Badge "Solutions" avec style personnalisé
 * - Titre principal "Mes services"
 * - Description des services offerts
 * - Animations d'apparition fluides
 * - Design responsive
 * - Police Clash Display personnalisée
 * 
 * @returns {JSX.Element} En-tête de la section services
 * 
 * @example
 * <ServicesHeader />
 */
export const ServicesHeader = () => {
  return (
    <motion.div 
      className="flex flex-col gap-1 items-center mb-4 sm:gap-2 lg:gap-3 sm:mb-6 lg:mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      {/* Badge "Solutions" avec style personnalisé */}
      <div>
        <Badge variant="secondary" className="!bg-black !text-white hover:!bg-black/80">Solutions</Badge>
      </div>
      
      {/* Contenu principal : titre et description */}
      <div className="flex flex-col gap-1 items-center sm:gap-2">
        {/* Titre principal */}
        <h2 
          id="services-heading"
          className="max-w-xs text-2xl tracking-tighter text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl sm:max-w-sm md:max-w-xl font-clash"
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 600
          }}
        >
          Mes services
        </h2>
        
        {/* Description des services */}
        <p 
          className="max-w-xs text-xs tracking-tight leading-relaxed text-center text-gray-600 sm:text-sm md:text-base lg:text-lg sm:max-w-sm md:max-w-xl lg:max-w-lg font-clash"
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 400
          }}
        >
          Des solutions digitales complètes pour faire grandir votre présence en ligne et atteindre vos objectifs business.
        </p>
      </div>
    </motion.div>
  );
}; 