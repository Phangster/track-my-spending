-- Track My Spending — Initial Schema
-- Creates categories, receipts, and receipt_items tables with RLS policies
-- and seeds default categories on user creation.

-- ============================================================================
-- Extensions
-- ============================================================================
create extension if not exists "uuid-ossp";

-- ============================================================================
-- Tables
-- ============================================================================

create table categories (
  id          uuid primary key default uuid_generate_v4(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  name        text not null,
  icon        text,
  color       text,
  keywords    text[] not null default '{}',
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index categories_user_id_idx on categories(user_id);

create table receipts (
  id          uuid primary key default uuid_generate_v4(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  merchant    text not null,
  date        date not null,
  subtotal    numeric(12, 2),
  tax         numeric(12, 2),
  total       numeric(12, 2) not null,
  category_id uuid references categories(id) on delete set null,
  image_url   text,
  notes       text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index receipts_user_id_idx on receipts(user_id);
create index receipts_user_date_idx on receipts(user_id, date desc);
create index receipts_category_id_idx on receipts(category_id);

create table receipt_items (
  id          uuid primary key default uuid_generate_v4(),
  receipt_id  uuid not null references receipts(id) on delete cascade,
  name        text not null,
  quantity    numeric(12, 3) not null default 1,
  unit_price  numeric(12, 2),
  total_price numeric(12, 2) not null
);

create index receipt_items_receipt_id_idx on receipt_items(receipt_id);

-- ============================================================================
-- Updated_at trigger
-- ============================================================================
create or replace function set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger categories_set_updated_at
  before update on categories
  for each row execute function set_updated_at();

create trigger receipts_set_updated_at
  before update on receipts
  for each row execute function set_updated_at();

-- ============================================================================
-- Row Level Security
-- ============================================================================

alter table categories enable row level security;
alter table receipts enable row level security;
alter table receipt_items enable row level security;

-- Categories: users can only access their own rows.
create policy "categories_select_own"
  on categories for select
  using (user_id = auth.uid());

create policy "categories_insert_own"
  on categories for insert
  with check (user_id = auth.uid());

create policy "categories_update_own"
  on categories for update
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

create policy "categories_delete_own"
  on categories for delete
  using (user_id = auth.uid());

-- Receipts: users can only access their own rows.
create policy "receipts_select_own"
  on receipts for select
  using (user_id = auth.uid());

create policy "receipts_insert_own"
  on receipts for insert
  with check (user_id = auth.uid());

create policy "receipts_update_own"
  on receipts for update
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

create policy "receipts_delete_own"
  on receipts for delete
  using (user_id = auth.uid());

-- Receipt items: access governed by parent receipt ownership.
create policy "receipt_items_select_own"
  on receipt_items for select
  using (
    exists (
      select 1 from receipts
      where receipts.id = receipt_items.receipt_id
        and receipts.user_id = auth.uid()
    )
  );

create policy "receipt_items_insert_own"
  on receipt_items for insert
  with check (
    exists (
      select 1 from receipts
      where receipts.id = receipt_items.receipt_id
        and receipts.user_id = auth.uid()
    )
  );

create policy "receipt_items_update_own"
  on receipt_items for update
  using (
    exists (
      select 1 from receipts
      where receipts.id = receipt_items.receipt_id
        and receipts.user_id = auth.uid()
    )
  );

create policy "receipt_items_delete_own"
  on receipt_items for delete
  using (
    exists (
      select 1 from receipts
      where receipts.id = receipt_items.receipt_id
        and receipts.user_id = auth.uid()
    )
  );

-- ============================================================================
-- Default categories: seed for each new user via trigger
-- ============================================================================

create or replace function seed_default_categories()
returns trigger
language plpgsql
security definer
as $$
begin
  insert into categories (user_id, name, icon, color, keywords) values
    (new.id, 'Groceries',     '🛒', '#10b981', array['supermarket','grocery','market','fairprice','ntuc','cold storage','sheng siong']),
    (new.id, 'Dining',        '🍽️', '#f59e0b', array['restaurant','cafe','coffee','starbucks','mcdonalds','kfc','food']),
    (new.id, 'Transport',     '🚕', '#3b82f6', array['grab','taxi','uber','mrt','bus','transport','fuel','petrol','shell','esso']),
    (new.id, 'Shopping',      '🛍️', '#ec4899', array['mall','shop','store','amazon','lazada','shopee','uniqlo','zara']),
    (new.id, 'Health',        '💊', '#ef4444', array['pharmacy','clinic','hospital','watsons','guardian','doctor']),
    (new.id, 'Utilities',     '💡', '#8b5cf6', array['electric','water','gas','internet','phone','singtel','starhub','m1']),
    (new.id, 'Entertainment', '🎬', '#06b6d4', array['cinema','movie','netflix','spotify','game','concert']),
    (new.id, 'Other',         '📦', '#6b7280', array[]::text[]);
  return new;
end;
$$;

create trigger on_auth_user_created_seed_categories
  after insert on auth.users
  for each row execute function seed_default_categories();
