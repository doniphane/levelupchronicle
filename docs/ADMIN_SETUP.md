# Configuration Admin

## Comment définir un utilisateur comme administrateur

### Option 1 : Via le Dashboard Supabase

1. Allez dans votre dashboard Supabase
2. Cliquez sur **Table Editor** dans le menu
3. Sélectionnez la table `profiles`
4. Trouvez l'utilisateur que vous voulez promouvoir admin
5. Modifiez la colonne `role` et changez la valeur de `user` à `admin`
6. Sauvegardez

### Option 2 : Via SQL

```sql
-- Mettre à jour le role d'un utilisateur spécifique (remplacez l'email)
UPDATE public.profiles
SET role = 'admin'
WHERE email = 'votre-email@example.com';

-- Ou mettre à jour par ID utilisateur
UPDATE public.profiles
SET role = 'admin'
WHERE id = 'uuid-de-l-utilisateur';
```

### Option 3 : Créer automatiquement un profil admin lors de l'inscription

Vous pouvez modifier le processus d'inscription pour créer automatiquement un profil avec role='admin' pour certains emails (par exemple votre email personnel).

## Vérification

Une fois qu'un utilisateur a le role `admin` :
- Il verra le lien "Admin" dans la navbar (desktop et mobile)
- Il pourra accéder à la page `/admin`
- Il pourra créer, modifier et gérer les articles

## Sécurité

- Seuls les utilisateurs avec `role = 'admin'` peuvent accéder à `/admin`
- La page admin vérifie le role avant d'afficher le contenu
- Les utilisateurs non-admin sont redirigés vers la page d'accueil

