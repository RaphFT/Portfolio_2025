/**
 * @fileoverview Hook pour le chargement lazy de Three.js
 * @description Hook personnalisé pour gérer le chargement lazy de Three.js
 * avec optimisations de performance et respect des préférences utilisateur
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Interface des options du hook useThreeJsLazyLoading
 * @interface UseThreeJsLazyLoadingOptions
 * @property {number} [preloadDistance=500] - Distance de préchargement en pixels
 * @property {() => void} [onLoadStart] - Callback appelé au début du chargement
 * @property {() => void} [onLoadComplete] - Callback appelé à la fin du chargement
 * @property {(error: Error) => void} [onLoadError] - Callback appelé en cas d'erreur
 * @property {boolean} [respectReducedMotion=true] - Respecter les préférences de réduction de mouvement
 */
type UseThreeJsLazyLoadingOptions = {
  preloadDistance?: number;
  onLoadStart?: () => void;
  onLoadComplete?: () => void;
  onLoadError?: (error: Error) => void;
  respectReducedMotion?: boolean;
};

/**
 * Hook pour le chargement lazy de Three.js
 * @description Gère le chargement lazy de Three.js avec :
 * - Intersection Observer pour le préchargement intelligent
 * - Respect des préférences de réduction de mouvement
 * - Gestion d'erreur avec fallback automatique
 * - Callbacks pour le suivi du chargement
 * - Optimisation des performances avec preload
 * - Éviter les chargements multiples
 * 
 * @param {UseThreeJsLazyLoadingOptions} [options={}] - Options de configuration
 * @param {number} [options.preloadDistance=500] - Distance de préchargement
 * @param {() => void} [options.onLoadStart] - Callback début chargement
 * @param {() => void} [options.onLoadComplete] - Callback fin chargement
 * @param {(error: Error) => void} [options.onLoadError] - Callback erreur
 * @param {boolean} [options.respectReducedMotion=true] - Respecter les préférences
 * 
 * @returns {Object} Objet contenant les refs et états
 * @returns {React.RefObject<HTMLDivElement>} returns.containerRef - Ref du conteneur
 * @returns {boolean} returns.isLoading - État de chargement
 * @returns {boolean} returns.isLoaded - Si le composant est chargé
 * @returns {Error | null} returns.error - Erreur de chargement
 * @returns {boolean} returns.shouldLoad - Si le chargement doit commencer
 * @returns {boolean} returns.prefersReducedMotion - Préférence de réduction de mouvement
 * @returns {(importFn: () => Promise<unknown>) => Promise<void>} returns.loadThreeJs - Fonction de chargement
 * 
 * @example
 * const {
 *   containerRef,
 *   isLoading,
 *   isLoaded,
 *   loadThreeJs
 * } = useThreeJsLazyLoading({
 *   preloadDistance: 300,
 *   respectReducedMotion: true
 * });
 */
export const useThreeJsLazyLoading = (options: UseThreeJsLazyLoadingOptions = {}) => {
  const {
    preloadDistance = 500,
    onLoadStart,
    onLoadComplete,
    onLoadError,
    respectReducedMotion = true
  } = options;

  // États pour gérer le chargement
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const loadingPromiseRef = useRef<Promise<unknown> | null>(null);

  // Vérifier les préférences de réduction de mouvement
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Observer d'intersection pour le préchargement
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !shouldLoad && !isLoaded) {
          // Ne pas charger Three.js si l'utilisateur préfère la réduction de mouvement
          if (respectReducedMotion && prefersReducedMotion) {
            setIsLoaded(true);
            onLoadComplete?.();
            return;
          }
          
          setShouldLoad(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: `${preloadDistance}px`
      }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [shouldLoad, isLoaded, preloadDistance, respectReducedMotion, prefersReducedMotion, onLoadComplete]);

  // Fonction de chargement de Three.js
  const loadThreeJs = useCallback(async (importFn: () => Promise<unknown>) => {
    if (isLoading || isLoaded || loadingPromiseRef.current) return;

    setIsLoading(true);
    setError(null);
    onLoadStart?.();

    try {
      loadingPromiseRef.current = importFn();
      await loadingPromiseRef.current;
      
      setIsLoaded(true);
      onLoadComplete?.();
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to load Three.js component');
      setError(error);
      onLoadError?.(error);
    } finally {
      setIsLoading(false);
      loadingPromiseRef.current = null;
    }
  }, [isLoading, isLoaded, onLoadStart, onLoadComplete, onLoadError]);

  return {
    containerRef,
    isLoading,
    isLoaded,
    error,
    shouldLoad,
    prefersReducedMotion,
    loadThreeJs
  };
}; 