## LangChain Demo (Python + TypeScript)

This repository contains the same demo implemented in both Python and TypeScript to compare ecosystem support and ergonomics.

### Structure
- `python/` — Python implementation
- `typescript/` — TypeScript/Node.js implementation
- `project_management/` — roadmap, backlog, and planning docs
- `outputs/` — shared place for generated artifacts (TS uses this by default)

### Quickstart

Python:
1. `cd python`
2. `python -m venv .venv && . .venv/Scripts/activate` (PowerShell: `.venv\\Scripts\\Activate.ps1`)
3. `pip install -r requirements.txt`
4. Copy `.env.example` to `.env` and set `OPENAI_API_KEY`
5. `python main.py`

TypeScript:
1. `cd typescript`
2. `npm install`
3. Copy `.env.example` to `.env` and set `OPENAI_API_KEY`
4. `npm run dev -- --title "Creating an Angular Web App in 2023"`


