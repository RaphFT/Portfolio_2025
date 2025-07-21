import { motion } from 'framer-motion';
import { LavaLamp } from './ui/fluid-blob';

export const About2 = () => {
  return (
    <section 
      className="flex relative flex-col justify-center items-center w-full h-screen"
      id="journey"
      aria-labelledby="journey-heading"
    >
      <LavaLamp />
      
      <motion.h1 
        id="journey-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 text-6xl font-bold tracking-tight text-white whitespace-nowrap mix-blend-exclusion md:text-8xl font-clash"
        style={{
          fontFamily: '"Clash Display", sans-serif',
          fontWeight: 600
        }}
        aria-label="Le Design m'a mené ici. Je suis un Développeur."
      >
        La curiosité m'a mené ici.
        <br />
        Je suis un Développeur.
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mt-8 max-w-2xl text-lg leading-relaxed text-center text-white mix-blend-exclusion md:text-xl font-clash"
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