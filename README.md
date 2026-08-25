# Panel — Sheet-backed Dashboard PWA

A small installable PWA that embeds a handful of published Google Sheets as
dashboard panels, with a binder-tab style nav.

## 1. Run locally

```bash
npm install
npm run dev
```

## 2. Add your dashboards

Edit `src/config/dashboards.js`. Each entry needs:

- `slug` — becomes the URL, e.g. `sales` → `/sales`
- `title`, `description` — shown in the nav and top bar
- `embedUrl` — the **published** embed link for that sheet

### How to get a sheet's `embedUrl`

In Google Sheets: **File → Share → Publish to web → select the specific
sheet/tab → Embed → Publish**. Copy the URL that looks like:

```
https://docs.google.com/spreadsheets/d/e/<long-id>/pubhtml?gid=<id>&single=true&widget=true&headers=false
```

Do **not** use the normal `/edit` link — it won't embed for viewers who
aren't logged into that Google account.

⚠️ Publishing a sheet to the web makes that data reachable by anyone with
the link, regardless of any UI-level access control in this app. Only
publish sheets you're fine with being effectively public.

## 3. Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **New Project → Import** your repo.
3. Framework preset: **Vite** (auto-detected). No env vars needed.
4. Deploy.

`vercel.json` already handles SPA client-side routing rewrites.

## Notes

- Google's published sheet embed has its own fixed internal sizing — this
  app gives it a responsive, scrollable container, but the table itself
  won't reflow columns on narrow screens (that's Google's rendering, not
  something a wrapping app can change).
- The service worker (via `vite-plugin-pwa`) explicitly does **not** cache
  anything from `docs.google.com`, so panels always hit Google fresh rather
  than showing stale cached data.
- Add more panels any time by adding entries to `dashboards.js` — nav,
  routing, and the tab rail all update automatically.
