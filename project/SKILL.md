---
name: quindal-design
description: Use this skill to generate well-branded interfaces and assets for Quindal (Quindal Williams — creative director, experiential & brand design), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map
- `README.md` — brand context, content fundamentals, visual foundations, iconography, index.
- `colors_and_type.css` — CSS variables (6 hue ramps × 5 steps, semantic roles, radii, shadows, spacing) + `@font-face` (Domaine Text/Display, Canela) + semantic type classes (`.q-display`, `.q-h1`, `.q-quote`, `.q-body`, `.q-eyebrow`…). Import this + the Google Fonts link (Fredoka, Space Grotesk, Space Mono) in every file.
- `fonts/` — self-hosted Domaine Text, Domaine Display, Canela (⚠ trial builds — license before production).
- `assets/logos/` — crimson QW monogram (`monogram-red.webp`) + horizontal lockups. `assets/textures/` — leopard + zebra. 
- `preview/` — design-system specimen cards.
- `ui_kits/website/` — the interactive site recreation + reusable React components.

## Non-negotiables
- Background is warm **cream `#F7F3EF`**, never pure white. Text anchor **ink `#1A1A2E`**. Hero accent **crimson `#B2010C`** (the logo color).
- Hold the tension: **editorial serif elegance × saturated playful color**. Both, always.
- Type: Domaine Display (headlines) · Domaine Text (body) · Canela (glamour quotes) · Fredoka (bubbly play) · Space Grotesk (UI).
- Sticker energy = bold ink outlines + saturated fills + hard offset shadows. Pills for tags/buttons. Soft friendly radii.
- Voice: first-person, confident, warm, funny — never agency-speak. ALL-CAPS tracked labels; sentence-case headlines.
- ⚠ The cartoon mascot art is **not yet provided** — use a labeled placeholder until it arrives.
