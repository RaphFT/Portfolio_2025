import { motion } from 'framer-motion';
import { TypedTerminal } from './TypedTerminal';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Top bar with version and contact */}
      <div className="absolute top-0 left-0 right-0 p-3 md:p-5">
        <div className="relative flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs md:text-sm"
          >
            V-1.0.0
          </motion.div>

          <motion.a
            href="https://linkedin.com/in/raphaelfremont"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute font-mono text-xs transition-colors -translate-x-1/2 left-1/2 md:text-sm hover:text-primary"
          >
            @RAPHAELFREMONT
          </motion.a>

          <motion.a
            href="mailto:hello@raphaelfremont.com"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs transition-colors md:text-sm hover:text-primary"
          >
            HELLO@RAPHAELFREMONT.COM
          </motion.a>
        </div>
      </div>

      {/* Main content */}
      <div className="container min-h-screen px-4 mx-auto">
        <div className="relative flex flex-col items-center min-h-screen">
          {/* Left side content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute -translate-y-1/2 left-8 md:left-16 lg:left-24 top-1/2"
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
                  />
                </div>
                <span className="text-xs md:text-sm">AVAILABLE FOR FREELANCE</span>
              </div>
              
              <div className="max-w-xs text-xs leading-relaxed md:text-sm">
                France-based creative developer, passionate about programming, creative coding, and constantly learning new things.
                <br /><br />
                Always looking for exciting freelance opportunities to craft unique and innovative digital experiences.
              </div>
            </div>
          </motion.div>

          {/* Right side content - Terminal Animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute hidden top-[352px] right-24 md:right-32 lg:right-40 md:block"
          >
            <TypedTerminal />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 1 }}
              className="mt-2 text-xs text-center text-gray-500"
            >
              (Click and type commands)
            </motion.p>
          </motion.div>

          {/* Center content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-4 mx-auto mt-20 text-center md:mt-28"
          >
            <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              FRONTEND DEV
              <br />
              CONSTANT LEARNER
              <br />
              INDEPENDENT FREELANCER
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 