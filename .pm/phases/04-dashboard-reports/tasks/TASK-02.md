---
task: "02"
name: Recurring Detection & CSV Export
discipline: fullstack
status: To Do
priority: Medium
parent: ../STORY.md
---

# Task 02: Recurring Detection & CSV Export

## Description
Build recurring detection logic: group by merchant, filter 3+ receipts, check 10% amount tolerance, calculate frequency. Build recurring API route and display component. Build CSV export route accepting filter params. Add export button to receipt list. Write tests for recurring detection edge cases.

## Files
- `src/app/api/receipts/recurring/route.ts`
- `src/app/api/receipts/export/route.ts`
- `src/components/recurring-expenses.tsx`
- `src/lib/recurring.ts`

## Acceptance Criteria
- AC-5: Recurring expenses detected correctly
- AC-6: CSV export downloads with correct data and headers
- AC-7: Tests pass

## Verification
Create 4 receipts same merchant similar amounts → recurring detected; export → CSV correct
