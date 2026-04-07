---
phase: 03-categories-organization
status: To Do
priority: Medium
---

# Phase 3: Categories & Organization

## Objective
Enable users to manage custom categories with keyword-based auto-categorization, and find receipts through full-text search and multi-dimensional filtering.

## Acceptance Criteria
- [ ] Category CRUD works (create, edit, delete); deleting nulls associated receipts
- [ ] Auto-categorization matches merchant against category keywords on receipt save
- [ ] Search bar filters receipts by merchant/item names (debounced)
- [ ] Filters work: date range, category multi-select, amount range; combine with AND
- [ ] Tests pass

## Scope
- Category CRUD with name, icon, color, keywords
- Auto-categorization via keyword matching
- Full-text search across merchants and items
- Multi-dimensional filtering with URL state persistence

## Tasks
| # | Name | Discipline | Status |
|---|------|-----------|--------|
| 01 | Category Management & Auto-Categorization | fullstack | To Do |
| 02 | Search & Filter | fullstack | To Do |
