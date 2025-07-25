import { ProjectsHeader } from '../projects/ProjectsHeader';
import { ProjectsCarousel } from '../projects/ProjectsCarousel';

export const Projects = () => {
  return (
    <section 
      id="projects" 
      className="h-screen w-full bg-white flex items-center justify-center"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col justify-center h-full gap-6">
          <ProjectsHeader />
          <ProjectsCarousel />
        </div>
      </div>
    </section>
  );
}; 