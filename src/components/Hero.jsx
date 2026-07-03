import { useState, useEffect } from 'react';
import { ASSET } from './ui';

const MONO_PATH = `M121.9,211.26c-3.08-.52-9.72-2.01-15.92-6.12s-10.2-7.81-16.39-14.55c-11.25-12.25-14.61-30.69-29.72-37.7-1.24-.57-1.88-.85-1.94-.88-7.25-3.12-12.24-6.58-18.16-11.78-.09-.08-.2-.12-.31-.12h-.02c-.08,0-.15.01-.22.05-6.54,3.18-13.7,6.18-20.9,7.47-5.3.95-14.06,1.37-17.27-3.99-.52-.86-.73-1.73-1.04-2.66-.02-.05-.02-.1-.02-.15v-1.22s0-.08.01-.11c.96-4.28,4.8-6.97,8.81-8.14,5.16-1.5,11.06-1.18,16.28-.1,2.05.42,4.06,1,6.04,1.66.47.16.84-.41.52-.78-18.19-21.09-23.98-50.9-15.56-77.58C25.76,23.94,53.62.92,86.23.11c.06,0,.12-.01.18-.04l.08-.03c.06-.03.13-.04.19-.04h4.29s4.61.31,4.61.31c47.28,4.71,77.63,50.87,67.66,96.69-9,41.35-46.39,69.37-88.58,59.64-.04,0-.09-.01-.13-.01h-.19c7.88,8.07,12.25,12.58,19.63,19.51,8.87,8.32,10.24,11.62,21.21,19.97,21.72,16.54,45.61,8.29,55.33-13.74.82-1.86,1.4-3.82,1.72-5.83,1.98-12.36-1.28-20.84-9.38-31.51,0,0,0,0,0,0-.94-1.23-5.67-1.47-5.63,1.41.04,2.53-2.01,3.45-2.4,3.65-1.54.79-7.15.3-4.68-5.59.34-.81,3.43-3.4,9.81-2.19,4.2.79,7.8,7.39,9.77,11.1,3,5.64,4.49,11.96,4.32,18.35,0,.3-.02.46-.02.47-.04.78-.24,2.19-.24,2.2-.67,5.37-1.34,17.94-14.47,28.09-8.57,6.62-18.72,7.93-22.52,8.44-6.02.82-10.31,1.06-14.88.3ZM122.26,17.9c-1.78-1.3-3.53-2.64-5.42-3.79-16.78-10.24-41.27-9.78-57.8.77-24.88,15.88-30.78,50.84-27.83,78.2,1.57,14.52,6.47,29.04,16.02,40.22.17.2.48.23.69.06.58-.48,1.56-1.5,1.76-1.72,3.61-3.81,6.62-8.3,9.46-12.71,6.67-10.34,12.75-21.07,19.27-31.51,3.9-6.25,7.94-12.4,11.84-18.64,10.6-16.92,21-33.98,31.96-50.67l.05-.21ZM92.71,65.98h17.22c.08,0,.27.27.05.36-3.17,1.14-5.65,2.27-5.93,6,0,.02,0,.04,0,.07.58,13.74,1.69,27.46,2.6,41.18.13,1.9.1,3.96.31,5.83.02.16.02.32.21.36l23.02-41.76c1.23-2.44,2.67-4.91,2.22-7.78-.29-1.84-1.83-3.06-3.28-4-.04-.09.12-.26.16-.26h14.26s.25.22.11.31c-3.65,2.23-6.53,5.15-8.57,8.92l-32.88,59.48c-.08.15-.23.24-.4.25h-.09c-.27.02-.5-.18-.52-.44l-4.02-52.38-.18.19s-.06.07-.08.11l-27.82,52.32c-.06.12-.18.21-.31.25-.27.06-.62.01-.65-.26l-2.06-24.28c-.04-.47-.65-.62-.9-.22l-5.21,8.41c-3.46,5.37-7.07,10.72-11.7,15.16-.19.18-.21.47-.05.67h0c2.52,3.26,7.9,7.51,11.4,9.72,16.36,10.31,40.7,10.47,57.21.42,26.34-16.03,31.35-54.82,27.25-82.81-2.36-16.14-8.65-32.56-21.28-43.34h-.23c-10.15,15.56-19.83,31.43-29.72,47.15-.02.03-.03.06-.04.09l-.11.29ZM74.5,118.84l22.16-40.99c.04-.07.06-.16.06-.24-.04-2.63-.36-5.54-1.7-7.85-.6-1.04-1.43-1.92-2.24-2.79-.22-.23-.6-.2-.77.07-6.45,10.14-12.98,20.23-19.18,30.52-.05.09-.08.19-.07.29.45,6.92,1.23,13.82,1.64,20.74,0,.12-.07.29.1.26ZM38.3,139.84c.31-.14.38-.56.13-.79-.6-.58-1.26-1.11-1.86-1.69-.73-.71-2.13-2.46-2.81-2.92-.39-.27-1.37-.55-1.87-.73-8.03-2.91-23.19-5.29-29.45,2.08-1.41,1.67-2.07,3.95-1.27,6.06,2.47,6.55,14.12,4.74,19.44,3.77,6.15-1.12,12.06-3.14,17.69-5.8Z`;

export function Hero() {
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
    <header style={{
      position: 'relative',
      height: '100vh',
      minHeight: 560,
      overflow: 'hidden',
      background: '#1A1A2E',
    }}>
      {/* Full-bleed photo */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${ASSET}/photos/portrait.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 18%',
        transform: entered ? 'scale(1)' : 'scale(1.06)',
        transition: 'transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform',
      }} />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(26,26,46,.1) 0%, rgba(26,26,46,.2) 50%, rgba(26,26,46,.55) 100%)',
      }} />

      {/* Centered monogram */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: entered ? 1 : 0,
        transform: entered ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.9s 0.2s ease, transform 0.9s 0.2s ease',
      }}>
        <svg
          viewBox="0 0 174.05 211.72"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: 'clamp(70px, 9vw, 116px)',
            filter: 'drop-shadow(0 4px 28px rgba(0,0,0,0.3))',
          }}
        >
          <path d={MONO_PATH} fill="#F7F3EF" />
        </svg>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        opacity: entered ? 1 : 0,
        transition: 'opacity 0.6s 0.7s ease',
        pointerEvents: 'none',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '.22em',
          textTransform: 'uppercase', color: 'rgba(247,243,239,.5)',
        }}>Scroll</span>
        <div style={{
          width: 1, height: 32,
          background: 'linear-gradient(to bottom, rgba(247,243,239,.45), rgba(247,243,239,0))',
        }} />
      </div>
    </header>
  );
}
