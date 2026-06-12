import { useState, useEffect } from 'react';
import { ASSET, Lab, Note, Arrow, Pill } from './ui';
import { MagneticWrapper } from './MagneticWrapper';

export function Hero({ onCharacter }) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setEntered(true);
      return;
    }
    if (sessionStorage.getItem('introPlayed')) {
      const t = setTimeout(() => setEntered(true), 60);
      return () => clearTimeout(t);
    }
    const handler = () => setTimeout(() => setEntered(true), 80);
    document.addEventListener('loadingComplete', handler, { once: true });
    return () => document.removeEventListener('loadingComplete', handler);
  }, []);

  return (
    <header style={{ position: 'relative', background: '#F7F3EF', overflow: 'hidden', paddingTop: 40 }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative', padding: '0 28px' }}>

        {/* Positioning line — kinetic line-by-line entrance */}
        <h1 className="hero-positioning-line" style={{
          fontFamily: 'var(--font-serif-display)', fontWeight: 500,
          fontSize: 'clamp(36px, 6vw, 88px)', lineHeight: 0.9, letterSpacing: '-.025em',
          color: '#1A1A2E', margin: 0, position: 'relative', zIndex: 1,
        }}>
          <div style={{ overflow: 'hidden', display: 'block' }}>
            <div className={`hero-line-inner${entered ? ' hero-line-inner--visible' : ''}`} style={{ '--delay': '0ms' }}>
              Every brand has
            </div>
          </div>
          <div style={{ overflow: 'hidden', display: 'block' }}>
            <div className={`hero-line-inner${entered ? ' hero-line-inner--visible' : ''}`} style={{ '--delay': '90ms' }}>
              a personality.{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--crimson-500)' }}>We just</span>
            </div>
          </div>
          <div style={{ overflow: 'hidden', display: 'block' }}>
            <div className={`hero-line-inner${entered ? ' hero-line-inner--visible' : ''}`} style={{ '--delay': '180ms' }}>
              <span style={{ fontStyle: 'italic', color: 'var(--crimson-500)' }}>help it get dressed.</span>
            </div>
          </div>
        </h1>

        {/* Photo stage */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: 'clamp(28px, 3.5vw, 52px)' }}>
          <img
            src={`${ASSET}/photos/portrait.jpg`}
            alt="Quindal Williams"
            style={{
              width: 'min(400px, 42vw)', height: 'min(520px, 56vw)',
              minWidth: 240, minHeight: 320,
              objectFit: 'cover', objectPosition: 'center top',
              zIndex: 2, position: 'relative',
              boxShadow: '0 30px 60px rgba(26,26,46,.16)',
              borderRadius: 8, display: 'block',
            }}
          />

          {/* Left caption */}
          <div style={{ position: 'absolute', left: '1%', top: '26%', width: 200, zIndex: 4 }} className="ed-cap">
            <Lab color="#1A1A2E">Creative director for<br />brands with<br />a personality</Lab>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 8 }}>
              <Note size={22} rot={-8}>say less ✦</Note>
              <Arrow w={56} h={38} color="#1A1A2E" />
            </div>
          </div>

          {/* Right caption */}
          <div style={{ position: 'absolute', right: '1%', top: '20%', width: 200, textAlign: 'right', zIndex: 4 }} className="ed-cap">
            <Lab color="#1A1A2E">Experiential design<br />&amp; brand worlds<br />you can walk through</Lab>
          </div>

          {/* Stat bottom-left */}
          <div style={{ position: 'absolute', left: '3%', bottom: '7%', zIndex: 4 }} className="ed-cap">
            <div style={{ background: '#000000', borderRadius: 100, padding: '8px 16px', display: 'inline-block' }}>
              <div style={{ fontFamily: 'var(--font-serif-display)', fontSize: 40, fontWeight: 500, color: '#ffffff', lineHeight: 1 }}>
                30+
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: '#ffffff', marginTop: 2 }}>
                brands shaped
              </div>
            </div>
          </div>
        </div>

        {/* Below-hero row: tagline + character builder */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 4px 36px', gap: 16, flexWrap: 'wrap',
        }}>
          <div style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic',
            fontSize: 19, color: 'rgba(26,26,46,.5)', maxWidth: 420,
          }}>
            Maximalist taste, editorial warmth, and a little bit of whimsy.
          </div>
          <MagneticWrapper>
            <Pill big onClick={onCharacter} style={{ background: 'var(--amber-900)', color: '#1A1A2E' }}>
              ✦ Build your character
            </Pill>
          </MagneticWrapper>
        </div>
      </div>
    </header>
  );
}
