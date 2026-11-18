# Paper strategy evaluation — 01:19 PM ET Nov 17 (PAPER, no changes applied)

## research book trades: n=0
## real book trades: n=0

## Missed opportunities (shadow, research size, 1-3s fill delay): n=4050
- labels: {'no_fill': 2731, 'correct_reject': 765, 'too_restrictive': 542, 'marginal': 9, 'unknown': 3}
- missed profitable: 542 · correctly rejected losers: 765 · no-fill rate: 0.674
- est. net return (filled): {'n': 1316, 'mean': -7.6921, 'median': -5.22, 'win_rate': 0.419, 'avg_win': 19.4623, 'avg_loss': -27.2504, 'profit_factor': 0.514, 'max_drawdown': 10728.73, 'sum': -10122.85}

## Gate blocks (signals)
- scout.sustained_intervals: blocks 9289 · first 3426 · only 0
- chart.no_setup: blocks 6394 · first 663 · only 406
- chart.seller_sol_share: blocks 5437 · first 1651 · only 6
- chart.setup_forming: blocks 5237 · first 736 · only 600
- chart.no_verdict: blocks 4287 · first 72 · only 72
- scout.flag_top_wallet: blocks 3906 · first 268 · only 0
- scout.min_net_sol: blocks 3844 · first 2052 · only 0
- scout.min_funded_buyers: blocks 2979 · first 2102 · only 0
- skeptic.exit_impact: blocks 2874 · first 0 · only 0
- scout.buyers_falling: blocks 2840 · first 942 · only 0
- scout.flag_bundle_slot: blocks 2696 · first 91 · only 0
- skeptic.top3_concentration: blocks 2633 · first 1 · only 1
- scout.age_window: blocks 2594 · first 2594 · only 0
- scout.prior_runup: blocks 2368 · first 456 · only 0
- skeptic.top_wallet: blocks 1915 · first 0 · only 0
- skeptic.wash_churn: blocks 1628 · first 0 · only 0
- chart.vertical_15s: blocks 1547 · first 413 · only 0
- skeptic.insider_selling: blocks 1315 · first 0 · only 0
- scout.flag_vamp: blocks 1265 · first 124 · only 0
- skeptic.coordinated_bundle: blocks 1141 · first 0 · only 0

## Recommendations (none applied automatically)
- : no change recommended: not enough evidence yet (need >= 30 only-blocker shadow outcomes in both the train and the 30% holdout split per gate)

# V2.2 strategy validation (PAPER/shadow, research book 1 SOL hypothetical, nothing applied)

Unique research events: 369 finished + 0 open (split {'OOS': 228, 'IS': 141}; regime {'warmup': 91, 'low_activity': 45, 'high_activity': 173, 'mid_activity': 60}). one research event per (mint, setup episode): an episode starts at the first Scout-stage pass and lasts 15 min; repeated ~1s evaluations inside it are not counted again.
Initial baseline decisions: {'VETO': 74, 'NO_TRADE': 269, 'WAIT': 11, 'REJECT': 15}. Split rule: even ET hour = in-sample, odd ET hour = out-of-sample (pre-registered). Minimum sample: 30 unique-event trades per arm per split.

## Economic viability gate (per book)
- real: viable 0/171790 checks · {'fixed_cost_exceeds_risk_budget': 171790} · latest: fixed round-trip costs 0.000172 SOL (2 tx network+priority+tip) >= the 0.5% risk budget 0.000108 SOL, so no size can respect the risk limit (fixed costs alone = 15.9% of the max 0.001082 SOL position; the 0.00151 SOL token-account deposit is also 1.4x the max position)
- research: viable 171149/171790 checks · {'costs_feasible': 170133, 'target_below_costs': 640, 'viable': 1016, 'no_quote': 1} · latest: at 0.050000 SOL a trade needs > 3.80% net move (fixed 0.34%, impact 0.00%/0.00%, fees 1.50%, slippage 2%); no Chart target yet

## Executability of unique events (research size, 1-3s delay)
- executable 183/369 · not executable: {'liquidity 3.4 SOL < 20.0': 4, 'liquidity 8.3 SOL < 20.0': 4, 'liquidity 1.9 SOL < 20.0': 4, 'liquidity 11.3 SOL < 20.0': 4, 'liquidity 5.7 SOL < 20.0': 3, 'liquidity 11.6 SOL < 20.0': 3} · real book: never (the real book is never executable: fixed costs exceed its 0.5% risk budget (econ gate))
- rejected by baseline but executable and > +2% net (reference trade): 67 · their ref net %: {'n': 180, 'mean': -10.6944, 'median': -14.565, 'win_rate': 0.389, 'avg_win': 15.8817, 'avg_loss': -27.6065, 'profit_factor': 0.366, 'max_drawdown': 1933.74, 'sum': -1925.0}

## Variants vs baseline (simulated research-book trades, after all costs; one trade per unique event)

