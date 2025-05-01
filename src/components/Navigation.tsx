import { motion } from 'framer-motion';

export const Navigation = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-2 sm:bottom-4 md:bottom-8 left-0 right-0 flex justify-center z-40"
      aria-label="Site navigation"
      role="navigation"
    >
      <div className="bg-white/80 backdrop-blur-md rounded-full shadow-lg px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 border border-black">
        <ul className="flex space-x-2 sm:space-x-4 md:space-x-8 text-xs sm:text-sm md:text-base" role="menubar">
          <li role="none">
            <a 
              href="#home" 
              className="text-primary hover:text-secondary transition-colors px-1.5 sm:px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary rounded"
              role="menuitem"
              aria-current="page"
            >
              RAPHAEL F.
            </a>
          </li>
          <li role="none">
            <a 
              href="#projects" 
              className="text-primary hover:text-secondary transition-colors px-1.5 sm:px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary rounded"
              role="menuitem"
            >
              PROJECTS
            </a>
          </li>
          <li role="none">
            <a 
              href="#contact" 
              className="text-primary hover:text-secondary transition-colors px-1.5 sm:px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary rounded"
              role="menuitem"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}; 