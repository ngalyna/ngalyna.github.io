# MC Nga Lyna Profile

Static profile website for Nga Lyna, a Vietnamese-English bilingual MC based in Hanoi.

## Current State

- Production entry file: `index.html`.
- Deployed through GitHub Pages from the `main` branch root.
- The site is intentionally static: HTML, CSS, vanilla JavaScript, and local assets.
- Language modes are handled in `index.html` through the `viCopy` translation map and `body[data-lang]` CSS states.
- Structured profile metadata is embedded in the `<head>` as JSON-LD for `Person`, `ProfessionalService`, `WebSite`, and 14 `VideoObject` showreels. This is invisible to users but helps crawlers and AI systems understand the booking profile.

## Local Preview

```bash
python3 -m http.server 5177 --bind 127.0.0.1
```

Open `http://127.0.0.1:5177/index.html`.

## Verification Checklist

Before pushing visual or content changes:

```bash
git diff --check
```

Then preview the page on desktop and mobile widths. Key areas to re-check:

- Mobile hero in both English and Vietnamese.
- Logo wall alignment and white logo backgrounds.
- Portfolio group ordering and mobile `Show more` / `Show less` animation.
- Showreel thumbnails and play-button placement.
- Footer navigation lines and footer copy in both languages.
- JSON-LD still parses as valid JSON after metadata edits.

## Content Notes

- Keep the English and Vietnamese copy natural independently; they do not need to be literal translations.
- Prefer concrete event labels over generic wording. Avoid phrases that feel AI-written, especially in Vietnamese.
- Logo and event assets used on the live page should generally be `.webp`.
- `Portfolio.html`, `Portfolio-print.html`, `Portfolio-standalone.html`, `Blueprint.html`, and `tweaks-panel.jsx` are supporting/legacy files. The public site currently runs from `index.html`.

## Recent Positioning

- Hero theme: bilingual MC, Hanoi-based, two languages/one stage.
- Portfolio is organized by event format and scale.
- Section 08 is currently positioned as `Branding & nhãn hàng`.
- Booking details are intentionally handled via management rather than publishing direct terms on-page.
