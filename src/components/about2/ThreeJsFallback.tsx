/**
 * @fileoverview Composant de fallback pour Three.js
 * @description Composant de fallback accessible et animé
 * pour remplacer l'animation Three.js en cas d'erreur
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { useEffect, useState } from 'react';

/**
 * Interface des props du composant ThreeJsFallback
 * @interface ThreeJsFallbackProps
 */
type ThreeJsFallbackProps = {
  className?: string;
  isReducedMotion?: boolean;
};

/**
 * Composant de fallback pour Three.js
 * @description Fournit un arrière-plan animé de fallback avec :
 * - Animation de gradient rotatif à 20 FPS
 * - Effet d'orbes flottantes avec animation
 * - Effet de lueur subtile
 * - Mode statique pour les préférences de réduction de mouvement
 * - Accessibilité avec aria-label approprié
 * - Performance optimisée avec requestAnimationFrame
 * 
 * @param {ThreeJsFallbackProps} props - Props du composant
 * @param {string} [props.className=''] - Classes CSS additionnelles
 * @param {boolean} [props.isReducedMotion=false] - Si l'utilisateur préfère la réduction de mouvement
 * 
 * @returns {JSX.Element} Arrière-plan de fallback animé ou statique
 * 
 * @example
 * <ThreeJsFallback isReducedMotion={false} />
 */
export const ThreeJsFallback = ({ className = '', isReducedMotion = false }: ThreeJsFallbackProps) => {
  // État pour l'animation du gradient
  const [animationPhase, setAnimationPhase] = useState(0);

  // Gestion de l'animation avec respect des préférences utilisateur
  useEffect(() => {
    if (isReducedMotion) return;

    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 360);
    }, 50); // Animation à 20 FPS

    return () => clearInterval(interval);
  }, [isReducedMotion]);

  // Mode statique pour les préférences de réduction de mouvement
  if (isReducedMotion) {
    return (
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black ${className}`}
        role="img"
        aria-label="Static background for users who prefer reduced motion"
      />
    );
  }

  return (
    <div 
      className={`absolute inset-0 overflow-hidden ${className}`}
      role="img"
      aria-label="Animated background fallback for Three.js LavaLamp effect"
    >
      {/* Arrière-plan avec gradient animé */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
        style={{
          background: `linear-gradient(${animationPhase}deg, 
            rgba(0,0,0,1) 0%, 
            rgba(20,20,20,0.8) 25%, 
            rgba(40,40,40,0.6) 50%, 
            rgba(20,20,20,0.8) 75%, 
            rgba(0,0,0,1) 100%)`
        }}
      />
      
      {/* Effet d'orbes flottantes */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 blur-sm"
            style={{
              width: `${20 + i * 10}px`,
              height: `${20 + i * 10}px`,
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
              transform: `translateY(${Math.sin(animationPhase * 0.1 + i) * 20}px)`
            }}
          />
        ))}
      </div>

      {/* Effet de lueur subtile */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 50%, 
            rgba(255,255,255,0.1) 0%, 
            rgba(255,255,255,0.05) 30%, 
            transparent 70%)`,
          transform: `rotate(${animationPhase * 0.5}deg)`
        }}
      />
    </div>
  );
}; 