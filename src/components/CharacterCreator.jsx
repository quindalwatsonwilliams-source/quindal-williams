import { useState } from 'react';
import { ASSET, Lab, Note, Pill, Marquee } from './ui';

const CC_VIBES = [
  { id: 'maximal',   label: 'Maximalist & loud',  dot: 'var(--crimson-500)' },
  { id: 'dreamy',    label: 'Soft & dreamy',       dot: 'var(--magenta-300)' },
  { id: 'sharp',     label: 'Sharp & strategic',   dot: 'var(--azure-700)'   },
  { id: 'nostalgic', label: 'Warm & nostalgic',    dot: 'var(--amber-900)'   },
  { id: 'future',    label: 'Future-glam',          dot: 'var(--teal-700)'    },
  { id: 'chaos',     label: 'Chaotic good',         dot: 'var(--olive-700)'   },
];

const CC_MOVES = [
  { id: 'art',     label: 'I make it gorgeous',              arche: 'art'     },
  { id: 'hype',    label: 'I hype the whole room',           arche: 'hype'    },
  { id: 'lore',    label: 'I name everything & build the canon', arche: 'lore' },
  { id: 'vision',  label: 'I see it before it exists',       arche: 'vision'  },
  { id: 'produce', label: 'I make it actually happen',       arche: 'produce' },
  { id: 'wild',    label: 'I break every rule',              arche: 'wild'    },
  { id: 'strat',   label: 'I find the through-line',         arche: 'strat'   },
  { id: 'world',   label: 'I build whole worlds',            arche: 'world'   },
];

const CC_FUELS = [
  { id: 'coffee',    label: 'Iced coffee, always'   },
  { id: 'playlist',  label: 'A perfect playlist'    },
  { id: 'deadline',  label: 'Deadline adrenaline'   },
  { id: 'nostalgia', label: 'Pure nostalgia'        },
  { id: 'groupchat', label: 'Group-chat chaos'      },
  { id: 'figma',     label: 'A spotless Figma file' },
];

const ARCHETYPES = {
  art:     { name: 'The Art Director',  tagline: 'Taste is the whole strategy.',        accent: 'var(--crimson-500)', fg: '#fff',           glyph: '✦' },
  hype:    { name: 'The Hype Machine',  tagline: 'Energy is a deliverable.',            accent: 'var(--amber-900)',   fg: 'var(--ink)',      glyph: '★' },
  lore:    { name: 'The Lore Master',   tagline: 'Every brand needs a canon.',          accent: 'var(--magenta-700)', fg: '#fff',            glyph: '❤' },
  vision:  { name: 'The Visionary',     tagline: 'Already living in next year.',        accent: 'var(--teal-900)',    fg: '#fff',            glyph: '✶' },
  produce: { name: 'The Producer',      tagline: 'Dreams, but on time and on budget.',  accent: 'var(--azure-700)',   fg: '#fff',            glyph: '◆' },
  wild:    { name: 'The Wild Card',     tagline: 'The rules were a suggestion.',        accent: 'var(--olive-700)',   fg: '#fff',            glyph: '✸' },
  strat:   { name: 'The Strategist',    tagline: 'The through-line is everything.',     accent: 'var(--ink)',         fg: 'var(--cream)',    glyph: '◆' },
  world:   { name: 'The World Builder', tagline: 'Brands you can walk through.',        accent: 'var(--magenta-500)', fg: '#fff',            glyph: '✦' },
};

const ARCHETYPE_DESC = {
  art:     "You can feel when a kerning is off from across the room. Beauty isn't decoration to you — it's the argument.",
  hype:    "You make people believe. The room is warmer, louder, and braver because you walked in with the idea.",
  lore:    "Names, origin stories, inside jokes, the bible. You build the mythology people want to live inside.",
  vision:  "You see the finished thing before anyone's opened a file. The rest is just everyone catching up.",
  produce: "Chaos walks in, a plan walks out. You're the reason the gorgeous idea actually shipped.",
  wild:    "Unpredictable in the best way. The idea nobody asked for is the one that ends up on the wall.",
  strat:   "You find the one true thread and pull it through every touchpoint until the whole thing clicks.",
  world:   "You don't make logos, you make places. Spaces, systems, and worlds people don't want to leave.",
};

