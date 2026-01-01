# Migration des Articles vers Supabase

Ce guide explique comment migrer vos articles statiques vers la base de données Supabase et utiliser le nouveau système de commentaires.

## 📋 Étapes de Migration

### 1. Créer les Tables dans Supabase

Exécutez le script SQL dans votre dashboard Supabase :

```bash
# Le fichier se trouve dans docs/supabase-articles.sql
```

Ou copiez-collez le contenu de `docs/supabase-articles.sql` dans l'éditeur SQL de Supabase.

### 2. Migrer les Articles Statiques

Vous pouvez migrer vos articles de deux façons :

#### Option A : Via le Dashboard Supabase
1. Allez dans l'éditeur de table `articles`
2. Insérez manuellement chaque article avec les champs suivants :
   - `slug` : identifiant URL (ex: "ark-debuter")
   - `title` : titre de l'article
   - `description` : description courte
   - `content` : contenu HTML/Markdown de l'article
   - `category` : catégorie (Guide, Tutoriel, Gameplay, etc.)
   - `tags` : tableau de tags (ex: ["ARK", "Gameplay"])
   - `thumbnail` : chemin vers l'image (ex: "/image.jpg")
   - `read_time` : temps de lecture (ex: "5 min")
   - `featured` : true/false
   - `published` : true pour publier

#### Option B : Via un Script de Migration
Créez un script Node.js pour migrer automatiquement :

```typescript
import { supabase } from './lib/supabaseClient'
import { articles } from './lib/blogData'

async function migrateArticles() {
  for (const article of articles) {
    // Extrait le slug depuis l'href (ex: "/article/ark-debuter" -> "ark-debuter")
    const slug = article.href.replace('/article/', '')
    
    const { error } = await supabase
      .from('articles')
      .insert({
        slug,
        title: article.title,
        description: article.description,
        content: '', // Vous devrez ajouter le contenu HTML
        category: article.category,
        tags: article.tags,
        thumbnail: article.thumbnail,
        read_time: article.readTime,
        featured: article.featured || false,
        published: true,
      })
    
    if (error) {
      console.error(`Erreur pour ${slug}:`, error)
    } else {
      console.log(`✓ Article ${slug} migré`)
    }
  }
}

migrateArticles()
```

### 3. Utiliser le Système de Commentaires

Le composant `ArticleCommentBox` est prêt à être utilisé dans vos pages d'articles :

```tsx
import ArticleCommentBox from '@/components/blog/ArticleCommentBox'

// Dans votre page d'article
<ArticleCommentBox articleId={article.id} />
```

## 🔧 Structure des Tables

### Table `articles`
- `id` : UUID (généré automatiquement)
- `slug` : Identifiant unique pour l'URL
- `title` : Titre de l'article
- `description` : Description courte
- `content` : Contenu HTML/Markdown
- `author_id` : ID de l'auteur (référence auth.users)
- `category` : Catégorie de l'article
- `tags` : Tableau de tags
- `thumbnail` : Chemin vers l'image
- `read_time` : Temps de lecture estimé
- `featured` : Article mis en avant
- `published` : Article publié ou brouillon
- `views` : Nombre de vues
- `created_at` : Date de création
- `updated_at` : Date de mise à jour

### Table `article_comments`
- `id` : UUID (généré automatiquement)
- `article_id` : ID de l'article (référence articles)
- `author_id` : ID de l'auteur (référence auth.users)
- `content` : Contenu du commentaire
- `parent_id` : ID du commentaire parent (pour les réponses)
- `status` : approved | pending | removed
- `created_at` : Date de création
- `updated_at` : Date de mise à jour

## 📝 Fonctions Disponibles

### Articles
- `getAllArticles()` : Récupère tous les articles publiés
- `getArticleBySlug(slug)` : Récupère un article par son slug
- `getArticleById(id)` : Récupère un article par son ID
- `getArticlesByCategory(category)` : Récupère les articles d'une catégorie
- `searchArticles(query)` : Recherche dans les articles
- `getFeaturedArticles(limit)` : Récupère les articles mis en avant
- `getLatestArticles(limit)` : Récupère les derniers articles
- `incrementArticleViews(articleId)` : Incrémente le compteur de vues

### Commentaires
- `getArticleComments(articleId)` : Récupère les commentaires d'un article
- `createArticleComment(articleId, content, parentId?)` : Crée un commentaire
- `deleteArticleComment(commentId)` : Supprime un commentaire

## 🔐 Sécurité (RLS)

Les politiques Row Level Security sont configurées pour :
- ✅ Lecture publique des articles publiés
- ✅ Lecture publique des commentaires approuvés
- ✅ Création de commentaires pour les utilisateurs authentifiés
- ✅ Modification/suppression uniquement pour l'auteur

## 🚀 Prochaines Étapes

1. Exécutez le script SQL dans Supabase
2. Migrez vos articles statiques vers la base de données
3. Ajoutez le composant `ArticleCommentBox` dans vos pages d'articles
4. Testez le système de commentaires
5. Supprimez progressivement les articles statiques de `blogData.ts`

