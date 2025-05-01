import { motion } from 'framer-motion';
import {
  SwatchIcon,
  MagnifyingGlassIcon,
  ComputerDesktopIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const ServiceCard = ({ title, description, Icon, delay, className, id }: {
  title: string;
  description: string;
  Icon: React.ElementType;
  delay: number;
  className?: string;
  id: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className={`p-8 transition-shadow bg-white shadow-sm rounded-2xl hover:shadow-md h-full ${className || ''}`}
    tabIndex={0}
    role="group"
    aria-labelledby={id}
  >
    <div className="flex items-center gap-3 mb-4">
      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
      <h3 id={id} className="text-xl font-bold">{title}</h3>
    </div>
    <p className="text-secondary">{description}</p>
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
    description: "Modern, fast, and optimized websites that convert. Expertise in React, Next.js, and TypeScript to create exceptional user experiences, perfectly aligned with your business goals. From responsive designs to seamless interactions, I blend aesthetic excellence with technical performance. My approach focuses on accessibility, SEO-friendly structure, and scalable architecture to future-proof your digital presence.",
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
      className="flex items-center min-h-screen py-20"
      aria-labelledby="services-heading"
    >
      <div className="container px-4">
        <motion.h2
          id="services-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center heading-lg"
        >
          What i do ?
        </motion.h2>
        
        <div 
          className="grid grid-cols-1 gap-6 md:grid-cols-12"
          role="list"
          aria-label="Services offered"
        >
          {/* Featured service card - spans 2 rows, takes up 50% width in desktop */}
          <div className="md:col-span-6 md:row-span-2" role="listitem">
            <ServiceCard {...services[2]} />
          </div>

          {/* Other services - arranged in a 2x2 grid to the right */}
          <div className="md:col-span-6" role="listitem">
            <ServiceCard {...services[0]} />
          </div>
          
          <div className="md:col-span-6" role="listitem">
            <ServiceCard {...services[1]} />
          </div>

          <div className="md:col-span-6" role="listitem">
            <ServiceCard {...services[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}; 