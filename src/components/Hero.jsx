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
            <Lab color="#1A1A2E">Creative direction, events,<br />and brand identity<br />with a point of view</Lab>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 8 }}>
              <Note size={22} rot={-8}>say less ✦</Note>
              <Arrow w={56} h={38} color="#1A1A2E" />
            </div>
          </div>

          {/* Right caption */}
          <div style={{ position: 'absolute', right: '1%', top: '20%', width: 200, textAlign: 'right', zIndex: 4 }} className="ed-cap">
            <Lab color="#1A1A2E">Trade-show environments<br />&amp; experiential design<br />built to be felt</Lab>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 4, marginTop: 8 }}>
              <Arrow w={56} h={38} flip color="#1A1A2E" />
              <Note size={22} rot={7}>that's me!</Note>
            </div>
          </div>

          {/* Stat bottom-left */}
          <div style={{ position: 'absolute', left: '3%', bottom: '7%', zIndex: 4 }} className="ed-cap">
            <div style={{ fontFamily: 'var(--font-serif-display)', fontSize: 40, fontWeight: 500, color: '#1A1A2E', lineHeight: 1 }}>
              4+
            </div>
            <Lab color="#1A1A2E" style={{ marginTop: 2 }}>years at<br />Circle</Lab>
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
            Account Manager / Creative at{' '}
            <span style={{ color: 'var(--teal-700)' }}>Circle</span>
            {' '}· BFA Graphic Design at SCAD · Las Vegas, NV
          </div>
          <Pill big onClick={onCharacter} style={{ background: 'var(--amber-900)', color: '#1A1A2E' }}>✦ Build your character</Pill>
        </div>
      </div>
    </header>
  );
}
