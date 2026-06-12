import { useState, useRef, useEffect } from 'react';
import { ASSET } from './ui';

export const QTAPE = [
  { title: 'Busy Woman',                      artist: 'Sabrina Carpenter', src: `${ASSET}/music/sabrina-carpenter-busy-woman.mp3` },
  { title: 'She Way Out',                     artist: 'The 1975',          src: `${ASSET}/music/the-1975-she-way-out.mp3` },
  { title: 'Ok Love You Bye',                 artist: 'Olivia Dean',       src: `${ASSET}/music/olivia-dean-ok-love-you-bye.mp3` },
  { title: 'So Easy (To Fall In Love)',        artist: 'Olivia Dean',       src: `${ASSET}/music/olivia-dean-so-easy.mp3` },
  { title: "It Isn't Perfect But It Might Be", artist: 'Olivia Dean',       src: `${ASSET}/music/olivia-dean-not-perfect.mp3` },
];

function fmt(s) {
  if (!isFinite(s) || s < 0) return '0:00';
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
}

export function IpodPlayer() {
  const [idx, setIdx]         = useState(0);
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const prevIdx  = useRef(-1);
  const track    = QTAPE[idx];
  const progress = duration > 0 ? elapsed / duration : 0;

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    if (idx !== prevIdx.current) {
      prevIdx.current = idx;
      a.src = QTAPE[idx].src;
      a.load();
      if (playing) a.play().catch(() => setPlaying(false));
    } else {
      playing ? a.play().catch(() => setPlaying(false)) : a.pause();
    }
  }, [idx, playing]);

  const skip = (dir) => {
    setElapsed(0); setDuration(0);
    setIdx(i => (i + dir + QTAPE.length) % QTAPE.length);
    setPlaying(true);
  };

  const seek = (e) => {
    const a = audioRef.current;
    if (!a?.duration) return;
    const r = e.currentTarget.getBoundingClientRect();
    a.currentTime = ((e.clientX - r.left) / r.width) * a.duration;
  };

  return (
    <div style={{ position: 'relative', width: '100%', userSelect: 'none' }}>
      <audio
        ref={audioRef}
        onTimeUpdate={() => { const a = audioRef.current; if (a) setElapsed(a.currentTime); }}
        onLoadedMetadata={() => { const a = audioRef.current; if (a) setDuration(a.duration); }}
        onEnded={() => skip(1)}
      />

      {/* ── LCD screen behind the frame ─────────────────────────────── */}
      {/* Screen cutout: top=9.8%, left=32.5%, width=33.7%, height=26% */}
      <div style={{
        position: 'absolute',
        top: '9.8%', left: '32.5%', width: '33.7%', height: '26%',
        background: '#0b170b',
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        padding: '5% 6%',
        boxSizing: 'border-box',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5%' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55em', letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(251,214,109,.4)' }}>
            ♫ now playing
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55em', color: 'rgba(251,214,109,.35)' }}>
            {idx + 1}/{QTAPE.length}
          </span>
        </div>

        {/* Track info */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div style={{
            fontFamily: 'var(--font-serif-display)', fontStyle: 'italic',
            fontSize: '0.72em', color: '#FBD66D', lineHeight: 1.1,
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            {track.title}
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.52em', letterSpacing: '.03em',
            color: 'rgba(251,214,109,.55)', marginTop: '4%',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            {track.artist}
          </div>
        </div>

        {/* Progress */}
        <div>
          <div onClick={seek} style={{ height: 2, background: 'rgba(251,214,109,.18)', borderRadius: 2, cursor: 'pointer', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '0 auto 0 0', width: `${progress * 100}%`, background: '#FBD66D', borderRadius: 2 }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3%' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.48em', color: 'rgba(251,214,109,.35)' }}>{fmt(elapsed)}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.48em', color: 'rgba(251,214,109,.35)' }}>{fmt(duration)}</span>
          </div>
        </div>
      </div>

      {/* ── iPod frame (on top — screen is a transparent cutout) ─────── */}
      <img
        src={`${ASSET}/photos/ipod-frame.png`}
        alt="iPod Mini"
        style={{ width: '100%', display: 'block', position: 'relative', zIndex: 1, pointerEvents: 'none' }}
      />

      {/* ── Clickwheel hit targets ───────────────────────────────────── */}
      {/* Based on: wheel center ~50%, 66% of the 5000×5000 source image */}

      {/* |<< Prev */}
      <button onClick={() => skip(-1)} aria-label="Previous" style={{
        position: 'absolute', zIndex: 2,
        top: '60%', left: '22%', width: '14%', height: '12%',
        background: 'transparent', border: 'none', cursor: 'pointer', padding: 0,
      }} />
      {/* >>| Next */}
      <button onClick={() => skip(1)} aria-label="Next" style={{
        position: 'absolute', zIndex: 2,
        top: '60%', right: '22%', width: '14%', height: '12%',
        background: 'transparent', border: 'none', cursor: 'pointer', padding: 0,
      }} />
      {/* ►║ Play/Pause */}
      <button onClick={() => setPlaying(p => !p)} aria-label={playing ? 'Pause' : 'Play'} style={{
        position: 'absolute', zIndex: 2,
        top: '76%', left: '39%', width: '22%', height: '9%',
        background: 'transparent', border: 'none', cursor: 'pointer', padding: 0,
      }} />
      {/* Center select */}
      <button onClick={() => setPlaying(p => !p)} aria-label="Select" style={{
        position: 'absolute', zIndex: 2,
        top: '57%', left: '37%', width: '26%', height: '18%',
        borderRadius: '50%',
        background: 'transparent', border: 'none', cursor: 'pointer', padding: 0,
      }} />
    </div>
  );
}
