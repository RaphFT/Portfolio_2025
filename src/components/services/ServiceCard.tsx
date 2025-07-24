import { motion } from 'framer-motion';
import { type ServiceItem } from './servicesData';

type ServiceCardProps = {
  service: ServiceItem;
};

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const { title, description, icon, delay, colSpan } = service;
  
  return (
    <motion.div 
      className={`bg-gray-100 rounded-md h-full p-6 aspect-square lg:aspect-auto flex justify-between flex-col ${
        colSpan === 2 ? 'lg:col-span-2' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {icon}
      <div className="flex flex-col">
        <h3 
          className="text-xl tracking-tight font-clash"
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 500
          }}
        >
          {title}
        </h3>
        <p 
          className="text-gray-600 max-w-xs text-base font-clash"
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