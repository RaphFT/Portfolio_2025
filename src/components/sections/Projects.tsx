import { ProjectsHeader } from '../projects/ProjectsHeader';
import { ProjectsCarousel } from '../projects/ProjectsCarousel';

export const Projects = () => {
  return (
    <section 
      id="projects" 
      className="min-h-screen w-full bg-white flex items-start justify-center py-8 pt-20"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 lg:gap-6">
          <ProjectsHeader />
          <ProjectsCarousel />
        </div>
      </div>
    </section>
  );
}; 