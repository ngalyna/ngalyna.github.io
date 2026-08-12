# Maintenance Guide

This site is a private portfolio website and digital booking profile for MC Nga Lyna. It is not a reusable template.

Use this guide when adding or replacing images, logos, portfolio entries, showreel videos, metadata, or copy.

## Project Structure

- `index.html` is the live production page.
- `mc-song-ngu-ha-noi/index.html` is the Vietnamese SEO/booking profile page for searches like `MC song ngữ Hà Nội`.
- `assets/` contains public image and logo assets used by the live pages.
- `assets/logo-wall/` contains the logo wall images.
- `sitemap.xml` and `robots.txt` are used for search indexing.
- `Portfolio.html`, `Portfolio-print.html`, `Portfolio-standalone.html`, and `Blueprint.html` are legacy/support files. They are intentionally `noindex,nofollow`.
- `.qa/` is for local Lighthouse reports and is ignored by Git.

## Before Editing

1. Work from the latest `main` branch.
2. Keep a clean backup of original images outside the repo.
3. Do not overwrite existing images unless the replacement is clearly better.
4. Use descriptive lowercase filenames with hyphens.

Example:

```text
assets/event-brand-name-stage.webp
assets/event-brand-name-host.webp
assets/logo-wall/brand-name.webp
```

## Image Standards

Use `.webp` for public web assets unless there is a strong reason not to.

### The sizing rule

Every image on the page is displayed through `object-fit: cover` inside a
container with a fixed `aspect-ratio`. So the file only needs to be large
enough that the browser never has to enlarge it — anything beyond that is
bytes the visitor pays for and cannot see.

The rule applied across `assets/` on 2026-08-04:

> **file long edge = 2.5 x the largest size the image is ever displayed at**,
> with a floor of 1600 px, a ceiling of 2560 px, quality 92, and never
> upscaling past the original.

2.5x is deliberately generous. A retina screen resolves 2x, so this leaves
headroom for a future layout change without another pass. Phones need less
than desktop, because the same card is physically smaller there.

Practical targets, if you are adding one image and not re-running the sweep:

- Hero image: 2400-2560 px on the long edge.
- Featured / full-width portfolio image: 1800-2200 px on the long edge.
- Normal portfolio image inside a collage: 1600-1800 px on the long edge.
- Landscape showreel thumbnail: 1600 px wide, 16:9.
- Vertical clip thumbnail: 720 x 1280.
- Logo wall image: transparent or cleaned background, usually 720 x 320 px.

Quality 92 is the floor for anything with a face in it. Quality 82 is
visually identical in side-by-side tests, but 92 costs little and leaves room
for the image to be re-cropped later without compounding compression.

Do not aggressively compress important stage and portrait images just to chase
a Lighthouse score. The 2026-08-04 sweep cut the page from 44.5 MB to 32.3 MB
without any visible change; that is the kind of saving worth taking. Going
further would start costing real detail.

### Checking whether an image is oversized

Open the page, then in the browser console:

```js
[...document.querySelectorAll('img[src*="assets/"]')].map(i => ({
  src: i.getAttribute('src'),
  shown: Math.round(i.getBoundingClientRect().width),
  file: i.naturalWidth
}))
```

If `file` is more than about 3x `shown`, the image is bigger than it needs to
be. Measure on a wide desktop window — that is where images render largest.

## Adding Portfolio Images

1. Add image files to `assets/`.
2. In `index.html`, find the relevant portfolio group under:

```html
<section class="chap" id="works">
```

3. Add or replace the image inside the correct `.event-card`.
4. Always include useful `alt` text.
5. Use `loading="lazy"` and `decoding="async"` for below-fold images.
6. Check mobile crops after editing.

Useful crop classes:

- `crop-face`: keeps the host face higher in the frame.
- `crop-headroom`: leaves more headroom.
- `crop-stage`: favors stage composition.
- `crop-low`: favors lower stage/body framing.
- `crop-left` / `crop-right`: shifts the focal point.

If a play button covers the host face, change the crop or thumbnail instead of moving the button off-center.

## Adding A Logo

1. Put the logo in `assets/logo-wall/`.
2. Prefer `.webp`.
3. Remove obvious white boxes or uneven backgrounds before exporting.
4. Add it to the logo wall in `index.html`.
5. Keep `alt` text simple: brand or organization name.
6. Verify the logo on desktop and mobile.

Do not use a low-resolution logo if a cleaner source is available.

