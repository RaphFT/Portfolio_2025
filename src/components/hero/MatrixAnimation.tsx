import { useState, useEffect, useRef } from 'react';

type MatrixAnimationProps = {
  onComplete: () => void;
};

export const MatrixAnimation = ({ onComplete }: MatrixAnimationProps) => {
  const [characters, setCharacters] = useState<{ 
    id: number; 
    char: string; 
    x: number; 
    y: number; 
    speed: number; 
    opacity: number 
  }[]>([]);
  
  const frameRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Matrix character set
  const matrixChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+-*/=[]{}()<>|&!?#$%^.,:;~';
  const getRandomChar = () => matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));

  // Initialize matrix animation
  useEffect(() => {
    // Ensure the container is available
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;
    const charWidth = 12; // Approximate width of a monospace character
    const columns = Math.floor(width / charWidth);
    
    // Create initial characters
    const initialChars = [];
    for (let i = 0; i < columns * 2; i++) {
      initialChars.push({
        id: i,
        char: getRandomChar(),
        x: Math.random() * width,
        y: Math.random() * height - height, // Start above the container
        speed: 1 + Math.random() * 3,
        opacity: 0.1 + Math.random() * 0.9
      });
    }
    setCharacters(initialChars);
    
    // Start animation timer
    const duration = 5000; // 5 seconds
    const endTime = Date.now() + duration;
    
    const animate = () => {
      if (Date.now() >= endTime) {
        cancelAnimationFrame(frameRef.current);
        onComplete();
        return;
      }
      
      setCharacters(prevChars => {
        return prevChars.map(char => {
          // Update position
          const y = char.y + char.speed;
          
          // If character goes off screen, reset from top with new properties
          if (y > height) {
            return {
              ...char,
              char: getRandomChar(),
              y: Math.random() * -100,
              speed: 1 + Math.random() * 3,
              opacity: 0.1 + Math.random() * 0.9
            };
          }
          
          // Occasionally change character
          const newChar = Math.random() > 0.95 ? getRandomChar() : char.char;
          
          return {
            ...char,
            y,
            char: newChar
          };
        });
      });
      
      frameRef.current = requestAnimationFrame(animate);
    };
    
    frameRef.current = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(frameRef.current);
    };
  }, [onComplete]);
  
  return (
    <div 
      ref={containerRef}
      className="overflow-hidden absolute inset-0 font-mono text-green-500 bg-black"
      aria-label="Matrix animation easter egg"
      role="img"
    >
      {characters.map(char => (
        <div
          key={char.id}
          style={{
            position: 'absolute',
            left: `${char.x}px`,
            top: `${char.y}px`,
            opacity: char.opacity,
            textShadow: '0 0 5px rgba(0, 255, 0, 0.8)',
            transform: 'scale(1.2)',
            color: Math.random() > 0.97 ? '#ffffff' : 'inherit' // Occasionally white for highlight
          }}
        >
          {char.char}
        </div>
      ))}
    </div>
  );
}; 