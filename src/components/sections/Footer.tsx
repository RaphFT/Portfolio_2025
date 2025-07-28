import { FooterHeader } from '../footer/FooterHeader';
import { FooterContact } from '../footer/FooterContact';
import { MatrixParticles } from '../effects/MatrixParticles';

export const Footer = () => {
  return (
    <footer 
      id="contact" 
      className="relative min-h-screen sm:min-h-screen flex items-center justify-center bg-primary text-white py-4 sm:py-12 lg:py-16"
      aria-labelledby="contact-heading"
      role="contentinfo"
    >
      {/* Matrix Particles - Footer only */}
      <MatrixParticles intensity={0.4} speed={1.5} color="#00FF00" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col justify-center items-center space-y-8 sm:space-y-12 lg:space-y-16 max-w-5xl mx-auto text-center">
          <FooterHeader />
          <FooterContact />
        </div>
      </div>
    </footer>
  );
}; 