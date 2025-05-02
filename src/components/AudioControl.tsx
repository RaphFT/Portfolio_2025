import { motion } from 'framer-motion';
import { useAudio } from '../contexts/AudioContext';
import { useState, useEffect } from 'react';

export const AudioControl = () => {
  const { isPlaying, toggleAudio } = useAudio();
  const [isOverFooter, setIsOverFooter] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOverFooter(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector('footer');
    if (footer) {
      observer.observe(footer);
    }

    return () => observer.disconnect();
  }, []);

  const waveVariants = {
    playing: {
      d: [
        "M 0,7.5 C 2,7.5 3,4 5,4 C 7,4 8,11 10,11 C 12,11 13,4 15,4 C 17,4 18,11 20,11 C 22,11 23,4 25,4 C 27,4 28,11 30,11 C 32,11 33,4 35,4 C 37,4 38,7.5 40,7.5",
        "M 0,7.5 C 2,7.5 3,11 5,11 C 7,11 8,4 10,4 C 12,4 13,11 15,11 C 17,11 18,4 20,4 C 22,4 23,11 25,11 C 27,11 28,4 30,4 C 32,4 33,11 35,11 C 37,11 38,7.5 40,7.5",
        "M 0,7.5 C 2,7.5 3,4 5,4 C 7,4 8,11 10,11 C 12,11 13,4 15,4 C 17,4 18,11 20,11 C 22,11 23,4 25,4 C 27,4 28,11 30,11 C 32,11 33,4 35,4 C 37,4 38,7.5 40,7.5"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1],
        times: [0, 0.5, 1]
      }
    },
    muted: {
      d: "M 0,7.5 L 40,7.5",
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.button
      onClick={toggleAudio}
      className={`fixed bottom-8 right-8 z-50 p-3 backdrop-blur-sm rounded-full
                 transition-colors duration-300 w-14 h-14 flex items-center justify-center
                 ${isOverFooter 
                   ? 'text-white hover:text-white/80' 
                   : 'text-black hover:text-black/80'}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full h-full">
        {/* Cercle pointillé */}
        <svg
          viewBox="0 0 44 44"
          className="absolute inset-0 w-full h-full rotate-90"
          style={{ strokeDasharray: '4 4' }}
        >
          <circle
            cx="22"
            cy="22"
            r="20"
            fill="none"
            strokeWidth="1"
            className={isOverFooter ? 'stroke-white/60' : 'stroke-black/60'}
          />
        </svg>

        {/* Onde sonore */}
        <svg
          viewBox="0 0 40 15"
          className="absolute inset-0 w-8 h-8 m-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          <motion.path
            variants={waveVariants}
            initial="muted"
            animate={isPlaying ? "playing" : "muted"}
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            className={isOverFooter ? 'stroke-white' : 'stroke-black'}
          />
        </svg>
      </div>
    </motion.button>
  );
}; 