| arm | variable | split | events | trades | no-fill | exp SOL/trade | exp % | PF | payoff | max DD SOL | costs SOL | false pos | missed profitable exec |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| baseline | none | IS | 141 | 0 | 1 | - | - | - | - | - | - | - | 25 |
| baseline | none | OOS | 228 | 1 | 1 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 1 | 42 |
| baseline | none | all | 369 | 1 | 2 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 1 | 67 |
| window_30s | momentum_window | IS | 141 | 0 | 1 | - | - | - | - | - | - | - | 25 |
| window_30s | momentum_window | OOS | 228 | 1 | 0 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 1 | 42 |
| window_30s | momentum_window | all | 369 | 1 | 1 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 1 | 67 |
| window_120s | momentum_window | IS | 141 | 0 | 0 | - | - | - | - | - | - | - | 26 |
| window_120s | momentum_window | OOS | 228 | 1 | 0 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 1 | 42 |
| window_120s | momentum_window | all | 369 | 1 | 0 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 1 | 68 |
| entry_breakout | entry_timing | IS | 141 | 0 | 1 | - | - | - | - | - | - | - | 25 |
| entry_breakout | entry_timing | OOS | 228 | 1 | 1 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 1 | 42 |
| entry_breakout | entry_timing | all | 369 | 1 | 2 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 1 | 67 |
| retest_range_2m | retest_window | IS | 141 | 0 | 0 | - | - | - | - | - | - | - | 26 |
| retest_range_2m | retest_window | OOS | 228 | 0 | 0 | - | - | - | - | - | - | - | 42 |
| retest_range_2m | retest_window | all | 369 | 0 | 0 | - | - | - | - | - | - | - | 68 |
| retest_range_5m | retest_window | IS | 141 | 0 | 0 | - | - | - | - | - | - | - | 26 |
| retest_range_5m | retest_window | OOS | 228 | 0 | 0 | - | - | - | - | - | - | - | 42 |
| retest_range_5m | retest_window | all | 369 | 0 | 0 | - | - | - | - | - | - | - | 68 |
| buyers_4 | min_buyers | IS | 141 | 0 | 1 | - | - | - | - | - | - | - | 25 |
| buyers_4 | min_buyers | OOS | 228 | 1 | 1 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 1 | 42 |
| buyers_4 | min_buyers | all | 369 | 1 | 2 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 1 | 67 |
| buyers_10 | min_buyers | IS | 141 | 0 | 1 | - | - | - | - | - | - | - | 25 |
| buyers_10 | min_buyers | OOS | 228 | 0 | 1 | - | - | - | - | - | - | - | 42 |
| buyers_10 | min_buyers | all | 369 | 0 | 2 | - | - | - | - | - | - | - | 67 |
| persist_2of4 | inflow_persistence | IS | 141 | 0 | 1 | - | - | - | - | - | - | - | 25 |
| persist_2of4 | inflow_persistence | OOS | 228 | 1 | 1 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 1 | 42 |
| persist_2of4 | inflow_persistence | all | 369 | 1 | 2 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 1 | 67 |
| persist_4of4 | inflow_persistence | IS | 141 | 0 | 0 | - | - | - | - | - | - | - | 26 |
| persist_4of4 | inflow_persistence | OOS | 228 | 0 | 0 | - | - | - | - | - | - | - | 42 |
| persist_4of4 | inflow_persistence | all | 369 | 0 | 0 | - | - | - | - | - | - | - | 68 |
| runup_100 | runup_exclusion | IS | 141 | 0 | 1 | - | - | - | - | - | - | - | 25 |
| runup_100 | runup_exclusion | OOS | 228 | 1 | 1 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 1 | 42 |
| runup_100 | runup_exclusion | all | 369 | 1 | 2 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 1 | 67 |
| runup_250 | runup_exclusion | IS | 141 | 0 | 1 | - | - | - | - | - | - | - | 25 |
| runup_250 | runup_exclusion | OOS | 228 | 1 | 1 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 1 | 42 |
| runup_250 | runup_exclusion | all | 369 | 1 | 2 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 1 | 67 |
| liq_impact_1pct | size_aware_liquidity | IS | 141 | 0 | 1 | - | - | - | - | - | - | - | 25 |
| liq_impact_1pct | size_aware_liquidity | OOS | 228 | 1 | 1 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 1 | 42 |
| liq_impact_1pct | size_aware_liquidity | all | 369 | 1 | 2 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 1 | 67 |
| liq_impact_0_5pct | size_aware_liquidity | IS | 141 | 0 | 1 | - | - | - | - | - | - | - | 25 |
| liq_impact_0_5pct | size_aware_liquidity | OOS | 228 | 1 | 1 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 1 | 42 |
| liq_impact_0_5pct | size_aware_liquidity | all | 369 | 1 | 2 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 1 | 67 |
| x_confirmed_only | x_vs_onchain | IS | 141 | 0 | 1 | - | - | - | - | - | - | - | 25 |
| x_confirmed_only | x_vs_onchain | OOS | 228 | 0 | 0 | - | - | - | - | - | - | - | 42 |
| x_confirmed_only | x_vs_onchain | all | 369 | 0 | 1 | - | - | - | - | - | - | - | 67 |
| onchain_only | x_vs_onchain | IS | 141 | 0 | 0 | - | - | - | - | - | - | - | 26 |
| onchain_only | x_vs_onchain | OOS | 228 | 1 | 1 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 1 | 42 |
| onchain_only | x_vs_onchain | all | 369 | 1 | 1 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 1 | 68 |
| v23_E_audited | audit_gate | IS | 141 | 0 | 0 | - | - | - | - | - | - | - | 26 |
| v23_E_audited | audit_gate | OOS | 228 | 0 | 0 | - | - | - | - | - | - | - | 42 |
| v23_E_audited | audit_gate | all | 369 | 0 | 0 | - | - | - | - | - | - | - | 68 |
| v23_A_early | channel | IS | 141 | 0 | 0 | - | - | - | - | - | - | - | 26 |
| v23_A_early | channel | OOS | 228 | 0 | 0 | - | - | - | - | - | - | - | 42 |
| v23_A_early | channel | all | 369 | 0 | 0 | - | - | - | - | - | - | - | 68 |
| v23_A_imperfect_retest | retest_strictness | IS | 141 | 0 | 0 | - | - | - | - | - | - | - | 26 |
| v23_A_imperfect_retest | retest_strictness | OOS | 228 | 0 | 0 | - | - | - | - | - | - | - | 42 |
| v23_A_imperfect_retest | retest_strictness | all | 369 | 0 | 0 | - | - | - | - | - | - | - | 68 |
| v23_B_postgrad_w120 | postgrad_window | IS | 141 | 0 | 0 | - | - | - | - | - | - | - | 26 |
| v23_B_postgrad_w120 | postgrad_window | OOS | 228 | 0 | 0 | - | - | - | - | - | - | - | 42 |
| v23_B_postgrad_w120 | postgrad_window | all | 369 | 0 | 0 | - | - | - | - | - | - | - | 68 |
| v23_B_postgrad_w300 | postgrad_window | IS | 141 | 0 | 0 | - | - | - | - | - | - | - | 26 |
| v23_B_postgrad_w300 | postgrad_window | OOS | 228 | 0 | 0 | - | - | - | - | - | - | - | 42 |
| v23_B_postgrad_w300 | postgrad_window | all | 369 | 0 | 0 | - | - | - | - | - | - | - | 68 |
| v23_B_postgrad_w600 | postgrad_window | IS | 141 | 0 | 0 | - | - | - | - | - | - | - | 26 |
| v23_B_postgrad_w600 | postgrad_window | OOS | 228 | 0 | 0 | - | - | - | - | - | - | - | 42 |
| v23_B_postgrad_w600 | postgrad_window | all | 369 | 0 | 0 | - | - | - | - | - | - | - | 68 |
| v23_B_postgrad_w1200 | postgrad_window | IS | 141 | 0 | 0 | - | - | - | - | - | - | - | 26 |
| v23_B_postgrad_w1200 | postgrad_window | OOS | 228 | 0 | 0 | - | - | - | - | - | - | - | 42 |
| v23_B_postgrad_w1200 | postgrad_window | all | 369 | 0 | 0 | - | - | - | - | - | - | - | 68 |
| v23_C_smart | channel | IS | 141 | 0 | 0 | - | - | - | - | - | - | - | 26 |
| v23_C_smart | channel | OOS | 228 | 0 | 0 | - | - | - | - | - | - | - | 42 |
| v23_C_smart | channel | all | 369 | 0 | 0 | - | - | - | - | - | - | - | 68 |
| v23_D_x | channel | IS | 141 | 0 | 0 | - | - | - | - | - | - | - | 26 |
| v23_D_x | channel | OOS | 228 | 0 | 0 | - | - | - | - | - | - | - | 42 |
| v23_D_x | channel | all | 369 | 0 | 0 | - | - | - | - | - | - | - | 68 |

