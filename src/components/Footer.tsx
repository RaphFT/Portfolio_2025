import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer 
      id="contact" 
      className="h-screen flex items-center bg-primary text-white"
      aria-labelledby="contact-heading"
      role="contentinfo"
    >
      <div className="container">
        <div className="text-center">
          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="heading-xl mb-12"
          >
            GREAT THINGS CAN HAPPEN
            <br />
            WITH A SIMPLE « HELLO »
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
            aria-label="Contact information"
          >
            <p className="text-xl">
              <a 
                href="mailto:raph.frem@gmail.com" 
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-2"
                aria-label="Send email to raph.frem@gmail.com"
              >
                hello@raphaelfremont.com
              </a>
            </p>
            <p className="text-xl">
              <a 
                href="tel:+33630310172" 
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-2"
                aria-label="Call +33 6 30 31 01 72"
              >
                +33 6 30 31 01 72
              </a>
            </p>
            <a
              href="https://www.linkedin.com/in/raphael-fremont-63a91a1b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xl hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-2"
              aria-label="Visit LinkedIn profile, opens in a new tab"
            >
              LINKEDIN <span aria-hidden="true">↗</span>
            </a>
            <p className="text-xl mt-4" aria-label="Location">Paris, France</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}; 