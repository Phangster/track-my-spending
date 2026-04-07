---
task: "01"
name: UX Polish (Error Handling, Loading, Responsive)
discipline: frontend
status: To Do
priority: Low
parent: ../STORY.md
---

# Task 01: UX Polish (Error Handling, Loading, Responsive)

## Description
Add error.tsx at app root and protected route group. Add loading.tsx with skeleton UIs. Build reusable empty-state and loading skeleton components. Audit all pages for responsive issues at 375px/768px/1024px/1440px. Fix sidebar mobile behavior. Ensure forms are single-column on mobile. Add toast notifications for actions.

## Files
- `src/app/error.tsx`, `src/app/(protected)/layout.tsx`
- `src/components/loading.tsx`, `src/components/empty-state.tsx`, `src/components/error-boundary.tsx`
- `src/components/sidebar.tsx`

## Acceptance Criteria
- AC-1: Error boundaries catch and display errors
- AC-2: Loading skeletons and empty states on all data pages
- AC-3: All pages work at 375px+ width

## Verification
Resize to 375px → all pages usable; simulate error → boundary catches; empty DB → empty states render
