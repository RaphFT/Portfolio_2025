import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer id="contact" className="h-screen flex items-center bg-primary text-white">
      <div className="container">
        <div className="text-center">
          <motion.h2
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
          >
            <p className="text-xl">hello@raphaelfremont.com</p>
            <p className="text-xl">+33 6 30 31 01 72</p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xl hover:opacity-80 transition-opacity"
            >
              LINKEDIN ↗
            </a>
            <p className="text-xl mt-4">Paris, France</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}; 