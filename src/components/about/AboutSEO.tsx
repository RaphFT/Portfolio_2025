import { useMetaTags, useStructuredData } from '../hero/hooks';

type AboutSEOProps = {
  title?: string;
  description?: string;
  keywords?: string[];
};

export const AboutSEO = ({
  title = 'À propos - Raphael Fremont | Développeur Web Freelance',
  description = 'Découvrez Raphael Fremont, développeur web freelance basé en France. Spécialisé dans la création de sites web sur mesure, haute performance avec les meilleures pratiques SEO et un design créatif.',
  keywords = ['développeur web', 'freelance', 'sites web', 'SEO', 'design créatif', 'France', 'Raphael Fremont']
}: AboutSEOProps) => {
  // Meta tags for About section
  useMetaTags({
    title,
    description,
    keywords,
    type: 'profile',
    url: 'https://raphaelfremont.com/about'
  });

  // Person structured data for About section
  useStructuredData();

  // This component doesn't render anything visible
  return null;
}; 