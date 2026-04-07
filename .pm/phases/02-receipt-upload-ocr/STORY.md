---
phase: 02-receipt-upload-ocr
status: To Do
priority: High
---

# Phase 2: Receipt Upload & OCR

## Objective
Build the core receipt capture pipeline: upload an image, extract structured data via Google Cloud Vision OCR, save to database, and allow manual correction.

## Acceptance Criteria
- [ ] User can upload receipt image via drag-and-drop or file picker; stored in Supabase Storage
- [ ] OCR extracts merchant, date, total, tax, and line items with >70% accuracy on clear receipts
- [ ] Pre-filled form shows extracted data; user corrects and saves; receipt + items persisted
- [ ] Receipt list shows all receipts sorted by date with merchant, date, total, category
- [ ] Receipt detail shows image + editable fields + line items
- [ ] OCR parsing and API route tests pass

## Scope
- Image upload UI with drag-and-drop and file picker
- Supabase Storage integration for receipt images
- Google Cloud Vision OCR parsing (TEXT_DETECTION)
- Receipt creation from extracted data
- Receipt detail view with manual field correction

## Tasks
| # | Name | Discipline | Status |
|---|------|-----------|--------|
| 01 | Upload & OCR Pipeline | fullstack | To Do |
| 02 | Receipt UI (Upload, List, Detail) | frontend | To Do |
