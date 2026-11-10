#!/usr/bin/env python3
"""Independent check of the best answers stored in docs/elsa/exercise/grid.json.

solve.R finds them with prioritizr. This script builds the same two problems
from scratch as integer programmes in scipy (HiGHS), using the scoring rules
the exercise shows on screen, and checks that prioritizr's answers really are
the best scores:

  Tab 1  minimise  cost + BPF x boundary + shortfall penalty x shortfall
         (targets are soft here, as on screen; prioritizr uses hard targets,
         so this also checks the shortfall penalty is high enough)
  Tab 2  maximise  weighted value - BPF x boundary
         within area-based targets, action zones and lock-in

Needs scipy (not part of requirements.txt; any recent scipy works):
    python elsa-planning-exercise/verify_solutions.py
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

import numpy as np
from scipy.optimize import Bounds, LinearConstraint, milp
from scipy.sparse import lil_matrix

ROOT = Path(__file__).resolve().parent.parent
D = json.loads((ROOT / "docs" / "elsa" / "exercise" / "grid.json").read_text(encoding="utf-8"))
R, C, L = D["rows"], D["cols"], D["edgeLength"]
N = R * C
PAIRS = [(i, i + 1) for i in range(N) if (i + 1) % C] + [(i, i + C) for i in range(N - C)]


def run(cost, rows, lo, hi, integer, upper):
    a = lil_matrix((len(rows), len(cost)))
    for r, coefs in enumerate(rows):
        for j, v in coefs.items():
            a[r, j] = v
    res = milp(np.array(cost), constraints=LinearConstraint(a.tocsr(), lo, hi),
               integrality=np.array(integer), bounds=Bounds(0, np.array(upper)),
               options={"mip_rel_gap": 0})
    if not res.success:
        sys.exit(f"solver failed: {res.message}")
    return res


def mincost(bpf: float) -> float:
    m = D["mincost"]
    feats = m["features"]
    nx, ny = N, len(PAIRS)
    # x_i selected; y_k both cells of pair k selected; s_f shortfall
    cost = [m["cost"][i] + bpf * 4 * L for i in range(N)] + [-2 * bpf * L] * ny + \
           [m["shortfallPenalty"]] * len(feats)
    rows, lo, hi = [], [], []
    for k, (i, j) in enumerate(PAIRS):
        for c in (i, j):
            rows.append({nx + k: 1, c: -1}); lo.append(-np.inf); hi.append(0)
    for fi, f in enumerate(feats):
        row = {i: m["amounts"][f][i] for i in range(N) if m["amounts"][f][i]}
        row[nx + ny + fi] = 1
        rows.append(row); lo.append(m["targets"][f]); hi.append(np.inf)
    integer = [1] * nx + [0] * (ny + len(feats))
    upper = [1] * (nx + ny) + [np.inf] * len(feats)
    return run(cost, rows, lo, hi, integer, upper).fun


def elsa(lock: bool, bpf: float) -> float:
    e = D["elsa"]
    acts, feats = e["actions"], e["features"]
    w, lim = e["defaults"]["weights"], e["defaults"]["limits"]
    na = len(acts)
    x = lambda i, a: i * na + a                       # x_ia: unit i gets action a
    y = lambda k, a: N * na + k * na + a              # y_ka: both cells of pair k get action a
    nv = N * na + len(PAIRS) * na
    cost = [0.0] * nv
    upper = [1.0] * nv
    for i in range(N):
        for ai, a in enumerate(acts):
            val = sum(w[f] * e["values"][f][i] * e["contribution"][f][a] for f in feats)
            cost[x(i, ai)] = -(val - bpf * 4 * L)      # milp minimises
            if e["landClass"][i] not in e["eligible"][a]:
                upper[x(i, ai)] = 0
    for k in range(len(PAIRS)):
        for ai in range(na):
            cost[y(k, ai)] = 2 * bpf * L
            cost[y(k, ai)] *= -1                       # shared edges reduce the penalty
    rows, lo, hi = [], [], []
    for i in range(N):                                 # at most one action per unit
        rows.append({x(i, ai): 1 for ai in range(na)}); lo.append(0); hi.append(1)
    for ai, a in enumerate(acts):                      # area-based targets
        rows.append({x(i, ai): 1 for i in range(N)}); lo.append(0); hi.append(lim[a])
    for k, (i, j) in enumerate(PAIRS):
        for ai in range(na):
            for c in (i, j):
                rows.append({y(k, ai): 1, x(c, ai): -1}); lo.append(-np.inf); hi.append(0)
    if lock:
        p = acts.index("protect")
        for i in e["protectedArea"]:
            rows.append({x(i, p): 1}); lo.append(1); hi.append(1)
    integer = [1] * (N * na) + [0] * (len(PAIRS) * na)
    return -run(cost, rows, lo, hi, integer, upper).fun


def main() -> int:
    bad = 0
    for bpf in D["mincost"]["bpfOptions"]:
        mine = mincost(bpf)
        stored = D["mincost"]["solutions"][str(bpf)]["score"]
        ok = abs(mine - stored) < 1e-6
        bad += not ok
        print(f"{'ok ' if ok else 'BAD'} lowest cost  BPF {bpf:<4} scipy {mine:9.1f}  prioritizr {stored:9.1f}")
    for s in D["elsa"]["solutions"]:
        lock, bpf = s["settings"]["lockIn"], s["settings"]["bpf"]
        mine = elsa(lock, bpf)
        ok = abs(mine - s["score"]) < 0.05
        bad += not ok
        print(f"{'ok ' if ok else 'BAD'} ELSA-style   BPF {bpf:<4} lock-in {str(lock):5}  "
              f"scipy {mine:9.2f}  prioritizr {s['score']:9.2f}")
    print("all stored answers are optimal" if not bad else f"{bad} stored answer(s) are not optimal")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
