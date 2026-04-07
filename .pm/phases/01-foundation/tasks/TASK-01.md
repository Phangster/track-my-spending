---
task: "01"
name: Project Scaffolding & Supabase Auth
discipline: fullstack
status: In Progress
priority: Highest
parent: ../STORY.md
---

# Task 01: Project Scaffolding & Supabase Auth

## Description
Initialize Next.js 15 with App Router, TypeScript, Tailwind CSS. Install Supabase packages and test tooling. Create Supabase client helpers (browser, server, middleware). Build auth pages (login, signup, OAuth callback). Root page redirects based on auth state. Middleware protects routes and refreshes sessions.

## Files
- `package.json`, `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, `vitest.config.ts`
- `src/lib/supabase/client.ts`, `src/lib/supabase/server.ts`, `src/lib/supabase/middleware.ts`
- `src/middleware.ts`
- `src/app/(auth)/login/page.tsx`, `src/app/(auth)/signup/page.tsx`, `src/app/(auth)/callback/route.ts`
- `src/app/layout.tsx`, `src/app/page.tsx`

## Acceptance Criteria
- AC-1: `npm run dev` starts without errors
- AC-2: Email/password signup and login work; Google OAuth redirects and completes; sessions persist

## Verification
`npm run dev` → navigate to `/login` → sign up → redirected to `/dashboard`
