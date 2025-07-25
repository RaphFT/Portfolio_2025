export type AboutTextData = {
  id: string;
  text: string;
  language: 'fr' | 'en';
  version: string;
};

export const aboutTextData: AboutTextData = {
  id: 'about-main',
  text: "Je suis Raphael Fremont, développeur web freelance créant des sites web sur mesure, haute performance qui reflètent la véritable identité de votre marque. Je combine du code propre, les meilleures pratiques SEO, et un design créatif pour construire des expériences numériques qui engagent les utilisateurs et génèrent des résultats. Que vous lanciez une marque ou amélioriez votre présence en ligne, je suis là pour vous aider à vous démarquer.",
  language: 'fr',
  version: '1.0.0'
};

export const getAboutText = (language: 'fr' | 'en' = 'fr'): string => {
  // For now, we only have French text
  // In the future, this could be expanded to support multiple languages
  if (language === 'fr') {
    return aboutTextData.text;
  }
  
  // Placeholder for English translation
  return aboutTextData.text; // TODO: Add English translation
}; 