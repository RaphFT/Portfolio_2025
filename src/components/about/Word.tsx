/**
 * @fileoverview Composant mot individuel avec animation
 * @description Composant optimisé pour afficher un mot avec animation
 * et effet de profondeur
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { ReactNode, memo } from 'react';

/**
 * Interface des props du composant Word
 * @interface WordProps
 */
type WordProps = {
  children: ReactNode;
  animationStyle: React.CSSProperties;
  className?: string;
};

/**
 * Composant mot individuel avec animation
 * @description Affiche un mot avec animation et effet de profondeur :
 * - Mémoisation pour optimiser les performances
 * - Effet de profondeur avec texte de fond
 * - Police Clash Display personnalisée
 * - Styles d'animation personnalisables
 * - Accessibilité optimisée
 * 
 * @param {WordProps} props - Props du composant
 * @param {ReactNode} props.children - Le mot à afficher
 * @param {React.CSSProperties} props.animationStyle - Styles d'animation à appliquer
 * @param {string} [props.className=''] - Classes CSS supplémentaires
 * 
 * @returns {JSX.Element} Mot avec animation et effet de profondeur
 * 
 * @example
 * <Word 
 *   animationStyle={{ opacity: 0.5, transform: 'translateY(10px)' }}
 *   className="custom-word"
 * >
 *   Hello
 * </Word>
 */
export const Word = memo(({ children, animationStyle, className = '' }: WordProps) => {
  return (
    <span 
      className={`relative mx-1 lg:mx-2 font-clash ${className}`}
      style={{
        fontFamily: '"Clash Display", sans-serif',
        fontWeight: 400,
        ...animationStyle
      }}
      aria-hidden="true"
    >
      {/* Texte de fond pour l'effet de profondeur */}
      <span 
        className="absolute text-black opacity-30"
        style={{ zIndex: 1 }}
      >
        {children}
      </span>
      
      {/* Texte animé */}
      <span 
        className="relative text-black"
        style={{ zIndex: 2 }}
      >
        {children}
      </span>
    </span>
  );
});

Word.displayName = 'Word'; 