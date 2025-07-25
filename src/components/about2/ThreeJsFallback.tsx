import { useEffect, useState } from 'react';

type ThreeJsFallbackProps = {
  className?: string;
  isReducedMotion?: boolean;
};

export const ThreeJsFallback = ({ className = '', isReducedMotion = false }: ThreeJsFallbackProps) => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    if (isReducedMotion) return;

    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 360);
    }, 50); // 20 FPS animation

    return () => clearInterval(interval);
  }, [isReducedMotion]);

  if (isReducedMotion) {
    return (
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black ${className}`}
        role="img"
        aria-label="Static background for users who prefer reduced motion"
      />
    );
  }

  return (
    <div 
      className={`absolute inset-0 overflow-hidden ${className}`}
      role="img"
      aria-label="Animated background fallback for Three.js LavaLamp effect"
    >
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
        style={{
          background: `linear-gradient(${animationPhase}deg, 
            rgba(0,0,0,1) 0%, 
            rgba(20,20,20,0.8) 25%, 
            rgba(40,40,40,0.6) 50%, 
            rgba(20,20,20,0.8) 75%, 
            rgba(0,0,0,1) 100%)`
        }}
      />
      
      {/* Floating orbs effect */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 blur-sm"
            style={{
              width: `${20 + i * 10}px`,
              height: `${20 + i * 10}px`,
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
              transform: `translateY(${Math.sin(animationPhase * 0.1 + i) * 20}px)`
            }}
          />
        ))}
      </div>

      {/* Subtle glow effect */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 50%, 
            rgba(255,255,255,0.1) 0%, 
            rgba(255,255,255,0.05) 30%, 
            transparent 70%)`,
          transform: `rotate(${animationPhase * 0.5}deg)`
        }}
      />
    </div>
  );
}; 