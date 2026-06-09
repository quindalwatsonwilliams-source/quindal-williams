import { useEffect } from 'react';

export function LabelRevealManager() {
  useEffect(() => {
    function setup(immediate) {
      const els = Array.from(document.querySelectorAll('[data-label-reveal]'));

      if (immediate || els.length === 0) return;

      els.forEach(el => el.classList.add('needs-reveal'));

      const obs = new IntersectionObserver((entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        visible.forEach((entry, i) => {
          const el = entry.target;
          el.style.setProperty('--reveal-delay', `${i * 80}ms`);
          el.classList.remove('needs-reveal');
          el.classList.add('is-revealed');
          obs.unobserve(el);
        });
      }, { threshold: 0.3 });

      els.forEach(el => obs.observe(el));
    }

    const onDone = (e) => setup(e.detail?.immediate || false);
    document.addEventListener('loadingComplete', onDone);
    return () => document.removeEventListener('loadingComplete', onDone);
  }, []);

  return null;
}
