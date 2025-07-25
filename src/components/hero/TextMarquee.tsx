import { useEffect, useState, useMemo } from 'react';
import { useVisibilityObserver, useAnimationOptimizer } from './hooks';

export const TextMarquee = () => {
  const [showFreelance, setShowFreelance] = useState(false);
  const [animationStartTime, setAnimationStartTime] = useState<number | null>(null);
  
  const text = "Développeur créatif basé en France, passionné par la programmation, le creative coding, et l'apprentissage constant de nouvelles choses. Toujours à la recherche d'opportunités freelance passionnantes pour créer des expériences numériques uniques et innovantes.";

  // Visibility observer for performance optimization
  const { elementRef, isVisible } = useVisibilityObserver({
    threshold: 0.1,
    rootMargin: '100px', // Start animation before fully visible
    once: false
  });

  // Animation optimizer for user preferences
  const { shouldPauseAnimation, getOptimizedStyle, preferences } = useAnimationOptimizer(isVisible);

  // Calculate animation progress when paused/resumed
  const animationProgress = useMemo(() => {
    if (!animationStartTime || preferences.reducedMotion) return 0;
    
    if (shouldPauseAnimation) {
      // Calculate how much time has passed since start
      const elapsed = Date.now() - animationStartTime;
      return (elapsed / (45 * 1000)) % 1; // 45 seconds cycle
    }
    
    return 0; // Let CSS handle the animation when visible
  }, [animationStartTime, shouldPauseAnimation, preferences.reducedMotion]);

  // Main marquee with optimized animation
  const marqueeStyle = useMemo(() => {
    const baseStyle = {
      animation: preferences.reducedMotion ? 'none' : 'marquee 45s linear infinite',
      willChange: 'transform' as const
    };

    // If animation is paused, calculate the current position
    if (shouldPauseAnimation && animationProgress > 0) {
      return {
        ...baseStyle,
        transform: `translateX(${-100 * animationProgress}%)`,
        animationPlayState: 'paused' as const
      };
    }

    return getOptimizedStyle(baseStyle);
  }, [shouldPauseAnimation, animationProgress, preferences.reducedMotion, getOptimizedStyle]);

  // Start animation timer when component mounts and is visible
  useEffect(() => {
    if (isVisible && !animationStartTime && !preferences.reducedMotion) {
      setAnimationStartTime(Date.now());
    }
  }, [isVisible, animationStartTime, preferences.reducedMotion]);

  // Freelance message timer
  useEffect(() => {
    if (!isVisible || preferences.reducedMotion) return;

    const timer = setTimeout(() => {
      setShowFreelance(true);
    }, 45 * 1000); // 1 boucle de 45 secondes

    return () => clearTimeout(timer);
  }, [isVisible, preferences.reducedMotion]);

  // Freelance message with optimized animation
  if (showFreelance) {
    const freelanceStyle = getOptimizedStyle({
      animation: preferences.reducedMotion ? 'none' : 'fadeInUp 0.8s ease-out forwards',
      willChange: 'transform, opacity'
    });

    const pulseStyle = getOptimizedStyle({
      animation: preferences.reducedMotion ? 'none' : 'pulseScale 2s ease-in-out infinite',
      willChange: 'transform, opacity'
    });

    return (
      <div
        ref={elementRef}
        className="flex justify-center items-center py-2 space-x-3"
        style={freelanceStyle}
      >
        <div className="relative w-2 h-2">
          <span
            className="absolute inset-0 bg-green-500 rounded-full"
            style={pulseStyle}
            aria-hidden="true"
          />
        </div>
        <span className="font-mono text-xs tracking-wider sm:text-sm md:text-base">
          DISPONIBLE EN FREELANCE
        </span>
      </div>
    );
  }

  return (
    <div ref={elementRef} className="overflow-hidden w-full">
      <div
        className="inline-flex whitespace-nowrap"
        style={marqueeStyle}
      >
        <span className="px-4 py-2 font-mono text-sm text-black whitespace-nowrap md:text-base">
          {text}
        </span>
        <span className="px-4 py-2 font-mono text-sm text-black whitespace-nowrap md:text-base">
          {text}
        </span>
      </div>
    </div>
  );
}; 