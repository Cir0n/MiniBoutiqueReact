# Catalogue Produits — Projet React

Projet d'école réalisé dans le cadre de ma formation à l'**ESGI** (Bachelor 3 — Internet & Web).

L'objectif est d'apprendre et de mettre en pratique les **bases de React** : composants, props, rendu conditionnel et découpage d'une interface en éléments réutilisables.

## Objectifs pédagogiques

Ce projet sert à se familiariser avec :

- La création de **composants fonctionnels** en React
- Le passage de données via les **props**
- Le **rendu de listes** à partir de données
- Le **rendu conditionnel** (afficher « Disponible » / « Hors-stock » selon le stock)
- Le découpage d'une UI en composants réutilisables
- Les bases du style avec CSS (variables, grille responsive, états au survol)

## Composants

| Composant | Rôle |
|-----------|------|
| `ProductList` | Affiche la grille de tous les produits |
| `ProductCard` | Carte d'un produit (image, nom, prix, disponibilité) |
| `ProductBadge` | Badge affichant la catégorie du produit |
| `ProductDetails` | Met en avant un produit sélectionné |

## Technologies

- **React** (composants fonctionnels)
- **JavaScript / JSX**
- **CSS** (variables, CSS Grid, design responsive)

## Lancer le projet

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:5173` (avec Vite).

## Structure du projet

```
src/
├── components/
│   ├── ProductList.jsx
│   ├── ProductCard.jsx
│   ├── ProductBadge.jsx
│   └── ProductDetails.jsx
├── assets/
│   └── (images des produits)
├── App.jsx
└── index.css
```

## Contexte

Projet réalisé à des fins d'apprentissage à l'**ESGI**. Il n'a pas vocation à être déployé en production — l'accent est mis sur la compréhension des fondamentaux de React.

---

*Réalisé par Ciron — ESGI*