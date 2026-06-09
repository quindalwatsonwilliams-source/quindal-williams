import { useEffect, useRef } from 'react';

const DARK_PREFIXES = [
  'rgb(60, 6, 6)',   // #3C0606
  'rgb(13, 31, 48)', // #0D1F30
  'rgb(93, 21, 57)', // #5D1539
  'rgb(0, 0, 0)',    // #000000
  'rgb(26, 26, 46)', // #1A1A2E
  'rgb(93, 9, 9)',   // #5D0909
];

function getFirstBg(el) {
  let node = el;
  for (let i = 0; i < 8; i++) {
    if (!node || node === document.body) return null;
    const bg = window.getComputedStyle(node).backgroundColor;
    if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') return bg;
    node = node.parentElement;
  }
  return null;
}

export function CustomCursor() {
  const ref = useRef(null);

  useEffect(() => {
    const cursor = ref.current;
    if (!cursor) return;
    // Touch devices: keep default cursor
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let raf = null;
    let cx = -100, cy = -100;
    let interactive = false;
    let dark = false;
    // mouseover only records the target; the getComputedStyle walk happens
    // inside the rAF (and is cached per element) so it can't force style
    // recalcs mid-scroll as elements stream under the pointer.
    let pendingTarget = null;
    const bgCache = new WeakMap();

    const resolveTarget = (target) => {
      interactive = !!target.closest('a, button, [role="button"]');
      let cached = bgCache.get(target);
      if (cached === undefined) {
        const bg = getFirstBg(target);
        cached = bg ? DARK_PREFIXES.some(p => bg.startsWith(p.slice(0, -1))) : false;
        bgCache.set(target, cached);
      }
      dark = cached;
    };

    const paint = () => {
      raf = null;
      if (pendingTarget) {
        resolveTarget(pendingTarget);
        pendingTarget = null;
      }
      cursor.style.transform = `translate3d(${cx - 6}px,${cy - 6}px,0)${interactive ? ' scale(2.5)' : ''}`;
      const color = dark ? '#F7F3EF' : '#B2010C';
      cursor.style.background = interactive ? 'transparent' : color;
      cursor.style.border = interactive ? `2px solid ${color}` : '2px solid transparent';
    };

    const schedule = () => { if (!raf) raf = requestAnimationFrame(paint); };

    const onMove = (e) => {
      cx = e.clientX; cy = e.clientY;
      if (cursor.style.opacity === '0') cursor.style.opacity = '1';
      schedule();
    };

    const onOver = (e) => {
      pendingTarget = e.target;
      schedule();
    };

    const onLeave = () => { cursor.style.opacity = '0'; };
    const onEnter = () => { cursor.style.opacity = '1'; };

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} style={{
      position: 'fixed', top: 0, left: 0,
      width: 12, height: 12, borderRadius: '50%',
      background: '#B2010C', border: '2px solid transparent',
      pointerEvents: 'none', zIndex: 9999, opacity: 0,
      transition: 'background 250ms ease, border-color 250ms ease',
      willChange: 'transform',
      boxSizing: 'border-box',
    }} />
  );
}