/* ── Step progress bar ── */
function Progress({ step }) {
  const steps = ['Vibe', 'Signature Move', 'Fuel'];
  return (
    <div style={{ display: 'flex', gap: 0, marginBottom: 36 }}>
      {steps.map((label, i) => {
        const active = i === step;
        const done   = i < step;
        return (
          <div key={label} style={{ flex: 1, position: 'relative' }}>
            <div style={{
              height: 2,
              background: done ? 'var(--crimson-500)' : active ? 'var(--crimson-500)' : 'var(--line)',
              transition: 'background .3s',
            }} />
            <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{
                width: 20, height: 20, borderRadius: 999, flex: 'none',
                background: done || active ? 'var(--crimson-500)' : 'var(--line)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-mono)', fontSize: 10, color: done || active ? '#fff' : 'var(--fg3)',
                transition: 'background .3s',
              }}>{done ? '✓' : i + 1}</span>
              <Lab color={active ? 'var(--crimson-500)' : done ? 'var(--ink)' : 'var(--fg3)'}
                style={{ fontSize: 10 }}>{label}</Lab>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ── Vibe grid (step 0) ── */
function VibeGrid({ value, onPick }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
      {CC_VIBES.map(o => {
        const sel = value === o.id;
        return (
          <button key={o.id} onClick={() => onPick(o.id)} style={{
            cursor: 'pointer', textAlign: 'left', padding: '16px 18px',
            background: sel ? o.dot : 'transparent',
            border: `1.5px solid ${sel ? o.dot : 'var(--line)'}`,
            borderRadius: 4, transition: 'all .15s ease',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: 999, flex: 'none',
              background: sel ? '#fff' : o.dot,
              transition: 'background .15s',
            }} />
            <span style={{
              fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 15,
              color: sel ? '#fff' : 'var(--ink)', lineHeight: 1.2,
            }}>{o.label}</span>
          </button>
        );
      })}
    </div>
  );
}

/* ── Move list (step 1) ── */
function MoveList({ value, onPick }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '1px solid var(--line)' }}>
      {CC_MOVES.map((o, i) => {
        const sel = value === o.id;
        return (
          <button key={o.id} onClick={() => onPick(o.id)} style={{
            cursor: 'pointer', textAlign: 'left',
            padding: '16px 6px',
            background: 'transparent',
            border: 'none', borderBottom: '1px solid var(--line)',
            display: 'flex', alignItems: 'center', gap: 16,
            transition: 'background .12s',
          }}>
            <Lab color={sel ? 'var(--crimson-500)' : 'var(--fg3)'}
              style={{ fontSize: 10, minWidth: 24, transition: 'color .15s' }}>
              {String(i + 1).padStart(2, '0')}
            </Lab>
            <span style={{
              fontFamily: 'var(--font-serif-display)', fontWeight: 500,
              fontSize: 'clamp(18px,2.2vw,22px)', lineHeight: 1.1,
              color: sel ? 'var(--crimson-500)' : 'var(--ink)',
              transition: 'color .15s',
            }}>{o.label}</span>
            {sel && <span style={{ marginLeft: 'auto', color: 'var(--crimson-500)', fontSize: 18 }}>✦</span>}
          </button>
        );
      })}
    </div>
  );
}

/* ── Fuel grid (step 2) ── */
function FuelGrid({ value, onPick }) {
  const COLORS = ['var(--amber-900)', 'var(--teal-700)', 'var(--magenta-500)', 'var(--azure-700)', 'var(--olive-700)', 'var(--crimson-500)'];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
      {CC_FUELS.map((o, i) => {
        const sel = value === o.id;
        const col = COLORS[i];
        return (
          <button key={o.id} onClick={() => onPick(o.id)} style={{
            cursor: 'pointer', textAlign: 'left', padding: '18px 16px',
            background: sel ? col : 'transparent',
            border: `1.5px solid ${sel ? col : 'var(--line)'}`,
            borderRadius: 4, transition: 'all .15s ease',
          }}>
            <span style={{
              fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 15,
              color: sel ? '#fff' : 'var(--ink)',
              display: 'block', lineHeight: 1.3,
            }}>{o.label}</span>
          </button>
        );
      })}
    </div>
  );
}

