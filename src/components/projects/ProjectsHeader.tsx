/**
 * @fileoverview En-tête de la section projets
 * @description Composant affichant le titre et la description de la section projets
 * @author Raphael Fremont
 * @version 1.0.0
 */

/**
 * Composant d'en-tête de la section projets
 * @description Affiche le titre principal et une description de la section projets
 * Utilise des animations CSS pour une apparition fluide
 * 
 * @returns {JSX.Element} En-tête de la section projets
 * 
 * @example
 * <ProjectsHeader />
 */
export const ProjectsHeader = () => {
  return (
    <div className="mb-8 text-center md:mb-12">
      {/* Titre principal de la section */}
      <h2 
        className="mb-4 text-3xl font-bold text-black md:text-4xl lg:text-5xl animate-fade-in"
        role="heading"
        aria-level={2}
      >
        Mes Projets
      </h2>
      
      {/* Description de la section */}
      <p 
        className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl animate-fade-in-up"
        role="text"
        aria-describedby="projects-description"
      >
        Découvrez une sélection de mes projets récents, 
        allant du développement front-end au back-end, 
        en passant par l'optimisation SEO et la gestion de projet.
      </p>
      
      {/* Description cachée pour les lecteurs d'écran */}
      <div id="projects-description" className="sr-only">
        Section présentant les projets de développement web de Raphael Fremont, 
        incluant des projets front-end, back-end, et d'optimisation web.
      </div>
    </div>
  );
}; 