# b2bnexa

B2B travel technology marketing site (Next.js App Router, Tailwind CSS v4).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Brand / site name** is defined in [`lib/brand.ts`](lib/brand.ts) (`b2bnexa`) and used for metadata, header, footer, and emails.

## Contact form email

Copy [`.env.example`](.env.example) to `.env.local` and set `SMTP_*` and `CONTACT_TO_EMAIL`.

## Deploy

See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).
