import { useRef } from 'react';

export function MagneticWrapper({ children, strength = 0.3, max = 15 }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = Math.max(-max, Math.min(max, (e.clientX - (r.left + r.width / 2)) * strength));
    const dy = Math.max(-max, Math.min(max, (e.clientY - (r.top + r.height / 2)) * strength));
    el.style.transition = 'transform 100ms ease';
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = 'transform 400ms cubic-bezier(0.23, 1, 0.32, 1)';
    el.style.transform = 'translate(0, 0)';
  };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ display: 'inline-block' }}>
      {children}
    </div>
  );
}
