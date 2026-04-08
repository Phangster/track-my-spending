---
task: "01"
name: Project Scaffolding & Supabase Auth
discipline: fullstack
status: Done
priority: Highest
parent: ../STORY.md
completed_at: 2026-04-08T00:50:00+08:00
commit_sha: 0e2f8ab
tests_added: 5
tests_passing: 5
pr_url: https://github.com/Phangster/track-my-spending/pull/1
branch: pm/01-foundation-task-1
---

# Task 01: Project Scaffolding & Supabase Auth

## Description
Initialize Next.js 15 with App Router, TypeScript, Tailwind CSS. Install Supabase packages and test tooling. Create Supabase client helpers (browser, server, middleware). Build auth pages (login, signup, OAuth callback). Root page redirects based on auth state. Middleware protects routes and refreshes sessions.

## Files
- `package.json`, `next.config.ts`, `postcss.config.mjs`, `tsconfig.json`, `vitest.config.ts`
- `src/lib/supabase/client.ts`, `src/lib/supabase/server.ts`, `src/lib/supabase/middleware.ts`, `src/lib/supabase/middleware-helpers.ts`
- `src/middleware.ts`
- `src/app/(auth)/login/page.tsx`, `src/app/(auth)/signup/page.tsx`, `src/app/auth/callback/route.ts`
- `src/app/layout.tsx`, `src/app/globals.css`, `src/app/page.tsx`

## Acceptance Criteria
- [x] AC-1: `npm run dev` starts without errors
- [x] AC-2: Email/password signup and login work; Google OAuth redirects and completes; sessions persist

## Verification
`npm run dev` → navigate to `/login` → sign up → redirected to `/dashboard`
