# LevelUp Chronicle - Gaming Blog

Un blog de gaming statique construit avec Next.js, présentant les meilleurs clips vidéo de gameplay avec un design cyberpunk sombre et des effets néon.

## Caractéristiques

- ✨ Design cyberpunk sombre avec accents néon (rouge crimson, violet, cyan, rose)
- 🎮 Grille responsive de vidéos YouTube embarquées
- 🚀 Effet glassmorphisme sur la navbar et les cartes
- 📱 Entièrement responsive (mobile, tablette, desktop)
- ⚡ Performance optimisée pour l'export statique
- 🎬 Vidéo de background en héro section
- 🌐 Entièrement en français

## Structure du site

- **Navbar fixe** : Navigation fluide avec effet blur au scroll
- **Hero Section** : Vidéo de background avec overlay sombre
- **Grille de vidéos** : 3 colonnes desktop, 2 tablette, 1 mobile
- **À propos** : Présentation de la plateforme
- **Contact** : Formulaire et liens sociaux
- **Footer** : Copyright et liens additionnels

## Stack Technique

- **Framework** : Next.js 16 (App Router)
- **Styling** : Tailwind CSS v4 (via CDN)
- **Type** : Static Export (SSG)
- **Format** : JSX/React

## Installation

### Option 1 : Avec shadcn CLI (Recommandé)

\`\`\`bash
npx shadcn-cli@latest init
# Sélectionner les options par défaut, puis
npm install
npm run dev
\`\`\`

### Option 2 : Installation manuelle

\`\`\`bash
npm install
npm run dev
\`\`\`

## Déploiement

Pour générer le site statique :

\`\`\`bash
npm run build
\`\`\`

Le dossier `out/` contient le site entièrement statique prêt à être déployé sur :

- **Vercel** : `vercel deploy`
- **Netlify** : Drag and drop le dossier `out/`
- **GitHub Pages** : Push le contenu du dossier `out/` sur la branche `gh-pages`

## Configuration

Le fichier `next.config.js` est configuré pour l'export statique :

\`\`\`javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
}
\`\`\`

## Personnalisation

### Changer les vidéos

Modifiez l'array `videos` dans `app/page.jsx` avec vos propres IDs YouTube :

\`\`\`javascript
const videos = [
  {
    id: 1,
    title: "Votre titre",
    youtubeId: "votre_id_youtube",
    date: "Date",
    game: "Jeu",
    category: "Catégorie"
  },
  // ...
]
\`\`\`

### Couleurs personnalisées

Les couleurs sont définies dans `app/globals.css` (variables CSS) :

\`\`\`css
:root {
  --background: #0a0e27;
  --primary: #dc2626;
  --accent-cyan: #06b6d4;
  --accent-pink: #ec4899;
}
\`\`\`

### Vidéo de background

Remplacez l'URL source dans la `HeroSection` :

\`\`\`jsx
<source src="votre_video.mp4" type="video/mp4" />
\`\`\`

## Scripts disponibles

- `npm run dev` : Lancer le serveur de développement
- `npm run build` : Générer le site statique
- `npm start` : Servir le site statique en local

## Notes importantes

- ⚠️ Ce site est **100% statique** - pas de SSR, pas d'API routes
- 📍 Les iframes YouTube utilisent `youtube-nocookie.com` pour plus de confidentialité
- 🎯 Tailwind CSS est chargé via CDN pour la simplicité
- 🚫 Les images Next/Image ne sont pas utilisées (incompatibles avec l'export statique)

## Support

Pour toute question ou problème, consultez la [documentation Next.js](https://nextjs.org/docs) ou la [documentation Tailwind](https://tailwindcss.com/docs).

---

Fait avec ❤️ pour la communauté gaming
