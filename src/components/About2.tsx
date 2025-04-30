import { motion } from 'framer-motion';

export const About2 = () => {
  const text = "Once\na Designer,\nThen\na Developer";
  const words = text.split('\n');

  return (
    <section className="min-h-screen h-screen flex items-center justify-center bg-gray-50">
      <div className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-7xl md:text-8xl lg:text-9xl text-center mb-16">
            {words.map((word, wordIndex) => (
              <div 
                key={wordIndex} 
                className={`block ${
                  wordIndex === 3 
                    ? 'font-["Press_Start_2P"] text-5xl md:text-6xl lg:text-7xl tracking-wider' 
                    : ''
                }`}
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
          <p className="paragraph text-center max-w-3xl mx-auto">
            Designing with an understanding of development by designers. Developing with an
            understanding of design by developers allows for a more holistic and multidimensional
            approach to a project, unlocking diverse perspectives and solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}; 