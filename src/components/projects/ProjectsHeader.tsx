import { motion } from 'framer-motion';
import { Badge } from '../services/badge';
import { useMobileOptimization } from '../hero/hooks/useMobileOptimization';

export const ProjectsHeader = () => {
  const { shouldReduceMotion } = useMobileOptimization();
  
  return (
    <motion.div 
      className="flex gap-1 sm:gap-2 lg:gap-3 flex-col items-center mb-2 sm:mb-4 md:mb-6 lg:mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: shouldReduceMotion ? 0.2 : 0.3,
        ease: shouldReduceMotion ? 'linear' : 'easeOut'
      }}
      viewport={{ once: true }}
    >
      <div>
        <Badge variant="secondary" className="!bg-black !text-white hover:!bg-black/80">Projets</Badge>
      </div>
      <div className="flex gap-1 sm:gap-2 flex-col items-center">
        <h2 
          id="projects-heading"
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tighter max-w-xs sm:max-w-sm md:max-w-xl font-clash text-center"
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 600
          }}
          aria-label="Mes projets de développement web"
        >
          Mes Réalisations
        </h2>
        <p 
          className="text-xs sm:text-sm md:text-base lg:text-lg max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-gray-600 text-center font-clash px-2 sm:px-0"
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 400
          }}
        >
          Découvrez une sélection de mes réalisations web, allant de sites vitrines 
          à des applications complètes. Chaque projet reflète mon approche 
          centrée sur l'expérience utilisateur et les performances.
        </p>
      </div>
    </motion.div>
  );
}; 