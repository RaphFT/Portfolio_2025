import { motion } from 'framer-motion';
import {
  SwatchIcon,
  MagnifyingGlassIcon,
  ComputerDesktopIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const ServiceCard = ({ title, description, Icon, delay, className }: {
  title: string;
  description: string;
  Icon: React.ElementType;
  delay: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className={`p-8 transition-shadow bg-white shadow-sm rounded-2xl hover:shadow-md ${className || ''}`}
  >
    <div className="flex items-center gap-3 mb-4">
      <Icon className="w-6 h-6 text-primary" />
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p className="text-secondary">{description}</p>
  </motion.div>
);

const services = [
  {
    title: 'BRAND IDENTITY',
    description: "Bring your brand to life with a unique and memorable visual identity. From logo to marketing materials, I create visual consistency that reflects your values and captures your audience's attention.",
    delay: 0,
    Icon: SwatchIcon
  },
  {
    title: 'SEO',
    description: "Maximize your online visibility with effective SEO strategy. Technical optimization, quality content, and targeted keywords to propel your website to the top search results.",
    delay: 0.2,
    Icon: MagnifyingGlassIcon
  },
  {
    title: 'WEBSITE DESIGN AND DEV',
    description: "Modern, fast, and optimized websites that convert. Expertise in React, Next.js, and TypeScript to create exceptional user experiences, perfectly aligned with your business goals. From responsive designs to seamless interactions, I blend aesthetic excellence with technical performance. My approach focuses on accessibility, SEO-friendly structure, and scalable architecture to future-proof your digital presence.",
    delay: 0.4,
    Icon: ComputerDesktopIcon
  },
  {
    title: 'BIG PROJECT',
    description: "Complete digital transformation for your business. From needs analysis to deployment, I manage large-scale projects with proven methodology and rigorous monitoring to ensure your success.",
    delay: 0.6,
    Icon: RocketLaunchIcon
  },
  {
    title: 'SMALL PROJECT',
    description: "Quick and efficient solutions for your specific needs. Landing pages, optimizations, or new features, I adapt to your budget while maintaining premium quality.",
    delay: 0.8,
    Icon: WrenchScrewdriverIcon
  },
];

export const Services = () => {
  return (
    <section className="flex items-center min-h-screen py-20">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center heading-lg"
        >
          What i do ?
        </motion.h2>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
          {/* Top row */}
          <div className="space-y-6 md:col-span-2">
            <ServiceCard {...services[0]} />
            <ServiceCard {...services[1]} />
          </div>

          {/* Website Design and Dev - Top right */}
          <ServiceCard {...services[2]} className="md:col-span-4" />

          {/* Bottom row */}
          {/* Big Project - Bottom left */}
          <ServiceCard {...services[3]} className="md:col-span-4" />

          {/* Small Project - Bottom right */}
          <ServiceCard {...services[4]} className="md:col-span-2" />
        </div>
      </div>
    </section>
  );
}; 