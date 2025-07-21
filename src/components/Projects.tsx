import { motion } from 'framer-motion';
import { BentoGrid, type BentoItem } from './ui/bento-grid';
import {
  CodeBracketIcon,
  GlobeAltIcon,
  CommandLineIcon,
  CpuChipIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const projectsData: BentoItem[] = [
  {
    title: "PC GAMING GUIDE",
    meta: "React, JS, CSS",
    description: "Application web moderne pour une agence créative avec interface utilisateur intuitive et design responsive.",
    icon: <CodeBracketIcon className="w-4 h-4 text-blue-500" />,
    status: "Live",
    tags: ["React", "JavaScript", "CSS"],
    colSpan: 2,
    hasPersistentHover: true,
    githubUrl: "https://github.com/raphFT/pc-gaming-guide",
    cta: "Voir le code"
  },
  {
    title: "KASA",
    meta: "React, Node.js",
    description: "Système de gestion de laboratoire innovant avec architecture moderne et base de données MongoDB.",
    icon: <GlobeAltIcon className="w-4 h-4 text-emerald-500" />,
    status: "Déployé",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/raphFT/kasa",
    cta: "Voir le code"
  },
  {
    title: "BOOKI",
    meta: "HTML, CSS",
    description: "Plateforme de design interactive pour professionnels créatifs avec interface moderne et animations fluides.",
    icon: <CommandLineIcon className="w-4 h-4 text-purple-500" />,
    status: "Terminé",
    tags: ["HTML", "CSS", "Design"],
    githubUrl: "https://github.com/raphFT/booki",
    cta: "Voir le code"
  },
  {
    title: "NINA CARDUCCI",
    meta: "SEO, JS",
    description: "Optimisation SEO complète avec JavaScript avancé pour améliorer la visibilité et les performances web.",
    icon: <CpuChipIcon className="w-4 h-4 text-sky-500" />,
    status: "Optimisé",
    tags: ["SEO", "JavaScript", "Performance"],
    colSpan: 2,
    githubUrl: "https://github.com/raphFT/nina-carducci",
    cta: "Voir le code"
  },
  {
    title: "SOPHIE BLUEL",
    meta: "JS, HTML, CSS",
    description: "Application web complète avec JavaScript moderne, HTML sémantique et CSS avancé pour une expérience utilisateur optimale.",
    icon: <RocketLaunchIcon className="w-4 h-4 text-orange-500" />,
    status: "Fonctionnel",
    tags: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/raphFT/sophie-bluel",
    cta: "Voir le code"
  }
];

export const Projects = () => {
  return (
    <section 
      id="projects" 
      className="py-20 w-full bg-gray-50 lg:py-40"
      aria-labelledby="projects-heading"
    >
      <div className="container px-4 mx-auto">
        <motion.div 
          className="flex flex-col gap-4 items-start mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-black text-white">
              Portfolio
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h2 
              id="projects-heading"
              className="max-w-xl text-3xl tracking-tighter text-left md:text-5xl font-clash"
              style={{
                fontFamily: '"Clash Display", sans-serif',
                fontWeight: 600
              }}
            >
              Mes Projets
            </h2>
            <p 
              className="max-w-xl text-lg tracking-tight leading-relaxed text-left text-gray-600 lg:max-w-lg font-clash"
              style={{
                fontFamily: '"Clash Display", sans-serif',
                fontWeight: 400
              }}
            >
              Une sélection de mes réalisations récentes, alliant créativité et expertise technique pour créer des expériences digitales exceptionnelles.
            </p>
          </div>
        </motion.div>
        
        <BentoGrid items={projectsData} />
      </div>
    </section>
  );
}; 