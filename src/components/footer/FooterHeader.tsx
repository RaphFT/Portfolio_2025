import { motion } from 'framer-motion';

export const FooterHeader = () => {
  return (
    <motion.h2
      id="contact-heading"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="px-2 text-2xl tracking-tighter leading-tight text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-clash sm:px-0"
      style={{
        fontFamily: '"Clash Display", sans-serif',
        fontWeight: 600
      }}
    >
      <div className="block whitespace-nowrap">DE GRANDE CHOSES</div>
      <div className="block whitespace-nowrap">PEUVENT NAÎTRE D'UN SIMPLE</div>
      <div className="block whitespace-nowrap">
        <span className="text-[#47D649]">BONJOUR</span>
      </div>
    </motion.h2>
  );
}; 