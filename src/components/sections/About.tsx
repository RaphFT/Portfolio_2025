import { AboutContainer } from '../about/AboutContainer';
import { AboutText } from '../about/AboutText';

export const About = () => {
  return (
    <section 
      className="relative w-full bg-white"
      id="about"
    >
      {/* Section fixe avec animation - pas d'espace supplémentaire */}
      <div className="flex sticky top-0 z-10 justify-center items-center h-screen">
        <div className="px-4 mx-auto w-full max-w-5xl">
          <AboutContainer>
            <AboutText />
          </AboutContainer>
        </div>
      </div>
    </section>
  );
}; 