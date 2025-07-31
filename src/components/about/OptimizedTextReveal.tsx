/**
 * @fileoverview Composant de révélation de texte optimisé
 * @description Version optimisée du composant de révélation de texte
 * avec améliorations de performance et accessibilité
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

/**
 * Interface des props du composant OptimizedTextReveal
 * @interface OptimizedTextRevealProps
 */
type OptimizedTextRevealProps = {
  text: string;
  className?: string;
};

/**
 * Composant de révélation de texte optimisé
 * @description Version optimisée du composant de révélation de texte avec :
 * - Optimisations de performance GPU
 * - Accessibilité améliorée
 * - Animation basée sur le scroll
 * - Police Clash Display personnalisée
 * - Design responsive
 * 
 * @param {OptimizedTextRevealProps} props - Props du composant
 * @param {string} props.text - Texte à afficher avec animation
 * @param {string} [props.className=''] - Classes CSS supplémentaires
 * 
 * @returns {JSX.Element} Texte avec animation de révélation optimisée
 * 
 * @example
 * <OptimizedTextReveal 
 *   text="Je suis Raphael Fremont, développeur web freelance..."
 *   className="custom-class"
 * />
 */
export const OptimizedTextReveal = ({ 
  text, 
  className = ''
}: OptimizedTextRevealProps) => {
  const targetRef = useRef<HTMLDivElement>(null);

  // Utiliser le scroll de la page principale pour déclencher les animations
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const words = text.split(" ");

  return (
    <div 
      ref={targetRef} 
      className={`flex relative z-0 justify-center items-center h-full ${className}`}
      role="region"
      aria-label="About section text with scroll-based word reveal"
    >
      <p 
        className="flex flex-wrap p-8 max-w-4xl text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black/30 font-clash"
        style={{
          fontFamily: '"Clash Display", sans-serif',
          fontWeight: 400
        }}
      >
        {words.map((word, i) => {
          // Animation mot par mot : chaque mot a sa propre fenêtre de temps
          const wordProgress = i / words.length;
          const start = wordProgress * 0.8; // Commencer à 80% du scroll pour chaque mot
          const end = start + 0.02; // Chaque mot prend seulement 2% du scroll
          
          return (
            <OptimizedWord key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </OptimizedWord>
          );
        })}
      </p>
      
      {/* Description cachée pour les lecteurs d'écran */}
      <div className="sr-only">
        {text}
      </div>
    </div>
  );
};

/**
 * Interface des props du composant OptimizedWord
 * @interface OptimizedWordProps
 */
type OptimizedWordProps = {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
};

/**
 * Composant mot optimisé avec animation
 * @description Affiche un mot avec animation d'opacité optimisée pour les performances
 * 
 * @param {OptimizedWordProps} props - Props du composant
 * @param {React.ReactNode} props.children - Le mot à afficher
 * @param {MotionValue<number>} props.progress - Progression du scroll
 * @param {[number, number]} props.range - Plage d'animation pour ce mot
 * 
 * @returns {JSX.Element} Mot avec animation optimisée
 */
const OptimizedWord = ({ children, progress, range }: OptimizedWordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  
  return (
    <span 
      className="relative mx-1 lg:mx-2 font-clash"
      style={{
        fontFamily: '"Clash Display", sans-serif',
        fontWeight: 400
      }}
      aria-hidden="true"
    >
      {/* Texte de fond pour l'effet de profondeur */}
      <span className="absolute text-black opacity-30">{children}</span>
      {/* Texte animé avec optimisations GPU */}
      <motion.span
        style={{ 
          opacity: opacity,
          willChange: 'opacity' // Optimisation GPU
        }}
        className="text-black"
      >
        {children}
      </motion.span>
    </span>
  );
}; 