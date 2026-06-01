# Quindal — Design System

> **The adulthood I was promised as a kid.** Creatives at play. The freedom children have to make things without self-censorship, translated into world-class adult creative work. Playful but not childish. Feminine but not soft. Editorial with warmth.

This is the design system for **Quindal Williams** — creative director, experiential designer, and brand-studio-in-waiting. It captures the brand foundations, voice, and reusable UI so any designer (or agent) can produce on-brand work fast.

---

## Who this is for

**Quindal Williams** is a creative director and experiential designer currently at **Circle** (an event + experiential agency in Las Vegas) and a **SCAD BFA student** (enrolled Jan 2026). She is building toward founding her own brand studio; for now the brand operates under her personal name.

**Phase 1 (now):** a personal portfolio + creative-director presence at **quindalwilliams.com** (`@quindalwilliams`). The single product in this system is that **website** — homepage, work/case studies, about, services, contact, and the hero interactive feature, the **Character Creator** (a Stardoll/Bratz-inspired "what's your creative archetype" tool built for sharing).

**Phase 2 (2029, at graduation):** the site rebrands into a full **studio** site (team, agency positioning). Not in scope yet — no team page, no agency voice.

### Cultural reference points
Disney Channel / Nickelodeon / Cartoon Network nostalgia · iCarly-studio energy · Bratz, My Scene, Stardoll · Y2K maximalism · Lisa Frank saturation · Frutiger Aero gloss · *Daria*'s Fashion Club · Lizzie McGuire. Maximalist taste, warm and rich, with unexpected whimsy — but anchored by editorial sophistication so it reads **studio, not kids' brand.**

---

## Sources (for whoever inherits this)

The reader is not assumed to have access to these — stored here for provenance:

