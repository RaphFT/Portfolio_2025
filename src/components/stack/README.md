# 📁 Section Stack Technique - Documentation

## Vue d'ensemble

Ce dossier contient tous les composants et données nécessaires à la section stack technique du portfolio. La section stack présente les technologies et outils utilisés par Raphael Fremont avec des cartes interactives, des effets de hover sophistiqués et une architecture modulaire.

## 🏗️ Architecture

```
stack/
├── README.md                           # Cette documentation
├── index.ts                            # Exports centralisés
├── stackData.tsx                       # Données des technologies
├── StackHeader.tsx                     # En-tête de la section
├── StackGrid.tsx                       # Grille des technologies
└── TechCard.tsx                        # Carte de technologie individuelle
```

## 📋 Composants Principaux

### `StackHeader.tsx`
**En-tête de la section** avec badge et description.

**Fonctionnalités :**
- Badge "Technologies" avec style personnalisé
- Titre principal "Stack Technique"
- Description des technologies utilisées
- Animations d'apparition fluides
- Design responsive
- Police Clash Display personnalisée
- Accessibilité optimisée

### `StackGrid.tsx`
**Grille des technologies** avec layout responsive.

**Fonctionnalités :**
- Layout responsive (2 colonnes mobile, 2 tablette, 3 desktop)
- Espacement adaptatif selon l'écran
- Largeur maximale centrée avec padding
- Cartes de technologies générées dynamiquement
- Données récupérées via getStackData()

### `TechCard.tsx`
**Carte de technologie individuelle** avec effets sophistiqués.

**Fonctionnalités :**
- Effets de hover sophistiqués (desktop uniquement)
- Motif de fond Matrix au hover
- Bordure animée avec effet lumineux
- Icône avec gradient au hover
- Catégorie avec badge
- Effet glitch sur le nom (desktop uniquement)
- Design responsive
- Police Clash Display personnalisée

**Props :**
```typescript
interface TechCardProps {
  tech: TechItem;
}
```

## 📊 Données et Configuration

### `stackData.tsx`
**Données des technologies** avec icônes et catégories.

**Contenu :**
- 9 technologies principales
- Icônes emoji
- Descriptions courtes
- 4 catégories : frontend, backend, database, tools

**Structure :**
```typescript
interface TechItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  color: string;
}
```

**Technologies disponibles :**

#### Stack MERN :
1. **MongoDB** - Base de données NoSQL
2. **Express.js** - Framework backend Node.js
3. **React** - Bibliothèque UI JavaScript
4. **Node.js** - Runtime JavaScript

#### Frontend :
5. **TypeScript** - JavaScript typé
6. **Next.js** - Framework React full-stack
7. **Vite.js** - Build tool moderne
8. **Tailwind CSS** - Framework CSS utilitaire

#### Outils :
9. **Git & GitHub** - Contrôle de version

## 🎨 Animations et Effets

### Cartes de Technologies
- **Effets de hover** : Scale, ombre, translation
- **Motif Matrix** : Fond avec points verts au hover
- **Bordure lumineuse** : Effet de lueur verte
- **Gradient d'icône** : Transition de couleur
- **Effet glitch** : Sur le nom (desktop uniquement)

### Responsive Design
- **Mobile** : 2 colonnes, effets simplifiés
- **Desktop** : 3 colonnes, effets complets
- **Tablette** : 2 colonnes, compromis

## ♿ Accessibilité

### Fonctionnalités incluses :
- **Navigation clavier** : Focus visible
- **Lecteurs d'écran** : Descriptions appropriées
- **Contraste** : Couleurs optimisées
- **ARIA labels** : Descriptions contextuelles
- **Motion reduced** : Respect des préférences utilisateur

### Attributs ARIA :
- `role="region"` pour les conteneurs
- `aria-label` pour les descriptions
- `focus:ring-2` pour le focus visible
- `focus:outline-none` pour masquer l'outline par défaut

## 🚀 Performance

