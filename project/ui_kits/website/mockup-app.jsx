/* mockup-app.jsx — loaded LAST so ChromeWindow + IOSDevice are on window */
const { useState: useStateMock } = React;

function Scaled({ w, h, s, children }) {
  return (
    <div style={{ width: w * s, height: h * s, flex: "none" }}>
      <div style={{ width: w, height: h, transform: `scale(${s})`, transformOrigin: "top left" }}>
        {children}
      </div>
    </div>
  );
}

function DesktopFrame({ src, url, title }) {
  const W = 1280, H = 820, S = 0.5;
  return (
    <div>
      <div className="frameLabel"><span className="pip"></span>Desktop · 1280px</div>
      <Scaled w={W} h={H} s={S}>
        <ChromeWindow width={W} height={H} url={url} tabs={[{ title }]}>
          <iframe src={src} loading="lazy" title={title}
            style={{ width: "100%", height: "100%", border: 0, display: "block" }}></iframe>
        </ChromeWindow>
      </Scaled>
    </div>
  );
}

function PhoneFrame({ src, title }) {
  const W = 390, H = 800, S = 0.5;
  return (
    <div>
      <div className="frameLabel"><span className="pip"></span>Mobile · 390px</div>
      <Scaled w={W} h={H} s={S}>
        <IOSDevice width={W} height={H}>
          <div style={{ height: "100%", display: "flex", flexDirection: "column",
            paddingTop: 46, paddingBottom: 26, boxSizing: "border-box" }}>
            <iframe src={src} loading="lazy" title={title}
              style={{ flex: 1, width: "100%", border: 0, display: "block" }}></iframe>
          </div>
        </IOSDevice>
      </Scaled>
    </div>
  );
}

const SCREENS = [
  { key: "home", label: "Homepage", note: "Statement intro, mascot + leopard panel, the build-your-character CTA.",
    src: "index.html", url: "quindalwilliams.com" },
  { key: "character", label: "Character Creator", note: "The hero interactive feature — pick a vibe, get your creative archetype, save & share.",
    src: "index.html#character", url: "quindalwilliams.com/build-your-character" },
  { key: "work", label: "Work / Case Studies", note: "Editorial spreads — Teton Ridge, SEICon III, Sanmina — not a thumbnail grid.",
    src: "index.html#work", url: "quindalwilliams.com/#work" },
  { key: "about", label: "About", note: "Magazine profile + Stardoll-style player card on ink.",
    src: "index.html#about", url: "quindalwilliams.com/#about" },
];

function Mockups() {
  return (
    <div>
      <header className="hero">
        <img src="../../assets/logos/logo-horizontal.png" style={{ height: 34, marginBottom: 26 }} alt="Quindal Williams" />
        <div className="q-eyebrow" style={{ marginBottom: 14 }}>Portfolio site · Phase 1 · Live mockup</div>
        <h1 style={{ fontFamily: "var(--font-serif-display)", fontWeight: 500, fontSize: "clamp(38px,5.4vw,68px)",
          lineHeight: 1.0, letterSpacing: "-.02em", margin: 0, maxWidth: 760 }}>
          quindalwilliams.com, <span style={{ fontStyle: "italic", color: "var(--crimson-500)" }}>on every screen.</span>
        </h1>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: 19, lineHeight: 1.55, color: "var(--fg2)", maxWidth: 560, marginTop: 18 }}>
          The real, interactive site framed on desktop and mobile. Every frame below is live — scroll, click, and try the
          Character Creator right inside the mockup.
        </p>
      </header>

      <div className="wrap">
        {SCREENS.map(s => (
          <section className="sec" key={s.key}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap", marginBottom: 20 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(26px,3vw,38px)", margin: 0 }}>{s.label}</h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--fg2)", margin: 0, maxWidth: 520 }}>{s.note}</p>
            </div>
            <div className="pair">
              <DesktopFrame src={s.src} url={s.url} title="Quindal Williams — Creative Director" />
              <PhoneFrame src={s.src} title="Quindal Williams" />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Mockups />);
