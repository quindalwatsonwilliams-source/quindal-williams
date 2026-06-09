import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Values } from './components/Values';
import { Work } from './components/Work';
import { Services } from './components/Services';
import { Socials } from './components/Socials';
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
    if (['work', 'about', 'services', 'socials', 'contact'].includes(h)) {
      setRoute('home');
      const t = setTimeout(() => {
        const el = document.getElementById(h);
        if (el) scrollToId(h);
      }, 220);
      return () => clearTimeout(t);
    }
  }, []);

  const goHome      = () => { setRoute('home'); setSelectedProject(null); scrollTop(false); };
  const goCharacter = () => { setRoute('character'); setSelectedProject(null); scrollTop(true); };
  const goResume    = () => { setRoute('resume'); setSelectedProject(null); scrollTop(true); };
  const goProject   = (p) => { setSelectedProject(p); setRoute('project'); scrollTop(true); };
  const backFromProject = () => { setSelectedProject(null); setRoute('home'); setTimeout(() => scrollToId('work'), 60); };
  const onLink      = (id) => {
    if (route !== 'home') { setRoute('home'); setSelectedProject(null); setTimeout(() => scrollToId(id), 60); }
    else scrollToId(id);
  };

  return (
    <div>
      <LoadingScreen />
      <LabelRevealManager />
      <CustomCursor />
      <FilmGrain />
      <Nav onHome={goHome} onLink={onLink} onCharacter={goCharacter} onResume={goResume} route={route} />

      {route === 'home' && (
        <main>
          <Hero onCharacter={goCharacter} onWork={() => onLink('work')} />
          <About />
          <Values />
          <Work onOpen={goProject} />
          <Services />
          <Socials />
          <Contact />
        </main>
      )}
      {route === 'character' && <CharacterCreator onExit={goHome} />}
      {route === 'resume'    && <Resume onBack={goHome} />}
      {route === 'project'   && selectedProject && <ProjectPage project={selectedProject} onBack={backFromProject} />}
    </div>
  );
}
