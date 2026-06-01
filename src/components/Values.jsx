import { ASSET, Marquee } from './ui';

const ED_VALUES = [
  {
    t: 'Play',
    d: 'The best work happens when it doesn\'t feel like work. I protect the part of the process where we\'re still allowed to be ridiculous — that\'s where the good ideas live.',
  },
  {
    t: 'Craft',
    d: 'Taste is the strategy. Kerning, color, the weight of a word — the small decisions are the brand. I sweat them so the whole thing feels inevitable.',
  },
  {
    t: 'Warmth',
    d: 'Editorial doesn\'t have to mean cold. Everything I make should feel like it was made by a person who actually likes you — rich, generous, a little bit human.',
  },
  {
    t: 'Intention',
    d: 'Maximalism, but on purpose. Every color block, every sticker, every loud choice earns its place. Nothing here is decoration for its own sake.',
  },
];

export function Values() {
  return (
    <section style={{ background: 'var(--cream)', paddingTop: 30 }}>
      <Marquee text="MY VALUES" />
      <div style={{
        position: 'relative', marginTop: 18, padding: '62px 28px 70px',
        background: 'var(--ink)',
        backgroundImage: `linear-gradient(rgba(26,26,46,.86), rgba(26,26,46,.94)), url(${ASSET}/textures/zebra-sm.jpg)`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ maxWidth: 920, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }} className="ed-values-grid">
          {ED_VALUES.map((v, i) => (
            <div key={v.t} style={{
              background: '#6E1410', border: '1px solid rgba(247,243,239,.14)',
              padding: '26px 26px 28px', position: 'relative',
            }}>
              <span style={{
                position: 'absolute', top: 18, right: 22,
                fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(247,243,239,.45)',
              }}>{String(i + 1).padStart(2, '0')}</span>
              <h3 style={{
                fontFamily: 'var(--font-serif-display)', fontWeight: 500, fontSize: 26,
                letterSpacing: '.02em', color: 'var(--cream)', margin: '0 0 12px', textTransform: 'uppercase',
              }}>{v.t}</h3>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: 1.75,
                color: 'rgba(247,243,239,.82)', margin: 0, textTransform: 'uppercase', letterSpacing: '.01em',
              }}>{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
