import { useRef } from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = [
    "Raphael Fremont",
    "is",
    "a",
    "freelance",
    "web",
    "developer",
    "specializing",
    "in",
    "creating",
    "dynamic",
    "and",
    "engaging",
    "digital",
    "experiences.",
    "With",
    "a",
    "focus",
    "on",
    "understanding",
    "each",
    "brand's",
    "identity,",
    "Raphael",
    "crafts",
    "custom",
    "websites",
    "that",
    "go",
    "beyond",
    "simply",
    "delivering",
    "information.",
    "His",
    "mission",
    "is",
    "to",
    "bring",
    "brands",
    "to",
    "life",
    "and",
    "provide",
    "users",
    "with",
    "memorable,",
    "interactive",
    "experiences."
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
          className={`inline-block font-clash ${!isLastWord ? 'mr-3' : ''} ${isFirstParagraph && i === 0 ? 'block w-full text-center mb-3' : ''}`}
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
            className="block md:hidden px-2 py-10 text-xl sm:text-2xl leading-relaxed"
            aria-label="Developer biography mobile"
          >
            <div className="flex flex-col space-y-8">
              {/* First paragraph */}
              <div className="text-justify">
                {renderWords(0, 14, true)}
              </div>
              
              {/* Second paragraph */}
              <div className="text-justify">
                {renderWords(14, 33)}
              </div>
              
              {/* Third paragraph */}
              <div className="text-justify">
                {renderWords(33, words.length)}
              </div>
            </div>
          </div>
          
          {/* Desktop version */}
          <div 
            className="hidden md:block text-body md:text-md-body lg:text-lg-heading-medium leading-relaxed px-4 md:px-0"
            aria-label="Developer biography"
          >
            <div className="text-justify">
              {renderWords(0, words.length)}
            </div>
          </div>
          
          {/* Add hidden paragraph with full text for screen readers */}
          <div className="sr-only">
            Raphael Fremont is a freelance web developer specializing in creating dynamic and engaging digital experiences. With a focus on understanding each brand's identity, Raphael crafts custom websites that go beyond simply delivering information. His mission is to bring brands to life and provide users with memorable, interactive experiences.
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 