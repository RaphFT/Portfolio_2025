import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'BIGPICTURE COMPANY',
    category: 'UXUI, WEB DEVELOPMENT',
    image: '/project1.jpg',
  },
  {
    id: 2,
    title: 'RAYRAYLAB',
    category: 'WEB DEVELOPMENT',
    image: '/project2.jpg',
  },
  {
    id: 3,
    title: 'MUSINA PROJECT',
    category: 'UXUI, INTERACTION',
    image: '/project3.jpg',
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
    <section id="projects" className="min-h-screen h-screen flex items-center bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-12"
        >
          Recent Projects
        </motion.h2>
        
        <div className="relative max-w-4xl mx-auto px-4 md:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="aspect-video bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{projects[currentIndex].title}</h3>
                <p className="text-secondary text-sm md:text-base">{projects[currentIndex].category}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-3 md:mt-6 space-x-4">
            <button
              onClick={prevProject}
              className="p-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              ←
            </button>
            <button
              onClick={nextProject}
              className="p-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}; 