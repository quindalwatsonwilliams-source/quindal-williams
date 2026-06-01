# Website UI Kit — quindalwilliams.com (Phase 1)

A high-fidelity, interactive recreation of Quindal Williams' personal portfolio + creative-director site. This is the single product in the system. It's a click-through prototype — cosmetic, not production code — built to be pieced apart and reused.

## Run it
Open `index.html`. It's a React + Babel single-page app. Components are exported to `window` so they share scope across `<script type="text/babel">` tags. All foundations come from the root `../../colors_and_type.css` + Google Fonts (Fredoka, Space Grotesk, Space Mono).

## What's interactive
- **Nav** scrolls to sections (Work / About / Services / Contact) and the **Build your character** CTA routes to the feature.
- **Character Creator** — the hero feature. A 3-step flow (vibe → signature move → fuel) that reveals one of **8 creative archetypes** on a shareable result card, with email capture. (`quindalwilliams.com/build-your-character`)
- **Contact** form has a personality-forward send state.

## Components
| File | What it is |
|---|---|
| `ui.jsx` | Primitives: `Eyebrow`, `Tag`, `Sticker`, `Btn` (primary/sticker/ghost/dark), `MascotSlot` |
| `Nav.jsx` | Sticky blurred top nav + CTA |
| `Hero.jsx` | Homepage statement intro + mascot + leopard panel |
| `Work.jsx` | Editorial case-study **spreads** (Teton Ridge, SEICon III, Sanmina, spec) — not a thumbnail grid |
| `About.jsx` | Magazine profile + Stardoll-style "player card" on ink |
| `Services.jsx` | Clean numbered services list (no pricing) |
| `CharacterCreator.jsx` | The interactive archetype builder + result card |
| `Contact.jsx` | Personality-forward contact + `Footer` |
| `app.jsx` | Routing + assembly |

## Known gaps / disclaimers
- **Mascot art is missing.** Every place the cartoon alter-ego belongs uses `MascotSlot` — a labeled placeholder. Swap these for the real illustration when it arrives (Hero, About player card, archetype result cards are the priority spots).
- Work imagery uses brand **textures** (leopard/zebra) and color blocks as stand-ins for real project photography — replace with shot work.
- Copy is written **in-voice** but is illustrative; Quindal should edit to taste.
- This is Phase 1 only — no studio/team/agency surfaces (those come at 2029 graduation).
