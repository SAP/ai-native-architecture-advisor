# Download-proxy Worker

Counts actual `.zip` downloads — **including non-browser clients (curl, scripts,
AI agents)** that the client-side Cloudflare Web Analytics beacon on the site
cannot see, because they run no JavaScript.

It sits **only** on the download link, never on the website. A browser user
clicking "Download" gets the same result as before (a file downloads); the
Worker just logs the hit server-side first, then `302`-redirects to the real
GitHub zip.

```
client (browser / curl / agent)
  → https://aina-download-proxy.<subdomain>.workers.dev/d/joule-zip
      (logs user-agent + referer + country to Analytics Engine)
  → 302 → download-directory.github.io/...  (the real zip)
```

## Deploy (run under your own Cloudflare login)

```bash
cd worker
npm i -g wrangler        # if not installed
wrangler login           # opens browser; auths to YOUR Cloudflare account
wrangler deploy          # prints the workers.dev URL
```

The deploy prints something like
`https://aina-download-proxy.<your-subdomain>.workers.dev`.

## Then repoint the site

In `docs/index.html`, the Joule download link currently points straight at
`download-directory.github.io`. Change its `href` to the Worker URL:

```
href="https://aina-download-proxy.<your-subdomain>.workers.dev/d/joule-zip"
```

Keep `data-install="joule-zip"` on the link — the browser beacon event and the
server-side Worker count are complementary (beacon = browser intent, Worker =
all downloads incl. agents).

## Read the counts

Cloudflare dashboard → **Workers & Pages → aina-download-proxy → Metrics /
Analytics**, or query the Analytics Engine via the GraphQL Analytics API. The
logged `blobs` are: `[key, clientKind, userAgent, referer, country]`, where
`clientKind` is one of `browser | cli | script | agent | other | unknown` — so
you can split "how many downloads were curl/agents vs real browsers."

## Coverage (honest limits)

| Install path | Counted here? |
|---|---|
| Browser user clicks download | ✅ |
| `curl` / script / agent hits the download link | ✅ |
| Claude Code / Codex `git clone` (marketplace add) | ❌ — see `metrics/clones.csv` |
| Agent reads the page HTML but never downloads | ❌ — nothing is fetched from an endpoint we own |
