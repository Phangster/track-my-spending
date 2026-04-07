---
task: "02"
name: Receipt UI (Upload, List, Detail)
discipline: frontend
status: To Do
priority: High
parent: ../STORY.md
---

# Task 02: Receipt UI (Upload, List, Detail)

## Description
Build upload component with drag-and-drop and file picker. Build /receipts/new page with OCR loading flow and pre-filled form. Build receipt form component with all fields and line item rows. Build /receipts list page with card grid. Build /receipts/[id] detail page with image and editable fields. Receipt card component.

## Files
- `src/app/(protected)/receipts/page.tsx`
- `src/app/(protected)/receipts/new/page.tsx`
- `src/app/(protected)/receipts/[id]/page.tsx`
- `src/components/receipt-upload.tsx`
- `src/components/receipt-form.tsx`
- `src/components/receipt-card.tsx`

## Acceptance Criteria
- AC-1: Image upload via drag-and-drop or file picker; stored in Supabase Storage
- AC-3: Pre-filled form with extracted data; user corrects and saves
- AC-4: Receipt list sorted by date with merchant, date, total, category
- AC-5: Receipt detail with image, editable fields, and line items

## Verification
Upload receipt image → OCR extracts → correct and save → appears in list → click to detail → edit and save
