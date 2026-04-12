---
task: "02"
name: Database Schema & RLS
discipline: backend
status: Done
priority: Highest
parent: ../STORY.md
completed_at: 2026-04-08T15:45:00+08:00
commit_sha: d1a3b5e
tests_added: 10
tests_passing: 15
pr_url: https://github.com/Phangster/track-my-spending/pull/2
branch: pm/01-foundation-task-2
---

# Task 02: Database Schema & RLS

## Description
Create SQL migration with categories, receipts, and receipt_items tables. Enable RLS on all tables with user-scoped policies. Seed default categories via auth.users trigger.

## Files
- `supabase/migrations/001_initial_schema.sql`
- `supabase/migrations/__tests__/001_initial_schema.test.ts`

## Acceptance Criteria
- [x] AC-3: Migration creates receipts, receipt_items, and categories tables with RLS policies restricting access to owning user

## Verification
Run migration in Supabase SQL Editor → verify tables exist → sign up new user → 8 default categories seeded → confirm RLS blocks cross-user access
