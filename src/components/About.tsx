import { useRef } from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = [
    "Je",
    "suis",
    "Raphael",
    "Fremont,",
    "développeur",
    "web",
    "freelance",
    "créant",
    "des",
    "sites",
    "web",
    "sur",
    "mesure,",
    "haute",
    "performance",
    "qui",
    "reflètent",
    "la",
    "véritable",
    "identité",
    "de",
    "votre",
    "marque.",
    "Je",
    "combine",
    "du",
    "code",
    "propre,",
    "les",
    "meilleures",
    "pratiques",
    "SEO,",
    "et",
    "un",
    "design",
    "créatif",
    "pour",
    "construire",
    "des",
    "expériences",
    "numériques",
    "qui",
    "engagent",
    "les",
    "utilisateurs",
    "et",
    "génèrent",
    "des",
    "résultats.",
    "Que",
    "vous",
    "lanciez",
    "une",
    "marque",
    "ou",
    "amélioriez",
    "votre",
    "présence",
    "en",
    "ligne,",
    "je",
    "suis",
    "là",
    "pour",
    "vous",
    "aider",
    "à",
    "vous",
    "démarquer."
  ];

  const renderWords = (startIndex: number, endIndex: number, isFirstParagraph = false) => {
    return words.slice(startIndex, endIndex).map((word, i) => {
      const isLastWord = i === endIndex - startIndex - 1;
      const currentIndex = startIndex + i;
      
      return (
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0.4 }}
          whileInView={{ opacity: 1 }}
          transition={{ 
            duration: 0.5,
            delay: currentIndex * 0.12,
            ease: "easeInOut"
          }}
          viewport={{ once: true, margin: "-50px" }}
          className={`inline-block font-clash text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ${!isLastWord ? 'mr-3' : ''} ${isFirstParagraph && i === 0 ? 'block w-full text-center mb-3' : ''}`}
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 400,
            willChange: 'opacity'
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
      className="flex justify-center items-center py-8 min-h-screen md:py-0 md:h-screen"
      id="about"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          {/* Mobile version */}
          <div 
            className="block px-2 py-10 text-lg leading-relaxed md:hidden sm:text-xl"
            aria-label="Developer biography mobile"
          >
            <div className="flex flex-col space-y-4">
              {/* First paragraph */}
              <div className="text-justify">
                <div className="flex flex-wrap justify-center mb-3">
                  {renderWords(0, 1, true)}
                </div>
                <div className="flex flex-wrap">
                  {renderWords(1, 17)}
                </div>
              </div>
              
              {/* Second paragraph */}
              <div className="text-justify">
                <div className="flex flex-wrap">
                  {renderWords(17, 38)}
                </div>
              </div>
              
              {/* Third paragraph */}
              <div className="text-justify">
                <div className="flex flex-wrap">
                  {renderWords(38, words.length)}
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop version */}
          <div 
            className="hidden px-4 text-xl leading-relaxed md:block md:text-2xl lg:text-3xl xl:text-4xl md:px-0"
            aria-label="Developer biography"
          >
            <div className="text-justify">
              {renderWords(0, words.length)}
            </div>
          </div>
          
          {/* Add hidden paragraph with full text for screen readers */}
          <div className="sr-only">
            Je suis Raphael Fremont, développeur web freelance créant des sites web sur mesure, haute performance qui reflètent la véritable identité de votre marque. Je combine du code propre, les meilleures pratiques SEO, et un design créatif pour construire des expériences numériques qui engagent les utilisateurs et génèrent des résultats. Que vous lanciez une marque ou amélioriez votre présence en ligne, je suis là pour vous aider à vous démarquer.
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 