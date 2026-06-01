import { useState, useEffect } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { Work } from './components/Work';
import { About } from './components/About';
import { Services } from './components/Services';
import { CharacterCreator } from './components/CharacterCreator';
import { Contact, Footer } from './components/Contact';

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 60;
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
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 60 });
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

          <Ticker
            items={['CREATIVE DIRECTOR', 'LAS VEGAS NV', 'EXPERIENTIAL DESIGN', 'MAXIMALIST TASTE', 'EDITORIAL WARMTH', 'SCAD BFA']}
            tex="leopard"
            fg="#fff"
            overlay="rgba(26,26,46,0.42)"
            speed={22}
          />

          <Work />

          <Ticker
            items={['BRANDING', 'ART DIRECTION', 'CAMPAIGNS', 'PACKAGING', 'SPATIAL DESIGN', 'IDENTITY SYSTEMS']}
            tex="zebra"
            fg="#1A1A2E"
            overlay="rgba(247,243,239,0.55)"
            speed={28}
          />

          <About />

          <Ticker
            items={['BRANDS YOU CAN WALK THROUGH', "THE ADULTHOOD YOU WERE PROMISED", 'BOLD TASTE ✦ WARM HEART', 'NEVER BORING']}
            tex="leopard"
            fg="#fff"
            overlay="rgba(178,1,12,0.55)"
            speed={26}
            big
          />

          <Services />

          <Ticker
            items={["LET'S BUILD SOMETHING WILD", 'AVAILABLE FOR PROJECTS', 'CIRCLE · LAS VEGAS', 'STUDIO 2026']}
            tex="zebra"
            fg="#1A1A2E"
            overlay="rgba(248,187,11,0.6)"
            speed={20}
          />

          <Contact />
          <Footer onCharacter={goCharacter} />
        </main>
      ) : (
        <CharacterCreator onExit={goHome} />
      )}
    </div>
  );
}
