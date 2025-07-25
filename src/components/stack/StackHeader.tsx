import { motion } from 'framer-motion';
import { Badge } from '../services/badge';

export const StackHeader = () => {
  return (
    <motion.div 
      className="flex gap-1 sm:gap-2 lg:gap-3 flex-col items-center mb-4 sm:mb-6 lg:mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div>
        <Badge variant="secondary" className="!bg-black !text-white hover:!bg-black/80">Technologies</Badge>
      </div>
      <div className="flex gap-1 sm:gap-2 flex-col items-center">
        <h2 
          id="stack-heading"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter max-w-xs sm:max-w-sm md:max-w-xl font-clash text-center"
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 600
          }}
          aria-label="Ma stack technique de développement"
        >
          Stack Technique
        </h2>
        <p 
          className="text-xs sm:text-sm md:text-base lg:text-lg max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-gray-600 text-center font-clash px-2 sm:px-0"
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 400
          }}
        >
          Technologies modernes et outils que j'utilise pour créer des expériences web performantes et innovantes.
        </p>
      </div>
    </motion.div>
  );
}; 