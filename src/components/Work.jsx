import { ASSET, Marquee, Lab } from './ui';

const WORK = [
  {
    cat: 'Spatial · Circle', title: 'Teton Ridge', sub: 'Cowboy Christmas 2026',
    tex: 'leopard', accent: 'var(--amber-900)',
  },
  {
    cat: 'Brand Identity', title: 'SEICon III', sub: 'Conference branding system',
    tex: null, accent: 'var(--teal-900)',
  },
  {
    cat: 'Spatial · Circle', title: 'Sanmina', sub: 'Trade-show booth',
    tex: 'zebra', accent: 'var(--azure-700)',
  },
];

function WorkCard({ p }) {
  return (
    <div>
      <div style={{
        width: '100%', height: 280, borderRadius: 4, overflow: 'hidden', position: 'relative',
        background: p.accent,
        backgroundImage: p.tex ? `url(${ASSET}/textures/${p.tex}-sm.jpg)` : 'none',
        backgroundSize: 'cover', backgroundPosition: 'center',
        boxShadow: '0 16px 34px rgba(26,26,46,.12)',
      }}>
        {p.tex && <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,26,46,0.22)' }} />}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 14, gap: 10 }}>
        <div>
          <h3 style={{
            fontFamily: 'var(--font-serif-display)', fontWeight: 500, fontSize: 24,
            color: 'var(--ink)', margin: 0, lineHeight: 1,
          }}>{p.title}</h3>
          <div style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 15,
            color: 'var(--fg2)', marginTop: 3,
          }}>{p.sub}</div>
        </div>
        <Lab color="var(--crimson-500)" style={{ whiteSpace: 'nowrap', textAlign: 'right' }}>{p.cat}</Lab>
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" style={{ background: 'var(--cream)', paddingTop: 40, paddingBottom: 20, scrollMarginTop: 64 }}>
      <Marquee text="SELECTED WORK" />
      <div style={{
        maxWidth: 1040, margin: '0 auto', padding: '34px 28px 40px',
        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24,
      }} className="ed-work-grid">
        {WORK.map(p => <WorkCard key={p.title} p={p} />)}
      </div>
    </section>
  );
}
