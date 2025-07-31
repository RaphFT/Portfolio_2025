/**
 * @fileoverview Conteneur principal de navigation
 * @description Composant wrapper qui applique le style et la structure
 * de base à la navigation principale
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { NavigationList } from './NavigationList';

/**
 * Composant conteneur de navigation
 * @description Wrapper principal de la navigation qui applique le style
 * de base avec fond semi-transparent, effet de flou et bordures arrondies
 * 
 * @returns {JSX.Element} Conteneur de navigation stylisé
 * 
 * @example
 * <NavigationContainer />
 */
export const NavigationContainer = () => {
  return (
    <div 
      className="bg-white/80 backdrop-blur-md rounded-full shadow-lg px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 border-2 border-black"
      role="navigation"
      aria-label="Navigation principale du portfolio"
    >
      <NavigationList />
    </div>
  );
}; 