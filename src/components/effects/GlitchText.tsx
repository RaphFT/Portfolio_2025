import { useState, useEffect } from 'react';

interface GlitchTextProps {
  children: string;
  className?: string;
  glitchInterval?: number; // ms between glitches
  glitchDuration?: number; // ms duration of glitch
  intensity?: number; // 0-1
}

export const GlitchText = ({ 
  children, 
  className = '', 
  glitchInterval = 5000, 
  glitchDuration = 200,
  intensity = 0.7 
}: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchText, setGlitchText] = useState(children);

  // Matrix glitch characters
  const glitchChars = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

  const generateGlitchText = (text: string) => {
    const chars = text.split('');
    const glitchIndices = Math.floor(chars.length * 0.3); // Glitch 30% of characters
    
    for (let i = 0; i < glitchIndices; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      const randomGlitchChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
      chars[randomIndex] = randomGlitchChar;
    }
    
    return chars.join('');
  };

  useEffect(() => {
    const triggerGlitch = () => {
      if (Math.random() < intensity) {
        setIsGlitching(true);
        setGlitchText(generateGlitchText(children));
        
        setTimeout(() => {
          setIsGlitching(false);
          setGlitchText(children);
        }, glitchDuration);
      }
    };

    const interval = setInterval(triggerGlitch, glitchInterval);
    return () => clearInterval(interval);
  }, [children, glitchInterval, glitchDuration, intensity]);

  return (
    <span 
      className={`relative ${className}`}
      style={{
        fontFamily: '"Clash Display", sans-serif'
      }}
    >
      {/* Original text */}
      <span className={isGlitching ? 'opacity-0' : 'opacity-100'}>
        {children}
      </span>
      
      {/* Glitch text layers */}
      {isGlitching && (
        <>
          {/* Red layer */}
          <span 
            className="absolute inset-0 opacity-80"
            style={{
              color: '#ff0000',
              transform: `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`,
              filter: 'blur(0.5px)',
              zIndex: 1
            }}
          >
            {glitchText}
          </span>
          
          {/* Cyan layer */}
          <span 
            className="absolute inset-0 opacity-80"
            style={{
              color: '#00ffff',
              transform: `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`,
              filter: 'blur(0.5px)',
              zIndex: 2
            }}
          >
            {glitchText}
          </span>
          
          {/* White layer */}
          <span 
            className="absolute inset-0 opacity-90"
            style={{
              color: '#ffffff',
              transform: `translate(${Math.random() * 2 - 1}px, ${Math.random() * 2 - 1}px)`,
              zIndex: 3
            }}
          >
            {glitchText}
          </span>
        </>
      )}
    </span>
  );
}; 