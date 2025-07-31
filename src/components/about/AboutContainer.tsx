/**
 * @fileoverview Conteneur principal de la section about
 * @description Composant wrapper qui applique le style et la structure
 * de base à la section about avec accessibilité optimisée
 * @author Raphael Fremont
 * @version 1.0.0
 */

/**
 * Interface des props du composant AboutContainer
 * @interface AboutContainerProps
 */
type AboutContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Composant conteneur de la section about
 * @description Wrapper principal de la section about qui applique le style
 * de base avec fond semi-transparent, effet de flou et bordures arrondies
 * 
 * @param {AboutContainerProps} props - Props du composant
 * @param {React.ReactNode} props.children - Contenu à afficher dans le conteneur
 * @param {string} [props.className=''] - Classes CSS supplémentaires
 * 
 * @returns {JSX.Element} Conteneur de la section about stylisé
 * 
 * @example
 * <AboutContainer className="custom-class">
 *   <AboutText />
 * </AboutContainer>
 */
export const AboutContainer = ({ children, className = '' }: AboutContainerProps) => {
  return (
    <div
      className={`rounded-lg w-full h-[500px] border border-neutral-300 bg-white/80 backdrop-blur-sm flex items-center justify-center ${className}`}
      role="region"
      aria-label="About section container with animated text content"
      aria-describedby="about-description"
    >
      {children}
      
      {/* Description cachée pour les lecteurs d'écran */}
      <div id="about-description" className="sr-only">
        Container for the about section featuring animated text reveal of Raphael Fremont's professional description.
        The text animates word by word as the user scrolls through the section.
      </div>
    </div>
  );
}; 