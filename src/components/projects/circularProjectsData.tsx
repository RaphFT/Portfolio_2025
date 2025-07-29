export interface Project {
  title: string;
  meta: string;
  description: string;
  src: string;
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
}

export const circularProjectsData: Project[] = [
  {
    title: "BOOKI",
    meta: "HTML, CSS",
    description: "Intégration responsive de la page d'accueil d'une agence de voyage à partir de maquettes Figma. Approfondissement des bases HTML/CSS et mise en pratique du responsive design.",
    src: "/images/projects/booki.webp",
    githubUrl: "https://github.com/RaphFT/Booki",
    liveUrl: "https://raphft.github.io/Booki/",
    tags: ["HTML", "CSS", "Responsive Design"]
  },
  {
    title: "Sophie Bluel - Portfolio",
    meta: "JavaScript, API, DOM",
    description: "Développement d'un site dynamique pour une architecte d'intérieur. Gestion du DOM avec JavaScript, appels API, création d'une page d'authentification et upload d'images via une modale.",
    src: "/images/projects/sophiebluel.webp",
    githubUrl: "https://github.com/RaphFT/Portfolio-architecte-sophie-bluel",
    liveUrl: "https://raphft.github.io/Portfolio-architecte-sophie-bluel/",
    tags: ["JavaScript", "API", "DOM"]
  },
  {
    title: "NINA CARDUCCI",
    meta: "SEO, Accessibilité, Performances",
    description: "Optimisation d'un site existant pour améliorer ses performances, son accessibilité et son référencement. Utilisation d'outils comme Lighthouse et Wave, rédaction d'un rapport d'audit complet.",
    src: "/images/projects/ninacarducci.webp",
    githubUrl: "https://github.com/RaphFT/Nina-Carducci-Dev",
    liveUrl: "https://raphft.github.io/Nina-Carducci-Dev/",
    tags: ["SEO", "Accessibilité", "Performance", "Audit"]
  },
  {
    title: "KASA",
    meta: "React, React Router, Vite",
    description: "Développement du front-end d'une application de location immobilière avec React. Utilisation de React Router pour la navigation et affichage dynamique à partir d'un fichier JSON.",
    src: "/images/projects/kasa.webp",
    githubUrl: "https://github.com/RaphFT/Kasa",
    liveUrl: "https://raphft.github.io/Kasa",
    tags: ["React", "React Router", "Vite", "JavaScript"]
  },
  {
    title: "Mon Vieux Grimoire",
    meta: "Node.js, Express, MongoDB",
    description: "Développement du back-end d'un site de notation de livres. Mise en place d'une API sécurisée avec Express, gestion des données avec MongoDB/Mongoose, opérations CRUD et authentification utilisateur.",
    src: "/images/projects/grimoire.webp",
    githubUrl: "https://github.com/RaphFT/MonVieuxGrimoire",
    liveUrl: "https://raphft.github.io/MonVieuxGrimoire/",
    tags: ["Node.js", "Express", "MongoDB", "Mongoose", "API"]
  },
  {
    title: "Menu Maker by QWENTA",
    meta: "Gestion de projet, Rédaction technique",
    description: "Rédaction des spécifications techniques d'un projet web à partir de maquettes et user stories. Utilisation d'outils de gestion (Notion) et réalisation d'une veille technologique pour orienter les choix techniques.",
    src: "/images/projects/menumaker.webp",
    githubUrl: "https://github.com/RaphFT/menu_maker_by_qwenta",
    liveUrl: "",
    tags: ["Gestion de projet", "Spécifications", "Veille technologique"]
  }
]; 