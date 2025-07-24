import { motion } from 'framer-motion';
import { ContactLink } from './ContactLink';
import { footerData } from './footerData';

export const FooterContact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="space-y-6 text-center"
      aria-label="Contact information"
    >
      {footerData.contacts.map((contact) => (
        <ContactLink key={contact.id} contact={contact} />
      ))}
    </motion.div>
  );
}; 