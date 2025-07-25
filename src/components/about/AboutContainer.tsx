type AboutContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const AboutContainer = ({ children, className = '' }: AboutContainerProps) => {
  return (
    <div
      className={`rounded-lg w-full h-[500px] border border-neutral-300 bg-white/80 backdrop-blur-sm flex items-center justify-center ${className}`}
      role="region"
      aria-label="About section container with animated text content"
      aria-describedby="about-description"
    >
      {children}
      
      {/* Hidden description for screen readers */}
      <div id="about-description" className="sr-only">
        Container for the about section featuring animated text reveal of Raphael Fremont's professional description.
        The text animates word by word as the user scrolls through the section.
      </div>
    </div>
  );
}; 