/* ── Result card ── */
function ResultCard({ arche, vibe, fuel, onRestart }) {
  const a  = ARCHETYPES[arche];
  const v  = CC_VIBES.find(x => x.id === vibe);
  const f  = CC_FUELS.find(x => x.id === fuel);
  const [email, setEmail] = useState('');
  const [saved, setSaved] = useState(false);

  return (
    <div>
      {/* Colored archetype header */}
      <div style={{
        background: a.accent,
        padding: '36px 30px 32px',
        position: 'relative', overflow: 'hidden',
        borderRadius: '4px 4px 0 0',
      }}>
        <div style={{
          position: 'absolute', top: 20, right: 24,
          fontFamily: 'var(--font-serif-display)', fontSize: 72,
          color: 'rgba(255,255,255,.12)', lineHeight: 1, userSelect: 'none',
        }}>{a.glyph}</div>

        <Lab color={a.fg === 'var(--ink)' ? 'rgba(26,26,46,.55)' : 'rgba(255,255,255,.65)'}
          style={{ marginBottom: 14 }}>
          Your creative archetype
        </Lab>
        <h2 style={{
          fontFamily: 'var(--font-serif-display)', fontWeight: 500,
          fontSize: 'clamp(36px,6vw,60px)', lineHeight: .92,
          letterSpacing: '-.02em', margin: '0 0 10px', color: a.fg,
        }}>{a.name}</h2>
        <div style={{
          fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 20,
          color: a.fg, opacity: .9,
        }}>{a.tagline}</div>

        {/* URL watermark */}
        <div style={{
          position: 'absolute', bottom: 14, right: 20,
          fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.1em',
          textTransform: 'uppercase', opacity: .35,
          color: a.fg === 'var(--ink)' ? 'var(--ink)' : '#fff',
        }}>quindal.art</div>
      </div>

      {/* Description + tags */}
      <div style={{
        background: '#fff', padding: '24px 30px 28px',
        borderLeft: '1px solid var(--line)', borderRight: '1px solid var(--line)',
      }}>
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 12.5, lineHeight: 1.8,
          color: 'var(--ink)', margin: '0 0 18px',
          textTransform: 'uppercase', letterSpacing: '.02em',
        }}>{ARCHETYPE_DESC[arche]}</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.1em',
            textTransform: 'uppercase', color: a.accent,
            border: `1.5px solid ${a.accent}`, borderRadius: 2, padding: '5px 10px',
          }}>{v?.label}</span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.1em',
            textTransform: 'uppercase', color: 'var(--fg2)',
            border: '1.5px solid var(--line)', borderRadius: 2, padding: '5px 10px',
          }}>{f?.label}</span>
        </div>
      </div>

      {/* Email capture */}
      <div style={{
        background: 'var(--cream)', padding: '22px 30px 26px',
        border: '1px solid var(--line)', borderRadius: '0 0 4px 4px',
        borderTop: 'none',
      }}>
        {!saved ? (
          <>
            <div style={{
              fontFamily: 'var(--font-serif-display)', fontWeight: 500, fontSize: 20,
              color: 'var(--ink)', marginBottom: 4,
            }}>Save your character</div>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase',
              letterSpacing: '.05em', color: 'var(--fg3)', margin: '0 0 14px', lineHeight: 1.6,
            }}>
              Drop your email and I'll send the card + the occasional note from the studio.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@email.com"
                style={{
                  flex: '1 1 200px', fontFamily: 'var(--font-sans)', fontSize: 15,
                  padding: '12px 14px', border: '1px solid var(--line)', borderRadius: 3,
                  outline: 'none', background: '#fff',
                }}
              />
              <Pill onClick={() => email.includes('@') && setSaved(true)}>Save →</Pill>
            </div>
          </>
        ) : (
          <div>
            <Note size={22} rot={-3} color="var(--teal-700)">saved! check your inbox ✦</Note>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase',
              letterSpacing: '.05em', color: 'var(--fg3)', margin: '10px 0 0', lineHeight: 1.6,
            }}>
              Screenshot the card and tag <strong style={{ color: 'var(--ink)' }}>@quindalwilliams</strong> — I reshare every one.
            </p>
          </div>
        )}
      </div>

      <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center' }}>
        <button onClick={onRestart} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em',
          textTransform: 'uppercase', color: 'var(--fg3)',
        }}>↺ Build another</button>
      </div>
    </div>
  );
}

