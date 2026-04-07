---
task: "01"
name: Upload & OCR Pipeline
discipline: fullstack
status: To Do
priority: High
parent: ../STORY.md
---

# Task 01: Upload & OCR Pipeline

## Description
Create Supabase Storage bucket with RLS. Build storage helper for image upload. Build OCR API route calling Google Cloud Vision TEXT_DETECTION. Build field extraction logic to parse merchant, date, total, tax, and line items from raw OCR text. Build receipts CRUD API routes. Write tests with sample OCR text fixtures.

## Files
- `src/app/api/ocr/route.ts`
- `src/app/api/receipts/route.ts`, `src/app/api/receipts/[id]/route.ts`
- `src/lib/ocr/parse.ts`, `src/lib/ocr/extract-fields.ts`
- `src/lib/storage.ts`

## Acceptance Criteria
- AC-2: OCR extracts merchant, date, total, tax, line items with >70% accuracy
- AC-6: OCR parsing and API route tests pass

## Verification
`curl POST /api/ocr` with test image → returns extracted fields; `npm run test` passes
