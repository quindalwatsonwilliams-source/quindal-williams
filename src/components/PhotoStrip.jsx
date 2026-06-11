import { ASSET } from './ui';

export function PhotoStrip() {
  return (
    <div style={{
      display: 'flex',
      height: 'clamp(220px, 28vw, 380px)',
      overflow: 'hidden',
      background: '#0E0203',
    }}>
      <img
        src={`${ASSET}/photos/matchbox.jpg`}
        alt=""
        style={{ flex: '1.5', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
      />
      <div style={{ width: 2, background: '#0E0203', flexShrink: 0 }} />
      <img
        src={`${ASSET}/photos/heels.jpg`}
        alt=""
        style={{ flex: '1', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
      />
    </div>
  );
}
