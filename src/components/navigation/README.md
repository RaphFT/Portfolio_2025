# 📁 Section Navigation - Documentation

## Vue d'ensemble

Ce dossier contient tous les composants et données nécessaires à la navigation principale du portfolio. La navigation est conçue avec un design moderne, responsive et accessible, utilisant des effets de transparence et de flou.

## 🏗️ Architecture

```
navigation/
├── README.md                    # Cette documentation
├── index.ts                     # Exports centralisés
├── navigationData.tsx           # Données de navigation
├── NavigationContainer.tsx      # Conteneur principal
├── NavigationList.tsx           # Liste des liens
└── NavigationLink.tsx           # Lien individuel
```

## 📋 Composants

### `NavigationContainer.tsx`
**Composant conteneur principal** qui applique le style de base à la navigation.

**Fonctionnalités :**
- Fond semi-transparent avec effet de flou
- Bordures arrondies et ombre
- Design responsive
- Accessibilité optimisée

**Props :** Aucune

### `NavigationList.tsx`
**Composant liste** qui affiche tous les liens de navigation.

**Fonctionnalités :**
- Mapping des données vers les liens
- Espacement responsive
- Structure sémantique avec `<ul>`
- Rôle ARIA approprié

**Props :** Aucune

### `NavigationLink.tsx`
**Composant lien individuel** avec gestion de l'état actif.

**Fonctionnalités :**
- Gestion de l'état actif (page courante)
- Styles responsive
- Transitions fluides
- Accessibilité complète

**Props :**
```typescript
interface NavigationLinkProps {
  item: NavigationItem;
}
```

## 📊 Données

### `navigationData.tsx`
**Fichier de données** contenant la configuration de la navigation.

**Structure :**
```typescript
interface NavigationItem {
  id: string;           // Identifiant unique
  label: string;        // Texte affiché
  href: string;         // Lien vers la section
  isCurrent?: boolean;  // Page courante
}
```

**Éléments de navigation :**
1. **RAPHAEL F.** - Accueil (#home)
2. **STACK** - Compétences techniques (#stack)
3. **PROJETS** - Portfolio de projets (#projects)
4. **CONTACT** - Informations de contact (#contact)

## 🎨 Design

### Style de base
```css
/* Conteneur */
.bg-white/80 backdrop-blur-md rounded-full shadow-lg
border-2 border-black

/* Liens */
.text-primary hover:text-secondary transition-colors
focus:outline-none focus:ring-2 focus:ring-primary
```

### Responsive Design
- **Mobile** : `text-xs`, `space-x-2`, `px-1.5`
- **Tablet** : `sm:text-sm`, `sm:space-x-4`, `sm:px-2`
- **Desktop** : `md:text-base`, `md:space-x-8`, `md:px-6`

## ♿ Accessibilité

### Fonctionnalités incluses :
- **Navigation clavier** : Tab et flèches
- **Lecteurs d'écran** : Rôles ARIA appropriés
- **État actif** : `aria-current="page"`
- **Labels descriptifs** : `aria-label` pour chaque lien
- **Focus visible** : Anneau de focus clair

### Attributs ARIA :
- `role="navigation"` pour le conteneur
- `role="menubar"` pour la liste
- `role="menuitem"` pour chaque lien
- `aria-current` pour l'état actif
- `aria-label` pour les descriptions

## 🚀 Performance

### Optimisations incluses :
- **Composants légers** : Pas de dépendances lourdes
- **CSS optimisé** : Classes Tailwind optimisées
- **Rendu conditionnel** : Pas de calculs inutiles
- **Transitions fluides** : CSS transitions performantes

### Métriques cibles :
- **Temps de rendu** < 16ms
- **Bundle size** < 5KB
- **Accessibilité** 100% WCAG AA

## 🔧 Utilisation

### Import basique :
```typescript
import { NavigationContainer } from './components/navigation';

// Dans votre composant
<NavigationContainer />
```

### Utilisation directe des composants :
```typescript
import { NavigationList, NavigationLink } from './components/navigation';

// Utilisation personnalisée
<NavigationList />
```

### Configuration des données :
```typescript
import { navigationData } from './components/navigation';

// Modification des données
const customNavigation = {
  ...navigationData,
  items: [
    // Vos éléments personnalisés
  ]
};
```

## 📱 Responsive Design

### Breakpoints :
- **Mobile** : `< 640px` - Texte petit, espacement réduit
- **Tablet** : `640px - 768px` - Taille moyenne
- **Desktop** : `≥ 768px` - Taille complète

### Adaptations :
- **Espacement** : Augmente avec la taille d'écran
- **Taille de texte** : S'adapte à la lisibilité
- **Padding** : Optimisé pour chaque breakpoint

## 🎯 Fonctionnalités

### Navigation interne :
- **Ancres** : Navigation vers les sections du site
- **Smooth scroll** : Défilement fluide (géré par CSS)
- **État actif** : Indication de la section courante

### Interactions :
- **Hover** : Changement de couleur au survol
- **Focus** : Anneau de focus visible
- **Transitions** : Animations fluides

## 🐛 Dépannage

### Problèmes courants :

1. **Liens ne fonctionnent pas** : Vérifier les IDs des sections
2. **Styles manquants** : Vérifier l'import de Tailwind
3. **Accessibilité** : Tester avec un lecteur d'écran

### Logs utiles :
```javascript
// Vérifier les données de navigation
console.log('navigationData:', navigationData);

// Vérifier l'état actif
console.log('currentPage:', isCurrent);
```

## 📝 Maintenance

### Ajouter un nouvel élément :
1. Ajouter l'élément dans `navigationData.tsx`
2. Vérifier que la section correspondante existe
3. Tester la navigation
4. Vérifier l'accessibilité

### Modifier le style :
1. Ajuster les classes Tailwind
2. Tester sur différents appareils
3. Vérifier l'accessibilité
4. Optimiser les performances

### Personnalisation avancée :
```typescript
// Exemple de personnalisation
const customNavigation = {
  items: [
    {
      id: 'custom',
      label: 'CUSTOM',
      href: '#custom',
      isCurrent: false
    }
  ]
};
```

## 🔄 Intégration

### Avec le composant global :
```typescript
// Dans global/Navigation.tsx
import { NavigationContainer } from '../navigation';

export const Navigation = () => {
  return (
    <nav className="fixed top-0 z-50 w-full">
      <NavigationContainer />
    </nav>
  );
};
```

### Avec le routing :
```typescript
// Intégration avec React Router (si applicable)
import { useLocation } from 'react-router-dom';

// Mise à jour automatique de l'état actif
const location = useLocation();
const isCurrent = location.pathname === href;
```

---

**Auteur :** Raphael Fremont  
**Version :** 1.0.0  
**Dernière mise à jour :** 2024 