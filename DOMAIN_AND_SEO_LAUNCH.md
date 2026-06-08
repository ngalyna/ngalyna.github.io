# Domain and SEO Launch Checklist

## Domain Recommendation

Primary domain to buy and use:

```text
ngalyna.id.vn
```

Reason: this is the cleanest personal-brand domain. The brand is `Nga Lyna`; the site title, metadata, JSON-LD, booking profile, and backlinks can carry the exact search phrase `MC Nga Lyna`. The domain itself does not need to include `mc`.

Optional defensive domain, only if the cost is low:

```text
mcngalyna.id.vn
```

Use this only as a redirect to `https://ngalyna.id.vn/`. Do not make it the main site. `mcngalyna.id.vn` is less elegant, more locked to one job title, and easier to read as a keyword domain rather than a personal brand.

Canonical choice:

```text
https://ngalyna.id.vn/
```

All other versions should point or redirect to this one:

```text
https://www.ngalyna.id.vn/
https://ngalyna.github.io/
https://mcngalyna.id.vn/
https://www.mcngalyna.id.vn/
```

## Why `.id.vn`

`.id.vn` is suitable because VNNIC positions it for Vietnamese citizens using a domain for personal image, products, and personal brand online.

Sources to re-check when buying:

- VNNIC registration guidance: https://www.vnnic.vn/index.php/vi/ten-mien-vn/quy-trinh/dang-ky-ten-mien/huong-dan-dang-ky-ten-mien
- VNNIC DNS / domain structure info: https://vnnic.vn/dns?lang=en
- GitHub Pages custom domain docs: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Before Buying

1. Check availability for `ngalyna.id.vn`.
2. If available, buy it immediately.
3. If budget is comfortable, also buy `mcngalyna.id.vn` defensively.
4. Use the same owner identity consistently when registering the domain.
5. Enable auto-renew if the registrar supports it.
6. Keep registrar login, DNS login, and renewal email in a safe place.

## Prepared In This Repo

Do not run this before buying and configuring the domain:

```bash
npm run domain:switch
```

That command runs `scripts/switch-domain.cjs` and will:

- replace canonical, Open Graph, Twitter image, JSON-LD, sitemap, and robots URLs from `https://ngalyna.github.io` to `https://ngalyna.id.vn`;
- create the root `CNAME` file containing `ngalyna.id.vn`;
- refresh the `sitemap.xml` `<lastmod>` date.

Keep the current live repo on `ngalyna.github.io` until DNS and GitHub Pages are ready. The script is only for the go-live step.

## Five-Hour Preflight

Before buying the domain, have these tabs/accounts ready:

1. Domain registrar account for `.id.vn`.
2. GitHub repository: `ngalyna/ngalyna.github.io`.
3. GitHub Pages settings: `Settings -> Pages`.
4. Domain DNS management panel.
5. Google Search Console.
6. This file open locally.

Copy these values somewhere easy to paste:

```text
Primary domain: ngalyna.id.vn
Canonical URL: https://ngalyna.id.vn/
GitHub Pages target: ngalyna.github.io
Repository: ngalyna/ngalyna.github.io
```

## GitHub Pages Setup

Do this only after the domain is bought.

1. In GitHub account/domain settings, verify `ngalyna.id.vn` if GitHub offers domain verification. GitHub usually gives a TXT record such as:

```text
_github-pages-challenge-OWNER  TXT  provided-token
```

Add the exact TXT record GitHub gives you in the registrar DNS panel.

2. In GitHub repository settings, open `Settings -> Pages`.
3. Add the custom domain:

```text
ngalyna.id.vn
```

GitHub recommends adding the domain in Pages settings before configuring DNS, to reduce takeover risk.

4. Let GitHub create or accept a `CNAME` file in the repo root containing:

```text
ngalyna.id.vn
```

Do not worry if the repo does not have `CNAME` yet. The prepared `npm run domain:switch` command will create it during the go-live commit.

5. In the domain DNS panel, configure the apex domain `ngalyna.id.vn`.

Current GitHub Pages apex `A` records:

```text
@  A  185.199.108.153
@  A  185.199.109.153
@  A  185.199.110.153
@  A  185.199.111.153
```

Optional IPv6 `AAAA` records:

```text
@  AAAA  2606:50c0:8000::153
@  AAAA  2606:50c0:8001::153
@  AAAA  2606:50c0:8002::153
@  AAAA  2606:50c0:8003::153
```

6. Configure `www.ngalyna.id.vn`:

```text
www  CNAME  ngalyna.github.io
```

7. Wait for DNS propagation. GitHub notes DNS changes can take up to 24 hours.
8. In GitHub Pages settings, enable `Enforce HTTPS` when available.
9. Verify:

```bash
dig ngalyna.id.vn +noall +answer -t A
dig www.ngalyna.id.vn +noall +answer
dig ngalyna.id.vn +noall +answer -t AAAA
```

