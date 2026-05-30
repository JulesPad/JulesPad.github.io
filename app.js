// Jules Padova — shared interactions: theme toggle, staggered reveals, signal draw.
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- theme toggle ---------------------------------------------------
  var root = document.documentElement;
  var nav = document.querySelector('nav.top');
  if (nav) {
    var btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Toggle dark mode');
    btn.innerHTML =
      '<svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"/></svg>' +
      '<svg class="moon" viewBox="0 0 24 24" fill="currentColor"><path d="M21 13.2A8.4 8.4 0 1 1 10.8 3a6.6 6.6 0 0 0 10.2 10.2z"/></svg>';
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
    nav.appendChild(btn);
  }

  // Reveal elements already near the top (hero / page-head) immediately on load.
  requestAnimationFrame(function () {
    document.querySelectorAll('.hero .reveal, .page-head .reveal').forEach(function (el) {
      el.classList.add('in');
    });
  });

  // Scroll-triggered reveals for everything else.
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    if (!el.closest('.hero') && !el.closest('.page-head')) io.observe(el);
  });

  // Draw the hero signal trace once (home only).
  var sig = document.querySelector('.signal .trace');
  if (sig && !reduce) {
    var len = sig.getTotalLength();
    sig.style.strokeDasharray = len;
    sig.style.strokeDashoffset = len;
    sig.style.transition = 'stroke-dashoffset 1.6s cubic-bezier(.45,.05,.2,1) .35s';
    requestAnimationFrame(function () { sig.style.strokeDashoffset = '0'; });
  }
})();
