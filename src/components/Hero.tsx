import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';
import '../styles/fonts.css';
import { TextMarquee } from './TextMarquee';

// Lazy load the terminal component
const TypedTerminal = lazy(() => import('./TypedTerminal').then(module => ({ default: module.TypedTerminal })));

export const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen overflow-hidden"
      aria-label="Hero section"
    >
      {/* Top bar with version and contact */}
      <div 
        className="absolute top-0 left-0 right-0 p-2 md:p-4"
        role="navigation"
        aria-label="Quick links"
      >
        <div className="relative flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs md:text-sm"
            aria-label="Version number"
          >
            V-1.0.0
          </motion.div>

          <motion.a
            href="https://www.linkedin.com/in/raphael-fremont-63a91a1b3/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute z-10 hidden font-mono text-xs transition-colors -translate-x-1/2 rounded cursor-pointer left-1/2 md:text-sm hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary md:block"
            aria-label="Visit LinkedIn profile, opens in a new tab"
          >
            @RAPHAELFREMONT
          </motion.a>

          {/* Email link optimized for mobile LCP */}
          <a
            href="mailto:raph.frem@gmail.com"
            className="z-10 font-mono text-xs transition-colors rounded cursor-pointer md:text-sm hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Send email to raph.frem@gmail.com"
            style={{ 
              willChange: 'opacity',
              opacity: 1 
            }}
          >
            HELLO@RAPHAELFREMONT.COM
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className="container min-h-screen px-4 mx-auto">
        <div className="relative flex flex-col items-center min-h-screen">
          {/* Mobile Layout - Only for mobile */}
          <div className="flex flex-col items-center justify-center w-full min-h-screen md:hidden -mt-8">
            {/* 1. H1 first - Optimized for mobile LCP */}
            <div
              className="w-full px-4 mx-auto mt-2 text-center"
            >
              <h1 
                className="text-xl sm:text-3xl font-bold leading-tight font-clash"
                aria-label="Developer profile headline"
                tabIndex={0}
                style={{ 
                  willChange: 'transform',
                  opacity: 1,
                  fontFamily: '"Clash Display", sans-serif',
                  fontWeight: 600
                }}
              >
                <span className="block">FRONTEND DEV</span>
                <span className="block mt-1">CONSTANT LEARNER</span>
                <span className="block mt-1 whitespace-nowrap">INDEPENDENT FREELANCER</span>
              </h1>
            </div>

            {/* TextMarquee for mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full mt-2"
            >
              <TextMarquee />
            </motion.div>

            {/* 2. Terminal in the middle */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full mb-4"
              aria-label="Interactive terminal section"
            >
              <Suspense fallback={
                <div 
                  className="flex items-center justify-center w-full h-40 mx-auto bg-white border border-gray-200 rounded-lg shadow-xl sm:h-48 md:h-64"
                  aria-live="polite"
                >
                  Loading terminal...
                </div>
              }>
                <TypedTerminal />
              </Suspense>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
                className="mt-2 text-xs text-center text-gray-500"
                aria-live="polite"
              >
                (Click and type commands)
              </motion.p>
            </motion.div>
          </div>

          {/* Desktop Layout - Right side terminal (only visible on md screens and up) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:min-h-600:block md:absolute md:left-[26%] md:top-[31%] md:-translate-x-1/2 md:-translate-y-1/2 md:w-[600px] lg:top-[36%] xl:top-[41%] 2xl:top-[36%] md:z-10"
            aria-label="Interactive terminal section"
          >
            <div className="w-full">
              <Suspense fallback={
                <div 
                  className="flex items-center justify-center w-full h-48 bg-white border border-gray-200 rounded-lg shadow-xl sm:h-56 md:h-64"
                  aria-live="polite"
                >
                  Loading terminal...
                </div>
              }>
                <TypedTerminal />
              </Suspense>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 1 }}
              className="mt-2 text-xs text-center text-gray-500"
              aria-live="polite"
            >
              (Click and type commands)
            </motion.p>
          </motion.div>

          {/* Center content - Only for desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden max-w-4xl px-4 mx-auto mt-4 text-center md:block md:mt-20 lg:mt-24 xl:mt-28"
          >
            <h1 
              className="text-3xl font-bold leading-tight lg:text-5xl font-clash"
              aria-label="Developer profile headline"
              tabIndex={0}
              style={{
                fontFamily: '"Clash Display", sans-serif',
                fontWeight: 600
              }}
            >
              FRONTEND DEV
              <br />
              CONSTANT LEARNER
              <br />
              INDEPENDENT FREELANCER
            </h1>

            {/* TextMarquee for desktop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full mt-2"
            >
              <TextMarquee />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Skip to main content link - hidden visually but available for screen readers */}
      <a 
        href="#projects" 
        className="absolute top-0 left-0 z-50 p-3 text-white transition -translate-y-full focus:translate-y-0 bg-primary focus:outline-none"
        tabIndex={0}
      >
        Skip to main content
      </a>
    </section>
  );
}; 