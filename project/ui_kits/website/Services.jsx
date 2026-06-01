/* Services.jsx — clean services list */
const SERVICES = [
  { n: "01", t: "Branding", d: "Identity systems, logotypes, and the rules that keep a brand feeling like itself everywhere.", c: "var(--crimson-500)" },
  { n: "02", t: "Creative Direction", d: "The vision and the taste-keeping — concept, art direction, and making sure the whole thing sings.", c: "var(--magenta-500)" },
  { n: "03", t: "Campaigns", d: "Launch ideas with legs — concepts, key art, and rollout across the channels that matter.", c: "var(--teal-900)" },
  { n: "04", t: "Packaging", d: "Objects you want to keep. Structure, illustration, and the unboxing moment.", c: "var(--amber-900)" },
  { n: "05", t: "Spatial / Experiential", d: "Brand worlds you can walk through — booths, activations, and environments built to be felt.", c: "var(--azure-700)" },
];

function Services() {
  return (
    <section id="services" style={{ padding: "80px 30px", scrollMarginTop: 70 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 36, flexWrap: "wrap" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(34px,5vw,60px)", margin: 0 }}>What I do</h2>
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 18, color: "var(--fg2)" }}>— pricing on request, personality included free.</span>
        </div>
        <div style={{ borderTop: "2px solid var(--ink)" }}>
          {SERVICES.map(s => (
            <div key={s.n} className="svc-row" style={{ display: "grid", gridTemplateColumns: "70px 1fr 1.4fr",
              gap: 24, alignItems: "center", padding: "24px 6px", borderBottom: "1px solid var(--line)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 15, color: s.c, fontWeight: 700 }}>{s.n}</span>
              <h3 style={{ fontFamily: "var(--font-serif-display)", fontWeight: 500, fontSize: "clamp(24px,2.6vw,32px)", margin: 0, lineHeight: 1.05 }}>{s.t}</h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.55, color: "var(--fg2)", margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Services });
