import { useRef } from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = [
    "I'm",
    "Raphael",
    "Fremont,",
    "a",
    "freelance",
    "web",
    "developer",
    "crafting",
    "custom,",
    "high-performance",
    "websites",
    "that",
    "reflect",
    "your",
    "brand's",
    "true",
    "identity.",
    "I",
    "combine",
    "clean",
    "code,",
    "SEO",
    "best",
    "practices,",
    "and",
    "creative",
    "design",
    "to",
    "build",
    "digital",
    "experiences",
    "that",
    "engage",
    "users",
    "and",
    "drive",
    "results.",
    "Whether",
    "you're",
    "launching",
    "a",
    "brand",
    "or",
    "leveling",
    "up",
    "your",
    "online",
    "presence,",
    "I'm",
    "here",
    "to",
    "help",
    "you",
    "stand",
    "out."
  ];

  const renderWords = (startIndex: number, endIndex: number, isFirstParagraph = false) => {
    return words.slice(startIndex, endIndex).map((word, i) => {
      const isLastWord = i === endIndex - startIndex - 1;
      return (
        <motion.span
          key={startIndex + i}
          initial={{ opacity: 0.4 }}
          whileInView={{ opacity: 1 }}
          transition={{ 
            duration: 0.3,
            delay: (startIndex + i) * 0.08,
            ease: "easeInOut"
          }}
          viewport={{ once: true, margin: "-50px" }}
          className={`inline-block font-clash text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ${!isLastWord ? 'mr-3' : ''} ${isFirstParagraph && i === 0 ? 'block w-full text-center mb-3' : ''}`}
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 400
          }}
        >
          {word}
        </motion.span>
      );
    });
  };

  return (
    <section 
      ref={containerRef} 
      className="min-h-screen py-16 md:py-0 md:h-screen flex items-center justify-center"
      id="about"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Mobile version */}
          <div 
            className="block md:hidden px-2 py-10 text-lg sm:text-xl leading-relaxed"
            aria-label="Developer biography mobile"
          >
            <div className="flex flex-col space-y-8">
              {/* First paragraph */}
              <div className="text-justify">
                {renderWords(0, 17, true)}
              </div>
              
              {/* Second paragraph */}
              <div className="text-justify">
                {renderWords(17, 38)}
              </div>
              
              {/* Third paragraph */}
              <div className="text-justify">
                {renderWords(38, words.length)}
              </div>
            </div>
          </div>
          
          {/* Desktop version */}
          <div 
            className="hidden md:block text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed px-4 md:px-0"
            aria-label="Developer biography"
          >
            <div className="text-justify">
              {renderWords(0, words.length)}
            </div>
          </div>
          
          {/* Add hidden paragraph with full text for screen readers */}
          <div className="sr-only">
            I'm Raphael Fremont, a freelance web developer crafting custom, high-performance websites that reflect your brand's true identity. I combine clean code, SEO best practices, and creative design to build digital experiences that engage users and drive results. Whether you're launching a brand or leveling up your online presence, I'm here to help you stand out.
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 