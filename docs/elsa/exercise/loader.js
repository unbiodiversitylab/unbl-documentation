/* ELSA planning exercise loader.
 *
 * Listed in mkdocs.yml extra_javascript, so it is on every page, but it does
 * nothing unless the page has a <div class="planning-exercise" data-mode="...">.
 * Then it loads the exercise script and styles from this folder, and the
 * interface labels for the page's language (strings.json in that language's
 * folder; strings.<lang>.json in the repository).
 */
(function () {
  'use strict';
  var me = document.currentScript;
  if (!me) return;
  var base = me.src.replace(/[^/]*$/, '');               // .../elsa/exercise/
  var root = base.replace(/elsa\/exercise\/$/, '');      // site root

  function start() {
    var hosts = document.querySelectorAll('.planning-exercise[data-mode]');
    if (!hosts.length) return;
    var lang = (document.documentElement.getAttribute('lang') || 'en').slice(0, 2);
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = base + 'exercise.css';
    document.head.appendChild(css);
    var js = document.createElement('script');
    js.src = base + 'exercise.js';
    js.onload = function () {
      window.PlanningExercise.start(hosts, {
        lang: lang,
        data: base + 'grid.json',
        strings: root + (lang === 'en' ? '' : lang + '/') + 'elsa/exercise/strings.json',
        fallbackStrings: base + 'strings.json'
      });
    };
    document.body.appendChild(js);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
