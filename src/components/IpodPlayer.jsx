import { useState, useRef, useEffect } from 'react';
import { ASSET } from './ui';

// ─── Add your tracks here ────────────────────────────────────────────────────
// Upload MP3s to public/assets/music/ and list them below.
// File names must match exactly (case-sensitive).
export const QTAPE = [
  { title: 'Track Title',   artist: 'Artist Name', src: `${ASSET}/music/track-01.mp3` },
  { title: 'Track Title',   artist: 'Artist Name', src: `${ASSET}/music/track-02.mp3` },
  { title: 'Track Title',   artist: 'Artist Name', src: `${ASSET}/music/track-03.mp3` },
];
// ─────────────────────────────────────────────────────────────────────────────

function fmt(s) {
  if (!isFinite(s) || s < 0) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

export function IpodPlayer() {
  const [idx, setIdx]       = useState(0);
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef  = useRef(null);
  const prevIdx   = useRef(-1);
  const track     = QTAPE[idx];
  const progress  = duration > 0 ? elapsed / duration : 0;

  // Load new track or toggle play/pause
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

  const prev = () => { setElapsed(0); setDuration(0); setIdx(i => (i - 1 + QTAPE.length) % QTAPE.length); setPlaying(true); };
  const next = () => { setElapsed(0); setDuration(0); setIdx(i => (i + 1) % QTAPE.length); setPlaying(true); };

  const seek = (e) => {
    const a = audioRef.current;
    if (!a || !a.duration) return;
    const r = e.currentTarget.getBoundingClientRect();
    a.currentTime = ((e.clientX - r.left) / r.width) * a.duration;
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 280, margin: '0 auto', userSelect: 'none' }}>
      <audio
        ref={audioRef}
        onTimeUpdate={() => { const a = audioRef.current; if (a) setElapsed(a.currentTime); }}
        onLoadedMetadata={() => { const a = audioRef.current; if (a) setDuration(a.duration); }}
        onEnded={next}
      />

      {/* ── iPod screen content (sits under the frame image) ────────────── */}
      <div style={{
        position: 'absolute',
        top: '6%', left: '13.5%', width: '73%', height: '34%',
        background: '#0d1a0d',
        borderRadius: '3px 3px 2px 2px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        padding: '7px 9px 6px',
        boxSizing: 'border-box',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 7, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(251,214,109,.45)' }}>
            Now Playing
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 7, color: 'rgba(251,214,109,.35)' }}>
            {idx + 1} / {QTAPE.length}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(251,214,109,.15)', marginBottom: 6 }} />

        {/* Track info */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div style={{
            fontFamily: 'var(--font-serif-display)', fontStyle: 'italic',
            fontSize: 12.5, color: '#FBD66D', lineHeight: 1.15,
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            {track.title}
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 8.5, letterSpacing: '.04em',
            color: 'rgba(251,214,109,.55)', marginTop: 3,
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            {track.artist}
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ marginTop: 'auto', paddingTop: 4 }}>
          <div
            onClick={seek}
            style={{ height: 3, background: 'rgba(251,214,109,.18)', borderRadius: 2, cursor: 'pointer', position: 'relative' }}
          >
            <div style={{ position: 'absolute', inset: '0 auto 0 0', width: `${progress * 100}%`, background: '#FBD66D', borderRadius: 2, transition: 'width .25s linear' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 7, color: 'rgba(251,214,109,.4)' }}>{fmt(elapsed)}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 7, color: 'rgba(251,214,109,.4)' }}>{fmt(duration)}</span>
          </div>
        </div>
      </div>

      {/* ── iPod frame image (on top, transparent screen cutout) ─────────── */}
      <img
        src={`${ASSET}/photos/ipod-frame.png`}
        alt="iPod Mini"
        style={{ width: '100%', display: 'block', position: 'relative', zIndex: 1, pointerEvents: 'none' }}
      />

      {/* ── Invisible hit targets over click wheel ───────────────────────── */}
      {/* |<< Prev */}
      <button onClick={prev} aria-label="Previous track" style={{
        position: 'absolute', zIndex: 2,
        top: '60%', left: '18%', width: '16%', height: '10%',
        background: 'transparent', border: 'none', cursor: 'pointer', padding: 0,
      }} />
      {/* >>| Next */}
      <button onClick={next} aria-label="Next track" style={{
        position: 'absolute', zIndex: 2,
        top: '60%', right: '18%', width: '16%', height: '10%',
        background: 'transparent', border: 'none', cursor: 'pointer', padding: 0,
      }} />
      {/* ►║ Play/Pause (bottom of wheel) */}
      <button onClick={() => setPlaying(p => !p)} aria-label={playing ? 'Pause' : 'Play'} style={{
        position: 'absolute', zIndex: 2,
        top: '75%', left: '40%', width: '20%', height: '9%',
        background: 'transparent', border: 'none', cursor: 'pointer', padding: 0,
      }} />
      {/* Center select button */}
      <button onClick={() => setPlaying(p => !p)} aria-label="Select" style={{
        position: 'absolute', zIndex: 2,
        top: '57.5%', left: '36.5%', width: '27%', height: '16%',
        borderRadius: '50%',
        background: 'transparent', border: 'none', cursor: 'pointer', padding: 0,
      }} />
    </div>
  );
}
