export function MarqueeStrip() {
  const items = 'Brand Identity · Creative Direction · Campaigns · Packaging · Experiential · 30+ Brands Shaped · Las Vegas, NV · Est. 2022 ✦ ';
  const repeated = items.repeat(4);

  return (
    <div style={{
      background: '#1A1A2E',
      overflow: 'hidden',
      padding: '13px 0',
      borderTop: '1px solid rgba(247,243,239,.08)',
      borderBottom: '1px solid rgba(247,243,239,.08)',
    }}>
      <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
        <span
          className="ed-marquee"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '.17em',
            textTransform: 'uppercase',
            color: '#F7F3EF',
            opacity: 0.72,
            display: 'inline-block',
            paddingRight: 0,
          }}
        >
          {repeated}
        </span>
        <span
          className="ed-marquee"
          aria-hidden="true"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '.17em',
            textTransform: 'uppercase',
            color: '#F7F3EF',
            opacity: 0.72,
            display: 'inline-block',
          }}
        >
          {repeated}
        </span>
      </div>
    </div>
  );
}
