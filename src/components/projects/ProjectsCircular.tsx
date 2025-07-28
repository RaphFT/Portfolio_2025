
import { CircularProjects } from './CircularProjects';
import { MobileOptimizedProjects } from './MobileOptimizedProjects';
import { circularProjectsData } from './circularProjectsData';
import { ProjectsHeader } from './ProjectsHeader';

export const ProjectsCircular = () => {
  return (
    <section className="py-4 sm:py-8 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ProjectsHeader />

        {/* Mobile Optimized Projects */}
        <div className="md:hidden">
          <MobileOptimizedProjects
            projects={circularProjectsData}
            colors={{
              title: "#000000",
              meta: "#6b7280",
              description: "#4b5563",
              arrowBackground: "#141414",
              arrowForeground: "#f1f1f7",
              arrowHoverBackground: "#47D649",
            }}
            fontSizes={{
              title: "1.25rem",
              meta: "0.875rem",
              description: "1rem",
            }}
          />
        </div>

        {/* Desktop Circular Projects Component */}
        <div className="hidden md:flex justify-center">
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