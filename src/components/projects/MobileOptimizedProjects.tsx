/**
 * @fileoverview Composant d'affichage des projets optimisé pour mobile
 * @description Version mobile du carrousel de projets avec animations simplifiées
 * et optimisations pour les petits écrans
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { useState, useCallback } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useMobileOptimization } from '../hero/hooks/useMobileOptimization';

/**
 * Interface définissant la structure d'un projet
 * @interface Project
 */
interface Project {
  title: string;
  meta: string;
  description: string;
  src: string;
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
}

/**
 * Interface des props du composant MobileOptimizedProjects
 * @interface MobileOptimizedProjectsProps
 */
interface MobileOptimizedProjectsProps {
  projects: Project[];
  colors?: {
    title?: string;
    meta?: string;
    description?: string;
    arrowBackground?: string;
    arrowForeground?: string;
    arrowHoverBackground?: string;
  };
  fontSizes?: {
    title?: string;
    meta?: string;
    description?: string;
  };
}

/**
 * Composant d'affichage des projets optimisé pour mobile
 * @description Affiche les projets dans un carrousel simplifié optimisé pour les petits écrans
 * avec des animations réduites et une interface tactile adaptée
 * 
 * @param {MobileOptimizedProjectsProps} props - Props du composant
 * @param {Project[]} props.projects - Array des projets à afficher
 * @param {Object} [props.colors] - Configuration des couleurs
 * @param {Object} [props.fontSizes] - Configuration des tailles de police
 * 
 * @returns {JSX.Element | null} Composant de carrousel mobile ou null si pas sur mobile
 * 
 * @example
 * <MobileOptimizedProjects 
 *   projects={projectsData}
 *   colors={{ title: "#000", meta: "#666" }}
 *   fontSizes={{ title: "1.25rem", description: "1rem" }}
 * />
 */
export const MobileOptimizedProjects = ({
  projects,
  colors = {},
  fontSizes = {}
}: MobileOptimizedProjectsProps) => {
  // Hook d'optimisation mobile pour détecter l'appareil et les préférences
  const { isMobile, shouldReduceMotion } = useMobileOptimization();
  
  // État du composant
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);

  /**
   * Gestionnaire pour passer au projet suivant
   * @description Passe au projet suivant avec bouclage au début si fin de liste
   */
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  /**
   * Gestionnaire pour passer au projet précédent
   * @description Passe au projet précédent avec bouclage à la fin si début de liste
   */
  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  // Retourne null si pas sur mobile (pour éviter le rendu inutile)
  if (!isMobile) {
    return null;
  }

  // Configuration des couleurs avec valeurs par défaut
  const colorTitle = colors.title ?? "#000";
  const colorMeta = colors.meta ?? "#6b7280";
  const colorDescription = colors.description ?? "#4b5563";
  const colorArrowBg = colors.arrowBackground ?? "#141414";
  const colorArrowFg = colors.arrowForeground ?? "#f1f1f7";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#47D649";
  
  // Configuration des tailles de police avec valeurs par défaut
  const fontSizeTitle = fontSizes.title ?? "1.25rem";
  const fontSizeMeta = fontSizes.meta ?? "0.875rem";
  const fontSizeDescription = fontSizes.description ?? "1rem";

  // Projet actuellement affiché
  const activeProject = projects[activeIndex];

  // Variantes d'animation simplifiées pour mobile
  const contentVariants = shouldReduceMotion ? {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  } : {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <div className="px-4 py-6 w-full">
      {/* Section image compacte */}
      <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
        <img
          src={activeProject.src}
          alt={activeProject.title}
          className="object-cover w-full h-full"
        />
        {/* Overlay des tags */}
        <div className="flex absolute bottom-2 left-2 gap-1 flex-wrap">
          {activeProject.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-medium text-white rounded-full bg-green-500/90"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Navigation arrows - positioned below image */}
      <div className="flex justify-center gap-3 mb-4">
        <button
          className="flex justify-center items-center w-8 h-8 rounded-full border-none transition-colors duration-200 cursor-pointer"
          onClick={handlePrev}
          style={{
            backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
          }}
          onMouseEnter={() => setHoverPrev(true)}
          onMouseLeave={() => setHoverPrev(false)}
          aria-label="Previous project"
        >
          <ArrowLeftIcon className="w-4 h-4" style={{ color: colorArrowFg }} />
        </button>
        
        {/* Project indicator */}
        <div className="flex items-center gap-1">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === activeIndex ? 'bg-green-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        <button
          className="flex justify-center items-center w-8 h-8 rounded-full border-none transition-colors duration-200 cursor-pointer"
          onClick={handleNext}
          style={{
            backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
          }}
          onMouseEnter={() => setHoverNext(true)}
          onMouseLeave={() => setHoverNext(false)}
          aria-label="Next project"
        >
          <ArrowRightIcon className="w-4 h-4" style={{ color: colorArrowFg }} />
        </button>
      </div>

      {/* Compact content */}
      <div className="space-y-4">
        <motion.div
          key={activeIndex}
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ 
            duration: shouldReduceMotion ? 0.2 : 0.3, 
            ease: "easeOut" 
          }}
        >
          <h3
            className="mb-1 font-bold font-clash"
            style={{ 
              color: colorTitle, 
              fontSize: fontSizeTitle,
              fontFamily: '"Clash Display", sans-serif',
              fontWeight: 600
            }}
          >
            {activeProject.title}
          </h3>
          
          <p
            className="mb-3 font-clash"
            style={{ 
              color: colorMeta, 
              fontSize: fontSizeMeta,
              fontFamily: '"Clash Display", sans-serif',
              fontWeight: 400
            }}
          >
            {activeProject.meta}
          </p>
          
          <p
            className="mb-4 leading-relaxed font-clash"
            style={{ 
              color: colorDescription, 
              fontSize: fontSizeDescription,
              fontFamily: '"Clash Display", sans-serif',
              fontWeight: 400
            }}
          >
            {activeProject.description}
          </p>
        </motion.div>

        {/* Compact action buttons */}
        <div className="flex gap-3 mb-4">
          <a
            href={activeProject.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-decoration-none font-medium transition-all duration-200 font-clash bg-gray-900 text-white hover:bg-green-500"
            style={{
              fontFamily: '"Clash Display", sans-serif',
              fontWeight: 500
            }}
          >
            <CodeBracketIcon className="w-4 h-4" />
            <span className="text-sm">Code</span>
          </a>
          {activeProject.liveUrl && (
            <a
              href={activeProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-decoration-none font-medium transition-all duration-200 font-clash bg-green-500 text-white hover:bg-green-700"
              style={{
                fontFamily: '"Clash Display", sans-serif',
                fontWeight: 500
              }}
            >
              <GlobeAltIcon className="w-4 h-4" />
              <span className="text-sm">Voir le site</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}; 