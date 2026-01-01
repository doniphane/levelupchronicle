# Variables d'environnement

## Variables Publiques (NEXT_PUBLIC_*)

Ces variables sont exposées côté client et peuvent être vues dans le code JavaScript du navigateur.

### ✅ SÉCURISÉES - Clés Publiques

```env
# URL de votre projet Supabase (publique)
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co

# Clé anonyme/publishable Supabase (PUBLIQUE - conçue pour être exposée)
# Cette clé est sécurisée car Supabase utilise RLS (Row Level Security)
# Vous pouvez utiliser l'un ou l'autre des noms suivants :
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_cle_anon
# OU (ancien nom, toujours supporté)
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=votre_cle_publishable
```

**⚠️ IMPORTANT** : Ces clés sont PUBLIQUES et conçues pour être exposées. La sécurité vient de RLS (Row Level Security) dans Supabase, pas de la clé elle-même.

## Variables Secrètes (SANS NEXT_PUBLIC_)

Ces variables sont UNIQUEMENT disponibles côté serveur et ne sont JAMAIS exposées au client.

### 🔒 SECRÈTES - Ne JAMAIS exposer

```env
# Clé service role Supabase (SECRÈTE - ne jamais exposer avec NEXT_PUBLIC_)
SUPABASE_SERVICE_ROLE_KEY=votre_cle_service_role

# Secret reCAPTCHA (SECRÈT - ne jamais exposer)
RECAPTCHA_SECRET=votre_secret_recaptcha
```

## ❌ Variables à NE JAMAIS utiliser avec NEXT_PUBLIC_

**JAMAIS** utiliser ces variables avec le préfixe `NEXT_PUBLIC_` :

- ❌ `NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY` - Clé secrète
- ❌ `NEXT_PUBLIC_SUPABASE_S3_SECRET_ACCESS_KEY` - Clé secrète S3
- ❌ `NEXT_PUBLIC_SUPABASE_S3_ACCESS_KEY_ID` - Clé secrète S3
- ❌ `NEXT_PUBLIC_RECAPTCHA_SECRET` - Secret reCAPTCHA
- ❌ Toute autre clé secrète ou token d'API

## Configuration Recommandée

### Fichier `.env.local` (développement)

```env
# Variables publiques (exposées côté client)
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_cle_anon_publique

# Variables secrètes (uniquement côté serveur)
SUPABASE_SERVICE_ROLE_KEY=votre_cle_service_role_secrete
RECAPTCHA_SECRET=votre_secret_recaptcha
```

### Plateforme de déploiement (production)

Configurez les mêmes variables dans votre plateforme de déploiement (Vercel, Netlify, etc.) :

1. **Variables publiques** : Accessibles côté client
2. **Variables secrètes** : Uniquement côté serveur

## Vérification

Pour vérifier qu'aucune clé secrète n'est exposée :

1. Build l'application : `pnpm build`
2. Chercher dans `.next/static` : Aucune clé secrète ne doit apparaître
3. Vérifier le code source du navigateur : Seules les clés publiques doivent être visibles

## Warning Next.js

Si vous voyez ce warning :
```
This key, which is prefixed with NEXT_PUBLIC_ and includes the term KEY, might expose sensitive information
```

**Solutions** :
1. Si c'est une clé PUBLIQUE (comme `NEXT_PUBLIC_SUPABASE_ANON_KEY`) : C'est normal, vous pouvez l'ignorer ou renommer la variable
2. Si c'est une clé SECRÈTE : Retirer immédiatement `NEXT_PUBLIC_` et utiliser une API route côté serveur

