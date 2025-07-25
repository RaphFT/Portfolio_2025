import { ServicesHeader } from '../services/ServicesHeader';
import { ServicesGrid } from '../services/ServicesGrid';

export const Services = () => {
  return (
    <section 
      id="services" 
      className="h-screen w-full bg-white flex items-center justify-center"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col justify-center h-full gap-10">
          <ServicesHeader />
          <ServicesGrid />
        </div>
      </div>
    </section>
  );
}; 