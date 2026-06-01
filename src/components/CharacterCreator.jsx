import { useState } from 'react';
import { ASSET, Eyebrow, Tag, Sticker, Btn } from './ui';

const CC_VIBES = [
  { id: 'maximal', label: 'Maximalist & loud', emoji: '✦', c: 'var(--crimson-500)' },
  { id: 'dreamy', label: 'Soft & dreamy', emoji: '★', c: 'var(--magenta-300)' },
  { id: 'sharp', label: 'Sharp & strategic', emoji: '◆', c: 'var(--azure-700)' },
  { id: 'nostalgic', label: 'Warm & nostalgic', emoji: '❤', c: 'var(--amber-900)' },
  { id: 'future', label: 'Future-glam', emoji: '✶', c: 'var(--teal-900)' },
  { id: 'chaos', label: 'Chaotic good', emoji: '✸', c: 'var(--olive-700)' },
];

const CC_MOVES = [
  { id: 'art', label: 'I make it gorgeous', arche: 'art' },
  { id: 'hype', label: 'I hype the whole room', arche: 'hype' },
  { id: 'lore', label: 'I name everything & build the canon', arche: 'lore' },
  { id: 'vision', label: 'I see it before it exists', arche: 'vision' },
  { id: 'produce', label: 'I make it actually happen', arche: 'produce' },
  { id: 'wild', label: 'I break every rule', arche: 'wild' },
  { id: 'strat', label: 'I find the through-line', arche: 'strat' },
  { id: 'world', label: 'I build whole worlds', arche: 'world' },
];

const CC_FUELS = [
  { id: 'coffee', label: 'Iced coffee, always' },
  { id: 'playlist', label: 'A perfect playlist' },
  { id: 'deadline', label: 'Deadline adrenaline' },
  { id: 'nostalgia', label: 'Pure nostalgia' },
  { id: 'groupchat', label: 'Group-chat chaos' },
  { id: 'figma', label: 'A spotless Figma file' },
];

const ARCHETYPES = {
  art:     { name: 'The Art Director', tagline: 'Taste is the whole strategy.', c: 'var(--crimson-500)', fg: '#fff', sticker: '✦',
    desc: 'You can feel when a kerning is off from across the room. Beauty isn\'t decoration to you — it\'s the argument.' },
  hype:    { name: 'The Hype Machine', tagline: 'Energy is a deliverable.', c: 'var(--amber-900)', fg: 'var(--ink)', sticker: '★',
    desc: 'You make people believe. The room is warmer, louder, and braver because you walked in with the idea.' },
  lore:    { name: 'The Lore Master', tagline: 'Every brand needs a canon.', c: 'var(--magenta-700)', fg: '#fff', sticker: '❤',
    desc: 'Names, origin stories, inside jokes, the bible. You build the mythology people want to live inside.' },
  vision:  { name: 'The Visionary', tagline: 'Already living in next year.', c: 'var(--teal-900)', fg: '#fff', sticker: '✶',
    desc: 'You see the finished thing before anyone\'s opened a file. The rest is just everyone catching up.' },
  produce: { name: 'The Producer', tagline: 'Dreams, but on time and on budget.', c: 'var(--azure-700)', fg: '#fff', sticker: '◆',
    desc: 'Chaos walks in, a plan walks out. You\'re the reason the gorgeous idea actually shipped.' },
  wild:    { name: 'The Wild Card', tagline: 'The rules were a suggestion.', c: 'var(--olive-700)', fg: '#fff', sticker: '✸',
    desc: 'Unpredictable in the best way. The idea nobody asked for is the one that ends up on the wall.' },
  strat:   { name: 'The Strategist', tagline: 'The through-line is everything.', c: 'var(--ink)', fg: 'var(--cream)', sticker: '◆',
    desc: 'You find the one true thread and pull it through every touchpoint until the whole thing clicks.' },
  world:   { name: 'The World Builder', tagline: 'Brands you can walk through.', c: 'var(--magenta-500)', fg: '#fff', sticker: '✦',
    desc: 'You don\'t make logos, you make places. Spaces, systems, and worlds people don\'t want to leave.' },
};

