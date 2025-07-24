export type ContactItem = {
  id: string;
  type: 'email' | 'phone' | 'social' | 'location';
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  icon?: string;
};

export const footerData = {
  title: "GREAT THINGS CAN HAPPEN\nWITH A SIMPLE\n« HELLO »",
  contacts: [
    {
      id: 'email',
      type: 'email' as const,
      label: 'Email',
      value: 'hello@raphaelfremont.com',
      href: 'mailto:raph.frem@gmail.com'
    },
    {
      id: 'phone',
      type: 'phone' as const,
      label: 'Téléphone',
      value: '+33 6 30 31 01 72',
      href: 'tel:+33630310172'
    },
    {
      id: 'linkedin',
      type: 'social' as const,
      label: 'LinkedIn',
      value: 'LINKEDIN',
      href: 'https://www.linkedin.com/in/raphael-fremont-63a91a1b3/',
      external: true,
      icon: '↗'
    },
    {
      id: 'location',
      type: 'location' as const,
      label: 'Localisation',
      value: 'Paris, France'
    }
  ]
} as const; 