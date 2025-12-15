# LevelUp Chronicle

Blog gaming de la **Team Kuroizana** - Découvrez nos aventures, guides et vidéos sur nos jeux préférés.

## 🎮 À propos

LevelUp Chronicle est le blog officiel de la Team Kuroizana où nous partageons :
- 📝 **Articles et guides** sur nos sessions de jeu
- 🎬 **Vidéos** de nos meilleures aventures
- 🏗️ **Tutoriels** et astuces gaming
- 🦖 **Récits** de nos exploits sur ARK, Minecraft, The Division 2 et plus

## 🚀 Technologies

- **[Next.js 16](https://nextjs.org/)** - Framework React avec App Router
- **[React 19](https://react.dev/)** - Bibliothèque UI
- **[TypeScript](https://www.typescriptlang.org/)** - Typage statique
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utilitaire
- **[Lucide React](https://lucide.dev/)** - Icônes modernes
- **[Vercel](https://vercel.com/)** - Déploiement et hébergement

## 📁 Structure

```
levelupchronicle/
├── app/                      # Pages Next.js
│   ├── page.tsx             # Page d'accueil
│   ├── article/             # Pages articles
│   └── video/               # Page vidéos
├── components/              # Composants React
│   └── blog/                # Composants du blog
├── lib/                     # Utilitaires
│   └── blogData.ts          # Données du blog
└── public/                  # Assets statiques
```

## 🛠️ Installation

```bash
# Installer les dépendances
pnpm install

# Lancer en développement
pnpm dev

# Build pour production
pnpm build
```

Le site sera disponible sur [http://localhost:3000](http://localhost:3000)

## ✍️ Ajouter du contenu

Pour ajouter un article ou une vidéo, éditez le fichier `lib/blogData.ts` :

```typescript
// Ajouter un article
export const articles: BlogContent[] = [
  {
    id: "article-04",
    type: "article",
    title: "Votre titre",
    description: "Description courte",
    author: "Team Kuroizana",
    date: "2025-12-15",
    category: "Guide",
    tags: ["Tag1", "Tag2"],
    href: "/article/votre-slug",
    // ...
  },
];

// Ajouter une vidéo
export const videos: BlogContent[] = [
  {
    id: "video-06",
    type: "video",
    title: "Titre vidéo",
    youtubeId: "VOTRE_ID_YOUTUBE",
    // ...
  },
];
```

## 🌐 Déploiement sur Vercel

Le site est déployé automatiquement sur **Vercel** :

1. Push sur la branche `main`
2. Vercel détecte les changements
3. Build et déploiement automatique

## 📝 Licence

© 2025 Team Kuroizana - Tous droits réservés
