---
task: "02"
name: Database Schema & RLS
discipline: backend
status: To Do
priority: Highest
parent: ../STORY.md
---

# Task 02: Database Schema & RLS

## Description
Create SQL migration with categories, receipts, and receipt_items tables. Enable RLS on all tables with user-scoped policies. Seed default categories.

## Files
- `supabase/migrations/001_initial_schema.sql`

## Acceptance Criteria
- AC-3: Supabase migration creates receipts, receipt_items, and categories tables with RLS policies restricting access to owning user

## Verification
Run migration → verify tables exist → insert test row → confirm RLS blocks cross-user access
