# legacy/ — REAL-MONEY HISTORY (read-only)

These files are the **real on-chain trading history** of the retired Smart Money Hunter V1/V2 system
(Phantom agent wallet `Dxm9TpkK3HWbvBjrqeSX5h1XT2ZrxRR39FegFKHtSinx`, Nov 10–11, 2026).

- `dashboard-v1/`: the original dashboard as it was on `main`, moved with `git mv` so history is kept. `index.html.original` and `data.json` are the **unchanged originals**. The `.original` name stops Pages from rendering it. `index.html` is a *copy* of it with only two edits: noindex/no-referrer meta tags, and `DATA_URL` pointed at `../data-branch/data.json`, because the old raw.githubusercontent URL doesn't work on a private repo.
- `data-branch/data.json` — the last snapshot from the `data` branch (the branch itself is untouched).
- `journals/` — trade journals exported from the read-only archive `/workspace/archive/old-trading-system-2026-11-17/` (secret-scanned):
  `LIVE_TX_SIGNATURES.csv` (69 unique signatures), `v2_live_round_trips.csv` (29 completed trades), `v2_live_fills.csv` (41 fills), `v1_live_journal.csv`, `v2_eval_report.md`.
- `legacy.json` — machine-readable summary built by `pumpdesk6/scripts/build_legacy.mjs` (totals, per-strategy performance, Solscan links).

Byte-identical sources (verified with sha256 on 2026-11-17): `LIVE_TX_SIGNATURES.csv` = archive `LIVE_TX_SIGNATURES.csv`; `v1_live_journal.csv` = `smart-money-hunter/journal.csv`;
`v2_live_fills.csv` = `smart-money-hunter/v2/trade_journal.csv`; `v2_live_round_trips.csv` = `smart-money-hunter/v2/v2_journal.csv`; `v2_eval_report.md` = `smart-money-hunter/v2/eval_report.md`.
`dashboard-v1/index.html.original`, `dashboard-v1/data.json` and `data-branch/data.json` are byte-identical to `main:index.html`, `main:data.json` and `data:data.json` in the backup bundle.
Files are `chmod a-w` in the working checkout. Git does not store that mode, so after a fresh clone run `chmod -R a-w legacy/`.

Rules: do not edit these files; never mix them with PAPER results from pumpdesk6 (`data/desk.json`).
Realized P&L of the 29 completed real trades: -0.078706191 SOL (-$6.58), modeled costs 0.048889418 SOL.
