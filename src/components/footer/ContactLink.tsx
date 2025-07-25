import { type ContactItem } from './footerData';

type ContactLinkProps = {
  contact: ContactItem;
};

export const ContactLink = ({ contact }: ContactLinkProps) => {
  const { type, value, href, external, icon } = contact;
  
  const baseClasses = "inline-block transition-all duration-300 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-2 text-base sm:text-lg md:text-xl font-clash";
  const fontStyle = {
    fontFamily: '"Clash Display", sans-serif',
    fontWeight: 400
  };

  // Si c'est un lien externe (LinkedIn)
  if (external && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        style={fontStyle}
        aria-label={`Visit ${value} profile, opens in a new tab`}
      >
        {value} <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">{icon}</span>
      </a>
    );
  }

  // Si c'est un lien interne (email, téléphone)
  if (href) {
    const ariaLabel = type === 'email' 
      ? `Send email to ${value}`
      : `Call ${value}`;
    
    return (
      <a 
        href={href} 
        className={baseClasses}
        style={fontStyle}
        aria-label={ariaLabel}
      >
        {value}
      </a>
    );
  }

  // Si c'est juste du texte (localisation)
  return (
    <p 
      className={`${baseClasses} mt-6 sm:mt-8`}
      style={fontStyle}
      aria-label="Location"
    >
      {value}
    </p>
  );
}; 