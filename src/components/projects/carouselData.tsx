export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  status: 'live' | 'deployed' | 'completed' | 'optimized' | 'functional';
  featured?: boolean;
};

export const projectsCarouselData: ProjectItem[] = [
  {
    id: 'pc-gaming-guide',
    title: "PC GAMING GUIDE",
    description: "Application web moderne pour une agence créative avec interface utilisateur intuitive et design responsive.",
    technologies: ["React", "JavaScript", "CSS"],
    image: "/images/projects/pcgg.webp",
    githubUrl: "https://github.com/raphFT/pc-gaming-guide",
    liveUrl: "https://raphft.github.io/pc-gaming-guide/",
    status: "live",
    featured: true
  },
  {
    id: 'kasa',
    title: "KASA",
    description: "Système de gestion de laboratoire innovant avec architecture moderne et base de données MongoDB.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/images/projects/kasa.webp",
    githubUrl: "https://github.com/raphFT/kasa",
    liveUrl: "https://raphft.github.io/kasa/",
    status: "deployed"
  },
  {
    id: 'booki',
    title: "BOOKI",
    description: "Plateforme de design interactive pour professionnels créatifs avec interface moderne et animations fluides.",
    technologies: ["HTML", "CSS", "Design"],
    image: "/images/projects/booki.webp",
    githubUrl: "https://github.com/raphFT/booki",
    liveUrl: "https://raphft.github.io/booki/",
    status: "completed"
  },
  {
    id: 'nina-carducci',
    title: "NINA CARDUCCI",
    description: "Optimisation SEO complète avec JavaScript avancé pour améliorer la visibilité et les performances web.",
    technologies: ["SEO", "JavaScript", "Performance"],
    image: "/images/projects/nc.webp",
    githubUrl: "https://github.com/raphFT/nina-carducci",
    liveUrl: "https://raphft.github.io/nina-carducci/",
    status: "optimized",
    featured: true
  },
  {
    id: 'sophie-bluel',
    title: "SOPHIE BLUEL",
    description: "Application web complète avec JavaScript moderne, HTML sémantique et CSS avancé pour une expérience utilisateur optimale.",
    technologies: ["JavaScript", "HTML", "CSS"],
    image: "/images/projects/sb.webp",
    githubUrl: "https://github.com/raphFT/sophie-bluel",
    liveUrl: "https://raphft.github.io/sophie-bluel/",
    status: "functional"
  }
];

export const getProjectById = (id: string): ProjectItem | undefined => {
  return projectsCarouselData.find(project => project.id === id);
};

export const getFeaturedProjects = (): ProjectItem[] => {
  return projectsCarouselData.filter(project => project.featured);
}; 