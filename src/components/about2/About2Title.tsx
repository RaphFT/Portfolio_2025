import { motion } from 'framer-motion';

export const About2Title = () => {
  return (
    <motion.h1 
      id="journey-heading"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative z-10 px-2 max-w-full text-2xl font-bold tracking-tight leading-tight text-center text-white mix-blend-exclusion sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-clash"
      style={{
        fontFamily: '"Clash Display", sans-serif',
        fontWeight: 600
      }}
      aria-label="La curiosité m'a mené ici. Je suis un Développeur."
    >
      <span className="block">La curiosité m'a mené ici.</span>
      <span className="block mt-1 sm:mt-2 md:mt-3 lg:mt-4">Je suis un Développeur.</span>
    </motion.h1>
  );
}; 