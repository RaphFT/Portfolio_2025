/**
 * @fileoverview Barre de navigation supérieure de la section hero
 * @description Composant affichant la version, les liens de contact
 * et les informations de navigation en haut de la section hero
 * @author Raphael Fremont
 * @version 1.0.0
 */

/**
 * Composant barre de navigation supérieure
 * @description Affiche une barre de navigation en haut de la section hero avec :
 * - Numéro de version de l'application
 * - Lien LinkedIn (desktop uniquement)
 * - Lien email de contact
 * - Design responsive
 * - Animations d'apparition
 * - Accessibilité optimisée
 * 
 * @returns {JSX.Element} Barre de navigation supérieure
 * 
 * @example
 * <HeroTopBar />
 */
export const HeroTopBar = () => {
  return (
    <div 
      className="absolute top-0 right-0 left-0 p-2 md:p-4"
      role="navigation"
      aria-label="Top navigation bar with version information and contact links"
    >
      <div className="flex relative justify-between items-center">
        {/* Numéro de version - Affiché à gauche */}
        <div
          className="font-mono text-xs md:text-sm animate-fade-in"
          aria-label="Application version number"
          role="text"
          style={{
            animation: 'fadeIn 0.5s ease-out forwards',
            willChange: 'opacity'
          }}
        >
          <span aria-label="Version 1.0.0">V-1.0.0</span>
        </div>

        {/* Lien LinkedIn - Centré, visible uniquement sur desktop */}
        <a
          href="https://www.linkedin.com/in/raphael-fremont-63a91a1b3/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden absolute left-1/2 z-10 font-mono text-xs rounded transition-colors -translate-x-1/2 cursor-pointer md:text-sm hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary md:block animate-fade-in"
          aria-label="Visit Raphael Fremont's LinkedIn profile, opens in a new tab"
          style={{
            animation: 'fadeIn 0.5s ease-out forwards',
            willChange: 'opacity'
          }}
        >
          <span aria-label="LinkedIn username">@RAPHAELFREMONT</span>
        </a>

        {/* Lien email - Affiché à droite, optimisé pour mobile LCP */}
        <a
          href="mailto:raph.frem@gmail.com"
          className="z-10 font-mono text-xs rounded transition-colors cursor-pointer md:text-sm hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Send email to raph.frem@gmail.com"
          style={{ 
            willChange: 'opacity',
            opacity: 1 
          }}
        >
          <span aria-label="Email address">HELLO@RAPHAELFREMONT.COM</span>
        </a>
      </div>
      
      {/* Description de navigation cachée pour les lecteurs d'écran */}
      <div className="sr-only">
        Top navigation bar containing version information, LinkedIn profile link, and email contact.
        Use Tab to navigate between links.
      </div>
    </div>
  );
}; 