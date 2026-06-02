import { ASSET, Lab } from './ui';

function getCatColor(cat) {
  if (/spatial|experiential/i.test(cat)) return '#F8BB0B';
  if (/brand identity|branding/i.test(cat)) return '#E72388';
  if (/campaign/i.test(cat)) return '#0E6771';
  return '#A82967';
}

const WORK = [
  {
    cat: 'Spatial · Circle',
    title: 'Teton Ridge', sub: 'Cowboy Christmas 2026',
    tex: 'leopard', accent: 'var(--amber-900)',
  },
  {
    cat: 'Brand Identity',
    title: 'SEICon III', sub: 'Conference branding system',
    tex: null, seicon: true, accent: '#E8320A',
  },
  {
    cat: 'Spatial · Circle',
    title: 'Sanmina', sub: 'Trade-show booth',
    tex: 'zebra', accent: 'var(--azure-700)',
  },
];

const STAGGER = [0, 24, 12];

function WorkCard({ p }) {
  return (
    <div>
      {p.seicon ? (
        <div style={{
          width: '100%', height: 280, borderRadius: 4, overflow: 'hidden', position: 'relative',
          background: '#E8320A',
          boxShadow: '0 16px 34px rgba(26,26,46,.12)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }} />
          <div style={{ position: 'relative', textAlign: 'center', padding: '0 24px' }}>
            <div style={{
              fontFamily: 'var(--font-serif-display)', fontSize: 48, fontWeight: 500,
              color: '#ffffff', lineHeight: 1.1, marginBottom: 8,
            }}>SEICon III</div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 16, letterSpacing: '.2em',
              textTransform: 'uppercase', color: '#ffffff', marginBottom: 12,
            }}>2026</div>
            <hr style={{
              border: 'none', borderTop: '1px solid rgba(255,255,255,0.4)',
              margin: '0 0 12px',
            }} />
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.1em',
              textTransform: 'uppercase', color: '#ffffff',
            }}>Conference Branding System</div>
          </div>
        </div>
      ) : (
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
      )}
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
        <Lab color={getCatColor(p.cat)} style={{ whiteSpace: 'nowrap', textAlign: 'right' }}>{p.cat}</Lab>
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
        alignItems: 'start',
      }} className="ed-work-grid">
        {WORK.map((p, i) => (
          <div key={p.title} className={`work-card-stagger-${i}`}>
            <WorkCard p={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
