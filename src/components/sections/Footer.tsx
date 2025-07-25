import { FooterHeader } from '../footer/FooterHeader';
import { FooterContact } from '../footer/FooterContact';

export const Footer = () => {
  return (
    <footer 
      id="contact" 
      className="min-h-screen flex items-center justify-center bg-primary text-white py-8"
      aria-labelledby="contact-heading"
      role="contentinfo"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto text-center">
          <FooterHeader />
          <FooterContact />
        </div>
      </div>
    </footer>
  );
}; 