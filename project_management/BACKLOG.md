## Backlog (Prioritized)

Legend: `[ ]` todo, `[x]` done, `(P1)` priority 1, `(P2)` priority 2

### Immediate
- [ ] (P1) Create `requirements.txt` with `langchain`, `openai`, `python-dotenv`, `typer`, `fastapi[all]` (future), `pydantic`
- [ ] (P1) Add `.env.example` and check for `OPENAI_API_KEY` in `main.py`
- [ ] (P1) Convert `main.py` to a CLI with `typer` (flags: `--title`, `--audience`, `--tone`, `--outline`)
- [ ] (P1) Save outputs to `outputs/YYYY-MM-DD/<slug>/article.txt`
- [ ] (P1) Save `meta.json` with prompt, params, and filename paths

### Near Term
- [ ] (P2) Implement slugging util with collision-safe numbering
- [ ] (P2) Add `outputs/index.csv` with columns: timestamp, title, slug, path, tokens
- [ ] (P2) Add unit tests for slugging and I/O
- [ ] (P2) Add FastAPI app with `/health` and `/generate`

### Later / Nice-to-Have
- [ ] (P3) Web UI form posting to API; recent outputs list
- [ ] (P3) Dockerfile and compose for API + UI
- [ ] (P3) Streaming token updates in API

## Notes / Decisions
- Use Windows-friendly paths via `pathlib`.
- Prefer environment variables over hardcoding settings.


