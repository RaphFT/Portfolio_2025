import { Suspense, lazy } from 'react';

// Chargement dynamique de la LavaLamp
const LavaLamp = lazy(() => import('./fluid-blob').then(module => ({ default: module.LavaLamp })));

// Composant de fallback pour la LavaLamp
const LavaLampFallback = () => (
  <div className="absolute inset-0 bg-black animate-pulse" />
);

export const About2Background = () => {
  return (
    <Suspense fallback={<LavaLampFallback />}>
      <LavaLamp />
    </Suspense>
  );
}; 