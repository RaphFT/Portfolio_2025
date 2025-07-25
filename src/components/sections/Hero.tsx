import { motion } from 'framer-motion';
import '../../styles/fonts.css';
import { TextMarquee } from '../hero/TextMarquee';
import { HeroTopBar } from '../hero/HeroTopBar';
import { HeroTitle } from '../hero/HeroTitle';
import { HeroTerminal } from '../hero/HeroTerminal';
import { HeroSkipLink } from '../hero/HeroSkipLink';

export const Hero = () => {
  return (
    <section 
      id="home" 
      className="overflow-hidden relative h-screen"
      aria-label="Hero section"
    >
      {/* Top bar with version and contact */}
      <HeroTopBar />

      {/* Main content */}
      <div className="container px-4 mx-auto h-full">
        <div className="flex relative flex-col items-center h-full">
          {/* Mobile Layout - Only for mobile */}
          <div className="flex flex-col justify-center items-center -mt-8 w-full h-full md:hidden">
            {/* 1. H1 first - Optimized for mobile LCP */}
            <HeroTitle variant="mobile" />

            {/* TextMarquee for mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-2 w-full"
            >
              <TextMarquee />
            </motion.div>

            {/* 2. Terminal in the middle */}
            <HeroTerminal variant="mobile" />
          </div>

          {/* Desktop Layout - Right side terminal (only visible on md screens and up) */}
          <HeroTerminal variant="desktop" />

          {/* Center content - Only for desktop */}
          <HeroTitle variant="desktop" />

          {/* TextMarquee for desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-2 w-full"
          >
            <TextMarquee />
          </motion.div>
        </div>
      </div>

      {/* Skip to main content link - hidden visually but available for screen readers */}
      <HeroSkipLink />
    </section>
  );
}; 