(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Ledger entries: highlight one trade, dim the rest, swap the pasted preview */
  const list = document.querySelector('.entries');
  const paste = document.querySelector('.paste');
  const img = document.getElementById('pastePreview');
  const caption = document.getElementById('pasteCaption');

  if (list && paste && img) {
    const entries = [...list.querySelectorAll('.entry')];
    let current = entries.find(e => e.classList.contains('is-active')) || entries[0];
    let swapTimer = null;

    entries.forEach(e => {
      const pre = new Image();
      pre.src = e.dataset.shot;
    });

    const select = entry => {
      if (!entry || entry === current) return;
      current.classList.remove('is-active');
      entry.classList.add('is-active');
      current = entry;
      clearTimeout(swapTimer);
      const apply = () => {
        img.src = entry.dataset.shot;
        if (caption) caption.textContent = `${entry.dataset.domain} · concept`;
        paste.classList.remove('swapping');
      };
      if (reduce) return apply();
      paste.classList.add('swapping');
      swapTimer = setTimeout(apply, 140);
    };

    entries.forEach(entry => {
      entry.addEventListener('mouseenter', () => { list.classList.add('has-active'); select(entry); });
      entry.addEventListener('focusin', () => { list.classList.add('has-active'); select(entry); });
    });
    list.addEventListener('mouseleave', () => list.classList.remove('has-active'));
    list.addEventListener('focusout', e => {
      if (!list.contains(e.relatedTarget)) list.classList.remove('has-active');
    });
  }

  /* Stamps press once when they come into view */
  const stamps = document.querySelectorAll('[data-stamp]');
  if (reduce || !('IntersectionObserver' in window)) {
    stamps.forEach(s => s.classList.add('pressed'));
    return;
  }
  const io = new IntersectionObserver(items => {
    items.forEach(item => {
      if (item.isIntersecting) {
        item.target.classList.add('pressed');
        io.unobserve(item.target);
      }
    });
  }, { threshold: 0.6 });
  stamps.forEach(s => io.observe(s));
})();
