# MC Nga Lyna Profile

Private portfolio and booking profile website for Nga Lyna, a Vietnamese-English bilingual MC based in Hanoi.

This is not a reusable template or commercial starter project. All source code,
copy, layout decisions, images, video thumbnails, brand presentation, and
portfolio materials are reserved for Nga Lyna. See [LICENSE](LICENSE).

## Current State

- Production entry file: `index.html`.
- Vietnamese SEO profile page: `mc-song-ngu-ha-noi/index.html`.
- Deployed through GitHub Pages from the `main` branch root.
- Canonical production domain: `https://mcngalyna.id.vn/`.
- The site is intentionally static: HTML, CSS, vanilla JavaScript, and local assets.
- Language modes are handled in `index.html` through the `viCopy` translation map and `body[data-lang]` CSS states.
- Structured profile metadata is embedded in the `<head>` as JSON-LD for `Person`, `ProfessionalService`, `WebSite`, and 19 `VideoObject` showreels (14 landscape reels plus 5 vertical short clips). This is invisible to users but helps crawlers and AI systems understand the booking profile.

## Health Snapshot

Measured 2026-08-04 with Lighthouse against the local preview server.

| | Mobile | Desktop |
| --- | --- | --- |
| Performance | 63 | 97 |
| Accessibility | 100 | 96 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |
| Largest Contentful Paint | 7.7 s | 1.0 s |
| Cumulative Layout Shift | 0 | 0.002 |

Reading the numbers:

- Desktop is in good shape. Mobile is held back by one thing only: the hero
  image. It is a 2560 px full-bleed photo, about 1.4 MB, and it is the LCP
  element, so a phone downloads all of it before the page counts as painted.
  Everything else on the page is lazy-loaded and does not affect LCP.
- The desktop Accessibility 96 is a **false positive**. Its only finding is
  colour contrast in the hero, where light text sits on a photo behind a dark
  gradient. The audit tool cannot read through images, so it compares the text
  against the page background instead. There is no real contrast problem.
- Layout shift is effectively zero even though no `<img>` carries `width`/
  `height`, because every image sits in a container with a fixed
  `aspect-ratio`. Do not "fix" the missing attributes; nothing is broken.

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

For domain and Search Console notes, use
[DOMAIN_GO_LIVE_CARD.md](DOMAIN_GO_LIVE_CARD.md) first, then
[DOMAIN_AND_SEO_LAUNCH.md](DOMAIN_AND_SEO_LAUNCH.md) for the detailed rationale.

## Content Notes

- Keep the English and Vietnamese copy natural independently; they do not need to be literal translations.
- Prefer concrete event labels over generic wording. Avoid phrases that feel AI-written, especially in Vietnamese.
- Logo and event assets used on the live page should generally be `.webp`.
- `Portfolio.html`, `Portfolio-print.html`, `Portfolio-standalone.html`, `Blueprint.html`, and `tweaks-panel.jsx` are supporting/legacy files. The public site currently runs from `index.html`, with `mc-song-ngu-ha-noi/` as a Vietnamese SEO support page.
- This project should be described as a `portfolio website`, `digital booking profile`, or `bilingual MC profile website`, not a generic landing page.

## Recent Positioning

- Hero theme: bilingual MC, Hanoi-based, two languages/one stage.
- Portfolio is organized by event format and scale.
- Section 08 is currently positioned as `Branding & nhãn hàng`.
- Booking details are intentionally handled via management rather than publishing direct terms on-page.
- Pending for section 03: consider replacing the generic editorial line with a real-but-paraphrased Fujifilm Partner Kick-off client feedback note. Do not use quotation marks unless the exact Vietnamese wording is confirmed.

## Known Issues And Open Items

Ordered by impact. None of these break the live site; they are the honest
backlog as of 2026-08-04.

1. **Hero image is the mobile bottleneck.** `assets/hero-audition-award-2026.webp`
   is 2560 x 1713 and about 1.4 MB, served identically to a 390 px phone. A
   `srcset` on the hero with a ~1200 px variant (~380 KB) is the single change
   that would move mobile Performance meaningfully. It needs a markup edit to
   the hero `<picture>`, so it has not been done.
2. **`assets/` carries files the site does not use.** Around 136 of the ~310
   tracked files are unreferenced (roughly 37 MB), including 56 leftover
   `.jpg` originals. Before deleting anything, check `Portfolio.html` and the
   other legacy pages — they reference their own assets.
3. **All CSS and JS are inline in `index.html`** (about 69 KB and 47 KB of a
   199 KB file). Splitting them into cached files would help repeat visitors.
   Deliberately not done: the site works well and the change is invasive.
4. **Reel tiles announce poorly to screen readers.** Each `.reel-lite` is a
   `role="button"` `<div>` that cannot be focused, while the focusable
   `.reel-play` button inside it is only labelled "Play". Keyboard playback
   does work (Enter on the inner button), but 19 buttons share one name. Moving
   the descriptive `aria-label` onto the button would fix it.
5. **`assets/event-lavie-tram-yen-stage.webp` is slightly under retina size.**
   The source photo is only 1366 px wide and the slot wants about 1500 px at 2x.
   Nothing to do unless a higher-resolution original turns up.
6. **The repository is heavy.** `.git` is around 165 MB, partly from
   `Portfolio-standalone.html` (9 MB) and image history. Clones are slow.
