---
task: "02"
name: Deployment (Vercel + Cloud Run)
discipline: devops
status: To Do
priority: Low
parent: ../STORY.md
---

# Task 02: Deployment (Vercel + Cloud Run)

## Description
Create vercel.json if needed. Update next.config.ts for image domains. Create .env.example with all required vars documented. Deploy web app to Vercel with env vars. Create bot/cloudbuild.yaml for Cloud Build. Deploy bot to Cloud Run with webhook URL set. Verify end-to-end in production.

## Files
- `vercel.json`, `next.config.ts`, `.env.example`
- `bot/cloudbuild.yaml`, `bot/Dockerfile`

## Acceptance Criteria
- AC-4: Web app deployed to Vercel; production build runs
- AC-5: Bot deployed to Cloud Run; webhook responds
- AC-6: All secrets in env vars; .env.example complete

## Verification
Production URL loads; signup works; receipt upload works; Telegram bot responds
