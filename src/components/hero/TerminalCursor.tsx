import { useEffect, useState } from 'react';

export const TerminalCursor = () => {
  const [cursorVisible, setCursorVisible] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <span 
      className={`w-1.5 md:w-2 h-3 md:h-4 ml-0.5 bg-black inline-block transition-opacity duration-75 ${
        cursorVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    />
  );
}; 