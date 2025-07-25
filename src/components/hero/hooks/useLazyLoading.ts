import { useState, useEffect, useRef, useCallback } from 'react';

type LazyLoadingOptions = {
  preload?: boolean;
  preloadDistance?: number;
  onLoadStart?: () => void;
  onLoadComplete?: () => void;
  onLoadError?: (error: Error) => void;
};

export const useLazyLoading = <T>(
  importFn: () => Promise<T>,
  options: LazyLoadingOptions = {}
) => {
  const {
    preload = false,
    preloadDistance = 1000,
    onLoadStart,
    onLoadComplete,
    onLoadError
  } = options;

  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [module, setModule] = useState<T | null>(null);
  const loadingPromiseRef = useRef<Promise<T> | null>(null);

  // Load module function
  const loadModule = useCallback(async () => {
    if (isLoaded || isLoading || loadingPromiseRef.current) return;

    setIsLoading(true);
    setError(null);
    onLoadStart?.();

    try {
      loadingPromiseRef.current = importFn();
      const result = await loadingPromiseRef.current;
      
      setModule(result);
      setIsLoaded(true);
      onLoadComplete?.();
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to load module');
      setError(error);
      onLoadError?.(error);
    } finally {
      setIsLoading(false);
      loadingPromiseRef.current = null;
    }
  }, [importFn, isLoaded, isLoading, onLoadStart, onLoadComplete, onLoadError]);

  // Preload function
  const preloadModule = useCallback(() => {
    if (!preload || isLoaded || isLoading) return;
    loadModule();
  }, [preload, isLoaded, isLoading, loadModule]);

  // Auto-preload when component is within preload distance
  useEffect(() => {
    if (!preload) return;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      
      // Preload when user is within preloadDistance pixels of the component
      if (scrollTop + windowHeight + preloadDistance >= 0) {
        preloadModule();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [preload, preloadDistance, preloadModule]);

  return {
    module,
    isLoading,
    isLoaded,
    error,
    loadModule,
    preloadModule
  };
}; 