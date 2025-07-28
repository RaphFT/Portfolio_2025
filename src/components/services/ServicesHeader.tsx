import { motion } from 'framer-motion';
import { Badge } from './badge';

export const ServicesHeader = () => {
  return (
    <motion.div 
      className="flex flex-col gap-1 items-center mb-4 sm:gap-2 lg:gap-3 sm:mb-6 lg:mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div>
        <Badge variant="secondary" className="!bg-black !text-white hover:!bg-black/80">Solutions</Badge>
      </div>
      <div className="flex flex-col gap-1 items-center sm:gap-2">
        <h2 
          id="services-heading"
          className="max-w-xs text-2xl tracking-tighter text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl sm:max-w-sm md:max-w-xl font-clash"
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 600
          }}
        >
          Mes services
        </h2>
        <p 
          className="max-w-xs text-xs tracking-tight leading-relaxed text-center text-gray-600 sm:text-sm md:text-base lg:text-lg sm:max-w-sm md:max-w-xl lg:max-w-lg font-clash"
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