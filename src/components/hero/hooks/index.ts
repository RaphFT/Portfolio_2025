/**
 * @fileoverview Exports des hooks de la section hero
 * @description Fichier d'index centralisant tous les hooks personnalisés
 * utilisés dans la section hero pour l'optimisation, l'accessibilité et la performance
 * @author Raphael Fremont
 * @version 1.0.0
 */

// Hooks d'optimisation et de performance
export { useDebounce } from './useDebounce';
export { useOptimizedAnimation } from './useOptimizedAnimation';
export { useVisibilityObserver } from './useVisibilityObserver';
export { useAnimationOptimizer } from './useAnimationOptimizer';
export { useLazyLoading } from './useLazyLoading';
export { useWebVitals } from './useWebVitals';

// Hooks d'accessibilité
export { useScreenReaderAnnouncement } from './useScreenReaderAnnouncement';
export { useFocusManagement } from './useFocusManagement';
export { useAccessibilityAnnouncements } from './useAccessibilityAnnouncements';

// Hooks SEO et métadonnées
export { useMetaTags } from './useMetaTags';
export { useStructuredData } from './useStructuredData';

// Hooks spécifiques au terminal
export { useTerminalLogic } from './useTerminalLogic'; 