import { useRef } from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="h-screen flex items-center">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-body md:text-md-body lg:text-lg-heading-medium leading-relaxed px-4 md:px-0">
            {[
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
            ].map((word, i) => (
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
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 