## Adding A Showreel Video

1. Add the YouTube ID to the relevant `.reel-lite` element:

```html
<div class="reel-lite" data-yt="YOUTUBE_ID">
```

2. Use a strong thumbnail where the play button does not cover the face.
3. Update the reel title and language tag.
4. Update the JSON-LD `VideoObject` list in the `<head>` of `index.html`.
   - Include the real YouTube `uploadDate`; Google Search Console marks videos invalid when this is missing.
   - Keep `url` as the public YouTube watch link.
   - Keep `embedUrl` on `https://www.youtube-nocookie.com/embed/YOUTUBE_ID`.
5. If the total number of reels changes, update the `reels-meta-tag` count in `index.html` and its `viCopy` key, then update related copy and QA expectations.
6. After deploy, run Search Console URL inspection and validate any VideoObject fixes.

### Vertical clips (YouTube Shorts)

The showreel is one curated vertical library under `.reels-grid-vertical`: 4 columns on desktop, 3 on tablet and 2 on mobile. Keep English-led and bilingual proof first, then order the remaining clips by relevance and event scale.

```html
<div class="reel-lite portrait" data-yt="YOUTUBE_ID" data-orientation="portrait">
```

- `data-orientation="portrait"` is what switches the video modal to a 9:16 frame; without it the clip opens letterboxed in the 16:9 dialog.
- Thumbnails are 720 x 1280 `.webp`. YouTube's own vertical still is at `https://i.ytimg.com/vi/YOUTUBE_ID/oar2.jpg` when no better frame is available.
- If YouTube does not expose `oar2.jpg`, create a considered 720 x 1280 crop from a strong original event photograph. Keep the MC's face and event identity clear of the centered play button.

## Updating Copy

English and Vietnamese can be natural independently. They do not need to be literal translations.

When editing visible copy:

- Keep the English version polished but not inflated.
- Keep the Vietnamese version natural and human.
- Avoid generic phrases like "brand moment", "public stage", or vague AI-sounding claims unless they are truly accurate.
- Keep event captions focused on Nga Lyna's role as an MC.

When editing Vietnamese translations, update the `viCopy` map near the bottom of `index.html`.

## SEO And Metadata

After changing key content, check:

- `<title>`
- `<meta name="description">`
- Open Graph and Twitter metadata.
- JSON-LD `Person`, `ProfessionalService`, and `VideoObject`.
- The Vietnamese SEO page at `mc-song-ngu-ha-noi/index.html` if the change affects Vietnamese search intent.
- `sitemap.xml` — bump `lastmod` on every content change, not only when the domain changes. Google uses it to decide when to re-crawl.
- `robots.txt` if new legacy/support files are added.

When the custom domain is active, update canonical URLs from:

```text
https://ngalyna.github.io/
```

to the chosen canonical domain.

## QA Checklist

Run a local preview:

```bash
python3 -m http.server 5177 --bind 127.0.0.1
```

Then check:

- Mobile hero in EN and VN.
- Logo wall alignment and logo background cleanup.
- Portfolio order and `Show more` / `Show less` smoothness.
- Showreel thumbnails and centered play button.
- Video modal open/close.
- Footer navigation and contrast.
- No horizontal overflow on mobile.
- JSON-LD parses as valid JSON.
- `robots.txt` and `sitemap.xml` still load.

Run Lighthouse before major releases:

```bash
npx --yes lighthouse http://127.0.0.1:5177/ --chrome-flags="--headless --no-sandbox" --output=json --output-path=.qa/lighthouse-mobile.json
npx --yes lighthouse http://127.0.0.1:5177/ --preset=desktop --chrome-flags="--headless --no-sandbox" --output=json --output-path=.qa/lighthouse-desktop.json
```

Target scores:

- SEO: 90-100.
- Best Practices: 90-100.
- Accessibility: 90-100 on mobile. Desktop reports 96 because of a hero
  contrast finding that is a false positive — see `README.md`. Do not chase it.
- Desktop Performance: 90+.
- Mobile Performance: 60-85 is acceptable for a high-image portfolio if image
  quality is intentionally preserved. It will stay near the bottom of that band
  until the hero image gets a `srcset`; the rest of the page is lazy-loaded and
  does not affect the score.

Last measured 2026-08-04: mobile 63, desktop 97.

## Git Notes

Before committing:

```bash
git diff --check
git status --short
```

Do not commit `.qa/`, raw photo folders, or local system files.
