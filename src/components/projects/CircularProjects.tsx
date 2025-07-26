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
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  meta: string;
  description: string;
  src: string;
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
}

interface Colors {
  title?: string;
  meta?: string;
  description?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}

interface FontSizes {
  title?: string;
  meta?: string;
  description?: string;
}

interface CircularProjectsProps {
  projects: Project[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularProjects = ({
  projects,
  autoplay = true,
  colors = {},
  fontSizes = {},
}: CircularProjectsProps) => {
  // Color & font config
  const colorTitle = colors.title ?? "#000";
  const colorMeta = colors.meta ?? "#6b7280";
  const colorDescription = colors.description ?? "#4b5563";
  const colorArrowBg = colors.arrowBackground ?? "#141414";
  const colorArrowFg = colors.arrowForeground ?? "#f1f1f7";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#47D649";
  const fontSizeTitle = fontSizes.title ?? "1.5rem";
  const fontSizeMeta = fontSizes.meta ?? "0.925rem";
  const fontSizeDescription = fontSizes.description ?? "1.125rem";

  // State
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const projectsLength = useMemo(() => projects.length, [projects]);
  const activeProject = useMemo(
    () => projects[activeIndex],
    [activeIndex, projects]
  );

  // Responsive gap calculation
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

  // Autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % projectsLength);
      }, 5000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, projectsLength]);

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

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projectsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [projectsLength]);
  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projectsLength) % projectsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
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

  // Framer Motion variants for content
  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

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
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
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
                             <motion.p
                 className="mb-8 leading-relaxed font-clash"
                 style={{ 
                   color: colorDescription, 
                   fontSize: fontSizeDescription,
                   fontFamily: '"Clash Display", sans-serif',
                   fontWeight: 400
                 }}
               >
                {activeProject.description.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.22,
                      ease: "easeInOut",
                      delay: 0.025 * i,
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
              
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
            </motion.div>
          </AnimatePresence>
          
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