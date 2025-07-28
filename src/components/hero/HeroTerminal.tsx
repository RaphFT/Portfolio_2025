import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { useMobileOptimization } from './hooks/useMobileOptimization';

// Lazy load the terminal component
const TypedTerminal = lazy(() => import('./TypedTerminal').then(module => ({ default: module.TypedTerminal })));

type HeroTerminalProps = {
  variant?: 'mobile' | 'desktop';
};

export const HeroTerminal = ({ variant = 'mobile' }: HeroTerminalProps) => {
  const { shouldReduceMotion } = useMobileOptimization();
  
  if (variant === 'mobile') {
    return (
      <motion.div
        initial={{ opacity: 0, transform: 'translateX(20px)' }}
        animate={{ opacity: 1, transform: 'translateX(0px)' }}
        transition={{ 
          duration: shouldReduceMotion ? 0.4 : 0.8, 
          delay: shouldReduceMotion ? 0 : 0.2 
        }}
        className="mb-4 w-full"
        aria-label="Section terminal interactif"
        style={{ willChange: shouldReduceMotion ? 'auto' : 'transform, opacity' }}
      >
        <Suspense fallback={
          <div 
            className="flex justify-center items-center mx-auto w-full h-40 bg-white rounded-lg border border-gray-200 shadow-xl sm:h-48 md:h-64"
            aria-live="polite"
          >
            Chargement du terminal...
          </div>
        }>
          <TypedTerminal />
        </Suspense>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="mt-2 text-xs text-center text-gray-500"
          aria-live="polite"
          style={{ willChange: 'opacity' }}
        >
          (Cliquez et tapez des commandes)
        </motion.p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateX(20px)' }}
      animate={{ opacity: 1, transform: 'translateX(0px)' }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="hidden md:min-h-600:block md:absolute md:left-[26%] md:top-[31%] md:-translate-x-1/2 md:-translate-y-1/2 md:w-[600px] lg:top-[36%] xl:top-[41%] 2xl:top-[36%] md:z-10"
      aria-label="Section terminal interactif"
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="w-full">
        <Suspense fallback={
          <div 
            className="flex justify-center items-center w-full h-48 bg-white rounded-lg border border-gray-200 shadow-xl sm:h-56 md:h-64"
            aria-live="polite"
          >
            Chargement du terminal...
          </div>
        }>
          <TypedTerminal />
        </Suspense>
      </div>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="mt-2 text-xs text-center text-gray-500"
        aria-live="polite"
        style={{ willChange: 'opacity' }}
      >
        (Cliquez et tapez des commandes)
      </motion.p>
    </motion.div>
  );
}; 