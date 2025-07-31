/**
 * @fileoverview Effet de particules Matrix avec caractères japonais
 * @description Composant d'effet visuel Matrix avec particules animées
 * utilisant des caractères katakana et optimisé pour les performances
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { useEffect, useRef, useState } from 'react';
import { useMobileOptimization } from '../hero/hooks/useMobileOptimization';

/**
 * Interface des props du composant MatrixParticles
 * @interface MatrixParticlesProps
 * @description Configuration des propriétés de l'effet Matrix
 * 
 * @property {number} intensity - Intensité de l'effet (0-1, défaut: 0.3)
 * @property {number} speed - Vitesse d'animation (défaut: 1)
 * @property {string} color - Couleur des particules (défaut: '#00FF00')
 */
interface MatrixParticlesProps {
  intensity?: number; // 0-1
  speed?: number;
  color?: string;
}

/**
 * Composant effet de particules Matrix
 * @description Affiche un effet de particules Matrix avec :
 * - Caractères katakana japonais
 * - Animation fluide avec requestAnimationFrame
 * - Optimisation mobile avec désactivation automatique
 * - Intersection Observer pour les performances
 * - Canvas avec mix-blend-mode screen
 * - Particules avec opacité et taille variables
 * - Effet de fade progressif
 * - Responsive avec redimensionnement automatique
 * 
 * @param {MatrixParticlesProps} props - Propriétés du composant
 * @param {number} props.intensity - Intensité de l'effet (0-1)
 * @param {number} props.speed - Vitesse d'animation
 * @param {string} props.color - Couleur des particules
 * 
 * @returns {JSX.Element} Canvas avec effet Matrix
 * 
 * @example
 * <MatrixParticles intensity={0.4} speed={1.5} color="#00FF00" />
 */
export const MatrixParticles = ({ 
  intensity = 0.3, 
  speed = 1, 
  color = '#00FF00' 
}: MatrixParticlesProps) => {
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
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Caractères Matrix (katakana uniquement)
    const matrixChars = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';
    const chars = matrixChars.split('');

    // Classe Particle pour gérer chaque particule
    class Particle {
      x: number;
      y: number;
      char: string;
      speed: number;
      opacity: number;
      fontSize: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth);
        this.y = -20;
        this.char = chars[Math.floor(Math.random() * chars.length)];
        this.speed = (Math.random() * 2 + 1) * speed;
        this.opacity = Math.random() * 0.6 + 0.4; // Plus visible
        this.fontSize = Math.random() * 16 + 12; // Plus grand
      }

      update() {
        this.y += this.speed;
        this.opacity -= 0.003; // Plus lent pour rester visible plus longtemps
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.font = `${this.fontSize}px monospace`;
        ctx.fillStyle = color;
        ctx.globalAlpha = this.opacity * intensity;
        ctx.fillText(this.char, this.x, this.y);
        ctx.restore();
      }

      isDead() {
        return this.y > (canvas?.height || window.innerHeight) || this.opacity <= 0;
      }
    }

    let particles: Particle[] = [];
    let animationId: number;

    // Boucle d'animation
    const animate = () => {
      if (!ctx || !isVisible) return;

      // Effacement du canvas avec effet de fade
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Ajout de nouvelles particules
      if (Math.random() < 0.08 * intensity) {
        particles.push(new Particle());
      }

      // Mise à jour et dessin des particules
      particles = particles.filter(particle => {
        particle.update();
        particle.draw();
        return !particle.isDead();
      });

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
  }, [intensity, speed, color, isVisible]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ 
        mixBlendMode: 'screen',
        opacity: 1 // Opacité complète pour le canvas
      }}
    />
  );
}; 