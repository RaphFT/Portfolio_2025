import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';

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
        className="absolute top-0 left-0 right-0 p-3 md:p-5"
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
          {/* Left side content - Hidden on small screens, visible from medium screens */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute hidden -translate-y-1/2 md:block left-8 md:left-16 lg:left-24 top-1/2"
            aria-label="Profile description"
          >
            <div className="space-y-4">
              <div className="flex items-center mb-4 space-x-2">
                <div className="relative w-1.5 md:w-2 h-1.5 md:h-2">
                  <motion.span
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-green-500 rounded-full"
                    aria-hidden="true"
                  />
                </div>
                <span className="text-xs md:text-sm">AVAILABLE FOR FREELANCE</span>
              </div>
              
              <div 
                className="max-w-xs text-xs leading-relaxed md:text-sm"
                tabIndex={0}
              >
                France-based creative developer, passionate about programming, creative coding, and constantly learning new things.
                <br /><br />
                Always looking for exciting freelance opportunities to craft unique and innovative digital experiences.
              </div>
            </div>
          </motion.div>

          {/* Mobile Layout - Only for mobile */}
          <div className="flex flex-col items-center justify-center w-full min-h-screen md:hidden">
            {/* 1. H1 first - Optimized for mobile LCP */}
            <div
              className="max-w-4xl px-4 mx-auto mt-8 text-center mb-14"
            >
              <h1 
                className="text-2xl font-bold leading-tight"
                aria-label="Developer profile headline"
                tabIndex={0}
                style={{ 
                  willChange: 'transform',
                  opacity: 1
                }}
              >
                FRONTEND DEV
                <br />
                CONSTANT LEARNER
                <br />
                INDEPENDENT FREELANCER
              </h1>
            </div>

            {/* 2. Terminal in the middle */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full mb-12"
              aria-label="Interactive terminal section"
            >
              <Suspense fallback={
                <div 
                  className="flex items-center justify-center w-full max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-xl h-52"
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

            {/* 3. Available indicator and description last */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 text-center"
              aria-label="Mobile profile description"
            >
              <div className="flex items-center justify-center mb-4 space-x-2">
                <div className="relative w-2 h-2">
                  <motion.span
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-green-500 rounded-full"
                    aria-hidden="true"
                  />
                </div>
                <span className="text-xs">AVAILABLE FOR FREELANCE</span>
              </div>
              
              <p className="max-w-xs px-6 mx-auto text-xs leading-relaxed">
                France-based creative developer, passionate about programming, creative coding, and constantly learning new things.
              </p>
            </motion.div>
          </div>

          {/* Desktop Layout - Right side terminal (only visible on md screens and up) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block md:absolute md:right-24 md:top-[352px] md:w-auto lg:right-40 md:right-32"
            aria-label="Interactive terminal section"
          >
            <Suspense fallback={
              <div 
                className="flex items-center justify-center w-full h-48 max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-xl md:h-64"
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

          {/* Center content - Only for desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden max-w-4xl px-4 mx-auto mt-4 text-center md:block md:mt-28"
          >
            <h1 
              className="text-3xl font-bold leading-tight lg:text-5xl"
              aria-label="Developer profile headline"
              tabIndex={0}
            >
              FRONTEND DEV
              <br />
              CONSTANT LEARNER
              <br />
              INDEPENDENT FREELANCER
            </h1>
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