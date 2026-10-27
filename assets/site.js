/* Richard Brokaw — shared site behaviour (menu, signup forms, video, share link, Amazon links). */
(function () {
  var C = window.SITE_CONFIG || {};
  var ML = C.mailerlite || {};

  /* ---------- menu ---------- */
  var toggle = document.getElementById('menu-toggle'), nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Close' : 'Menu';
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && nav.classList.contains('open')) toggle.click();
    });
  }

  /* ---------- signup forms ---------- */
  var mlLoaded = false;
  function loadMailerLite() {
    if (mlLoaded) return; mlLoaded = true;
    (function (w, d, e, u, f, l, n) {
      w[f] = w[f] || function () { (w[f].q = w[f].q || []).push(arguments); };
      l = d.createElement(e); l.async = 1; l.src = u;
      n = d.getElementsByTagName(e)[0]; n.parentNode.insertBefore(l, n);
    })(window, document, 'script', 'https://assets.mailerlite.com/js/universal.js', 'ml');
    window.ml('account', ML.account);
  }

  [].forEach.call(document.querySelectorAll('.rb-signup'), function (box) {
    var key = box.getAttribute('data-form');
    var formId = ML.forms && ML.forms[key];
    if (ML.account && formId) {
      // real MailerLite form replaces the built-in one
      box.innerHTML = '<div class="ml-embedded" data-form="' + formId + '"></div>';
      loadMailerLite();
      return;
    }
    // fallback until MailerLite is connected
    var form = box.querySelector('form'), note = box.querySelector('.formnote');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = (form.querySelector('input[type=email]') || {}).value || '';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) { note.textContent = 'Enter a valid email address.'; return; }
      if (key === 'library') { location.href = box.getAttribute('data-next'); return; }
      note.textContent = 'Thank you! The mailing list opens soon. Please check back.';
    });
  });

  /* ---------- homepage video ---------- */
  [].forEach.call(document.querySelectorAll('[data-video-section]'), function (sec) {
    var id = (C.youtubeVideoId || '').trim();
    if (!id) { sec.hidden = true; return; }
    var slot = sec.querySelector('.rb-video');
    slot.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) +
      '?rel=0" title="A Word From Richard" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  });

  /* ---------- Amazon links ---------- */
  var amazon = C.amazon || {};
  [].forEach.call(document.querySelectorAll('[data-amazon]'), function (a) {
    var url = amazon[a.getAttribute('data-amazon')];
    if (url) a.href = url;
  });

  /* ---------- copy link (prayer page) ---------- */
  var u = document.getElementById('share-url'), b = document.getElementById('copy-link'), n = document.getElementById('share-note');
  if (u && b) {
    u.value = location.href.split('#')[0];
    b.addEventListener('click', function () {
      function fallback() { u.focus(); u.select(); n.textContent = 'Link selected. Press Ctrl+C (or Cmd+C) to copy.'; }
      try { navigator.clipboard.writeText(u.value).then(function () { n.textContent = 'Link copied.'; }, fallback); }
      catch (e) { fallback(); }
    });
  }
})();
