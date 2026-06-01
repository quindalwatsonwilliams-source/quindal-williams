import { ASSET, Eyebrow, Sticker, Btn, MascotSlot } from './ui';

export function Hero({ onCharacter, onWork }) {
  return (
    <header style={{ position: 'relative', overflow: 'hidden', padding: '70px 30px 80px' }}>
      <div style={{ position: 'absolute', top: 60, right: '8%' }}>
        <Sticker rot={-12} bg="var(--teal-700)" fg="#fff" size={70}>✦</Sticker>
      </div>
      <div style={{ position: 'absolute', bottom: 120, left: '6%' }}>
        <Sticker rot={10} bg="var(--magenta-300)" size={56}>★</Sticker>
      </div>

      <div style={{
        maxWidth: 1180, margin: '0 auto', display: 'grid',
        gridTemplateColumns: '1.25fr .75fr', gap: 40, alignItems: 'center',
      }} className="hero-grid">
        <div>
          <Eyebrow>Creative director · Experiential design · Las Vegas</Eyebrow>
          <h1 style={{
            fontFamily: 'var(--font-serif-display)', fontWeight: 500, lineHeight: .98,
            fontSize: 'clamp(48px,7vw,96px)', letterSpacing: '-.02em', margin: '20px 0 0',
          }}>
            The adulthood<br />I was promised<br />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--crimson-500)' }}>
              as a kid.
            </span>
          </h1>
          <p style={{
            fontFamily: 'var(--font-serif)', fontSize: 21, lineHeight: 1.5,
            color: 'var(--fg2)', maxWidth: 480, marginTop: 26,
          }}>
            I'm Quindal — I build brands and experiences for people who refuse to be boring.
            Maximalist taste, editorial warmth, a little bit of whimsy.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
            <Btn variant="sticker" big onClick={onCharacter}>✦ Build your character</Btn>
            <Btn variant="ghost" big onClick={onWork}>See the work</Btn>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <div style={{
            position: 'absolute', inset: '-6px -6px auto auto', width: '78%', height: '92%',
            borderRadius: 28,
            backgroundImage: `url(${ASSET}/textures/leopard-sm.jpg)`,
            backgroundSize: 'cover',
            transform: 'rotate(4deg)', border: '2.5px solid var(--ink)',
          }} />
          <MascotSlot w={300} h={400} style={{ position: 'relative', background: 'var(--cream)' }} />
        </div>
      </div>
    </header>
  );
}
