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
    title: "PC GAMING GUIDE",
    meta: "React, JS, CSS",
    description: "Application web moderne pour une agence créative avec interface utilisateur intuitive et design responsive.",
    src: "/images/projects/pcgg.webp",
    githubUrl: "https://github.com/raphFT/pc-gaming-guide",
    liveUrl: "https://pc-gaming-guide.vercel.app",
    tags: ["React", "JavaScript", "CSS"]
  },
  {
    title: "KASA",
    meta: "React, Node.js",
    description: "Système de gestion de laboratoire innovant avec architecture moderne et base de données MongoDB.",
    src: "/images/projects/kasa.webp",
    githubUrl: "https://github.com/raphFT/kasa",
    liveUrl: "https://kasa-app.vercel.app",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "BOOKI",
    meta: "HTML, CSS",
    description: "Plateforme de design interactive pour professionnels créatifs avec interface moderne et animations fluides.",
    src: "/images/projects/booki.webp",
    githubUrl: "https://github.com/raphFT/booki",
    liveUrl: "https://booki-project.vercel.app",
    tags: ["HTML", "CSS", "Design"]
  },
  {
    title: "NINA CARDUCCI",
    meta: "SEO, JS",
    description: "Optimisation SEO complète avec JavaScript avancé pour améliorer la visibilité et les performances web.",
    src: "/images/projects/nc.webp",
    githubUrl: "https://github.com/raphFT/nina-carducci",
    liveUrl: "https://nina-carducci.vercel.app",
    tags: ["SEO", "JavaScript", "Performance"]
  },
  {
    title: "SOPHIE BLUEL",
    meta: "JS, HTML, CSS",
    description: "Application web complète avec JavaScript moderne, HTML sémantique et CSS avancé pour une expérience utilisateur optimale.",
    src: "/images/projects/sb.webp",
    githubUrl: "https://github.com/raphFT/sophie-bluel",
    liveUrl: "https://sophie-bluel.vercel.app",
    tags: ["JavaScript", "HTML", "CSS"]
  }
]; 