import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer 
      id="contact" 
      className="min-h-screen flex items-center bg-primary text-white py-20"
      aria-labelledby="contact-heading"
      role="contentinfo"
    >
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-clash mb-16"
            style={{
              fontFamily: '"Clash Display", sans-serif',
              fontWeight: 600
            }}
          >
            GREAT THINGS CAN HAPPEN
            <br />
            WITH A SIMPLE
            <br className="block sm:hidden" />
            « HELLO »
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-center"
            aria-label="Contact information"
          >
            <p className="text-lg md:text-xl font-clash"
              style={{
                fontFamily: '"Clash Display", sans-serif',
                fontWeight: 400
              }}
            >
              <a 
                href="mailto:raph.frem@gmail.com" 
                className="inline-block transition-all duration-300 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-2"
                aria-label="Send email to raph.frem@gmail.com"
              >
                hello@raphaelfremont.com
              </a>
            </p>
            <p className="text-lg md:text-xl font-clash"
              style={{
                fontFamily: '"Clash Display", sans-serif',
                fontWeight: 400
              }}
            >
              <a 
                href="tel:+33630310172" 
                className="inline-block transition-all duration-300 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-2"
                aria-label="Call +33 6 30 31 01 72"
              >
                +33 6 30 31 01 72
              </a>
            </p>
            <a
              href="https://www.linkedin.com/in/raphael-fremont-63a91a1b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-lg md:text-xl font-clash transition-all duration-300 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-2"
              style={{
                fontFamily: '"Clash Display", sans-serif',
                fontWeight: 400
              }}
              aria-label="Visit LinkedIn profile, opens in a new tab"
            >
              LINKEDIN <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </a>
            <p 
              className="text-lg md:text-xl mt-8 font-clash"
              style={{
                fontFamily: '"Clash Display", sans-serif',
                fontWeight: 400
              }}
              aria-label="Location"
            >
              Paris, France
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}; 