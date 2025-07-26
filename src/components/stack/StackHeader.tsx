import { motion } from 'framer-motion';
import { Badge } from '../services/badge';

export const StackHeader = () => {
  return (
    <motion.div 
      className="flex flex-col items-center space-y-2 sm:space-y-3 lg:space-y-4 mb-4 sm:mb-6 lg:mb-8 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-center">
        <Badge variant="secondary" className="!bg-black !text-white hover:!bg-black/80">Technologies</Badge>
      </div>
      <div className="flex flex-col items-center space-y-3 sm:space-y-4 max-w-2xl mx-auto">
        <h2 
          id="stack-heading"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter font-clash text-center leading-tight"
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 600
          }}
          aria-label="Ma stack technique de développement"
        >
          Stack Technique
        </h2>
        <p 
          className="text-xs sm:text-sm md:text-base leading-relaxed tracking-tight text-gray-600 text-center font-clash max-w-lg mx-auto"
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