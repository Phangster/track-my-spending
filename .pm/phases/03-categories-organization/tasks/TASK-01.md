---
task: "01"
name: Category Management & Auto-Categorization
discipline: fullstack
status: To Do
priority: Medium
parent: ../STORY.md
---

# Task 01: Category Management & Auto-Categorization

## Description
Build categories API routes (CRUD). Build /categories page with colored badges, inline add/edit form, delete with confirmation. Category form with name, color picker, icon, keywords input. Build auto-categorization logic matching merchant against keyword substrings. Hook into receipt creation.

## Files
- `src/app/(protected)/categories/page.tsx`
- `src/app/api/categories/route.ts`, `src/app/api/categories/[id]/route.ts`
- `src/components/category-form.tsx`, `src/components/category-badge.tsx`
- `src/lib/categorize.ts`

## Acceptance Criteria
- AC-1: Category CRUD works; delete nulls associated receipts
- AC-2: Auto-categorization assigns correct category on receipt save
- AC-5: Tests pass

## Verification
Create category "Groceries" with keyword "fairprice" → upload FairPrice receipt → auto-categorized
