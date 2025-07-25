import { useMemo } from 'react';

type AnimationConfig = {
  duration?: number;
  delay?: number;
  ease?: string;
  willChange?: string;
};

export const useOptimizedAnimation = (config: AnimationConfig = {}) => {
  const {
    duration = 0.5,
    delay = 0,
    ease = 'ease-out',
    willChange = 'transform, opacity'
  } = config;

  const optimizedVariants = useMemo(() => ({
    hidden: {
      opacity: 0,
      transform: 'translateY(20px)'
    },
    visible: {
      opacity: 1,
      transform: 'translateY(0px)'
    }
  }), []);

  const optimizedTransition = useMemo(() => ({
    duration,
    delay,
    ease,
    willChange
  }), [duration, delay, ease, willChange]);

  return {
    variants: optimizedVariants,
    transition: optimizedTransition,
    style: { willChange }
  };
}; 