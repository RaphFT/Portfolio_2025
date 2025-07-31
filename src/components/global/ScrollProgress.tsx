/**
 * @fileoverview Indicateur de progression de scroll desktop
 * @description Composant d'indicateur de progression de scroll
 * avec navigation interactive et accessibilité
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { useCallback } from 'react';

/**
 * Composant indicateur de progression de scroll desktop
 * @description Affiche un indicateur de progression de scroll avec :
 * - 10 indicateurs de progression
 * - Navigation interactive par clic
 * - Défilement fluide vers la section
 * - Animation d'apparition avec délai
 * - Position fixe à droite de l'écran
 * - Centrage vertical
 * - Z-index élevé pour la superposition
 * - Accessibilité avec clavier et lecteurs d'écran
 * - Visible uniquement sur desktop (md+)
 * 
 * @returns {JSX.Element} Indicateur de progression de scroll
 * 
 * @example
 * <ScrollProgress />
 */
export const ScrollProgress = () => {
  const { progress } = useScrollProgress();
  const totalIndicators = 10;
  const activeIndex = Math.floor((progress / 100) * (totalIndicators - 1));

  // Fonction de navigation vers une section
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
      className="hidden fixed right-5 top-1/2 z-50 space-y-1 -translate-y-1/2 md:block"
    >
      {/* Indicateurs de progression */}
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