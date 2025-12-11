# Copilot / AI Agent Instructions for euhub-ai/web

Purpose: help AI coding agents be immediately productive in this Next.js app.

- Project type: Next.js (App Router) + TypeScript + Tailwind CSS. Main source lives in `app/` (routes/layouts/pages) and reusable UI is in `components/`.

- Quick commands (from `package.json`):
  - `npm run dev` — start development server (Next app router hot reload)
  - `npm run build` — build for production
  - `npm run start` — start production server
  - `npm run lint` — run ESLint (config at `eslint.config.mjs`)

- Architecture / patterns to know:
  - App Router: routes are file-based in `app/`. `page.tsx` files are route entries; `layout.tsx` files define nested layouts.
  - Server vs Client components: prefer server components (TSX files in `app/`) unless the file includes `"use client"` or is a `.jsx`/client-only file (e.g. `components/ContactForm.jsx`, `components/CookieConsent.jsx`). If you add client behavior, explicitly add `"use client"` at the top.
  - Styling: Tailwind is used; global styles live in `app/globals.css` and Tailwind plugins are declared in `postcss.config.mjs` and `tailwind.config.js` (if present).
  - Theme & UI: `components/ThemeProvider.tsx` and `components/ThemeToggle.tsx` handle theme state. Use these components to keep theming consistent.
  - Localization/variants: there are language-specific folders like `app/sk/` (Slovak) co-located with default routes — keep mirrored route/metadata structure when adding locales.

- Important files to reference when making changes:
  - `app/layout.tsx` — top-level layout and shared providers
  - `app/page.tsx` — root home page
  - `components/ContactForm.jsx` — example client-side form using `@formspree/react`
  - `components/CookieConsent.jsx` — cookie consent UI (client)
  - `components/LanguageSwitcher.tsx` — locale switching UI
  - `components/ThemeProvider.tsx` — theme/provider pattern to reuse
  - `next.config.ts` — Next.js configuration and features
  - `.github/workflows/` — CI definitions; check before changing build steps

- Third-party integrations to be aware of:
  - `@formspree/react` — used by `ContactForm.jsx` for form submissions
  - `framer-motion`, `lucide-react` — animation and icons used across components
  - Tailwind ecosystem (`tailwindcss`, `@tailwindcss/typography`, `tailwind-merge`)

- Conventions and small decisions observed in this repo:
  - Prefer TypeScript for new routes/components unless you have a reason to keep them as `.jsx`/`.js`.
  - Small interactive pieces are implemented as client components (.jsx or TSX with `"use client"`). When converting to TSX, preserve `use client`.
  - Keep UI components lightweight — many components are present in `components/` for reuse (Theme, LanguageSwitcher, ContactForm). Reuse instead of duplicating.

- When editing or adding routes:
  - Place route files under `app/` and follow the existing nested layout pattern.
  - Update or mirror localized folders (e.g. `app/sk/`) when adding content that needs translations.
  - If adding server-only code (API routes, data fetching), prefer `fetch` in server components; avoid adding client-only logic unless required.

- Debugging / testing locally:
  - Start dev server: `npm run dev` and open `http://localhost:3000`.
  - If you make changes to Next config or install new packages, stop and restart dev server.

- PR guidance for Copilot-generated changes:
  - Keep diffs minimal and explain why component converted to client/server in the PR body.
  - Run `npm run lint` and ensure no new ESLint failures are introduced.
  - Verify interactive flows locally (contact form, cookie consent, language switching) after UI changes.

If any guidance above is incomplete or you want more examples (unit tests, CI), tell me which area to expand and I'll iterate.
