-- ============================================
-- Corrections de Sécurité et Performance
-- ============================================

-- 1. CORRECTION CRITIQUE : Fixer search_path dans les fonctions SQL
-- ============================================

-- Fonction update_updated_at_column
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- Fonction increment_article_views
CREATE OR REPLACE FUNCTION public.increment_article_views(article_uuid UUID)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  UPDATE public.articles
  SET views = views + 1
  WHERE id = article_uuid;
END;
$$;

-- Fonction handle_new_user
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, role)
  VALUES (
    NEW.id,
    NEW.email,
    'user'
  );
  RETURN NEW;
END;
$$;

-- 2. OPTIMISATION PERFORMANCE : RLS Policies
-- ============================================

-- Profiles policies
DROP POLICY IF EXISTS "insert_profile_if_auth" ON public.profiles;
CREATE POLICY "insert_profile_if_auth"
ON public.profiles
FOR INSERT
TO authenticated
WITH CHECK ((select auth.uid()) = id);

DROP POLICY IF EXISTS "update_own_profile" ON public.profiles;
CREATE POLICY "update_own_profile"
ON public.profiles
FOR UPDATE
TO authenticated
USING ((select auth.uid()) = id)
WITH CHECK ((select auth.uid()) = id);

-- Guestbook policies
DROP POLICY IF EXISTS "allow_insert_authenticated" ON public.guestbook;
CREATE POLICY "allow_insert_authenticated"
ON public.guestbook
FOR INSERT
TO authenticated
WITH CHECK ((select auth.uid()) = author_id);

DROP POLICY IF EXISTS "delete_own" ON public.guestbook;
CREATE POLICY "delete_own"
ON public.guestbook
FOR DELETE
TO authenticated
USING ((select auth.uid()) = author_id);

-- Articles policies
DROP POLICY IF EXISTS "allow_insert_authenticated" ON public.articles;
CREATE POLICY "allow_insert_authenticated"
ON public.articles
FOR INSERT
TO authenticated
WITH CHECK ((select auth.uid()) = author_id);

DROP POLICY IF EXISTS "allow_update_own_articles" ON public.articles;
CREATE POLICY "allow_update_own_articles"
ON public.articles
FOR UPDATE
TO authenticated
USING ((select auth.uid()) = author_id)
WITH CHECK ((select auth.uid()) = author_id);

DROP POLICY IF EXISTS "allow_delete_own_articles" ON public.articles;
CREATE POLICY "allow_delete_own_articles"
ON public.articles
FOR DELETE
TO authenticated
USING ((select auth.uid()) = author_id);

-- Article comments policies
DROP POLICY IF EXISTS "allow_insert_authenticated_comments" ON public.article_comments;
CREATE POLICY "allow_insert_authenticated_comments"
ON public.article_comments
FOR INSERT
TO authenticated
WITH CHECK ((select auth.uid()) = author_id);

DROP POLICY IF EXISTS "allow_update_own_comments" ON public.article_comments;
CREATE POLICY "allow_update_own_comments"
ON public.article_comments
FOR UPDATE
TO authenticated
USING ((select auth.uid()) = author_id)
WITH CHECK ((select auth.uid()) = author_id);

DROP POLICY IF EXISTS "allow_delete_own_comments" ON public.article_comments;
CREATE POLICY "allow_delete_own_comments"
ON public.article_comments
FOR DELETE
TO authenticated
USING ((select auth.uid()) = author_id);

-- 3. PERFORMANCE : Index manquant
-- ============================================

-- Index pour améliorer les performances des jointures
CREATE INDEX IF NOT EXISTS idx_guestbook_author_id ON public.guestbook(author_id);

