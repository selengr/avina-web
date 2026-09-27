# avina-web

Company website for Avina (آوینا). Persian / RTL. I use this as a real Next.js portfolio piece, not a throwaway demo.

Pages cover the usual company stuff: home, about, services, portfolio, and contact. Newsletter and consulting forms are backed by Postgres (see below).

## Stack

- Next.js 15 + React 19
- TypeScript
- Tailwind
- Framer Motion / Swiper / Embla
- React Query
- Zod for form validation
- Postgres (`pg`) for form submissions

## Setup

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Open http://localhost:3000

You'll need a Postgres database for the newsletter/consulting forms to work — see [Database](#database) below.

Fonts and images live in `public/`. Local mp4 files under `public/video/` stay gitignored on purpose (they’re big).

## Build / checks

```bash
npm run build
npm start

npm run lint
npm run typecheck
```

## Env

Copy from `.env.local.example`:

| Variable | What it’s for |
| --- | --- |
| `NEXT_PUBLIC_HOST_API_KEY` | API base. Leave empty to use static menus/news. |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for sitemap / robots. |
| `DATABASE_URL` | Postgres connection string for form submissions. |
| `SUBMISSIONS_READ_TOKEN` | Optional. Needed to read saved form rows. |

## Database

Newsletter signups and consulting requests are stored in Postgres. Any provider works as long as you can hand it a standard connection string — Neon, Supabase, and Vercel Postgres all have a free tier:

1. Create a database and copy its connection string into `DATABASE_URL` in `.env.local`.
2. That's it — the two tables (`newsletter_subscribers`, `consulting_requests`) are created automatically on first request via `CREATE TABLE IF NOT EXISTS`, no separate migration step needed.

For local development, point `DATABASE_URL` at a local Postgres instance (e.g. `postgres://postgres:postgres@localhost:5432/avina`); SSL is skipped automatically for `localhost`/`127.0.0.1` connection strings and required otherwise.

## Useful routes

- `/search?q=` — pages, services, portfolio
- `/portfolio` — list + filters
- `/portfolio/[slug]` — project detail
- `/sitemap.xml`, `/robots.txt`

Sandbox paths `/ali` and `/up` just redirect home.

## Forms

They post to local API routes and store rows in Postgres (see [Database](#database)):

- `POST /api/newsletter` — `{ "email": "..." }`
- `POST /api/consulting` — education, name, lastName, phone, description

List saved rows (token required):

- `GET /api/newsletter?token=...`
- `GET /api/consulting?token=...`

## Notes

If the public API is down, menus and news fall back to static content so the site still loads.

Icon React components under `src/app/_components/icons/` are already generated. The old `icons/gulpfile.js` pipeline is still in the repo if you ever need to regenerate them — install gulp locally for that; it’s not part of the app install anymore.

Repo: https://github.com/selengr/avina-web

Maintained by [@selengr](https://github.com/selengr).
