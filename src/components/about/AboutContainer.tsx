type AboutContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const AboutContainer = ({ children, className = '' }: AboutContainerProps) => {
  return (
    <div
      className={`rounded-lg w-full h-[500px] border border-neutral-300 bg-white/80 backdrop-blur-sm flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
}; 