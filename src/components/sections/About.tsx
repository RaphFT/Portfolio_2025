import { AboutContainer } from '../about/AboutContainer';
import { AboutText } from '../about/AboutText';

export const About = () => {
  return (
    <section 
      id="about" 
      className="h-screen flex items-center justify-center bg-white"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <AboutContainer>
          <AboutText />
        </AboutContainer>
      </div>
    </section>
  );
}; 