### By market regime (all periods)
- baseline: regime (n, exp SOL) {'high_activity': (0, None), 'low_activity': (0, None), 'mid_activity': (1, -0.0028083), 'warmup': (0, None)} · book-constrained replay (max 1 open, 2-loss pause, 2% daily): n=1 net=-0.002808
- window_30s: regime (n, exp SOL) {'high_activity': (0, None), 'low_activity': (0, None), 'mid_activity': (1, -0.0028083), 'warmup': (0, None)} · book-constrained replay (max 1 open, 2-loss pause, 2% daily): n=1 net=-0.002808
- window_120s: regime (n, exp SOL) {'high_activity': (0, None), 'low_activity': (0, None), 'mid_activity': (1, -0.0028083), 'warmup': (0, None)} · book-constrained replay (max 1 open, 2-loss pause, 2% daily): n=1 net=-0.002808
- entry_breakout: regime (n, exp SOL) {'high_activity': (0, None), 'low_activity': (0, None), 'mid_activity': (1, -0.0028083), 'warmup': (0, None)} · book-constrained replay (max 1 open, 2-loss pause, 2% daily): n=1 net=-0.002808
- retest_range_2m: regime (n, exp SOL) {'high_activity': (0, None), 'low_activity': (0, None), 'mid_activity': (0, None), 'warmup': (0, None)} · book-constrained replay (max 1 open, 2-loss pause, 2% daily): n=0 net=0
- retest_range_5m: regime (n, exp SOL) {'high_activity': (0, None), 'low_activity': (0, None), 'mid_activity': (0, None), 'warmup': (0, None)} · book-constrained replay (max 1 open, 2-loss pause, 2% daily): n=0 net=0
- buyers_4: regime (n, exp SOL) {'high_activity': (0, None), 'low_activity': (0, None), 'mid_activity': (1, -0.0028083), 'warmup': (0, None)} · book-constrained replay (max 1 open, 2-loss pause, 2% daily): n=1 net=-0.002808
- buyers_10: regime (n, exp SOL) {'high_activity': (0, None), 'low_activity': (0, None), 'mid_activity': (0, None), 'warmup': (0, None)} · book-constrained replay (max 1 open, 2-loss pause, 2% daily): n=0 net=0
- persist_2of4: regime (n, exp SOL) {'high_activity': (0, None), 'low_activity': (0, None), 'mid_activity': (1, -0.0028083), 'warmup': (0, None)} · book-constrained replay (max 1 open, 2-loss pause, 2% daily): n=1 net=-0.002808
- persist_4of4: regime (n, exp SOL) {'high_activity': (0, None), 'low_activity': (0, None), 'mid_activity': (0, None), 'warmup': (0, None)} · book-constrained replay (max 1 open, 2-loss pause, 2% daily): n=0 net=0
- runup_100: regime (n, exp SOL) {'high_activity': (0, None), 'low_activity': (0, None), 'mid_activity': (1, -0.0028083), 'warmup': (0, None)} · book-constrained replay (max 1 open, 2-loss pause, 2% daily): n=1 net=-0.002808
- runup_250: regime (n, exp SOL) {'high_activity': (0, None), 'low_activity': (0, None), 'mid_activity': (1, -0.0028083), 'warmup': (0, None)} · book-constrained replay (max 1 open, 2-loss pause, 2% daily): n=1 net=-0.002808
- liq_impact_1pct: regime (n, exp SOL) {'high_activity': (0, None), 'low_activity': (0, None), 'mid_activity': (1, -0.0028083), 'warmup': (0, None)} · book-constrained replay (max 1 open, 2-loss pause, 2% daily): n=1 net=-0.002808
- liq_impact_0_5pct: regime (n, exp SOL) {'high_activity': (0, None), 'low_activity': (0, None), 'mid_activity': (1, -0.0028083), 'warmup': (0, None)} · book-constrained replay (max 1 open, 2-loss pause, 2% daily): n=1 net=-0.002808
- x_confirmed_only: regime (n, exp SOL) {'high_activity': (0, None), 'low_activity': (0, None), 'mid_activity': (0, None), 'warmup': (0, None)} · book-constrained replay (max 1 open, 2-loss pause, 2% daily): n=0 net=0
- onchain_only: regime (n, exp SOL) {'high_activity': (0, None), 'low_activity': (0, None), 'mid_activity': (1, -0.0028083), 'warmup': (0, None)} · book-constrained replay (max 1 open, 2-loss pause, 2% daily): n=1 net=-0.002808
- v23_E_audited: regime (n, exp SOL) {'high_activity': (0, None), 'low_activity': (0, None), 'mid_activity': (0, None), 'warmup': (0, None)} · book-constrained replay (max 1 open, 2-loss pause, 2% daily): n=0 net=0
- v23_A_early: regime (n, exp SOL) {'high_activity': (0, None), 'low_activity': (0, None), 'mid_activity': (0, None), 'warmup': (0, None)} · book-constrained replay (max 1 open, 2-loss pause, 2% daily): n=0 net=0
- v23_A_imperfect_retest: regime (n, exp SOL) {'high_activity': (0, None), 'low_activity': (0, None), 'mid_activity': (0, None), 'warmup': (0, None)} · book-constrained replay (max 1 open, 2-loss pause, 2% daily): n=0 net=0
- v23_B_postgrad_w120: regime (n, exp SOL) {'high_activity': (0, None), 'low_activity': (0, None), 'mid_activity': (0, None), 'warmup': (0, None)} · book-constrained replay (max 1 open, 2-loss pause, 2% daily): n=0 net=0
- v23_B_postgrad_w300: regime (n, exp SOL) {'high_activity': (0, None), 'low_activity': (0, None), 'mid_activity': (0, None), 'warmup': (0, None)} · book-constrained replay (max 1 open, 2-loss pause, 2% daily): n=0 net=0
- v23_B_postgrad_w600: regime (n, exp SOL) {'high_activity': (0, None), 'low_activity': (0, None), 'mid_activity': (0, None), 'warmup': (0, None)} · book-constrained replay (max 1 open, 2-loss pause, 2% daily): n=0 net=0
- v23_B_postgrad_w1200: regime (n, exp SOL) {'high_activity': (0, None), 'low_activity': (0, None), 'mid_activity': (0, None), 'warmup': (0, None)} · book-constrained replay (max 1 open, 2-loss pause, 2% daily): n=0 net=0
- v23_C_smart: regime (n, exp SOL) {'high_activity': (0, None), 'low_activity': (0, None), 'mid_activity': (0, None), 'warmup': (0, None)} · book-constrained replay (max 1 open, 2-loss pause, 2% daily): n=0 net=0
- v23_D_x: regime (n, exp SOL) {'high_activity': (0, None), 'low_activity': (0, None), 'mid_activity': (0, None), 'warmup': (0, None)} · book-constrained replay (max 1 open, 2-loss pause, 2% daily): n=0 net=0

