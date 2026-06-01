import { ASSET, Eyebrow, Tag, Sticker, MascotSlot } from './ui';

export function Hero({ onCharacter, onWork }) {
  return (
    <header style={{ position: 'relative', overflow: 'hidden' }}>

      {/* ── Leopard banner strip ─────────────────── */}
      <div style={{
        height: 64,
        backgroundImage: `url(${ASSET}/textures/leopard-sm.jpg)`,
        backgroundSize: '320px',
        borderBottom: '3px solid var(--ink)',
        position: 'relative',
        display: 'flex', alignItems: 'center', padding: '0 30px', gap: 18,
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,26,46,0.38)' }} />
        {['★', '✦', '★', '✦', '★', '✦', '★', '✦', '★', '✦'].map((s, i) => (
          <span key={i} style={{
            position: 'relative', zIndex: 1,
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 22, color: 'var(--amber-900)',
            transform: `rotate(${i % 2 === 0 ? -8 : 8}deg)`,
            display: 'inline-block',
          }}>{s}</span>
        ))}
      </div>

      {/* ── Main hero content ────────────────────── */}
      <div style={{ padding: '60px 30px 80px', position: 'relative' }}>

        {/* floating stickers */}
        <div style={{ position: 'absolute', top: 50, right: '7%' }}>
          <Sticker rot={-15} bg="var(--teal-700)" fg="#fff" size={72}>✦</Sticker>
        </div>
        <div style={{ position: 'absolute', bottom: 110, left: '5%' }}>
          <Sticker rot={12} bg="var(--magenta-300)" size={58}>★</Sticker>
        </div>
        <div style={{ position: 'absolute', top: 30, left: '38%' }}>
          <Sticker rot={6} bg="var(--crimson-500)" fg="#fff" size={44}>✶</Sticker>
        </div>

        <div style={{
          maxWidth: 1180, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1.25fr .75fr',
          gap: 40, alignItems: 'center',
        }} className="hero-grid">

          {/* ── Left: text ── */}
          <div>
            <Eyebrow>Creative director · Experiential design · Las Vegas</Eyebrow>

            {/* Big statement headline */}
            <h1 style={{
              fontFamily: 'var(--font-serif-display)',
              fontWeight: 500, lineHeight: .96,
              fontSize: 'clamp(48px,7vw,96px)',
              letterSpacing: '-.02em',
              margin: '20px 0 0',
            }}>
              The adulthood<br />I was promised<br />
              <span style={{
                fontFamily: 'var(--font-display)', fontWeight: 600,
                color: 'var(--crimson-500)',
                WebkitTextStroke: '1px var(--crimson-500)',
              }}>as a kid.</span>
            </h1>

            <p style={{
              fontFamily: 'var(--font-serif)', fontSize: 21, lineHeight: 1.5,
              color: 'var(--fg2)', maxWidth: 480, marginTop: 26,
            }}>
              I'm Quindal — I build brands and experiences for people who refuse to be boring.
              Maximalist taste, editorial warmth, a little bit of whimsy.
            </p>

            {/* CTA row */}
            <div style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap', alignItems: 'center' }}>
              <button onClick={onCharacter} style={{
                fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 16,
                padding: '15px 28px', borderRadius: 999, cursor: 'pointer',
                background: 'var(--amber-900)', color: 'var(--ink)',
                border: '3px solid var(--ink)',
                boxShadow: '5px 5px 0 var(--ink)',
                letterSpacing: '.02em',
              }}>✦ Build your character</button>
              <button onClick={onWork} style={{
                fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 16,
                padding: '15px 28px', borderRadius: 999, cursor: 'pointer',
                background: 'transparent', color: 'var(--ink)',
                border: '2.5px solid var(--ink)',
              }}>See the work →</button>
            </div>

            {/* Zebra-print sticker badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              marginTop: 26, padding: '10px 18px',
              backgroundImage: `url(${ASSET}/textures/zebra-sm.jpg)`,
              backgroundSize: '180px',
              border: '2.5px solid var(--ink)',
              borderRadius: 999,
              boxShadow: '3px 3px 0 var(--ink)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(247,243,239,0.78)' }} />
              <span style={{
                position: 'relative', fontFamily: 'var(--font-sans)', fontWeight: 700,
                fontSize: 13, letterSpacing: '.06em', color: 'var(--ink)',
              }}>● AVAILABLE 2026</span>
              <span style={{
                position: 'relative', fontFamily: 'var(--font-sans)', fontWeight: 400,
                fontSize: 13, color: 'var(--fg2)',
              }}>Las Vegas / remote</span>
            </div>
          </div>

          {/* ── Right: mascot slot with leopard frame ── */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            {/* Leopard background panel (tilted) */}
            <div style={{
              position: 'absolute', inset: '-8px -8px auto auto',
              width: '80%', height: '94%', borderRadius: 28,
              backgroundImage: `url(${ASSET}/textures/leopard-sm.jpg)`,
              backgroundSize: '280px',
              transform: 'rotate(5deg)',
              border: '3px solid var(--ink)',
              boxShadow: '4px 4px 0 var(--ink)',
            }} />
            <MascotSlot w={300} h={400} style={{ position: 'relative', background: 'var(--cream)' }} />
          </div>
        </div>
      </div>
    </header>
  );
}
