import { motion } from 'framer-motion';
import { getAbout2Text } from './about2Data';

export const About2Description = () => {
  const { description } = getAbout2Text('fr');

  return (
    <motion.p 
      initial={{ opacity: 0, transform: 'translateY(30px)' }}
      whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
      transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative z-10 px-2 mt-4 max-w-xs text-sm leading-relaxed text-center text-white mix-blend-exclusion sm:text-base md:text-lg lg:text-xl sm:max-w-sm md:max-w-lg lg:max-w-2xl font-clash sm:mt-6 md:mt-8 sm:px-4"
      style={{
        fontFamily: '"Clash Display", sans-serif',
        fontWeight: 400,
        willChange: 'transform, opacity'
      }}
    >
      {description}
    </motion.p>
  );
}; 