import { AboutContainer } from '../about/AboutContainer';
import { AboutText } from '../about/AboutText';

export const About = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center bg-white pt-0 sm:pt-6 lg:pt-8 pb-2 sm:pb-6 lg:pb-8"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AboutContainer>
          <AboutText />
        </AboutContainer>
      </div>
    </section>
  );
}; 