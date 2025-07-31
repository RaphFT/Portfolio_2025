# 📁 Composants Globaux - Documentation

## Vue d'ensemble

Ce dossier contient tous les composants globaux utilisés dans l'ensemble du portfolio. Ces composants sont partagés entre toutes les sections et fournissent des fonctionnalités essentielles comme la navigation, le chargement et les indicateurs de progression.

## 🏗️ Architecture

```
global/
├── README.md                           # Cette documentation
├── index.ts                            # Exports centralisés
├── LoadingScreen.tsx                   # Écran de chargement
├── Navigation.tsx                      # Navigation globale
├── ScrollProgress.tsx                  # Indicateur de scroll desktop
└── ScrollProgressMobile.tsx            # Indicateur de scroll mobile
```

## 📋 Composants Principaux

### `LoadingScreen.tsx`
**Écran de chargement global** avec animation de points.

**Fonctionnalités :**
- Animation de points en saut avec délai
- Transition d'entrée et de sortie fluide
- Position fixe en plein écran
- Z-index élevé pour être au-dessus de tout
- Arrière-plan blanc
- Texte de chargement avec animation
- Design centré et responsive

### `Navigation.tsx`
**Navigation globale** avec animation d'apparition.

**Fonctionnalités :**
- Animation d'apparition depuis le haut
- Position fixe en bas de l'écran
- Centrage horizontal
- Z-index approprié pour la superposition
- Espacement responsive selon l'écran
- Accessibilité avec aria-label et role
- Conteneur de navigation intégré

### `ScrollProgress.tsx`
**Indicateur de progression de scroll desktop** avec navigation interactive.

**Fonctionnalités :**
- 10 indicateurs de progression
- Navigation interactive par clic
- Défilement fluide vers la section
- Animation d'apparition avec délai
- Position fixe à droite de l'écran
- Centrage vertical
- Z-index élevé pour la superposition
- Accessibilité avec clavier et lecteurs d'écran
- Visible uniquement sur desktop (md+)

### `ScrollProgressMobile.tsx`
**Indicateur de progression de scroll mobile** optimisé pour mobile.

**Fonctionnalités :**
- 5 indicateurs de progression (moins que desktop)
- Navigation interactive par clic
- Défilement fluide vers la section
- Animation d'apparition avec délai
- Position fixe en bas à droite
- Layout vertical pour mobile
- Z-index élevé pour la superposition
- Accessibilité avec clavier et lecteurs d'écran
- Visible uniquement sur mobile (< md)

## 🎨 Animations et Effets

### LoadingScreen
- **Animation de points** : Saut avec délai progressif
- **Transition d'entrée** : Opacity fade-in
- **Transition de sortie** : Opacity fade-out
- **Scale animation** : Conteneur principal

### Navigation
- **Animation d'apparition** : Translation depuis le haut
- **Position fixe** : Bas de l'écran
- **Responsive spacing** : Espacement adaptatif

### ScrollProgress
- **Animation d'apparition** : Opacity avec délai
- **Scale animation** : Indicateurs individuels
- **Interactive navigation** : Clic pour défilement
- **Smooth scrolling** : Comportement fluide

## ♿ Accessibilité

### Fonctionnalités incluses :
- **Navigation clavier** : TabIndex et gestion des touches
- **Lecteurs d'écran** : Aria-labels appropriés
- **Rôles sémantiques** : Navigation, button
- **Focus visible** : Indicateurs de focus
- **Descriptions contextuelles** : Aria-labels spécifiques

### Attributs ARIA :
- `role="navigation"` pour la navigation
- `role="button"` pour les indicateurs
- `aria-label` pour les descriptions
- `tabIndex` pour la navigation clavier

## 🚀 Performance

### Optimisations incluses :
- **Lazy loading** : Chargement différé
- **Animations GPU** : Transformations optimisées
- **Event listeners** : Gestion optimisée
- **Responsive design** : Adaptations par device
- **Z-index management** : Superposition contrôlée

