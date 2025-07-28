import { useMobileOptimization } from '../hero/hooks/useMobileOptimization';
import { MatrixParticles } from './MatrixParticles';
import { Scanlines } from './Scanlines';

type MobileOptimizedEffectsProps = {
  children: React.ReactNode;
  showMatrixParticles?: boolean;
  showScanlines?: boolean;
  fallback?: React.ReactNode;
};

export const MobileOptimizedEffects = ({
  children,
  showMatrixParticles = false,
  showScanlines = false,
  fallback
}: MobileOptimizedEffectsProps) => {
  const { disableHeavyEffects } = useMobileOptimization();

  // On mobile or when heavy effects are disabled, show fallback or children only
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
      {showMatrixParticles && <MatrixParticles intensity={0.1} speed={0.5} />}
      {showScanlines && <Scanlines intensity={0.02} speed={0.5} />}
    </>
  );
}; 