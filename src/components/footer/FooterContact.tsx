/**
 * @fileoverview Section contact du footer
 * @description Composant affichant les liens de contact avec
 * animation d'apparition et accessibilité optimisée
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { motion } from 'framer-motion';
import { ContactLink } from './ContactLink';
import { footerData } from './footerData';

/**
 * Composant section contact du footer
 * @description Affiche tous les liens de contact avec :
 * - Animation d'apparition fluide
 * - Layout centré avec espacement adaptatif
 * - Génération dynamique des liens de contact
 * - Accessibilité avec aria-label
 * - Données récupérées depuis footerData
 * - Design responsive
 * 
 * @returns {JSX.Element} Section contact avec liens
 * 
 * @example
 * <FooterContact />
 */
export const FooterContact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center space-y-4 sm:space-y-6 lg:space-y-8 text-center"
      aria-label="Contact information"
    >
      {/* Génération dynamique des liens de contact */}
      {footerData.contacts.map((contact) => (
        <ContactLink key={contact.id} contact={contact} />
      ))}
    </motion.div>
  );
}; 