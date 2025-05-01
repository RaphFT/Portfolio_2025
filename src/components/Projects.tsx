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
    title: 'BIGPICTURE COMPANY',
    category: 'UXUI, WEB DEVELOPMENT',
    image: '/images/projects/work1.png',
    description: 'A modern web application for a creative agency'
  },
  {
    id: 2,
    title: 'RAYRAYLAB',
    category: 'WEB DEVELOPMENT',
    image: '/images/projects/rayraylab.jpg',
    description: 'Innovative laboratory management system'
  },
  {
    id: 3,
    title: 'MUSINA PROJECT',
    category: 'UXUI, INTERACTION',
    image: '/images/projects/musina.jpg',
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
  
  // Update the status message for screen readers
  useEffect(() => {
    setStatusMessage(`Showing project ${currentIndex + 1} of ${projects.length}: ${projects[currentIndex].title}`);
  }, [currentIndex]);
  
  // Handle keyboard navigation
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

  // Handle swipe gestures for mobile
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
      // Minimum swipe distance (in px) to trigger navigation
      const minSwipeDistance = 50;
      
      if (touchStartX - touchEndX > minSwipeDistance) {
        // Swiped left, go to next project
        nextProject();
      } else if (touchEndX - touchStartX > minSwipeDistance) {
        // Swiped right, go to previous project
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
      className="flex items-center min-h-screen py-16 md:py-0 md:h-screen bg-gray-50"
      aria-labelledby="projects-heading"
    >
      <div className="container px-4 md:px-6">
        <motion.h2
          id="projects-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6 text-xl font-bold text-center md:text-2xl lg:text-4xl md:mb-12"
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
          {/* Visually hidden live region for screen readers */}
          <div className="sr-only" aria-live="polite">
            {statusMessage}
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={prevProject}
              className="p-1.5 md:p-2 text-gray-600 transition-colors border border-gray-300 rounded-full hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Previous project"
              aria-controls="projects-carousel"
            >
              <span aria-hidden="true" className="text-sm md:text-base">←</span>
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
                  className="space-y-3 md:space-y-4"
                  aria-roledescription="slide"
                  aria-label={`Project ${currentIndex + 1} of ${projects.length}`}
                >
                  <div className="space-y-1 md:space-y-2">
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-lg font-medium md:text-xl lg:text-2xl"
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

                  <div className="overflow-hidden bg-white shadow-lg rounded-xl md:rounded-2xl">
                    <div className="relative w-full aspect-video">
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
                  
                  {/* Pagination indicators for mobile */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {projects.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full ${idx === currentIndex ? 'bg-primary' : 'bg-gray-300'}`}
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
              className="p-1.5 md:p-2 text-gray-600 transition-colors border border-gray-300 rounded-full hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Next project"
              aria-controls="projects-carousel"
            >
              <span aria-hidden="true" className="text-sm md:text-base">→</span>
            </button>
          </div>
          
          {/* Swipe instruction for mobile */}
          <p className="mt-2 text-xs text-center text-gray-500 md:hidden">
            Swipe left or right to navigate
          </p>
        </div>
      </div>
    </section>
  );
}; 