export type TechItem = {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  color: string;
};

export const techStackData: TechItem[] = [
  // MERN Stack
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
  // Frontend
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
  // Tools
  {
    id: 'git',
    name: 'Git & GitHub',
    description: 'Contrôle de version',
    icon: '📚',
    category: 'tools',
    color: 'bg-orange-500'
  }
];

export const getStackData = () => techStackData; 