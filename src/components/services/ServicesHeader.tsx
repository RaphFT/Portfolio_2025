import { motion } from 'framer-motion';
import { Badge } from './badge';

export const ServicesHeader = () => {
  return (
    <motion.div 
      className="flex gap-1 sm:gap-2 lg:gap-3 flex-col items-center mb-4 sm:mb-6 lg:mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div>
        <Badge variant="secondary">Services</Badge>
      </div>
      <div className="flex gap-1 sm:gap-2 flex-col items-center">
        <h2 
          id="services-heading"
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-tighter max-w-xs sm:max-w-sm md:max-w-xl font-clash text-center"
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 600
          }}
        >
          Ce que je fais ?
        </h2>
        <p 
          className="text-xs sm:text-sm md:text-base lg:text-lg max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-gray-600 text-center font-clash"
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 400
          }}
        >
          Des solutions digitales complètes pour faire grandir votre présence en ligne et atteindre vos objectifs business.
        </p>
      </div>
    </motion.div>
  );
}; 