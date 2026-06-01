import { ASSET, Pill } from './ui';

export function Nav({ onHome, onLink, onCharacter }) {
  const links = [['about', 'About'], ['work', 'Work'], ['services', 'Services'], ['contact', 'Contact']];
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 60,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '13px 28px', background: 'rgba(247,243,239,.9)',
      backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--line)',
    }}>
      <a onClick={onHome} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src={`${ASSET}/logos/monogram-red.png`} style={{ height: 26 }} alt="" />
        <span style={{ fontFamily: 'var(--font-serif-display)', fontSize: 17, letterSpacing: '.04em', color: 'var(--ink)' }}>
          Quindal Williams
        </span>
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        <div style={{ display: 'flex', gap: 26 }} className="ed-navlinks">
          {links.map(([id, label]) => (
            <a key={id} onClick={() => onLink(id)} style={{
              cursor: 'pointer', fontFamily: 'var(--font-mono)',
              fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink)',
            }}>{label}</a>
          ))}
        </div>
        <Pill onClick={onCharacter}>Work with me</Pill>
      </div>
    </nav>
  );
}
