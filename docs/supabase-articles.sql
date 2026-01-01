-- Table: public.articles
-- Stocke tous les articles du blog

create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique, -- URL-friendly identifier (ex: "ark-debuter")
  title text not null,
  description text not null,
  content text not null, -- Contenu HTML/Markdown de l'article
  author_id uuid references auth.users on delete set null, -- Auteur de l'article
  category text not null, -- Guide, Tutoriel, Gameplay, News, Récap, Construction, Unboxing
  tags text[] default '{}', -- Tableau de tags
  thumbnail text, -- Chemin vers la miniature dans public/
  read_time text, -- Temps de lecture estimé (ex: "5 min")
  featured boolean default false, -- Article mis en avant
  published boolean default true, -- Article publié ou brouillon
  views integer default 0, -- Nombre de vues
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Indexes pour améliorer les performances
create index if not exists articles_slug_idx on public.articles (slug);
create index if not exists articles_category_idx on public.articles (category);
create index if not exists articles_published_created_idx on public.articles (published, created_at desc);
create index if not exists articles_featured_idx on public.articles (featured) where featured = true;
create index if not exists articles_author_idx on public.articles (author_id);

-- Index GIN pour la recherche dans les tags
create index if not exists articles_tags_idx on public.articles using gin (tags);

-- Trigger pour mettre à jour updated_at automatiquement
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger update_articles_updated_at
  before update on public.articles
  for each row
  execute function update_updated_at_column();

-- Enable RLS (Row Level Security)
alter table public.articles enable row level security;

-- Policy: Tout le monde peut lire les articles publiés
create policy "allow_select_published_articles" on public.articles
  for select using (published = true);

-- Policy: Seuls les utilisateurs authentifiés peuvent créer des articles
create policy "allow_insert_authenticated" on public.articles
  for insert with check (auth.uid() IS NOT NULL);

-- Policy: Les utilisateurs peuvent modifier leurs propres articles
create policy "allow_update_own_articles" on public.articles
  for update using (auth.uid() = author_id) with check (auth.uid() = author_id);

-- Policy: Les utilisateurs peuvent supprimer leurs propres articles
create policy "allow_delete_own_articles" on public.articles
  for delete using (auth.uid() = author_id);

-- -----------------------------------------------------------------------------
-- Table: public.article_comments
-- Commentaires sur les articles
-- -----------------------------------------------------------------------------

create table if not exists public.article_comments (
  id uuid primary key default gen_random_uuid(),
  article_id uuid not null references public.articles(id) on delete cascade,
  author_id uuid references auth.users on delete set null, -- Utilisateur qui a commenté
  content text not null, -- Contenu du commentaire
  parent_id uuid references public.article_comments(id) on delete cascade, -- Pour les réponses (threading)
  status text not null default 'approved', -- approved | pending | removed
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Indexes
create index if not exists article_comments_article_idx on public.article_comments (article_id);
create index if not exists article_comments_author_idx on public.article_comments (author_id);
create index if not exists article_comments_parent_idx on public.article_comments (parent_id);
create index if not exists article_comments_status_created_idx on public.article_comments (status, created_at desc);

-- Trigger pour updated_at
create trigger update_article_comments_updated_at
  before update on public.article_comments
  for each row
  execute function update_updated_at_column();

-- Enable RLS
alter table public.article_comments enable row level security;

-- Policy: Tout le monde peut lire les commentaires approuvés
create policy "allow_select_approved_comments" on public.article_comments
  for select using (status = 'approved');

-- Policy: Les utilisateurs authentifiés peuvent créer des commentaires
create policy "allow_insert_authenticated_comments" on public.article_comments
  for insert with check (auth.uid() IS NOT NULL AND auth.uid() = author_id);

-- Policy: Les utilisateurs peuvent modifier leurs propres commentaires
create policy "allow_update_own_comments" on public.article_comments
  for update using (auth.uid() = author_id) with check (auth.uid() = author_id);

-- Policy: Les utilisateurs peuvent supprimer leurs propres commentaires
create policy "allow_delete_own_comments" on public.article_comments
  for delete using (auth.uid() = author_id);

-- -----------------------------------------------------------------------------
-- Fonction pour incrémenter le nombre de vues d'un article
-- -----------------------------------------------------------------------------

create or replace function increment_article_views(article_uuid uuid)
returns void as $$
begin
  update public.articles
  set views = views + 1
  where id = article_uuid;
end;
$$ language plpgsql security definer;