function OptionGrid({ options, value, onPick, cols = 2 }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols},1fr)`, gap: 12 }}>
      {options.map(o => {
        const sel = value === o.id;
        return (
          <button key={o.id} onClick={() => onPick(o.id)} style={{
            cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 12,
            fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 16, color: 'var(--ink)',
            background: sel ? 'var(--cream)' : '#fff', padding: '16px 18px', borderRadius: 16,
            border: '2.5px solid var(--ink)', transition: 'transform .1s, box-shadow .1s',
            boxShadow: sel ? '4px 4px 0 var(--crimson-500)' : '4px 4px 0 var(--ink)',
            transform: sel ? 'translate(-1px,-1px)' : 'none',
          }}>
            {o.emoji && (
              <span style={{
                width: 34, height: 34, flex: 'none', borderRadius: 999,
                background: o.c || 'var(--amber-900)', border: '2px solid var(--ink)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--ink)', fontSize: 16,
              }}>{o.emoji}</span>
            )}
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function Stepper({ step }) {
  const labels = ['Vibe', 'Signature move', 'Fuel'];
  return (
    <div style={{ display: 'flex', gap: 8, marginBottom: 22 }}>
      {labels.map((l, i) => (
        <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700,
            color: i <= step ? 'var(--crimson-500)' : 'var(--fg3)',
          }}>{String(i + 1).padStart(2, '0')} {l}</span>
          {i < 2 && <span style={{ color: 'var(--fg3)' }}>·</span>}
        </div>
      ))}
    </div>
  );
}

function ResultCard({ arche, vibe, fuel, onRestart }) {
  const a = ARCHETYPES[arche];
  const v = CC_VIBES.find(x => x.id === vibe);
  const f = CC_FUELS.find(x => x.id === fuel);
  const [email, setEmail] = useState('');
  const [saved, setSaved] = useState(false);
  return (
    <div>
      <div style={{
        background: a.c, color: a.fg, borderRadius: 26, border: '3px solid var(--ink)',
        boxShadow: '10px 10px 0 var(--ink)', padding: 30, position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -10, right: -10, opacity: .9 }}>
          <Sticker size={88} bg="var(--cream)" rot={12}>{a.sticker}</Sticker>
        </div>
        <Eyebrow color={a.fg} style={{ opacity: .85 }}>Your creative archetype</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(40px,6vw,64px)',
          lineHeight: .95, margin: '10px 0 6px', maxWidth: '80%',
        }}>{a.name}</h2>
        <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 22, opacity: .95 }}>{a.tagline}</div>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.6, marginTop: 16, maxWidth: 460, opacity: .95 }}>{a.desc}</p>
        <div style={{ display: 'flex', gap: 8, marginTop: 20, flexWrap: 'wrap' }}>
          <Tag bg="rgba(247,243,239,.18)" fg={a.fg} style={{ border: `1.5px solid ${a.fg}` }}>{v?.emoji} {v?.label}</Tag>
          <Tag bg="rgba(247,243,239,.18)" fg={a.fg} style={{ border: `1.5px solid ${a.fg}` }}>⚡ {f?.label}</Tag>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 24, opacity: .9 }}>
          <img
            src={`${ASSET}/logos/monogram-red.png`}
            style={{ height: 34, filter: a.fg === '#fff' || a.fg === 'var(--cream)' ? 'brightness(0) invert(1)' : 'none' }}
            alt=""
          />
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, letterSpacing: '.08em' }}>quindalwilliams.com/build-your-character</span>
        </div>
      </div>

      <div style={{ background: '#fff', border: '2.5px solid var(--ink)', borderRadius: 20, padding: 22, marginTop: 18 }}>
        {!saved ? (
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20, marginBottom: 4 }}>Save your character ✦</div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--fg2)', margin: '0 0 14px' }}>
              Drop your email and I'll send the card + the occasional note from the studio.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@email.com"
                style={{
                  flex: '1 1 200px', fontFamily: 'var(--font-sans)', fontSize: 16,
                  padding: '13px 16px', border: '2px solid var(--ink)', borderRadius: 14, outline: 'none',
                }}
              />
              <Btn variant="primary" onClick={() => email.includes('@') && setSaved(true)}>Save & share →</Btn>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Sticker bg="var(--teal-900)" fg="#fff" size={48}>✓</Sticker>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18 }}>Saved! Check your inbox.</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--fg2)' }}>Screenshot the card above and tag <strong>@quindalwilliams</strong>.</div>
            </div>
          </div>
        )}
      </div>

      <div style={{ textAlign: 'center', marginTop: 18 }}>
        <Btn variant="ghost" onClick={onRestart}>↺ Build another</Btn>
      </div>
    </div>
  );
}

export function CharacterCreator({ onExit }) {
  const [step, setStep] = useState(0);
  const [vibe, setVibe] = useState(null);
  const [move, setMove] = useState(null);
  const [fuel, setFuel] = useState(null);

  const reset = () => { setStep(0); setVibe(null); setMove(null); setFuel(null); };
  const arche = move ? CC_MOVES.find(m => m.id === move).arche : null;
  const done = step === 3;

  return (
    <section style={{
      minHeight: 'calc(100vh - 63px)', padding: '44px 24px 80px',
      background: 'radial-gradient(circle at 20% 0%, var(--magenta-100), var(--cream) 55%)',
    }}>
      <div style={{ maxWidth: 620, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <Eyebrow style={{ justifyContent: 'center' }}>quindalwilliams.com/build-your-character</Eyebrow>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(36px,6vw,58px)',
            lineHeight: .98, margin: '10px 0 0', color: 'var(--ink)',
          }}>
            What kind of creative<br /><span style={{ color: 'var(--crimson-500)' }}>are you?</span>
          </h1>
        </div>

        <div style={{
          background: 'rgba(255,255,255,.7)', backdropFilter: 'blur(6px)', borderRadius: 24,
          border: '2.5px solid var(--ink)', padding: 26, boxShadow: '6px 6px 0 var(--ink)',
        }}>
          {!done && <Stepper step={step} />}

          {step === 0 && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif-display)', fontWeight: 500, fontSize: 26, margin: '0 0 16px' }}>Pick your vibe.</h3>
              <OptionGrid options={CC_VIBES} value={vibe} onPick={v => setVibe(v)} cols={2} />
            </div>
          )}

          {step === 1 && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif-display)', fontWeight: 500, fontSize: 26, margin: '0 0 16px' }}>Your signature move?</h3>
              <OptionGrid options={CC_MOVES} value={move} onPick={v => setMove(v)} cols={1} />
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif-display)', fontWeight: 500, fontSize: 26, margin: '0 0 16px' }}>What fuels you?</h3>
              <OptionGrid options={CC_FUELS} value={fuel} onPick={v => setFuel(v)} cols={2} />
            </div>
          )}

          {done && <ResultCard arche={arche} vibe={vibe} fuel={fuel} onRestart={reset} />}

          {!done && (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
              <Btn variant="ghost" onClick={() => step === 0 ? onExit() : setStep(step - 1)}>← Back</Btn>
              <Btn
                variant="dark"
                onClick={() => {
                  const ok = (step === 0 && vibe) || (step === 1 && move) || (step === 2 && fuel);
                  if (ok) setStep(step + 1);
                }}
                style={{ opacity: ((step === 0 && vibe) || (step === 1 && move) || (step === 2 && fuel)) ? 1 : .4 }}
              >
                {step === 2 ? 'Reveal my character ✦' : 'Next →'}
              </Btn>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
