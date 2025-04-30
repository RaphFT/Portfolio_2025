import { useState } from 'react';
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

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="flex items-center h-screen min-h-screen bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6 text-2xl font-bold text-center md:text-3xl lg:text-4xl md:mb-12"
        >
          Recent Projects
        </motion.h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <button
              onClick={prevProject}
              className="p-2 text-gray-600 transition-colors border border-gray-300 rounded-full hover:border-primary hover:text-primary"
              aria-label="Previous project"
            >
              ←
            </button>

            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl font-medium md:text-2xl"
                    >
                      {projects[currentIndex].title}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-sm text-gray-600 md:text-base"
                    >
                      {projects[currentIndex].category}
                    </motion.p>
                  </div>

                  <div className="overflow-hidden bg-white shadow-lg rounded-xl md:rounded-2xl">
                    <div className="relative w-full aspect-video">
                      <img
                        src={projects[currentIndex].image}
                        alt={projects[currentIndex].title}
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
                      className="text-sm text-gray-600 md:text-base"
                    >
                      {projects[currentIndex].description}
                    </motion.p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={nextProject}
              className="p-2 text-gray-600 transition-colors border border-gray-300 rounded-full hover:border-primary hover:text-primary"
              aria-label="Next project"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}; 