## Variant recommendations (none applied)
Rule: recommend only if the arm beats the baseline after all costs OUT OF SAMPLE (expectancy higher and > 0, profit factor not lower, drawdown not >25% worse) AND is better in-sample, with >= 30 unique-event trades per arm per split. Trade count is never a criterion. Nothing is auto-applied.
- window_30s: **insufficient evidence** — needs >= 30 simulated trades on unique events per arm in BOTH IS and OOS; have {'IS': 0, 'OOS': 1, 'baseline_IS': 0, 'baseline_OOS': 1}
- window_120s: **insufficient evidence** — needs >= 30 simulated trades on unique events per arm in BOTH IS and OOS; have {'IS': 0, 'OOS': 1, 'baseline_IS': 0, 'baseline_OOS': 1}
- entry_breakout: **insufficient evidence** — needs >= 30 simulated trades on unique events per arm in BOTH IS and OOS; have {'IS': 0, 'OOS': 1, 'baseline_IS': 0, 'baseline_OOS': 1}
- retest_range_2m: **insufficient evidence** — needs >= 30 simulated trades on unique events per arm in BOTH IS and OOS; have {'IS': 0, 'OOS': 0, 'baseline_IS': 0, 'baseline_OOS': 1}
- retest_range_5m: **insufficient evidence** — needs >= 30 simulated trades on unique events per arm in BOTH IS and OOS; have {'IS': 0, 'OOS': 0, 'baseline_IS': 0, 'baseline_OOS': 1}
- buyers_4: **insufficient evidence** — needs >= 30 simulated trades on unique events per arm in BOTH IS and OOS; have {'IS': 0, 'OOS': 1, 'baseline_IS': 0, 'baseline_OOS': 1}
- buyers_10: **insufficient evidence** — needs >= 30 simulated trades on unique events per arm in BOTH IS and OOS; have {'IS': 0, 'OOS': 0, 'baseline_IS': 0, 'baseline_OOS': 1}
- persist_2of4: **insufficient evidence** — needs >= 30 simulated trades on unique events per arm in BOTH IS and OOS; have {'IS': 0, 'OOS': 1, 'baseline_IS': 0, 'baseline_OOS': 1}
- persist_4of4: **insufficient evidence** — needs >= 30 simulated trades on unique events per arm in BOTH IS and OOS; have {'IS': 0, 'OOS': 0, 'baseline_IS': 0, 'baseline_OOS': 1}
- runup_100: **insufficient evidence** — needs >= 30 simulated trades on unique events per arm in BOTH IS and OOS; have {'IS': 0, 'OOS': 1, 'baseline_IS': 0, 'baseline_OOS': 1}
- runup_250: **insufficient evidence** — needs >= 30 simulated trades on unique events per arm in BOTH IS and OOS; have {'IS': 0, 'OOS': 1, 'baseline_IS': 0, 'baseline_OOS': 1}
- liq_impact_1pct: **insufficient evidence** — needs >= 30 simulated trades on unique events per arm in BOTH IS and OOS; have {'IS': 0, 'OOS': 1, 'baseline_IS': 0, 'baseline_OOS': 1}
- liq_impact_0_5pct: **insufficient evidence** — needs >= 30 simulated trades on unique events per arm in BOTH IS and OOS; have {'IS': 0, 'OOS': 1, 'baseline_IS': 0, 'baseline_OOS': 1}
- x_confirmed_only: **insufficient evidence** — needs >= 30 simulated trades on unique events per arm in BOTH IS and OOS; have {'IS': 0, 'OOS': 0, 'baseline_IS': 0, 'baseline_OOS': 1}
- onchain_only: **insufficient evidence** — needs >= 30 simulated trades on unique events per arm in BOTH IS and OOS; have {'IS': 0, 'OOS': 1, 'baseline_IS': 0, 'baseline_OOS': 1}
- v23_E_audited: **insufficient evidence** — needs >= 30 simulated trades on unique events per arm in BOTH IS and OOS; have {'IS': 0, 'OOS': 0, 'baseline_IS': 0, 'baseline_OOS': 1}
- v23_A_early: **insufficient evidence** — needs >= 30 simulated trades on unique events per arm in BOTH IS and OOS; have {'IS': 0, 'OOS': 0, 'baseline_IS': 0, 'baseline_OOS': 1}
- v23_A_imperfect_retest: **insufficient evidence** — needs >= 30 simulated trades on unique events per arm in BOTH IS and OOS; have {'IS': 0, 'OOS': 0, 'baseline_IS': 0, 'baseline_OOS': 1}
- v23_B_postgrad_w120: **insufficient evidence** — needs >= 30 simulated trades on unique events per arm in BOTH IS and OOS; have {'IS': 0, 'OOS': 0, 'baseline_IS': 0, 'baseline_OOS': 1}
- v23_B_postgrad_w300: **insufficient evidence** — needs >= 30 simulated trades on unique events per arm in BOTH IS and OOS; have {'IS': 0, 'OOS': 0, 'baseline_IS': 0, 'baseline_OOS': 1}
- v23_B_postgrad_w600: **insufficient evidence** — needs >= 30 simulated trades on unique events per arm in BOTH IS and OOS; have {'IS': 0, 'OOS': 0, 'baseline_IS': 0, 'baseline_OOS': 1}
- v23_B_postgrad_w1200: **insufficient evidence** — needs >= 30 simulated trades on unique events per arm in BOTH IS and OOS; have {'IS': 0, 'OOS': 0, 'baseline_IS': 0, 'baseline_OOS': 1}
- v23_C_smart: **insufficient evidence** — needs >= 30 simulated trades on unique events per arm in BOTH IS and OOS; have {'IS': 0, 'OOS': 0, 'baseline_IS': 0, 'baseline_OOS': 1}
- v23_D_x: **insufficient evidence** — needs >= 30 simulated trades on unique events per arm in BOTH IS and OOS; have {'IS': 0, 'OOS': 0, 'baseline_IS': 0, 'baseline_OOS': 1}

## X-confirmed vs on-chain-only
- X-confirmed arm: {'n': 0, 'unique_events': 369, 'entered_events': 1, 'no_fills': 1, 'missed_profitable_executable': 67}
- on-chain-only arm: {'n': 1, 'net_sol': -0.002808, 'expectancy_sol': -0.0028083, 'expectancy_pct': -6.665, 'win_rate': 0.0, 'profit_factor': 0.0, 'payoff_ratio': None, 'max_drawdown_sol': 0.002808, 'total_costs_sol': 0.001974, 'false_positive_entries': 1, 'unique_events': 369, 'entered_events': 2, 'no_fills': 1, 'missed_profitable_executable': 68}
- reference trade net % — X-verified events: {'n': 20, 'mean': -16.2085, 'median': -19.35, 'win_rate': 0.3, 'avg_win': 21.4117, 'avg_loss': -32.3314, 'profit_factor': 0.284, 'max_drawdown': 351.99, 'sum': -324.17} · on-chain events: {'n': 163, 'mean': -10.0036, 'median': -10.73, 'win_rate': 0.399, 'avg_win': 15.3688, 'avg_loss': -26.8321, 'profit_factor': 0.38, 'max_drawdown': 1639.32, 'sum': -1630.58}
- X-verified events: 20 · post→decision latency s: {'n': 20, 'mean': 856.1, 'median': 760.6, 'win_rate': 1.0, 'avg_win': 856.1, 'avg_loss': None, 'profit_factor': None, 'max_drawdown': 0.0, 'sum': 17122.0}
- X validation: accepted 0 / 0 rows; rejected {}
- X never adds an entry: the X arm is the baseline restricted to verified coins, so negative net buying and hard vetoes still block

## Smart waitlist
- on list now 0 · transitions {'NEW->WAIT': 71, 'WAIT->WAIT': 44, 'WAIT->REMOVED:deterioration': 23, 'WAIT->REMOVED:structural': 9, 'WAIT->REMOVED:hard_veto': 37, 'WAIT->REMOVED:expired': 2}

