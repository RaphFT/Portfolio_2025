import {
  SwatchIcon,
  MagnifyingGlassIcon,
  ComputerDesktopIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  colSpan?: number;
};

export const servicesData: ServiceItem[] = [
  {
    id: 'brand-identity',
    title: 'IDENTITÉ DE MARQUE',
    description: 'Donnez vie à votre marque avec une identité visuelle unique et mémorable. Du logo aux supports marketing, je crée une cohérence visuelle qui reflète vos valeurs.',
    icon: <SwatchIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 stroke-1 text-gray-600" />,
    delay: 0,
    colSpan: 2
  },
  {
    id: 'seo-optimization',
    title: 'OPTIMISATION SEO',
    description: 'Maximisez votre visibilité en ligne avec une stratégie SEO efficace. Optimisation technique, contenu de qualité et mots-clés ciblés.',
    icon: <MagnifyingGlassIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 stroke-1 text-gray-600" />,
    delay: 0.2
  },
  {
    id: 'web-development',
    title: 'CONCEPTION & DÉVELOPPEMENT WEB',
    description: 'Sites web modernes, rapides et optimisés qui convertissent. Expertise en React, Next.js et TypeScript pour créer des expériences exceptionnelles.',
    icon: <ComputerDesktopIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 stroke-1 text-gray-600" />,
    delay: 0.4
  },
  {
    id: 'custom-projects',
    title: 'PROJETS SUR MESURE',
    description: 'Solutions rapides et efficaces pour vos besoins spécifiques. Landing pages, optimisations ou nouvelles fonctionnalités, je m\'adapte à votre budget.',
    icon: <WrenchScrewdriverIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 stroke-1 text-gray-600" />,
    delay: 0.6,
    colSpan: 2
  }
]; 