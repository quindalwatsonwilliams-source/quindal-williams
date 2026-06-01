/* Contact.jsx — personality-forward contact + Footer */
function Contact() {
  const [sent, setSent] = useState(false);
  const [msg, setMsg] = useState("");
  return (
    <section id="contact" style={{ padding: "84px 30px", scrollMarginTop: 70 }}>
      <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", top: -10, left: "12%" }}><Sticker rot={-14} bg="var(--teal-700)" fg="#fff" size={54}>✦</Sticker></div>
        <div style={{ position: "absolute", top: 20, right: "10%" }}><Sticker rot={12} bg="var(--amber-900)" size={48}>★</Sticker></div>
        <Eyebrow style={{ justifyContent: "center" }}>Contact</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-serif-display)", fontWeight: 500, fontSize: "clamp(40px,6vw,72px)",
          lineHeight: 1.0, letterSpacing: "-.02em", margin: "16px 0 0" }}>
          Got a world that<br />needs <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--crimson-500)" }}>building?</span>
        </h2>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: 21, fontStyle: "italic", color: "var(--fg2)", marginTop: 18 }}>
          Tell me the wildest version of the idea. We’ll make it real.
        </p>

        <div style={{ maxWidth: 560, margin: "30px auto 0", background: "#fff", border: "2.5px solid var(--ink)",
          borderRadius: 22, padding: 24, boxShadow: "6px 6px 0 var(--crimson-500)", textAlign: "left" }}>
          {!sent ? (<div>
            <textarea value={msg} onChange={e => setMsg(e.target.value)} rows={3} placeholder="Hey Quindal — here’s what I’m dreaming up…"
              style={{ width: "100%", fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.5, padding: "14px 16px",
                border: "2px solid var(--ink)", borderRadius: 14, outline: "none", resize: "vertical", boxSizing: "border-box" }} />
            <div style={{ display: "flex", gap: 10, marginTop: 14, alignItems: "center", flexWrap: "wrap" }}>
              <input placeholder="your email" style={{ flex: "1 1 180px", fontFamily: "var(--font-sans)", fontSize: 16,
                padding: "13px 16px", border: "2px solid var(--ink)", borderRadius: 14, outline: "none" }} />
              <Btn variant="primary" onClick={() => msg.trim() && setSent(true)}>Send it →</Btn>
            </div>
          </div>) : (
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <Sticker bg="var(--crimson-500)" fg="#fff" size={48}>✓</Sticker>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20 }}>Got it — talk soon!</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg2)" }}>I reply to everything that isn’t boring (so, everything).</div>
              </div>
            </div>
          )}
        </div>
        <div style={{ display: "flex", gap: 18, justifyContent: "center", marginTop: 24, fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 15 }}>
          <a style={{ cursor: "pointer", color: "var(--ink)" }}>@quindalwilliams</a>
          <span style={{ color: "var(--fg3)" }}>·</span>
          <a style={{ cursor: "pointer", color: "var(--ink)" }}>hi@quindalwilliams.com</a>
        </div>
      </div>
    </section>
  );
}

function Footer({ onCharacter }) {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--cream)", padding: "48px 30px",
      backgroundImage: `linear-gradient(rgba(26,26,46,.92),rgba(26,26,46,.92)), url(${ASSET}/textures/leopard-sm.jpg)`,
      backgroundSize: "cover" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between",
        alignItems: "center", gap: 24, flexWrap: "wrap" }}>
        <img src={`${ASSET}/logos/monogram-red.png`} style={{ height: 64 }} alt="QW" />
        <div style={{ textAlign: "right" }}>
          <div style={{ fontFamily: "var(--font-serif-display)", fontStyle: "italic", fontSize: 26 }}>Creatives at play.</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "rgba(247,243,239,.6)", marginTop: 8 }}>
            © 2026 Quindal Williams · Phase 1 — Creative Director
          </div>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { Contact, Footer });
