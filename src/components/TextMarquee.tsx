import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const TextMarquee = () => {
  const [showFreelance, setShowFreelance] = useState(false);
  const text = "France-based creative developer, passionate about programming, creative coding, and constantly learning new things. Always looking for exciting freelance opportunities to craft unique and innovative digital experiences.";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFreelance(true);
    }, 45 * 1000); // 1 boucle de 45 secondes

    return () => clearTimeout(timer);
  }, []);

  if (showFreelance) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center space-x-3 py-2"
      >
        <div className="relative w-2 h-2">
          <motion.span
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-green-500 rounded-full"
            aria-hidden="true"
          />
        </div>
        <span className="text-sm md:text-base font-mono tracking-wider">AVAILABLE FOR FREELANCE</span>
      </motion.div>
    );
  }

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 45,
          ease: "linear"
        }}
        className="inline-flex"
      >
        <span className="py-2 px-4 text-sm md:text-base font-mono text-black whitespace-nowrap">
          {text}
        </span>
        <span className="py-2 px-4 text-sm md:text-base font-mono text-black whitespace-nowrap">
          {text}
        </span>
      </motion.div>
    </div>
  );
}; 