### Optimisations incluses :
- **Animations GPU** : willChange pour les transformations
- **Lazy loading** : Chargement différé
- **Mémoisation** : Éviter les re-renders inutiles
- **Observer de visibilité** : Déclenchement intelligent
- **Transitions optimisées** : Durées et easing appropriés

### Métriques cibles :
- **LCP** < 2.5s
- **FID** < 100ms
- **CLS** < 0.1
- **Bundle size** < 15KB pour la section stack

## 🔧 Utilisation

### Import basique :
```typescript
import { StackHeader, StackGrid } from './components/stack';

// Dans votre composant
<StackHeader />
<StackGrid />
```

### Utilisation avec carte personnalisée :
```typescript
import { TechCard } from './components/stack';

// Carte de technologie personnalisée
<TechCard tech={customTechData} />
```

### Utilisation des données :
```typescript
import { getStackData, type TechItem } from './components/stack';

// Récupération des données
const techStack = getStackData();
console.log(techStack.length); // 9 technologies
```

## 📱 Responsive Design

### Breakpoints :
- **Mobile** : `< 640px` - 2 colonnes, effets simplifiés
- **Tablette** : `640px - 1024px` - 2 colonnes
- **Desktop** : `≥ 1024px` - 3 colonnes, effets complets

### Adaptations :
- **Grille** : Colonnes adaptées par device
- **Animations** : Simplifiées sur mobile
- **Effets Matrix** : Désactivés sur mobile
- **Espacement** : Marges adaptées

## 🎯 Fonctionnalités Avancées

### Effets Visuels Sophistiqués :
- **Motif Matrix** : Points verts au hover
- **Bordure lumineuse** : Effet de lueur
- **Gradient d'icône** : Transition de couleur
- **Effet glitch** : Sur le nom des technologies
- **Transitions fluides** : Durées et easing optimisés

### Catégorisation :
- **Frontend** : React, TypeScript, Next.js, Vite, Tailwind
- **Backend** : Express.js, Node.js
- **Database** : MongoDB
- **Tools** : Git & GitHub

## 🐛 Dépannage

### Problèmes courants :

1. **Effets non visibles** : Vérifier la taille d'écran
2. **Animations lentes** : Vérifier les optimisations GPU
3. **Accessibilité** : Tester avec un lecteur d'écran
4. **Performance** : Vérifier les métriques Web Vitals

### Logs utiles :
```javascript
// Vérifier les données
console.log('Tech stack data:', getStackData());

// Vérifier les effets
console.log('Matrix effects:', { isDesktop: true, hasHover: true });

// Vérifier les performances
console.log('Stack grid performance:', { columnCount: 3, techCount: 9 });
```

## 📝 Maintenance

### Ajouter une nouvelle technologie :
1. Ajouter la technologie dans `stackData.tsx`
2. Définir l'icône, nom et description
3. Assigner une catégorie appropriée
4. Tester l'affichage et les effets

### Modifier les effets :
1. Ajuster les paramètres dans `TechCard.tsx`
2. Tester sur différents appareils
3. Vérifier les performances
4. Respecter les préférences utilisateur

### Personnaliser les catégories :
1. Modifier le type `TechItem` dans `stackData.tsx`
2. Ajouter de nouvelles catégories
3. Mettre à jour les technologies existantes
4. Tester l'affichage des badges

## 🔄 Évolutions Futures

### Fonctionnalités prévues :
- **Filtres par catégorie** : Filtrer les technologies
- **Animations personnalisables** : Plus d'options
- **Thèmes dynamiques** : Couleurs personnalisables
- **Analytics intégrés** : Suivi des interactions

### Optimisations prévues :
- **Intersection Observer** : Déclenchement intelligent
- **CSS Houdini** : Animations natives
- **Service Workers** : Cache intelligent
- **Web Workers** : Calculs en arrière-plan

---

**Auteur :** Raphael Fremont  
**Version :** 1.0.0  
**Dernière mise à jour :** 2024 