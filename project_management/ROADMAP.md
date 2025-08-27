## LangChain Demo Roadmap

Goal: Build a small, reproducible demo that generates, saves, and serves AI-authored content with a simple CLI and optional web UI.

### Phase 0 — Setup and Baseline (Day 0)
- [ ] Confirm Python version and create virtual env
- [ ] Add `requirements.txt` with pinned versions
- [ ] Add `.env.example` and guardrails for missing `OPENAI_API_KEY`
- [ ] Make `main.py` runnable as a CLI (`python main.py --title ...`)

Acceptance: Running `python main.py --title "..."` creates a `.txt` in `outputs/`.

### Phase 1 — Content Generation Improvements
- [ ] Refine prompt template and parameters (temperature, tokens, model)
- [ ] Add support for outlines loaded from file (`--outline path.md`)
- [ ] Save metadata (prompt, params, timestamp) alongside output (JSON)
- [ ] Deterministic runs via seedable randomness where applicable

Acceptance: Each output has a corresponding JSON metadata file; configurable inputs.

### Phase 2 — Persistence and Project Structure
- [ ] Create `outputs/` directory, organized by date/title slug
- [ ] Implement filename slugging and collision-safe numbering
- [ ] Log run summaries to `outputs/index.csv`

Acceptance: Outputs are neatly organized and discoverable via index.

### Phase 3 — Simple API (Optional First UI)
- [ ] Add FastAPI with `/generate` endpoint mirroring CLI options
- [ ] Return streaming response and persist artifacts
- [ ] Basic `/health` endpoint

Acceptance: Local server generates and stores content; returns 200 with metadata.

### Phase 4 — Minimal Web UI (Optional)
- [ ] Static page to submit title/audience/tone
- [ ] Show recent generations from `outputs/index.csv`

Acceptance: Can generate from the browser and view recent items.

### Phase 5 — Quality, DX, and Ops
- [ ] Pre-commit hooks (formatting, linting)
- [ ] Simple tests for slugging, I/O, and CLI arg parsing
- [ ] Dockerfile and `docker-compose.yml` for API
- [ ] Short README with quickstart

Acceptance: Green lint/tests; container starts; quickstart works.

## Milestones and Dates (tentative)
- M0 (Phase 0): today + 0-1 day
- M1 (Phase 1): +1-2 days
- M2 (Phase 2): +1 day
- M3 (Phase 3): +2-3 days
- M4 (Phase 4): +2 days
- M5 (Phase 5): +1 day

## Risks / Notes
- API key handling and model costs
- Token limits vs. long outlines
- Windows path handling for outputs


