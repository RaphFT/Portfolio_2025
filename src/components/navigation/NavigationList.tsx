/**
 * @fileoverview Liste des éléments de navigation
 * @description Composant qui affiche la liste des liens de navigation
 * en utilisant les données de navigationData
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { NavigationLink } from './NavigationLink';
import { navigationData } from './navigationData';

/**
 * Composant liste de navigation
 * @description Affiche la liste des liens de navigation en mappant
 * les données de navigationData vers des composants NavigationLink
 * 
 * @returns {JSX.Element} Liste des liens de navigation
 * 
 * @example
 * <NavigationList />
 */
export const NavigationList = () => {
  return (
    <ul 
      className="flex space-x-2 text-xs sm:space-x-4 md:space-x-8 sm:text-sm md:text-base" 
      role="menubar"
      aria-label="Menu de navigation principal"
    >
      {navigationData.items.map((item) => (
        <NavigationLink key={item.id} item={item} />
      ))}
    </ul>
  );
}; 