# Iftakhar Memorial Hospital

Website for Iftakhar Memorial Hospital in Chishtian, Bahawalnagar District, Punjab, Pakistan —
a hospital providing free treatment to patients who cannot afford care.

Built with React + TypeScript + Vite, Tailwind CSS, Framer Motion, and React Router.
The home, departments, doctors, and donate pages each open with a scroll-scrubbed video
sequence filmed at the hospital.

## Local development

```bash
npm install
cp .env.example .env   # then fill in real values
npm run dev            # http://localhost:5173
```

## Build

```bash
npm run build          # outputs to dist/
npm run preview        # preview the production build locally
```

## Environment variables

Copy `.env.example` to `.env` for local use. On Render, set these under
**Service → Environment**.

| Variable               | Purpose                             |
| ---------------------- | ----------------------------------- |
| `VITE_HOSPITAL_PHONE`  | Phone number shown on Contact page  |
| `VITE_HOSPITAL_EMAIL`  | Email address shown on Contact page |

Only variables prefixed `VITE_` are exposed to the browser. Because they are compiled
into the public JavaScript bundle, **never put secrets** (API keys, passwords, tokens)
in a `VITE_` variable.

## Deploying to Render

This repo includes `render.yaml`, so Render can configure the service automatically:

1. Push this repo to GitHub.
2. In Render, choose **New → Blueprint** and select the repository.
3. Render reads `render.yaml` and creates a **Static Site** with:
   - Build command: `npm ci && npm run build`
   - Publish directory: `dist`
   - A rewrite rule sending all paths to `index.html`
4. Fill in `VITE_HOSPITAL_PHONE` and `VITE_HOSPITAL_EMAIL` when prompted.

To configure manually instead of using the Blueprint, create a **Static Site** with the
build command and publish directory above, then add this rewrite rule under
**Redirects/Rewrites** — without it, refreshing on `/about` or `/donate` returns 404:

| Source | Destination   | Action  |
| ------ | ------------- | ------- |
| `/*`   | `/index.html` | Rewrite |

## Content still to replace

The following are placeholders and should be updated before going live:

- Bank account details on the Donate page.
- Doctor names and roles on the Doctors page (shown as monogram avatars — no photos,
  so no real person is misrepresented). Add real staff photos when available.
- Patient/year statistics on the Home page.
- Maternity, general medicine, pharmacy, and diagnostic-lab photos are licensed stock
  images ([Unsplash License](https://unsplash.com/license),
  [Pexels License](https://www.pexels.com/license/)), not photographs of this hospital.
  The exterior, lobby, ICU corridor, and operating-room imagery is genuine footage.
