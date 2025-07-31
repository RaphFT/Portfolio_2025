/**
 * @fileoverview Composant d'affichage circulaire des projets (version desktop)
 * @description Composant interactif affichant les projets dans un carrousel circulaire
 * avec navigation par flèches et animations fluides
 * @author Raphael Fremont
 * @version 1.0.0
 */

"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { 
  CodeBracketIcon, 
  GlobeAltIcon 
} from '@heroicons/react/24/outline';

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
 * Interface pour la configuration des couleurs
 * @interface Colors
 */
interface Colors {
  title?: string;
  meta?: string;
  description?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}

/**
 * Interface pour la configuration des tailles de police
 * @interface FontSizes
 */
interface FontSizes {
  title?: string;
  meta?: string;
  description?: string;
}

/**
 * Interface des props du composant CircularProjects
 * @interface CircularProjectsProps
 */
interface CircularProjectsProps {
  projects: Project[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}

/**
 * Calcule l'espacement entre les projets en fonction de la largeur d'écran
 * @description Optimise l'affichage pour différentes tailles d'écran
 * 
 * @param {number} width - Largeur de l'écran en pixels
 * @returns {number} Espacement calculé en pixels
 * 
 * @example
 * const gap = calculateGap(1200); // Retourne 86
 */
function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  
  // Optimisation mobile
  if (width < 768) {
    return 20; // Espacement réduit pour mobile
  }
  
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

/**
 * Composant d'affichage circulaire des projets
 * @description Affiche les projets dans un carrousel circulaire interactif
 * avec navigation par flèches, animations fluides et design responsive
 * 
 * @param {CircularProjectsProps} props - Props du composant
 * @param {Project[]} props.projects - Array des projets à afficher
 * @param {boolean} [props.autoplay=false] - Démarrage automatique du carrousel
 * @param {Colors} [props.colors] - Configuration des couleurs
 * @param {FontSizes} [props.fontSizes] - Configuration des tailles de police
 * 
 * @returns {JSX.Element} Composant de carrousel circulaire
 * 
 * @example
 * <CircularProjects 
 *   projects={projectsData}
 *   colors={{ title: "#000", meta: "#666" }}
 *   fontSizes={{ title: "28px", description: "16px" }}
 * />
 */
export const CircularProjects = ({
  projects,
  colors = {},
  fontSizes = {},
}: CircularProjectsProps) => {
  
  // Configuration des couleurs avec valeurs par défaut
  const colorTitle = colors.title ?? "#000";
  const colorMeta = colors.meta ?? "#6b7280";
  const colorDescription = colors.description ?? "#4b5563";
  const colorArrowBg = colors.arrowBackground ?? "#141414";
  const colorArrowFg = colors.arrowForeground ?? "#f1f1f7";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#47D649";
  
  // Configuration des tailles de police avec valeurs par défaut
  const fontSizeTitle = fontSizes.title ?? "1.5rem";
  const fontSizeMeta = fontSizes.meta ?? "0.925rem";
  const fontSizeDescription = fontSizes.description ?? "1.125rem";

  // État du composant - Version statique sans autoplay
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  // Références DOM
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Mémoisation des valeurs calculées pour optimiser les performances
  const projectsLength = useMemo(() => projects.length, [projects]);
  const activeProject = useMemo(
    () => projects[activeIndex],
    [activeIndex, projects]
  );

  // Calcul responsive de l'espacement
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // No autoplay - static version only

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line
  }, [activeIndex, projectsLength]);

  // Navigation handlers - static version
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projectsLength);
  }, [projectsLength]);
  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projectsLength) % projectsLength);
  }, [projectsLength]);

  // Compute transforms for each image (always show 3: left, center, right)
  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + projectsLength) % projectsLength === index;
    const isRight = (activeIndex + 1) % projectsLength === index;
    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    // Hide all other images
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  // Static content - no animations

  return (
    <div className="p-8 w-full max-w-4xl">
      <div className="grid gap-20 md:grid-cols-2">
        {/* Images */}
        <div className="relative w-full h-96 perspective-1000" ref={imageContainerRef}>
          {projects.map((project, index) => (
            <div
              key={project.src}
              className="overflow-hidden absolute w-full h-full rounded-2xl shadow-2xl"
              data-index={index}
              style={getImageStyle(index)}
            >
              <img
                src={project.src}
                alt={project.title}
                className="object-cover w-full h-full"
              />
              {/* Overlay with project info */}
              <div className="flex absolute inset-0 items-end p-6 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 from-black/70 hover:opacity-100">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 text-xs font-medium text-white rounded-full bg-green-500/90">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Content */}
        <div className="flex flex-col justify-between">
          <div key={activeIndex}>
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
              className="mb-8 font-clash"
              style={{ 
                color: colorMeta, 
                fontSize: fontSizeMeta,
                fontFamily: '"Clash Display", sans-serif',
                fontWeight: 400
              }}
            >
              {activeProject.meta}
            </p>
            
            {/* Static description - no animations */}
            <p
              className="mb-8 leading-relaxed font-clash"
              style={{ 
                color: colorDescription, 
                fontSize: fontSizeDescription,
                fontFamily: '"Clash Display", sans-serif',
                fontWeight: 400
              }}
            >
              {activeProject.description}
            </p>
            
            {/* Action buttons */}
            <div className="flex gap-4 mb-8">
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-decoration-none font-medium transition-all duration-300 font-clash bg-gray-900 text-white hover:bg-green-500 hover:-translate-y-0.5"
                style={{
                  fontFamily: '"Clash Display", sans-serif',
                  fontWeight: 500
                }}
              >
                <CodeBracketIcon className="w-5 h-5" />
                <span>Code</span>
              </a>
              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg text-decoration-none font-medium transition-all duration-300 font-clash bg-green-500 text-white hover:bg-green-700 hover:-translate-y-0.5"
                  style={{
                    fontFamily: '"Clash Display", sans-serif',
                    fontWeight: 500
                  }}
                >
                  <GlobeAltIcon className="w-5 h-5" />
                  <span>Voir le site</span>
                </a>
              )}
            </div>
          </div>
          
                     <div className="flex gap-6 pt-12 md:pt-0">
             <button
               className="flex justify-center items-center w-11 h-11 rounded-full border-none transition-colors duration-300 cursor-pointer"
               onClick={handlePrev}
               style={{
                 backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
               }}
               onMouseEnter={() => setHoverPrev(true)}
               onMouseLeave={() => setHoverPrev(false)}
               aria-label="Previous project"
             >
               <ArrowLeftIcon className="w-7 h-7" style={{ color: colorArrowFg }} />
             </button>
             <button
               className="flex justify-center items-center w-11 h-11 rounded-full border-none transition-colors duration-300 cursor-pointer"
               onClick={handleNext}
               style={{
                 backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
               }}
               onMouseEnter={() => setHoverNext(true)}
               onMouseLeave={() => setHoverNext(false)}
               aria-label="Next project"
             >
               <ArrowRightIcon className="w-7 h-7" style={{ color: colorArrowFg }} />
             </button>
           </div>
        </div>
             </div>
     </div>
  );
};

export default CircularProjects; 