import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';

export const ServicesHeader = () => {
  return (
    <motion.div 
      className="flex gap-4 flex-col items-start"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div>
        <Badge variant="secondary">Services</Badge>
      </div>
      <div className="flex gap-2 flex-col">
        <h2 
          id="services-heading"
          className="text-3xl md:text-5xl tracking-tighter max-w-xl font-clash text-left"
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 600
          }}
        >
          Ce que je fais ?
        </h2>
        <p 
          className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-gray-600 text-left font-clash"
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