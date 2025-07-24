import { ServicesHeader } from './services/ServicesHeader';
import { ServicesGrid } from './services/ServicesGrid';

export const Services = () => {
  return (
    <section 
      id="services" 
      className="w-full py-20 lg:py-40 bg-gray-50"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10">
          <ServicesHeader />
          <ServicesGrid />
        </div>
      </div>
    </section>
  );
}; 