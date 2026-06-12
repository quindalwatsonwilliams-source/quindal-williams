import { ASSET, Pill } from './ui';
import { MagneticWrapper } from './MagneticWrapper';

const NAV_LINKS = [
  { id: 'work',     label: 'Work' },
  { id: 'about',    label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'contact',  label: 'Contact' },
];

function Logo() {
  return (
    <img src={`${ASSET}/logos/logo-horizontal.png`} style={{ height: 36, display: 'block' }} alt="Quindal Williams" />
  );
}

export function Nav({ onHome, onLink, onResume }) {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 60,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '11px 28px', background: 'rgba(247,243,239,.85)',
      backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(26,26,46,.08)',
    }}>
      <a onClick={onHome} style={{ cursor: 'pointer' }}>
        <Logo />
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <div style={{ display: 'flex', gap: 22 }} className="ed-navlinks">
          {NAV_LINKS.map(({ id, label }) => (
            <a key={id} onClick={() => onLink(id)} style={{
              cursor: 'pointer', fontFamily: 'var(--font-mono)',
              fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: '#1A1A2E',
            }}>{label}</a>
          ))}
          <a onClick={onResume} style={{
            cursor: 'pointer', fontFamily: 'var(--font-mono)',
            fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase',
            color: 'var(--crimson-500)',
          }}>Résumé</a>
        </div>
        <MagneticWrapper><Pill onClick={() => window.open('/intake.html', '_blank')}>Work with me</Pill></MagneticWrapper>
      </div>
    </nav>
  );
}
