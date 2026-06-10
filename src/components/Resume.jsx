import { ASSET, Pill } from './ui';

const LINKEDIN = 'https://www.linkedin.com/in/quindal-%E2%80%8F%E2%80%8F%E2%80%8E-%E2%80%8E-%E2%80%8F%E2%80%8F%E2%80%8E-%E2%80%8E-730631186/';

const INK = '#1A1A2E';
const INK_60 = 'rgba(26,26,46,.6)';
const INK_45 = 'rgba(26,26,46,.45)';
const LINE = 'rgba(26,26,46,.14)';

const EXPERIENCE = [
  {
    role: 'Account Manager / Creative', org: 'Circle', location: 'Las Vegas, NV',
    period: 'Apr 2025 — Present',
    items: [
      'Lead creative direction and account management for experiential marketing activations and client campaigns.',
      'Bridge sales and creative — translating client vision into spatial and visual deliverables.',
      'Brand identity, event design, and client-facing creative across trade-show and live marketing environments.',
    ],
  },
  {
    role: 'Project Manager', org: 'Circle', location: 'Las Vegas, NV',
    period: 'Sep 2023 — May 2025',
    items: [
      'Managed end-to-end delivery for large-scale events, activations, and client initiatives.',
      'Led cross-functional teams across design, logistics, and vendor coordination.',
      'Oversaw business planning, purchase orders, and production timelines for multi-market rollouts.',
    ],
  },
  {
    role: 'Regional Coordinator', org: 'Circle', location: 'Las Vegas, NV',
    period: 'Apr 2022 — Sep 2025',
    items: [
      'Coordinated regional operations, vendor relationships, and event logistics across multiple markets.',
      'Managed order fulfillment and operational support for large-format events.',
    ],
  },
  {
    role: 'Queue Host', org: 'Louis Vuitton', location: 'Las Vegas, NV',
    period: 'Oct 2021 — Mar 2022',
    items: [
      'Delivered elevated luxury client experience in a high-volume flagship retail environment.',
    ],
  },
  {
    role: 'Beauty Advisor', org: 'Ulta Beauty', location: 'Bettendorf, IA',
    period: 'Aug 2019 — Sep 2021',
    items: [
      'Provided personalized beauty consultations and drove sales through product expertise and client relationships.',
    ],
  },
];

const EDUCATION = [
  {
    degree: 'BFA, Graphic Design',
    org: 'Savannah College of Art and Design (SCAD)',
    period: 'Jan 2026 — Present',
    note: 'Enrolled while working full-time.',
  },
];

const CERTIFICATIONS = [
  'Adobe Certified Associate — Visual Communication (Photoshop)',
  'Claude Code 101: From Prompt to Product',
  'Graphic Design: Core Principles for Visual Design',
  'Finance Essentials for Small Business',
];

const SKILLS = [
  'Brand Identity', 'Creative Direction', 'Account Management', 'Project Management',
  'Event Planning', 'Experiential / Trade-show', 'Team Leadership', 'Adobe Photoshop',
  'Adobe Illustrator', 'Sales & Marketing', 'Graphic Design', 'Visual Design',
  'Business Planning', 'Problem Solving', 'Customer Experience', 'Multitasking',
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
      border: '1px solid rgba(26,26,46,.3)',
      color: INK_60,
      fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.16em',
      textTransform: 'uppercase', padding: '9px 18px',
      cursor: 'pointer', borderRadius: 2,
      display: 'flex', alignItems: 'center', gap: 7, justifyContent: 'center',
      transition: 'border-color .15s, color .15s',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = '#B2010C'; e.currentTarget.style.color = '#B2010C'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(26,26,46,.3)'; e.currentTarget.style.color = INK_60; }}
    >
      {children}
    </button>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.28em',
        textTransform: 'uppercase', color: '#B2010C',
      }}>{children}</span>
      <div style={{ flex: 1, height: 1, background: '#B2010C', opacity: .18 }} />
    </div>
  );
}

