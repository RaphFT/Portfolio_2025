import { BentoGrid } from '../ui/bento-grid';
import { projectsData } from './projectsData';

export const ProjectsGrid = () => {
  return <BentoGrid items={projectsData} />;
}; 