# avina-web

Company website for **Avina** (آوینا) — IT solutions, services, portfolio, and contact.

I use this as a real project in my portfolio. It's Persian / RTL and built with Next.js.

## What's in here

- Home, about, services, portfolio, contact
- Consulting request form
- News section (falls back to sample cards if the API is offline)
- Shared header / footer layout
- Fonts, images, and videos under `public/`

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion + Swiper

## Run locally

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Env

See `.env.local.example`:

- `NEXT_PUBLIC_HOST_API_KEY` — backend base URL (optional)
- `NEXT_PUBLIC_SITE_URL` — used by sitemap / robots
- `SUBMISSIONS_READ_TOKEN` — optional token to read saved form submissions

## Search

- `/search` for pages, services, and portfolio (`?q=` and `?kind=`)
- Category filter + text search on the portfolio page
- Project details at `/portfolio/[slug]`

## Forms (local save)

Newsletter and consulting forms post to:

- `POST /api/newsletter` `{ "email": "..." }`
- `POST /api/consulting` `{ "education", "name", "lastName", "phone", "description" }`

To list saved rows (needs `SUBMISSIONS_READ_TOKEN`):

- `GET /api/newsletter?token=...`
- `GET /api/consulting?token=...`

Data is stored under `data/` (gitignored).

## SEO

- `/sitemap.xml` and `/robots.txt`

## Note

Sandbox routes `/ali` and `/up` redirect home.

---

Repo: [github.com/selengr/avina-web](https://github.com/selengr/avina-web)
