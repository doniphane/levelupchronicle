# Configuration Supabase Storage pour les Images d'Articles

## Création du Bucket

Le bucket `article-images` doit être créé manuellement dans le dashboard Supabase :

1. Allez dans **Storage** dans votre dashboard Supabase
2. Cliquez sur **New bucket**
3. Nom du bucket : `article-images`
4. Cochez **Public bucket** pour permettre l'accès public aux images
5. Cliquez sur **Create bucket**

## Structure des dossiers recommandée

```
article-images/
  ├── thumbnails/          # Miniatures des articles
  ├── content/             # Images du contenu des articles
  └── uploads/             # Images uploadées par les utilisateurs
```

## Politiques RLS pour le Storage

Une fois le bucket créé, vous pouvez créer des politiques via SQL :

```sql
-- Politique pour permettre la lecture publique de toutes les images
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'article-images');

-- Politique pour permettre l'upload aux utilisateurs authentifiés
CREATE POLICY "Authenticated users can upload"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'article-images' 
  AND auth.role() = 'authenticated'
);

-- Politique pour permettre la suppression aux utilisateurs authentifiés
CREATE POLICY "Authenticated users can delete"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'article-images' 
  AND auth.role() = 'authenticated'
);
```

## Utilisation dans le code

Le service `storageService.ts` gère automatiquement :
- Conversion des chemins en URLs publiques Supabase
- Upload d'images
- Suppression d'images
- Liste des images

Les images stockées dans Supabase Storage auront une URL du type :
```
https://[project-ref].supabase.co/storage/v1/object/public/article-images/thumbnails/image.jpg
```

