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

  return (
    <section 
      ref={containerRef} 
      className="min-h-screen py-16 md:py-0 md:h-screen flex items-center justify-center"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 id="about-heading" className="sr-only">About Raphael Fremont</h2>
          
          {/* Mobile version - with same animation as desktop but optimized for vertical space */}
          <div 
            className="block md:hidden px-2 py-10 text-xl sm:text-2xl leading-normal"
            aria-label="Developer biography mobile"
          >
            {/* Layout for better vertical space usage */}
            <div className="flex flex-col space-y-8">
              {/* First paragraph of words */}
              <div className="flex flex-wrap justify-center">
                {words.slice(0, 14).map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0.4 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ 
                      duration: 0.3,
                      delay: i * 0.08, // Slightly faster than desktop for mobile UX
                      ease: "easeInOut"
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    className={`inline-block mx-1 my-0.5 ${i === 0 ? 'block w-full text-center mb-3' : ''}`}
                    aria-hidden={i > 0 ? "true" : "false"}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              
              {/* Second paragraph of words */}
              <div className="flex flex-wrap justify-center">
                {words.slice(14, 33).map((word, i) => (
                  <motion.span
                    key={i + 14}
                    initial={{ opacity: 0.4 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ 
                      duration: 0.3,
                      delay: (i + 14) * 0.08, 
                      ease: "easeInOut"
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="inline-block mx-1 my-0.5"
                    aria-hidden="true"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              
              {/* Third paragraph of words */}
              <div className="flex flex-wrap justify-center">
                {words.slice(33).map((word, i) => (
                  <motion.span
                    key={i + 33}
                    initial={{ opacity: 0.4 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ 
                      duration: 0.3,
                      delay: (i + 33) * 0.08,
                      ease: "easeInOut"
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="inline-block mx-1 my-0.5"
                    aria-hidden="true"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Desktop version with animated text */}
          <div 
            className="hidden md:block text-body md:text-md-body lg:text-lg-heading-medium leading-relaxed px-4 md:px-0"
            aria-label="Developer biography"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0.4 }}
                whileInView={{ opacity: 1 }}
                transition={{ 
                  duration: 0.3,
                  delay: i * 0.12,
                  ease: "easeInOut"
                }}
                viewport={{ once: true }}
                className="inline-block mr-2 md:mr-3"
                aria-hidden={i > 0 ? "true" : "false"} // Only first word is read by screen readers, rest is decorative animation
              >
                {word}
              </motion.span>
            ))}
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