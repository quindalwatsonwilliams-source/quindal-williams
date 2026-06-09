import { useEffect, useRef } from 'react';

/* Pre-rendered noise tile: generated once on a small canvas and tiled as a
   background image. The "living grain" motion comes from a steps() keyframe
   that jumps background-position — pure compositing, no per-frame rasterization
   (the old feTurbulence approach recomputed fractal noise for every viewport
   pixel every 100ms, which was the main source of scroll jank). */
export function FilmGrain() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const size = 200;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const img = ctx.createImageData(size, size);
    const d = img.data;
    for (let i = 0; i < d.length; i += 4) {
      const v = (Math.random() * 255) | 0;
      d[i] = d[i + 1] = d[i + 2] = v;
      d[i + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
    el.style.backgroundImage = `url(${canvas.toDataURL('image/png')})`;
  }, []);

  return (
    <div ref={ref} className="film-grain" style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      pointerEvents: 'none', zIndex: 1000, opacity: 0.035,
      backgroundRepeat: 'repeat',
    }} />
  );
}
