import { motion } from 'framer-motion';

export const HeroTitle = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-2xl font-bold leading-tight"
      aria-label="Developer profile headline"
      tabIndex={0}
      style={{
        willChange: 'transform',
        contain: 'layout',
        contentVisibility: 'auto',
      }}
    >
      FRONTEND DEV
      <br />
      CONSTANT LEARNER
      <br />
      INDEPENDENT FREELANCER
    </motion.h1>
  );
}; 