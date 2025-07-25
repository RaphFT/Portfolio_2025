import { useEffect, useState } from 'react';
import { useVisibilityObserver, useAnimationOptimizer } from './hooks';

export const TextMarquee = () => {
  const [showFreelance, setShowFreelance] = useState(false);
  
  // Visibility observer for performance optimization
  const { elementRef, isVisible } = useVisibilityObserver({
    threshold: 0.1,
    rootMargin: '100px',
    once: false
  });

  // Animation optimizer for user preferences
  const { getOptimizedStyle, preferences } = useAnimationOptimizer(isVisible);

  // Freelance message timer (3 second delay)
  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      setShowFreelance(true);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [isVisible]);

  // Always render a container for visibility observer
  return (
    <div ref={elementRef} className="flex justify-center items-center py-2">
      {showFreelance && (
        <div className="flex items-center space-x-3">
          <div className="relative w-2 h-2">
            <span
              className="absolute inset-0 bg-green-500 rounded-full"
              style={getOptimizedStyle({
                animation: preferences.reducedMotion ? 'none' : 'pulseScale 2s ease-in-out infinite',
                willChange: 'transform, opacity'
              })}
              aria-hidden="true"
            />
          </div>
          <span 
            className="font-mono text-xs tracking-wider sm:text-sm md:text-base"
            style={getOptimizedStyle({
              animation: preferences.reducedMotion ? 'none' : 'fadeInUp 0.8s ease-out forwards',
              willChange: 'transform, opacity'
            })}
          >
            DISPONIBLE EN FREELANCE
          </span>
        </div>
      )}
    </div>
  );
}; 