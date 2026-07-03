import { ASSET, Lab } from './ui';


const ED_VALUES = [
  {
    t: 'Play',
    bg: '#3C0606',
    topBar: '#B2010C',
    textColor: '#F7F3EF',
    numColor: 'rgba(247,243,239,.45)',
    d: "The best work happens when it doesn't feel like work. I protect the part of the process where we're still allowed to be ridiculous — that's where the good ideas live.",
  },
  {
    t: 'Craft',
    bg: '#B2010C',
    topBar: '#F7F3EF',
    textColor: '#F7F3EF',
    numColor: 'rgba(247,243,239,.45)',
    d: 'Taste is the strategy. Kerning, color, the weight of a word — the small decisions are the brand. I sweat them so the whole thing feels inevitable.',
  },
  {
    t: 'Warmth',
    bg: '#F7F3EF',
    topBar: '#3C0606',
    textColor: '#1A1A2E',
    numColor: 'rgba(26,26,46,.35)',
    d: "Editorial doesn't have to mean cold. Everything I make should feel like it was made by a person who actually likes you — rich, generous, a little bit human.",
  },
  {
    t: 'Intention',
    bg: '#000000',
    topBar: '#B2010C',
    textColor: '#F7F3EF',
    numColor: 'rgba(247,243,239,.35)',
    d: 'Maximalism, but on purpose. Every color block, every sticker, every loud choice earns its place. Nothing here is decoration for its own sake.',
  },
];

export function Values() {
  return (
    <section style={{ background: 'var(--cream)', position: 'relative' }}>
      {/* Cards on dark zebra — header lives inside the dark block */}
      <div style={{
        padding: '52px 28px 62px',
        background: '#1A1A2E',
        backgroundImage: `linear-gradient(rgba(26,26,46,.22), rgba(26,26,46,.28)), url(${ASSET}/textures/Patterns_Zebra.jpg)`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        {/* Section header inside dark block */}
        <div style={{ maxWidth: 920, margin: '0 auto 36px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(247,243,239,.40)', marginBottom: 10 }}>
              What I believe
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
            <h2 className="headline-reveal" style={{
              fontFamily: 'var(--font-serif-display)', fontWeight: 500,
              fontSize: 'clamp(34px,5vw,58px)', letterSpacing: '-.015em', margin: 0, color: '#F7F3EF',
            }}>My Values</h2>
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 17, color: 'rgba(247,243,239,.45)' }}>
              — what I believe about good work
            </span>
          </div>
        </div>
        <div style={{ maxWidth: 920, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="ed-values-grid">
          {ED_VALUES.map((v, i) => (
            <div key={v.t} style={{
              background: v.bg,
              borderTop: `3px solid ${v.topBar}`,
              padding: '26px 26px 28px', position: 'relative',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <h3 style={{
                  fontFamily: 'var(--font-serif-display)', fontWeight: 500, fontSize: 26,
                  letterSpacing: '.02em', color: v.textColor, margin: 0, textTransform: 'uppercase',
                }}>{v.t}</h3>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, color: v.numColor, marginTop: 4,
                }}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: 1.75,
                color: v.textColor === '#1A1A2E' ? 'rgba(26,26,46,.68)' : 'rgba(247,243,239,.78)',
                margin: 0, textTransform: 'uppercase', letterSpacing: '.01em',
              }}>{v.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lips sticker */}
      <img src={`${ASSET}/Stickers/sticker-lips.png`} alt="" className="sticker-deco" style={{
        position: 'absolute', right: '-10px', top: '18%', width: 180,
        transform: 'rotate(-6deg)', zIndex: 6, pointerEvents: 'none',
        filter: 'drop-shadow(3px 5px 10px rgba(0,0,0,0.20))',
      }} />
    </section>
  );
}