/* ── Main component ── */
export function CharacterCreator({ onExit }) {
  const [step, setStep]   = useState(0);
  const [vibe, setVibe]   = useState(null);
  const [move, setMove]   = useState(null);
  const [fuel, setFuel]   = useState(null);

  const reset = () => { setStep(0); setVibe(null); setMove(null); setFuel(null); };
  const arche = move ? CC_MOVES.find(m => m.id === move).arche : null;
  const done  = step === 3;

  const canAdvance = (step === 0 && vibe) || (step === 1 && move) || (step === 2 && fuel);

  const QUESTIONS = ['Pick your vibe.', 'Your signature move?', 'What fuels you?'];

  return (
    <div style={{ background: 'var(--cream)', minHeight: 'calc(100vh - 54px)' }}>

      {/* Page header */}
      <div style={{
        borderBottom: '1px solid var(--line)',
        padding: '48px 28px 40px',
        background: '#3C0606',
      }}>
        <div style={{ maxWidth: 660, margin: '0 auto' }}>
          <button onClick={onExit} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em',
            textTransform: 'uppercase', color: 'var(--fg3)', padding: 0, marginBottom: 20,
            display: 'flex', alignItems: 'center', gap: 6,
          }}>← Back to site</button>

          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
            <div>
              <Lab color="var(--crimson-500)" style={{ marginBottom: 10 }}>quindal.art / build-your-character</Lab>
              <h1 style={{
                fontFamily: 'var(--font-serif-display)', fontWeight: 500,
                fontSize: 'clamp(34px,5.5vw,58px)', lineHeight: .96,
                letterSpacing: '-.02em', margin: 0, color: 'var(--ink)',
              }}>
                What kind of creative<br />
                <span style={{ fontStyle: 'italic', color: 'var(--crimson-500)' }}>are you?</span>
              </h1>
            </div>
            <Note size={22} rot={4} color="var(--fg2)" style={{ marginTop: 8 }}>3 questions · ~1 min</Note>
          </div>
        </div>
      </div>

      {/* Quiz body */}
      <div style={{ maxWidth: 660, margin: '0 auto', padding: '40px 28px 80px' }}>

        {!done && <Progress step={step} />}

        {!done && (
          <h2 style={{
            fontFamily: 'var(--font-serif-display)', fontWeight: 500,
            fontSize: 'clamp(24px,3.5vw,34px)', letterSpacing: '-.01em',
            margin: '0 0 22px', color: 'var(--ink)',
          }}>{QUESTIONS[step]}</h2>
        )}

        {step === 0 && <VibeGrid value={vibe} onPick={setVibe} />}
        {step === 1 && <MoveList value={move} onPick={setMove} />}
        {step === 2 && <FuelGrid value={fuel} onPick={setFuel} />}
        {done       && <ResultCard arche={arche} vibe={vibe} fuel={fuel} onRestart={reset} />}

        {!done && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 28 }}>
            <button onClick={() => step === 0 ? onExit() : setStep(step - 1)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em',
              textTransform: 'uppercase', color: 'var(--fg3)',
            }}>← Back</button>
            <Pill
              onClick={() => canAdvance && setStep(step + 1)}
              style={{ opacity: canAdvance ? 1 : .35, pointerEvents: canAdvance ? 'auto' : 'none' }}
            >
              {step === 2 ? 'Reveal my archetype →' : 'Next →'}
            </Pill>
          </div>
        )}
      </div>
    </div>
  );
}
