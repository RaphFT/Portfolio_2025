import { useEffect, useState, useCallback } from 'react';

type MobileOptimizationOptions = {
  disableAnimations?: boolean;
  reduceMotion?: boolean;
  throttleAnimations?: boolean;
};

export const useMobileOptimization = (options: MobileOptimizationOptions = {}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent;
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isTouchDevice = 'ontouchstart' in window;
      const isSmallScreen = window.innerWidth <= 768;
      
      setIsMobile(isMobileDevice || isTouchDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Detect low power mode (iOS)
  useEffect(() => {
    const checkLowPowerMode = () => {
      if ('getBattery' in navigator) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (navigator as any).getBattery().then((battery: { level: number }) => {
          setIsLowPowerMode(battery.level < 0.2);
        });
      }
    };

    checkLowPowerMode();
    const interval = setInterval(checkLowPowerMode, 30000); // Check every 30s
    return () => clearInterval(interval);
  }, []);

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Get optimized animation settings
  const getOptimizedSettings = useCallback(() => {
    const shouldDisableAnimations = 
      options.disableAnimations || 
      prefersReducedMotion || 
      (isMobile && isLowPowerMode);

    const shouldReduceMotion = 
      options.reduceMotion || 
      prefersReducedMotion || 
      isMobile;

    return {
      shouldDisableAnimations,
      shouldReduceMotion,
      isMobile,
      isLowPowerMode,
      prefersReducedMotion,
      // Optimized durations for mobile
      animationDuration: shouldReduceMotion ? 0.3 : 0.6,
      // Throttle animations on mobile
      throttleDelay: shouldReduceMotion ? 100 : 0,
      // Disable heavy effects on mobile
      disableHeavyEffects: isMobile || isLowPowerMode
    };
  }, [options, isMobile, isLowPowerMode, prefersReducedMotion]);

  return {
    ...getOptimizedSettings(),
    getOptimizedSettings
  };
}; 