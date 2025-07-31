/**
 * @fileoverview Arrière-plan animé de la section about2
 * @description Composant gérant l'arrière-plan avec animation Three.js
 * et fallback optimisé pour l'accessibilité
 * @author Raphael Fremont
 * @version 1.0.0
 */

import React, { Suspense, lazy } from 'react';
import { useThreeJsLazyLoading } from './hooks/useThreeJsLazyLoading';
import { ThreeJsFallback } from './ThreeJsFallback';

// Chargement dynamique de la LavaLamp
const LavaLamp = lazy(() => import('./fluid-blob').then(module => ({ default: module.LavaLamp })));

/**
 * Composant arrière-plan animé de la section about2
 * @description Gère l'arrière-plan avec :
 * - Chargement lazy de Three.js pour optimiser les performances
 * - Fallback accessible en cas d'erreur ou de chargement
 * - Respect des préférences de réduction de mouvement
 * - Indicateurs de chargement pour les lecteurs d'écran
 * - Gestion d'erreur avec fallback automatique
 * - Optimisation des performances avec preload intelligent
 * 
 * @returns {JSX.Element} Arrière-plan avec animation ou fallback
 * 
 * @example
 * <About2Background />
 */
export const About2Background = () => {
  // Hook pour gérer le chargement lazy de Three.js
  const {
    containerRef,
    isLoading,
    isLoaded,
    error,
    shouldLoad,
    prefersReducedMotion,
    loadThreeJs
  } = useThreeJsLazyLoading({
    preloadDistance: 500,
    respectReducedMotion: true
  });

  // Chargement de Three.js quand shouldLoad devient true
  React.useEffect(() => {
    if (shouldLoad && !isLoaded) {
      loadThreeJs(() => import('./fluid-blob').then(module => ({ default: module.LavaLamp })));
    }
  }, [shouldLoad, isLoaded, loadThreeJs]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0"
      role="region"
      aria-label="Background animation area"
    >
      {/* Affichage du fallback pendant le chargement ou en cas d'erreur */}
      {(!isLoaded || error) && (
        <ThreeJsFallback isReducedMotion={prefersReducedMotion} />
      )}
      
      {/* Affichage du composant Three.js quand chargé */}
      {isLoaded && !error && (
        <Suspense fallback={<ThreeJsFallback isReducedMotion={false} />}>
          <LavaLamp />
        </Suspense>
      )}
      
      {/* Indicateur de chargement pour les lecteurs d'écran */}
      {isLoading && (
        <div className="sr-only" aria-live="polite">
          Loading Three.js background animation...
        </div>
      )}
      
      {/* Indicateur d'erreur pour les lecteurs d'écran */}
      {error && (
        <div className="sr-only" aria-live="assertive">
          Failed to load background animation. Using fallback.
        </div>
      )}
    </div>
  );
}; 