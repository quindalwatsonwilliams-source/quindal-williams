import { useState } from 'react';

export const ASSET = '/assets';

export function Eyebrow({ children, color = 'var(--crimson-500)', style }) {
  return (
    <div style={{
      fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12,
      letterSpacing: '.18em', textTransform: 'uppercase', color, ...style,
    }}>
      {children}
    </div>
  );
}

export function Tag({ children, bg = 'var(--magenta-100)', fg = 'var(--magenta-900)', outline, style }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13, letterSpacing: '.02em',
      borderRadius: 999, padding: '8px 16px',
      background: outline ? 'transparent' : bg,
      color: outline ? 'var(--ink)' : fg,
      border: outline ? '2px solid var(--ink)' : 'none',
      ...style,
    }}>
      {children}
    </span>
  );
}

export function Sticker({ children, bg = 'var(--amber-900)', fg = 'var(--ink)', size = 64, rot = 0, square, style }) {
  return (
    <span style={{
      width: size, height: size, flex: 'none',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      borderRadius: square ? size * 0.28 : 999, fontSize: size * 0.46,
      background: bg, color: fg, border: '2.5px solid var(--ink)',
      boxShadow: '3px 3px 0 var(--ink)', transform: `rotate(${rot}deg)`, ...style,
    }}>
      {children}
    </span>
  );
}

export function Btn({ children, variant = 'primary', onClick, style, type, big }) {
  const [press, setPress] = useState(false);
  const base = {
    fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: big ? 17 : 15,
    border: 'none', cursor: 'pointer', borderRadius: 999,
    padding: big ? '16px 32px' : '13px 26px',
    transition: 'transform .12s ease, box-shadow .12s ease',
    transform: press ? 'scale(.96)' : 'scale(1)', lineHeight: 1,
  };
  const variants = {
    primary: { background: 'var(--crimson-500)', color: '#fff' },
    sticker: {
      background: 'var(--amber-900)', color: 'var(--ink)', border: '2.5px solid var(--ink)',
      boxShadow: press ? '1px 1px 0 var(--ink)' : '4px 4px 0 var(--ink)',
    },
    ghost: { background: 'transparent', color: 'var(--ink)', border: '2px solid var(--ink)' },
    dark: { background: '#1A1A2E', color: '#F7F3EF' },
  };
  return (
    <button type={type} onClick={onClick}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)} onMouseLeave={() => setPress(false)}
      style={{ ...base, ...variants[variant], ...style }}>
      {children}
    </button>
  );
}

/* Crimson pill CTA — editorial style */
export function Pill({ children, dark, onClick, big, style }) {
  const [p, setP] = useState(false);
  return (
    <button onClick={onClick}
      onMouseDown={() => setP(true)} onMouseUp={() => setP(false)} onMouseLeave={() => setP(false)}
      style={{
        fontFamily: 'var(--font-sans)', fontWeight: 600,
        fontSize: big ? 13 : 11, letterSpacing: '.16em', textTransform: 'uppercase',
        cursor: 'pointer', color: dark ? '#F7F3EF' : '#fff',
        background: dark ? '#1A1A2E' : 'var(--crimson-500)',
        border: 'none', borderRadius: 999, padding: big ? '16px 30px' : '12px 22px',
        transform: p ? 'scale(.96)' : 'scale(1)', transition: 'transform .12s ease',
        ...style,
      }}>
      {children}
    </button>
  );
}

/* Tracked uppercase mono label */
export function Lab({ children, color = 'var(--ink)', style }) {
  return (
    <div style={{
      fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em',
      textTransform: 'uppercase', color, lineHeight: 1.7, ...style,
    }}>
      {children}
    </div>
  );
}

/* Handwritten Caveat annotation */
export function Note({ children, color = 'var(--crimson-500)', size = 26, rot = -6, style }) {
  return (
    <div style={{
      fontFamily: "'Caveat', cursive", fontSize: size, color, lineHeight: 1.05,
      transform: `rotate(${rot}deg)`, ...style,
    }}>
      {children}
    </div>
  );
}

/* Freehand curved arrow doodle */
export function Arrow({ flip, w = 76, h = 52, color = 'var(--ink)', style }) {
  return (
    <svg width={w} height={h} viewBox="0 0 76 52" fill="none"
      style={{ transform: flip ? 'scaleX(-1)' : 'none', overflow: 'visible', ...style }}>
      <path d="M4 6 C 30 2, 64 12, 70 40" stroke={color} strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M60 33 L71 41 L62 47" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

/* Oversized scrolling marquee */
export function Marquee({ text, color = 'var(--ink)' }) {
  const run = `${text}  •  ${text}  •  ${text}  •  `;
  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', padding: '10px 0' }}>
      <div className="ed-marquee">
        <span style={{
          fontFamily: 'var(--font-serif-display)', fontWeight: 600,
          fontSize: 'clamp(48px,9vw,128px)', letterSpacing: '-.02em', color, lineHeight: 1,
        }}>{run}{run}</span>
      </div>
    </div>
  );
}

export function MascotSlot({ w = 280, h = 360, label = "Quindal's cartoon character", style }) {
  return (
    <div style={{
      width: w, height: h, flex: 'none', position: 'relative',
      borderRadius: 8, border: '1.5px dashed rgba(26,26,46,.22)',
      background: '#3C0606',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: 22, ...style,
    }}>
      <img src={`${ASSET}/logos/monogram-red.png`} style={{ width: '38%', opacity: .7, marginBottom: 14 }} alt="" />
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--fg3)', lineHeight: 1.6, maxWidth: 180 }}>
        {label}
      </div>
    </div>
  );
}
