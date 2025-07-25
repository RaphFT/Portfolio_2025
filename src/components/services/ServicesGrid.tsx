import { ServiceCard } from './ServiceCard';
import { servicesData } from './servicesData';

export const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
      {servicesData.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}; 