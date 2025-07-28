import { motion } from 'framer-motion';
import { TechCard } from './TechCard';
import { getStackData } from './stackData';

export const StackGrid = () => {
  const techStack = getStackData();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.02,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }}
    >
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 lg:gap-8">
        {techStack.map((tech) => (
          <TechCard key={tech.id} tech={tech} />
        ))}
      </div>
    </motion.div>
  );
}; 