/**
 * @fileoverview Contenu de la section parcours
 * @description Composant affichant les blocs de parcours avec logos
 * et badges de récompense en disposition horizontale
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { motion } from 'framer-motion';
import { AwardBadge } from './AwardBadge';

/**
 * Composant contenu de la section parcours
 * @description Affiche les blocs de parcours avec :
 * - Disposition horizontale sur desktop
 * - Disposition verticale sur mobile
 * - Logos des écoles/formations
 * - Badges de récompense
 * - Animations fluides
 * - Design responsive
 * 
 * @returns {JSX.Element} Contenu de la section parcours
 * 
 * @example
 * <ParcoursContent />
 */
export const ParcoursContent = () => {
  return (
    <motion.div 
      className="mx-auto w-full max-w-4xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/* Container principal avec disposition responsive */}
      <div className="flex flex-col gap-8 justify-center items-center sm:flex-row lg:gap-12">
        
        {/* Premier bloc - École 42 */}
        <motion.div 
          className="flex flex-col gap-4 items-center w-full sm:w-auto"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Logo École 42 */}
          <div className="flex justify-center items-center w-24 h-24">
            <img 
              src="/images/projects/42_logo.webp" 
              alt="Logo École 42" 
              className="object-contain w-full h-full"
              loading="lazy"
            />
          </div>
          
          {/* Badge de récompense Golden Kitty */}
          <AwardBadge 
            customTitle="ÉCOLE 42 - PARIS"
            customSubtitle="La Piscine - 2024"
            link="https://42.fr"
            place={2}
          />
        </motion.div>

        {/* Deuxième bloc - OpenClassrooms */}
        <motion.div 
          className="flex flex-col gap-4 items-center w-full sm:w-auto"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Logo OpenClassrooms */}
          <div className="flex justify-center items-center w-24 h-24">
            <img 
              src="/images/projects/Fichier 1logoOC.webp" 
              alt="Logo OpenClassrooms" 
              className="object-contain w-full h-full"
              loading="lazy"
            />
          </div>
          
          {/* Badge de récompense Golden Kitty */}
          <AwardBadge 
            customTitle="OPENCLASSROOMS"
            customSubtitle="Développeur Web - 2025"
            link="https://openclassrooms.com/fr/"
            place={2}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}; 