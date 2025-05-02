import { useState, useEffect } from 'react';
import { usePassiveEventListeners } from './usePassiveEventListeners';

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [sections, setSections] = useState<HTMLElement[]>([]);
  const [activeSection, setActiveSection] = useState(0);

  const calculateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setProgress(scrollPercent);
  };

  usePassiveEventListeners(
    typeof window !== 'undefined' ? window : null,
    ['scroll', 'resize'],
    calculateProgress,
    { passive: true }
  );

  useEffect(() => {
    // Récupérer toutes les sections
    const sectionElements = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];
    setSections(sectionElements);

    const handleScroll = () => {
      // Calculer la progression globale
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = Math.min(Math.round((scrolled / totalHeight) * 100), 100);
      setProgress(progress);

      // Détecter la section active
      const currentPos = window.scrollY + window.innerHeight / 2;
      
      for (let i = 0; i < sectionElements.length; i++) {
        const section = sectionElements[i];
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (currentPos >= sectionTop && currentPos < sectionBottom) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    progress,
    totalSections: sections.length,
    activeSection,
  };
}; 