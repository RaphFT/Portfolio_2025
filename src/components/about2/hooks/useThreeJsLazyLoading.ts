import { useState, useEffect, useRef, useCallback } from 'react';

type UseThreeJsLazyLoadingOptions = {
  preloadDistance?: number;
  onLoadStart?: () => void;
  onLoadComplete?: () => void;
  onLoadError?: (error: Error) => void;
  respectReducedMotion?: boolean;
};

export const useThreeJsLazyLoading = (options: UseThreeJsLazyLoadingOptions = {}) => {
  const {
    preloadDistance = 500,
    onLoadStart,
    onLoadComplete,
    onLoadError,
    respectReducedMotion = true
  } = options;

  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const loadingPromiseRef = useRef<Promise<unknown> | null>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Intersection Observer for preloading
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !shouldLoad && !isLoaded) {
          // Don't load Three.js if user prefers reduced motion
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

  // Load Three.js component
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