### Métriques cibles :
- **LCP** < 2.5s
- **FID** < 100ms
- **CLS** < 0.1
- **Bundle size** < 15KB pour les composants globaux

## 🔧 Utilisation

### Import basique :
```typescript
import { LoadingScreen, Navigation, ScrollProgress, ScrollProgressMobile } from './components/global';

// Dans votre composant
<LoadingScreen />
<Navigation />
<ScrollProgress />
<ScrollProgressMobile />
```

### Utilisation dans App.tsx :
```typescript
// Écran de chargement
{isLoading && <LoadingScreen />}

// Navigation globale
<Navigation />

// Indicateurs de progression
<ScrollProgress />
<ScrollProgressMobile />
```

## 📱 Responsive Design

### Breakpoints :
- **Mobile** : `< 768px` - ScrollProgressMobile, navigation en bas
- **Desktop** : `≥ 768px` - ScrollProgress, navigation en bas

### Adaptations :
- **LoadingScreen** : Même design sur tous les devices
- **Navigation** : Espacement adaptatif
- **ScrollProgress** : Desktop uniquement
- **ScrollProgressMobile** : Mobile uniquement

## 🎯 Fonctionnalités Avancées

### Navigation Interactive :
- **Clic sur indicateurs** : Défilement vers section
- **Clavier** : Entrée et espace pour activation
- **Smooth scrolling** : Comportement fluide
- **Calcul de position** : Basé sur la hauteur du document

### Gestion d'État :
- **Progression de scroll** : Hook useScrollProgress
- **Indicateurs actifs** : Calcul basé sur la progression
- **Animations synchronisées** : Délais progressifs

## 🐛 Dépannage

### Problèmes courants :

1. **Indicateurs non visibles** : Vérifier la taille d'écran
2. **Navigation non fonctionnelle** : Vérifier les event listeners
3. **Accessibilité** : Tester avec un lecteur d'écran
4. **Performance** : Vérifier les métriques Web Vitals

### Logs utiles :
```javascript
// Vérifier la progression de scroll
console.log('Scroll progress:', progress);

// Vérifier les indicateurs actifs
console.log('Active index:', activeIndex);

// Vérifier la navigation
console.log('Navigation state:', { isVisible, isActive });
```

## 📝 Maintenance

### Ajouter un nouveau composant global :
1. Créer le composant dans le dossier global
2. Ajouter l'export dans `index.ts`
3. Importer dans `App.tsx` si nécessaire
4. Tester la responsivité et l'accessibilité

### Modifier les animations :
1. Ajuster les paramètres dans les composants
2. Tester sur différents appareils
3. Vérifier les performances
4. Respecter les préférences utilisateur

### Personnaliser la navigation :
1. Modifier `Navigation.tsx`
2. Ajuster le positionnement
3. Tester l'accessibilité
4. Vérifier la responsivité

## 🔄 Évolutions Futures

### Fonctionnalités prévues :
- **Thèmes dynamiques** : Couleurs personnalisables
- **Animations personnalisables** : Plus d'options
- **Analytics intégrés** : Suivi des interactions
- **PWA features** : Installation et notifications

### Optimisations prévues :
- **Intersection Observer** : Déclenchement intelligent
- **Service Workers** : Cache intelligent
- **Web Workers** : Calculs en arrière-plan
- **CSS Houdini** : Animations natives

## 📊 Métriques de Performance

### Données actuelles :
- **LoadingScreen** : 5 points animés
- **Navigation** : Position fixe bas
- **ScrollProgress** : 10 indicateurs (desktop)
- **ScrollProgressMobile** : 5 indicateurs (mobile)

### Types de composants supportés :
- **Loading** : Écran de chargement
- **Navigation** : Navigation globale
- **Progress** : Indicateurs de progression
- **Responsive** : Adaptations mobile/desktop

---

**Auteur :** Raphael Fremont  
**Version :** 1.0.0  
**Dernière mise à jour :** 2024 