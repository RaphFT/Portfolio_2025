import { useEffect, useRef, useState } from 'react';

interface ScanlinesProps {
  intensity?: number; // 0-1
  speed?: number; // pixels per frame
  color?: string;
  spacing?: number; // pixels between lines
  className?: string;
}

export const Scanlines = ({ 
  intensity = 0.05, 
  speed = 1, 
  color = '#00FF00',
  spacing = 12,
  className = ''
}: ScanlinesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let offset = 0;
    let animationId: number;

    // Animation loop
    const animate = () => {
      if (!ctx || !isVisible) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw scanlines
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.globalAlpha = intensity;

      for (let y = offset; y < canvas.height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Move scanlines
      offset += speed;
      if (offset >= spacing) {
        offset = 0;
      }

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
  }, [intensity, speed, color, spacing, isVisible]);

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