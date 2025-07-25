import { ReactNode } from 'react';

type OptimizedAnimationProps = {
  children: ReactNode;
  animation: 'fadeIn' | 'fadeInUp' | 'marquee' | 'pulseScale';
  duration?: string;
  delay?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const OptimizedAnimation = ({ 
  children, 
  animation, 
  duration, 
  delay, 
  className = '',
  style = {}
}: OptimizedAnimationProps) => {
  const animationClass = `animate-${animation}`;
  
  const animationStyle = {
    animationDuration: duration,
    animationDelay: delay,
    willChange: animation === 'marquee' ? 'transform' : 'transform, opacity',
    ...style
  };

  return (
    <div 
      className={`${animationClass} ${className}`}
      style={animationStyle}
    >
      {children}
    </div>
  );
}; 