import { ASSET, Lab } from './ui';

const WORK = [
  {
    cat: 'Spatial · Circle', catColor: 'var(--amber-700)',
    title: 'Teton Ridge', sub: 'Cowboy Christmas 2026',
    tex: 'leopard', accent: 'var(--amber-900)',
  },
  {
    cat: 'Brand Identity', catColor: 'var(--magenta-500)',
    title: 'SEICon III', sub: 'Conference branding system',
    tex: null, accent: 'var(--teal-900)',
  },
  {
    cat: 'Spatial · Circle', catColor: 'var(--teal-700)',
    title: 'Sanmina', sub: 'Trade-show booth',
    tex: 'zebra', accent: 'var(--azure-700)',
  },
];

function WorkCard({ p }) {
  return (
    <div>
      <div style={{
        width: '100%', height: 280, borderRadius: 4, overflow: 'hidden', position: 'relative',
        background: p.accent,
        backgroundImage: p.tex === 'leopard'
          ? `url(${ASSET}/textures/leopard-sm.jpg)`
          : p.tex === 'zebra'
            ? `url(${ASSET}/textures/zebra-sm.jpg)`
            : 'none',
        backgroundSize: 'cover', backgroundPosition: 'center',
        boxShadow: '0 16px 34px rgba(26,26,46,.12)',
      }}>
        {p.tex && <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,26,46,0.22)' }} />}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 14, gap: 10 }}>
        <div>
          <h3 style={{
            fontFamily: 'var(--font-serif-display)', fontWeight: 500, fontSize: 24,
            color: '#1A1A2E', margin: 0, lineHeight: 1,
          }}>{p.title}</h3>
          <div style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 15,
            color: '#55556b', marginTop: 3,
          }}>{p.sub}</div>
        </div>
        <Lab color={p.catColor} style={{ whiteSpace: 'nowrap', textAlign: 'right' }}>{p.cat}</Lab>
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" style={{ background: '#F7F3EF', scrollMarginTop: 64 }}>
      {/* Section header */}
      <div style={{ padding: '60px 28px 0', maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
          <h2 style={{
            fontFamily: 'var(--font-serif-display)', fontWeight: 500,
            fontSize: 'clamp(34px,5vw,58px)', letterSpacing: '-.015em', margin: 0, color: '#1A1A2E',
          }}>Selected Work</h2>
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 17, color: '#55556b' }}>
            — real projects, spec dreams, &amp; everything I've talked my way into
          </span>
        </div>
      </div>

      <div style={{
        maxWidth: 1040, margin: '0 auto', padding: '30px 28px 56px',
        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24,
      }} className="ed-work-grid">
        {WORK.map(p => <WorkCard key={p.title} p={p} />)}
      </div>
    </section>
  );
}
