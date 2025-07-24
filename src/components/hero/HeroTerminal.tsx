import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';

// Lazy load the terminal component
const TypedTerminal = lazy(() => import('../TypedTerminal').then(module => ({ default: module.TypedTerminal })));

type HeroTerminalProps = {
  variant?: 'mobile' | 'desktop';
};

export const HeroTerminal = ({ variant = 'mobile' }: HeroTerminalProps) => {
  if (variant === 'mobile') {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-4 w-full"
        aria-label="Interactive terminal section"
      >
        <Suspense fallback={
          <div 
            className="flex justify-center items-center mx-auto w-full h-40 bg-white rounded-lg border border-gray-200 shadow-xl sm:h-48 md:h-64"
            aria-live="polite"
          >
            Loading terminal...
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
        >
          (Click and type commands)
        </motion.p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="hidden md:min-h-600:block md:absolute md:left-[26%] md:top-[31%] md:-translate-x-1/2 md:-translate-y-1/2 md:w-[600px] lg:top-[36%] xl:top-[41%] 2xl:top-[36%] md:z-10"
      aria-label="Interactive terminal section"
    >
      <div className="w-full">
        <Suspense fallback={
          <div 
            className="flex justify-center items-center w-full h-48 bg-white rounded-lg border border-gray-200 shadow-xl sm:h-56 md:h-64"
            aria-live="polite"
          >
            Loading terminal...
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
      >
        (Click and type commands)
      </motion.p>
    </motion.div>
  );
}; 