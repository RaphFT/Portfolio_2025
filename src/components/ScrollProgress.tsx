import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useCallback } from 'react';

export const ScrollProgress = () => {
  const { progress } = useScrollProgress();
  const totalIndicators = 10;
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
      className="fixed right-5 top-1/2 -translate-y-1/2 space-y-1 z-50"
    >
      {[...Array(totalIndicators)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.8 }}
          animate={{
            scale: 1,
          }}
          transition={{ duration: 0.2 }}
          className={`w-4 h-4 border border-black cursor-pointer transition-colors`}
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