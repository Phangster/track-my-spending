---
phase: 05-telegram-bot
status: To Do
priority: Medium
---

# Phase 5: Telegram Bot

## Objective
Build a Telegram bot that lets users photograph receipts from their phone, link to their web account, and process receipts through the existing OCR pipeline.

## Acceptance Criteria
- [ ] Account linking via 6-digit code (generated in web, sent to bot, expires 10min)
- [ ] Photo sent to bot → OCR → receipt created → bot replies with merchant/total
- [ ] Bot commands: /start, /link, /recent, /help all work
- [ ] Bot runs in Docker container with webhook endpoint
- [ ] Tests pass

## Scope
- Telegram Bot setup (raw API)
- Account linking flow (6-digit codes)
- Photo receipt processing (reuses OCR pipeline)
- Cloud Run Dockerfile and webhook endpoint
- Bot commands

## Tasks
| # | Name | Discipline | Status |
|---|------|-----------|--------|
| 01 | Account Linking & Bot Core | fullstack | To Do |
| 02 | Photo Receipt Processing & Docker | fullstack | To Do |
