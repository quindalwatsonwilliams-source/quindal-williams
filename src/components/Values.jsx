import { ASSET, Lab } from './ui';

const ED_VALUES = [
  {
    t: 'Play',
    bg: '#E72388',
    topBar: '#F6DBEA',
    textColor: '#F7F3EF',
    numColor: '#F6DBEA',
    d: "The best work happens when it doesn't feel like work. I protect the part of the process where we're still allowed to be ridiculous — that's where the good ideas live.",
  },
  {
    t: 'Craft',
    bg: '#0E6771',
    topBar: '#B7D1D4',
    textColor: '#F7F3EF',
    numColor: '#B7D1D4',
    d: 'Taste is the strategy. Kerning, color, the weight of a word — the small decisions are the brand. I sweat them so the whole thing feels inevitable.',
  },
  {
    t: 'Warmth',
    bg: '#F8BB0B',
    topBar: '#3C0606',
    textColor: '#000000',
    numColor: '#000000',
    d: "Editorial doesn't have to mean cold. Everything I make should feel like it was made by a person who actually likes you — rich, generous, a little bit human.",
  },
  {
    t: 'Intention',
    bg: '#0D1F30',
    topBar: '#8EB8E1',
    textColor: '#F7F3EF',
    numColor: '#8EB8E1',
    d: 'Maximalism, but on purpose. Every color block, every sticker, every loud choice earns its place. Nothing here is decoration for its own sake.',
  },
];

export function Values() {
  return (
    <section style={{ background: 'var(--cream)' }}>
      {/* Section header */}
      <div style={{ padding: '60px 28px 0', maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
          <h2 style={{
            fontFamily: 'var(--font-serif-display)', fontWeight: 500,
            fontSize: 'clamp(34px,5vw,58px)', letterSpacing: '-.015em', margin: 0,
          }}>My Values</h2>
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 17, color: 'var(--fg2)' }}>
            — what I believe about good work
          </span>
        </div>
      </div>

      {/* Cards on dark zebra */}
      <div style={{
        marginTop: 28, padding: '52px 28px 62px',
        background: '#1A1A2E',
        backgroundImage: `linear-gradient(rgba(26,26,46,.88), rgba(26,26,46,.95)), url(${ASSET}/textures/zebra-sm.jpg)`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
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
                color: v.textColor === '#000000' ? 'rgba(0,0,0,0.70)' : 'rgba(247,243,239,.78)',
                margin: 0, textTransform: 'uppercase', letterSpacing: '.01em',
              }}>{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
