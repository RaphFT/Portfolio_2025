import { motion } from 'framer-motion';

export const About2 = () => {
  const text = "Design\n led me here.\n I'm\n a Developer.";
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
            className="hidden mb-8 text-4xl text-center md:block sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl md:mb-16"
            aria-label="Once a Designer, Then a Developer"
          >
            {words.map((word, wordIndex) => (
              <div 
                key={wordIndex} 
                className={`block ${
                  wordIndex === 3 
                    ? 'font-["Press_Start_2P"] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wider' 
                    : 'font-clash'
                }`}
                style={{
                  fontFamily: wordIndex === 3 ? '"Press Start 2P", sans-serif' : '"Clash Display", sans-serif',
                  fontWeight: wordIndex === 3 ? 400 : 400
                }}
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
            className="block mb-6 text-4xl text-center md:hidden sm:text-5xl"
            aria-label="Once a Designer, Then a Developer"
          >
            {words.map((word, wordIndex) => (
              <div 
                key={wordIndex} 
                className={`block mb-2 ${
                  wordIndex === 3 
                    ? 'font-["Press_Start_2P"] text-xl sm:text-2xl tracking-wider mt-3' 
                    : 'font-clash'
                }`}
                style={{
                  fontFamily: wordIndex === 3 ? '"Press Start 2P", sans-serif' : '"Clash Display", sans-serif',
                  fontWeight: wordIndex === 3 ? 400 : 400
                }}
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
            className="max-w-xs mx-auto text-base text-center paragraph sm:text-lg md:text-base sm:max-w-sm md:max-w-3xl font-clash"
            style={{
              fontFamily: '"Clash Display", sans-serif',
              fontWeight: 400
            }}
            tabIndex={0}
          >
           Bridging the gap between designers and developers, I bring a dual perspective to every project. Designing with a developer's mindset, and coding with a designer's eye, I craft digital experiences that are both technically sound and visually compelling. This integrated approach leads to smarter, more cohesive solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}; 