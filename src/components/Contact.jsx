import { ASSET, Note, Pill, Arrow } from './ui';

export function Contact() {
  return (
    <footer id="contact" className="cv-auto" style={{
      background: '#1A1A2E', color: '#F7F3EF',
      scrollMarginTop: 54, position: 'relative', overflow: 'hidden',
      backgroundImage: `linear-gradient(rgba(26,26,46,.88),rgba(26,26,46,.92)), url(${ASSET}/textures/leopard-sm.jpg)`,
      backgroundSize: 'cover',
    }}>
      {/* Typography watermark */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        opacity: 0.04,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='420' height='90'%3E%3Ctext transform='rotate(-20 210 45)' x='210' y='54' text-anchor='middle' font-family='Georgia%2Cserif' font-size='17' fill='%23F7F3EF' letter-spacing='8'%3EQUINDAL WILLIAMS%3C/text%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }} />

      <div style={{ maxWidth: 1040, margin: '0 auto', position: 'relative', zIndex: 1, padding: '64px 28px 0' }}>

        {/* Headline — full width */}
        <h2 className="headline-reveal" style={{
          fontFamily: 'var(--font-serif-display)', fontWeight: 500,
          fontSize: 'clamp(38px, 6.5vw, 82px)', lineHeight: .95,
          letterSpacing: '-.02em', margin: '0 0 52px', color: '#F7F3EF',
        }}>
          Let's make the{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--crimson-300)' }}>loud</span>{' '}
          version.
        </h2>

        {/* Two-column: phone left, CTA right */}
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '36px 56px', alignItems: 'center' }}>

          {/* Left — telephone card */}
          <div style={{ position: 'relative' }}>
            <img
              src={`${ASSET}/photos/telephone.jpg`}
              alt=""
              style={{
                width: '100%', maxWidth: 340,
                borderRadius: 8,
                boxShadow: '0 28px 72px rgba(0,0,0,.55)',
                display: 'block',
              }}
            />
          </div>

          {/* Right — note + button + tagline + monogram */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 28 }}>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <Note size={28} rot={-3} color="var(--amber-900)">
                got a world that needs building?
              </Note>
              <Arrow w={52} h={36} color="var(--amber-900)" style={{ marginLeft: 8 }} />
            </div>

            <Pill
              onClick={() => window.open('/intake.html', '_blank')}
              style={{ fontSize: 14, padding: '16px 40px' }}
            >
              Start a Project →
            </Pill>

            <div style={{
              display: 'flex', gap: 14, flexWrap: 'wrap',
              fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.14em',
              textTransform: 'uppercase', color: 'rgba(247,243,239,.5)',
            }}>
              <span>@quindalwilliams</span>
              <span>·</span>
              <span>q@quindal.art</span>
              <span>·</span>
              <span>Las Vegas</span>
            </div>

            <div style={{
              fontFamily: 'var(--font-serif-display)', fontStyle: 'italic',
              fontSize: 'clamp(18px, 2.2vw, 26px)', color: 'rgba(247,243,239,.45)',
              letterSpacing: '-.01em', lineHeight: 1.1,
            }}>Still coloring outside the lines.</div>

            <img src={`${ASSET}/logos/monogram-red.png`} style={{ height: 32, opacity: .6 }} alt="QW" />
          </div>
        </div>

        {/* Copyright bar */}
        <div style={{ borderTop: '1px solid #3C0606', marginTop: 52, padding: '16px 0 24px' }}>
          <div style={{
            fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '.12em',
            textTransform: 'uppercase', color: '#4E4F06',
          }}>© 2026 QUINDAL WILLIAMS  ·  PHASE 1 — CREATIVE DIRECTOR</div>
        </div>
      </div>
    </footer>
  );
}

export function Footer() { return null; }
