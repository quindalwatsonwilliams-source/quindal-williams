export function Testimonial() {
  return (
    <section style={{
      background: '#3C0606',
      padding: '80px 28px 88px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'center', marginBottom: 36,
        }}>
          <div style={{ height: 1, width: 60, background: 'rgba(247,243,239,.30)', flexShrink: 0 }} />
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.2em',
            textTransform: 'uppercase', color: 'rgba(247,243,239,.45)',
          }}>Client Voice</span>
          <div style={{ height: 1, width: 60, background: 'rgba(247,243,239,.30)', flexShrink: 0 }} />
        </div>

        <blockquote style={{ margin: 0 }}>
          <p style={{
            fontFamily: 'var(--font-serif-display)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(26px, 4vw, 46px)', lineHeight: 1.2,
            letterSpacing: '-.015em', color: '#F7F3EF', margin: '0 0 36px',
          }}>
            "She didn't just design a logo — she handed us a personality. We finally look like who we actually are."
          </p>
          <footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <div style={{ height: 1, width: 40, background: 'rgba(247,243,239,.30)' }} />
            <cite style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.16em',
              textTransform: 'uppercase', color: 'rgba(247,243,239,.55)', fontStyle: 'normal',
            }}>Brand Founder · Hospitality / Events</cite>
            <div style={{ height: 1, width: 40, background: 'rgba(247,243,239,.30)' }} />
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
