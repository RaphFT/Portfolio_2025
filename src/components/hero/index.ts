/**
 * @fileoverview Exports de la section hero
 * @description Fichier d'index centralisant tous les exports de la section hero
 * incluant les composants principaux, d'optimisation, d'accessibilité et les hooks
 * @author Raphael Fremont
 * @version 1.0.0
 */

// Composants principaux de la section hero
export { TextMarquee } from './TextMarquee';
export { TypedTerminal } from './TypedTerminal';
export { HeroTerminal } from './HeroTerminal';
export { HeroSkipLink } from './HeroSkipLink';
export { HeroTitle } from './HeroTitle';
export { HeroTopBar } from './HeroTopBar';

// Sous-composants du terminal
export { TerminalHeader } from './TerminalHeader';
export { TerminalLine } from './TerminalLine';
export { TerminalInput } from './TerminalInput';
export { TerminalCursor } from './TerminalCursor';
export { MatrixAnimation } from './MatrixAnimation';

// Composants d'optimisation
export { OptimizedAnimation } from './OptimizedAnimation';
export { VisibilityOptimizedAnimation } from './VisibilityOptimizedAnimation';

// Composants d'accessibilité
export { AccessibilityTestPanel } from './AccessibilityTestPanel';

// Composants SEO et Performance
export { HeroSEO } from './HeroSEO';
export { LazyLoadedComponent } from './LazyLoadedComponent';

// Données du terminal et hooks
export * from './terminalCommands';
export * from './hooks'; 