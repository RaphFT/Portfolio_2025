/**
 * @fileoverview Composant de performance pour la section about
 * @description Surveille et optimise les métriques de performance
 * spécifiques à la section about
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { useWebVitals } from '../hero/hooks';

/**
 * Interface des données Web Vitals
 * @interface WebVitalsData
 */
type WebVitalsData = {
  LCP?: number;
  FID?: number;
  CLS?: number;
  FCP?: number;
  TTFB?: number;
};

/**
 * Interface des props du composant AboutPerformance
 * @interface AboutPerformanceProps
 */
type AboutPerformanceProps = {
  onVitalsUpdate?: (vitals: WebVitalsData) => void;
};

/**
 * Composant de performance pour la section about
 * @description Surveille les métriques Web Vitals de la section about avec :
 * - Surveillance des métriques de performance
 * - Callback pour les mises à jour de vitals
 * - Logs de performance pour le debugging
 * - Intégration avec les services d'analytics
 * 
 * @param {AboutPerformanceProps} props - Props du composant
 * @param {(vitals: WebVitalsData) => void} [props.onVitalsUpdate] - Callback pour les mises à jour
 * 
 * @returns {null} Ce composant ne rend rien visuellement
 * 
 * @example
 * <AboutPerformance 
 *   onVitalsUpdate={(vitals) => {
 *     console.log('About Section Web Vitals:', vitals);
 *     analytics.track('about_section_vitals', vitals);
 *   }}
 * />
 */
export const AboutPerformance = ({ onVitalsUpdate }: AboutPerformanceProps) => {
  // Surveillance des Web Vitals pour la section About
  useWebVitals((vitals) => {
    // Log des Web Vitals spécifiques à la section About
    console.log('About Section Web Vitals:', vitals);
    
    // Envoi des données vers votre service d'analytics
    // Exemple: analytics.track('about_section_vitals', vitals);
    
    onVitalsUpdate?.(vitals);
  });

  // Ce composant ne rend rien visuellement
  return null;
}; 