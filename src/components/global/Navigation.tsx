import { motion } from 'framer-motion';
import { NavigationContainer } from '../navigation/NavigationContainer';

export const Navigation = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex fixed right-0 left-0 bottom-2 z-40 justify-center sm:bottom-4 md:bottom-8"
      aria-label="Site navigation"
      role="navigation"
    >
      <NavigationContainer />
    </motion.nav>
  );
}; 