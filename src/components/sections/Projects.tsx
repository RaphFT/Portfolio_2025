import { ProjectsHeader } from '../projects/ProjectsHeader';
import { ProjectsGrid } from '../projects/ProjectsGrid';

export const Projects = () => {
  return (
    <section 
      id="projects" 
      className="py-20 w-full bg-gray-50 lg:py-40"
      aria-labelledby="projects-heading"
    >
      <div className="container px-4 mx-auto">
        <ProjectsHeader />
        <ProjectsGrid />
      </div>
    </section>
  );
}; 