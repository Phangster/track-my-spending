# Track My Spending

## Type
Web Application + Telegram Bot

## Description
Multi-user receipt tracking application. Users photograph receipts via web or Telegram, and the app automatically extracts transaction data using Google Cloud Vision OCR.

## Core Value
Snap a photo → get structured spending data. No manual entry.

## Target Users
Individual consumers who want to track personal spending with minimal manual data entry.

## Key Features
1. **Receipt Upload & OCR** — Image upload with automatic extraction of merchant, date, amount, items, tax, total via Google Cloud Vision (TEXT_DETECTION)
2. **Category Management** — Custom categories with auto-categorization based on merchant/keyword mapping
3. **Search & Filter** — Full-text search across merchants/items, multi-dimensional filtering (date, category, amount)
4. **Dashboard & Reports** — Spending summaries, charts (Recharts), period comparisons, category breakdowns
5. **Recurring Detection** — Identify recurring expenses (3+ receipts, same merchant, amounts within 10% tolerance)
6. **CSV Export** — Download receipt data for external analysis
7. **Telegram Bot** — Mobile receipt capture via Telegram with account linking (6-digit codes)

## Tech Stack
- **Frontend:** Next.js 15 (App Router), Tailwind CSS
- **Backend:** Next.js API Routes, Supabase (@supabase/supabase-js, @supabase/ssr)
- **Database & Auth:** Supabase (PostgreSQL + RLS, Auth with email/password + Google OAuth)
- **Storage:** Supabase Storage
- **OCR:** Google Cloud Vision API (TEXT_DETECTION)
- **Telegram Bot:** Raw Telegram Bot API (no framework)
- **Bot Hosting:** Google Cloud Run (Docker)
- **Web Hosting:** Vercel

## Out of Scope
- Multi-currency support
- Budgeting / goals
- Bank integration
- Native mobile app
- AI-based categorization (keyword/merchant mapping only)