## Paper trade validation (baseline books)
- passed all gates 2 · fills 0 · no-fills {'NOT ECONOMICALLY VIABLE: fixed network+tip costs 0': 1, 'price already through stop at decision (px 1.28715': 1} · awaiting fill 0

## Shadow records
- shadow candidates 32 · simulated fills 11 · no-fills {'price already through stop': 11, 'latency drift: price +4.21% during the fill d': 10} · exits 11 · rejected trades 0 · missed opps 4050
- local baseline replica vs live desk agents agreement: {'evals': 101478, 'scout': 0.951, 'chart': 0.96, 'skeptic_veto': 0.942}

# V2.2.1 paper strategy validation (PAPER, 10:03 PM ET Nov 11 brief, nothing applied)

Generated 01:19:53 PM ET. Mode: PAPER. Risk limits, hard vetoes and live-trading status are unchanged.

## How V2.3 was treated
V2.3 components (Scout channels A/B/C, Chart Strategies B and C, eight-layer auditor, wallet ranker) keep running as shadow/research. The live paper books now use the V2.2 baseline: Scout `qualified` (not qualified23), Chart Strategy A (`decision_A`), and Skeptic VETO (an audit HARD veto is still a VETO). Audit APPROVED is not required for a baseline entry. Hard vetoes (insider dumping, manipulation, wallet concentration, stale data, unexecutable positions) and the v2_config.py risk limits are unchanged. Shadow rules are not auto-promoted.

## 1. The one passed signal with no paper trade
**Bernie** (`AVYzqnJG5g4qWf3eSAZVMzwsZh79bS9KCWxceCaJpump`) at **02:14:50 PM ET** on 2026-11-11, group B.

Full sequence:
- **Scout:** qualified. Rank 176.2, age 1630s, PumpSwap AMM, 71 funded buyers/60s, net +7.3907 SOL/60s. Reasons: ['71 funded buyers (≥0.05 SOL) in 60s', 'net +7.39 SOL in 60s', 'net buying sustained 4/4 intervals', 'funded buyers rising 17→58/30s']. Fails: none. Flags: none.
- **Chart:** ENTER, setup A breakout-retest, net R:R 3.1. A breakout-retest: broke 3m range (+8%) on 1.4x volume, retest 9.1% off high, buying strengthening; net R:R 3.10. Stop 1.2963672390026278e-06, target 1.7766916653991147e-06.
- **Skeptic:** WAIT (not a VETO; hard none). Soft flags only: ['creator has sold before', 'X posts from <2 independent authors (possible promo)'].
- **Main, real-wallet book:** NO TRADE — **NOT_ECONOMICALLY_VIABLE**. fixed round-trip costs 0.000172 SOL (2 tx network+priority+tip) exceed the 0.5% risk budget 0.000108 SOL on 0.021644 SOL equity (max position 0.001082 SOL). The 0.00151 SOL token-account deposit is also 1.4x the max position. Risk limits were not changed and the size was not forced up. Reason logged: fixed network+tip costs 0.000172 SOL exceed the 0.5% risk budget 0.000108 SOL. Entry-signal pass: False. Executable order: False.
- **Main, 1 SOL research book:** ENTER at 0.05 SOL (the configured 5% size), modeled {'round_trip_cost_pct': 4.672, 'impact_in_pct': 0.032, 'exp_gross_pct': 38.03226394909163, 'exp_net_pct': 31.714471533834114, 'risk_sol': 0.004402533268794066, 'net_rr': 3.601843483913216}. This was an **entry-signal pass**.
- **Paper order decision / simulated fill:** no-fill at 02:14:53 PM ET. price already through stop at decision (px 1.287157e-06 <= stop 1.296367e-06, -0.71%) — the entry-signal passed every agent and Main research-book gate, but the order was never executable. The 2s fill delay then recorded 'price already through stop' at 02:14:53 PM ET. Chart's stop is 2% below the 3-minute range high, while Setup A still allows a price as much as 3% below that high, so a Chart ENTER can be issued with the stop already above the market.

This was an ENTRY-SIGNAL PASS, not a fully executable order. The research book proposed 0.05 SOL at modeled net R:R 3.60, then no-filled. The real book never passed Main: it is NOT ECONOMICALLY VIABLE at the approved risk limits.

Price later printed about +27% (02:15:22 PM ET). That is not a missed winner: the Chart-stop entry was unexecutable, and a later missed-opportunity row that showed +20.98% used invented 10%/20% stop/target levels, not Chart's actual stop.

Other Scout-qualified + Chart ENTER + Skeptic-not-VETO records (independent episodes):
- 01:46:06 PM ET HAOGPT `823KzDWd5HTSkWWJe1yZbka79pGAU7ZR8FXB5fKhpump`: research NO TRADE (net R:R 1.39 < 1.5 at 0.050000 SOL), real NO TRADE (fixed network+tip costs 0.000172 SOL exceed the 0.5% risk budget 0.000108 SOL), px vs stop 0.28%. Entry-signal pass: False.
- 02:14:50 PM ET Bernie `AVYzqnJG5g4qWf3eSAZVMzwsZh79bS9KCWxceCaJpump`: research ENTER (pass), real NO TRADE (fixed network+tip costs 0.000172 SOL exceed the 0.5% risk budget 0.000108 SOL), px vs stop -0.71%. Entry-signal pass: True.

Disposition log: 2 paper_validation rows, 2 paper_dispositions rows, fills 0, no-fills {'NOT ECONOMICALLY VIABLE: fixed network+tip costs 0.000172 SOL exceed the 0.5% ri': 1, 'price already through stop at decision (px 1.287157e-06 <= stop 1.296367e-06, -0': 1}. Every qualified opportunity now gets a final recorded disposition (fill, no-fill with the exact reason, or NOT ECONOMICALLY VIABLE). A price already through the Chart stop is recorded at decision time and does not occupy the 1-open slot.

## Independent opportunities vs scan counts
- Paper signal scans (repeated evaluations): 20182
- Unique mints scanned: 1899 · unique mints that were ever Scout-qualified: 329
- Scout + Chart ENTER + Skeptic-not-VETO records: 3 · independent opportunities (mint, 15-min episode): 2
- Unique research events (shadow): 369 (split {'OOS': 228, 'IS': 141})
- Independent opportunities are unique (mint, 15-minute setup episode) — not repeated ~1s scans of the same mint. Research events follow the same episode rule (mint, or mint|amm after graduation).

## Shadow entry-filter variations (research book, after all costs)
Each arm changes one soft rule. Hard vetoes (insider dumping, manipulation, wallet concentration, stale data, unexecutable positions) are never relaxed. Arms are not auto-promoted.
The single closed shadow trade (SLAB, 05:23:31 PM ET, -6.665% after costs, MFE 0.0%, MAE -6.66%, exit momentum_invalidation at 44s) is the same fill on every arm that entered it. It is OOS (5 PM is an odd hour). No arm has an in-sample closed trade.
retest_range_2m and retest_range_5m (alternative Setup A consolidation windows) are wired and will accumulate episodes when feed data returns. They have no historical trades yet because they were added after the Helius outage; no credits were spent to backfill.

