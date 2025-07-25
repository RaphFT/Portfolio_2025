import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

type OptimizedTextRevealProps = {
  text: string;
  className?: string;
};

export const OptimizedTextReveal = ({ 
  text, 
  className = ''
}: OptimizedTextRevealProps) => {
  const targetRef = useRef<HTMLDivElement>(null);

  // Utiliser le scroll de la page principale (comme l'original)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const words = text.split(" ");

  return (
    <div 
      ref={targetRef} 
      className={`relative z-0 h-full flex items-center justify-center ${className}`}
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
          // Animation mot par mot : chaque mot a sa propre fenêtre de temps (comme l'original)
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
      
      {/* Hidden description for screen readers */}
      <div className="sr-only">
        {text}
      </div>
    </div>
  );
};

type OptimizedWordProps = {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
};

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
      <span className="absolute text-black opacity-30">{children}</span>
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