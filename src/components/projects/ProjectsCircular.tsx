
import { CircularProjects } from './CircularProjects';
import { circularProjectsData } from './circularProjectsData';
import { ProjectsHeader } from './ProjectsHeader';

export const ProjectsCircular = () => {
  return (
    <section className="py-8 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ProjectsHeader />

        {/* Circular Projects Component */}
        <div className="flex justify-center">
          <CircularProjects
            projects={circularProjectsData}
            autoplay={true}
            colors={{
              title: "#000000",
              meta: "#6b7280",
              description: "#4b5563",
              arrowBackground: "#141414",
              arrowForeground: "#f1f1f7",
              arrowHoverBackground: "#47D649",
            }}
            fontSizes={{
              title: "28px",
              meta: "20px",
              description: "20px",
            }}
          />
        </div>
      </div>
    </section>
  );
}; 