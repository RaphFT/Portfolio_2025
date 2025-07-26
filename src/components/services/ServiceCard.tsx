import { motion } from 'framer-motion';
import { type ServiceItem } from './servicesData';

type ServiceCardProps = {
  service: ServiceItem;
};

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const { title, description, icon, delay, colSpan } = service;
  
  return (
    <motion.div 
      className={`relative bg-gray-100 rounded-lg h-full p-3 sm:p-4 lg:p-5 flex flex-col overflow-hidden group cursor-pointer ${
        colSpan === 2 ? 'lg:col-span-2' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      {/* Effet de fond vert qui apparaît au hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-green-500/30 to-green-600/20 rounded-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ 
          opacity: 1, 
          scale: 1,
          transition: { duration: 0.4, ease: "easeOut" }
        }}
      />
      
      {/* Particules vertes flottantes */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full opacity-60"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
      
      {/* Bordure verte animée */}
      <motion.div 
        className="absolute inset-0 rounded-lg border-2 border-transparent"
        whileHover={{ 
          borderColor: "#47D649",
          transition: { duration: 0.3 }
        }}
      />
      
      {/* Contenu avec effet de hover */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex-shrink-0 mb-2 sm:mb-3">
          {icon}
        </div>
        
        <div className="flex flex-col flex-1">
          <motion.h3 
            className="text-base sm:text-lg lg:text-xl tracking-tight font-clash mb-1 sm:mb-2"
            style={{
              fontFamily: '"Clash Display", sans-serif',
              fontWeight: 500
            }}
            whileHover={{ 
              color: "#47D649",
              transition: { duration: 0.3 }
            }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-600 text-xs sm:text-sm lg:text-base font-clash leading-relaxed"
            style={{
              fontFamily: '"Clash Display", sans-serif',
              fontWeight: 400
            }}
            whileHover={{ 
              color: "#2D5A2E",
              transition: { duration: 0.3 }
            }}
          >
            {description}
          </motion.p>
        </div>
        
        {/* Indicateur de hover en bas */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 rounded-b-lg"
          initial={{ scaleX: 0 }}
          whileHover={{ 
            scaleX: 1,
            transition: { duration: 0.4, ease: "easeOut" }
          }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  );
}; 