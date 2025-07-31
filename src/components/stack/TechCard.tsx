/**
 * @fileoverview Carte de technologie individuelle
 * @description Composant affichant une carte de technologie avec effets
 * de hover sophistiqués et effet glitch
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { TechItem } from './stackData';
import { GlitchText } from '../effects/GlitchText';

/**
 * Interface des props du composant TechCard
 * @interface TechCardProps
 */
type TechCardProps = {
  tech: TechItem;
};

/**
 * Composant carte de technologie
 * @description Affiche une carte de technologie avec :
 * - Effets de hover sophistiqués (desktop uniquement)
 * - Motif de fond Matrix au hover
 * - Bordure animée avec effet lumineux
 * - Icône avec gradient au hover
 * - Catégorie avec badge
 * - Effet glitch sur le nom (desktop uniquement)
 * - Design responsive
 * - Police Clash Display personnalisée
 * 
 * @param {TechCardProps} props - Props du composant
 * @param {TechItem} props.tech - Technologie à afficher
 * 
 * @returns {JSX.Element} Carte de technologie avec effets
 * 
 * @example
 * <TechCard tech={techData} />
 */
export const TechCard = ({ tech }: TechCardProps) => {
  return (
    <div
      className="group relative p-2 sm:p-5 lg:p-6 rounded-xl overflow-hidden transition-all duration-300 border border-gray-100/80 bg-white hover:shadow-[0_8px_32px_rgba(71,214,73,0.15)] hover:-translate-y-0.5 will-change-transform"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
      }}
    >
      {/* Motif de fond Matrix - Desktop only */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(71,214,73,0.1)_1px,transparent_1px)] bg-[length:6px_6px]" />
      </div>
      
      {/* Effet de bordure Matrix - Desktop only */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
        <div className="absolute inset-0 border border-[#47D649] rounded-xl" style={{ boxShadow: '0 0 20px rgba(71,214,73,0.3)' }} />
      </div>

      {/* Contenu principal */}
      <div className="relative flex flex-col space-y-4 sm:space-y-3">
        {/* En-tête avec icône et catégorie */}
        <div className="flex items-center justify-between">
          {/* Icône avec gradient au hover */}
          <div className="w-8 h-8 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center bg-black/5 sm:group-hover:bg-gradient-to-br sm:group-hover:from-[#47D649] sm:group-hover:to-[#2D5A2E] transition-all duration-300">
            <span className="text-lg sm:text-lg sm:group-hover:text-white transition-colors duration-300">{tech.icon}</span>
          </div>
          
          {/* Badge de catégorie */}
          <span className="text-xs font-medium px-1 sm:px-2 py-1 rounded-lg backdrop-blur-sm bg-black/5 text-gray-600 transition-colors duration-300 sm:group-hover:bg-[#47D649] sm:group-hover:text-white">
            {tech.category}
          </span>
        </div>

        {/* Contenu textuel */}
        <div className="space-y-1 sm:space-y-2">
          {/* Nom de la technologie avec effet glitch (desktop uniquement) */}
          <h3 className="font-medium text-gray-900 tracking-tight text-sm sm:text-[15px] font-clash group-hover:text-[#47D649] transition-colors duration-300"
            style={{
              fontFamily: '"Clash Display", sans-serif',
              fontWeight: 500
            }}
          >
            {/* Version mobile sans glitch */}
            <span className="sm:hidden">{tech.name}</span>
            {/* Version desktop avec effet glitch */}
            <GlitchText glitchInterval={15000} intensity={0.3} glitchDuration={150} className="hidden sm:inline">
              {tech.name}
            </GlitchText>
          </h3>
          
          {/* Description de la technologie */}
          <p className="text-xs sm:text-sm text-gray-600 leading-snug font-clash"
            style={{
              fontFamily: '"Clash Display", sans-serif',
              fontWeight: 400
            }}
          >
            {tech.description}
          </p>
        </div>
      </div>
    </div>
  );
}; 