import { useState } from 'react';
import { ASSET } from './ui';

const SERVICES = [
  { n: '01', t: 'Branding', nc: '#F8BB0B', d: 'Identity systems, logotypes, and the rules that keep a brand feeling like itself everywhere.' },
  { n: '02', t: 'Creative Direction', nc: '#E72388', d: 'The vision and the taste-keeping — concept, art direction, and making sure the whole thing sings.' },
  { n: '03', t: 'Campaigns', nc: '#F8BB0B', d: 'Launch ideas with legs — concepts, key art, and rollout across the channels that matter.' },
  { n: '04', t: 'Packaging', nc: '#0E6771', d: 'Objects you want to keep. Structure, illustration, and the unboxing moment.' },
  { n: '05', t: 'Spatial / Experiential', nc: '#F8BB0B', d: 'Brand worlds you can walk through — booths, activations, and environments built to be felt.' },
];

function ServiceRow({ s }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid', gridTemplateColumns: '56px 1fr 1.4fr',
        gap: 24, alignItems: 'center', padding: '22px 6px',
        borderBottom: '1px solid var(--line)',
        background: hovered ? 'rgba(248,187,11,0.06)' : 'transparent',
        transition: 'background 200ms ease',
        position: 'relative',
      }}
      className="svc-row"
    >
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 20, fontWeight: 700,
        letterSpacing: '.14em', textTransform: 'uppercase', color: s.nc, lineHeight: 1.7,
      }}>{s.n}</div>
      <h3 style={{
        fontFamily: 'var(--font-serif-display)', fontWeight: 500,
        fontSize: 'clamp(20px,2.4vw,28px)', margin: 0, lineHeight: 1.05,
        transform: hovered ? 'translateX(8px)' : 'translateX(0)',
        transition: 'transform 200ms ease',
      }}>{s.t}</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: 1.75,
          color: 'var(--fg2)', margin: 0, textTransform: 'uppercase', letterSpacing: '.02em',
          flex: 1,
        }}>{s.d}</p>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 18, color: s.nc,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 200ms ease',
          flex: 'none',
        }}>→</span>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="cv-auto" style={{ background: 'var(--cream)', padding: '70px 28px', scrollMarginTop: 64, position: 'relative' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32, flexWrap: 'wrap' }}>
          <h2 className="headline-reveal" style={{
            fontFamily: 'var(--font-serif-display)', fontWeight: 500,
            fontSize: 'clamp(34px,5vw,58px)', letterSpacing: '-.015em', margin: 0,
          }}>What I do</h2>
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 17, color: 'var(--fg2)' }}>
            — pricing on request, personality included free.
          </span>
        </div>
        <div style={{ borderTop: '1.5px solid var(--ink)' }}>
          {SERVICES.map(s => <ServiceRow key={s.n} s={s} />)}
        </div>
      </div>

      {/* Olives sticker */}
      <img src={`${ASSET}/Stickers/sticker-olives.png`} alt="" className="sticker-deco" style={{
        position: 'absolute', left: '2%', bottom: '10%', width: 130,
        transform: 'rotate(10deg)', zIndex: 6, pointerEvents: 'none',
        filter: 'drop-shadow(2px 3px 8px rgba(0,0,0,0.18))',
      }} />
    </section>
  );
}
