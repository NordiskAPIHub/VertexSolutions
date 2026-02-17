# Vertex Solutions ApS hjemmeside

Dansk marketinghjemmeside bygget i `Next.js` + `Tailwind CSS` med enterprise-clean design.

## Stack

- `Next.js` (App Router)
- `TypeScript`
- `Tailwind CSS`
- shadcn-inspirerede UI-komponenter
- Kontakt-API med `Resend` eller `Formspree`

## Kør lokalt

```bash
npm install
npm run dev
```

Appen kører på `http://localhost:3000`.

## Scripts

```bash
npm run lint
npm run build
npm run start
```

## Kontaktformular konfiguration

Kopiér `.env.example` til `.env.local` og udfyld enten Resend eller Formspree:

```bash
cp .env.example .env.local
```

Resend (anbefalet):

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

Formspree fallback:

- `FORMSPREE_ENDPOINT`
