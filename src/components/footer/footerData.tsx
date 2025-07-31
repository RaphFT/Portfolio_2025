/**
 * @fileoverview Données de la section footer
 * @description Ce fichier contient toutes les données de contact
 * et informations du footer avec leurs types et configurations
 * @author Raphael Fremont
 * @version 1.0.0
 */

/**
 * Interface définissant la structure d'un élément de contact
 * @interface ContactItem
 * @property {string} id - Identifiant unique du contact
 * @property {'email' | 'phone' | 'social' | 'location'} type - Type de contact
 * @property {string} label - Libellé du contact
 * @property {string} value - Valeur affichée du contact
 * @property {string} [href] - URL du lien (optionnel)
 * @property {boolean} [external] - Si le lien s'ouvre dans un nouvel onglet
 * @property {string} [icon] - Icône du contact (optionnel)
 */
export type ContactItem = {
  id: string;
  type: 'email' | 'phone' | 'social' | 'location';
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  icon?: string;
};

/**
 * Données complètes du footer
 * @description Contient le titre principal et tous les contacts
 * avec leurs configurations respectives
 * 
 * @type {Object}
 * @property {string} title - Titre principal du footer
 * @property {ContactItem[]} contacts - Array des contacts disponibles
 * 
 * @example
 * {
 *   title: "DE GRANDE CHOSES PEUVENT NAÎTRE AVEC UN SIMPLE « BONJOUR »",
 *   contacts: [
 *     {
 *       id: 'email',
 *       type: 'email',
 *       value: 'hello@raphaelfremont.com',
 *       href: 'mailto:raph.frem@gmail.com'
 *     }
 *   ]
 * }
 */
export const footerData = {
  // Titre principal du footer
  title: "DE GRANDE CHOSES PEUVENT NAÎTRE \n AVEC UN SIMPLE\n« BONJOUR »",
  
  // Contacts disponibles
  contacts: [
    // Contact email
    {
      id: 'email',
      type: 'email' as const,
      label: 'Email',
      value: 'hello@raphaelfremont.com',
      href: 'mailto:raph.frem@gmail.com'
    },
    
    // Contact téléphone
    {
      id: 'phone',
      type: 'phone' as const,
      label: 'Téléphone',
      value: '+33 6 30 31 01 72',
      href: 'tel:+33630310172'
    },
    
    // Contact LinkedIn (externe)
    {
      id: 'linkedin',
      type: 'social' as const,
      label: 'LinkedIn',
      value: 'LINKEDIN',
      href: 'https://www.linkedin.com/in/raphael-fremont-63a91a1b3/',
      external: true,
      icon: '↗'
    },
    
    // Localisation (texte simple)
    {
      id: 'location',
      type: 'location' as const,
      label: 'Localisation',
      value: 'Paris, France'
    }
  ]
} as const; 