/* ELSA planning exercise: two small spatial planning puzzles on a 10 x 10 grid.
 *
 *   data-mode="mincost"  Meet every feature target at the lowest cost
 *                        (the Marxan "minimum set" problem).
 *   data-mode="elsa"     Secure the most weighted value within an area-based
 *                        target per action (the problem the ELSA tool solves
 *                        with prioritizr's maximum utility objective).
 *
 * Adapted from the Conservation Planning Exercise by Trevor Wiens, Apropos
 * Information Systems Inc. Plain JavaScript, no libraries, nothing is saved or
 * sent anywhere. Loaded by loader.js. Scoring rules must match
 * scripts/check_docs.py (check_exercise) and elsa-planning-exercise/solve.R.
 */
(function () {
  'use strict';

  var T = {};
  var LANG = 'en';
  var NF = null;
  var REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function t(key, vars) {
    var s = Object.prototype.hasOwnProperty.call(T, key) ? T[key] : key;
    if (vars) {
      Object.keys(vars).forEach(function (k) { s = s.split('{' + k + '}').join(vars[k]); });
    }
    return s;
  }
  function num(x) { return NF ? NF.format(x) : String(Math.round(x * 10) / 10); }
  function el(tag, attrs, kids) {
    var e = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === 'text') e.textContent = attrs[k];
        else if (k === 'class') e.className = attrs[k];
        else if (k.slice(0, 2) === 'on') e.addEventListener(k.slice(2), attrs[k]);
        else e.setAttribute(k, attrs[k]);
      });
    }
    (kids || []).forEach(function (c) { if (c) e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return e;
  }
  var uid = 0;
  function newId(p) { uid += 1; return 'pe-' + p + '-' + uid; }

  // ------------------------------------------------------------------ //
  // Shared geometry and scoring
  // ------------------------------------------------------------------ //
  function neighbours(i, rows, cols) {
    var r = Math.floor(i / cols), c = i % cols, out = [];
    if (r > 0) out.push(i - cols);
    if (r < rows - 1) out.push(i + cols);
    if (c > 0) out.push(i - 1);
    if (c < cols - 1) out.push(i + 1);
    return out;
  }
  /* Total exposed edge of the cells where inSet(i) is true, grid border
     included, times the edge length. Matches prioritizr with edge_factor = 1. */
  function boundaryOf(inSet, D) {
    var edges = 0, n = D.rows * D.cols;
    for (var i = 0; i < n; i++) {
      if (!inSet(i)) continue;
      var shared = 0, nb = neighbours(i, D.rows, D.cols);
      for (var k = 0; k < nb.length; k++) if (inSet(nb[k])) shared++;
      edges += 4 - shared;
    }
    return edges * D.edgeLength;
  }

  function scoreMin(D, sel, bpf) {
    var M = D.mincost, res = { cost: 0, amounts: {}, shortfall: {}, met: 0, totalShortfall: 0, cells: 0 };
    M.features.forEach(function (f) { res.amounts[f] = 0; });
    for (var i = 0; i < sel.length; i++) {
      if (!sel[i]) continue;
      res.cells++;
      res.cost += M.cost[i];
      M.features.forEach(function (f) { res.amounts[f] += M.amounts[f][i]; });
    }
    M.features.forEach(function (f) {
      var s = Math.max(0, M.targets[f] - res.amounts[f]);
      res.shortfall[f] = s;
      res.totalShortfall += s;
      if (s === 0) res.met++;
    });
    res.boundary = boundaryOf(function (i) { return sel[i]; }, D);
    res.boundaryPenalty = bpf * res.boundary;
    res.shortfallPenalty = M.shortfallPenalty * res.totalShortfall;
    res.score = res.cost + res.boundaryPenalty + res.shortfallPenalty;
    return res;
  }

  function cellValue(E, f, i, a) { return a ? E.values[f][i] * E.contribution[f][a] : 0; }

  function scoreElsa(D, alloc, st) {
    var E = D.elsa, res = { area: {}, value: {}, weighted: 0, boundary: 0 };
    E.actions.forEach(function (a) { res.area[a] = 0; });
    E.features.forEach(function (f) { res.value[f] = 0; });
    for (var i = 0; i < alloc.length; i++) {
      var a = alloc[i];
      if (!a) continue;
      res.area[a]++;
      E.features.forEach(function (f) { res.value[f] += cellValue(E, f, i, a); });
    }
    E.features.forEach(function (f) { res.weighted += st.weights[f] * res.value[f]; });
    E.actions.forEach(function (a) {
      res.boundary += boundaryOf(function (i) { return alloc[i] === a; }, D);
    });
    res.boundaryPenalty = st.bpf * res.boundary;
    res.score = res.weighted - res.boundaryPenalty;
    return res;
  }

  /* Best value each feature could reach if every cell got its best action:
     used to show "share of the total". */
  function maxValues(E) {
    var out = {};
    E.features.forEach(function (f) {
      var tot = 0;
      for (var i = 0; i < E.landClass.length; i++) {
        var best = 0;
        E.actions.forEach(function (a) {
          if (E.eligible[a].indexOf(E.landClass[i]) >= 0) best = Math.max(best, cellValue(E, f, i, a));
        });
        tot += best;
      }
      out[f] = tot;
    });
    return out;
  }

  // ------------------------------------------------------------------ //
  // Simulated annealing (the "computer search"): a heuristic, like Marxan.
  // propose(state) changes state in place and returns an undo function,
  // or null if no move is possible. energy(state): lower is better.
  // ------------------------------------------------------------------ //
  function anneal(state, energy, propose, opts, onFrame, onDone) {
    var steps = opts.steps, perFrame = REDUCED ? steps : opts.perFrame;
    var t0 = opts.t0, t1 = opts.t1, done = 0, e = energy(state);
    var best = state.slice(), bestE = e, stopped = false;
    function chunk() {
      if (stopped) return;
      var end = Math.min(steps, done + perFrame);
      for (; done < end; done++) {
        var temp = t0 * Math.pow(t1 / t0, done / steps);
        var undo = propose(state);
        if (!undo) continue;
        var e2 = energy(state);
        if (e2 <= e || Math.random() < Math.exp((e - e2) / temp)) {
          e = e2;
          if (e < bestE) { bestE = e; best = state.slice(); }
        } else {
          undo();
        }
      }
      if (done < steps) {
        onFrame(state);
        window.requestAnimationFrame(chunk);
      } else {
        if (opts.improve) opts.improve(best, energy);
        onDone(best);
      }
    }
    window.requestAnimationFrame(chunk);
    return function stop() { stopped = true; onDone(best); };
  }

  // ------------------------------------------------------------------ //
  // Grid widget shared by both modes
  // ------------------------------------------------------------------ //
  function buildGrid(D, labelText, onActivate, onFocusCell) {
    var cells = [], focus = 0;
    var grid = el('div', { class: 'pe-grid', role: 'grid', 'aria-label': labelText });
    for (var r = 0; r < D.rows; r++) {
      var row = el('div', { class: 'pe-row', role: 'row' });
      for (var c = 0; c < D.cols; c++) {
        (function (i) {
          var b = el('button', {
            type: 'button', class: 'pe-cell', role: 'gridcell', tabindex: i === 0 ? '0' : '-1',
            onclick: function () { setFocus(i, false); onActivate(i); },
            onmouseenter: function () { onFocusCell(i); },
            onfocus: function () { onFocusCell(i); }
          });
          b.appendChild(el('span', { class: 'pe-num', 'aria-hidden': 'true' }));
          b.appendChild(el('span', { class: 'pe-mark', 'aria-hidden': 'true' }));
          cells.push(b);
          row.appendChild(b);
        })(r * D.cols + c);
      }
      grid.appendChild(row);
    }
    function setFocus(i, move) {
      cells[focus].setAttribute('tabindex', '-1');
      focus = i;
      cells[focus].setAttribute('tabindex', '0');
      if (move) cells[focus].focus();
    }
    grid.addEventListener('keydown', function (ev) {
      var r = Math.floor(focus / D.cols), c = focus % D.cols, n = null;
      if (ev.key === 'ArrowRight' && c < D.cols - 1) n = focus + 1;
      else if (ev.key === 'ArrowLeft' && c > 0) n = focus - 1;
      else if (ev.key === 'ArrowDown' && r < D.rows - 1) n = focus + D.cols;
      else if (ev.key === 'ArrowUp' && r > 0) n = focus - D.cols;
      else if (ev.key === 'Home') n = r * D.cols;
      else if (ev.key === 'End') n = r * D.cols + D.cols - 1;
      else return;
      ev.preventDefault();
      if (n !== null) setFocus(n, true);
    });
    return { node: grid, cells: cells };
  }

  function position(D, i) {
    return t('cell_position', { row: Math.floor(i / D.cols) + 1, col: (i % D.cols) + 1 });
  }
  function selectBox(label, options, value, onChange) {
    var id = newId('sel');
    var s = el('select', { id: id, onchange: function () { onChange(s.value); } });
    options.forEach(function (o) {
      var opt = el('option', { value: String(o.value), text: o.label });
      if (String(o.value) === String(value)) opt.selected = true;
      s.appendChild(opt);
    });
    return { node: el('div', { class: 'pe-field' }, [el('label', { for: id, text: label }), s]), select: s };
  }
  function table(head, rows, cls) {
    var tb = el('tbody');
    rows.forEach(function (r) {
      tb.appendChild(el('tr', null, r.map(function (c, k) {
        return el(k === 0 ? 'th' : 'td', k === 0 ? { scope: 'row', text: c } : { text: c });
      })));
    });
    // Wrapped so a wide table scrolls on its own instead of widening the page.
    return el('div', { class: 'pe-table-wrap' }, [el('table', { class: 'pe-table ' + (cls || '') }, [
      el('thead', null, [el('tr', null, head.map(function (h) { return el('th', { scope: 'col', text: h }); }))]),
      tb
    ])]);
  }
  function banner() { return el('p', { class: 'pe-banner', role: 'status', hidden: 'hidden' }); }
  function shade(cell, v) { cell.style.setProperty('--pe-v', String(Math.max(0, Math.min(1, v)))); }

  // ------------------------------------------------------------------ //
  // Mode 1: lowest cost that meets the targets
  // ------------------------------------------------------------------ //
  function MinCost(host, D) {
    var M = D.mincost, n = D.rows * D.cols;
    var mine = new Array(n).fill(false);
    var shown = mine;              // what the grid shows: mine, search or best
    var showing = 'mine';
    var bpf = M.bpfOptions[0], view = 'cost';
    var searchResult = {}, stopSearch = null;

    var maxOf = { cost: Math.max.apply(null, M.cost) };
    M.features.forEach(function (f) { maxOf[f] = Math.max.apply(null, M.amounts[f]); });

    var details = el('p', { class: 'pe-details', 'aria-live': 'polite', text: t('details_hint') });
    var g = buildGrid(D, t('grid_label_min'), function (i) {
      if (showing !== 'mine') return;
      mine[i] = !mine[i];
      render();
      describe(i);
    }, describe);

    var viewSel = selectBox(t('view'), [{ value: 'cost', label: t('view_cost') }].concat(
      M.features.map(function (f) { return { value: f, label: t('feature_' + f) }; })), view,
      function (v) { view = v; render(); });
    var bpfSel = selectBox(t('bpf'), M.bpfOptions.map(function (b) { return { value: b, label: num(b) }; }), bpf,
      function (v) { bpf = Number(v); if (showing === 'best') shown = bestUnits(); render(); });

    var bClear = el('button', { type: 'button', class: 'md-button', text: t('clear_map'),
      onclick: function () { mine.fill(false); showMine(); } });
    var bRun = el('button', { type: 'button', class: 'md-button md-button--primary', text: t('run'), onclick: runSearch });
    var bBest = el('button', { type: 'button', class: 'md-button', text: t('show_best'),
      onclick: function () { showing = 'best'; shown = bestUnits(); render(); } });
    var bMine = el('button', { type: 'button', class: 'md-button', text: t('show_mine'), hidden: 'hidden', onclick: showMine });
    var bCopy = el('button', { type: 'button', class: 'md-button', text: t('use_answer'), hidden: 'hidden',
      onclick: function () { for (var i = 0; i < n; i++) mine[i] = shown[i]; showMine(); } });
    var info = banner();
    var summary = el('div', { class: 'pe-summary', 'aria-live': 'polite' });
    var compare = el('div', { class: 'pe-compare' });

    function bestUnits() {
      var s = new Array(n).fill(false);
      M.solutions[String(bpf)].units.forEach(function (i) { s[i] = true; });
      return s;
    }
    function showMine() {
      if (stopSearch) stopSearch();
      showing = 'mine'; shown = mine; render();
    }
    function runSearch() {
      if (stopSearch) { stopSearch(); return; }
      showing = 'search';
      var state = new Array(n).fill(false);
      shown = state;
      bRun.textContent = t('stop');
      var b = bpf;
      stopSearch = anneal(state,
        function (s) { return scoreMin(D, s, b).score; },
        function (s) {
          var i, j, sel = [];
          for (var k = 0; k < n; k++) if (s[k]) sel.push(k);
          if (sel.length && Math.random() < 0.5) {
            // Swap: drop a selected planning unit and add an unselected one.
            i = sel[Math.floor(Math.random() * sel.length)];
            j = Math.floor(Math.random() * n);
            if (s[j]) return null;
            s[i] = false; s[j] = true;
            return function () { s[i] = true; s[j] = false; };
          }
          i = Math.floor(Math.random() * n);
          s[i] = !s[i];
          return function () { s[i] = !s[i]; };
        },
        { steps: 30000, perFrame: 250, t0: 100, t1: 1, improve: function (s, energy) {
          var better = true, e = energy(s);
          while (better) {
            better = false;
            for (var i = 0; i < n; i++) {
              s[i] = !s[i];
              var e2 = energy(s);
              if (e2 < e) { e = e2; better = true; } else { s[i] = !s[i]; }
            }
          }
        } },
        function () { render(); },
        function (best) {
          stopSearch = null;
          bRun.textContent = t('run');
          for (var i = 0; i < n; i++) state[i] = best[i];
          searchResult[String(b)] = scoreMin(D, best, b);
          render();
        });
      render();
    }
    function describe(i) {
      var parts = [position(D, i), t('cost') + ' ' + num(M.cost[i])];
      M.features.forEach(function (f) { parts.push(t('feature_' + f) + ' ' + num(M.amounts[f][i])); });
      parts.push(shown[i] ? t('selected') : t('not_selected'));
      details.textContent = parts.join(' · ');
    }
    function render() {
      for (var i = 0; i < n; i++) {
        var c = g.cells[i], v = view === 'cost' ? M.cost[i] : M.amounts[view][i];
        shade(c, v / maxOf[view]);
        c.firstChild.textContent = view === 'cost' || v ? num(v) : '';
        c.classList.toggle('is-selected', !!shown[i]);
        c.classList.toggle('pe-view-cost', view === 'cost');
        c.setAttribute('aria-pressed', shown[i] ? 'true' : 'false');
        c.setAttribute('aria-label', position(D, i) + ', ' + t('cost') + ' ' + num(M.cost[i]) + ', ' +
          M.features.map(function (f) { return t('feature_' + f) + ' ' + num(M.amounts[f][i]); }).join(', '));
        c.setAttribute('aria-disabled', showing === 'mine' ? 'false' : 'true');
      }
      var s = scoreMin(D, shown, bpf);
      summary.textContent = '';
      summary.appendChild(table([t('feature'), t('target'), t('in_selection'), t('shortfall')],
        M.features.map(function (f) {
          return [t('feature_' + f), num(M.targets[f]), num(s.amounts[f]), num(s.shortfall[f])];
        })));
      summary.appendChild(el('p', { class: 'pe-score' }, [
        el('span', { text: t('cost') + ' ' + num(s.cost) }), ' + ',
        el('span', { text: t('boundary_penalty') + ' ' + num(s.boundaryPenalty) +
          ' (' + num(bpf) + ' × ' + num(s.boundary) + ')' }), ' + ',
        el('span', { text: t('shortfall_penalty') + ' ' + num(s.shortfallPenalty) +
          ' (' + num(M.shortfallPenalty) + ' × ' + num(s.totalShortfall) + ')' }), ' = ',
        el('strong', { text: t('score_low') + ': ' + num(s.score) })
      ]));
      summary.appendChild(el('p', { class: 'pe-status' + (s.met === M.features.length ? ' is-done' : '') },
        [s.met === M.features.length ? t('targets_met') :
          t('targets_progress', { n: s.met, total: M.features.length }),
         ' ', t('cells_selected', { n: s.cells })]));
      info.hidden = showing === 'mine';
      info.textContent = showing === 'best' ? t('showing_best') : showing === 'search' ? t('showing_search') : '';
      bMine.hidden = showing === 'mine';
      bCopy.hidden = showing === 'mine' || !!stopSearch;
      bBest.hidden = showing === 'best';
      if (!stopSearch) bRun.textContent = t('run');
      var mineS = scoreMin(D, mine, bpf), best = M.solutions[String(bpf)], sr = searchResult[String(bpf)];
      var dash = '–';
      compare.textContent = '';
      compare.appendChild(el('h4', { text: t('compare') + ' (' + t('bpf') + ' ' + num(bpf) + ')' }));
      compare.appendChild(table([t('answer'), t('cost'), t('boundary'), t('shortfall'), t('score')], [
        [t('you'), num(mineS.cost), num(mineS.boundary), num(mineS.totalShortfall), num(mineS.score)],
        [t('search')].concat(sr ? [num(sr.cost), num(sr.boundary), num(sr.totalShortfall), num(sr.score)] : [dash, dash, dash, dash]),
        [t('best'), num(best.cost), num(best.boundary), num(0), num(best.score)]
      ], 'pe-compare-table'));
    }

    host.textContent = '';
    host.appendChild(el('div', { class: 'pe-controls' }, [viewSel.node, bpfSel.node]));
    host.appendChild(el('div', { class: 'pe-layout' }, [
      el('div', { class: 'pe-map' }, [g.node, details]),
      el('div', { class: 'pe-side' }, [
        info,
        el('div', { class: 'pe-buttons' }, [bRun, bBest, bMine, bCopy, bClear]),
        summary
      ])
    ]));
    host.appendChild(compare);
    render();
  }

  // ------------------------------------------------------------------ //
  // Mode 2: ELSA-style, most weighted value within area-based targets
  // ------------------------------------------------------------------ //
  function Elsa(host, D) {
    var E = D.elsa, n = D.rows * D.cols, maxV = maxValues(E);
    var st = JSON.parse(JSON.stringify(E.defaults));
    var mine = new Array(n).fill('');
    var shown = mine, showing = 'mine', brush = 'protect', view = 'land';
    var searchResult = null, stopSearch = null;
    var isPA = new Array(n).fill(false);
    E.protectedArea.forEach(function (i) { isPA[i] = true; });

    function allowed(a, i) { return E.eligible[a].indexOf(E.landClass[i]) >= 0; }
    function locked(i) { return st.lockIn && isPA[i]; }
    function applyLock(alloc) { for (var i = 0; i < n; i++) if (locked(i)) alloc[i] = 'protect'; }
    function count(alloc, a) { var k = 0; for (var i = 0; i < n; i++) if (alloc[i] === a) k++; return k; }
    function isDefault() {
      return E.actions.every(function (a) { return st.limits[a] === E.defaults.limits[a]; }) &&
        E.features.every(function (f) { return st.weights[f] === E.defaults.weights[f]; });
    }
    function bestSolution() {
      for (var k = 0; k < E.solutions.length; k++) {
        var s = E.solutions[k].settings;
        if (s.lockIn === st.lockIn && Number(s.bpf) === Number(st.bpf)) return E.solutions[k];
      }
      return null;
    }
    applyLock(mine);

    var details = el('p', { class: 'pe-details', 'aria-live': 'polite', text: t('details_hint') });
    var msg = el('p', { class: 'pe-msg', role: 'alert' });
    var g = buildGrid(D, t('grid_label_elsa'), activate, describe);

    function activate(i) {
      if (showing !== 'mine') return;
      msg.textContent = '';
      var a = brush === 'clear' ? '' : brush;
      if (locked(i)) { msg.textContent = position(D, i) + ': ' + t('locked'); return; }
      if (a && mine[i] === a) a = '';                       // clicking again removes it
      if (a && !allowed(a, i)) {
        msg.textContent = t('not_allowed', { action: t('action_' + a), land: t('land_' + E.landClass[i]) });
        return;
      }
      if (a && count(mine, a) >= st.limits[a]) {
        msg.textContent = t('limit_reached', { action: t('action_' + a), limit: st.limits[a] });
        return;
      }
      mine[i] = a;
      render();
      describe(i);
    }

    // Brush (radio buttons)
    var brushName = newId('brush');
    var brushBox = el('fieldset', { class: 'pe-brush' }, [el('legend', { text: t('brush') })]);
    E.actions.concat(['clear']).forEach(function (a) {
      var id = newId('b');
      var inp = el('input', { type: 'radio', name: brushName, id: id, value: a,
        onchange: function () { brush = a; } });
      if (a === brush) inp.checked = true;
      brushBox.appendChild(el('label', { for: id, class: 'pe-brush-' + a }, [inp,
        el('span', { class: 'pe-chip', 'aria-hidden': 'true', text: a === 'clear' ? '×' : t('short_' + a) }),
        ' ' + (a === 'clear' ? t('brush_clear') : t('action_' + a))]));
    });

    var viewSel = selectBox(t('view'), [{ value: 'land', label: t('view_land') },
      { value: 'heatmap', label: t('view_heatmap') }].concat(
      E.features.map(function (f) { return { value: f, label: t('feature_' + f) }; })), view,
      function (v) { view = v; render(); });
    var bpfSel = selectBox(t('bpf'), E.bpfOptions.map(function (b) { return { value: b, label: num(b) }; }), st.bpf,
      function (v) { st.bpf = Number(v); refreshShown(); });
    var lockId = newId('lock');
    var lockBox = el('input', { type: 'checkbox', id: lockId, onchange: function () {
      st.lockIn = lockBox.checked;
      if (st.lockIn) {
        st.limits.protect = Math.max(st.limits.protect, E.protectedArea.length);
        limitInputs.protect.value = st.limits.protect;
        applyLock(mine);
      }
      searchResult = null;
      refreshShown();
    } });
    lockBox.checked = st.lockIn;

    // Settings: area-based targets and weights
    var limitInputs = {}, weightInputs = {};
    var limitRows = E.actions.map(function (a) {
      var id = newId('lim');
      var max = 0;
      for (var i = 0; i < n; i++) if (allowed(a, i)) max++;
      var inp = el('input', { type: 'number', id: id, min: '0', max: String(max), step: '1', value: String(st.limits[a]),
        onchange: function () {
          var v = Math.max(0, Math.min(max, Math.round(Number(inp.value) || 0)));
          if (a === 'protect' && st.lockIn && v < E.protectedArea.length) {
            v = E.protectedArea.length;
            msg.textContent = t('lockin_min', { n: v });
          }
          // Remove actions beyond the new limit, last ones first.
          for (var i = n - 1; i >= 0 && count(mine, a) > v; i--) if (mine[i] === a && !locked(i)) mine[i] = '';
          st.limits[a] = v; inp.value = v; searchResult = null; refreshShown();
        } });
      limitInputs[a] = inp;
      return el('div', { class: 'pe-field' }, [el('label', { for: id, text: t('action_' + a) }), inp]);
    });
    var weightRows = E.features.map(function (f) {
      var id = newId('w');
      var out = el('output', { for: id, text: num(st.weights[f]) });
      var inp = el('input', { type: 'range', id: id, min: '0', max: '10', step: '1', value: String(st.weights[f]),
        oninput: function () { st.weights[f] = Number(inp.value); out.textContent = num(st.weights[f]); searchResult = null; refreshShown(); } });
      weightInputs[f] = { inp: inp, out: out };
      return el('div', { class: 'pe-field pe-range' }, [el('label', { for: id, text: t('feature_' + f) }), inp, out]);
    });
    var bResetSettings = el('button', { type: 'button', class: 'md-button', text: t('reset_settings'), onclick: function () {
      st = JSON.parse(JSON.stringify(E.defaults));
      lockBox.checked = st.lockIn; bpfSel.select.value = String(st.bpf);
      E.actions.forEach(function (a) { limitInputs[a].value = st.limits[a]; });
      E.features.forEach(function (f) { weightInputs[f].inp.value = st.weights[f]; weightInputs[f].out.textContent = num(st.weights[f]); });
      applyLock(mine);
      E.actions.forEach(function (a) {
        for (var i = n - 1; i >= 0 && count(mine, a) > st.limits[a]; i--) if (mine[i] === a && !locked(i)) mine[i] = '';
      });
      searchResult = null; refreshShown();
    } });
    var settings = el('details', { class: 'pe-settings' }, [
      el('summary', { text: t('settings') }),
      el('div', { class: 'pe-settings-body' }, [
        el('fieldset', null, [el('legend', { text: t('area_target') })].concat(limitRows)),
        el('fieldset', null, [el('legend', { text: t('weight') })].concat(weightRows)),
        bResetSettings
      ])
    ]);

    var bClear = el('button', { type: 'button', class: 'md-button', text: t('clear_map'),
      onclick: function () { mine.fill(''); applyLock(mine); showMine(); } });
    var bRun = el('button', { type: 'button', class: 'md-button md-button--primary', text: t('run'), onclick: runSearch });
    var bBest = el('button', { type: 'button', class: 'md-button', text: t('show_best'), onclick: function () {
      if (!isDefault() || !bestSolution()) { msg.textContent = t('best_unavailable'); return; }
      showing = 'best'; refreshShown();
    } });
    var bMine = el('button', { type: 'button', class: 'md-button', text: t('show_mine'), hidden: 'hidden', onclick: showMine });
    var bCopy = el('button', { type: 'button', class: 'md-button', text: t('use_answer'), hidden: 'hidden',
      onclick: function () { for (var i = 0; i < n; i++) mine[i] = shown[i]; showMine(); } });
    var info = banner();
    var summary = el('div', { class: 'pe-summary', 'aria-live': 'polite' });
    var compare = el('div', { class: 'pe-compare' });

    function refreshShown() {
      if (showing === 'best') {
        var b = isDefault() && bestSolution();
        if (b) shown = b.allocation.slice();
        else { showing = 'mine'; shown = mine; }
      }
      render();
    }
    function showMine() {
      if (stopSearch) stopSearch();
      showing = 'mine'; shown = mine; msg.textContent = ''; render();
    }
    function runSearch() {
      if (stopSearch) { stopSearch(); return; }
      msg.textContent = '';
      showing = 'search';
      var state = new Array(n).fill('');
      applyLock(state);
      shown = state;
      bRun.textContent = t('stop');
      var s0 = JSON.parse(JSON.stringify(st));
      var free = [];
      for (var i = 0; i < n; i++) if (!(s0.lockIn && isPA[i])) free.push(i);
      var used = {};
      E.actions.forEach(function (a) { used[a] = count(state, a); });
      stopSearch = anneal(state,
        function (s) { return -scoreElsa(D, s, s0).score; },
        function (s) {
          var i = free[Math.floor(Math.random() * free.length)];
          var opts = [''].concat(E.actions.filter(function (a) { return allowed(a, i); }));
          var a = opts[Math.floor(Math.random() * opts.length)], old = s[i];
          if (a === old) return null;
          var j = -1, oldJ = '';
          if (a && used[a] >= s0.limits[a]) {
            // Target used up: move the action from another planning unit.
            var cands = free.filter(function (k) { return s[k] === a; });
            if (!cands.length) return null;
            j = cands[Math.floor(Math.random() * cands.length)];
            oldJ = s[j]; s[j] = ''; used[a]--;
          }
          if (old) used[old]--;
          if (a) used[a]++;
          s[i] = a;
          return function () {
            if (a) used[a]--;
            if (old) used[old]++;
            s[i] = old;
            if (j >= 0) { s[j] = oldJ; used[oldJ]++; }
          };
        },
        { steps: 40000, perFrame: 300, t0: 60, t1: 0.05, improve: function (s, energy) {
          var better = true, e = energy(s);
          while (better) {
            better = false;
            free.forEach(function (i) {
              var old = s[i];
              [''].concat(E.actions).forEach(function (a) {
                if (a === s[i] || (a && (!allowed(a, i) || count(s, a) >= s0.limits[a]))) return;
                var prev = s[i];
                s[i] = a;
                var e2 = energy(s);
                if (e2 < e - 1e-9) { e = e2; better = true; } else { s[i] = prev; }
              });
              return old;
            });
          }
        } },
        function () { render(); },
        function (best) {
          stopSearch = null;
          bRun.textContent = t('run');
          for (var k = 0; k < n; k++) state[k] = best[k];
          searchResult = { settings: s0, score: scoreElsa(D, best, s0) };
          render();
        });
      render();
    }
    function weightedCell(i) {
      var tot = 0;
      E.features.forEach(function (f) {
        var best = 0;
        E.actions.forEach(function (a) { if (allowed(a, i)) best = Math.max(best, cellValue(E, f, i, a)); });
        tot += st.weights[f] * best;
      });
      return tot;
    }
    function describe(i) {
      var parts = [position(D, i), t('land_' + E.landClass[i])];
      if (isPA[i]) parts.push(t('protected_area'));
      E.features.forEach(function (f) { parts.push(t('feature_' + f) + ' ' + num(E.values[f][i])); });
      parts.push(t('action') + ': ' + (shown[i] ? t('action_' + shown[i]) : t('action_none')));
      details.textContent = parts.join(' · ');
    }
    function render() {
      var heat = [], hmax = 0, fmax = 0;
      for (var i = 0; i < n; i++) { heat[i] = weightedCell(i); hmax = Math.max(hmax, heat[i]); }
      if (E.features.indexOf(view) >= 0) fmax = Math.max.apply(null, E.values[view]);
      for (i = 0; i < n; i++) {
        var c = g.cells[i], a = shown[i];
        c.className = 'pe-cell pe-land-' + E.landClass[i] + (view === 'land' ? ' pe-view-land' : '') +
          (isPA[i] ? ' is-pa' : '') + (a ? ' is-' + a : '');
        if (view === 'heatmap') { shade(c, hmax ? heat[i] / hmax : 0); c.firstChild.textContent = ''; }
        else if (view !== 'land') { shade(c, fmax ? E.values[view][i] / fmax : 0); c.firstChild.textContent = E.values[view][i] ? num(Math.round(E.values[view][i])) : ''; }
        else { c.style.removeProperty('--pe-v'); c.firstChild.textContent = ''; }
        c.lastChild.textContent = a ? t('short_' + a) : '';
        c.setAttribute('aria-label', position(D, i) + ', ' + t('land_' + E.landClass[i]) +
          (isPA[i] ? ', ' + t('protected_area') : '') + ', ' + t('action') + ': ' +
          (a ? t('action_' + a) : t('action_none')));
        c.setAttribute('aria-disabled', showing === 'mine' ? 'false' : 'true');
      }
      var s = scoreElsa(D, shown, st);
      summary.textContent = '';
      summary.appendChild(table([t('action'), t('area_used'), t('area_target')], E.actions.map(function (a) {
        return [t('action_' + a), num(s.area[a]), num(st.limits[a])];
      })));
      summary.appendChild(table([t('feature'), t('weight'), t('value_secured'), t('share_secured')],
        E.features.map(function (f) {
          return [t('feature_' + f), num(st.weights[f]), num(Math.round(s.value[f])),
            num(Math.round(100 * s.value[f] / maxV[f])) + ' %'];
        })));
      summary.appendChild(el('p', { class: 'pe-score' }, [
        el('span', { text: t('weighted_value') + ' ' + num(Math.round(s.weighted)) }), ' − ',
        el('span', { text: t('boundary_penalty') + ' ' + num(s.boundaryPenalty) +
          ' (' + num(st.bpf) + ' × ' + num(s.boundary) + ')' }), ' = ',
        el('strong', { text: t('score_high') + ': ' + num(Math.round(s.score)) })
      ]));
      info.hidden = showing === 'mine';
      info.textContent = showing === 'best' ? t('showing_best') : showing === 'search' ? t('showing_search') : '';
      bMine.hidden = showing === 'mine';
      bCopy.hidden = showing === 'mine' || !!stopSearch;
      bBest.hidden = showing === 'best';
      var dash = '–', mineS = scoreElsa(D, mine, st), best = isDefault() ? bestSolution() : null;
      var sr = searchResult && JSON.stringify(searchResult.settings) === JSON.stringify(st) ? searchResult.score : null;
      compare.textContent = '';
      compare.appendChild(el('h4', { text: t('compare') }));
      compare.appendChild(table([t('answer'), t('weighted_value'), t('boundary'), t('score')], [
        [t('you'), num(Math.round(mineS.weighted)), num(mineS.boundary), num(Math.round(mineS.score))],
        [t('search')].concat(sr ? [num(Math.round(sr.weighted)), num(sr.boundary), num(Math.round(sr.score))] : [dash, dash, dash]),
        [t('best')].concat(best ? [num(Math.round(best.value)), num(best.boundary), num(Math.round(best.score))] : [dash, dash, dash])
      ], 'pe-compare-table'));
    }

    var legend = el('ul', { class: 'pe-legend', 'aria-label': t('legend') });
    E.landClasses.forEach(function (lc) {
      legend.appendChild(el('li', null, [el('span', { class: 'pe-swatch pe-land-' + lc, 'aria-hidden': 'true' }), t('land_' + lc)]));
    });
    legend.appendChild(el('li', null, [el('span', { class: 'pe-swatch is-pa-swatch', 'aria-hidden': 'true' }), t('protected_area')]));

    host.textContent = '';
    host.appendChild(el('div', { class: 'pe-controls' }, [brushBox]));
    host.appendChild(el('div', { class: 'pe-controls' }, [viewSel.node, bpfSel.node,
      el('div', { class: 'pe-field pe-check' }, [lockBox, el('label', { for: lockId, text: t('lock_in') })])]));
    host.appendChild(el('div', { class: 'pe-layout' }, [
      el('div', { class: 'pe-map' }, [g.node, legend, details, msg]),
      el('div', { class: 'pe-side' }, [
        info,
        el('div', { class: 'pe-buttons' }, [bRun, bBest, bMine, bCopy, bClear]),
        summary,
        settings
      ])
    ]));
    host.appendChild(compare);
    render();
  }

  // ------------------------------------------------------------------ //
  function getJSON(url) {
    return fetch(url).then(function (r) { if (!r.ok) throw new Error(url + ' ' + r.status); return r.json(); });
  }

  window.PlanningExercise = {
    // Exposed for exercise.test.html
    _scoreMin: scoreMin, _scoreElsa: scoreElsa, _boundaryOf: boundaryOf,
    start: function (hosts, cfg) {
      LANG = cfg.lang;
      try { NF = new Intl.NumberFormat(LANG, { maximumFractionDigits: 1 }); } catch (e) { NF = null; }
      var strings = getJSON(cfg.strings).catch(function () { return getJSON(cfg.fallbackStrings); });
      Promise.all([getJSON(cfg.data), strings, getJSON(cfg.fallbackStrings).catch(function () { return {}; })])
        .then(function (res) {
          T = Object.assign({}, res[2], res[1]);   // English fills any missing label
          Array.prototype.forEach.call(hosts, function (h) {
            h.classList.add('is-ready');
            if (h.getAttribute('data-mode') === 'elsa') Elsa(h, res[0]);
            else MinCost(h, res[0]);
          });
        })
        .catch(function () {
          Array.prototype.forEach.call(hosts, function (h) {
            h.appendChild(el('p', { class: 'pe-msg', text: T.load_error || 'The exercise could not be loaded. Please reload the page.' }));
          });
        });
    }
  };
})();
