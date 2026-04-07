# Roadmap — Track My Spending

## Phase 1: Foundation
**Goal:** Auth, database schema, project scaffolding
**Dependencies:** None
**Scope:**
- Next.js 15 setup (App Router, TypeScript, Tailwind CSS)
- Supabase auth (email/password + Google OAuth)
- Database schema: receipts, receipt_items, categories with RLS policies
- Protected layout shell with sidebar navigation
- Auth middleware for session refresh and route protection

## Phase 2: Receipt Upload & OCR
**Goal:** Core receipt capture and data extraction pipeline
**Dependencies:** Phase 1
**Scope:**
- Image upload UI with drag-and-drop and file picker
- Supabase Storage integration for receipt images
- Google Cloud Vision OCR parsing (TEXT_DETECTION)
- Receipt creation from extracted data (merchant, date, amount, items, tax, total)
- Receipt detail view with manual field correction

## Phase 3: Categories & Organization
**Goal:** Categorize and find receipts efficiently
**Dependencies:** Phase 2
**Scope:**
- Category CRUD (create, edit, delete custom categories)
- Auto-categorization via merchant/keyword mapping rules
- Full-text search across merchants and items
- Multi-dimensional filtering (date range, category, amount range)

## Phase 4: Dashboard & Reports
**Goal:** Visualize spending patterns and export data
**Dependencies:** Phase 3
**Scope:**
- Spending summary cards (total, average, count by period)
- Recharts charts (category breakdown pie/bar, spending trend line)
- Period comparison (month-over-month, custom ranges)
- Recurring expense detection (3+ receipts, same merchant, amounts within 10% tolerance)
- CSV export of filtered receipt data

## Phase 5: Telegram Bot
**Goal:** Mobile receipt capture via Telegram
**Dependencies:** Phase 2
**Scope:**
- Telegram Bot setup (raw Bot API, no framework)
- Account linking flow (6-digit codes, expiring)
- Photo receipt processing (reuses OCR pipeline from Phase 2)
- Cloud Run Dockerfile and webhook endpoint
- Bot commands: /start, /link, /recent, /help

## Phase 6: Polish & Deploy
**Goal:** Production-ready deployment
**Dependencies:** Phases 1–5
**Scope:**
- Vercel deployment configuration
- Cloud Run deployment for Telegram bot
- Error handling hardening and edge cases
- Loading states, empty states, error boundaries
- Responsive design polish
- Environment configuration and secrets management
