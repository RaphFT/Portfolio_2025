# 📁 Section Hero - Documentation

## Vue d'ensemble

Ce dossier contient tous les composants et hooks nécessaires à la section hero du portfolio. La section hero est la première impression du site avec un terminal interactif, des animations sophistiquées et une architecture optimisée pour les performances.

## 🏗️ Architecture

```
hero/
├── README.md                           # Cette documentation
├── index.ts                            # Exports centralisés
├── terminalCommands.tsx                # Données du terminal
├── hooks/                              # Hooks personnalisés
│   ├── index.ts                        # Exports des hooks
│   ├── useTerminalLogic.ts             # Logique du terminal
│   ├── useMobileOptimization.ts        # Optimisations mobile
│   ├── useWebVitals.ts                 # Métriques de performance
│   ├── useMetaTags.ts                  # Gestion des meta tags
│   ├── useStructuredData.ts            # Données structurées
│   ├── useLazyLoading.ts               # Chargement différé
│   ├── useAccessibilityAnnouncements.ts # Annonces d'accessibilité
│   ├── useFocusManagement.ts           # Gestion du focus
│   ├── useAnimationOptimizer.ts        # Optimiseur d'animations
│   ├── useVisibilityObserver.ts        # Observer de visibilité
│   ├── useOptimizedAnimation.ts        # Animations optimisées
│   ├── useScreenReaderAnnouncement.ts  # Annonces lecteur d'écran
│   └── useDebounce.ts                  # Debounce utility
├── HeroTitle.tsx                       # Titre principal
├── HeroTopBar.tsx                      # Barre de navigation supérieure
├── TextMarquee.tsx                     # Texte défilant
├── HeroTerminal.tsx                    # Terminal principal
├── TypedTerminal.tsx                   # Terminal typé
├── TerminalHeader.tsx                  # En-tête du terminal
├── TerminalLine.tsx                    # Ligne du terminal
├── TerminalInput.tsx                   # Saisie du terminal
├── TerminalCursor.tsx                  # Curseur du terminal
├── MatrixAnimation.tsx                 # Animation Matrix
├── OptimizedAnimation.tsx              # Animation optimisée
├── VisibilityOptimizedAnimation.tsx    # Animation avec visibilité
├── AccessibilityTestPanel.tsx          # Panel de test d'accessibilité
├── HeroSEO.tsx                         # SEO de la section hero
└── LazyLoadedComponent.tsx             # Composant lazy loaded
```

## 📋 Composants Principaux

### `HeroTitle.tsx`
**Titre principal** avec effet glitch et design responsive.

**Fonctionnalités :**
- Effet glitch sur chaque ligne
- Design responsive (mobile/desktop)
- Animations fluides (desktop uniquement)
- Police Clash Display personnalisée
- Accessibilité optimisée

**Props :**
```typescript
interface HeroTitleProps {
  variant?: 'mobile' | 'desktop';
}
```

### `HeroTopBar.tsx`
**Barre de navigation supérieure** avec informations de contact.

**Fonctionnalités :**
- Numéro de version de l'application
- Lien LinkedIn (desktop uniquement)
- Lien email de contact
- Design responsive
- Animations d'apparition

### `TextMarquee.tsx`
**Composant de texte défilant** avec indicateur de disponibilité.

**Fonctionnalités :**
- Message "DISPONIBLE EN FREELANCE"
- Délai d'apparition de 3 secondes
- Indicateur visuel animé
- Optimisations de performance
- Respect des préférences de réduction de mouvement

### `HeroTerminal.tsx`
**Terminal principal** avec lazy loading et optimisations.

**Fonctionnalités :**
- Lazy loading du composant TypedTerminal
- Suspense avec fallback
- Optimisations mobile
- Animations conditionnelles

**Props :**
```typescript
interface HeroTerminalProps {
  variant?: 'mobile' | 'desktop';
}
```

## 🎮 Terminal Interactif

### `TypedTerminal.tsx`
**Terminal interactif complet** avec toutes les fonctionnalités.

**Fonctionnalités :**
- Historique des commandes
- Saisie en temps réel
- Animations de frappe
- Gestion des commandes
- Accessibilité complète
- Animation Matrix (easter egg)

### `terminalCommands.tsx`
**Données et commandes du terminal.**

**Contenu :**
- Séquence de démarrage
- Commandes principales (help, about, skills, etc.)
- Easter eggs cachés
- Actions spéciales (Matrix animation)

**Commandes disponibles :**
- `help` - Afficher l'aide
- `about` - Informations personnelles
- `skills` - Compétences techniques
- `projects` - Projets récents
- `contact` - Informations de contact
- `clear` - Effacer le terminal
- Easter eggs : `coffee`, `sudo`, `hack`, `matrix`, etc.

## 🎣 Hooks Personnalisés

### Hooks d'Optimisation
- **`useMobileOptimization`** - Détection et optimisations mobile
- **`useWebVitals`** - Métriques de performance
- **`useLazyLoading`** - Chargement différé
- **`useAnimationOptimizer`** - Optimisation des animations
- **`useVisibilityObserver`** - Observer de visibilité