export function Resume({ onBack }) {
  return (
    <div style={{ background: '#F7F3EF', minHeight: '100vh', color: INK }}>

      {/* ── HEADER ── */}
      <div style={{
        position: 'relative',
        padding: '34px 52px 50px',
        borderBottom: '2px solid #B2010C',
        overflow: 'hidden',
      }}>
        {/* Ghosted monogram watermark */}
        <img src={`${ASSET}/logos/monogram-red.png`} aria-hidden style={{
          position: 'absolute', right: 40, bottom: -40,
          height: 300, opacity: .05, userSelect: 'none', pointerEvents: 'none',
        }} alt="" />

        {/* Back button */}
        <button onClick={onBack} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.16em',
          textTransform: 'uppercase', color: INK_45,
          padding: 0, marginBottom: 40, display: 'flex', alignItems: 'center', gap: 6,
        }}>← Back to site</button>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 32 }}>

          {/* Name block */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.3em',
              textTransform: 'uppercase', color: '#B2010C',
              marginBottom: 16,
            }}>Curriculum Vitae</div>

            <h1 style={{
              fontFamily: 'var(--font-serif-display)',
              fontWeight: 500, fontSize: 'clamp(58px, 8.5vw, 104px)',
              lineHeight: .92, letterSpacing: '-.02em', margin: 0,
              color: INK,
            }}>
              Quindal<br />
              <em style={{ color: '#B2010C', fontStyle: 'italic', fontWeight: 400 }}>Williams</em>
            </h1>

            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.18em',
              textTransform: 'uppercase', color: INK_60,
              marginTop: 24, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
            }}>
              <span>Account Manager / Creative</span>
              <span style={{ color: '#B2010C' }}>·</span>
              <span>Circle</span>
              <span style={{ color: '#B2010C' }}>·</span>
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

      {/* ── BODY: MAIN + RIGHT SIDEBAR ── */}
      <div className="resume-body" style={{ display: 'flex', alignItems: 'stretch', maxWidth: 1180, margin: '0 auto' }}>

        {/* MAIN CONTENT */}
        <main style={{ flex: 1, padding: '52px 52px 80px', minWidth: 0 }}>

          {/* Summary */}
          <p style={{
            fontFamily: 'var(--font-serif)', fontSize: 18, lineHeight: 1.7,
            color: INK, margin: '0 0 56px',
            borderLeft: '3px solid #B2010C',
            paddingLeft: 22, maxWidth: 640,
          }}>
            Creative with 4+ years at <strong>Circle</strong> spanning coordination, project management, and account-side creative work.
            Currently completing a BFA in Graphic Design at <strong>SCAD</strong> while working full-time.
            Building toward an independent studio at graduation — this is Phase 1.
          </p>

          <SectionLabel>Experience</SectionLabel>

          {EXPERIENCE.map((e, idx) => (
            <div key={idx} style={{
              display: 'flex', gap: 24,
              marginBottom: 36,
              paddingBottom: 36,
              borderBottom: idx < EXPERIENCE.length - 1 ? `1px solid ${LINE}` : 'none',
            }}>
              {/* Year marker */}
              <div style={{
                flexShrink: 0, width: 58, textAlign: 'right', paddingTop: 4,
                fontFamily: 'var(--font-serif-display)',
                fontWeight: 400, fontSize: 38, lineHeight: 1,
                color: '#3C0606', opacity: .22, letterSpacing: '-.02em',
                userSelect: 'none',
              }} className="resume-year">
                {e.period.match(/\d{4}/)?.[0]}
              </div>

              {/* Entry */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'flex-start', flexWrap: 'wrap', gap: 6,
                  marginBottom: 14,
                }}>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-serif-display)',
                      fontWeight: 500, fontSize: 22, color: INK, lineHeight: 1.2,
                    }}>{e.role}</div>
                    <div style={{
                      fontFamily: 'var(--font-serif)', fontStyle: 'italic',
                      fontSize: 15, color: '#B2010C', marginTop: 3,
                    }}>{e.org}</div>
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '.1em',
                    textTransform: 'uppercase', color: INK_45,
                    textAlign: 'right', lineHeight: 1.8,
                  }}>
                    {e.period}<br />{e.location}
                  </div>
                </div>

                {e.items.map((item, i) => (
                  <div key={i} style={{
                    fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.65,
                    color: INK_60, marginBottom: 6,
                    paddingLeft: 14, position: 'relative',
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: '#B2010C', fontWeight: 700, fontSize: 13 }}>—</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}

        </main>

        {/* SIDEBAR */}
        <aside className="resume-aside" style={{
          width: 290, flexShrink: 0,
          borderLeft: `1px solid ${LINE}`,
          padding: '52px 0 60px 36px',
          marginRight: 52,
        }}>

          {/* Skills */}
          <div style={{ marginBottom: 44 }}>
            <SectionLabel>Skills</SectionLabel>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {SKILLS.map(s => (
                <span key={s} style={{
                  fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '.08em',
                  textTransform: 'uppercase', color: INK_60,
                  border: '1px solid rgba(26,26,46,.22)', borderRadius: 2,
                  padding: '5px 8px',
                }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div style={{ marginBottom: 44 }}>
            <SectionLabel>Education</SectionLabel>
            {EDUCATION.map(e => (
              <div key={e.degree}>
                <div style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontWeight: 500, fontSize: 18, color: INK, lineHeight: 1.3,
                }}>{e.degree}</div>
                <div style={{
                  fontFamily: 'var(--font-serif)', fontStyle: 'italic',
                  fontSize: 13, color: '#B2010C', marginTop: 5, lineHeight: 1.5,
                }}>{e.org}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '.1em',
                  textTransform: 'uppercase', color: INK_45,
                  marginTop: 7,
                }}>{e.period}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '.06em',
                  color: INK_45, marginTop: 5, lineHeight: 1.6,
                }}>{e.note}</div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div style={{ marginBottom: 44 }}>
            <SectionLabel>Certifications</SectionLabel>
            {CERTIFICATIONS.map((c, i) => (
              <div key={i} style={{
                fontFamily: 'var(--font-sans)', fontSize: 12.5, lineHeight: 1.55,
                color: INK_60, marginBottom: 10,
                paddingLeft: 14, position: 'relative',
              }}>
                <span style={{ position: 'absolute', left: 0, top: 2, color: '#B2010C', fontSize: 10 }}>—</span>
                {c}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <SectionLabel>Contact</SectionLabel>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.06em', color: INK_60, lineHeight: 2.2 }}>
              <div>q@quindal.art</div>
              <div>quindal.art</div>
              <div>Las Vegas, NV</div>
            </div>
          </div>

        </aside>
      </div>
    </div>
  );
}
