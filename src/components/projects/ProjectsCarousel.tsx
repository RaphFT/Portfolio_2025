import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectSlide } from './ProjectSlide';
import { projectsCarouselData } from './carouselData';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % projectsCarouselData.length);
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => 
      prev === 0 ? projectsCarouselData.length - 1 : prev - 1
    );
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto">
      {/* Carousel container */}
      <div className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] rounded-lg sm:rounded-xl overflow-hidden bg-gray-900 shadow-xl sm:shadow-2xl">
        {/* Slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <ProjectSlide
              project={projectsCarouselData[currentIndex]}
              isActive={true}
              index={currentIndex}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          type="button"
          onClick={goToPrevious}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 p-1 sm:p-1.5 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-200 text-white backdrop-blur-sm"
          aria-label="Projet précédent"
        >
          <ChevronLeftIcon className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>

        <button
          type="button"
          onClick={goToNext}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 p-1 sm:p-1.5 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-200 text-white backdrop-blur-sm"
          aria-label="Projet suivant"
        >
          <ChevronRightIcon className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>

        {/* Project counter */}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-20 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
          {currentIndex + 1} / {projectsCarouselData.length}
        </div>
      </div>

      {/* Compact indicators */}
      <div className="flex justify-center mt-2 sm:mt-3 lg:mt-4 gap-1.5 sm:gap-2">
        {projectsCarouselData.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToIndex(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-500 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Aller au projet ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
}; 