- **Website Design Brief** — pasted text, "Website Design Brief — Quindal" (portfolio + creative director site). The primary written source.
- **Color palette art** — `assets/palette-reference.png`. A refined 6-hue × 5-step palette (the "grown-up" translation of the brief's cartoon-saturation list).
- **Logos** — provided as both outline SVGs (`Asset 20/21/22`) and finished **color webp** lockups (`Asset 16/17/18`). The webp crimson versions are canonical → `assets/logos/`.
- **Type** — trial builds of **Domaine Text**, **Domaine Display** (Klim Type Foundry) and **Canela** (Commercial Type), uploaded as `.otf` → `fonts/`.
- **Textures** — leopard + zebra print photographs → `assets/textures/`.

> ⚠️ **Missing source:** the brief describes a hand-sketched **cartoon alter-ego character** (Daria-Fashion-Club + Bratz + My Scene + Lizzie-McGuire style: deep brown skin, long wavy black hair, full lips, tea-green crop top + headband, blush-pink midi skirt with bow, kitten heels, retro mic). **This sketch was not attached.** Everywhere the mascot belongs, this system uses a labeled image placeholder. **Please upload the character art so it can be integrated.**

> ⚠️ **Font licensing:** Domaine, Canela are **trial fonts** (not for production). License the retail cuts before launch. Fredoka + Space Grotesk are Google Fonts (open license).

---

## CONTENT FUNDAMENTALS

How Quindal's brand talks.

**Voice in one line:** a confident, warm, funny creative director who treats you like a friend with great taste — never a vendor reading a deck.

- **Person & address.** First person singular ("I", "my work", "my world") — this is *her*, not a "we"/agency (that's Phase 2). Speaks **to** the reader as "you," especially in the Character Creator ("pick your vibe," "your signature move").
- **Tone.** Fun, confident, feminine, intentional. Playful without being juvenile. Editorial without being cold. It should feel like *meeting a person*, not reading a LinkedIn or a resume.
- **Casing.** Headlines in **sentence case** or expressive lowercase for warmth; the **logotype + eyebrow labels are ALL-CAPS, tracked out** (e.g. `QUINDAL WILLIAMS`, `WORK`, `BUILD YOUR CHARACTER`). Avoid Title Case Everywhere — it reads corporate.
- **Length.** Short, punchy, declarative. A statement, then a wink. Long enough to have personality, short enough to screenshot.
- **Emoji.** Used **sparingly and intentionally** as accents, never as a crutch or as bullet replacements. The maximalism comes from *color and type*, not emoji soup. Prefer none in formal copy; an occasional ✦ / ★ / sparkle is on-brand as a decorative glyph, not a sentence ender.
- **Punctuation & wit.** Confident periods. Occasional em-dash aside. Names her archetypes with capital-letter swagger: *The Art Director, The Hype Machine, The Lore Master, The Visionary, The Producer, The Wild Card, The Strategist, The World Builder.*

**Example phrasings (in-voice):**
- Hero: *"Creative direction for people who refuse to be boring."*
- About: *"I'm Quindal. I make brands that feel like the adulthood you were promised as a kid."*
- Character Creator CTA: *"Build your character. Find out what kind of creative you really are."*
- Work intro: *"Real projects, spec dreams, and everything I've talked my way into."*
- Contact: *"Got a world that needs building? Let's talk."*

**Avoid:** agency-speak ("synergies," "solutions," "we leverage"), résumé bullet voice, hype-without-substance, anything that sounds like a template.

---

## VISUAL FOUNDATIONS

The look and feel. Answer to "what makes something *look* Quindal."

### The core tension
Two voices held in deliberate contrast: **editorial elegance** (high-contrast serifs, generous whitespace, magazine layout) **×** **saturated play** (color blocks, bubbly display type, animal print, a cartoon mascot). Sophistication keeps the play from tipping into kids' brand; play keeps the elegance from going cold. Always have **both** on a page.

### Color
- **Background:** warm paper **cream `#F7F3EF`** is the default canvas — *not* pure white. It carries the editorial warmth.
- **Ink anchor:** `#1A1A2E` (near-black indigo) for text and the "studio not toy" anchor; pure `#000` for the wordmark and hard contrast.
- **Hero accent:** **crimson `#B2010C`** — the logo color. This is the brand's signature.
- **Palette structure:** six hue ramps, 5 steps each (900 deep → 100 tint): **olive/citron, crimson, azure, amber, teal, magenta.** Use one or two hues as a moment's lead, with cream + ink doing the heavy lifting. Maximalism = *confident saturated blocks*, not every color at once.
- **Imagery color vibe:** warm, rich, saturated. Animal-print textures (leopard = warm tan/black, zebra = black/white) are graphic accents, not full backgrounds — think a print panel behind a portrait, a footer band, a sticker.

### Type
- **Domaine Display** — big editorial **headlines** & section titles (serif, high contrast). Italic for romance.
- **Domaine Text** — editorial **body** & long-form ("magazine profile" About page).
- **Canela** — alternate glamour serif for oversized **pull quotes** / display moments.
- **Fredoka** — bubbly rounded **display** for "show-logo" playful moments, the Character Creator, big friendly numbers. The "kid at play" voice.
- **Space Grotesk** — geometric **UI sans**: nav, labels, buttons, captions, tracked-out eyebrows. Matches the light wide feel of the wordmark.
- Set the full type scale in `colors_and_type.css` (`.q-display`, `.q-h1`, `.q-quote`, `.q-body`, `.q-eyebrow`, …).

### Spacing & layout
- **8px base grid.** Generous editorial whitespace; let headlines breathe. Tokens `--space-1…10`.
- **Mobile-first** — majority of traffic is social. Strong impact in the first 3 seconds (it's a creative director's site, it has to earn attention fast).
- Layouts read like **editorial spreads**, not thumbnail grids — asymmetry, overlap, oversized type, off-grid stickers. Case studies especially: spread, not gallery.

### Shape, borders, corners
- **Corner radii:** soft and friendly. Cards `--r-lg` (28px), pills `999px` for tags/buttons, inputs `--r-md` (16px). Some elements (image frames, sticker labels) go fully rounded or pill.
- **Borders:** thin ink hairlines (`--line #E4DCD2` on cream); occasional **bold 2–3px ink outline** in the "flat 2D illustration / sticker" mode (bold outlines + saturated fills are a brief mandate).

### Shadows & elevation
- **Soft warm shadows** for floating cards (`--shadow-md/lg`, low-alpha ink).
- **Hard "sticker" offset shadow** (`--shadow-sticker` = `5px 5px 0 ink`, or accent-colored) for the playful, pasted-on, Y2K feel. Use it on buttons, badges, result cards.

### Motion
- Playful but tasteful: gentle **bounce/spring** on interactive elements (button press, mascot entrance, result-card reveal), soft **fades** for page/section transitions. Nothing heavy — "fast and interactive, not heavy."
- **Hover:** lift + slight scale-up (`scale(1.02)`) and/or color saturation increase; on sticker elements, the offset shadow grows.
- **Press/active:** shrink slightly (`scale(0.97)`) and the offset shadow collapses toward the element (pressed-in sticker).

### Transparency, blur, gloss
- Sparse use of **Frutiger-Aero gloss**: a subtle top highlight / glossy sheen on hero buttons or the result card is on-brand. Don't overdo glassmorphism.
- Animal-print and color blocks are **opaque**; protection for text over imagery is done with **solid color capsules / blocks**, not muddy gradient scrims.

### Anti-patterns (do NOT do)
Generic agency template · minimalist white space-only · bluish-purple SaaS gradients · emoji-card grids · cards with only a colored left border · stocky corporate photography · Title Case everything · cold/neutral palettes.

---

## ICONOGRAPHY

- **No proprietary icon font exists** in the provided sources. For UI glyphs (nav, arrows, social, form affordances) this system standardizes on **[Phosphor Icons](https://phosphoricons.com/)** loaded from CDN — chosen for its **rounded, friendly geometric** stroke that matches Fredoka + Space Grotesk and the soft corner radii. *(This is a substitution — flagged; swap if Quindal adopts a house set.)* Use the **regular/bold** weights, never the thin weight (too clinical for this brand).
- **Decorative glyphs / stickers.** The maximalist sticker energy is built from **filled vector shapes** — stars (★ / ✦), sparkles, hearts, blobs, flowers — in palette colors with bold ink outlines. These are *brand decoration*, not functional icons. Prefer real SVG sticker assets when available; placeholders until the mascot/sticker pack arrives.
- **The QW monogram** (`assets/logos/monogram-red.webp`) is the brand's signature mark — an ornate calligraphic **Q enclosing a W** with flourishes, in crimson. Use as favicon, avatar, loading mark, and decorative seal. Never recolor it outside crimson / ink / cream.
- **Emoji:** not used as iconography. The brand's "icons" are stickers and the monogram.
- **Unicode chars** (★ ✦ ✶ ❤ →) are acceptable as lightweight decorative accents in copy where a real SVG is overkill.
- The **cartoon mascot** is the brand's true "icon" — she appears sitewide as an illustrated presence (avatar, hero, About, result cards). **Awaiting art** (see Sources).

---

## Index — what's in this system

**Foundations (root)**
- `README.md` — this file.
- `colors_and_type.css` — all CSS variables (color ramps, semantic roles, radii, shadows, spacing) + `@font-face` for Domaine Text/Display + Canela + the semantic type classes (`.q-*`). Import this + the Google Fonts link in every file.
- `SKILL.md` — Agent-Skills front-matter so this folder can be used as a downloadable Claude skill.

**Assets** (`assets/`)
- `logos/` — `monogram-red.webp` (mark), `logo-horizontal.webp`, `logo-horizontal-lg.webp`; outline SVGs `q-monogram.svg`, `logo-horizontal.svg`, `logo-stacked.svg`.
- `textures/` — `leopard.png`, `zebra.png`.
- `palette-reference.png` — source palette art.

**Fonts** (`fonts/`) — Domaine Text (10 cuts), Domaine Display (8 cuts), Canela (6 cuts). *Trial builds.*

**Design System cards** (`preview/`) — small HTML specimens registered to the Design System tab (color ramps, type scale, shadows/radii, components, logos).

**UI Kit** (`ui_kits/website/`) — high-fidelity recreation of quindalwilliams.com: homepage, work/case studies, about, the Character Creator, contact. `index.html` is an interactive click-through; components are factored `.jsx` files.

> No slide template was provided, so no `slides/` are included. (Ask if you want a deck system built from these foundations.)
