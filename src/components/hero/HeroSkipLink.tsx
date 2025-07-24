export const HeroSkipLink = () => {
  return (
    <a 
      href="#projects" 
      className="absolute top-0 left-0 z-50 p-3 text-white transition -translate-y-full focus:translate-y-0 bg-primary focus:outline-none"
      tabIndex={0}
    >
      Skip to main content
    </a>
  );
}; 