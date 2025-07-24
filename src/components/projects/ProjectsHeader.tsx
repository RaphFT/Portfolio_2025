import { motion } from 'framer-motion';

export const ProjectsHeader = () => {
  return (
    <motion.div 
      className="flex flex-col gap-4 items-start mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div>
        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-black text-white">
          Portfolio
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <h2 
          id="projects-heading"
          className="max-w-xl text-3xl tracking-tighter text-left md:text-5xl font-clash"
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 600
          }}
        >
          Mes Projets
        </h2>
        <p 
          className="max-w-xl text-lg tracking-tight leading-relaxed text-left text-gray-600 lg:max-w-lg font-clash"
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 400
          }}
        >
          Une sélection de mes réalisations récentes, alliant créativité et expertise technique pour créer des expériences digitales exceptionnelles.
        </p>
      </div>
    </motion.div>
  );
}; 