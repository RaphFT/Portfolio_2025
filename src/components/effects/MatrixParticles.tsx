import { useEffect, useRef, useState } from 'react';
import { useMobileOptimization } from '../hero/hooks/useMobileOptimization';

interface MatrixParticlesProps {
  intensity?: number; // 0-1
  speed?: number;
  color?: string;
}

export const MatrixParticles = ({ 
  intensity = 0.3, 
  speed = 1, 
  color = '#00FF00' 
}: MatrixParticlesProps) => {
  const { disableHeavyEffects } = useMobileOptimization();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Don't run on mobile or when heavy effects are disabled
    if (disableHeavyEffects) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters (katakana only)
    const matrixChars = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';
    const chars = matrixChars.split('');

    // Particle class
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

    // Animation loop
    const animate = () => {
      if (!ctx || !isVisible) return;

      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add new particles
      if (Math.random() < 0.08 * intensity) {
        particles.push(new Particle());
      }

      // Update and draw particles
      particles = particles.filter(particle => {
        particle.update();
        particle.draw();
        return !particle.isDead();
      });

      animationId = requestAnimationFrame(animate);
    };

    // Intersection Observer for performance
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