import { MascotSlot, Lab, Note, Arrow, Pill } from './ui';

export function Hero({ onCharacter, onWork }) {
  return (
    <header style={{ position: 'relative', background: '#F7F3EF', overflow: 'hidden', paddingTop: 30 }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative', padding: '0 28px' }}>

        {/* Giant crimson headline */}
        <h1 style={{
          fontFamily: 'var(--font-serif-display)', fontWeight: 500, textAlign: 'center',
          fontSize: 'clamp(54px, 11.5vw, 148px)', lineHeight: .9, letterSpacing: '-.02em',
          color: 'var(--crimson-500)', margin: 0, position: 'relative', zIndex: 1, whiteSpace: 'nowrap',
        }}>
          HI, <span style={{ fontStyle: 'italic', fontWeight: 400 }}>I'm</span> QUINDAL
        </h1>

        {/* Photo stage */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '-2.2vw' }}>
          <MascotSlot
            label="Hero portrait"
            style={{
              width: 'min(400px, 42vw)', height: 'min(520px, 56vw)',
              zIndex: 2, position: 'relative',
              boxShadow: '0 30px 60px rgba(26,26,46,.16)',
              borderRadius: 8, minWidth: 240, minHeight: 320,
            }}
          />

          {/* Left caption */}
          <div style={{ position: 'absolute', left: '1%', top: '26%', width: 200, zIndex: 4 }} className="ed-cap">
            <Lab color="#1A1A2E">Creative director for<br />brands with<br />a personality</Lab>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 8 }}>
              <Note size={22} rot={-8}>say less ✦</Note>
              <Arrow w={56} h={38} color="#1A1A2E" />
            </div>
          </div>

          {/* Right caption */}
          <div style={{ position: 'absolute', right: '1%', top: '20%', width: 200, textAlign: 'right', zIndex: 4 }} className="ed-cap">
            <Lab color="#1A1A2E">Experiential design<br />&amp; brand worlds<br />you can walk through</Lab>
          </div>

          {/* Stat bottom-left */}
          <div style={{ position: 'absolute', left: '3%', bottom: '7%', zIndex: 4 }} className="ed-cap">
            <div style={{
              background: '#000000',
              borderRadius: 100,
              padding: '8px 16px',
              display: 'inline-block',
            }}>
              <div style={{ fontFamily: 'var(--font-serif-display)', fontSize: 40, fontWeight: 500, color: '#ffffff', lineHeight: 1 }}>
                30+
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.14em',
                textTransform: 'uppercase', color: '#ffffff', marginTop: 2,
              }}>
                brands shaped
              </div>
            </div>
          </div>

          {/* CTA bottom-right */}
          <div style={{ position: 'absolute', right: '3%', bottom: '9%', zIndex: 4 }} className="ed-cap">
            <Pill big onClick={onWork}>See the work</Pill>
          </div>
        </div>

        {/* Below-hero row */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 4px 36px', gap: 16, flexWrap: 'wrap',
        }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 19, color: '#55556b', maxWidth: 420 }}>
            Maximalist taste,{' '}
            <span style={{ color: 'var(--teal-700)' }}>editorial warmth,</span>
            {' '}and a little bit of whimsy.
          </div>
          <Pill big onClick={onCharacter} style={{ background: 'var(--amber-900)', color: '#1A1A2E' }}>✦ Build your character</Pill>
        </div>
      </div>
    </header>
  );
}
