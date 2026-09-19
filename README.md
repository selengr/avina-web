# avina-web

Company website for **Avina** (آوینا) — IT solutions, services, portfolio, and contact.

I use this as a real project in my portfolio. It's Persian / RTL and built with Next.js.

## What's in here

- Home, about, services, portfolio, contact
- Consulting request form
- News section (falls back to sample cards if the API is offline)
- Shared header / footer layout

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion + Swiper

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Env (optional)

If you have a backend, put the API base URL in `.env.local`:

```bash
NEXT_PUBLIC_HOST_API_KEY=https://your-api.example.com
```

Without it, the site still runs with local fallbacks.

## Note

Static files (fonts, images, videos) belong in `public/`. If that folder is empty, some images will look broken until you add them.

---

Repo: [github.com/selengr/avina-web](https://github.com/selengr/avina-web)
