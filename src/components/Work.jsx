import { useState } from 'react';
import { ASSET } from './ui';

export const WORK = [
  {
    id: 'teton-ridge',
    cat: 'Spatial · Circle', year: '2026',
    title: 'Teton Ridge', sub: 'Cowboy Christmas 2026',
    tex: 'leopard', photo: null, accent: '#3C0606',
    desc: "Full-scale event branding for Teton Ridge's annual Cowboy Christmas activation — signage systems, stage design, and every touchpoint from the parking lot to the arena floor.",
  },
  {
    id: 'seicon-iii',
    cat: 'Brand Identity', year: '2026',
    title: 'SEICon III', sub: 'Conference branding system',
    tex: null, photo: null, seicon: true, accent: '#000000',
    desc: 'Complete conference identity for SEICon III — visual language, motion graphics, wayfinding, and all print collateral for the three-day event.',
  },
  {
    id: 'sanmina',
    cat: 'Spatial · Circle', year: '2025',
    title: 'Sanmina', sub: 'Trade-show booth',
    tex: 'zebra', photo: null, accent: '#3C0606',
    desc: "Trade-show booth design for Sanmina at the industry's largest annual conference — from concept through final install.",
  },
  {
    id: 'circle-campaign',
    cat: 'Campaign · Circle', year: '2026',
    title: 'Circle 2026', sub: 'Annual brand campaign',
    tex: null, photo: 'editorial-cherries', accent: '#3C0606',
    desc: "Campaign concepting and art direction for Circle's 2026 brand push — key visuals, messaging hierarchy, and rollout across digital and print channels.",
  },
  {
    id: 'blvd-editorial',
    cat: 'Brand Identity', year: '2025',
    title: 'BLVD Editorial', sub: 'Magazine brand identity',
    tex: null, photo: 'heels', accent: '#000000',
    desc: 'Identity system for a new editorial property — logotype, masthead, grid system, and the visual language that carries across print and digital editions.',
  },
  {
    id: 'neon-atelier',
    cat: 'Packaging', year: '2025',
    title: 'Neon Atelier', sub: 'Product packaging suite',
    tex: null, photo: 'matchbox', accent: '#3C0606',
    desc: 'Packaging design for a luxury skincare launch — structure exploration, illustration direction, and the unboxing moment.',
  },
  {
    id: 'summit-festival',
    cat: 'Spatial / Experiential', year: '2024',
    title: 'Summit Festival', sub: 'Experiential environment',
    tex: null, photo: 'editorial-phone', accent: '#0E6771',
    desc: 'Spatial branding for a multi-day music and culture festival — entrance activations, stage environments, and the branded moments people photographed.',
  },
];

function photoBg(photo, tex) {
  if (photo) return `url(${ASSET}/photos/${photo}.jpg)`;
  if (tex === 'leopard') return `url(${ASSET}/textures/Patterns_Leopard.jpg)`;
  if (tex === 'zebra') return `url(${ASSET}/textures/Patterns_Zebra.jpg)`;
  return null;
}

// Four projects that have photos — used in the right-side collage
const COLLAGE = [
  { id: 'circle-campaign',  src: `${ASSET}/photos/editorial-cherries.jpg`, area: 'a' },
  { id: 'blvd-editorial',   src: `${ASSET}/photos/heels.jpg`,              area: 'b' },
  { id: 'summit-festival',  src: `${ASSET}/photos/editorial-phone.jpg`,    area: 'c' },
  { id: 'neon-atelier',     src: `${ASSET}/photos/matchbox.jpg`,           area: 'd' },
];

function CollagePhoto({ src, area, label, year, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        gridArea: area,
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 2,
      }}
    >
      {/* Hover overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(26,26,46,0.42)',
        opacity: hov ? 1 : 0,
        transition: 'opacity .2s ease',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-end', padding: 14,
      }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '.18em',
          textTransform: 'uppercase', color: 'rgba(247,243,239,.7)', marginBottom: 4,
        }}>{year}</div>
        <div style={{
          fontFamily: 'var(--font-serif-display)', fontSize: 16, fontWeight: 500,
          color: '#F7F3EF', lineHeight: 1.1,
        }}>{label}</div>
      </div>
    </div>
  );
}

export function Work({ onOpen }) {
  const [hovIdx, setHovIdx] = useState(null);

  const byId = Object.fromEntries(WORK.map(p => [p.id, p]));

  return (
    <section id="work" style={{ background: '#F7F3EF', scrollMarginTop: 64, padding: '72px 28px 80px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'start' }} className="work-split-grid">

        {/* ── Left: label + heading + project list ── */}
        <div>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.2em',
            textTransform: 'uppercase', color: 'rgba(26,26,46,.38)', marginBottom: 14,
          }}>
            Case Studies / Since 2024
          </div>

          <h2 style={{
            fontFamily: 'var(--font-serif-display)', fontWeight: 500,
            fontSize: 'clamp(34px, 4.5vw, 56px)', letterSpacing: '-.015em',
            margin: '0 0 40px', color: '#1A1A2E', lineHeight: 1,
          }}>
            Selected<br />
            <span style={{ fontStyle: 'italic' }}>Work</span>
          </h2>

          {/* Project list */}
          <div style={{ borderTop: '1px solid rgba(26,26,46,.1)' }}>
            {WORK.map((p, i) => (
              <button
                key={p.id}
                onClick={() => onOpen(p)}
                onMouseEnter={() => setHovIdx(i)}
                onMouseLeave={() => setHovIdx(null)}
                style={{
                  display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
                  width: '100%', background: 'none', border: 'none', borderBottom: '1px solid rgba(26,26,46,.1)',
                  padding: '16px 0', cursor: 'pointer', textAlign: 'left',
                  gap: 12,
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-serif-display)', fontWeight: 400,
                  fontSize: 'clamp(19px, 2.2vw, 26px)', color: '#1A1A2E',
                  letterSpacing: '-.01em', lineHeight: 1,
                  borderBottom: hovIdx === i ? '1px solid #1A1A2E' : '1px solid transparent',
                  transition: 'border-color .15s ease',
                }}>
                  {p.title}
                </span>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.14em',
                  textTransform: 'uppercase', color: 'rgba(26,26,46,.4)',
                  flexShrink: 0, alignSelf: 'center',
                }}>
                  {p.year}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Right: editorial photo collage ── */}
        <div style={{
          display: 'grid',
          gridTemplateAreas: '"a b" "a c" "d c"',
          gridTemplateColumns: '1.15fr 1fr',
          gridTemplateRows: '200px 160px 160px',
          gap: 8,
        }} className="work-collage">
          {COLLAGE.map(col => (
            <CollagePhoto
              key={col.id}
              src={col.src}
              area={col.area}
              label={byId[col.id]?.title}
              year={byId[col.id]?.year}
              onClick={() => onOpen(byId[col.id])}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
