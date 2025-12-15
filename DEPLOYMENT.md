# Guide de Déploiement Vercel

## 🚀 Déploiement Initial

### 1. Créer un compte Vercel
- Rendez-vous sur [vercel.com](https://vercel.com)
- Connectez-vous avec votre compte GitHub

### 2. Importer le projet
1. Cliquez sur **"Add New Project"**
2. Sélectionnez votre repository `levelupchronicle`
3. Vercel détecte automatiquement Next.js

### 3. Configuration du projet
Vercel configure automatiquement :
- **Framework Preset** : Next.js
- **Build Command** : `pnpm build`
- **Output Directory** : `.next`
- **Install Command** : `pnpm install`

Cliquez sur **"Deploy"** !

## 🔄 Déploiements Automatiques

Chaque push sur la branche `main` déclenche automatiquement :
1. Un build du projet
2. Un déploiement en production
3. Une URL de production mise à jour

## 🌐 Domaine Personnalisé

### Ajouter votre domaine
1. Dans votre projet Vercel → **Settings** → **Domains**
2. Ajoutez votre domaine (ex: `levelupchronicle.com`)
3. Suivez les instructions DNS de Vercel

### Configuration DNS
Ajoutez ces enregistrements chez votre registrar :

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

## ⚙️ Variables d'Environnement

Si vous avez besoin de variables d'environnement :

1. **Settings** → **Environment Variables**
2. Ajoutez vos variables (ex: `NEXT_PUBLIC_API_URL`)
3. Redéployez le projet

## 📊 Analytics

Vercel Analytics est déjà configuré dans votre projet via `@vercel/analytics`.

Activez-le :
1. **Analytics** → **Enable**
2. Les métriques apparaîtront automatiquement

## 🔍 Aperçus (Previews)

Chaque Pull Request crée automatiquement un aperçu :
- URL unique par PR
- Permet de tester avant de merger
- Partageable avec l'équipe

## ✅ Checklist avant déploiement

- [ ] Toutes les vidéos YouTube ont un ID valide
- [ ] Les images sont dans le dossier `public/`
- [ ] Le build local fonctionne (`pnpm build`)
- [ ] Pas d'erreurs TypeScript
- [ ] Tests passent (si vous en avez)

## 🆘 Résolution de problèmes

### Build qui échoue
```bash
# Tester le build localement
pnpm build

# Vérifier les erreurs TypeScript
pnpm run type-check
```

### Images ne s'affichent pas
- Vérifiez que les images sont dans `public/`
- Utilisez des chemins relatifs : `/image.jpg`

### Vidéos YouTube ne chargent pas
- Vérifiez les IDs YouTube dans `lib/blogData.ts`
- Format attendu : `youtubeId: "dQw4w9WgXcQ"`

## 📱 URL de Production

Votre site sera accessible sur :
- Production : `https://levelupchronicle.vercel.app`
- Avec domaine : `https://votre-domaine.com`

---

Pour plus d'infos : [Documentation Vercel](https://vercel.com/docs)
