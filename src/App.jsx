import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { ASSET } from './components/ui';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Values } from './components/Values';
import { Work } from './components/Work';
import { Services } from './components/Services';
import { IpodPlayer } from './components/IpodPlayer';
import { CharacterCreator } from './components/CharacterCreator';
import { Contact } from './components/Contact';
import { Resume } from './components/Resume';
import { ProjectPage } from './components/ProjectPage';
import { CustomCursor } from './components/CustomCursor';
import { FilmGrain } from './components/FilmGrain';
import { LoadingScreen } from './components/LoadingScreen';
import { LabelRevealManager } from './components/LabelRevealManager';

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -54 });
  } else {
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 54, behavior: 'smooth' });
  }
}

function scrollTop(immediate = false) {
  if (window.__lenis) {
    window.__lenis.scrollTo(0, { immediate });
  } else {
    window.scrollTo({ top: 0, behavior: immediate ? 'auto' : 'smooth' });
  }
}

export default function App() {
  const [route, setRoute] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [wiping, setWiping] = useState(false);

  // Bordeaux panel sweeps up, the route swaps underneath, panel lifts away
  const wipeTo = (swap) => {
    if (wiping) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { swap(); return; }
    setWiping(true);
    setTimeout(() => {
      swap();
      setTimeout(() => setWiping(false), 80);
    }, 390);
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    window.__lenis = lenis;
    let rafId;
    function raf(time) { lenis.raf(time); rafId = requestAnimationFrame(raf); }
    rafId = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(rafId); lenis.destroy(); window.__lenis = null; };
  }, []);

  useEffect(() => {
    const h = (window.location.hash || '').replace('#', '');
    if (h === 'character') { setRoute('character'); return; }
    if (h === 'resume') { setRoute('resume'); return; }
    if (['work', 'about', 'services', 'contact'].includes(h)) {
      setRoute('home');
      const t = setTimeout(() => {
        const el = document.getElementById(h);
        if (el) scrollToId(h);
      }, 220);
      return () => clearTimeout(t);
    }
  }, []);

  const goHome      = () => {
    if (route === 'home') { scrollTop(false); return; }
    wipeTo(() => { setRoute('home'); setSelectedProject(null); scrollTop(true); });
  };
  const goCharacter = () => wipeTo(() => { setRoute('character'); setSelectedProject(null); scrollTop(true); });
  const goResume    = () => wipeTo(() => { setRoute('resume'); setSelectedProject(null); scrollTop(true); });
  const goProject   = (p) => wipeTo(() => { setSelectedProject(p); setRoute('project'); scrollTop(true); });
  const backFromProject = () => wipeTo(() => {
    setSelectedProject(null); setRoute('home');
    setTimeout(() => scrollToId('work'), 60);
  });
  const onLink      = (id) => {
    if (route !== 'home') {
      wipeTo(() => { setRoute('home'); setSelectedProject(null); setTimeout(() => scrollToId(id), 60); });
    } else scrollToId(id);
  };

  return (
    <div>
      <LoadingScreen />
      <LabelRevealManager />
      <div className={`route-wipe${wiping ? ' active' : ''}`} aria-hidden="true" />
      <CustomCursor />
      <FilmGrain />
      <div className="scroll-indicator" aria-hidden="true" />
      <Nav onHome={goHome} onLink={onLink} onResume={goResume} route={route} />

      {route === 'home' && (
        <main>
          <Hero onCharacter={goCharacter} />
          {/* Zone: heels is sticky under Work; Work scrolls away to reveal it; About scrolls in to cover it */}
          <div className="heels-zone">
            <div className="heels-sticky-wrap">
              <img
                src={`${ASSET}/photos/heels-break.jpg`}
                alt=""
                className="heels-editorial-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 80%', display: 'block' }}
              />
            </div>
            <div className="heels-work-layer">
              <Work onOpen={goProject} />
            </div>
            <div className="heels-pause" />
            <div className="heels-about-layer">
              <About />
            </div>
          </div>
          <Values />
          {/* The Q Tape — custom iPod player */}
          <section style={{ background: '#000', padding: '60px 28px' }}>
            <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 'clamp(32px, 6vw, 80px)', flexWrap: 'wrap', justifyContent: 'center' }}>
              {/* iPod widget */}
              <div style={{ flex: '0 0 auto', width: 'clamp(200px, 30vw, 280px)' }}>
                <IpodPlayer />
              </div>
              {/* Copy */}
              <div style={{ flex: '1 1 260px', maxWidth: 380 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(251,214,109,.5)', marginBottom: 14 }}>
                  ▶ The Q Tape Vol. I
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif-display)', fontStyle: 'italic', fontWeight: 500, fontSize: 'clamp(26px,3.5vw,40px)', color: '#F7F3EF', margin: '0 0 16px', lineHeight: 1.05, letterSpacing: '-.015em' }}>
                  The soundtrack<br />to the work.
                </h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, lineHeight: 1.8, letterSpacing: '.03em', textTransform: 'uppercase', color: 'rgba(247,243,239,.45)', margin: 0 }}>
                  The songs playing in the room when the best ideas happen. Hit play.
                </p>
              </div>
            </div>
          </section>
          <Services />
          <Contact />
        </main>
      )}
      {route === 'character' && <CharacterCreator onExit={goHome} />}
      {route === 'resume'    && <Resume onBack={goHome} />}
      {route === 'project'   && selectedProject && <ProjectPage project={selectedProject} onBack={backFromProject} />}
    </div>
  );
}
