import { useEffect } from 'react';

type MetaTag = {
  name?: string;
  property?: string;
  content: string;
};

type UseMetaTagsOptions = {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  robots?: string;
};

export const useMetaTags = (options: UseMetaTagsOptions = {}) => {
  const {
    title = 'Raphael Fremont - Fullstack Developer & Freelancer',
    description = 'Développeur créatif basé en France, passionné par la programmation, le creative coding, et l\'apprentissage constant de nouvelles choses.',
    keywords = ['développeur', 'fullstack', 'react', 'typescript', 'freelance', 'france'],
    image = '/images/seo/og-image.jpg',
    url = 'https://raphaelfremont.com',
    type = 'website',
    author = 'Raphael Fremont',
    robots = 'index, follow'
  } = options;

  useEffect(() => {
    // All meta tags with unified type
    const metaTags: MetaTag[] = [
      // Basic meta tags
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
      { name: 'author', content: author },
      { name: 'robots', content: robots },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#000000' },
      
      // Open Graph tags
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: 'Raphael Fremont Portfolio' },
      { property: 'og:locale', content: 'fr_FR' },
      
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:creator', content: '@raphFT' }
    ];

    // Update or create meta tags
    const updateMetaTag = (tag: MetaTag) => {
      const selector = tag.name 
        ? `meta[name="${tag.name}"]`
        : `meta[property="${tag.property}"]`;
      
      let element = document.querySelector(selector) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        if (tag.name) {
          element.setAttribute('name', tag.name);
        } else if (tag.property) {
          element.setAttribute('property', tag.property);
        }
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', tag.content);
    };

    // Update title
    document.title = title;

    // Update all meta tags
    metaTags.forEach(updateMetaTag);

    // Cleanup function
    return () => {
      // Optionally restore original meta tags here
      // For now, we'll leave the meta tags as they are
    };
  }, [title, description, keywords, image, url, type, author, robots]);
}; 