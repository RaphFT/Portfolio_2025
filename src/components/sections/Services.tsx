import { ServicesHeader } from '../services/ServicesHeader';
import { ServicesGrid } from '../services/ServicesGrid';

export const Services = () => {
  return (
    <section 
      id="services" 
      className="min-h-screen w-full bg-white flex items-start justify-center py-8 pt-20"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 lg:gap-6">
          <ServicesHeader />
          <ServicesGrid />
        </div>
      </div>
    </section>
  );
}; 