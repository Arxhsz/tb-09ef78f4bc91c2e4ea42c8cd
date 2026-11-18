# pumpdesk6 ↔ dashboard data interface

**Schema id:** `pumpdesk6.desk-export` · **version:** `1.0.0` (semver) · **file:** `schema/desk-export.v1.schema.json` (JSON Schema draft 2020-12 subset)
**Producer:** `pumpdesk6/src/export.mjs` (every 5 s while the desk runs) · **Consumer:** `trade-bot-dashboard/<dashboard-dir>/index.html` + `assets/app.js`
**Published file:** `<dashboard-dir>/data/desk.json` in the dashboard repo. This is the only file the publisher may commit. `<dashboard-dir>` is the unlisted random-hex directory. Its name is stored only in `pumpdesk6/.dashboard_path`, which is gitignored and mode 600, and it is never hard-coded or logged. The running desk also refreshes that file every 5 s in the local checkout.

## Versioning
- Patch: doc or description changes only. Minor: new optional fields; old consumers keep working. Major: renamed, removed or retyped fields, which needs a new schema file `desk-export.v2.schema.json`.
- `schema` and `schema_version` are the first two fields of every export; the dashboard prints them in the header.

## Guarantees enforced by the schema and the publisher
- `mode` is the constant `"PAPER"` and `live_trading_enabled` is the constant `false`. The publisher refuses anything else.
- Every balance in `books.*` is simulated (`books.*.mode = "PAPER"`). The wallet-equivalent book only *starts* from the real wallet balance (0.021644109 SOL at 2026-11-17); it is never synced back and never shown as a real balance.
- Real-money history never appears in this file. It lives only in `legacy/` (`legacy/legacy.json`, kind `REAL_MONEY_HISTORY`).
- Sanitization (`src/lib/sanitize.mjs`) drops keys matching secret/private/mnemonic/seed/password/api-key/credential/cookie/session/keypair/signer, redacts secret env values and `api-key=` URL params, and **aborts** on a valid ed25519 secret key (base58), a 64-byte int array, or a PEM private key. The publisher runs a second, text-level scan on the exact bytes it commits.

## Top-level fields
| field | type | meaning |
|---|---|---|
| `generated_at_ms` / `generated_at_et` | int / string | export time (epoch ms; America/New_York display) |
| `params_version` | string | frozen strategy parameters id (`v0-2026-11-17`) |
| `desk_started_ms` | int | start of current desk process |
| `paused_reason` | string\|null | set by the feed watchdog when a feed is stale; agents stop opening positions |
| `feeds.{solana_ws,pumpportal_ws}` | object | `msgs, connects, errors, last_msg_ms, age_s, fresh` |
| `feeds.{helius_http,public_rpc}` | object | `ok, err, last_ok, last_err` (error text redacted) |
| `agents.{GRAD,WHALES,SNIPER,ROUTER,EXEC,EXIT}` | object | `name, role, state, last_activity_ms, age_s, fresh, freshness_limit_s, summary` |
| `books.{real,research}` | object | PAPER book: `start_sol, cash_sol, equity_sol, realized_sol, return_pct, trades, wins, losses, max_drawdown_pct, fees_sol{venue,network,failed_tx}, day_pnl_sol, paused_reason, equity_curve[[ms,sol]]` |
| `grad` | object | `counts`, `phases`, `curves[]` (top bonding curves with `completion_pct, liq_sol, price_sol, flow60`), `graduated[]`, `graduation_events[]`, `discoveries[]` |
| `whales` | object | `wallets_tracked, proven_count, criteria, proven[], activity[], signals[], note`. On-chain evidence only. |
| `sniper` | object | `counts{scans,independent_opportunities,vetoed,passed,veto_reasons}`, `setups`, `vetoes` (frozen thresholds) |
| `router` | object | `quotes, errors, recent[]` (`venue, size_sol, fee_bps, impact_pct, adverse_pct, rt_cost_pct`), `cost_model` |
| `exec` | object | `counts{fills,no_fills,reject_reasons,no_fill_reasons}`, `risk_limits`, `pending_orders[]`, `decisions[]` |
| `exit` | object | `policies`, `primary`, `open[]` (with `ret_pct, peak_pct, held_s, exit_pending`) |
| `opportunities[]` | array | one row per independent mint+setup episode: `features, vetoes, safety, disposition ∈ {VETOED, PASSED_NOT_ORDERED, ORDER_PENDING, NO_FILL, FILLED}, reason, books{real,research}` |
| `opportunity_stats` | object | totals by setup × disposition |
| `performance` | object | grouped stats (`n, wins, losses, net_sol, expectancy_pct, avg_win_pct, avg_loss_pct, profit_factor, max_drawdown_sol, fees_and_network_sol, avg_exit_shortfall_pct`) by book, exit policy, setup, whale confirmation, ET period, X signal |
| `trades[]` | array | closed simulated positions: entry/exit, `pnl_sol, pnl_pct` (net of all modeled costs), `costs`, `mfe, mae, exit_reason` |
| `journal[]` | array | timestamped agent events |
| `validation` | object | frozen-params id, target sample (100 independent closed trades), holdout rule |
| `storage`, `health` | object | raw-log size, process RSS and uptime (no paths to secrets) |

## Freshness
An agent is `fresh` when `age_s ≤ freshness_limit_s` (GRAD/WHALES/SNIPER 15 s, ROUTER 90 s, EXEC/EXIT 10 s). The dashboard shows the export as STALE when `generated_at_ms` is older than 30 s, which is expected for a published snapshot.

## Tools
- Validate: `node scripts/validate_export.mjs [file]` in pumpdesk6, or `node tools/validate-desk.mjs [file]` inside `<dashboard-dir>`.
- Publish: `node scripts/publish.mjs [--no-push] [--branch command-center]` in pumpdesk6. It writes `<dashboard-dir>/data/desk.json`, commits only that file, and pushes non-force. Pages serves `main`, so fast-forward `main` to `command-center` after verifying.
