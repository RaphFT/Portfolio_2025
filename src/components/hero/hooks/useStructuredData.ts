import { useEffect } from 'react';

type PersonStructuredData = {
  '@context': 'https://schema.org';
  '@type': 'Person';
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  sameAs: string[];
  worksFor?: {
    '@type': 'Organization';
    name: string;
  };
  knowsAbout: string[];
  address?: {
    '@type': 'PostalAddress';
    addressCountry: string;
    addressLocality: string;
  };
};

type WebSiteStructuredData = {
  '@context': 'https://schema.org';
  '@type': 'WebSite';
  name: string;
  description: string;
  url: string;
  author: {
    '@type': 'Person';
    name: string;
  };
  potentialAction: {
    '@type': 'SearchAction';
    target: string;
    'query-input': string;
  };
};

export const useStructuredData = () => {
  useEffect(() => {
    // Person structured data
    const personData: PersonStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Raphael Fremont',
      jobTitle: 'Fullstack Developer',
      description: 'Développeur créatif basé en France, passionné par la programmation, le creative coding, et l\'apprentissage constant de nouvelles choses.',
      url: 'https://raphaelfremont.com',
      sameAs: [
        'https://www.linkedin.com/in/raphael-fremont-63a91a1b3/',
        'https://github.com/raphFT'
      ],
      knowsAbout: [
        'JavaScript',
        'TypeScript',
        'React',
        'Node.js',
        'Fullstack Development',
        'Creative Coding',
        'Web Development'
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'FR',
        addressLocality: 'France'
      }
    };

    // Website structured data
    const websiteData: WebSiteStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Raphael Fremont Portfolio',
      description: 'Portfolio de Raphael Fremont - Développeur Fullstack Freelance',
      url: 'https://raphaelfremont.com',
      author: {
        '@type': 'Person',
        name: 'Raphael Fremont'
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://raphaelfremont.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    };

    // Create or update structured data scripts
    const createStructuredDataScript = (id: string, data: object) => {
      let script = document.getElementById(id) as HTMLScriptElement;
      
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      
      script.textContent = JSON.stringify(data, null, 2);
    };

    // Add structured data to page
    createStructuredDataScript('person-structured-data', personData);
    createStructuredDataScript('website-structured-data', websiteData);

    // Cleanup function
    return () => {
      const personScript = document.getElementById('person-structured-data');
      const websiteScript = document.getElementById('website-structured-data');
      
      if (personScript) {
        personScript.remove();
      }
      if (websiteScript) {
        websiteScript.remove();
      }
    };
  }, []);
}; 