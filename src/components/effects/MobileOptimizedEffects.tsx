/**
 * @fileoverview Wrapper d'effets optimisés pour mobile
 * @description Composant wrapper qui gère l'affichage conditionnel
 * des effets visuels selon les capacités de l'appareil
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { useMobileOptimization } from '../hero/hooks/useMobileOptimization';
import { MatrixParticles } from './MatrixParticles';
import { Scanlines } from './Scanlines';

/**
 * Interface des props du composant MobileOptimizedEffects
 * @interface MobileOptimizedEffectsProps
 * @description Configuration des propriétés du wrapper d'effets
 * 
 * @property {React.ReactNode} children - Contenu principal à afficher
 * @property {boolean} showMatrixParticles - Afficher les particules Matrix (défaut: false)
 * @property {boolean} showScanlines - Afficher les scanlines (défaut: false)
 * @property {React.ReactNode} fallback - Contenu de fallback pour mobile
 */
type MobileOptimizedEffectsProps = {
  children: React.ReactNode;
  showMatrixParticles?: boolean;
  showScanlines?: boolean;
  fallback?: React.ReactNode;
};

/**
 * Composant wrapper d'effets optimisés pour mobile
 * @description Gère l'affichage conditionnel des effets visuels avec :
 * - Détection automatique des capacités de l'appareil
 * - Désactivation des effets lourds sur mobile
 * - Affichage de fallback ou contenu principal
 * - Configuration des effets Matrix et scanlines
 * - Optimisations de performance automatiques
 * - Intensité réduite pour les effets sur desktop
 * 
 * @param {MobileOptimizedEffectsProps} props - Propriétés du composant
 * @param {React.ReactNode} props.children - Contenu principal
 * @param {boolean} props.showMatrixParticles - Afficher les particules Matrix
 * @param {boolean} props.showScanlines - Afficher les scanlines
 * @param {React.ReactNode} props.fallback - Contenu de fallback
 * 
 * @returns {JSX.Element} Contenu avec effets conditionnels
 * 
 * @example
 * <MobileOptimizedEffects 
 *   showMatrixParticles={true} 
 *   showScanlines={true}
 *   fallback={<div>Version simplifiée</div>}
 * >
 *   <div>Contenu principal</div>
 * </MobileOptimizedEffects>
 */
export const MobileOptimizedEffects = ({
  children,
  showMatrixParticles = false,
  showScanlines = false,
  fallback
}: MobileOptimizedEffectsProps) => {
  const { disableHeavyEffects } = useMobileOptimization();

  // Sur mobile ou quand les effets lourds sont désactivés, afficher le fallback ou le contenu uniquement
  if (disableHeavyEffects) {
    return (
      <>
        {fallback || children}
      </>
    );
  }

  return (
    <>
      {children}
      {/* Effets avec intensité réduite pour desktop */}
      {showMatrixParticles && <MatrixParticles intensity={0.1} speed={0.5} />}
      {showScanlines && <Scanlines intensity={0.02} speed={0.5} />}
    </>
  );
}; 