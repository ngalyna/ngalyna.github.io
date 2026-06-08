# ngalyna.id.vn Go-Live Card

Use this file on the day the domain is purchased. The current live site should stay on `ngalyna.github.io` until the custom domain is configured.

## 1. Buy

Buy:

```text
ngalyna.id.vn
```

Optional defensive domain:

```text
mcngalyna.id.vn
```

Do not use `mcngalyna.id.vn` as the main site. Redirect it later if purchased.

## 2. GitHub First

In GitHub:

```text
Repository: ngalyna/ngalyna.github.io
Settings -> Pages -> Custom domain
```

Enter:

```text
ngalyna.id.vn
```

If GitHub offers domain verification, add the TXT record it provides in the DNS panel.

## 3. DNS Records

For apex/root domain:

```text
@  A     185.199.108.153
@  A     185.199.109.153
@  A     185.199.110.153
@  A     185.199.111.153
@  AAAA  2606:50c0:8000::153
@  AAAA  2606:50c0:8001::153
@  AAAA  2606:50c0:8002::153
@  AAAA  2606:50c0:8003::153
```

For `www`:

```text
www  CNAME  ngalyna.github.io
```

Do not add wildcard DNS such as `*.ngalyna.id.vn`.

## 4. Verify DNS

Run:

```bash
dig ngalyna.id.vn +noall +answer -t A
dig ngalyna.id.vn +noall +answer -t AAAA
dig www.ngalyna.id.vn +noall +answer
```

Then open:

```text
https://ngalyna.id.vn/
https://www.ngalyna.id.vn/
```

When GitHub allows it, enable:

```text
Enforce HTTPS
```

## 5. Switch Repo Metadata

Only after the custom domain opens correctly:

```bash
npm run domain:switch
git diff --check
python3 -m http.server 5177 --bind 127.0.0.1
```

Preview:

```text
http://127.0.0.1:5177/index.html
```

Then commit:

```bash
git add index.html robots.txt sitemap.xml CNAME package.json scripts/switch-domain.cjs DOMAIN_AND_SEO_LAUNCH.md DOMAIN_GO_LIVE_CARD.md
git commit -m "Launch custom ngalyna.id.vn domain"
git push
```

## 6. Search Console

Add a Domain property:

```text
ngalyna.id.vn
```

Verify with DNS TXT, then submit:

```text
https://ngalyna.id.vn/sitemap.xml
```

Request indexing for:

```text
https://ngalyna.id.vn/
```

## 7. Social Links

Update links in:

- YouTube descriptions.
- Facebook / Instagram / TikTok bio.
- LinkedIn, if used.
- Email signature.
- Proposal PDFs or booking messages.

Use anchor text like:

```text
MC Nga Lyna - bilingual event host
Nga Lyna official portfolio
Nga Lyna bilingual MC showreel
```
