import { ASSET, Eyebrow, Tag, Sticker } from './ui';

const WORK = [
  {
    num: '01', cat: 'Spatial / Experiential',
    title: 'Teton Ridge', sub: 'Cowboy Christmas 2026',
    body: 'A western-themed experiential booth at the National Finals Rodeo — concept, identity, and on-floor build. Leather, brass, and big-sky type.',
    tags: ['Experiential', 'Identity', 'Circle'],
    tex: 'leopard', accent: 'var(--amber-900)', fg: 'var(--ink)',
  },
  {
    num: '02', cat: 'Brand Identity',
    title: 'SEICon III', sub: 'Conference branding system',
    body: 'Full identity and wayfinding for the third SEICon — a flexible mark, signage, badges, and a stage package that scaled from tote bag to jumbotron.',
    tags: ['Identity', 'Print', 'Signage'],
    tex: null, accent: 'var(--teal-900)', fg: '#fff',
  },
  {
    num: '03', cat: 'Spatial / Experiential',
    title: 'Sanmina', sub: 'Trade-show booth',
    body: 'A precision-engineered trade-show presence for Sanmina Corporation. Clean architecture, lit plinths, and quiet confidence that let the tech speak.',
    tags: ['Experiential', 'Spatial'],
    tex: 'zebra', accent: 'var(--azure-700)', fg: '#fff',
  },
  {
    num: '04', cat: 'Packaging — spec',
    title: 'Sugar Hour', sub: 'Confection packaging concept',
    body: "A spec packaging system for a nostalgic candy line — Lisa-Frank saturation, embossed stickers, and a unit box you'd keep after the candy's gone.",
    tags: ['Packaging', 'Spec', 'Illustration'],
    tex: null, accent: 'var(--magenta-500)', fg: '#fff',
  },
  {
    num: '05', cat: 'Brand Identity — spec',
    title: 'Concept TBD', sub: 'Next big thing',
    body: "A placeholder for the next wild idea. If you've got a project that needs a creative director who will absolutely go there with you — let's talk.",
    tags: ['Open', 'Collab'],
    tex: 'leopard', accent: 'var(--crimson-500)', fg: '#fff',
  },
];

function WorkCard({ p }) {
  const isTexture = !!p.tex;

  return (
    <article style={{
      width: 390,
      flex: 'none',
      scrollSnapAlign: 'start',
      border: '3px solid var(--ink)',
      borderRadius: 22,
      overflow: 'hidden',
      boxShadow: '7px 7px 0 var(--ink)',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* ── Thumbnail ── */}
      <div style={{
        height: 270, position: 'relative',
        background: p.accent,
        backgroundImage: p.tex ? `url(${ASSET}/textures/${p.tex}-sm.jpg)` : 'none',
        backgroundSize: p.tex === 'zebra' ? '380px' : '300px',
        backgroundPosition: 'center',
        flexShrink: 0,
      }}>
        {isTexture && (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(26,26,46,0.28)',
          }} />
        )}

        {/* Number */}
        <span style={{
          position: 'absolute', top: 16, left: 18, zIndex: 1,
          fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700,
          letterSpacing: '.12em',
          color: isTexture ? 'rgba(255,255,255,0.85)' : (p.fg === '#fff' ? 'rgba(255,255,255,0.7)' : 'rgba(26,26,46,0.55)'),
        }}>{p.num}</span>

        {/* Sticker in top-right */}
        <div style={{ position: 'absolute', top: 10, right: 12, zIndex: 1 }}>
          <Sticker
            size={46}
            bg={isTexture ? 'var(--amber-900)' : 'rgba(255,255,255,0.18)'}
            fg={isTexture ? 'var(--ink)' : '#fff'}
            rot={-10}
            style={{ border: `2px solid ${isTexture ? 'var(--ink)' : 'rgba(255,255,255,0.5)'}` }}
          >★</Sticker>
        </div>

        {/* Title overlay at bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 1,
          padding: '18px 18px 16px',
          background: isTexture
            ? 'linear-gradient(transparent, rgba(26,26,46,0.72))'
            : 'none',
        }}>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 600,
            fontSize: 36, lineHeight: .94,
            color: p.fg === '#fff' || isTexture ? '#fff' : p.fg,
            textShadow: isTexture ? '2px 2px 0 rgba(0,0,0,0.4)' : 'none',
          }}>{p.title}</div>
          <div style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 15,
            marginTop: 3,
            color: p.fg === '#fff' || isTexture ? 'rgba(255,255,255,0.8)' : 'rgba(26,26,46,0.65)',
          }}>{p.sub}</div>
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{ padding: '20px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <Eyebrow style={{ marginBottom: 10 }}>{p.cat}</Eyebrow>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.65,
            color: 'var(--fg2)', margin: 0,
          }}>{p.body}</p>
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 18 }}>
          {p.tags.map(t => (
            <Tag key={t} bg="transparent" outline style={{ fontSize: 11, padding: '5px 12px' }}>{t}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section id="work" style={{ scrollMarginTop: 70, padding: '70px 0 0' }}>

      {/* Section header */}
      <div style={{
        padding: '0 30px', marginBottom: 36,
        display: 'flex', alignItems: 'baseline',
        justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
      }}>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 600,
          fontSize: 'clamp(34px,5vw,60px)', margin: 0,
        }}>Selected work</h2>
        <span style={{
          fontFamily: 'var(--font-serif)', fontStyle: 'italic',
          fontSize: 17, color: 'var(--fg2)',
        }}>real projects, spec dreams — scroll to explore →</span>
      </div>

      {/* ── Horizontal scroll rail ── */}
      <div
        className="work-scroll"
        style={{
          display: 'flex', gap: 24,
          overflowX: 'auto',
          padding: '4px 30px 32px',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {WORK.map(p => <WorkCard key={p.num} p={p} />)}
        {/* trailing spacer so last card has right padding */}
        <div style={{ width: 6, flex: 'none' }} />
      </div>

    </section>
  );
}
