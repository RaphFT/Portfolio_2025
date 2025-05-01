import { motion } from 'framer-motion';

export const About2 = () => {
  const text = "Once\na Designer,\nThen\na Developer";
  const words = text.split('\n');

  return (
    <section 
      className="flex items-center justify-center min-h-[90vh] md:min-h-screen py-12 md:py-16 bg-gray-50"
      id="journey"
      aria-labelledby="journey-heading"
    >
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Desktop animation version */}
          <h2 
            id="journey-heading" 
            className="hidden mb-8 text-5xl text-center md:block sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl md:mb-16"
            aria-label="Once a Designer, Then a Developer"
          >
            {words.map((word, wordIndex) => (
              <div 
                key={wordIndex} 
                className={`block ${
                  wordIndex === 3 
                    ? 'font-["Press_Start_2P"] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wider' 
                    : ''
                }`}
                aria-hidden="true"
              >
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.1,
                      delay: (wordIndex * 0.5) + (charIndex * 0.05),
                      ease: "easeInOut"
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            ))}
          </h2>
          
          {/* Mobile animation version with larger text - same animation as desktop */}
          <h2 
            className="block mb-6 text-5xl text-center md:hidden sm:text-6xl"
            aria-label="Once a Designer, Then a Developer"
          >
            {words.map((word, wordIndex) => (
              <div 
                key={wordIndex} 
                className={`block mb-2 ${
                  wordIndex === 3 
                    ? 'font-["Press_Start_2P"] text-3xl sm:text-4xl tracking-wider mt-3' 
                    : ''
                }`}
                aria-hidden="true"
              >
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.1,
                      delay: (wordIndex * 0.4) + (charIndex * 0.04), // Slightly faster for mobile
                      ease: "easeInOut"
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            ))}
          </h2>
          
          <p 
            className="max-w-xs mx-auto text-base text-center paragraph sm:text-lg md:text-base sm:max-w-sm md:max-w-3xl"
            tabIndex={0}
          >
            Designing with an understanding of development by designers. Developing with an
            understanding of design by developers allows for a more holistic and multidimensional
            approach to a project, unlocking diverse perspectives and solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}; 