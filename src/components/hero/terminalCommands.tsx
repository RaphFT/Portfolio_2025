export type CommandResponse = {
  response: string[];
  isEasterEgg?: boolean;
  action?: string;
};

export type Commands = Record<string, CommandResponse>;

// Initial boot sequence
export const bootSequence = [
  { text: '> Initialisation du système...', delay: 400 },
  { text: '> Chargement des données du portfolio...', delay: 600 },
  { text: '> Prêt ! Tapez "help" pour voir les commandes disponibles', delay: 500 }
];

// Command definitions with responses
export const commands: Commands = {
  'help': {
    response: [
      'Commandes disponibles :',
      '  help     - Afficher ce message d\'aide',
      '  about    - En savoir plus sur moi',
      '  skills   - Voir mes compétences techniques',
      '  projects - Voir mes projets récents',
      '  contact  - Obtenir mes informations de contact',
      '  clear    - Effacer le terminal',
      '',
      'Essayez de trouver les commandes cachées ! 🥚'
    ]
  },
  'about': {
    response: [
      'Raphael Fremont',
      '------------------------',
      'Développeur créatif basé en France passionné par la création',
      'd\'expériences numériques innovantes avec un code propre et efficace.',
      'Toujours en train d\'apprendre de nouvelles technologies et techniques',
      'pour repousser les limites du possible sur le web.'
    ]
  },
  'skills': {
    response: [
      'Langages & Outils :',
      '------------------------',
      '{ JavaScript, TypeScript, React, Vite.js, HTML5, CSS3 }',
      '{ Tailwind, Framer Motion, Node.js, Express, MongoDB }',
      '{ Git, Figma, Design Responsive }',
      '',
      'Toujours en train d\'explorer de nouvelles technologies et d\'étendre ma boîte à outils !'
    ]
  },
  'projects': {
    response: [
      'Projets Récents :',
      '------------------------',
      '1. PC Gaming Guide - React, Javascript, HTML, CSS',
      '2. Kasa - React, Javascript, CSS',
      '3. Nina Carducci - SEO, Javascript',
      '4. Sophie Bluel - Javascript, HTML, CSS',
      '5. Booki - HTML, CSS',
      '',
      'Faites défiler vers le bas pour voir plus de détails sur ces projets !'
    ]
  },
  'contact': {
    response: [
      'Informations de Contact :',
      '------------------------',
      'Email : hello@raphaelfremont.com',
      'LinkedIn : linkedin.com/in/raphaelfremont',
      'GitHub : github.com/raphFT',
      '',
      'Toujours ouvert à discuter de nouvelles opportunités !'
    ]
  },
  'clear': {
    response: []
  },
  // Easter eggs
  'coffee': {
    response: ['Recharge d\'énergie développeur... ☕', 'Prêt pour plus de code !'],
    isEasterEgg: true
  },
  'sudo': {
    response: ['Bien essayé ! Mais vous n\'avez pas besoin de privilèges administrateur ici.'],
    isEasterEgg: true
  },
  'hack': {
    response: [
      'INITIATION DE LA SÉQUENCE DE PIRATAGE...',
      'Contournement des pare-feu...',
      'Accès au mainframe...',
      'Téléchargement des fichiers secrets...',
      '█████████████████████ 100% TERMINÉ',
      'Je plaisante ! Je suis un développeur, pas un hacker. 😉'
    ],
    isEasterEgg: true
  },
  'ls -la': {
    response: [
      'total 42',
      'drwxr-xr-x  1 raphael staff  264 Jan 1 2023 .hobbies',
      'drwxr-xr-x  1 raphael staff  198 Feb 14 2023 .favorite-books',
      '-rw-r--r--  1 raphael staff  354 Mar 21 2023 .coffee-preference',
      'drwxr-xr-x  1 raphael staff  756 Apr 1 2023 .hidden-talents',
      'drwxr-xr-x  1 raphael staff  756 Apr 1 2023 .hidden-talents',
      '-rw-r--r--  1 raphael staff  621 May 5 2023 .travel-wishlist'
    ],
    isEasterEgg: true
  },
  'cat /dev/random': {
    response: [
      '@#$%^&*()!~{}[]|:;<>,.?/c0d3r67$#@!^&*()',
      '1010100101010101010101010101010101010101',
      'ERR0R : TROP DE HASARD ! ABANDON...'
    ],
    isEasterEgg: true
  },
  'matrix': {
    response: ['Réveille-toi, Neo...', 'La Matrice t\'a...', 'Suis le lapin blanc.', 'Toc, toc, Neo.'],
    isEasterEgg: true,
    action: 'MATRIX_ANIMATION'
  },
  'camille': {
    response: [
      'My heart is yours, forever and always. ❤️'
    ],
    isEasterEgg: true
  },
  'fps': {
    response: [
      'Because we all have a dormant chicken inside us, ready to rush B with rollerblades.'
    ],
    isEasterEgg: true
  }
}; 