import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Version number */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-3 md:top-5 left-3 md:left-5 text-xs md:text-sm font-mono"
      >
        V-1.0.0
      </motion.div>

      {/* Contact info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-3 md:top-5 right-3 md:right-5 text-right"
      >
        <div className="text-xs md:text-sm mb-0.5 md:mb-1">@RAPHAELFREMONT</div>
        <div className="text-xs md:text-sm">HELLO@RAPHAELFREMONT.COM</div>
      </motion.div>

      <div className="container min-h-screen flex items-center py-16 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* Right side content (now on the left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              FRONTEND DEV,
              <br />
              CONSTANT LEARNER
              <br />
              INDEPENDENT FREELANCER
            </h1>
          </motion.div>

          {/* Left side content (now on the right) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs md:text-sm">↳</span>
                <span className="text-xs md:text-sm">UXUI DESIGN</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs md:text-sm">↳</span>
                <span className="text-xs md:text-sm">WEB DEVELOPMENT</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs md:text-sm">↳</span>
                <span className="text-xs md:text-sm">INTERACTION</span>
              </div>
              <div className="flex items-center space-x-2 mt-4">
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
                <span className="text-xs md:text-sm">Open to work</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 