# MC Nga Lyna Profile

Private portfolio and booking profile website for Nga Lyna, a Vietnamese-English bilingual MC based in Hanoi.

This is not a reusable template or commercial starter project. All source code,
copy, layout decisions, images, video thumbnails, brand presentation, and
portfolio materials are reserved for Nga Lyna. See [LICENSE](LICENSE).

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

For detailed instructions on adding images, logos, showreel videos, metadata,
and QA steps, read [MAINTENANCE_GUIDE.md](MAINTENANCE_GUIDE.md).

## Content Notes

- Keep the English and Vietnamese copy natural independently; they do not need to be literal translations.
- Prefer concrete event labels over generic wording. Avoid phrases that feel AI-written, especially in Vietnamese.
- Logo and event assets used on the live page should generally be `.webp`.
- `Portfolio.html`, `Portfolio-print.html`, `Portfolio-standalone.html`, `Blueprint.html`, and `tweaks-panel.jsx` are supporting/legacy files. The public site currently runs from `index.html`.
- This project should be described as a `portfolio website`, `digital booking profile`, or `bilingual MC profile website`, not a generic landing page.

## Recent Positioning

- Hero theme: bilingual MC, Hanoi-based, two languages/one stage.
- Portfolio is organized by event format and scale.
- Section 08 is currently positioned as `Branding & nhãn hàng`.
- Booking details are intentionally handled via management rather than publishing direct terms on-page.
