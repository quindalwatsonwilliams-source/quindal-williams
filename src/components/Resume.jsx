import { ASSET, Lab, Pill } from './ui';

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
    degree: 'BFA, Graphic Design', org: 'Savannah College of Art and Design (SCAD)',
    period: 'Jan 2026 — Present', color: 'var(--teal-700)',
    note: 'Enrolled while working full-time. Studio launch planned at graduation.',
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

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
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
                Account Manager / Creative · Circle · Las Vegas, NV
              </p>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Pill onClick={() => window.print()}>Print / Save PDF</Pill>
              <Pill dark onClick={() => window.open(LINKEDIN, '_blank', 'noopener')}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <LinkedInIcon /> LinkedIn
                </span>
              </Pill>
              <Pill dark onClick={() => window.open('mailto:q@quindal.art')}>Get in touch</Pill>
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
            Creative with 4+ years at <strong>Circle</strong> spanning coordination, project management, and account-side creative work.
            Currently completing a BFA in Graphic Design at <strong>SCAD</strong> while working full-time.
            Building toward an independent studio at graduation — this is Phase 1.
          </p>
        </div>

        {/* Experience */}
        <div style={{ marginBottom: 52 }}>
          <SectionHead color="var(--crimson-500)">Experience</SectionHead>
          {EXPERIENCE.map((e, idx) => (
            <div key={idx} style={{ marginBottom: 36 }}>
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
              <ul style={{ margin: '14px 0 0', paddingLeft: 0, listStyle: 'none' }}>
                {e.items.map((item, i) => (
                  <li key={i} style={{
                    fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.65,
                    color: 'var(--fg1)', marginBottom: 8, paddingLeft: 14, position: 'relative',
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: e.color, fontWeight: 700 }}>—</span>
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
                <span style={{
                  fontFamily: 'var(--font-serif-display)', fontWeight: 500, fontSize: 22,
                  color: 'var(--ink)',
                }}>{e.degree}</span>
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

        {/* Certifications */}
        <div style={{ marginBottom: 52 }}>
          <SectionHead color="var(--azure-700)">Licenses & Certifications</SectionHead>
          <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
            {CERTIFICATIONS.map((c, i) => (
              <li key={i} style={{
                fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.65,
                color: 'var(--fg1)', marginBottom: 8, paddingLeft: 14, position: 'relative',
              }}>
                <span style={{ position: 'absolute', left: 0, color: c.color, fontWeight: 700 }}>—</span>
                {c.label}
              </li>
            ))}
          </ul>
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
