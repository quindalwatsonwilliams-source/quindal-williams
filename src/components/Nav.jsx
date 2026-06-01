import { ASSET, Pill } from './ui';

const NAV_LINKS = [
  { id: 'about',    label: 'About' },
  { id: 'work',     label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'socials',  label: 'Socials' },
  { id: 'contact',  label: 'Contact' },
];

/* Horizontal lockup: QUINDAL [monogram] WILLIAMS */
function Logo() {
  const word = {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontWeight: 300,
    fontSize: 17,
    letterSpacing: '.28em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    lineHeight: 1,
    userSelect: 'none',
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={word}>Quindal</span>
      <img src={`${ASSET}/logos/monogram-red.png`} style={{ height: 32, display: 'block' }} alt="QW" />
      <span style={word}>Williams</span>
    </div>
  );
}

export function Nav({ onHome, onLink, onCharacter, onResume }) {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 60,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '11px 28px', background: 'rgba(247,243,239,.9)',
      backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--line)',
    }}>
      <a onClick={onHome} style={{ cursor: 'pointer' }}>
        <Logo />
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <div style={{ display: 'flex', gap: 22 }} className="ed-navlinks">
          {NAV_LINKS.map(({ id, label }) => (
            <a key={id} onClick={() => onLink(id)} style={{
              cursor: 'pointer', fontFamily: 'var(--font-mono)',
              fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink)',
            }}>{label}</a>
          ))}
          <a onClick={onResume} style={{
            cursor: 'pointer', fontFamily: 'var(--font-mono)',
            fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase',
            color: 'var(--teal-700)',
          }}>Résumé</a>
        </div>
        <Pill onClick={onCharacter}>Work with me</Pill>
      </div>
    </nav>
  );
}
