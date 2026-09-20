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

## جستجو

- صفحه `/search` برای جستجو بین صفحات، خدمات و نمونه کارها
- فیلتر دسته‌بندی + جستجوی متنی در صفحه نمونه کارها

## Forms (local save)

Newsletter and consulting forms post to:

- `POST /api/newsletter` `{ "email": "..." }`
- `POST /api/consulting` `{ "education", "name", "lastName", "phone", "description" }`

Saved under the local `data/` folder (gitignored).

## Note

Static files (fonts, images, videos) belong in `public/`. If that folder is empty, some images will look broken until you add them.

---

Repo: [github.com/selengr/avina-web](https://github.com/selengr/avina-web)
