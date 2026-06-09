# Domain and SEO Launch Checklist

## Domain Choice

Purchased primary domain:

```text
mcngalyna.id.vn
```

This was not the original first-choice brand domain, but it is still workable and clear: it contains the exact search phrase `MC Nga Lyna`, which is useful for people searching by role. The important part now is consistency: all canonical, sitemap, JSON-LD, social links, and Search Console setup should point to `https://mcngalyna.id.vn/`.

Canonical choice:

```text
https://mcngalyna.id.vn/
```

All other versions should point or redirect to this one:

```text
https://www.mcngalyna.id.vn/
https://ngalyna.github.io/
```

## Why `.id.vn`

`.id.vn` is suitable because VNNIC positions it for Vietnamese citizens using a domain for personal image, products, and personal brand online.

Sources to re-check when buying:

- VNNIC registration guidance: https://www.vnnic.vn/index.php/vi/ten-mien-vn/quy-trinh/dang-ky-ten-mien/huong-dan-dang-ky-ten-mien
- VNNIC DNS / domain structure info: https://vnnic.vn/dns?lang=en
- GitHub Pages custom domain docs: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Purchase Status

`mcngalyna.id.vn` has been purchased through iNET / OnePortal.

Launch status on `2026-06-08`:

- DNS records point to GitHub Pages.
- GitHub Pages DNS check is successful.
- `Enforce HTTPS` is enabled.
- `https://mcngalyna.id.vn/` returns `200 OK`.
- `www.mcngalyna.id.vn` redirects to `mcngalyna.id.vn`.
- Live page metadata, `robots.txt`, and `sitemap.xml` use `https://mcngalyna.id.vn/`.

Keep these safe:

1. Registrar login.
2. DNS management login.
3. Renewal email.
4. Domain expiration date: `08/06/2027` based on the OnePortal screenshot.
5. Auto-renew setting, if available.

## Prepared In This Repo

Do not run this before buying and configuring the domain:

```bash
npm run domain:switch
```

That command runs `scripts/switch-domain.cjs` and will:

- replace canonical, Open Graph, Twitter image, JSON-LD, sitemap, and robots URLs from `https://ngalyna.github.io` to `https://mcngalyna.id.vn`;
- create the root `CNAME` file containing `mcngalyna.id.vn`;
- refresh the `sitemap.xml` `<lastmod>` date.

Keep the current live repo on `ngalyna.github.io` until DNS and GitHub Pages are ready. The script is only for the go-live step.

## Five-Hour Preflight

Before editing DNS, have these tabs/accounts ready:

1. Domain registrar account for `.id.vn`.
2. GitHub repository: `ngalyna/ngalyna.github.io`.
3. GitHub Pages settings: `Settings -> Pages`.
4. Domain DNS management panel.
5. Google Search Console.
6. This file open locally.

Copy these values somewhere easy to paste:

```text
Primary domain: mcngalyna.id.vn
Canonical URL: https://mcngalyna.id.vn/
GitHub Pages target: ngalyna.github.io
Repository: ngalyna/ngalyna.github.io
```

## GitHub Pages Setup

This setup is complete. Keep these details for future audits or if the domain ever needs to be reconnected.

1. In GitHub account/domain settings, verify `mcngalyna.id.vn` if GitHub offers domain verification. GitHub usually gives a TXT record such as:

```text
_github-pages-challenge-OWNER  TXT  provided-token
```

Add the exact TXT record GitHub gives you in the registrar DNS panel.

2. In GitHub repository settings, open `Settings -> Pages`.
3. Custom domain:

```text
mcngalyna.id.vn
```

GitHub recommends adding the domain in Pages settings before configuring DNS, to reduce takeover risk.

4. The repo root contains `CNAME`:

```text
mcngalyna.id.vn
```

The repo now has a `CNAME` file containing `mcngalyna.id.vn`.

5. In the domain DNS panel, configure the apex domain `mcngalyna.id.vn`.

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

6. Configure `www.mcngalyna.id.vn`:

```text
www  CNAME  ngalyna.github.io
```

7. Wait for DNS propagation. GitHub notes DNS changes can take up to 24 hours.
8. In GitHub Pages settings, enable `Enforce HTTPS` when available.
9. Verify:

```bash
dig mcngalyna.id.vn +noall +answer -t A
dig www.mcngalyna.id.vn +noall +answer
dig mcngalyna.id.vn +noall +answer -t AAAA
```

Expected A records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Expected `www` result should eventually point to `ngalyna.github.io`.

## Repo Updates

Repo metadata has been switched to `https://mcngalyna.id.vn/`.

Already prepared:

- `CNAME` contains `mcngalyna.id.vn`.
- `index.html` canonical, Open Graph, Twitter image, and JSON-LD use `https://mcngalyna.id.vn/`.
- `robots.txt` points to `https://mcngalyna.id.vn/sitemap.xml`.
- `sitemap.xml` contains `https://mcngalyna.id.vn/`.

If the metadata ever needs to be regenerated, run:

```bash
npm run domain:switch
git diff --check
```

For local preview:

```bash
python3 -m http.server 5177 --bind 127.0.0.1
```

## Search Console

1. Open Google Search Console.
2. Add a Domain property for:

```text
mcngalyna.id.vn
```

3. Verify ownership using the DNS TXT record Google provides.
4. Submit:

```text
https://mcngalyna.id.vn/sitemap.xml
```

5. Use URL Inspection for:

```text
https://mcngalyna.id.vn/
```

6. Request indexing.
7. Use URL Inspection for the Vietnamese SEO support page:

```text
https://mcngalyna.id.vn/mc-song-ngu-ha-noi/
```

8. Request indexing for that URL too.
9. After indexing, test:

```text
site:mcngalyna.id.vn
MC Nga Lyna
Nga Lyna MC
MC song ngữ Nga Lyna
MC song ngữ Hà Nội
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
https://mcngalyna.id.vn/?utm_source=zalo&utm_medium=proposal&utm_campaign=client_pitch
https://mcngalyna.id.vn/?utm_source=email&utm_medium=proposal&utm_campaign=agency_pitch
https://mcngalyna.id.vn/?utm_source=facebook&utm_medium=bio&utm_campaign=profile_link
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

## What Not To Do

- Do not add long hidden SEO text.
- Do not duplicate the site across two domains without canonical/redirect.
- Do not change the visible hero name from `Nga Lyna` to `MC Nga Lyna`; keep the visual brand elegant.
- Do not remove `ngalyna.github.io` until the custom domain is stable and indexed.

## Final Rule

The best setup is:

```text
Brand domain: mcngalyna.id.vn
Search phrase: MC Nga Lyna
Canonical URL: https://mcngalyna.id.vn/
```
