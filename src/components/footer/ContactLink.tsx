/**
 * @fileoverview Lien de contact individuel
 * @description Composant affichant un lien de contact avec gestion
 * des différents types (externe, interne, texte) et accessibilité
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { type ContactItem } from './footerData';

/**
 * Interface des props du composant ContactLink
 * @interface ContactLinkProps
 */
type ContactLinkProps = {
  contact: ContactItem;
};

/**
 * Composant lien de contact individuel
 * @description Affiche un lien de contact avec :
 * - Gestion des liens externes (LinkedIn) avec target="_blank"
 * - Gestion des liens internes (email, téléphone)
 * - Gestion du texte simple (localisation)
 * - Effets de hover et focus optimisés
 * - Accessibilité avec aria-label approprié
 * - Police Clash Display personnalisée
 * - Design responsive
 * 
 * @param {ContactLinkProps} props - Props du composant
 * @param {ContactItem} props.contact - Données de contact à afficher
 * 
 * @returns {JSX.Element} Lien de contact avec gestion des types
 * 
 * @example
 * <ContactLink contact={contactData} />
 */
export const ContactLink = ({ contact }: ContactLinkProps) => {
  const { type, value, href, external, icon } = contact;
  
  // Classes de base communes à tous les types de liens
  const baseClasses = "inline-block transition-all duration-300 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-3 sm:px-2 py-1 text-base sm:text-lg md:text-xl font-clash";
  const fontStyle = {
    fontFamily: '"Clash Display", sans-serif',
    fontWeight: 400
  };

  // Gestion des liens externes (LinkedIn)
  if (external && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        style={fontStyle}
        aria-label={`Visit ${value} profile, opens in a new tab`}
      >
        {value} <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">{icon}</span>
      </a>
    );
  }

  // Gestion des liens internes (email, téléphone)
  if (href) {
    const ariaLabel = type === 'email' 
      ? `Send email to ${value}`
      : `Call ${value}`;
    
    return (
      <a 
        href={href} 
        className={baseClasses}
        style={fontStyle}
        aria-label={ariaLabel}
      >
        {value}
      </a>
    );
  }

  // Gestion du texte simple (localisation)
  return (
    <p 
      className={`${baseClasses} mt-4 sm:mt-6 lg:mt-8`}
      style={fontStyle}
      aria-label="Location"
    >
      {value}
    </p>
  );
}; 