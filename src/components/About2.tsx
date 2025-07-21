import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';

// Chargement dynamique de la LavaLamp
const LavaLamp = lazy(() => import('./ui/fluid-blob').then(module => ({ default: module.LavaLamp })));

// Composant de fallback pour la LavaLamp
const LavaLampFallback = () => (
  <div className="absolute inset-0 bg-black animate-pulse" />
);

export const About2 = () => {
  return (
    <section 
      className="flex relative flex-col justify-center items-center px-4 w-full min-h-screen sm:px-6 lg:px-8"
      id="journey"
      aria-labelledby="journey-heading"
    >
      <Suspense fallback={<LavaLampFallback />}>
        <LavaLamp />
      </Suspense>
      
      <motion.h1 
        id="journey-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 text-3xl font-bold tracking-tight leading-tight text-center text-white mix-blend-exclusion sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-clash"
        style={{
          fontFamily: '"Clash Display", sans-serif',
          fontWeight: 600
        }}
        aria-label="La curiosité m'a mené ici. Je suis un Développeur."
      >
        <span className="block">La curiosité m'a mené ici.</span>
        <span className="block mt-2 sm:mt-3 md:mt-4">Je suis un Développeur.</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 px-2 mt-4 max-w-xs text-sm leading-relaxed text-center text-white mix-blend-exclusion sm:text-base md:text-lg lg:text-xl sm:max-w-sm md:max-w-lg lg:max-w-2xl font-clash sm:mt-6 md:mt-8 sm:px-4"
        style={{
          fontFamily: '"Clash Display", sans-serif',
          fontWeight: 400
        }}
      >
        Combler le fossé entre designers et développeurs, j'apporte une double perspective à chaque projet. Concevoir avec l'esprit d'un développeur, et coder avec l'œil d'un designer, je crée des expériences numériques qui sont à la fois techniquement solides et visuellement attrayantes.
      </motion.p>
    </section>
  );
}; 