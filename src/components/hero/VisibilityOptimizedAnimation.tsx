import { ReactNode } from 'react';
import { useVisibilityObserver, useAnimationOptimizer } from './hooks';

type VisibilityOptimizedAnimationProps = {
  children: ReactNode;
  animation: 'fadeIn' | 'fadeInUp' | 'marquee' | 'pulseScale';
  duration?: string;
  delay?: string;
  className?: string;
  style?: React.CSSProperties;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export const VisibilityOptimizedAnimation = ({ 
  children, 
  animation, 
  duration, 
  delay, 
  className = '',
  style = {},
  threshold = 0.1,
  rootMargin = '50px',
  once = false
}: VisibilityOptimizedAnimationProps) => {
  // Visibility observer
  const { elementRef, isVisible } = useVisibilityObserver({
    threshold,
    rootMargin,
    once
  });

  // Animation optimizer
  const { getOptimizedStyle, preferences } = useAnimationOptimizer(isVisible);

  const animationClass = `animate-${animation}`;
  
  const baseStyle = {
    animationDuration: duration,
    animationDelay: delay,
    willChange: animation === 'marquee' ? 'transform' : 'transform, opacity',
    ...style
  };

  const optimizedStyle = getOptimizedStyle(baseStyle);

  // If user prefers reduced motion, don't animate
  if (preferences.reducedMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <div 
      ref={elementRef}
      className={`${animationClass} ${className}`}
      style={optimizedStyle}
    >
      {children}
    </div>
  );
}; 