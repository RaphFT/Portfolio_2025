import { useMetaTags, useStructuredData, useWebVitals } from './hooks';

type HeroSEOProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
};

export const HeroSEO = ({
  title = 'Raphael Fremont - Fullstack Developer & Freelancer',
  description = 'Développeur créatif basé en France, passionné par la programmation, le creative coding, et l\'apprentissage constant de nouvelles choses.',
  keywords = ['développeur', 'fullstack', 'react', 'typescript', 'freelance', 'france'],
  image = '/images/seo/og-image.jpg',
  url = 'https://raphaelfremont.com'
}: HeroSEOProps) => {
  // Meta tags management
  useMetaTags({
    title,
    description,
    keywords,
    image,
    url
  });

  // Structured data
  useStructuredData();

  // Web Vitals monitoring
  useWebVitals((vitals) => {
    // Log Web Vitals for monitoring
    console.log('Web Vitals Updated:', vitals);
    
    // You can send this data to your analytics service
    // Example: analytics.track('web_vitals', vitals);
  });

  // This component doesn't render anything visible
  return null;
}; 