Split rule: even ET hour = in-sample (IS), odd ET hour = out-of-sample (OOS) — pre-registered.

| group | arm | split | events | trades | no-fill | exp SOL | exp % | PF | payoff | max DD SOL | costs SOL | avg win/loss note | missed exec winners |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| A_baseline | baseline | IS | 141 | 0 | 1 | — | — | — | — | — | — | wins 0— | 25 |
| A_baseline | baseline | OOS | 228 | 1 | 1 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | wins 0.0 | 42 |
| A_baseline | baseline | all | 369 | 1 | 2 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | wins 0.0 | 67 |
| B_net_buying_windows | window_30s | IS | 141 | 0 | 1 | — | — | — | — | — | — | wins 0— | 25 |
| B_net_buying_windows | window_30s | OOS | 228 | 1 | 0 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | wins 0.0 | 42 |
| B_net_buying_windows | window_30s | all | 369 | 1 | 1 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | wins 0.0 | 67 |
| B_net_buying_windows | window_120s | IS | 141 | 0 | 0 | — | — | — | — | — | — | wins 0— | 26 |
| B_net_buying_windows | window_120s | OOS | 228 | 1 | 0 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | wins 0.0 | 42 |
| B_net_buying_windows | window_120s | all | 369 | 1 | 0 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | wins 0.0 | 68 |
| B_net_buying_windows | persist_2of4 | IS | 141 | 0 | 1 | — | — | — | — | — | — | wins 0— | 25 |
| B_net_buying_windows | persist_2of4 | OOS | 228 | 1 | 1 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | wins 0.0 | 42 |
| B_net_buying_windows | persist_2of4 | all | 369 | 1 | 2 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | wins 0.0 | 67 |
| B_net_buying_windows | persist_4of4 | IS | 141 | 0 | 0 | — | — | — | — | — | — | wins 0— | 26 |
| B_net_buying_windows | persist_4of4 | OOS | 228 | 0 | 0 | — | — | — | — | — | — | wins 0— | 42 |
| B_net_buying_windows | persist_4of4 | all | 369 | 0 | 0 | — | — | — | — | — | — | wins 0— | 68 |
| C_breakout_retest_windows | entry_breakout | IS | 141 | 0 | 1 | — | — | — | — | — | — | wins 0— | 25 |
| C_breakout_retest_windows | entry_breakout | OOS | 228 | 1 | 1 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | wins 0.0 | 42 |
| C_breakout_retest_windows | entry_breakout | all | 369 | 1 | 2 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | wins 0.0 | 67 |
| C_breakout_retest_windows | retest_range_2m | IS | 141 | 0 | 0 | — | — | — | — | — | — | wins 0— | 26 |
| C_breakout_retest_windows | retest_range_2m | OOS | 228 | 0 | 0 | — | — | — | — | — | — | wins 0— | 42 |
| C_breakout_retest_windows | retest_range_2m | all | 369 | 0 | 0 | — | — | — | — | — | — | wins 0— | 68 |
| C_breakout_retest_windows | retest_range_5m | IS | 141 | 0 | 0 | — | — | — | — | — | — | wins 0— | 26 |
| C_breakout_retest_windows | retest_range_5m | OOS | 228 | 0 | 0 | — | — | — | — | — | — | wins 0— | 42 |
| C_breakout_retest_windows | retest_range_5m | all | 369 | 0 | 0 | — | — | — | — | — | — | wins 0— | 68 |
| D_funded_buyers | buyers_4 | IS | 141 | 0 | 1 | — | — | — | — | — | — | wins 0— | 25 |
| D_funded_buyers | buyers_4 | OOS | 228 | 1 | 1 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | wins 0.0 | 42 |
| D_funded_buyers | buyers_4 | all | 369 | 1 | 2 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | wins 0.0 | 67 |
| D_funded_buyers | buyers_10 | IS | 141 | 0 | 1 | — | — | — | — | — | — | wins 0— | 25 |
| D_funded_buyers | buyers_10 | OOS | 228 | 0 | 1 | — | — | — | — | — | — | wins 0— | 42 |
| D_funded_buyers | buyers_10 | all | 369 | 0 | 2 | — | — | — | — | — | — | wins 0— | 67 |
| E_size_aware_liquidity | liq_impact_1pct | IS | 141 | 0 | 1 | — | — | — | — | — | — | wins 0— | 25 |
| E_size_aware_liquidity | liq_impact_1pct | OOS | 228 | 1 | 1 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | wins 0.0 | 42 |
| E_size_aware_liquidity | liq_impact_1pct | all | 369 | 1 | 2 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | wins 0.0 | 67 |
| E_size_aware_liquidity | liq_impact_0_5pct | IS | 141 | 0 | 1 | — | — | — | — | — | — | wins 0— | 25 |
| E_size_aware_liquidity | liq_impact_0_5pct | OOS | 228 | 1 | 1 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | wins 0.0 | 42 |
| E_size_aware_liquidity | liq_impact_0_5pct | all | 369 | 1 | 2 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | wins 0.0 | 67 |
The 'missed exec winners' column in this table is the earlier V2.2 count and can include reference trades that used invented 10%/20% levels; the corrected V2.2.1 counts are in the next section.
| other | runup_100 | IS | 141 | 0 | 1 | — | — | — | — | — | — | — | 25 |
| other | runup_100 | OOS | 228 | 1 | 1 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 0.0 | 42 |
| other | runup_100 | all | 369 | 1 | 2 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 0.0 | 67 |
| other | runup_250 | IS | 141 | 0 | 1 | — | — | — | — | — | — | — | 25 |
| other | runup_250 | OOS | 228 | 1 | 1 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 0.0 | 42 |
| other | runup_250 | all | 369 | 1 | 2 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 0.0 | 67 |
| other | x_confirmed_only | IS | 141 | 0 | 1 | — | — | — | — | — | — | — | 25 |
| other | x_confirmed_only | OOS | 228 | 0 | 0 | — | — | — | — | — | — | — | 42 |
| other | x_confirmed_only | all | 369 | 0 | 1 | — | — | — | — | — | — | — | 67 |
| other | onchain_only | IS | 141 | 0 | 0 | — | — | — | — | — | — | — | 26 |
| other | onchain_only | OOS | 228 | 1 | 1 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 0.0 | 42 |
| other | onchain_only | all | 369 | 1 | 1 | -0.0028083 | -6.665 | 0.0 | None | 0.002808 | 0.001974 | 0.0 | 68 |

