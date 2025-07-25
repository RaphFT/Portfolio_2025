import { TextRevealByWord } from "./text-reveal";

export const AboutText = () => {
  const text = "Je suis Raphael Fremont, développeur web freelance créant des sites web sur mesure, haute performance qui reflètent la véritable identité de votre marque. Je combine du code propre, les meilleures pratiques SEO, et un design créatif pour construire des expériences numériques qui engagent les utilisateurs et génèrent des résultats. Que vous lanciez une marque ou amélioriez votre présence en ligne, je suis là pour vous aider à vous démarquer.";

  return <TextRevealByWord text={text} />;
}; 