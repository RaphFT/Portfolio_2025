"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  // Utiliser le scroll de la page principale
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={`relative z-0 h-full flex items-center justify-center ${className || ''}`}>
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
          const start = wordProgress * 0.6; // Commencer à 60% du scroll pour chaque mot (plus tôt)
          const end = start + 0.015; // Chaque mot prend seulement 1.5% du scroll (plus rapide)
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]} wordIndex={i} allWords={words}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  wordIndex: number;
  allWords: string[];
}

const Word: FC<WordProps> = ({ children, progress, range, wordIndex, allWords }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  
  // Liste des mots à mettre en vert (sans "les" pour l'instant)
  const highlightedWords = [
    "Raphael", "Fremont", "freelance", "sur", "mesure", "design", "créatif", "engagent", "utilisateurs","lanciez","amélioriez", "démarquer"
  ];
  
  // Vérifier si le mot est dans la liste (en tenant compte de la ponctuation)
  const cleanWord = children?.toString().replace(/[.,!?;:]/g, '') || '';
  let isHighlighted = highlightedWords.includes(cleanWord);
  
  // Logique spéciale pour "les" - seulement s'il est entre "engagent" et "utilisateurs"
  if (cleanWord === "les") {
    // Vérifier le contexte : le mot précédent doit être "engagent" et le suivant "utilisateurs"
    const prevWord = wordIndex > 0 ? allWords[wordIndex - 1]?.replace(/[.,!?;:]/g, '') : '';
    const nextWord = wordIndex < allWords.length - 1 ? allWords[wordIndex + 1]?.replace(/[.,!?;:]/g, '') : '';
    
    isHighlighted = prevWord === "engagent" && nextWord === "utilisateurs";
  }
  
  return (
    <span 
      className="relative mx-1 lg:mx-2 font-clash"
      style={{
        fontFamily: '"Clash Display", sans-serif',
        fontWeight: 400
      }}
    >
      <span className="absolute text-black opacity-30">
        {children}
      </span>
      <motion.span
        style={{ opacity: opacity }}
        className={isHighlighted ? 'text-[#47D649] drop-shadow-[0_0_0.5px_#47D649]' : 'text-black'}
      >
        {children}
      </motion.span>
    </span>
  );
};

export { TextRevealByWord }; 