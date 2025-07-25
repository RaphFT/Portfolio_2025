export type About2TextData = {
  id: string;
  title: string;
  description: string;
  language: 'fr' | 'en';
  version: string;
};

export const about2TextData: About2TextData = {
  id: 'about2-main',
  title: "Une vision globale. Des résultats qui font la différence.",
  description: "La capacité à comprendre le développement tout en concevant, et à apprécier le design tout en développant, crée une synergie unique qui non seulement renforce la créativité, mais mène aussi à des solutions innovantes.",
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