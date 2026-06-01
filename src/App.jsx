import { useState, useEffect } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Values } from './components/Values';
import { Work } from './components/Work';
import { Services } from './components/Services';
import { CharacterCreator } from './components/CharacterCreator';
import { Contact } from './components/Contact';

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 54;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

export default function App() {
  const [route, setRoute] = useState('home');

  useEffect(() => {
    const h = (window.location.hash || '').replace('#', '');
    if (h === 'character') { setRoute('character'); return; }
    if (['work', 'about', 'services', 'contact'].includes(h)) {
      setRoute('home');
      const t = setTimeout(() => {
        const el = document.getElementById(h);
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 54 });
      }, 220);
      return () => clearTimeout(t);
    }
  }, []);

  const goHome      = () => { setRoute('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const goCharacter = () => { setRoute('character'); window.scrollTo({ top: 0 }); };
  const onLink      = (id) => {
    if (route !== 'home') { setRoute('home'); setTimeout(() => scrollToId(id), 60); }
    else scrollToId(id);
  };

  return (
    <div>
      <Nav onHome={goHome} onLink={onLink} onCharacter={goCharacter} route={route} />

      {route === 'home' ? (
        <main>
          <Hero onCharacter={goCharacter} onWork={() => onLink('work')} />
          <About />
          <Values />
          <Work />
          <Services />
          <Contact />
        </main>
      ) : (
        <CharacterCreator onExit={goHome} />
      )}
    </div>
  );
}
