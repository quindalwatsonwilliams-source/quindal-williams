import { MascotSlot, Lab, Note, Pill } from './ui';

export function About() {
  return (
    <section id="about" style={{ background: '#3C0606', padding: '78px 28px', scrollMarginTop: 64 }}>
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>

        <Note size={30} rot={-4} color="var(--amber-700)" style={{ marginLeft: 4 }}>Hey, I'm Quindal —</Note>
        <h2 style={{
          fontFamily: 'var(--font-serif-display)', fontWeight: 500,
          fontSize: 'clamp(28px,4vw,50px)', lineHeight: 1.04,
          letterSpacing: '-.01em', color: 'var(--ink)', margin: '10px 0 0', maxWidth: 760,
        }}>
          Creative director, experiential designer,<br />
          and your <span style={{ fontStyle: 'italic', color: 'var(--magenta-500)' }}>creative partner.</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 44, marginTop: 38, alignItems: 'start' }} className="ed-intro-grid">

          {/* Left: portrait + body */}
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <MascotSlot
                label="Portrait"
                style={{ width: '100%', height: 300, borderRadius: 4, flex: 'none' }}
              />
              <div style={{ alignSelf: 'center' }}>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: 12.5, lineHeight: 1.85,
                  color: 'var(--ink)', margin: 0, textTransform: 'uppercase', letterSpacing: '.02em',
                }}>
                  I remember the moment I decided to stop making things that were merely fine. Now I build brands and spaces with taste, warmth, and a little bit of mischief.
                </p>
                <div style={{ marginTop: 20 }}>
                  <Pill
                    style={{ background: 'var(--teal-700)' }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Work with me
                  </Pill>
                </div>
              </div>
            </div>
          </div>

          {/* Right: typewriter copy + polaroid */}
          <div style={{ position: 'relative' }}>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: 12.5, lineHeight: 1.85,
              color: 'var(--ink)', margin: 0, textTransform: 'uppercase', letterSpacing: '.02em',
            }}>
              I help service brands, founders, and culture-makers look as good as the work they do — identity, campaigns, packaging, and environments you can walk through.
            </p>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: 12.5, lineHeight: 1.85,
              color: 'var(--fg2)', margin: '16px 0 0', textTransform: 'uppercase', letterSpacing: '.02em',
            }}>
              If you've ever felt like your brand was playing it too safe — I've been there. Let's make the loud, warm, unmistakable version instead.
            </p>

            {/* Polaroid */}
            <div style={{ marginTop: 26, width: 180, marginLeft: 'auto', position: 'relative', transform: 'rotate(3deg)' }}>
              <div style={{
                position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%) rotate(-4deg)',
                width: 70, height: 24,
                background: 'rgba(231,35,136,.28)', border: '1px solid rgba(231,35,136,.4)',
              }} />
              <div style={{ background: '#fff', padding: '10px 10px 34px', boxShadow: '0 12px 26px rgba(26,26,46,.16)' }}>
                <MascotSlot
                  label="Polaroid"
                  style={{ width: '100%', height: 160, borderRadius: 2, flex: 'none' }}
                />
                <Note size={18} rot={-3} style={{ textAlign: 'center', marginTop: 8 }}>at play, always</Note>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
