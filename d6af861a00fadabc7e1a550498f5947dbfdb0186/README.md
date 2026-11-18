# trade-bot-dashboard: pumpdesk6 command center

The static dashboard for the **pumpdesk6 PAPER research desk**: six agents (GRAD, WHALES, SNIPER, ROUTER, EXEC, EXIT), a discovery feed, candidate evaluations with fill/no-fill reasons, PAPER books, charts, a journal, cost analysis and exit-policy comparisons.

- `index.html`, `assets/`: the dashboard (no build step). It reads `data/desk.json` and refreshes every 5 s.
- `data/desk.json`: the sanitized PAPER export (schema `pumpdesk6.desk-export` v1; see `docs/DATA_INTERFACE.md` and `schema/`). Commits come only from `pumpdesk6/scripts/publish.mjs`.
- `legacy/`: **REAL-MONEY HISTORY, read-only.** This holds the original dashboard and the retired V1/V2 trades with Solscan links. It is kept strictly separate from PAPER results; see `legacy/README.md`.
- `tools/validate-desk.mjs`: run `node tools/validate-desk.mjs data/desk.json` from this directory.

**Everything outside `legacy/` is simulated. No balance, fill or P&L outside `legacy/` is real.** Live trading is OFF and needs separate explicit authorization.

## Hosting (unlisted)
- GitHub Pages serves this repo from `main` at the root. The site root (`/index.html`, `/404.html`) is a deliberately blank page and links to nothing. `/robots.txt` disallows all crawling. Every page in this directory has `noindex,nofollow,noarchive` and `referrer: no-referrer`.
- The dashboard lives only in this randomly named directory: 160-bit hex, from `crypto.randomBytes`. **Don't link to it from the root, robots.txt, a sitemap, or anywhere public.** The name is stored locally in `pumpdesk6/.dashboard_path`, which is gitignored and mode 600.
- *Unlisted* is not *private*: anyone holding the URL can open it, and Pages on this plan is public to anyone with the link. Collaborators on this private repo can see the directory name in the file tree.

Local view: `python3 -m http.server 8765 --bind 127.0.0.1` at the repo root, then open `http://127.0.0.1:8765/<this-directory>/`.
