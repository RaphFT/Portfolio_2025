import { TextRevealByWord } from "./ui/text-reveal";

export const About = () => {
  const text = "Je suis Raphael Fremont, développeur web freelance créant des sites web sur mesure, haute performance qui reflètent la véritable identité de votre marque. Je combine du code propre, les meilleures pratiques SEO, et un design créatif pour construire des expériences numériques qui engagent les utilisateurs et génèrent des résultats. Que vous lanciez une marque ou amélioriez votre présence en ligne, je suis là pour vous aider à vous démarquer.";

  return (
    <section 
      className="relative w-full bg-white"
      id="about"
    >
      {/* Section fixe avec animation - pas d'espace supplémentaire */}
      <div className="sticky top-0 h-screen flex items-center justify-center z-10">
        <div className="w-full max-w-5xl mx-auto px-4">
          <div
            className="rounded-lg w-full h-[500px] border border-neutral-300 bg-white/80 backdrop-blur-sm flex items-center justify-center"
          >
            <TextRevealByWord text={text} />
          </div>
        </div>
      </div>
    </section>
  );
}; 