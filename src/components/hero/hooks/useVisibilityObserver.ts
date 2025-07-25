import { useEffect, useRef, useState, useCallback } from 'react';

type UseVisibilityObserverOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export const useVisibilityObserver = (options: UseVisibilityObserverOptions = {}) => {
  const { threshold = 0.1, rootMargin = '50px', once = false } = options;
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    const visible = entry.isIntersecting;
    
    setIsVisible(visible);
    
    if (visible && !hasBeenVisible) {
      setHasBeenVisible(true);
    }
  }, [hasBeenVisible]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [handleIntersection, threshold, rootMargin]);

  return {
    elementRef,
    isVisible,
    hasBeenVisible: once ? hasBeenVisible : true
  };
}; 