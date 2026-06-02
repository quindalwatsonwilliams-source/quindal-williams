import { Marquee, Lab } from './ui';

const PLATFORMS = [
  {
    name: 'Instagram',
    handle: '@quindalwilliams',
    url: 'https://instagram.com/quindalwilliams',
    desc: 'Work, process, and the occasional leopard print.',
    bg: 'var(--magenta-900)',
    accent: 'var(--magenta-500)',
    icon: '◈',
  },
  {
    name: 'TikTok',
    handle: '@quindalwilliams',
    url: 'https://tiktok.com/@quindalwilliams',
    desc: 'Behind the scenes, creative breakdowns, and chaos.',
    bg: 'var(--ink)',
    accent: 'var(--teal-500)',
    icon: '▶',
  },
  {
    name: 'LinkedIn',
    handle: 'Quindal Williams',
    url: 'https://www.linkedin.com/in/quindal-%E2%80%8F%E2%80%8F%E2%80%8E-%E2%80%8E-%E2%80%8F%E2%80%8F%E2%80%8E-%E2%80%8E-730631186/',
    desc: 'Professional highlights and the occasionally serious post.',
    bg: 'var(--azure-700)',
    accent: 'var(--azure-300)',
    icon: '⬡',
  },
];

export function Socials() {
  return (
    <section id="socials" style={{ background: '#3C0606', scrollMarginTop: 64 }}>
      <Marquee text="SOCIALS" color="var(--ink)" />

      <div style={{ padding: '32px 28px 64px' }}>
        <div style={{
          maxWidth: 1040, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18,
        }} className="ed-work-grid">
          {PLATFORMS.map(p => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                background: p.bg, borderRadius: 4, padding: '32px 28px 28px',
                position: 'relative', overflow: 'hidden',
                transition: 'transform .15s ease, box-shadow .15s ease',
                cursor: 'pointer',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(26,26,46,.18)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                {/* Big icon */}
                <div style={{
                  fontFamily: 'var(--font-serif-display)', fontSize: 48,
                  color: p.accent, lineHeight: 1, marginBottom: 16,
                }}>{p.icon}</div>

                <Lab color={p.accent} style={{ marginBottom: 8 }}>{p.name}</Lab>
                <div style={{
                  fontFamily: 'var(--font-serif-display)', fontWeight: 500, fontSize: 22,
                  color: '#F7F3EF', lineHeight: 1.1, marginBottom: 10,
                }}>{p.handle}</div>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, lineHeight: 1.7,
                  color: 'rgba(247,243,239,.62)', margin: 0, textTransform: 'uppercase', letterSpacing: '.02em',
                }}>{p.desc}</p>

                {/* Arrow */}
                <div style={{
                  position: 'absolute', top: 28, right: 26,
                  fontFamily: 'var(--font-mono)', fontSize: 18, color: p.accent, opacity: .7,
                }}>→</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