Expected A records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Expected `www` result should eventually point to `ngalyna.github.io`.

## Repo Updates After Domain Works

After `https://ngalyna.id.vn/` opens correctly, update the repo.

Fast path:

```bash
npm run domain:switch
git diff --check
python3 -m http.server 5177 --bind 127.0.0.1
```

Then preview `http://127.0.0.1:5177/index.html`, stop the server, commit, and push.

Manual details if needed:

1. Add or confirm `CNAME`:

```text
ngalyna.id.vn
```

2. Add canonical URL in `index.html`:

```html
<link rel="canonical" href="https://ngalyna.id.vn/" />
```

3. Add or update Open Graph metadata:

```html
<meta property="og:title" content="MC Nga Lyna - Bilingual MC in Hanoi" />
<meta property="og:description" content="MC Nga Lyna hosts Vietnamese and English programs for conferences, gala dinners, product launches, brand activations, festivals and esports stages." />
<meta property="og:url" content="https://ngalyna.id.vn/" />
<meta property="og:image" content="https://ngalyna.id.vn/assets/hero-audition-award-2026.webp" />
```

4. Update JSON-LD URLs from:

```text
https://ngalyna.github.io/
```

to:

```text
https://ngalyna.id.vn/
```

5. Create `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ngalyna.id.vn/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

6. Create `robots.txt`:

```text
User-agent: *
Allow: /

Sitemap: https://ngalyna.id.vn/sitemap.xml
```

7. Commit and push.

Suggested commit message:

```bash
git add index.html robots.txt sitemap.xml CNAME package.json scripts/switch-domain.cjs DOMAIN_AND_SEO_LAUNCH.md
git commit -m "Launch custom ngalyna.id.vn domain"
git push
```

## Search Console

1. Open Google Search Console.
2. Add a Domain property for:

```text
ngalyna.id.vn
```

3. Verify ownership using the DNS TXT record Google provides.
4. Submit:

```text
https://ngalyna.id.vn/sitemap.xml
```

5. Use URL Inspection for:

```text
https://ngalyna.id.vn/
```

6. Request indexing.
7. After indexing, test:

```text
site:ngalyna.id.vn
MC Nga Lyna
Nga Lyna MC
MC song ngữ Nga Lyna
```

## Optional Google Analytics

Google Analytics is optional for this portfolio, but useful if you want to know whether partners actually open the link and which channels bring serious booking interest.

Use Google Analytics only after creating a GA4 property and getting a Measurement ID like:

```text
G-XXXXXXXXXX
```

Then add the official GA4 snippet in the `<head>` of `index.html`.

What to track:

- Total visits to the portfolio.
- Traffic source: direct link, Facebook, Instagram, YouTube, TikTok, email, Zalo, proposal PDF.
- Device type: mobile or desktop.
- Clicks on showreel videos.
- Language mode usage: EN or VN.

Use UTM links when sending proposals, for example:

```text
https://ngalyna.id.vn/?utm_source=zalo&utm_medium=proposal&utm_campaign=client_pitch
https://ngalyna.id.vn/?utm_source=email&utm_medium=proposal&utm_campaign=agency_pitch
https://ngalyna.id.vn/?utm_source=facebook&utm_medium=bio&utm_campaign=profile_link
```

Do not use GA to collect private client data. The goal is only to understand whether the profile is being opened and which source sends better leads.

## Backlink and Social Signals

After the domain is live, update the website link in:

- YouTube channel and video descriptions.
- Facebook profile/page.
- Instagram bio.
- TikTok bio.
- LinkedIn, if used.
- Any event portfolio PDFs.
- Email signature or booking contact template.

Use natural anchor text, not spammy text. Good examples:

```text
MC Nga Lyna - bilingual event host
Nga Lyna official portfolio
Nga Lyna bilingual MC showreel
```

## If Buying Both Domains

Use:

```text
ngalyna.id.vn
```

as the only canonical website.

Configure:

```text
mcngalyna.id.vn
```

as a redirect to:

```text
https://ngalyna.id.vn/
```

Do not serve a duplicate copy of the website from both domains. Duplicate versions dilute search signals and make analytics/Search Console harder to read.

## What Not To Do

- Do not use `mcngalyna.id.vn` as the main domain unless `ngalyna.id.vn` is unavailable.
- Do not add long hidden SEO text.
- Do not duplicate the site across two domains without canonical/redirect.
- Do not change the visible hero name from `Nga Lyna` to `MC Nga Lyna`; keep the visual brand elegant.
- Do not remove `ngalyna.github.io` until the custom domain is stable and indexed.

## Final Rule

The best setup is:

```text
Brand domain: ngalyna.id.vn
Search phrase: MC Nga Lyna
Canonical URL: https://ngalyna.id.vn/
Backup/redirect domain: mcngalyna.id.vn
```
