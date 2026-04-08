---
phase: 01-foundation
status: In Progress
priority: Highest
---

# Phase 1: Foundation

## Objective
Scaffold the Next.js 15 application with Supabase authentication and database schema, delivering a working auth flow and protected app shell.

## Acceptance Criteria
- [ ] Next.js 15 runs locally with TypeScript, Tailwind CSS, and App Router
- [ ] Email/password signup and login work; Google OAuth completes; sessions persist
- [ ] Database migration creates receipts, receipt_items, categories with RLS
- [ ] Unauthenticated users redirected to /login; authenticated users see sidebar navigation
- [ ] All tests pass

## Scope
- Next.js 15 setup (App Router, TypeScript, Tailwind CSS)
- Supabase auth (email/password + Google OAuth)
- Database schema with RLS policies
- Protected layout shell with sidebar navigation
- Auth middleware for session refresh and route protection

## Tasks
| # | Name | Discipline | Status |
|---|------|-----------|--------|
| 01 | Project Scaffolding & Supabase Auth | fullstack | Done |
| 02 | Database Schema & RLS | backend | To Do |
| 03 | Protected Layout & Navigation Shell | frontend | To Do |