## False rejections vs correct rejections
A rejected coin is a missed winner only if a simulated entry AND exit were executable under a pre-set Chart stop and target (not invented 10%/20% levels), using only data available at entry, with realistic delay, fees, impact and exit quotes, and the realized net after costs is positive. Correct rejection = executable net <= 0. Invented-level hypotheticals are reported separately and are not missed winners.
- Research events, baseline-rejected: **2 missed winners** (executable, Chart levels, net > 0): [{'time_et': '04:44:15 PM ET', 'symbol': 'MEMELIFE', 'mint': '3m24jWizt9h9QHNYtKuJ6jTfVfPEoU4rKm4Quasapump', 'net_pct': 2.89, 'split': 'IS', 'exit': 'target', 'hold_s': 5}, {'time_et': '05:00:08 PM ET', 'symbol': 'xam', 'mint': '9Bc6kg4sUDxJ3CVoiosoD65f8TN2KXggM7EUn5adpump', 'net_pct': 5.68, 'split': 'OOS', 'exit': 'target', 'hold_s': 120}]
- Correct rejections (executable net <= 0): 1 {'n': 1, 'mean': -2.55, 'median': -2.55, 'win_rate': 0.0, 'avg_win': None, 'avg_loss': -2.55, 'profit_factor': 0.0, 'max_drawdown': 2.55, 'sum': -2.55}
- Not executable (no realistic fill): 186 · invented 10%/20% levels that were net-positive and are **not** counted: 68
- Missed-opportunity tracker (legacy labels {'no_fill': 2731, 'correct_reject': 765, 'too_restrictive': 542, 'marginal': 9, 'unknown': 3}): under the V2.2.1 rule {'no_fill': 2731, 'invented_levels': 1303, 'invented_net_positive_not_counted': 544, 'correct_reject': 9, 'missed_winner': 7}.
Earlier 'too_restrictive' counts (legacy) included trades that used a fallback 10% stop / 20% target when Chart had given no valid levels. Those are no longer counted as missed winners.

## The two paper accounts
- **Real-wallet book: NOT ECONOMICALLY VIABLE.** Equity 0.021644109 SOL. Fixed round-trip costs alone exceed the 0.5% risk budget, so no legal size exists. The book is labelled NOT ECONOMICALLY VIABLE rather than forcing an entry or raising limits. Viable checks: 0/171790.
- **Research book: economically viable at configured sizing.** The 1 SOL research book uses the same 5% / 0.5% rules (0.05 SOL size, 0.005 SOL risk budget). It is economically viable (fixed costs are 0.34% of max size). It did generate one entry-signal (Bernie) which was not executable, and the local V2.2 shadow replica generated one filled trade (SLAB, -6.665%). The live paper book did not take SLAB because at 5:23 PM V2.3 Chart Strategy B said REJECT and the audit was MISSING; under the restored V2.2 baseline that shadow fill would have been a live paper entry — and it lost money. That is a single observation, not evidence to change rules.

## Smart watchlist
- On list now 0 · transitions {'NEW->WAIT': 71, 'WAIT->WAIT': 44, 'WAIT->REMOVED:deterioration': 23, 'WAIT->REMOVED:structural': 9, 'WAIT->REMOVED:hard_veto': 37, 'WAIT->REMOVED:expired': 2} · first discovery timestamp preserved: True.
The smart waitlist is unchanged in spirit: first discovery time is preserved, WAIT candidates are re-evaluated on fresh data, and they are removed only for hard veto, structural invalidation, expiry, sustained deterioration, or a paper entry. Temporary blips do not remove a coin and do not double-count opportunities. Add criteria now use V2.2 Scout qualified + Chart Strategy A WAIT, consistent with the baseline.

## X signals
Only authenticated, timestamped X posts with an exact mint in the post text, a matching URL handle and post id, not in the future, not stale, not synthetic. Deduped by post id. Group A requires >=2 independent authors. No signals are invented.
- Unique tokens with verified, timestamped, exact-mint posts: **25** (not repeated snapshots).
- First verified post **preceded** on-chain momentum: 7 · **followed** a price increase: 18.
- Live validator: accepted 0 / 0 rows; rejected {}; unique mints in the current file 0.
Unique tokens, not repeated snapshots. Of 25 historically confirmed tokens in paper_signals, 7 had a first verified post that preceded on-chain momentum and 18 had a first verified post that followed a price increase. The live validator currently accepts only fresh posts (<30 min); tonight's file is after the Helius outage so those live rows are not used as trading evidence.

## Recommendation (nothing applied)
**no strategy change — evidence is insufficient**
A variant is recommended only with >= 30 independent closed trades in BOTH the even-hour in-sample and the odd-hour out-of-sample splits, beating the baseline after costs on expectancy (and > 0), profit factor, and drawdown. The baseline has 0 IS trades and 1 OOS trades (need 30/30). The only closed shadow trade is one OOS loser at -6.665%. Trade count is not a criterion. Nothing is auto-applied.

## Data limits
Helius has returned 429 / websocket errors since about 5:31 PM ET (credits likely exhausted account-wide). The engine has seen no trades since then. This report uses historical logs only (paper_signals, research_events, gate_stats, shadow/watchlist files, x_signals). No Helius credits were spent on backfill. The new disposition path and retest-window shadow arms are in place and will run when market data returns. After about 5:00 PM, V2.3 Chart Strategy B and the audit-APPROVED gate were affecting live baseline entries (for example SLAB at 5:23 PM: the V2.2 shadow replica entered and lost 6.665%; the live book did not, because Strategy B said REJECT and the audit was MISSING). V2.2.1 restores V2.2 as the live baseline.

# V2.3 token auditor + smart money comparison (PAPER/shadow, 1 SOL research book, nothing applied)

Events since V2.3: 29 (split {'excluded_cross': 20, 'holdout': 9}; phase {'curve': 13, 'amm': 16}; channels at start {'none': 24, 'A': 2, 'B': 3}). Split rule: train = train-token (sha256 bucket >= 30%) AND even ET hour; holdout = holdout-token AND odd ET hour; cross cells excluded (no leakage).
a missed winner = an event the group did not enter whose standardized reference trade (research size, 1-3s fill delay, impact, fees, slippage, stop/target/15-min exit) was fillable and netted > +2.0% after costs.

**no comparison yet: every group is labelled 'insufficient sample' until it has >= 30 independent closed trades in both splits. No thresholds are changed automatically.**

