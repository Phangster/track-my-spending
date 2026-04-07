---
task: "03"
name: Protected Layout & Navigation Shell
discipline: frontend
status: To Do
priority: Highest
parent: ../STORY.md
---

# Task 03: Protected Layout & Navigation Shell

## Description
Create (protected) route group with server-side session check. Build sidebar component with nav links (Dashboard, Receipts, Categories, Settings), user email display, and sign-out button. Dashboard placeholder page. Responsive sidebar with hamburger on mobile. Tests for middleware redirect and sidebar rendering.

## Files
- `src/app/(protected)/layout.tsx`
- `src/app/(protected)/dashboard/page.tsx`
- `src/components/sidebar.tsx`

## Acceptance Criteria
- AC-4: Unauthenticated users redirected to /login; authenticated users see sidebar navigation
- AC-5: `npm run test` passes with coverage of auth flows and middleware

## Verification
`npm run test` passes; unauthenticated visit to `/dashboard` redirects to `/login`
