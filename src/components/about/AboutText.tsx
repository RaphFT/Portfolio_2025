/**
 * @fileoverview Texte principal de la section about
 * @description Composant affichant le texte de présentation avec
 * animation de révélation mot par mot
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { TextRevealByWord } from "./text-reveal";

/**
 * Composant texte principal de la section about
 * @description Affiche le texte de présentation de Raphael Fremont avec :
 * - Animation de révélation mot par mot
 * - Texte de présentation professionnelle
 * - Composant TextRevealByWord pour l'animation
 * 
 * @returns {JSX.Element} Texte de présentation avec animation
 * 
 * @example
 * <AboutText />
 */
export const AboutText = () => {
  // Texte de présentation professionnelle
  const text = "Je suis Raphael Fremont, développeur web freelance créant des sites web sur mesure, haute performance qui reflètent la véritable identité de votre marque. Je combine du code propre, les meilleures pratiques SEO, et un design créatif pour construire des expériences numériques qui engagent les utilisateurs et génèrent des résultats. Que vous lanciez une marque ou amélioriez votre présence en ligne, je suis là pour vous aider à vous démarquer.";

  return <TextRevealByWord text={text} />;
}; 