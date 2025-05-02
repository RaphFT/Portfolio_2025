import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'PC GAMING GUIDE',
    category: 'REACT, JAVASCRIPT, CSS',
    image: '/images/projects/pcgg.webp',
    description: 'A modern web application for a creative agency'
  },
  {
    id: 2,
    title: 'KASA',
    category: 'REACT, NODE.JS, EXPRESS, MONGO.DB',
    image: '/images/projects/kasa.webp',
    description: 'Innovative laboratory management system'
  },
  {
    id: 3,
    title: 'BOOKI',
    category: 'HTML, CSS',
    image: '/images/projects/booki.webp',
    description: 'Interactive design platform for creative professionals'
  },
  {
    id: 4,
    title: 'Nina Carducci',
    category: 'SEO, JAVASCRIPT',
    image: '/images/projects/nc.webp',
    description: 'Interactive design platform for creative professionals'
  },
  {
    id: 5,
    title: 'Sophie Bluel',
    category: 'JAVASCRIPT, HTML, CSS',
    image: '/images/projects/sb.webp',
    description: 'Interactive design platform for creative professionals'
  },
];

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [statusMessage, setStatusMessage] = useState('');
  
  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };
  
  useEffect(() => {
    setStatusMessage(`Showing project ${currentIndex + 1} of ${projects.length}: ${projects[currentIndex].title}`);
  }, [currentIndex]);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!carouselRef.current) return;
      
      if (document.activeElement === carouselRef.current || carouselRef.current.contains(document.activeElement)) {
        if (e.key === 'ArrowLeft') {
          prevProject();
          e.preventDefault();
        } else if (e.key === 'ArrowRight') {
          nextProject();
          e.preventDefault();
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (!carouselRef.current) return;
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };
    
    const handleSwipe = () => {
      const minSwipeDistance = 50;
      
      if (touchStartX - touchEndX > minSwipeDistance) {
        nextProject();
      } else if (touchEndX - touchStartX > minSwipeDistance) {
        prevProject();
      }
    };
    
    const carousel = carouselRef.current;
    carousel.addEventListener('touchstart', handleTouchStart);
    carousel.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      carousel.removeEventListener('touchstart', handleTouchStart);
      carousel.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <section 
      id="projects" 
      className="flex items-center min-h-[60vh] pt-2 pb-6 -mt-8 md:min-h-screen md:py-0 md:h-screen bg-gray-50"
      aria-labelledby="projects-heading"
    >
      <div className="container px-4 md:px-6">
        <motion.h2
          id="projects-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4 text-xl font-bold text-center md:text-2xl lg:text-4xl md:mb-12"
        >
          Recent Projects
        </motion.h2>
        
        <div 
          ref={carouselRef}
          className="relative max-w-4xl mx-auto"
          role="region"
          aria-roledescription="carousel"
          aria-label="Projects showcase"
          tabIndex={0}
        >
          <div className="sr-only" aria-live="polite">
            {statusMessage}
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={prevProject}
              className="p-2 md:p-2.5 text-gray-600 transition-colors border border-gray-300 rounded-full hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Previous project"
              aria-controls="projects-carousel"
            >
              <span aria-hidden="true" className="text-base md:text-lg">←</span>
            </button>

            <div 
              id="projects-carousel"
              className="flex-1"
              aria-live="polite"
              aria-atomic="true"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-2 md:space-y-4"
                  aria-roledescription="slide"
                  aria-label={`Project ${currentIndex + 1} of ${projects.length}`}
                >
                  <div className="space-y-1">
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-base font-medium md:text-xl lg:text-2xl"
                    >
                      {projects[currentIndex].title}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-xs text-gray-600 md:text-sm lg:text-base"
                    >
                      {projects[currentIndex].category}
                    </motion.p>
                  </div>

                  <div className="overflow-hidden bg-white shadow-lg rounded-lg md:rounded-xl">
                    <div className="relative w-full aspect-[4/3] md:aspect-video">
                      <img
                        src={projects[currentIndex].image}
                        alt={`${projects[currentIndex].title} - ${projects[currentIndex].description}`}
                        className="object-cover w-full h-full"
                        loading={currentIndex === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </div>

                  {projects[currentIndex].description && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-xs text-gray-600 md:text-sm lg:text-base"
                    >
                      {projects[currentIndex].description}
                    </motion.p>
                  )}
                  
                  {/* Pagination indicators */}
                  <div className="flex justify-center mt-2 space-x-1.5 md:space-x-2">
                    {projects.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-primary' : 'bg-gray-300'}`}
                        aria-label={`Go to project ${idx + 1}`}
                        aria-current={idx === currentIndex ? 'true' : 'false'}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={nextProject}
              className="p-2 md:p-2.5 text-gray-600 transition-colors border border-gray-300 rounded-full hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Next project"
              aria-controls="projects-carousel"
            >
              <span aria-hidden="true" className="text-base md:text-lg">→</span>
            </button>
          </div>
          
          {/* Swipe instruction for mobile */}
          <p className="mt-1 text-xs text-center text-gray-500 md:hidden">
            Swipe to navigate
          </p>
        </div>
      </div>
    </section>
  );
}; 