export type About2TextData = {
  id: string;
  title: string;
  description: string;
  language: 'fr' | 'en';
  version: string;
};

export const about2TextData: About2TextData = {
  id: 'about2-main',
  title: "La curiosité m'a mené ici. Je suis un Développeur.",
  description: "Combler le fossé entre designers et développeurs, j'apporte une double perspective à chaque projet. Concevoir avec l'esprit d'un développeur, et coder avec l'œil d'un designer, je crée des expériences numériques qui sont à la fois techniquement solides et visuellement attrayantes.",
  language: 'fr',
  version: '1.0.0'
};

export const getAbout2Text = (language: 'fr' | 'en' = 'fr'): { title: string; description: string } => {
  // For now, we only have French text
  // In the future, this could be expanded to support multiple languages
  if (language === 'fr') {
    return {
      title: about2TextData.title,
      description: about2TextData.description
    };
  }
  
  // Placeholder for English translation
  return {
    title: about2TextData.title, // TODO: Add English translation
    description: about2TextData.description // TODO: Add English translation
  };
}; 