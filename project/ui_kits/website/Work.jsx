/* Work.jsx — editorial case-study spreads (not a thumbnail grid) */
const WORK = [
  { cat: "Spatial / Experiential", title: "Teton Ridge", sub: "Cowboy Christmas 2026",
    body: "A western-themed experiential booth for Teton Ridge at the National Finals Rodeo — concept, identity, and on-floor build. Leather, brass, and big-sky type.",
    tags: ["Experiential", "Identity", "Circle"], tex: "leopard", accent: "var(--amber-900)", fg: "var(--ink)" },
  { cat: "Brand Identity", title: "SEICon III", sub: "Conference branding system",
    body: "Full identity and wayfinding for the third SEICon conference — a flexible mark, signage, badges, and a stage package that scaled from tote bag to jumbotron.",
    tags: ["Identity", "Print", "Signage"], tex: null, accent: "var(--teal-900)", fg: "#fff" },
  { cat: "Spatial / Experiential", title: "Sanmina", sub: "Trade-show booth",
    body: "A precision-engineered trade-show presence for Sanmina Corporation. Clean architecture, lit product plinths, and a quiet confidence that let the tech do the talking.",
    tags: ["Experiential", "Spatial"], tex: "zebra", accent: "var(--azure-700)", fg: "#fff" },
  { cat: "Packaging — spec", title: "Sugar Hour", sub: "Confection packaging concept",
    body: "A spec packaging system for an imagined nostalgic candy line — Lisa-Frank saturation, embossed stickers, and a unit box you’d keep after the candy’s gone.",
    tags: ["Packaging", "Spec", "Illustration"], tex: null, accent: "var(--magenta-500)", fg: "#fff" },
];

function WorkSpread({ p, i }) {
  const flip = i % 2 === 1;
  const Panel = (
    <div style={{ flex: "1 1 0", minWidth: 0, position: "relative", borderRadius: 24, overflow: "hidden",
      minHeight: 320, border: "2.5px solid var(--ink)", background: p.accent,
      backgroundImage: p.tex ? `url(${ASSET}/textures/${p.tex}-sm.jpg)` : "none", backgroundSize: "cover", backgroundPosition: "center",
      display: "flex", alignItems: "flex-end", padding: 22 }}>
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 26, color: p.fg,
        background: p.tex ? "rgba(26,26,46,.78)" : "transparent", padding: p.tex ? "6px 14px" : 0, borderRadius: 999 }}>
        {p.title}
      </span>
    </div>
  );
  const Text = (
    <div style={{ flex: "1 1 0", minWidth: 0, padding: "8px 6px" }}>
      <Eyebrow>{p.cat}</Eyebrow>
      <h3 style={{ fontFamily: "var(--font-serif-display)", fontWeight: 500, fontSize: "clamp(30px,3.6vw,46px)",
        lineHeight: 1.0, letterSpacing: "-.015em", margin: "12px 0 4px" }}>{p.title}</h3>
      <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 19, color: "var(--fg2)" }}>{p.sub}</div>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.6, color: "var(--fg1)", maxWidth: 440, marginTop: 16 }}>{p.body}</p>
      <div style={{ display: "flex", gap: 8, marginTop: 18, flexWrap: "wrap" }}>
        {p.tags.map(t => <Tag key={t} bg="transparent" outline style={{ fontSize: 12, padding: "6px 13px" }}>{t}</Tag>)}
      </div>
    </div>
  );
  return (
    <div className="work-spread" style={{ display: "flex", gap: 36, alignItems: "center",
      flexDirection: flip ? "row-reverse" : "row", marginBottom: 56 }}>
      {Panel}{Text}
    </div>
  );
}

function Work() {
  return (
    <section id="work" style={{ padding: "80px 30px", scrollMarginTop: 70 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 12 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(34px,5vw,60px)", margin: 0 }}>Selected work</h2>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 19, color: "var(--fg2)", margin: 0 }}>
            Real projects, spec dreams, and everything I’ve talked my way into.
          </p>
        </div>
        {WORK.map((p, i) => <WorkSpread key={p.title} p={p} i={i} />)}
      </div>
    </section>
  );
}
Object.assign(window, { Work });
