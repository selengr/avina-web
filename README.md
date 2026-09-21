# avina-web

Company site for Avina (آوینا). Persian / RTL, built with Next.js.

I keep this in my portfolio as a real product-style site: home, about, services, portfolio, and contact.

## What it does

- Public pages for the company
- Consulting request form (saved locally via API routes)
- Newsletter signup
- News block with sample cards when the backend is offline
- Shared header and footer
- Assets under `public/` (mp4 videos stay local — see `.gitignore`)

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion + Swiper

## Run it

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Env

Copy from `.env.local.example`:

- `NEXT_PUBLIC_HOST_API_KEY` — backend base URL (optional)
- `NEXT_PUBLIC_SITE_URL` — sitemap / robots
- `SUBMISSIONS_READ_TOKEN` — only needed if you want to read saved form rows

## Forms

Posts go to:

- `POST /api/newsletter` with `{ "email": "..." }`
- `POST /api/consulting` with education, name, lastName, phone, description

To list saved rows (needs the token):

- `GET /api/newsletter?token=...`
- `GET /api/consulting?token=...`

Files land in `data/` (gitignored).

## Notes

- Portfolio has category pages and detail routes under `/portfolio`
- Old sandbox routes `/ali` and `/up` redirect home
- Form data is only for local/dev use right now

Repo: [github.com/selengr/avina-web](https://github.com/selengr/avina-web)
