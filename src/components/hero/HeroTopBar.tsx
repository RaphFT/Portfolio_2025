import { motion } from 'framer-motion';

export const HeroTopBar = () => {
  return (
    <div 
      className="absolute top-0 right-0 left-0 p-2 md:p-4"
      role="navigation"
      aria-label="Quick links"
    >
      <div className="flex relative justify-between items-center">
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
          className="hidden absolute left-1/2 z-10 font-mono text-xs rounded transition-colors -translate-x-1/2 cursor-pointer md:text-sm hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary md:block"
          aria-label="Visit LinkedIn profile, opens in a new tab"
        >
          @RAPHAELFREMONT
        </motion.a>

        {/* Email link optimized for mobile LCP */}
        <a
          href="mailto:raph.frem@gmail.com"
          className="z-10 font-mono text-xs rounded transition-colors cursor-pointer md:text-sm hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
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
  );
}; 