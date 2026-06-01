import { ASSET, Pill } from './ui';

const LINKEDIN = 'https://www.linkedin.com/in/quindal-%E2%80%8F%E2%80%8F%E2%80%8E-%E2%80%8E-%E2%80%8F%E2%80%8F%E2%80%8E-%E2%80%8E-730631186/';

const EXPERIENCE = [
  {
    role: 'Account Manager / Creative', org: 'Circle', location: 'Las Vegas, NV',
    period: 'Apr 2025 — Present', color: 'var(--crimson-500)',
    items: [
      'Lead creative direction and account management for experiential marketing activations and client campaigns.',
      'Bridge sales and creative — translating client vision into spatial and visual deliverables.',
      'Brand identity, event design, and client-facing creative across trade-show and live marketing environments.',
    ],
  },
  {
    role: 'Project Manager', org: 'Circle', location: 'Las Vegas, NV',
    period: 'Sep 2023 — May 2025', color: 'var(--magenta-500)',
    items: [
      'Managed end-to-end delivery for large-scale events, activations, and client initiatives.',
      'Led cross-functional teams across design, logistics, and vendor coordination.',
      'Oversaw business planning, purchase orders, and production timelines for multi-market rollouts.',
    ],
  },
  {
    role: 'Regional Coordinator', org: 'Circle', location: 'Las Vegas, NV',
    period: 'Apr 2022 — Sep 2025', color: 'var(--amber-700)',
    items: [
      'Coordinated regional operations, vendor relationships, and event logistics across multiple markets.',
      'Managed order fulfillment and operational support for large-format events.',
    ],
  },
  {
    role: 'Queue Host', org: 'Louis Vuitton', location: 'Las Vegas, NV',
    period: 'Oct 2021 — Mar 2022', color: 'var(--azure-700)',
    items: [
      'Delivered elevated luxury client experience in a high-volume flagship retail environment.',
    ],
  },
  {
    role: 'Beauty Advisor', org: 'Ulta Beauty', location: 'Bettendorf, IA',
    period: 'Aug 2019 — Sep 2021', color: 'var(--olive-700)',
    items: [
      'Provided personalized beauty consultations and drove sales through product expertise and client relationships.',
    ],
  },
];

const EDUCATION = [
  {
    degree: 'BFA, Graphic Design',
    org: 'Savannah College of Art and Design (SCAD)',
    period: 'Jan 2026 — Present', color: 'var(--teal-700)',
    note: 'Enrolled while working full-time.',
  },
];

const CERTIFICATIONS = [
  { label: 'Adobe Certified Associate — Visual Communication (Photoshop)', color: 'var(--crimson-500)' },
  { label: 'Claude Code 101: From Prompt to Product', color: 'var(--teal-700)' },
  { label: 'Graphic Design: Core Principles for Visual Design', color: 'var(--magenta-500)' },
  { label: 'Finance Essentials for Small Business', color: 'var(--amber-700)' },
];

const SKILLS = [
  { label: 'Brand Identity', color: 'var(--crimson-500)' },
  { label: 'Creative Direction', color: 'var(--magenta-500)' },
  { label: 'Account Management', color: 'var(--azure-700)' },
  { label: 'Project Management', color: 'var(--teal-700)' },
  { label: 'Event Planning', color: 'var(--amber-700)' },
  { label: 'Experiential / Trade-show', color: 'var(--olive-700)' },
  { label: 'Team Leadership', color: 'var(--crimson-500)' },
  { label: 'Adobe Photoshop', color: 'var(--magenta-500)' },
  { label: 'Adobe Illustrator', color: 'var(--teal-700)' },
  { label: 'Sales & Marketing', color: 'var(--azure-700)' },
  { label: 'Graphic Design', color: 'var(--amber-700)' },
  { label: 'Visual Design', color: 'var(--olive-700)' },
  { label: 'Business Planning', color: 'var(--crimson-500)' },
  { label: 'Problem Solving', color: 'var(--magenta-500)' },
  { label: 'Customer Experience', color: 'var(--teal-700)' },
  { label: 'Multitasking', color: 'var(--azure-700)' },
];

function LinkedInIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GhostBtn({ onClick, children }) {
  return (
    <button onClick={onClick} style={{
      background: 'transparent',
      border: '1px solid rgba(247,243,239,.28)',
      color: 'rgba(247,243,239,.75)',
      fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.16em',
      textTransform: 'uppercase', padding: '9px 18px',
      cursor: 'pointer', borderRadius: 2,
      display: 'flex', alignItems: 'center', gap: 7,
      transition: 'border-color .15s, color .15s',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(247,243,239,.7)'; e.currentTarget.style.color = '#F7F3EF'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(247,243,239,.28)'; e.currentTarget.style.color = 'rgba(247,243,239,.75)'; }}
    >
      {children}
    </button>
  );
}

function SideLabel({ children, color }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18,
    }}>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '.24em',
        textTransform: 'uppercase', color,
      }}>{children}</span>
      <div style={{ flex: 1, height: 1, background: color, opacity: .25 }} />
    </div>
  );
}

export function Resume({ onBack }) {
  return (
    <div style={{ background: '#0E0203', minHeight: '100vh' }}>

      {/* ── HERO HEADER ── */}
      <div style={{
        position: 'relative',
        background: '#1a0405',
        backgroundImage: `linear-gradient(135deg, #1a0405 55%, #2e0608 100%), url(${ASSET}/textures/leopard-sm.jpg)`,
        backgroundSize: 'cover',
        padding: '36px 52px 56px',
        borderBottom: '2px solid var(--crimson-500)',
        overflow: 'hidden',
        color: '#F7F3EF',
      }}>
        {/* Ghosted monogram watermark */}
        <img src={`${ASSET}/logos/monogram-red.png`} aria-hidden style={{
          position: 'absolute', right: 40, bottom: -30,
          height: 300, opacity: .06, userSelect: 'none', pointerEvents: 'none',
        }} alt="" />

        {/* Back button */}
        <button onClick={onBack} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.16em',
          textTransform: 'uppercase', color: 'rgba(247,243,239,.38)',
          padding: 0, marginBottom: 44, display: 'flex', alignItems: 'center', gap: 6,
        }}>← Back to site</button>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 32 }}>

          {/* Name block */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.3em',
              textTransform: 'uppercase', color: 'var(--crimson-300)',
              marginBottom: 14,
            }}>Curriculum Vitae</div>

            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300, fontSize: 'clamp(68px, 10vw, 122px)',
              lineHeight: .86, letterSpacing: '.01em', margin: 0,
              color: '#F7F3EF',
            }}>
              Quindal<br />
              <em style={{ color: 'var(--crimson-300)', fontStyle: 'italic', fontWeight: 300 }}>Williams</em>
            </h1>

            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.18em',
              textTransform: 'uppercase', color: 'rgba(247,243,239,.45)',
              marginTop: 22, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
            }}>
              <span>Account Manager / Creative</span>
              <span style={{ color: 'var(--crimson-500)', opacity: .7 }}>·</span>
              <span>Circle</span>
              <span style={{ color: 'var(--crimson-500)', opacity: .7 }}>·</span>
              <span>Las Vegas, NV</span>
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9, alignItems: 'stretch' }}>
            <Pill onClick={() => window.print()}>Print / Save PDF</Pill>
            <GhostBtn onClick={() => window.open(LINKEDIN, '_blank', 'noopener')}>
              <LinkedInIcon /> LinkedIn
            </GhostBtn>
            <GhostBtn onClick={() => window.open('mailto:q@quindal.art')}>
              q@quindal.art
            </GhostBtn>
          </div>

        </div>
      </div>

      {/* ── BODY: SIDEBAR + MAIN ── */}
      <div style={{ display: 'flex', minHeight: 'calc(100vh - 380px)', alignItems: 'stretch' }}>

        {/* SIDEBAR */}
        <aside style={{
          width: 272, flexShrink: 0,
          background: '#120203',
          borderRight: '1px solid rgba(192,57,43,.18)',
          padding: '44px 30px 60px',
          color: '#F7F3EF',
        }}>

          {/* Skills */}
          <div style={{ marginBottom: 40 }}>
            <SideLabel color="var(--crimson-500)">Skills</SideLabel>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {SKILLS.map(s => (
                <span key={s.label} style={{
                  fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '.08em',
                  textTransform: 'uppercase', color: s.color,
                  border: `1px solid ${s.color}`, borderRadius: 2,
                  padding: '5px 8px', opacity: .85,
                }}>{s.label}</span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div style={{ marginBottom: 40 }}>
            <SideLabel color="var(--teal-700)">Education</SideLabel>
            {EDUCATION.map(e => (
              <div key={e.degree}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 400, fontSize: 17, color: '#F7F3EF', lineHeight: 1.3,
                }}>{e.degree}</div>
                <div style={{
                  fontFamily: 'var(--font-serif)', fontStyle: 'italic',
                  fontSize: 13, color: e.color, marginTop: 5, lineHeight: 1.5,
                }}>{e.org}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '.1em',
                  textTransform: 'uppercase', color: 'rgba(247,243,239,.35)',
                  marginTop: 7,
                }}>{e.period}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '.06em',
                  color: 'rgba(247,243,239,.3)', marginTop: 5, lineHeight: 1.6,
                }}>{e.note}</div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div style={{ marginBottom: 40 }}>
            <SideLabel color="var(--azure-700)">Certifications</SideLabel>
            {CERTIFICATIONS.map((c, i) => (
              <div key={i} style={{
                fontFamily: 'var(--font-sans)', fontSize: 12, lineHeight: 1.55,
                color: 'rgba(247,243,239,.6)', marginBottom: 10,
                paddingLeft: 12, position: 'relative',
              }}>
                <span style={{ position: 'absolute', left: 0, top: 2, color: c.color, fontSize: 10 }}>—</span>
                {c.label}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <SideLabel color="var(--magenta-500)">Contact</SideLabel>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.06em', color: 'rgba(247,243,239,.5)', lineHeight: 2.2 }}>
              <div>q@quindal.art</div>
              <div>quindal.art</div>
              <div>Las Vegas, NV</div>
            </div>
          </div>

        </aside>

        {/* MAIN CONTENT */}
        <main style={{
          flex: 1,
          background: 'var(--cream)',
          padding: '48px 52px 80px',
        }}>

          {/* Summary */}
          <p style={{
            fontFamily: 'var(--font-serif)', fontSize: 18, lineHeight: 1.7,
            color: 'var(--ink)', margin: '0 0 52px',
            borderLeft: '3px solid var(--crimson-500)',
            paddingLeft: 22,
          }}>
            Creative with 4+ years at <strong>Circle</strong> spanning coordination, project management, and account-side creative work.
            Currently completing a BFA in Graphic Design at <strong>SCAD</strong> while working full-time.
            Building toward an independent studio at graduation — this is Phase 1.
          </p>

          {/* Experience label */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 14,
            marginBottom: 36,
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '.28em',
              textTransform: 'uppercase', color: 'var(--crimson-500)',
            }}>Experience</span>
            <div style={{ flex: 1, height: 1, background: 'var(--crimson-500)', opacity: .18 }} />
          </div>

          {/* Experience entries */}
          {EXPERIENCE.map((e, idx) => (
            <div key={idx} style={{
              display: 'flex', gap: 22,
              marginBottom: 38,
              paddingBottom: 38,
              borderBottom: idx < EXPERIENCE.length - 1 ? '1px solid var(--line)' : 'none',
            }}>
              {/* Year watermark */}
              <div style={{
                flexShrink: 0, width: 58, textAlign: 'right', paddingTop: 2,
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300, fontSize: 44, lineHeight: 1,
                color: e.color, opacity: .28, letterSpacing: '-.02em',
                userSelect: 'none',
              }}>
                {e.period.match(/\d{4}/)?.[0]}
              </div>

              {/* Entry */}
              <div style={{ flex: 1 }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'flex-start', flexWrap: 'wrap', gap: 6,
                  marginBottom: 14,
                }}>
                  <div>
                    <div style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 500, fontSize: 21, color: 'var(--ink)', lineHeight: 1.2,
                    }}>{e.role}</div>
                    <div style={{
                      fontFamily: 'var(--font-serif)', fontStyle: 'italic',
                      fontSize: 15, color: e.color, marginTop: 3,
                    }}>{e.org}</div>
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '.1em',
                    textTransform: 'uppercase', color: 'var(--fg3)',
                    textAlign: 'right', lineHeight: 1.8,
                  }}>
                    {e.period}<br />{e.location}
                  </div>
                </div>

                {e.items.map((item, i) => (
                  <div key={i} style={{
                    fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.65,
                    color: 'var(--fg1)', marginBottom: 6,
                    paddingLeft: 14, position: 'relative',
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: e.color, fontWeight: 700, fontSize: 13 }}>—</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}

        </main>
      </div>
    </div>
  );
}
