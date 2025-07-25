import { useEffect, useState } from 'react';

type AnimationPreferences = {
  reducedMotion?: boolean;
  prefersReducedMotion?: boolean;
};

export const useAnimationOptimizer = (isVisible: boolean) => {
  const [preferences, setPreferences] = useState<AnimationPreferences>({
    reducedMotion: false,
    prefersReducedMotion: false
  });

  useEffect(() => {
    // Check for user preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = mediaQuery.matches;

    setPreferences({
      reducedMotion: prefersReducedMotion,
      prefersReducedMotion
    });

    const handleChange = (e: MediaQueryListEvent) => {
      setPreferences(prev => ({
        ...prev,
        reducedMotion: e.matches,
        prefersReducedMotion: e.matches
      }));
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Determine if animation should be paused
  const shouldPauseAnimation = !isVisible || preferences.reducedMotion;

  // Get optimized animation duration
  const getOptimizedDuration = (baseDuration: number) => {
    if (preferences.reducedMotion) {
      return 0; // No animation
    }
    return baseDuration;
  };

  // Get optimized animation style
  const getOptimizedStyle = (baseStyle: React.CSSProperties) => {
    if (shouldPauseAnimation) {
      return {
        ...baseStyle,
        animationPlayState: 'paused' as const
      };
    }
    return baseStyle;
  };

  return {
    shouldPauseAnimation,
    getOptimizedDuration,
    getOptimizedStyle,
    preferences
  };
}; 