(function () {
  function notifyParent() {
    if (window.parent && window.parent !== window) {
      window.parent.postMessage(
        {
          type: 'mkdocs-url-change',
          url: window.location.href
        },
        'https://unbiodiversitylab.org'
      );
    }
  }

  notifyParent();

  window.addEventListener('popstate', notifyParent);
  window.addEventListener('hashchange', notifyParent);

  document.addEventListener('click', function () {
    setTimeout(notifyParent, 300);
  });
})();
