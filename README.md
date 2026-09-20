# avina-web

Company site for Avina (آوینا). Persian / RTL. I keep this in my portfolio as a real Next.js project, not just a demo.

It covers the usual company pages: home, about, services, portfolio, and contact. Newsletter + consulting forms work even without a backend — they just save JSON under `data/`.

## Stack

- Next.js 15 + React 19
- TypeScript
- Tailwind
- Framer Motion / Swiper
- React Query for client data
- Zod for form validation

## Setup

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

Handy checks:

```bash
npm run lint
npm run typecheck
```

## Env

Copy from `.env.local.example`:

| Variable | What it's for |
| --- | --- |
| `NEXT_PUBLIC_HOST_API_KEY` | API base. Leave empty to use static menus/news. |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for sitemap / robots. |
| `SUBMISSIONS_READ_TOKEN` | Optional. Needed to read saved form rows. |

## Useful routes

- `/search?q=` — pages, services, portfolio
- `/portfolio` — list + filters
- `/portfolio/[slug]` — project detail
- `/sitemap.xml`, `/robots.txt`

Sandbox paths `/ali` and `/up` just redirect home.

## Forms

They post to local API routes and store JSON under `data/` (gitignored):

- `POST /api/newsletter` — `{ "email": "..." }`
- `POST /api/consulting` — education, name, lastName, phone, description

List saved rows (token required):

- `GET /api/newsletter?token=...`
- `GET /api/consulting?token=...`

## Assets

Images, fonts, and logos live in `public/`. Local mp4s are ignored by git on purpose — keep them on your machine.

## Notes

If the public API is down, menus and news fall back to static content so the site still loads.

Repo: https://github.com/selengr/avina-web
