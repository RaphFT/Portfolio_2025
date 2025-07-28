import '../../styles/fonts.css';
import { TextMarquee } from '../hero/TextMarquee';
import { HeroTopBar } from '../hero/HeroTopBar';
import { HeroTitle } from '../hero/HeroTitle';
import { HeroTerminal } from '../hero/HeroTerminal';
import { HeroSkipLink } from '../hero/HeroSkipLink';
import { MobileOptimizedAnimation } from '../hero/MobileOptimizedAnimation';

export const Hero = () => {
  return (
    <section 
      id="home" 
      className="overflow-hidden relative h-screen pb-4 md:pb-0"
      aria-label="Hero section"
    >
      {/* Top bar with version and contact */}
      <HeroTopBar />

      {/* Main content */}
      <div className="container px-4 mx-auto h-full">
        <div className="flex relative flex-col items-center h-full">
          {/* Mobile Layout - Only for mobile */}
          <div className="flex flex-col justify-center items-center -mt-8 w-full h-full md:hidden">
            {/* 1. H1 first - Optimized for mobile LCP */}
            <HeroTitle variant="mobile" />

            {/* TextMarquee for mobile */}
            <MobileOptimizedAnimation
              animation="fadeIn"
              duration={0.5}
              className="mt-2 w-full"
            >
              <TextMarquee />
            </MobileOptimizedAnimation>

            {/* 2. Terminal in the middle */}
            <HeroTerminal variant="mobile" />
          </div>

          {/* Desktop Layout - Right side terminal (only visible on md screens and up) */}
          <HeroTerminal variant="desktop" />

          {/* Center content - Only for desktop */}
          <HeroTitle variant="desktop" />

          {/* TextMarquee for desktop */}
          <MobileOptimizedAnimation
            animation="fadeIn"
            duration={0.5}
            className="mt-2 w-full hidden md:block"
          >
            <TextMarquee />
          </MobileOptimizedAnimation>
        </div>
      </div>

      {/* Skip to main content link - hidden visually but available for screen readers */}
      <HeroSkipLink />
    </section>
  );
}; 