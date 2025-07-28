import { motion } from 'framer-motion';
import { TechItem } from './stackData';
import { GlitchText } from '../effects/GlitchText';

type TechCardProps = {
  tech: TechItem;
};

export const TechCard = ({ tech }: TechCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.2, delay: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        y: -2,
        transition: { duration: 0.2 }
      }}
      className="group relative p-2 sm:p-5 lg:p-6 rounded-xl overflow-hidden transition-all duration-300 border border-gray-100/80 bg-white hover:shadow-[0_8px_32px_rgba(71,214,73,0.15)] hover:-translate-y-0.5 will-change-transform"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
      }}
    >
      {/* Matrix Background pattern - Desktop only */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(71,214,73,0.1)_1px,transparent_1px)] bg-[length:6px_6px]" />
      </div>
      
      {/* Matrix border effect - Desktop only */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
        <div className="absolute inset-0 border border-[#47D649] rounded-xl" style={{ boxShadow: '0 0 20px rgba(71,214,73,0.3)' }} />
      </div>

      <div className="relative flex flex-col space-y-4 sm:space-y-3">
        <div className="flex items-center justify-between">
          <div className="w-8 h-8 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center bg-black/5 sm:group-hover:bg-gradient-to-br sm:group-hover:from-[#47D649] sm:group-hover:to-[#2D5A2E] transition-all duration-300">
            <span className="text-lg sm:text-lg sm:group-hover:text-white transition-colors duration-300">{tech.icon}</span>
          </div>
                      <span className="text-xs font-medium px-1 sm:px-2 py-1 rounded-lg backdrop-blur-sm bg-black/5 text-gray-600 transition-colors duration-300 sm:group-hover:bg-[#47D649] sm:group-hover:text-white">
              {tech.category}
            </span>
        </div>

        <div className="space-y-1 sm:space-y-2">
          <h3 className="font-medium text-gray-900 tracking-tight text-sm sm:text-[15px] font-clash group-hover:text-[#47D649] transition-colors duration-300"
            style={{
              fontFamily: '"Clash Display", sans-serif',
              fontWeight: 500
            }}
          >
            <span className="sm:hidden">{tech.name}</span>
            <GlitchText glitchInterval={15000} intensity={0.3} glitchDuration={150} className="hidden sm:inline">
              {tech.name}
            </GlitchText>
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