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
        duration: 0.6,
        staggerChildren: 0.08,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 max-w-7xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {techStack.map((tech, index) => (
        <TechCard key={tech.id} tech={tech} index={index} />
      ))}
    </motion.div>
  );
}; 