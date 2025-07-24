import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useCallback } from 'react';

export const ScrollProgressMobile = () => {
  const { progress } = useScrollProgress();
  const totalIndicators = 5; // Moins d'indicateurs pour mobile
  const activeIndex = Math.floor((progress / 100) * (totalIndicators - 1));

  const handleScroll = useCallback((index: number) => {
    const scrollPercentage = (index / (totalIndicators - 1)) * 100;
    const scrollPosition = (scrollPercentage / 100) * (document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
  }, [totalIndicators]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="block flex fixed right-4 bottom-4 z-50 flex-col space-y-2 md:hidden"
    >
      {[...Array(totalIndicators)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.8 }}
          animate={{
            scale: 1,
          }}
          transition={{ duration: 0.2 }}
          className={`w-2 h-2 rounded-full border border-black transition-colors cursor-pointer`}
          style={{
            backgroundColor: i === activeIndex ? '#000' : 'rgba(0, 0, 0, 0)'
          }}
          onClick={() => handleScroll(i)}
          role="button"
          tabIndex={0}
          aria-label={`Scroll to section ${i + 1}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleScroll(i);
            }
          }}
        />
      ))}
    </motion.div>
  );
}; 