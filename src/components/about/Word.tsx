import { ReactNode, memo } from 'react';

type WordProps = {
  children: ReactNode;
  animationStyle: React.CSSProperties;
  className?: string;
};

export const Word = memo(({ children, animationStyle, className = '' }: WordProps) => {
  return (
    <span 
      className={`relative mx-1 lg:mx-2 font-clash ${className}`}
      style={{
        fontFamily: '"Clash Display", sans-serif',
        fontWeight: 400,
        ...animationStyle
      }}
      aria-hidden="true"
    >
      {/* Background text for depth effect */}
      <span 
        className="absolute text-black opacity-30"
        style={{ zIndex: 1 }}
      >
        {children}
      </span>
      
      {/* Animated text */}
      <span 
        className="text-black relative"
        style={{ zIndex: 2 }}
      >
        {children}
      </span>
    </span>
  );
});

Word.displayName = 'Word'; 