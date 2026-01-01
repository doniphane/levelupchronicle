-- Table: public.comments

create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  article_slug text not null,
  content text not null,
  status text not null default 'pending', -- pending | approved | removed
  created_at timestamptz not null default now(),
  ip_hash text, -- hashed IP for rate-limiting/privacy
  user_agent_hash text
);

-- Indexes
create index if not exists comments_article_idx on public.comments (article_slug);
create index if not exists comments_status_created_idx on public.comments (status, created_at desc);

-- Enable RLS and example policies (adjust as needed):
-- NOTE: We'll assume server-side inserts use the service_role key.
alter table public.comments enable row level security;

-- Allow reading approved comments to anon
create policy "allow_select_approved" on public.comments
  for select using (status = 'approved');

-- Prevent direct inserts from anon (require service role)
create policy "deny_insert_anon" on public.comments
  for insert using (false);

-- Service role bypasses RLS when using service key from server.
