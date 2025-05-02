import { motion } from 'framer-motion';
import { HeroTitle } from './HeroTitle';
import { Suspense } from 'react';

const HeroContent = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center justify-center min-h-screen text-center px-4"
  >
    <HeroTitle />
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-4 text-lg"
    >
      Based in France
    </motion.p>
  </motion.div>
);

export const Hero = () => {
  return (
    <section id="hero" className="relative">
      <Suspense fallback={
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
          <h1 className="text-2xl font-bold leading-tight">FRONTEND DEV</h1>
        </div>
      }>
        <HeroContent />
      </Suspense>
    </section>
  );
}; 