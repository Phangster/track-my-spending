---
task: "01"
name: Dashboard & Charts
discipline: fullstack
status: To Do
priority: Medium
parent: ../STORY.md
---

# Task 01: Dashboard & Charts

## Description
Install recharts. Build dashboard API route with period-based aggregation. Build period selector (presets + custom range). Summary cards (total, count, average). Category breakdown chart (PieChart/BarChart) with click navigation. Spending trend chart (LineChart) with granularity adjustment. Period comparison with delta percentages.

## Files
- `src/app/(protected)/dashboard/page.tsx`
- `src/app/api/dashboard/route.ts`
- `src/components/summary-cards.tsx`, `src/components/spending-chart.tsx`
- `src/components/category-breakdown.tsx`, `src/components/period-selector.tsx`

## Acceptance Criteria
- AC-1: Summary cards show correct values for selected period
- AC-2: Category breakdown chart renders and navigates on click
- AC-3: Spending trend chart shows correct timeline
- AC-4: Period comparison shows correct deltas

## Verification
Add receipts across dates/categories → dashboard shows correct totals → charts render → period change updates all
