import { motion } from 'framer-motion';

export const About2Description = () => {
  return (
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
  );
}; 