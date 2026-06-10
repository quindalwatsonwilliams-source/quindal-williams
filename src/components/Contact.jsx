import { ASSET, Note, Pill, Lab } from './ui';


export function Contact() {
  return (
    <footer id="contact" className="cv-auto" style={{
      background: '#1A1A2E', color: '#F7F3EF',
      padding: '70px 28px 60px', scrollMarginTop: 54,
      backgroundImage: `linear-gradient(rgba(26,26,46,.93),rgba(26,26,46,.93)), url(${ASSET}/textures/leopard-sm.jpg)`,
      backgroundSize: 'cover', position: 'relative',
    }}>
      {/* Typography watermark */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 0, pointerEvents: 'none', overflow: 'hidden',
        opacity: 0.04,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='420' height='90'%3E%3Ctext transform='rotate(-20 210 45)' x='210' y='54' text-anchor='middle' font-family='Georgia%2Cserif' font-size='17' fill='%23F7F3EF' letter-spacing='8'%3EQUINDAL WILLIAMS%3C/text%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }} />
      <div style={{ maxWidth: 1040, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>

        <Note size={30} rot={-4} color="var(--amber-900)" style={{ display: 'inline-block' }}>
          got a world that needs building?
        </Note>
        <h2 className="headline-reveal" style={{
          fontFamily: 'var(--font-serif-display)', fontWeight: 500,
          fontSize: 'clamp(36px,6vw,76px)', lineHeight: 1, letterSpacing: '-.02em', margin: '12px 0 28px',
        }}>
          Let's make the <span style={{ fontStyle: 'italic', color: 'var(--crimson-300)' }}>loud</span> version.
        </h2>

        {/* CTA */}
        <div style={{ margin: '0 auto 36px' }}>
          <Pill onClick={() => window.open('/intake.html', '_blank')}>
            Start a Project →
          </Pill>
        </div>

        {/* Social links */}
        <div style={{
          display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap',
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em',
          textTransform: 'uppercase', color: 'rgba(247,243,239,.7)',
        }}>
          <span>@quindalwilliams</span>
          <span>·</span>
          <span>q@quindal.art</span>
          <span>·</span>
          <span>Las Vegas</span>
        </div>

        <div style={{
          marginTop: 48, paddingBottom: 20,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap',
        }}>
          <img src={`${ASSET}/logos/monogram-red.png`} style={{ height: 40 }} alt="QW" />
          <div style={{
            fontFamily: 'var(--font-serif-display)', fontStyle: 'italic', fontSize: 18, color: '#F7F3EF',
          }}>Still coloring outside the lines.</div>
        </div>
        <div style={{ borderTop: '1px solid #3C0606', paddingTop: 16 }}>
          <div style={{
            fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '.12em',
            textTransform: 'uppercase', color: '#4E4F06', textAlign: 'center',
          }}>© 2026 QUINDAL WILLIAMS  ·  PHASE 1 — CREATIVE DIRECTOR</div>
        </div>
      </div>
      {/* Pen sticker */}
      <img src={`${ASSET}/Stickers/sticker-pen.png`} alt="" className="sticker-deco" style={{
        position: 'absolute', right: '4%', bottom: '14%', width: 110,
        transform: 'rotate(-20deg)', zIndex: 6, pointerEvents: 'none',
        filter: 'drop-shadow(2px 3px 8px rgba(0,0,0,0.25))',
      }} />
    </footer>
  );
}

export function Footer() { return null; }
