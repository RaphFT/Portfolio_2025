import { useEffect, useRef, useState, useCallback } from 'react';

type UseTextRevealOptions = {
  threshold?: number;
  rootMargin?: string;
  animationDuration?: number;
  staggerDelay?: number;
  respectReducedMotion?: boolean;
};

export const useTextReveal = (options: UseTextRevealOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    animationDuration = 0.6,
    staggerDelay = 0.05,
    respectReducedMotion = true
  } = options;

  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

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

  // Intersection Observer for visibility
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [threshold, rootMargin, hasAnimated]);

  // Get animation style for a word
  const getWordAnimationStyle = useCallback((index: number) => {
    if (!isVisible || (respectReducedMotion && prefersReducedMotion)) {
      return {
        opacity: 1,
        transform: 'translateY(0px)',
        transition: 'none'
      };
    }

    const delay = index * staggerDelay;
    const duration = animationDuration;

    return {
      opacity: 0,
      transform: 'translateY(20px)',
      animation: `textReveal ${duration}s ease-out ${delay}s forwards`,
      willChange: 'opacity, transform'
    };
  }, [isVisible, prefersReducedMotion, respectReducedMotion, staggerDelay, animationDuration]);

  // Get container animation style
  const getContainerStyle = useCallback(() => {
    if (respectReducedMotion && prefersReducedMotion) {
      return {
        opacity: 1,
        transform: 'translateY(0px)'
      };
    }

    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0px)' : 'translateY(30px)',
      transition: `opacity ${animationDuration}s ease-out, transform ${animationDuration}s ease-out`,
      willChange: 'opacity, transform'
    };
  }, [isVisible, prefersReducedMotion, respectReducedMotion, animationDuration]);

  return {
    containerRef,
    isVisible,
    hasAnimated,
    prefersReducedMotion,
    getWordAnimationStyle,
    getContainerStyle
  };
}; 