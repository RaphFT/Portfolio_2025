# 📁 Section Projets - Documentation

## Vue d'ensemble

Ce dossier contient tous les composants et données nécessaires à l'affichage de la section projets du portfolio. La section est conçue avec un design responsive qui s'adapte aux appareils mobiles et desktop.

## 🏗️ Architecture

```
projects/
├── README.md                    # Cette documentation
├── index.ts                     # Exports centralisés
├── circularProjectsData.tsx     # Données des projets
├── ProjectsCircular.tsx         # Composant principal
├── ProjectsHeader.tsx           # En-tête de section
├── CircularProjects.tsx         # Version desktop (carrousel circulaire)
└── MobileOptimizedProjects.tsx  # Version mobile (optimisée)
```

## 📋 Composants

### `ProjectsCircular.tsx`
**Composant principal** de la section projets qui orchestre l'affichage responsive.

**Fonctionnalités :**
- Affichage conditionnel mobile/desktop
- Configuration des couleurs et tailles de police
- Gestion de l'accessibilité

**Props :** Aucune (utilise les données internes)

### `ProjectsHeader.tsx`
**En-tête de section** affichant le titre et la description.

**Fonctionnalités :**
- Titre principal "Mes Projets"
- Description de la section
- Animations CSS fluides
- Accessibilité optimisée

### `CircularProjects.tsx`
**Version desktop** avec carrousel circulaire interactif.

**Fonctionnalités :**
- Navigation par flèches
- Animations fluides
- Calcul responsive de l'espacement
- Gestion du clavier (flèches gauche/droite)
- Optimisations de performance

**Props :**
```typescript
interface CircularProjectsProps {
  projects: Project[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}
```

### `MobileOptimizedProjects.tsx`
**Version mobile** optimisée pour les petits écrans.

**Fonctionnalités :**
- Animations simplifiées
- Interface tactile adaptée
- Optimisations de performance mobile
- Détection automatique des appareils mobiles

**Props :**
```typescript
interface MobileOptimizedProjectsProps {
  projects: Project[];
  colors?: Colors;
  fontSizes?: FontSizes;
}
```

## 📊 Données

### `circularProjectsData.tsx`
**Fichier de données** contenant tous les projets du portfolio.

**Structure :**
```typescript
interface Project {
  title: string;        // Titre du projet
  meta: string;         // Technologies utilisées
  description: string;  // Description détaillée
  src: string;         // Chemin de l'image
  githubUrl: string;   // Lien GitHub
  liveUrl?: string;    // Lien live (optionnel)
  tags: string[];      // Tags pour filtrage
}
```

**Projets inclus :**
1. **BOOKI** - HTML/CSS, responsive design
2. **Sophie Bluel** - JavaScript, API, DOM
3. **NINA CARDUCCI** - SEO, accessibilité, performances
4. **KASA** - React, React Router, Vite
5. **Mon Vieux Grimoire** - Node.js, Express, MongoDB
6. **Menu Maker by QWENTA** - Gestion de projet, spécifications

## 🎨 Configuration

### Couleurs par défaut
```typescript
const defaultColors = {
  title: "#000000",
  meta: "#6b7280", 
  description: "#4b5563",
  arrowBackground: "#141414",
  arrowForeground: "#f1f1f7",
  arrowHoverBackground: "#47D649"
};
```

### Tailles de police par défaut
```typescript
const defaultFontSizes = {
  title: "1.5rem",      // Desktop: "28px"
  meta: "0.925rem",     // Desktop: "20px"
  description: "1.125rem" // Desktop: "20px"
};
```

## ♿ Accessibilité

### Fonctionnalités incluses :
- **Navigation clavier** : Flèches gauche/droite
- **Lecteurs d'écran** : Labels et descriptions appropriés
- **Contraste** : Couleurs optimisées pour la lisibilité
- **Focus visible** : Indicateurs de focus clairs
- **Motion reduced** : Respect des préférences utilisateur

### Attributs ARIA :
- `role="region"` pour la section
- `aria-label` pour les descriptions
- `aria-level` pour la hiérarchie des titres
- `aria-describedby` pour les descriptions

## 📱 Responsive Design

### Breakpoints :
- **Mobile** : `< 768px` - Version optimisée
- **Desktop** : `≥ 768px` - Carrousel circulaire

### Optimisations mobile :
- Animations simplifiées
- Espacement réduit
- Interface tactile adaptée
- Performance optimisée

## 🚀 Performance

### Optimisations incluses :
- **Lazy loading** des images
- **Mémoisation** des calculs coûteux
- **Code splitting** automatique
- **Animations optimisées** pour mobile
- **Détection d'appareil** pour optimisations

### Métriques cibles :
- **LCP** < 2.5s
- **FID** < 100ms
- **CLS** < 0.1

## 🔧 Utilisation

### Import basique :
```typescript
import { ProjectsCircular } from './components/projects';

// Dans votre composant
<ProjectsCircular />
```

### Configuration personnalisée :
```typescript
<CircularProjects
  projects={customProjects}
  colors={{
    title: "#custom-color",
    meta: "#666666"
  }}
  fontSizes={{
    title: "32px",
    description: "18px"
  }}
/>
```

## 🐛 Dépannage

### Problèmes courants :

1. **Images non trouvées** : Vérifier les chemins dans `circularProjectsData.tsx`
2. **Animations lentes** : Vérifier les préférences de réduction de mouvement
3. **Problèmes de responsive** : Tester sur différents appareils

### Logs utiles :
```javascript
// Vérifier la détection mobile
console.log('isMobile:', isMobile);

// Vérifier les données des projets
console.log('projects:', circularProjectsData);
```

## 📝 Maintenance

### Ajouter un nouveau projet :
1. Ajouter l'image dans `public/images/projects/`
2. Ajouter les données dans `circularProjectsData.tsx`
3. Vérifier les liens GitHub et live
4. Tester l'affichage mobile et desktop

### Modifier les styles :
1. Ajuster les couleurs dans les props
2. Modifier les tailles de police
3. Tester sur différents appareils
4. Vérifier l'accessibilité

---

**Auteur :** Raphael Fremont  
**Version :** 1.0.0  
**Dernière mise à jour :** 2024 