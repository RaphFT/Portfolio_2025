/**
 * @fileoverview Navigation globale du portfolio
 * @description Composant de navigation globale avec animation
 * d'apparition et positionnement fixe
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { motion } from 'framer-motion';
import { NavigationContainer } from '../navigation/NavigationContainer';

/**
 * Composant navigation globale
 * @description Affiche la navigation globale avec :
 * - Animation d'apparition depuis le haut
 * - Position fixe en bas de l'écran
 * - Centrage horizontal
 * - Z-index approprié pour la superposition
 * - Espacement responsive selon l'écran
 * - Accessibilité avec aria-label et role
 * - Conteneur de navigation intégré
 * 
 * @returns {JSX.Element} Navigation globale animée
 * 
 * @example
 * <Navigation />
 */
export const Navigation = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex fixed right-0 left-0 bottom-2 z-40 justify-center sm:bottom-4 md:bottom-8"
      aria-label="Site navigation"
      role="navigation"
    >
      <NavigationContainer />
    </motion.nav>
  );
}; 