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
    respectReducedMotion: true,
    onLoadStart: () => console.log('Loading Three.js LavaLamp...'),
    onLoadComplete: () => console.log('Three.js LavaLamp loaded successfully'),
    onLoadError: (error) => console.error('Failed to load Three.js LavaLamp:', error)
  });

  // Debug logs
  React.useEffect(() => {
    console.log('About2Background Debug:', {
      isLoading,
      isLoaded,
      error: error?.message,
      shouldLoad,
      prefersReducedMotion,
      isMobile: typeof window !== 'undefined' && window.innerWidth <= 768
    });
  }, [isLoading, isLoaded, error, shouldLoad, prefersReducedMotion]);

  // Load Three.js when shouldLoad becomes true
  React.useEffect(() => {
    if (shouldLoad && !isLoaded) {
      loadThreeJs(() => import('./fluid-blob').then(module => ({ default: module.LavaLamp })));
    }
  }, [shouldLoad, isLoaded, loadThreeJs]);

  // Force load on mobile after a delay if not loaded
  React.useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    
    if (isMobile && !isLoaded && !isLoading) {
      const timer = setTimeout(() => {
        console.log('Force loading Three.js on mobile...');
        loadThreeJs(() => import('./fluid-blob').then(module => ({ default: module.LavaLamp })));
      }, 2000); // 2 secondes de délai
      
      return () => clearTimeout(timer);
    }
  }, [isLoaded, isLoading, loadThreeJs]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0"
      role="region"
      aria-label="Background animation area"
    >
      {/* Show fallback while loading or if error */}
      {(!isLoaded || error) && (
        <div className="relative">
          <ThreeJsFallback isReducedMotion={prefersReducedMotion} />
          {/* Debug indicator */}
          <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-xs z-50">
            Debug: {isLoading ? 'Loading' : isLoaded ? 'Loaded' : error ? 'Error' : 'Not loaded'}
          </div>
        </div>
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