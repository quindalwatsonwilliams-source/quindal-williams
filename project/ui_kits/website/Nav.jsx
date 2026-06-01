/* Nav.jsx — sticky top navigation */
function Nav({ onHome, onLink, onCharacter, route }) {
  const links = [["work", "Work"], ["about", "About"], ["services", "Services"], ["contact", "Contact"]];
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "16px 30px", background: "rgba(247,243,239,.82)",
      backdropFilter: "blur(12px)", borderBottom: "1px solid var(--line)",
    }}>
      <a onClick={onHome} style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
        <img src={`${ASSET}/logos/logo-horizontal.png`} style={{ height: 30 }} alt="Quindal Williams" />
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
        <div style={{ display: "flex", gap: 24 }} className="navlinks">
          {links.map(([id, label]) => (
            <a key={id} onClick={() => onLink(id)} style={{
              cursor: "pointer", fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 15,
              color: "var(--ink)", letterSpacing: ".01em",
            }}>{label}</a>
          ))}
        </div>
        <Btn variant="sticker" onClick={onCharacter} style={{ fontSize: 14, padding: "11px 20px" }}>
          ✦ Build your character
        </Btn>
      </div>
    </nav>
  );
}
Object.assign(window, { Nav });
