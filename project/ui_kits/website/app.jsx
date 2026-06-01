/* app.jsx — assembles the Quindal site prototype */
const { useState: useStateApp, useEffect: useEffectApp } = React;

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

function App() {
  const [route, setRoute] = useStateApp("home");

  // Deep-link support for mockups / sharing:
  //   #character          → Character Creator
  //   #work/#about/#services/#contact → home, scrolled to that section
  useEffectApp(() => {
    const h = (window.location.hash || "").replace("#", "");
    if (h === "character") { setRoute("character"); return; }
    if (["work", "about", "services", "contact"].includes(h)) {
      setRoute("home");
      // wait for layout, then jump (instant, no smooth) so mockups frame cleanly
      const t = setTimeout(() => {
        const el = document.getElementById(h);
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 60 });
      }, 220);
      return () => clearTimeout(t);
    }
  }, []);

  const goHome = () => { setRoute("home"); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const goCharacter = () => { setRoute("character"); window.scrollTo({ top: 0 }); };
  const onLink = (id) => {
    if (route !== "home") { setRoute("home"); setTimeout(() => scrollToId(id), 60); }
    else scrollToId(id);
  };

  return (
    <div>
      <Nav onHome={goHome} onLink={onLink} onCharacter={goCharacter} route={route} />
      {route === "home" ? (
        <main>
          <Hero onCharacter={goCharacter} onWork={() => onLink("work")} />
          <Work />
          <About />
          <Services />
          <Contact />
          <Footer onCharacter={goCharacter} />
        </main>
      ) : (
        <CharacterCreator onExit={goHome} />
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
