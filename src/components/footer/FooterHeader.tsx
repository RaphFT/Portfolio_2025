import { motion } from 'framer-motion';
import { footerData } from './footerData';

export const FooterHeader = () => {
  const titleLines = footerData.title.split('\n');
  
  return (
    <motion.h2
      id="contact-heading"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center font-clash mb-6 sm:mb-8 lg:mb-12"
      style={{
        fontFamily: '"Clash Display", sans-serif',
        fontWeight: 600
      }}
    >
      {titleLines.map((line, index) => (
        <span key={index}>
          {line}
          {index < titleLines.length - 1 && (
            <>
              <br />
              {line.includes('SIMPLE') && <br className="block sm:hidden" />}
            </>
          )}
        </span>
      ))}
    </motion.h2>
  );
}; 