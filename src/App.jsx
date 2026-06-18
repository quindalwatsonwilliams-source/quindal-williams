import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { ASSET } from './components/ui';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Values } from './components/Values';
import { Work } from './components/Work';
import { Services } from './components/Services';
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

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    window.__lenis = lenis;
    lenis.scrollTo(0, { immediate: true }); // override any browser scroll restoration
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
