import { motion } from 'framer-motion';
import { Badge } from '../services/badge';

export const ProjectsHeader = () => {
  return (
    <motion.div 
      className="flex gap-3 flex-col items-center mb-8 lg:mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div>
        <Badge variant="secondary">Projets</Badge>
      </div>
      <div className="flex gap-2 flex-col items-center">
        <h2 
          id="projects-heading"
          className="text-2xl md:text-4xl lg:text-5xl tracking-tighter max-w-xl font-clash text-center"
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 600
          }}
          aria-label="Mes projets de développement web"
        >
          Mes Réalisations
        </h2>
        <p 
          className="text-base md:text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-gray-600 text-center font-clash"
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