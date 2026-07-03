import { useState, useRef } from 'react';
import { ASSET, Lab } from './ui';

function ScrollArrow({ dir, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={dir > 0 ? 'Next projects' : 'Previous projects'}
      style={{
        width: 44, height: 44, borderRadius: 999, flex: 'none',
        border: '1.5px solid #B2010C', cursor: 'pointer',
        background: hovered ? '#B2010C' : 'transparent',
        color: hovered ? '#F7F3EF' : '#B2010C',
        fontFamily: 'var(--font-mono)', fontSize: 17, lineHeight: 1,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background 180ms ease, color 180ms ease',
      }}
    >{dir > 0 ? '→' : '←'}</button>
  );
}

function getPhotoBg(photo) {
  if (photo === 'editorial-cherries') return `url(${ASSET}/photos/editorial-cherries.jpg)`;
  if (photo === 'heels')              return `url(${ASSET}/photos/heels.jpg)`;
  if (photo === 'matchbox')           return `url(${ASSET}/photos/matchbox.jpg)`;
  if (photo === 'editorial-phone')    return `url(${ASSET}/photos/editorial-phone.jpg)`;
  return 'none';
}

function getCatColor(cat) {
  if (/spatial|experiential/i.test(cat)) return '#0E6771';    // Teal — spatial/activation (brief-sanctioned)
  if (/brand identity|branding/i.test(cat)) return '#B2010C'; // Cherry
  if (/campaign/i.test(cat)) return '#BFC20A';                // Chartreuse — editorial/campaign
  return '#B2010C';
}

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

function WorkCard({ p, onOpen }) {
  const [hovered, setHovered] = useState(false);
  const hasPhoto = !!p.photo;
  const hasTex = !!p.tex;

  return (
    <div>
      <div
        onClick={() => onOpen(p)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: '100%', height: 280, borderRadius: 4, overflow: 'hidden',
          position: 'relative', cursor: 'pointer',
          boxShadow: hovered ? '0 24px 48px rgba(26,26,46,.22)' : '0 16px 34px rgba(26,26,46,.12)',
          transform: hovered ? 'translateY(-4px) translateZ(0)' : 'translateY(0) translateZ(0)',
          transition: 'box-shadow .2s ease, transform .2s ease',
          willChange: 'transform',
          ...(p.seicon ? {
            background: '#000000',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          } : {
            background: p.accent,
            backgroundImage: hasPhoto
              ? getPhotoBg(p.photo)
              : p.tex === 'leopard'
                ? `url(${ASSET}/textures/leopard-sm.jpg)`
                : p.tex === 'zebra'
                  ? `url(${ASSET}/textures/zebra-sm.jpg)`
                  : 'none',
            backgroundSize: 'cover', backgroundPosition: 'center',
          }),
        }}
      >
        {p.seicon && (
          <>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at center, rgba(178,1,12,0.15) 0%, transparent 70%)',
            }} />
            <div style={{ position: 'relative', textAlign: 'center', padding: '0 24px' }}>
              <div style={{ fontFamily: 'var(--font-serif-display)', fontSize: 52, fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 8 }}>SEICon III</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: '.15em', textTransform: 'uppercase', color: '#fff', marginBottom: 16 }}>2026</div>
              <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.30)', width: '60%', margin: '0 auto 16px' }} />
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: '#fff' }}>Conference Branding System</div>
            </div>
          </>
        )}
        {(hasTex || hasPhoto) && !p.seicon && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,26,46,0.22)' }} />
        )}

        {/* View overlay on hover */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.28)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: hovered ? 1 : 0,
          transition: 'opacity .2s ease',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.18em',
            textTransform: 'uppercase', color: '#fff',
            border: '1px solid rgba(255,255,255,0.7)', padding: '10px 20px', borderRadius: 2,
          }}>View project</div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 14, gap: 10 }}>
        <div>
          <h3 style={{
            fontFamily: 'var(--font-serif-display)', fontWeight: 500, fontSize: 22,
            color: '#1A1A2E', margin: 0, lineHeight: 1,
          }}>{p.title}</h3>
          <div style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 14,
            color: 'rgba(26,26,46,.5)', marginTop: 3,
          }}>{p.sub}</div>
        </div>
        <Lab color={getCatColor(p.cat)} style={{ whiteSpace: 'nowrap', textAlign: 'right', fontSize: 10 }}>{p.cat}</Lab>
      </div>
    </div>
  );
}

export function Work({ onOpen }) {
  const scrollRef = useRef(null);
  const drag = useRef(null);

  const scrollByCards = (dir) => scrollRef.current?.scrollBy({ left: dir * 324, behavior: 'smooth' });

  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse') return;
    const el = scrollRef.current;
    el.setPointerCapture(e.pointerId);
    drag.current = { startX: e.clientX, startLeft: el.scrollLeft, moved: false };
  };
  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 5) d.moved = true;
    scrollRef.current.scrollLeft = d.startLeft - dx;
  };
  const endDrag = () => { setTimeout(() => { drag.current = null; }, 0); };
  const onClickCapture = (e) => {
    if (drag.current?.moved) { e.preventDefault(); e.stopPropagation(); }
  };

  return (
    <section id="work" className="cv-auto" style={{ background: '#F7F3EF', scrollMarginTop: 64 }}>
      <div style={{ padding: '60px 28px 0', maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap', flex: 1, minWidth: 260 }}>
            <div style={{ width: '100%', marginBottom: 8 }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.2em',
                textTransform: 'uppercase', color: 'rgba(26,26,46,.38)',
              }}>Case Studies / Work</span>
            </div>
            <h2 className="headline-reveal" style={{
              fontFamily: 'var(--font-serif-display)', fontWeight: 500,
              fontSize: 'clamp(34px,5vw,58px)', letterSpacing: '-.015em', margin: 0, color: '#1A1A2E',
            }}>Selected Work</h2>
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 17, color: 'rgba(26,26,46,.5)' }}>
              — real projects, spec dreams, &amp; everything I've talked my way into
            </span>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <ScrollArrow dir={-1} onClick={() => scrollByCards(-1)} />
            <ScrollArrow dir={1} onClick={() => scrollByCards(1)} />
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        style={{
          display: 'flex', overflowX: 'auto', gap: 24,
          padding: '30px 28px 48px',
          scrollSnapType: 'x proximity',
          WebkitOverflowScrolling: 'touch',
          alignItems: 'flex-start',
        }} className="work-scroll">
        {WORK.map((p) => (
          <div key={p.id} style={{ flex: 'none', width: 300, scrollSnapAlign: 'start' }}>
            <WorkCard p={p} onOpen={onOpen} />
          </div>
        ))}
      </div>
    </section>
  );
}
