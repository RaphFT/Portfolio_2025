import { FooterHeader } from '../footer/FooterHeader';
import { FooterContact } from '../footer/FooterContact';

export const Footer = () => {
  return (
    <footer 
      id="contact" 
      className="h-screen flex items-center justify-center bg-primary text-white"
      aria-labelledby="contact-heading"
      role="contentinfo"
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <FooterHeader />
          <FooterContact />
        </div>
      </div>
    </footer>
  );
}; 