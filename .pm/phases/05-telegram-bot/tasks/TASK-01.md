---
task: "01"
name: Account Linking & Bot Core
discipline: fullstack
status: To Do
priority: Medium
parent: ../STORY.md
---

# Task 01: Account Linking & Bot Core

## Description
Create migration for telegram_links and link_codes tables. Build web-side link code API. Build Settings page with Telegram linking UI and countdown timer. Build bot entry point (Express webhook server). Build Telegram API helper (raw fetch). Build /start, /link, /recent, /help command handlers.

## Files
- `supabase/migrations/002_telegram_linking.sql`
- `src/app/api/telegram/link/route.ts`
- `src/app/(protected)/settings/page.tsx`, `src/components/telegram-link.tsx`
- `bot/main.ts`, `bot/handlers/start.ts`, `bot/handlers/link.ts`, `bot/handlers/recent.ts`
- `bot/lib/telegram.ts`

## Acceptance Criteria
- AC-1: Account linking via 6-digit code works end-to-end
- AC-3: Bot commands /start /link /recent /help all work
- AC-5: Tests pass

## Verification
Generate code in web → /link in Telegram → confirmed → /recent shows receipts
