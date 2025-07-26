import { motion } from 'framer-motion';
import { TechItem } from './stackData';

type TechCardProps = {
  tech: TechItem;
  index: number;
};

export const TechCard = ({ tech, index }: TechCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -2,
        transition: { duration: 0.2 }
      }}
      className="group relative p-3 sm:p-5 lg:p-6 rounded-xl overflow-hidden transition-all duration-300 border border-gray-100/80 bg-white hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 will-change-transform"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
      </div>

      <div className="relative flex flex-col space-y-4 sm:space-y-3">
        <div className="flex items-center justify-between">
          <div className="w-8 h-8 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center bg-black/5 group-hover:bg-gradient-to-br transition-all duration-300">
            <span className="text-lg sm:text-lg">{tech.icon}</span>
          </div>
          <span className="text-xs font-medium px-1 sm:px-2 py-1 rounded-lg backdrop-blur-sm bg-black/5 text-gray-600 transition-colors duration-300 group-hover:bg-black/10">
            {tech.category}
          </span>
        </div>

        <div className="space-y-1 sm:space-y-2">
          <h3 className="font-medium text-gray-900 tracking-tight text-sm sm:text-[15px] font-clash"
            style={{
              fontFamily: '"Clash Display", sans-serif',
              fontWeight: 500
            }}
          >
            {tech.name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-snug font-clash"
            style={{
              fontFamily: '"Clash Display", sans-serif',
              fontWeight: 400
            }}
          >
            {tech.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}; 