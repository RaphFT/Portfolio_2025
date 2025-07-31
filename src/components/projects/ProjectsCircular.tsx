/**
 * @fileoverview Composant principal de la section projets
 * @description Section complète des projets avec affichage responsive (mobile/desktop)
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { CircularProjects } from './CircularProjects';
import { MobileOptimizedProjects } from './MobileOptimizedProjects';
import { circularProjectsData } from './circularProjectsData';
import { ProjectsHeader } from './ProjectsHeader';

/**
 * Composant principal de la section projets
 * @description Affiche la section projets avec un design responsive :
 * - Version mobile : Composant optimisé pour les petits écrans
 * - Version desktop : Composant circulaire interactif
 * 
 * @returns {JSX.Element} Section complète des projets
 * 
 * @example
 * <ProjectsCircular />
 */
export const ProjectsCircular = () => {
  return (
    <section 
      id="projects" 
      className="min-h-screen sm:min-h-screen py-4 sm:py-8 md:py-20 bg-white pb-8 sm:pb-8"
      role="region"
      aria-label="Section des projets de développement web"
    >
      <div className="container mx-auto px-4">
        {/* En-tête de la section */}
        <ProjectsHeader />

        {/* Version mobile - Optimisée pour les petits écrans */}
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

        {/* Version desktop - Composant circulaire interactif */}
        <div className="hidden md:flex justify-center">
          <CircularProjects
            projects={circularProjectsData}
            autoplay={false}
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