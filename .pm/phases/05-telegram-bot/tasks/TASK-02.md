---
task: "02"
name: Photo Receipt Processing & Docker
discipline: fullstack
status: To Do
priority: Medium
parent: ../STORY.md
---

# Task 02: Photo Receipt Processing & Docker

## Description
Build photo handler: download photo via Telegram getFile, run OCR extraction, upload to Supabase Storage, create receipt record, reply with summary. Handle errors (unlinked user, OCR failure). Build Dockerfile for Cloud Run. Add docker-compose.yml for local dev.

## Files
- `bot/handlers/photo.ts`
- `bot/lib/ocr.ts`
- `bot/Dockerfile`

## Acceptance Criteria
- AC-2: Photo → OCR → receipt created → bot replies with merchant/total
- AC-4: Docker build and run works locally

## Verification
Send receipt photo to bot → bot replies with extracted data → receipt appears in web app
