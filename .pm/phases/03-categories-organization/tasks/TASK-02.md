---
task: "02"
name: Search & Filter
discipline: fullstack
status: To Do
priority: Medium
parent: ../STORY.md
---

# Task 02: Search & Filter

## Description
Add search parameter to receipts API using ilike on merchant/items. Build search bar component with debounce. Add filter parameters (date_from, date_to, category_ids, amount_min, amount_max). Build filter panel with date range, category multi-select, amount range inputs. Persist filters in URL query params. Empty state for no results.

## Files
- `src/app/(protected)/receipts/page.tsx`
- `src/app/api/receipts/route.ts`
- `src/components/receipt-filters.tsx`
- `src/components/search-bar.tsx`

## Acceptance Criteria
- AC-3: Search filters receipts by merchant and item names
- AC-4: Date range, category, and amount filters work individually and combined

## Verification
Add 5+ receipts → search by merchant → filters narrow results → combine search + filter
