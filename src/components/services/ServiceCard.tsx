/**
 * @fileoverview Carte de service individuelle
 * @description Composant affichant une carte de service avec animations
 * sophistiquées et effets de hover
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { motion } from 'framer-motion';
import { type ServiceItem } from './servicesData';

/**
 * Interface des props du composant ServiceCard
 * @interface ServiceCardProps
 */
type ServiceCardProps = {
  service: ServiceItem;
};

/**
 * Composant carte de service
 * @description Affiche une carte de service avec :
 * - Animations d'apparition fluides
 * - Effets de hover sophistiqués (desktop uniquement)
 * - Particules vertes flottantes
 * - Bordure animée
 * - Gradient de fond au hover
 * - Design responsive
 * - Police Clash Display personnalisée
 * 
 * @param {ServiceCardProps} props - Props du composant
 * @param {ServiceItem} props.service - Service à afficher
 * 
 * @returns {JSX.Element} Carte de service avec animations
 * 
 * @example
 * <ServiceCard service={serviceData} />
 */
export const ServiceCard = ({ service }: ServiceCardProps) => {
  const { title, description, icon, colSpan } = service;
  
  return (
    <motion.div 
      className={`relative bg-gray-100 rounded-lg h-full p-2 sm:p-4 lg:p-5 flex flex-col overflow-hidden group cursor-pointer ${
        colSpan === 2 ? 'lg:col-span-2' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      {/* Effet de fond vert qui apparaît au hover - Desktop only */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-green-500/30 to-green-600/20 rounded-lg hidden sm:block"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ 
          opacity: 1, 
          scale: 1,
          transition: { duration: 0.4, ease: "easeOut" }
        }}
      />
      
      {/* Particules vertes flottantes - Desktop only */}
      <motion.div 
        className="absolute inset-0 pointer-events-none hidden sm:block"
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
      
      {/* Bordure verte animée - Desktop only */}
      <motion.div 
        className="absolute inset-0 rounded-lg border-2 border-transparent hidden sm:block"
        whileHover={{ 
          borderColor: "#47D649",
          transition: { duration: 0.3 }
        }}
      />
      
      {/* Contenu avec effet de hover */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icône du service */}
        <div className="flex-shrink-0 mb-2 sm:mb-3">
          {icon}
        </div>
        
        {/* Contenu textuel */}
        <div className="flex flex-col flex-1">
          {/* Titre du service */}
          <motion.h3 
            className="text-sm sm:text-lg lg:text-xl tracking-tight font-clash mb-1 sm:mb-2"
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
          
          {/* Description du service */}
          <motion.p 
            className="text-gray-600 text-xs sm:text-xs lg:text-base font-clash leading-relaxed"
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
        
        {/* Indicateur de hover en bas - Desktop only */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 rounded-b-lg hidden sm:block"
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