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
          const start = wordProgress * 0.8; // Commencer à 80% du scroll pour chaque mot
          const end = start + 0.02; // Chaque mot prend seulement 2% du scroll
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
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
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span 
      className="relative mx-1 lg:mx-2 font-clash"
      style={{
        fontFamily: '"Clash Display", sans-serif',
        fontWeight: 400
      }}
    >
      <span className="absolute text-black opacity-30">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className="text-black"
      >
        {children}
      </motion.span>
    </span>
  );
};

export { TextRevealByWord }; 