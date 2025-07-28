import { motion } from 'framer-motion';
import { useMobileOptimization } from './hooks/useMobileOptimization';

type MobileOptimizedAnimationProps = {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale';
  duration?: number;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export const MobileOptimizedAnimation = ({
  children,
  className = '',
  animation = 'fadeIn',
  duration,
  delay = 0,
  once = false
}: MobileOptimizedAnimationProps) => {
  const {
    shouldDisableAnimations,
    shouldReduceMotion,
    animationDuration: mobileDuration,
    throttleDelay
  } = useMobileOptimization();

  // If animations are disabled, render without animation
  if (shouldDisableAnimations) {
    return <div className={className}>{children}</div>;
  }

  // Optimize animation variants for mobile
  const getVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    };

    if (shouldReduceMotion) {
      return baseVariants;
    }

    switch (animation) {
      case 'slideUp':
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        };
      case 'slideDown':
        return {
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 }
        };
      case 'slideLeft':
        return {
          hidden: { opacity: 0, x: 20 },
          visible: { opacity: 1, x: 0 }
        };
      case 'slideRight':
        return {
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0 }
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 }
        };
      default:
        return baseVariants;
    }
  };

  const variants = getVariants();
  const finalDuration = duration || mobileDuration;
  const finalDelay = shouldReduceMotion ? 0 : delay + throttleDelay;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once, 
        amount: 'some'
      }}
      variants={variants}
      transition={{
        duration: finalDuration,
        delay: finalDelay,
        ease: shouldReduceMotion ? 'linear' : 'easeOut',
        // Optimize for mobile GPU
        type: 'tween'
      }}
      className={className}
      style={{
        // Only use willChange when animation is active
        willChange: shouldReduceMotion ? 'auto' : 'transform, opacity'
      }}
    >
      {children}
    </motion.div>
  );
}; 