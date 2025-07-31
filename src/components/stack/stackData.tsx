/**
 * @fileoverview Données de la stack technique
 * @description Ce fichier contient toutes les données des technologies
 * utilisées dans la stack technique avec leurs icônes et catégories
 * @author Raphael Fremont
 * @version 1.0.0
 */

/**
 * Interface définissant la structure d'une technologie
 * @interface TechItem
 * @property {string} id - Identifiant unique de la technologie
 * @property {string} name - Nom de la technologie
 * @property {string} description - Description courte de la technologie
 * @property {string} icon - Icône emoji de la technologie
 * @property {'frontend' | 'backend' | 'database' | 'tools'} category - Catégorie de la technologie
 * @property {string} color - Classe CSS pour la couleur de fond
 */
export type TechItem = {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  color: string;
};

/**
 * Données de la stack technique
 * @description Array contenant toutes les technologies de la stack
 * organisées par catégories (MERN Stack, Frontend, Tools)
 * 
 * @type {TechItem[]}
 * 
 * @example
 * {
 *   id: 'react',
 *   name: 'React',
 *   description: 'Bibliothèque UI JavaScript',
 *   icon: '⚛️',
 *   category: 'frontend',
 *   color: 'bg-blue-500'
 * }
 */
export const techStackData: TechItem[] = [
  // Stack MERN (MongoDB, Express, React, Node.js)
  {
    id: 'mongodb',
    name: 'MongoDB',
    description: 'Base de données NoSQL',
    icon: '🍃',
    category: 'database',
    color: 'bg-green-500'
  },
  {
    id: 'express',
    name: 'Express.js',
    description: 'Framework backend Node.js',
    icon: '⚡',
    category: 'backend',
    color: 'bg-gray-600'
  },
  {
    id: 'react',
    name: 'React',
    description: 'Bibliothèque UI JavaScript',
    icon: '⚛️',
    category: 'frontend',
    color: 'bg-blue-500'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    description: 'Runtime JavaScript',
    icon: '🟢',
    category: 'backend',
    color: 'bg-green-600'
  },
  
  // Technologies Frontend
  {
    id: 'typescript',
    name: 'TypeScript',
    description: 'JavaScript typé',
    icon: '🔷',
    category: 'frontend',
    color: 'bg-blue-600'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    description: 'Framework React full-stack',
    icon: '⚡',
    category: 'frontend',
    color: 'bg-black'
  },
  {
    id: 'vite',
    name: 'Vite.js',
    description: 'Build tool moderne',
    icon: '💨',
    category: 'frontend',
    color: 'bg-purple-500'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    description: 'Framework CSS utilitaire',
    icon: '🎨',
    category: 'frontend',
    color: 'bg-cyan-500'
  },
  
  // Outils de développement
  {
    id: 'git',
    name: 'Git & GitHub',
    description: 'Contrôle de version',
    icon: '📚',
    category: 'tools',
    color: 'bg-orange-500'
  }
];

/**
 * Fonction pour récupérer les données de la stack technique
 * @description Retourne toutes les technologies de la stack
 * 
 * @returns {TechItem[]} Array de toutes les technologies
 * 
 * @example
 * const techStack = getStackData();
 * console.log(techStack.length); // 9 technologies
 */
export const getStackData = () => techStackData; 