### Hooks d'Accessibilité
- **`useAccessibilityAnnouncements`** - Annonces d'accessibilité
- **`useFocusManagement`** - Gestion du focus
- **`useScreenReaderAnnouncement`** - Annonces lecteur d'écran

### Hooks SEO
- **`useMetaTags`** - Gestion des meta tags
- **`useStructuredData`** - Données structurées

### Hooks Spécifiques
- **`useTerminalLogic`** - Logique complète du terminal
- **`useDebounce`** - Utilitaire de debounce

## 🎨 Animations et Effets

### `MatrixAnimation.tsx`
**Animation Matrix** pour l'easter egg.

**Fonctionnalités :**
- Caractères qui tombent
- Couleurs vertes/jaunes
- Animation fluide
- Optimisations de performance

### `OptimizedAnimation.tsx`
**Composant d'animation optimisé** pour les performances.

### `VisibilityOptimizedAnimation.tsx`
**Animation avec observer de visibilité** pour optimiser les performances.

## ♿ Accessibilité

### Fonctionnalités incluses :
- **Navigation clavier** : Tab, flèches, Entrée
- **Lecteurs d'écran** : Labels et descriptions appropriés
- **Focus visible** : Indicateurs de focus clairs
- **Motion reduced** : Respect des préférences utilisateur
- **Announces** : Annonces automatiques pour les lecteurs d'écran

### Attributs ARIA :
- `role="banner"` pour les titres
- `role="navigation"` pour la navigation
- `aria-label` pour les descriptions
- `aria-current` pour l'état actif
- `aria-describedby` pour les descriptions

## 🚀 Performance

### Optimisations incluses :
- **Lazy loading** des composants lourds
- **Code splitting** automatique
- **Observer de visibilité** pour les animations
- **Debounce** pour les saisies
- **Mémoisation** des calculs coûteux
- **Optimisations mobile** automatiques

### Métriques cibles :
- **LCP** < 2.5s
- **FID** < 100ms
- **CLS** < 0.1
- **Bundle size** < 50KB pour la section hero

## 🔧 Utilisation

### Import basique :
```typescript
import { HeroTitle, HeroTerminal, TextMarquee } from './components/hero';

// Dans votre composant
<HeroTitle variant="desktop" />
<HeroTerminal variant="mobile" />
<TextMarquee />
```

### Utilisation du terminal :
```typescript
import { TypedTerminal } from './components/hero';

// Terminal complet
<TypedTerminal />
```

### Utilisation des hooks :
```typescript
import { useTerminalLogic, useMobileOptimization } from './components/hero/hooks';

// Dans votre composant
const { history, input, handleKeyDown } = useTerminalLogic();
const { isMobile, shouldReduceMotion } = useMobileOptimization();
```

## 📱 Responsive Design

### Breakpoints :
- **Mobile** : `< 768px` - Version optimisée
- **Desktop** : `≥ 768px` - Version complète

### Adaptations :
- **Terminal** : Taille et position adaptées
- **Titre** : Taille de police responsive
- **Animations** : Simplifiées sur mobile
- **Navigation** : Liens adaptés par device

## 🎯 Fonctionnalités Avancées

### Terminal Interactif :
- **Commandes réelles** : help, about, skills, etc.
- **Easter eggs** : Commandes cachées amusantes
- **Animation Matrix** : Effet spécial pour l'easter egg
- **Historique** : Sauvegarde des commandes
- **Auto-complétion** : Suggestions de commandes

### Animations :
- **Effet glitch** : Sur les titres
- **Animations fluides** : Framer Motion
- **Optimisations** : Respect des préférences utilisateur
- **Performance** : Observer de visibilité

## 🐛 Dépannage

### Problèmes courants :

1. **Terminal ne répond pas** : Vérifier les hooks useTerminalLogic
2. **Animations lentes** : Vérifier les préférences de réduction de mouvement
3. **Accessibilité** : Tester avec un lecteur d'écran
4. **Performance** : Vérifier les métriques Web Vitals

### Logs utiles :
```javascript
// Vérifier la logique du terminal
console.log('terminal state:', { history, input, bootComplete });

// Vérifier les optimisations mobile
console.log('mobile optimizations:', { isMobile, shouldReduceMotion });

// Vérifier les métriques de performance
console.log('web vitals:', { LCP, FID, CLS });
```

## 📝 Maintenance

### Ajouter une nouvelle commande :
1. Ajouter la commande dans `terminalCommands.tsx`
2. Définir la réponse et les propriétés
3. Tester dans le terminal
4. Vérifier l'accessibilité

### Modifier les animations :
1. Ajuster les paramètres dans les hooks
2. Tester sur différents appareils
3. Vérifier les performances
4. Respecter les préférences utilisateur

### Optimiser les performances :
1. Utiliser les hooks d'optimisation
2. Implémenter le lazy loading
3. Observer la visibilité
4. Débouncer les interactions

---

**Auteur :** Raphael Fremont  
**Version :** 1.0.0  
**Dernière mise à jour :** 2024 