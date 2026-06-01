/* ui.jsx — Quindal UI kit shared primitives.
   Cosmetic, reusable building blocks. Exported to window for cross-file use. */
const { useState, useEffect, useRef } = React;

const ASSET = "../../assets";

/* Tracked-out uppercase label */
function Eyebrow({ children, color = "var(--crimson-500)", style }) {
  return (
    <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 12,
      letterSpacing: ".18em", textTransform: "uppercase", color, ...style }}>
      {children}
    </div>
  );
}

/* Pill tag */
function Tag({ children, bg = "var(--magenta-100)", fg = "var(--magenta-900)", outline, style }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13, letterSpacing: ".02em",
      borderRadius: 999, padding: "8px 16px",
      background: outline ? "transparent" : bg, color: outline ? "var(--ink)" : fg,
      border: outline ? "2px solid var(--ink)" : "none", ...style }}>
      {children}
    </span>
  );
}

/* Round/blobby decorative sticker glyph */
function Sticker({ children, bg = "var(--amber-900)", fg = "var(--ink)", size = 64, rot = 0, square, style }) {
  return (
    <span style={{
      width: size, height: size, flex: "none",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      borderRadius: square ? size * 0.28 : 999, fontSize: size * 0.46,
      background: bg, color: fg, border: "2.5px solid var(--ink)",
      boxShadow: "3px 3px 0 var(--ink)", transform: `rotate(${rot}deg)`, ...style }}>
      {children}
    </span>
  );
}

/* Buttons: variants primary | sticker | ghost | dark */
function Btn({ children, variant = "primary", onClick, style, type, big }) {
  const [press, setPress] = useState(false);
  const base = {
    fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: big ? 17 : 15,
    border: "none", cursor: "pointer", borderRadius: 999,
    padding: big ? "16px 32px" : "13px 26px", transition: "transform .12s ease, box-shadow .12s ease",
    transform: press ? "scale(.96)" : "scale(1)", lineHeight: 1,
  };
  const v = {
    primary: { background: "var(--crimson-500)", color: "#fff" },
    sticker: { background: "var(--amber-900)", color: "var(--ink)", border: "2.5px solid var(--ink)",
      boxShadow: press ? "1px 1px 0 var(--ink)" : "4px 4px 0 var(--ink)" },
    ghost: { background: "transparent", color: "var(--ink)", border: "2px solid var(--ink)" },
    dark: { background: "var(--ink)", color: "var(--cream)" },
  }[variant];
  return (
    <button type={type} onClick={onClick}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)} onMouseLeave={() => setPress(false)}
      style={{ ...base, ...v, ...style }}>{children}</button>
  );
}

/* Mascot placeholder — flagged: real character art not yet provided */
function MascotSlot({ w = 280, h = 360, label = "Quindal’s cartoon character", style }) {
  return (
    <div style={{
      width: w, height: h, flex: "none", position: "relative",
      borderRadius: 24, border: "2.5px dashed var(--crimson-300)",
      background: "repeating-linear-gradient(45deg, #fff, #fff 14px, var(--magenta-100) 14px, var(--magenta-100) 28px)",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: 22, ...style }}>
      <img src={`${ASSET}/logos/monogram-red.png`} style={{ width: "42%", opacity: .85, marginBottom: 16 }} alt="" />
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18, color: "var(--crimson-700)" }}>{label}</div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg3)", marginTop: 8, maxWidth: 200, lineHeight: 1.5 }}>
        Awaiting the hand-sketched alter-ego art
      </div>
    </div>
  );
}

Object.assign(window, { Eyebrow, Tag, Sticker, Btn, MascotSlot, ASSET });
