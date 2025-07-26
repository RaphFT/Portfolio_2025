import React, { Suspense, lazy } from 'react';
import { useThreeJsLazyLoading } from './hooks/useThreeJsLazyLoading';
import { ThreeJsFallback } from './ThreeJsFallback';

// Chargement dynamique de la LavaLamp
const LavaLamp = lazy(() => import('./fluid-blob').then(module => ({ default: module.LavaLamp })));

export const About2Background = () => {
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

  // Load Three.js when shouldLoad becomes true
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
      {/* Show fallback while loading or if error */}
      {(!isLoaded || error) && (
        <ThreeJsFallback isReducedMotion={prefersReducedMotion} />
      )}
      
      {/* Show Three.js component when loaded */}
      {isLoaded && !error && (
        <Suspense fallback={<ThreeJsFallback isReducedMotion={false} />}>
          <LavaLamp />
        </Suspense>
      )}
      
      {/* Loading indicator for screen readers */}
      {isLoading && (
        <div className="sr-only" aria-live="polite">
          Loading Three.js background animation...
        </div>
      )}
      
      {/* Error indicator for screen readers */}
      {error && (
        <div className="sr-only" aria-live="assertive">
          Failed to load background animation. Using fallback.
        </div>
      )}
    </div>
  );
}; 