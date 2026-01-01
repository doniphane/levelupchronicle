-- Guestbook table for public comments / livre d'or

create table if not exists public.guestbook (
  id uuid primary key default gen_random_uuid(),
  message text not null,
  created_at timestamptz not null default now()
);

create index if not exists guestbook_created_idx on public.guestbook (created_at desc);

-- Enable RLS and simple policies
alter table public.guestbook enable row level security;

-- allow anyone to select
create policy "allow_select_all" on public.guestbook
  for select using (true);

-- allow inserts from anon (guestbook use-case)
create policy "allow_insert_anon" on public.guestbook
  for insert with check (char_length(message) between 1 and 1000);

-- Note: allowing anon inserts is convenient but opens to spam. For production,
-- consider recaptcha, moderation flag, or inserting via server using service role.

-- -----------------------------------------------------------------------------
-- Profiles / Auth integration
-- Recommended: use Supabase Auth for signup/signin and keep an application
-- profile in `public.profiles` that references `auth.users`.
-- -----------------------------------------------------------------------------

-- Create profiles table linked to auth.users (one-to-one)
create table if not exists public.profiles (
  id uuid primary key references auth.users on delete cascade,
  email text,
  display_name text,
  created_at timestamptz default now()
);

create index if not exists profiles_email_idx on public.profiles (email);

-- Allow users to select their own profile or public read of display_name/email
alter table public.profiles enable row level security;

create policy "select_profiles_public" on public.profiles
  for select using (true);

create policy "insert_profile_if_auth" on public.profiles
  for insert with check (auth.uid() = id);

create policy "update_own_profile" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

-- -----------------------------------------------------------------------------
-- Tie guestbook entries to authenticated users
-- Modify guestbook to include author_id and restrict inserts to authenticated users
-- -----------------------------------------------------------------------------

alter table public.guestbook add column if not exists author_id uuid references auth.users;

-- Allow public read as before
drop policy if exists "allow_select_all" on public.guestbook;
create policy "allow_select_all" on public.guestbook
  for select using (true);

-- Only allow inserts when the request is authenticated and author_id = auth.uid()
drop policy if exists "allow_insert_anon" on public.guestbook;
create policy "allow_insert_authenticated" on public.guestbook
  for insert with check (auth.uid() IS NOT NULL AND author_id = auth.uid() AND char_length(message) between 1 and 1000);

-- Optionally allow owners to delete their own messages
create policy "delete_own" on public.guestbook
  for delete using (auth.uid() IS NOT NULL AND author_id = auth.uid());

-- If you prefer to allow anonymous posts, keep the previous allow_insert_anon policy
-- instead of the authenticated policy above.
