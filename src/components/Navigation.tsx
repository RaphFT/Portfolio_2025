import { motion } from 'framer-motion';

export const Navigation = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-4 md:bottom-8 left-0 right-0 flex justify-center z-40"
    >
      <div className="bg-white/80 backdrop-blur-md rounded-full shadow-lg px-4 md:px-6 py-2 md:py-3 border border-black">
        <ul className="flex space-x-4 md:space-x-8 text-sm md:text-base">
          <li>
            <a href="#home" className="text-primary hover:text-secondary transition-colors">
              RAPHAEL F.
            </a>
          </li>
          <li>
            <a href="#projects" className="text-primary hover:text-secondary transition-colors">
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#contact" className="text-primary hover:text-secondary transition-colors">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}; 