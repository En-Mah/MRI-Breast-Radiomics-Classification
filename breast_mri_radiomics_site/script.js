(() => {
  const config = window.PROJECT_CONFIG || {};
  document.querySelectorAll('.config-github').forEach(a => {
    if (config.githubUrl) a.href = config.githubUrl;
  });
  document.querySelectorAll('.config-paper').forEach(a => {
    if (config.paperUrl) a.href = config.paperUrl;
  });

  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  navToggle?.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }));

  const tabs = [...document.querySelectorAll('.figure-tab')];
  const figures = [...document.querySelectorAll('.result-figure')];
  tabs.forEach(tab => tab.addEventListener('click', () => {
    const target = tab.dataset.figure;
    tabs.forEach(t => {
      const active = t === tab;
      t.classList.toggle('active', active);
      t.setAttribute('aria-selected', String(active));
    });
    figures.forEach(f => f.classList.toggle('active', f.id === `figure-${target}`));
  }));

  const reveal = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    reveal.forEach(el => observer.observe(el));
  } else {
    reveal.forEach(el => el.classList.add('visible'));
  }

  const copyBtn = document.getElementById('copyCitation');
  copyBtn?.addEventListener('click', async () => {
    const text = document.getElementById('citationText')?.innerText || '';
    try {
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = 'Copied';
      setTimeout(() => copyBtn.textContent = 'Copy', 1400);
    } catch {
      copyBtn.textContent = 'Select text';
    }
  });

  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const close = () => {
    lightbox?.classList.remove('open');
    lightbox?.setAttribute('aria-hidden', 'true');
    if (lightboxImage) lightboxImage.src = '';
  };
  document.querySelectorAll('[data-lightbox]').forEach(img => {
    img.addEventListener('click', () => {
      if (!lightbox || !lightboxImage) return;
      lightboxImage.src = img.src;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });
  document.getElementById('lightboxClose')?.addEventListener('click', close);
  lightbox?.addEventListener('click', e => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();
