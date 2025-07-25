import { memo } from 'react';
import { ProjectItem } from './carouselData';

type ProjectSlideProps = {
  project: ProjectItem;
  isActive: boolean;
  index: number;
};

export const ProjectSlide = memo(({ project }: ProjectSlideProps) => {
  const {
    title,
    description,
    technologies,
    image,
    githubUrl,
    liveUrl,
    status
  } = project;

  const statusColors = {
    live: 'bg-green-500',
    deployed: 'bg-blue-500',
    completed: 'bg-purple-500',
    optimized: 'bg-orange-500',
    functional: 'bg-gray-500'
  };

  const statusLabels = {
    live: 'Live',
    deployed: 'Déployé',
    completed: 'Terminé',
    optimized: 'Optimisé',
    functional: 'Fonctionnel'
  };

  return (
    <div
      className="relative w-full h-full"
      role="button"
      tabIndex={0}
      aria-label={`Projet ${title} - ${description}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={`Capture d'écran du projet ${title}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
        {/* Status badge */}
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]} text-white`}>
            {statusLabels[status]}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2 font-clash">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-200 mb-3 line-clamp-2">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-200 rounded-lg px-3 py-2 text-center text-xs font-medium"
            aria-label={`Voir le code source de ${title} sur GitHub`}
          >
            Code Source
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white hover:bg-gray-100 transition-colors duration-200 rounded-lg px-3 py-2 text-center text-xs font-medium text-black"
            aria-label={`Voir le projet ${title} en ligne`}
          >
            Voir le projet
          </a>
        </div>
      </div>
    </div>
  );
});

ProjectSlide.displayName = 'ProjectSlide'; 