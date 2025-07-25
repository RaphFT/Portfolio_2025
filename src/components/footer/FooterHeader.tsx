import { motion } from 'framer-motion';

export const FooterHeader = () => {
  return (
    <motion.h2
      id="contact-heading"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-6 text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-clash sm:mb-8 lg:mb-12"
      style={{
        fontFamily: '"Clash Display", sans-serif',
        fontWeight: 600
      }}
    >
      <div className="block whitespace-nowrap">DE GRANDE CHOSES</div>
      <div className="block whitespace-nowrap">PEUVENT NAÎTRE D'UN SIMPLE</div>
      <div className="block whitespace-nowrap">« BONJOUR »</div>
    </motion.h2>
  );
}; 