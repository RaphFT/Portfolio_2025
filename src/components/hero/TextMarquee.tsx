/**
 * @fileoverview Composant de texte défilant avec indicateur de disponibilité
 * @description Affiche un message de disponibilité freelance avec animation
 * et optimisations de performance
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { useEffect, useState } from 'react';
import { useVisibilityObserver, useAnimationOptimizer } from './hooks';

/**
 * Composant texte défilant avec indicateur de disponibilité
 * @description Affiche un message "DISPONIBLE EN FREELANCE" avec :
 * - Délai d'apparition de 3 secondes
 * - Indicateur visuel animé (point vert)
 * - Optimisations de performance
 * - Respect des préférences de réduction de mouvement
 * - Observer de visibilité pour optimiser les animations
 * 
 * @returns {JSX.Element} Message de disponibilité avec animations
 * 
 * @example
 * <TextMarquee />
 */
export const TextMarquee = () => {
  // État pour afficher le message de disponibilité
  const [showFreelance, setShowFreelance] = useState(false);
  
  // Observer de visibilité pour optimiser les performances
  const { elementRef, isVisible } = useVisibilityObserver({
    threshold: 0.1,
    rootMargin: '100px',
    once: false
  });

  // Optimiseur d'animation pour les préférences utilisateur
  const { getOptimizedStyle, preferences } = useAnimationOptimizer(isVisible);

  // Timer pour afficher le message de disponibilité (délai de 3 secondes)
  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      setShowFreelance(true);
    }, 3000); // Délai de 3 secondes

    return () => clearTimeout(timer);
  }, [isVisible]);

  // Rendu du conteneur pour l'observer de visibilité
  return (
    <div ref={elementRef} className="flex justify-center items-center py-2">
      {showFreelance && (
        <div className="flex items-center space-x-3">
          {/* Indicateur visuel animé (point vert) */}
          <div className="relative w-2 h-2">
            <span
              className="absolute inset-0 bg-green-500 rounded-full"
              style={getOptimizedStyle({
                animation: preferences.reducedMotion ? 'none' : 'pulseScale 2s ease-in-out infinite',
                willChange: 'transform, opacity'
              })}
              aria-hidden="true"
            />
          </div>
          {/* Message de disponibilité */}
          <span 
            className="font-mono text-xs tracking-wider sm:text-sm md:text-base"
            style={getOptimizedStyle({
              animation: preferences.reducedMotion ? 'none' : 'fadeInUp 0.8s ease-out forwards',
              willChange: 'transform, opacity'
            })}
          >
            DISPONIBLE EN FREELANCE
          </span>
        </div>
      )}
    </div>
  );
}; 