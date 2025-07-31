/**
 * @fileoverview Lien de navigation individuel
 * @description Composant qui affiche un lien de navigation avec
 * gestion de l'état actif et accessibilité
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { type NavigationItem } from './navigationData';

/**
 * Interface des props du composant NavigationLink
 * @interface NavigationLinkProps
 */
type NavigationLinkProps = {
  item: NavigationItem;
};

/**
 * Composant lien de navigation
 * @description Affiche un lien de navigation individuel avec :
 * - Gestion de l'état actif (page courante)
 * - Styles responsive
 * - Accessibilité optimisée
 * - Transitions fluides
 * 
 * @param {NavigationLinkProps} props - Props du composant
 * @param {NavigationItem} props.item - Élément de navigation à afficher
 * 
 * @returns {JSX.Element} Lien de navigation stylisé
 * 
 * @example
 * <NavigationLink item={{ id: 'home', label: 'Accueil', href: '#home' }} />
 */
export const NavigationLink = ({ item }: NavigationLinkProps) => {
  const { label, href, isCurrent } = item;
  
  // Classes CSS de base avec styles responsive et transitions
  const baseClasses = "text-primary hover:text-secondary transition-colors px-1.5 sm:px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary rounded";
  
  return (
    <li role="none">
      <a 
        href={href} 
        className={baseClasses}
        role="menuitem"
        aria-current={isCurrent ? "page" : undefined}
        aria-label={`Aller à la section ${label}`}
      >
        {label}
      </a>
    </li>
  );
}; 