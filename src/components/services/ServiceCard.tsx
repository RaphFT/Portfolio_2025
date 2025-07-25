import { motion } from 'framer-motion';
import { type ServiceItem } from './servicesData';

type ServiceCardProps = {
  service: ServiceItem;
};

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const { title, description, icon, delay, colSpan } = service;
  
  return (
    <motion.div 
      className={`bg-gray-100 rounded-lg h-full p-3 sm:p-4 lg:p-5 flex flex-col ${
        colSpan === 2 ? 'lg:col-span-2' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="flex-shrink-0 mb-2 sm:mb-3">
        {icon}
      </div>
      <div className="flex flex-col flex-1">
        <h3 
          className="text-base sm:text-lg lg:text-xl tracking-tight font-clash mb-1 sm:mb-2"
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 500
          }}
        >
          {title}
        </h3>
        <p 
          className="text-gray-600 text-xs sm:text-sm lg:text-base font-clash leading-relaxed"
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 400
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}; 