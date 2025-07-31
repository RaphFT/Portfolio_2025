/**
 * @fileoverview Hook pour l'animation de révélation de texte
 * @description Hook personnalisé pour gérer l'animation de révélation de texte
 * avec observer de visibilité et respect des préférences de mouvement
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Interface des options du hook useTextReveal
 * @interface UseTextRevealOptions
 * @property {number} [threshold=0.1] - Seuil de visibilité pour déclencher l'animation
 * @property {string} [rootMargin='0px'] - Marge autour de l'élément pour l'observer
 * @property {number} [animationDuration=0.6] - Durée de l'animation en secondes
 * @property {number} [staggerDelay=0.05] - Délai entre chaque mot en secondes
 * @property {boolean} [respectReducedMotion=true] - Respecter les préférences de réduction de mouvement
 */
type UseTextRevealOptions = {
  threshold?: number;
  rootMargin?: string;
  animationDuration?: number;
  staggerDelay?: number;
  respectReducedMotion?: boolean;
};

/**
 * Hook pour l'animation de révélation de texte
 * @description Gère l'animation de révélation de texte avec :
 * - Observer de visibilité pour déclencher l'animation
 * - Respect des préférences de réduction de mouvement
 * - Animation en cascade (stagger) pour les mots
 * - Optimisations de performance avec willChange
 * - Gestion des états d'animation
 * 
 * @param {UseTextRevealOptions} [options={}] - Options de configuration
 * @param {number} [options.threshold=0.1] - Seuil de visibilité
 * @param {string} [options.rootMargin='0px'] - Marge de l'observer
 * @param {number} [options.animationDuration=0.6] - Durée d'animation
 * @param {number} [options.staggerDelay=0.05] - Délai entre mots
 * @param {boolean} [options.respectReducedMotion=true] - Respecter les préférences
 * 
 * @returns {Object} Objet contenant les refs et fonctions d'animation
 * @returns {React.RefObject<HTMLDivElement>} returns.containerRef - Ref du conteneur
 * @returns {boolean} returns.isVisible - État de visibilité
 * @returns {boolean} returns.hasAnimated - Si l'animation a déjà eu lieu
 * @returns {boolean} returns.prefersReducedMotion - Préférence de réduction de mouvement
 * @returns {(index: number) => React.CSSProperties} returns.getWordAnimationStyle - Fonction pour les styles de mot
 * @returns {() => React.CSSProperties} returns.getContainerStyle - Fonction pour les styles de conteneur
 * 
 * @example
 * const {
 *   containerRef,
 *   isVisible,
 *   getWordAnimationStyle,
 *   getContainerStyle
 * } = useTextReveal({
 *   threshold: 0.2,
 *   animationDuration: 0.8,
 *   staggerDelay: 0.1
 * });
 */
export const useTextReveal = (options: UseTextRevealOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    animationDuration = 0.6,
    staggerDelay = 0.05,
    respectReducedMotion = true
  } = options;

  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Vérifier les préférences de réduction de mouvement
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Observer d'intersection pour la visibilité
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [threshold, rootMargin, hasAnimated]);

  // Obtenir le style d'animation pour un mot
  const getWordAnimationStyle = useCallback((index: number) => {
    if (!isVisible || (respectReducedMotion && prefersReducedMotion)) {
      return {
        opacity: 1,
        transform: 'translateY(0px)',
        transition: 'none'
      };
    }

    const delay = index * staggerDelay;
    const duration = animationDuration;

    return {
      opacity: 0,
      transform: 'translateY(20px)',
      animation: `textReveal ${duration}s ease-out ${delay}s forwards`,
      willChange: 'opacity, transform'
    };
  }, [isVisible, prefersReducedMotion, respectReducedMotion, staggerDelay, animationDuration]);

  // Obtenir le style d'animation du conteneur
  const getContainerStyle = useCallback(() => {
    if (respectReducedMotion && prefersReducedMotion) {
      return {
        opacity: 1,
        transform: 'translateY(0px)'
      };
    }

    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0px)' : 'translateY(30px)',
      transition: `opacity ${animationDuration}s ease-out, transform ${animationDuration}s ease-out`,
      willChange: 'opacity, transform'
    };
  }, [isVisible, prefersReducedMotion, respectReducedMotion, animationDuration]);

  return {
    containerRef,
    isVisible,
    hasAnimated,
    prefersReducedMotion,
    getWordAnimationStyle,
    getContainerStyle
  };
}; 