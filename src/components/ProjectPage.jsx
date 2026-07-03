import { ASSET, Lab, Pill } from './ui';

export function ProjectPage({ project: p, onBack }) {
  const CoverBlock = () => (
    <div style={{
      width: '100%', height: 480, position: 'relative', overflow: 'hidden',
      background: p.accent,
      backgroundImage: p.tex === 'leopard'
        ? `url(${ASSET}/textures/Patterns_Leopard.jpg)`
        : p.tex === 'zebra'
          ? `url(${ASSET}/textures/Patterns_Zebra.jpg)`
          : 'none',
      backgroundSize: 'cover', backgroundPosition: 'center',
    }}>
      {p.tex && <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,26,46,0.22)' }} />}
      {p.seicon && (
        <>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(177,32,12,0.15) 0%, transparent 70%)',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
          }}>
            <div>
              <div style={{ fontFamily: 'var(--font-serif-display)', fontSize: 72, fontWeight: 700, color: '#fff', lineHeight: 1 }}>{p.title}</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 16, letterSpacing: '.2em', textTransform: 'uppercase', color: '#fff', marginTop: 12 }}>{p.year}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );

  return (
    <div style={{ background: '#F7F3EF', minHeight: 'calc(100vh - 54px)' }}>

      {/* Project header */}
      <div style={{
        background: '#3C0606', padding: '40px 28px 44px',
        backgroundImage: `linear-gradient(rgba(60,6,6,.92),rgba(60,6,6,.92)), url(${ASSET}/textures/Patterns_Leopard.jpg)`,
        backgroundSize: 'cover',
      }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <button onClick={onBack} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em',
            textTransform: 'uppercase', color: 'rgba(247,243,239,.5)', padding: 0, marginBottom: 24,
            display: 'flex', alignItems: 'center', gap: 6,
          }}>← Back to work</button>

          <Lab style={{ color: '#B2010C', marginBottom: 12 }}>{p.cat} · {p.year}</Lab>
          <h1 style={{
            fontFamily: 'var(--font-serif-display)', fontWeight: 500,
            fontSize: 'clamp(40px,6vw,72px)', lineHeight: .95,
            letterSpacing: '-.02em', color: '#F7F3EF', margin: '0 0 10px',
          }}>{p.title}</h1>
          <div style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic',
            fontSize: 20, color: 'rgba(247,243,239,.7)',
          }}>{p.sub}</div>
        </div>
      </div>

      {/* Cover image */}
      <CoverBlock />

      {/* Body */}
      <div style={{ maxWidth: 1040, margin: '0 auto', padding: '56px 28px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 56 }} className="proj-body-grid">

          {/* Main copy */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-serif-display)', fontWeight: 500,
              fontSize: 28, color: '#1A1A2E', margin: '0 0 18px',
            }}>About the project</h2>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 1.85,
              color: '#55556b', textTransform: 'uppercase', letterSpacing: '.02em', margin: 0,
            }}>{p.desc}</p>

            {/* Placeholder image blocks */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 40 }}>
              {[1, 2, 3, 4].map(n => (
                <div key={n} style={{
                  height: 200, background: '#EDE8E3', borderRadius: 4,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Lab color="rgba(26,26,46,.25)">Image {n}</Lab>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ borderLeft: '1px solid rgba(26,26,46,.1)', paddingLeft: 40 }} className="proj-sidebar">
            {[
              { label: 'Year', value: p.year },
              { label: 'Type', value: p.cat },
              { label: 'Role', value: 'Creative Direction / Design' },
              { label: 'Status', value: 'Completed' },
            ].map(({ label, value }) => (
              <div key={label} style={{ marginBottom: 28 }}>
                <Lab color="rgba(26,26,46,.4)" style={{ marginBottom: 4 }}>{label}</Lab>
                <div style={{
                  fontFamily: 'var(--font-serif-display)', fontWeight: 500,
                  fontSize: 18, color: '#1A1A2E',
                }}>{value}</div>
              </div>
            ))}
            <div style={{ marginTop: 16 }}>
              <Pill style={{ background: '#3C0606' }} onClick={onBack}>← All work</Pill>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