| group | arm | split | eligible events | entered | closed trades | no-fill | net SOL | exp % | costs SOL | PF | payoff | max DD SOL | missed exec winners | label |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| A | v23_A_early | train | 0 | 0 | 0 | 0 | 0 | - | 0 | - | - | 0 | 0 |  |
| A | v23_A_early | holdout | 6 | 0 | 0 | 0 | 0 | - | 0 | - | - | 0 | 1 |  |
| A | v23_A_early | all | 13 | 0 | 0 | 0 | 0 | - | 0 | - | - | 0 | 1 | insufficient sample (need >= 30 independent closed trades in BOTH train and holdout; have 0/0) |
| B | v23_B_postgrad_w300 | train | 0 | 0 | 0 | 0 | 0 | - | 0 | - | - | 0 | 0 |  |
| B | v23_B_postgrad_w300 | holdout | 1 | 0 | 0 | 0 | 0 | - | 0 | - | - | 0 | 1 |  |
| B | v23_B_postgrad_w300 | all | 10 | 0 | 0 | 0 | 0 | - | 0 | - | - | 0 | 2 | insufficient sample (need >= 30 independent closed trades in BOTH train and holdout; have 0/0) |
| C | v23_C_smart | train | 0 | 0 | 0 | 0 | 0 | - | 0 | - | - | 0 | 0 |  |
| C | v23_C_smart | holdout | 0 | 0 | 0 | 0 | 0 | - | 0 | - | - | 0 | 0 |  |
| C | v23_C_smart | all | 0 | 0 | 0 | 0 | 0 | - | 0 | - | - | 0 | 0 | insufficient sample (need >= 30 independent closed trades in BOTH train and holdout; have 0/0) |
| D | v23_D_x | train | 0 | 0 | 0 | 0 | 0 | - | 0 | - | - | 0 | 0 |  |
| D | v23_D_x | holdout | 1 | 0 | 0 | 0 | 0 | - | 0 | - | - | 0 | 0 |  |
| D | v23_D_x | all | 3 | 0 | 0 | 0 | 0 | - | 0 | - | - | 0 | 1 | insufficient sample (need >= 30 independent closed trades in BOTH train and holdout; have 0/0) |
| E | baseline | train | 0 | 0 | 0 | 0 | 0 | - | 0 | - | - | 0 | 0 |  |
| E | baseline | holdout | 9 | 0 | 0 | 0 | 0 | - | 0 | - | - | 0 | 2 |  |
| E | baseline | all | 29 | 1 | 1 | 0 | -0.002808 | -6.665 | 0.001974 | 0.0 | None | 0.002808 | 6 | insufficient sample (need >= 30 independent closed trades in BOTH train and holdout; have 0/0) |

## Post-graduation observation windows (Strategy B)
- v23_B_postgrad_w120: train n=0 · holdout n=0 · all n=0 exp -% · missed exec winners 2
- v23_B_postgrad_w300: train n=0 · holdout n=0 · all n=0 exp -% · missed exec winners 2
- v23_B_postgrad_w600: train n=0 · holdout n=0 · all n=0 exp -% · missed exec winners 2
- v23_B_postgrad_w1200: train n=0 · holdout n=0 · all n=0 exp -% · missed exec winners 2

## One-variable arms (audit gate, imperfect retest)
- baseline: all n=1 exp -6.665% PF 0.0 · train/holdout n=0/0
- v23_E_audited: all n=0 exp -% PF - · train/holdout n=0/0
- v23_A_early: all n=0 exp -% PF - · train/holdout n=0/0
- v23_A_imperfect_retest: all n=0 exp -% PF - · train/holdout n=0/0

## Strategy A retest structure vs later executable outcome (reference trade)
- none: events 26, executable 15, ref net % {'n': 15, 'mean': -10.5433, 'median': -18.86, 'win_rate': 0.267, 'avg_win': 13.2325, 'avg_loss': -19.1891, 'profit_factor': 0.251, 'max_drawdown': 176.21, 'sum': -158.15}
- imperfect: events 3, executable 3, ref net % {'n': 3, 'mean': 4.8867, 'median': 14.95, 'win_rate': 0.667, 'avg_win': 17.325, 'avg_loss': -19.99, 'profit_factor': 1.733, 'max_drawdown': 19.99, 'sum': 14.66}

## How early the system found coins (first discovery per channel)
- A: n=2 token age at discovery 57.5s (median) · max move after discovery 13.29% (median, theoretical)
- X: n=3 token age at discovery 2552s (median) · max move after discovery 23.9% (median, theoretical)
- B: n=3 token age at discovery 858s (median) · max move after discovery 38.2% (median, theoretical)

## Eight-layer token audits (Skeptic)
- audits run 18 on 16 mints · latest verdict per mint {'VETO': 7, 'APPROVED': 5, 'NOT_APPROVED': 4} · by venue {'pumpfun_curve': {'VETO': 3, 'APPROVED': 2, 'NOT_APPROVED': 1}, 'pumpswap_pool': {'VETO': 4, 'APPROVED': 3, 'NOT_APPROVED': 3}} · programs {'token-2022': 14, 'spl-token': 1, 'unknown': 1}
- hard-veto layers {'L4_holder_concentration': 4, 'L3_creator': 3, 'L7_bundled_related_wallets': 3, 'L8_delegations_permissions': 1} · block/unknown layers {'RugCheck danger': 4, 'L5_liquidity_security': 6, 'L1_mint_authority': 1, 'L2_freeze_and_extensions': 1, 'L4_holder_concentration': 1, 'L3_creator': 1, 'L7_bundled_related_wallets': 1, 'L8_delegations_permissions': 1, 'L6_token_pool_age': 3} · RugCheck danger 4
  - L1_mint_authority: {'VERIFIED_SAFE': 15, 'UNKNOWN': 1}
  - L2_freeze_and_extensions: {'VERIFIED_SAFE': 15, 'UNKNOWN': 1}
  - L3_creator: {'VERIFIED_RISK/hard': 3, 'VERIFIED_SAFE': 9, 'VERIFIED_RISK/flag': 3, 'UNKNOWN': 1}
  - L4_holder_concentration: {'VERIFIED_RISK/hard': 4, 'VERIFIED_SAFE': 11, 'UNKNOWN': 1}
  - L5_liquidity_security: {'VERIFIED_SAFE': 10, 'VERIFIED_RISK/block': 5, 'UNKNOWN': 1}
  - L6_token_pool_age: {'VERIFIED_SAFE': 13, 'VERIFIED_RISK/block': 3}
  - L7_bundled_related_wallets: {'VERIFIED_SAFE': 12, 'VERIFIED_RISK/hard': 3, 'UNKNOWN': 1}
  - L8_delegations_permissions: {'VERIFIED_SAFE': 14, 'UNKNOWN': 1, 'VERIFIED_RISK/hard': 1}

## Post-graduation migrations (observation only)
- counts {'detected': 357, 'finalized': 357, 'with_pool_prints': 22} · tracked now 0 · finalized 358
  - 120s after graduation: price vs first pool print -48.39% (median, n=7), pool SOL change -28.15%
  - 300s after graduation: price vs first pool print -69.24% (median, n=9), pool SOL change -44.5%
  - 600s after graduation: price vs first pool print 11.01% (median, n=9), pool SOL change 5.49%
  - 1200s after graduation: price vs first pool print -48.84% (median, n=7), pool SOL change -28.39%

## Smart-money wallet ranker
- seeds 1207 · analyzed 17 · by status {'not_qualified': 15, 'excluded': 2} · qualified 0 · signals logged 0
- closest to qualifying: [('DxE7hq', 0, ['0 closed positions (< 30)']), ('A75rmp', 98, ['closes on 1 day(s) (< 2)', 'profit factor 1.184']), ('13bEQb', 96, ['closes on 1 day(s) (< 2)', 'median trade -1.3%']), ('2Dd3TR', 93, ['closes on 1 day(s) (< 2)', 'median trade -1.6%']), ('Grozoe', 92, ['closes on 1 day(s) (< 2)', 'median trade -0.3%'])]
- Helius credits today: {'audit': {'date': '2026-11-11', 'credits': 983, 'calls': 209, 'errors': 5, 'per_min_cap': 100, 'per_day_cap': 50000}, 'ranker': {'date': '2026-11-17', 'credits': 0, 'calls': 0, 'errors': 0, 'per_min_cap': 40, 'per_day_cap': 30000}}
