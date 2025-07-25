import { FooterHeader } from '../footer/FooterHeader';
import { FooterContact } from '../footer/FooterContact';

export const Footer = () => {
  return (
    <footer 
      id="contact" 
      className="min-h-screen flex items-center bg-primary text-white py-20"
      aria-labelledby="contact-heading"
      role="contentinfo"
    >
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <FooterHeader />
          <FooterContact />
        </div>
      </div>
    </footer>
  );
}; 