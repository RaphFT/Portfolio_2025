/**
 * @fileoverview Effet de texte glitch avec caractères Matrix
 * @description Composant d'effet visuel de glitch sur le texte
 * avec remplacement par des caractères katakana et effets de couches
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { useState, useEffect } from 'react';

/**
 * Interface des props du composant GlitchText
 * @interface GlitchTextProps
 * @description Configuration des propriétés de l'effet glitch
 * 
 * @property {string} children - Texte à afficher avec effet glitch
 * @property {string} className - Classes CSS additionnelles
 * @property {number} glitchInterval - Intervalle entre les glitches en ms (défaut: 5000)
 * @property {number} glitchDuration - Durée du glitch en ms (défaut: 200)
 * @property {number} intensity - Intensité de l'effet (0-1, défaut: 0.7)
 */
interface GlitchTextProps {
  children: string;
  className?: string;
  glitchInterval?: number; // ms between glitches
  glitchDuration?: number; // ms duration of glitch
  intensity?: number; // 0-1
}

/**
 * Composant effet de texte glitch
 * @description Affiche un texte avec effet glitch avec :
 * - Remplacement aléatoire par des caractères katakana
 * - Couches multiples (noir et vert)
 * - Animation de transformation aléatoire
 * - Effet de flou pour l'authenticité
 * - Intervalle et durée configurables
 * - Intensité ajustable
 * - Police Clash Display
 * - Transitions fluides entre normal et glitch
 * 
 * @param {GlitchTextProps} props - Propriétés du composant
 * @param {string} props.children - Texte à afficher
 * @param {string} props.className - Classes CSS additionnelles
 * @param {number} props.glitchInterval - Intervalle entre les glitches
 * @param {number} props.glitchDuration - Durée du glitch
 * @param {number} props.intensity - Intensité de l'effet
 * 
 * @returns {JSX.Element} Texte avec effet glitch
 * 
 * @example
 * <GlitchText glitchInterval={8000} intensity={0.3}>FULLSTACK DEV</GlitchText>
 */
export const GlitchText = ({ 
  children, 
  className = '', 
  glitchInterval = 5000, 
  glitchDuration = 200,
  intensity = 0.7 
}: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchText, setGlitchText] = useState(children);

  // Caractères Matrix pour l'effet glitch (katakana uniquement)
  const glitchChars = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';

  // Génération du texte glitché
  const generateGlitchText = (text: string) => {
    const chars = text.split('');
    const glitchIndices = Math.floor(chars.length * 0.3); // Glitch 30% des caractères
    
    for (let i = 0; i < glitchIndices; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      const randomGlitchChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
      chars[randomIndex] = randomGlitchChar;
    }
    
    return chars.join('');
  };

  useEffect(() => {
    // Déclenchement du glitch
    const triggerGlitch = () => {
      if (Math.random() < intensity) {
        setIsGlitching(true);
        setGlitchText(generateGlitchText(children));
        
        setTimeout(() => {
          setIsGlitching(false);
          setGlitchText(children);
        }, glitchDuration);
      }
    };

    const interval = setInterval(triggerGlitch, glitchInterval);
    return () => clearInterval(interval);
  }, [children, glitchInterval, glitchDuration, intensity]);

  return (
    <span 
      className={`relative ${className}`}
      style={{
        fontFamily: '"Clash Display", sans-serif'
      }}
    >
      {/* Texte original */}
      <span className={isGlitching ? 'opacity-0' : 'opacity-100'}>
        {children}
      </span>
      
      {/* Couches de texte glitché */}
      {isGlitching && (
        <>
          {/* Couche noire */}
          <span 
            className="absolute inset-0 opacity-80"
            style={{
              color: '#000000',
              transform: `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`,
              filter: 'blur(0.5px)',
              zIndex: 1
            }}
          >
            {glitchText}
          </span>
          
          {/* Couche verte */}
          <span 
            className="absolute inset-0 opacity-90"
            style={{
              color: '#47D649',
              transform: `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`,
              filter: 'blur(0.5px)',
              zIndex: 2
            }}
          >
            {glitchText}
          </span>
        </>
      )}
    </span>
  );
}; 