import { ASSET } from './ui';

export function Ticker({
  items = ['CREATIVE DIRECTOR', 'LAS VEGAS', 'MAXIMALIST', 'EDITORIAL', 'EXPERIENTIAL DESIGN'],
  tex = 'leopard',
  fg = '#fff',
  overlay = 'rgba(26,26,46,0.42)',
  speed = 24,
  big = false,
}) {
  const chunk = items.join('  ✦  ') + '  ✦  ';
  const full  = Array(8).fill(chunk).join('');

  return (
    <div style={{
      overflow: 'hidden',
      position: 'relative',
      backgroundImage: `url(${ASSET}/textures/${tex}-sm.jpg)`,
      backgroundSize: tex === 'zebra' ? '400px' : '320px',
      backgroundPosition: 'center',
      borderTop: '3px solid var(--ink)',
      borderBottom: '3px solid var(--ink)',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: overlay }} />
      <div style={{
        position: 'relative', zIndex: 1,
        display: 'flex', alignItems: 'center',
        padding: big ? '20px 0' : '13px 0',
        animation: `marquee ${speed}s linear infinite`,
        width: 'max-content',
      }}>
        {[full, full].map((t, i) => (
          <span key={i} aria-hidden={i > 0} style={{
            whiteSpace: 'nowrap',
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: big ? 18 : 13,
            letterSpacing: '.22em',
            textTransform: 'uppercase',
            color: fg,
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
}
