import { ReactNode, Suspense } from 'react';
import { useLazyLoading } from './hooks';

type LazyLoadedComponentProps<T> = {
  importFn: () => Promise<T>;
  fallback?: ReactNode;
  preload?: boolean;
  preloadDistance?: number;
  onLoadStart?: () => void;
  onLoadComplete?: () => void;
  onLoadError?: (error: Error) => void;
  children: (module: T) => ReactNode;
};

export const LazyLoadedComponent = <T,>({
  importFn,
  fallback = <div>Loading...</div>,
  preload = false,
  preloadDistance = 1000,
  onLoadStart,
  onLoadComplete,
  onLoadError,
  children
}: LazyLoadedComponentProps<T>) => {
  const { module, isLoaded, error, loadModule } = useLazyLoading(importFn, {
    preload,
    preloadDistance,
    onLoadStart,
    onLoadComplete,
    onLoadError
  });

  if (error) {
    return (
      <div className="p-4 text-red-600 bg-red-50 border border-red-200 rounded">
        <p>Error loading component: {error.message}</p>
        <button 
          onClick={loadModule}
          className="mt-2 px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!isLoaded) {
    return <>{fallback}</>;
  }

  if (!module) {
    return <>{fallback}</>;
  }

  return (
    <Suspense fallback={fallback}>
      {children(module)}
    </Suspense>
  );
}; 