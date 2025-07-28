import { motion } from 'framer-motion';
import { Badge } from '../services/badge';
import { useMobileOptimization } from '../hero/hooks/useMobileOptimization';

export const ProjectsHeader = () => {
  const { shouldReduceMotion } = useMobileOptimization();
  
  return (
    <motion.div 
      className="flex flex-col gap-1 items-center mb-4 sm:gap-2 lg:gap-3 sm:mb-6 lg:mb-8"
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
      <div className="flex flex-col gap-1 items-center sm:gap-2">
        <h2 
          id="projects-heading"
          className="max-w-xs text-2xl tracking-tighter text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl sm:max-w-sm md:max-w-xl font-clash"
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 600
          }}
          aria-label="Mes projets de développement web"
        >
          Mes Projets
        </h2>
        <p 
          className="max-w-xs text-xs tracking-tight leading-relaxed text-center text-gray-600 sm:text-sm md:text-base lg:text-lg sm:max-w-sm md:max-w-xl lg:max-w-lg font-clash"
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 400
          }}
        >
          Une sélection de mes projets de formation, de l'intégration HTML/CSS 
          au développement full-stack. Chaque projet démontre mon évolution 
          technique et ma capacité d'adaptation.
        </p>
      </div>
    </motion.div>
  );
}; 