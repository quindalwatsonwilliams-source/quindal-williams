import { useState } from 'react';
import { ASSET, Note, Pill, Lab } from './ui';

export function Contact() {
  const [sent, setSent] = useState(false);
  const [msg, setMsg] = useState('');
  const [email, setEmail] = useState('');

  return (
    <footer id="contact" style={{
      background: 'var(--ink)', color: 'var(--cream)',
      padding: '70px 28px 60px', scrollMarginTop: 54,
      backgroundImage: `linear-gradient(rgba(26,26,46,.93),rgba(26,26,46,.93)), url(${ASSET}/textures/leopard-sm.jpg)`,
      backgroundSize: 'cover',
    }}>
      <div style={{ maxWidth: 1040, margin: '0 auto', textAlign: 'center' }}>

        <Note size={30} rot={-4} color="var(--amber-900)" style={{ display: 'inline-block' }}>
          got a world that needs building?
        </Note>
        <h2 style={{
          fontFamily: 'var(--font-serif-display)', fontWeight: 500,
          fontSize: 'clamp(36px,6vw,76px)', lineHeight: 1, letterSpacing: '-.02em', margin: '12px 0 28px',
        }}>
          Let's make the <span style={{ fontStyle: 'italic', color: 'var(--crimson-300)' }}>loud</span> version.
        </h2>

        {/* Contact form */}
        <div style={{
          maxWidth: 540, margin: '0 auto 32px', background: 'rgba(247,243,239,.06)',
          border: '1px solid rgba(247,243,239,.18)', borderRadius: 12, padding: 24, textAlign: 'left',
        }}>
          {!sent ? (
            <>
              <textarea
                value={msg}
                onChange={e => setMsg(e.target.value)}
                rows={3}
                placeholder="Hey Quindal — here's what I'm dreaming up…"
                style={{
                  width: '100%', fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.5,
                  padding: '13px 15px', border: '1px solid rgba(247,243,239,.3)', borderRadius: 8,
                  outline: 'none', resize: 'vertical', boxSizing: 'border-box',
                  background: 'rgba(247,243,239,.08)', color: 'var(--cream)',
                }}
              />
              <div style={{ display: 'flex', gap: 10, marginTop: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your email"
                  style={{
                    flex: '1 1 180px', fontFamily: 'var(--font-sans)', fontSize: 15,
                    padding: '12px 15px', border: '1px solid rgba(247,243,239,.3)', borderRadius: 8,
                    outline: 'none', background: 'rgba(247,243,239,.08)', color: 'var(--cream)',
                  }}
                />
                <Pill onClick={() => msg.trim() && setSent(true)}>Send it →</Pill>
              </div>
            </>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'center', padding: '8px 0' }}>
              <div style={{
                width: 44, height: 44, borderRadius: 999, background: 'var(--crimson-500)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22,
              }}>✓</div>
              <div>
                <div style={{ fontFamily: 'var(--font-serif-display)', fontSize: 20, color: 'var(--cream)' }}>
                  Got it — talk soon!
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(247,243,239,.6)', marginTop: 4, letterSpacing: '.06em', textTransform: 'uppercase' }}>
                  I reply to everything that isn't boring.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Social links */}
        <div style={{
          display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap',
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em',
          textTransform: 'uppercase', color: 'rgba(247,243,239,.7)',
        }}>
          <span>@quindalwilliams</span>
          <span>·</span>
          <span>hi@quindalwilliams.com</span>
          <span>·</span>
          <span>Las Vegas</span>
        </div>

        <div style={{
          marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(247,243,239,.12)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap',
        }}>
          <img src={`${ASSET}/logos/monogram-red.png`} style={{ height: 40, opacity: .9 }} alt="QW" />
          <Lab color="rgba(247,243,239,.4)">© 2026 Quindal Williams · Phase 1 — Creative Director</Lab>
        </div>
      </div>
    </footer>
  );
}

export function Footer() { return null; }
