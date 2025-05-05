import { motion } from 'framer-motion';
import {
  SwatchIcon,
  MagnifyingGlassIcon,
  ComputerDesktopIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const ServiceCard = ({ title, description, Icon, delay, id }: {
  title: string;
  description: string;
  Icon: React.ElementType;
  delay: number;
  id: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="p-6 md:p-8 transition-all duration-300 bg-white border border-gray-100 rounded-lg hover:shadow-lg hover:border-gray-200 h-full"
    tabIndex={0}
    role="group"
    aria-labelledby={id}
  >
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-2 transition-colors duration-300 rounded-lg bg-gray-50 group-hover:bg-gray-100">
          <Icon className="w-6 h-6 text-gray-600 transition-colors duration-300 group-hover:text-gray-900" aria-hidden="true" />
        </div>
        <h3 
          id={id} 
          className="text-lg md:text-xl font-clash"
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 500
          }}
        >
          {title}
        </h3>
      </div>
      <p 
        className="text-sm md:text-base text-gray-600 font-clash"
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

const services = [
  {
    id: 'service-brand',
    title: 'BRAND IDENTITY',
    description: "Bring your brand to life with a unique and memorable visual identity. From logo to marketing materials, I create visual consistency that reflects your values and captures your audience's attention.",
    delay: 0,
    Icon: SwatchIcon
  },
  {
    id: 'service-seo',
    title: 'SEO',
    description: "Maximize your online visibility with effective SEO strategy. Technical optimization, quality content, and targeted keywords to propel your website to the top search results.",
    delay: 0.2,
    Icon: MagnifyingGlassIcon
  },
  {
    id: 'service-website',
    title: 'WEBSITE DESIGN AND DEV',
    description: "Modern, fast, and optimized websites that convert. Expertise in React, Next.js, and TypeScript to create exceptional user experiences, perfectly aligned with your business goals.",
    delay: 0.4,
    Icon: ComputerDesktopIcon
  },
  {
    id: 'service-smallproject',
    title: 'SMALL PROJECT',
    description: "Quick and efficient solutions for your specific needs. Landing pages, optimizations, or new features, I adapt to your budget while maintaining premium quality.",
    delay: 0.6,
    Icon: WrenchScrewdriverIcon
  }
];

export const Services = () => {
  return (
    <section 
      id="services" 
      className="flex items-center min-h-screen py-20 bg-gray-50"
      aria-labelledby="services-heading"
    >
      <div className="container px-4">
        <motion.h2
          id="services-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-2xl md:text-3xl lg:text-4xl text-center font-clash"
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 600
          }}
        >
          What i do ?
        </motion.h2>
        
        <div 
          className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-6xl mx-auto"
          role="list"
          aria-label="Services offered"
        >
          {services.map((service) => (
            <div key={service.id} role="listitem">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 