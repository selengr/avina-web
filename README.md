# avina-web

Company site for Avina (آوینا). Persian / RTL. I keep this repo as part of my portfolio work.

Next.js app with home, about, services, portfolio, and contact. Forms save locally when no backend is set.

## Stack

- Next.js 15 + React 19
- TypeScript
- Tailwind
- Framer Motion / Swiper
- React Query for client data
- Zod for form validation helpers

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
