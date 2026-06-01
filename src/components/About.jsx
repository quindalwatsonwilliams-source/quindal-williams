import { ASSET, Eyebrow, Tag, Sticker, MascotSlot } from './ui';

function StatRow({ k, v }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', gap: 12,
      padding: '9px 0', borderBottom: '1px dashed rgba(247,243,239,.22)',
    }}>
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--amber-700)' }}>{k}</span>
      <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 14, color: 'var(--cream)', textAlign: 'right' }}>{v}</span>
    </div>
  );
}

export function About() {
  return (
    <section id="about" style={{ scrollMarginTop: 70, position: 'relative', overflow: 'hidden' }}>

      {/* ── Zebra side rail (left) ── */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 22,
        backgroundImage: `url(${ASSET}/textures/zebra-sm.jpg)`,
        backgroundSize: '120px',
        borderRight: '2.5px solid var(--ink)',
        zIndex: 2,
        opacity: 0.85,
      }} />
      {/* ── Zebra side rail (right) ── */}
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: 22,
        backgroundImage: `url(${ASSET}/textures/zebra-sm.jpg)`,
        backgroundSize: '120px',
        borderLeft: '2.5px solid var(--ink)',
        zIndex: 2,
        opacity: 0.85,
      }} />

      {/* ── Main content ── */}
      <div style={{ padding: '80px 60px', background: 'var(--ink)', color: 'var(--cream)' }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '.85fr 1.15fr',
          gap: 50, alignItems: 'start',
        }} className="about-grid">

          {/* Player card */}
          <div style={{
            background: 'var(--magenta-900)', borderRadius: 26, padding: 22,
            border: '2.5px solid var(--cream)', boxShadow: '8px 8px 0 var(--crimson-500)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <Eyebrow color="var(--amber-900)">Player Card</Eyebrow>
              <Sticker size={40} bg="var(--amber-900)" rot={8}>★</Sticker>
            </div>
            <MascotSlot w="100%" h={300} label="Quindal" style={{ background: 'var(--cream)', border: '2px solid var(--cream)' }} />
            <div style={{ marginTop: 16 }}>
              <StatRow k="Class"     v="Creative Director"  />
              <StatRow k="Guild"     v="Circle · Las Vegas"  />
              <StatRow k="Training"  v="SCAD BFA"            />
              <StatRow k="Signature" v="Maximalist warmth"   />
              <StatRow k="Quest"     v="Found her own studio"/>
            </div>
          </div>

          {/* Bio */}
          <div>
            <Eyebrow>About</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-serif-display)', fontWeight: 500,
              fontSize: 'clamp(34px,4.6vw,58px)', lineHeight: 1.02,
              letterSpacing: '-.015em', margin: '14px 0 0', color: 'var(--cream)',
            }}>
              Hi, I'm Quindal.
            </h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 20, lineHeight: 1.6, color: 'rgba(247,243,239,.86)', marginTop: 22 }}>
              I make brands that feel like the adulthood you were promised as a kid — the Saturday-morning saturation,
              the freedom to be a little unhinged, the conviction that taste and play belong in the same room.
            </p>
            <blockquote style={{
              fontFamily: 'var(--font-serif-alt)', fontStyle: 'italic', fontWeight: 400,
              fontSize: 'clamp(26px,3.2vw,38px)', lineHeight: 1.25, color: 'var(--amber-900)',
              margin: '30px 0', padding: 0,
            }}>
              "Feminine but not soft. Editorial with warmth. Playful, never childish."
            </blockquote>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.7, color: 'rgba(247,243,239,.78)' }}>
              By day I direct experiential work at <strong style={{ color: 'var(--cream)' }}>Circle</strong> in Las Vegas —
              booths, conferences, and brand worlds you can walk through. I'm a <strong style={{ color: 'var(--cream)' }}>SCAD</strong> BFA
              student building toward my own studio over the next five years.
            </p>

            {/* Leopard-print accent bar */}
            <div style={{
              marginTop: 28, padding: '14px 20px',
              backgroundImage: `url(${ASSET}/textures/leopard-sm.jpg)`,
              backgroundSize: '280px',
              border: '2.5px solid var(--cream)',
              borderRadius: 14,
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,26,46,0.55)' }} />
              <div style={{ position: 'relative', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Tag bg="var(--crimson-500)" fg="#fff">● Available 2026</Tag>
                <Tag bg="transparent" fg="var(--cream)" style={{ border: '2px solid var(--cream)' }}>Las Vegas / remote</Tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
