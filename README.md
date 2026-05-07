# almenarasecurity.com

Corporate website for **Almenara Security** — a cybersecurity firm based in Malaga, Spain, specializing in pentesting and cybersecurity awareness training for SMBs.

## Stack

- **Astro 6** — static site generation
- **Tailwind CSS v4** — CSS-first configuration
- **TypeScript** — strict mode
- **Inter + JetBrains Mono** — via Fontsource (self-hosted)
- **Phosphor Icons** — via astro-icon + @iconify-json/ph
- **Formspree** — contact form handling
- **GitHub Pages** — hosting via GitHub Actions

## Getting started

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # TypeScript check + Astro build
npm run preview    # Preview the built site locally
```

## Project structure

```
src/
├── components/         # Reusable Astro components
├── i18n/               # Bilingual system
│   ├── en.ts           # English page translations (nested by section)
│   ├── es.ts           # Spanish page translations
│   ├── ui.ts           # Shared UI strings (nav, buttons, footer)
│   └── utils.ts        # Helpers: getLangFromUrl, t, tUI, getAlternateUrl
├── layouts/
│   └── BaseLayout.astro  # Main layout with SEO, hreflang, schema.org
├── pages/
│   ├── index.astro       # EN home (includes language detection script)
│   ├── services/         # EN service pages
│   ├── about.astro       # EN about
│   ├── contact.astro     # EN contact
│   ├── blog/             # EN blog
│   └── es/               # All Spanish pages with translated slugs
│       ├── index.astro
│       ├── servicios/
│       ├── sobre-nosotros.astro
│       ├── contacto.astro
│       └── blog/
├── styles/
│   └── global.css        # Tailwind v4 @theme + fonts
└── content/              # Prepared for future blog posts
```

## How i18n works

**URL structure:**
- English (default): `/`, `/services/pentesting`, `/about`, etc.
- Spanish: `/es/`, `/es/servicios/pentesting`, `/es/sobre-nosotros`, etc.

**Language detection:**
1. On first visit to `/`, a client-side script checks `navigator.language`
2. Spanish speakers are redirected to `/es/`
3. Manual language choice is saved to `localStorage` (`almenara-lang`) and respected on future visits
4. Direct visits to any URL are never redirected (respects shared links)

**Translation system:**
- `t('hero.title', 'en')` — page content translations (nested keys)
- `tUI('nav.home', 'es')` — UI string translations
- Both EN and ES pages use the same components, only `lang` prop differs

**Adding a new bilingual page:**
1. Create the EN page in `src/pages/` (e.g., `src/pages/pricing.astro`)
2. Create the ES page in `src/pages/es/` with translated slug (e.g., `src/pages/es/precios.astro`)
3. Add route pair to `ROUTE_PAIRS` in `src/i18n/utils.ts`
4. Add translations to `src/i18n/en.ts` and `src/i18n/es.ts`
5. Add navigation links if needed in `Header.astro` and `Footer.astro`

## Environment variables

Copy `.env.example` to `.env` and fill in:

```
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

## Formspree setup

1. Create an account at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy the form endpoint URL
4. Set it as `PUBLIC_FORMSPREE_ENDPOINT` in your `.env` file
5. For production, add it as a repository secret in GitHub and reference it in the workflow, or set it directly in the `.env` file before building

## Deploy to GitHub Pages

1. Push to the `main` branch — GitHub Actions will build and deploy automatically
2. In repo Settings > Pages, set source to "GitHub Actions"
3. Add custom domain `almenarasecurity.com` in Settings > Pages
4. Configure DNS in Cloudflare:
   - `A` record: `almenarasecurity.com` -> `185.199.108.153` (and .109, .110, .111)
   - `CNAME` record: `www` -> `your-username.github.io`
5. Enable "Enforce HTTPS" in GitHub Pages settings

## Security headers

Configure these in Cloudflare (or via `_headers` file if using a different host):

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 0
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://formspree.io
```

## TODOs

- [ ] Add `almenara-logo.png` to `public/`
- [ ] Add `favicon.ico` and `apple-touch-icon.png` to `public/`
- [ ] Create `og-image.png` and `og-image-es.png` (1200x630) in `public/`
- [ ] Replace team member placeholders in About page
- [ ] Add real testimonials
- [ ] Configure Formspree endpoint
- [ ] Review legal pages with a lawyer (LSSI-CE, RGPD, LOPD-GDD)
- [ ] Add LinkedIn URL in Footer
- [ ] Configure Cloudflare DNS
- [ ] Enable Plausible Analytics (uncomment in BaseLayout.astro)
- [ ] Add blog posts via Content Collections
- [ ] Add real company data to legal notices (CIF, address, trade registry)
