/**
 * @fileoverview Effet de scanlines animées
 * @description Composant d'effet visuel de scanlines avec animation
 * fluide et optimisations pour les performances
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { useEffect, useRef, useState } from 'react';
import { useMobileOptimization } from '../hero/hooks/useMobileOptimization';

/**
 * Interface des props du composant Scanlines
 * @interface ScanlinesProps
 * @description Configuration des propriétés de l'effet scanlines
 * 
 * @property {number} intensity - Intensité de l'effet (0-1, défaut: 0.05)
 * @property {number} speed - Vitesse d'animation en pixels par frame (défaut: 1)
 * @property {string} color - Couleur des scanlines (défaut: '#00FF00')
 * @property {number} spacing - Espacement entre les lignes en pixels (défaut: 12)
 * @property {string} className - Classes CSS additionnelles
 */
interface ScanlinesProps {
  intensity?: number; // 0-1
  speed?: number; // pixels per frame
  color?: string;
  spacing?: number; // pixels between lines
  className?: string;
}

/**
 * Composant effet de scanlines animées
 * @description Affiche un effet de scanlines avec :
 * - Lignes horizontales animées
 * - Mouvement fluide vers le bas
 * - Intensité et vitesse configurables
 * - Optimisation mobile avec désactivation automatique
 * - Intersection Observer pour les performances
 * - Canvas avec mix-blend-mode screen
 * - Espacement personnalisable
 * - Responsive avec redimensionnement automatique
 * 
 * @param {ScanlinesProps} props - Propriétés du composant
 * @param {number} props.intensity - Intensité de l'effet (0-1)
 * @param {number} props.speed - Vitesse d'animation
 * @param {string} props.color - Couleur des scanlines
 * @param {number} props.spacing - Espacement entre les lignes
 * @param {string} props.className - Classes CSS additionnelles
 * 
 * @returns {JSX.Element} Canvas avec effet scanlines
 * 
 * @example
 * <Scanlines intensity={0.02} speed={0.5} color="#00FF00" spacing={12} />
 */
export const Scanlines = ({ 
  intensity = 0.05, 
  speed = 1, 
  color = '#00FF00',
  spacing = 12,
  className = ''
}: ScanlinesProps) => {
  const { disableHeavyEffects } = useMobileOptimization();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Désactivation sur mobile ou quand les effets lourds sont désactivés
    if (disableHeavyEffects) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Redimensionnement du canvas
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let offset = 0;
    let animationId: number;

    // Boucle d'animation
    const animate = () => {
      if (!ctx || !isVisible) return;

      // Effacement du canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dessin des scanlines
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.globalAlpha = intensity;

      for (let y = offset; y < canvas.height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Déplacement des scanlines
      offset += speed;
      if (offset >= spacing) {
        offset = 0;
      }

      animationId = requestAnimationFrame(animate);
    };

    // Intersection Observer pour les performances
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          animate();
        } else {
          cancelAnimationFrame(animationId);
        }
      },
      { threshold: 0.1 }
    );

    if (canvas) {
      observer.observe(canvas);
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      observer.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, [intensity, speed, color, spacing, isVisible, disableHeavyEffects]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ 
        mixBlendMode: 'screen',
        zIndex: 1
      }}
    />
  );
}; 