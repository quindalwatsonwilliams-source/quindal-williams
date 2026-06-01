import { ASSET, Lab, Pill } from './ui';

const EXPERIENCE = [
  {
    role: 'Creative Director', org: 'Circle', location: 'Las Vegas, NV',
    period: '2023 — Present', color: 'var(--crimson-500)',
    items: [
      'Lead creative direction for experiential marketing activations, trade-show environments, and conference identity systems.',
      'Designed and built the Teton Ridge western-themed experiential booth at the National Finals Rodeo (Cowboy Christmas 2026).',
      'Delivered full identity, signage, badge, and stage package for SEICon III — scaled from tote bag to jumbotron.',
      'Directed Sanmina Corporation\'s trade-show presence including booth architecture, lit product plinths, and brand environment.',
    ],
  },
  {
    role: 'Freelance Creative Director', org: 'Independent', location: 'Remote',
    period: '2021 — Present', color: 'var(--magenta-500)',
    items: [
      'Brand identity, packaging, campaigns, and creative direction for founders, service brands, and culture-makers.',
      'Developed Sugar Hour spec packaging system — nostalgic candy concept with Lisa-Frank saturation and embossed sticker details.',
      '30+ brands shaped across identity, spatial, print, and digital touchpoints.',
    ],
  },
];

const EDUCATION = [
  {
    degree: 'BFA, Graphic Design', org: 'Savannah College of Art and Design (SCAD)',
    period: 'Jan 2026 — Expected 2029', color: 'var(--teal-700)',
    note: 'Enrolled while working full-time. Studio launch planned at graduation.',
  },
];

const SKILLS = [
  { label: 'Brand Identity', color: 'var(--crimson-500)' },
  { label: 'Creative Direction', color: 'var(--magenta-500)' },
  { label: 'Spatial / Experiential', color: 'var(--teal-700)' },
  { label: 'Campaigns', color: 'var(--azure-700)' },
  { label: 'Packaging', color: 'var(--amber-700)' },
  { label: 'Art Direction', color: 'var(--olive-700)' },
  { label: 'Typography', color: 'var(--crimson-500)' },
  { label: 'Print Design', color: 'var(--magenta-500)' },
  { label: 'Adobe Creative Suite', color: 'var(--teal-700)' },
  { label: 'Figma', color: 'var(--azure-700)' },
  { label: 'Event + Trade-show Production', color: 'var(--amber-700)' },
  { label: 'Wayfinding + Signage', color: 'var(--olive-700)' },
];

function SectionHead({ children, color = 'var(--crimson-500)' }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28,
      paddingBottom: 14, borderBottom: `2px solid ${color}`,
    }}>
      <h2 style={{
        fontFamily: 'var(--font-serif-display)', fontWeight: 500,
        fontSize: 'clamp(22px,3vw,30px)', letterSpacing: '-.01em', margin: 0, color: 'var(--ink)',
      }}>{children}</h2>
    </div>
  );
}

export function Resume({ onBack }) {
  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{
        background: 'var(--ink)',
        backgroundImage: `linear-gradient(rgba(26,26,46,.94),rgba(26,26,46,.94)), url(${ASSET}/textures/leopard-sm.jpg)`,
        backgroundSize: 'cover',
        padding: '52px 28px 48px',
        color: 'var(--cream)',
      }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <button onClick={onBack} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em',
            textTransform: 'uppercase', color: 'rgba(247,243,239,.55)',
            padding: 0, marginBottom: 28, display: 'flex', alignItems: 'center', gap: 6,
          }}>← Back</button>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <Lab color="var(--amber-900)" style={{ marginBottom: 10 }}>Curriculum Vitae</Lab>
              <h1 style={{
                fontFamily: 'var(--font-serif-display)', fontWeight: 500,
                fontSize: 'clamp(42px,7vw,80px)', lineHeight: .9, letterSpacing: '-.02em', margin: 0,
              }}>
                Quindal<br />
                <span style={{ fontStyle: 'italic', color: 'var(--crimson-300)' }}>Williams</span>
              </h1>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.12em',
                textTransform: 'uppercase', color: 'rgba(247,243,239,.6)', marginTop: 14,
              }}>
                Creative Director · Experiential Design · Las Vegas, NV
              </p>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Pill onClick={() => window.print()}>Print / Save PDF</Pill>
              <Pill dark onClick={() => window.open('mailto:hi@quindalwilliams.com')}>Get in touch</Pill>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '52px 28px 80px' }}>

        {/* Summary */}
        <div style={{ marginBottom: 52 }}>
          <p style={{
            fontFamily: 'var(--font-serif)', fontSize: 20, lineHeight: 1.6,
            color: 'var(--ink)', margin: 0,
          }}>
            Creative director with a background in experiential design, brand identity, and campaigns.
            Currently directing work at <strong>Circle</strong> in Las Vegas while completing a BFA at <strong>SCAD</strong>.
            Building toward an independent studio at graduation — this is Phase 1.
          </p>
        </div>

        {/* Experience */}
        <div style={{ marginBottom: 52 }}>
          <SectionHead color="var(--crimson-500)">Experience</SectionHead>
          {EXPERIENCE.map(e => (
            <div key={e.role} style={{ marginBottom: 36 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 8 }}>
                <div>
                  <span style={{
                    fontFamily: 'var(--font-serif-display)', fontWeight: 500, fontSize: 22,
                    color: 'var(--ink)',
                  }}>{e.role}</span>
                  <span style={{
                    fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18,
                    color: e.color, marginLeft: 8,
                  }}>— {e.org}</span>
                </div>
                <Lab color="var(--fg3)">{e.period} · {e.location}</Lab>
              </div>
              <ul style={{ margin: '14px 0 0', paddingLeft: 18, listStyle: 'none' }}>
                {e.items.map((item, i) => (
                  <li key={i} style={{
                    fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.65,
                    color: 'var(--fg1)', marginBottom: 8, paddingLeft: 14, position: 'relative',
                  }}>
                    <span style={{
                      position: 'absolute', left: 0, color: e.color, fontWeight: 700,
                    }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div style={{ marginBottom: 52 }}>
          <SectionHead color="var(--teal-700)">Education</SectionHead>
          {EDUCATION.map(e => (
            <div key={e.degree}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 8 }}>
                <div>
                  <span style={{
                    fontFamily: 'var(--font-serif-display)', fontWeight: 500, fontSize: 22,
                    color: 'var(--ink)',
                  }}>{e.degree}</span>
                </div>
                <Lab color="var(--fg3)">{e.period}</Lab>
              </div>
              <div style={{
                fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 17,
                color: e.color, marginTop: 4,
              }}>{e.org}</div>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.04em',
                textTransform: 'uppercase', color: 'var(--fg3)', marginTop: 8, lineHeight: 1.6,
              }}>{e.note}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div>
          <SectionHead color="var(--magenta-500)">Skills</SectionHead>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {SKILLS.map(s => (
              <span key={s.label} style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.1em',
                textTransform: 'uppercase', color: s.color,
                border: `1.5px solid ${s.color}`, borderRadius: 2,
                padding: '7px 12px',
              }}>{s.label}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
