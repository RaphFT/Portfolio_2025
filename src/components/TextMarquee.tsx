import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const TextMarquee = () => {
  const [showFreelance, setShowFreelance] = useState(false);
  const text = "Développeur créatif basé en France, passionné par la programmation, le creative coding, et l'apprentissage constant de nouvelles choses. Toujours à la recherche d'opportunités freelance passionnantes pour créer des expériences numériques uniques et innovantes.";

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
        className="flex justify-center items-center py-2 space-x-3"
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
        <span className="font-mono text-xs tracking-wider sm:text-sm md:text-base">DISPONIBLE EN FREELANCE</span>
      </motion.div>
    );
  }

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 45,
          ease: "linear"
        }}
        className="inline-flex whitespace-nowrap"
      >
        <span className="px-4 py-2 font-mono text-sm text-black whitespace-nowrap md:text-base">
          {text}
        </span>
        <span className="px-4 py-2 font-mono text-sm text-black whitespace-nowrap md:text-base">
          {text}
        </span>
      </motion.div>
    </div>
  );
}; 