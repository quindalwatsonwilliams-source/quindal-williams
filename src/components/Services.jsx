import { Lab } from './ui';

const SERVICES = [
  { n: '01', t: 'Brand Identity', d: 'Visual identity systems, logotypes, and the design language that keeps a brand consistent everywhere it shows up.' },
  { n: '02', t: 'Creative Direction', d: 'Concept, art direction, and the taste-keeping that makes a campaign, event, or identity hold together from first brief to final file.' },
  { n: '03', t: 'Event & Experiential Design', d: "Trade-show environments, conference identities, activations, and spatial branding. I've built it from signage to stage." },
  { n: '04', t: 'Campaigns', d: 'Launch concepts with actual legs — key visuals, messaging direction, and rollout across the platforms that matter.' },
  { n: '05', t: 'Account & Project Management', d: 'End-to-end delivery for creative projects — timelines, vendors, stakeholders, and making sure nothing falls through the cracks.' },
];

export function Services() {
  return (
    <section id="services" style={{ background: 'var(--cream)', padding: '70px 28px', scrollMarginTop: 64 }}>
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32, flexWrap: 'wrap' }}>
          <h2 style={{
            fontFamily: 'var(--font-serif-display)', fontWeight: 500,
            fontSize: 'clamp(34px,5vw,58px)', letterSpacing: '-.015em', margin: 0,
          }}>What I do</h2>
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 17, color: 'var(--fg2)' }}>
            — let's talk about what you need.
          </span>
        </div>
        <div style={{ borderTop: '1.5px solid var(--ink)' }}>
          {SERVICES.map(s => (
            <div key={s.n} style={{
              display: 'grid', gridTemplateColumns: '56px 1fr 1.4fr',
              gap: 24, alignItems: 'center', padding: '22px 6px', borderBottom: '1px solid var(--line)',
            }} className="svc-row">
              <Lab color="var(--crimson-500)">{s.n}</Lab>
              <h3 style={{
                fontFamily: 'var(--font-serif-display)', fontWeight: 500,
                fontSize: 'clamp(20px,2.4vw,28px)', margin: 0, lineHeight: 1.05,
              }}>{s.t}</h3>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: 1.75,
                color: 'var(--fg2)', margin: 0, textTransform: 'uppercase', letterSpacing: '.02em',
              }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
