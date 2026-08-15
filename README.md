# Morphic — "type a scene, watch it become anime"

A dark-cinema landing page for a fictional AI **anime generation** studio, built with
[Astro](https://astro.build). Styled to the **Morphic** design system: a pure-black
canvas, a single electric-blue (`#0075ff`) accent, Inter type, and the signature
two-tone headline device.

All imagery is self-contained — no stock photos, no network calls. An `AnimeScene`
component generates Makoto-Shinkai-style key visuals as pure SVG from a numeric seed,
and an `AnimeAvatar` component generates cel-shaded character busts the same way.

## Features

- **Anime key-visual generator** (`AnimeScene.astro`) — gradient skies, layered
  silhouettes (cityscapes, Fuji, forests, hills), sun/moon, stars, birds and sakura,
  all deterministic and offline
- **Character avatar generator** (`AnimeAvatar.astro`) for social proof
- **Falling sakura petals** in the hero (respects `prefers-reduced-motion`)
- Auto-scrolling showcase marquees, arrow-controlled carousels, an interactive
  Canvas/Copilot/Compose product mockup, pricing, testimonials
- Scroll-reveal animations, hover motion, fully responsive

## Develop

```bash
npm install
npm run dev      # http://localhost:4333
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview
```

## Structure

```
src/
  components/    # Nav, Hero, Showcase, Workflows, Canvas, Possibilities,
                 # Voices, Pricing, CtaBand, Footer, AnimeScene, AnimeAvatar, SakuraPetals
  layouts/       # Layout.astro (fonts, meta, shared scripts)
  pages/         # index.astro
  styles/        # global.css (design tokens)
```

Content and copy are fictional, generated for demonstration.
