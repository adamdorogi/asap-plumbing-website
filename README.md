# ASAP Plumbing QLD

Custom Next.js 16 website for ASAP Plumbing QLD. Approved design: white split hero, orange and charcoal trade identity, self-hosted Barlow Condensed and Manrope.

## Development

```sh
npm ci
npm run dev -- --port 43127
```

The default dev script binds to `0.0.0.0`. Use any available port. The project uses Next.js 16.4.5, React 19.3.1 and TypeScript.

## Validation

```sh
npm run lint
npm run typecheck
npm run build
```

## Deployment

Vercel team: `adamdorogis-projects`.

Project: `asap-plumbing-website` (`prj_xQA2lqgQUFnC5WKnsNhrd5IzONVj`). Production target: `https://asap-plumbing-website.vercel.app`.

The source is self-contained. Fonts are installed via Fontsource and served with `next/font/local`. Next Image optimizes the local source photographs. There are no required environment variables or external form services.

## Enquiries

The contact form validates the input and prepares a populated `mailto:` draft. The visitor reviews it, opens their email app and sends it. The site never claims to send the enquiry itself and does not store personal information. Urgent visitors can call Mike directly.

To change contact details, edit `src/lib/business.ts`. The current confirmed number is **0434 151 105** and email is **asapplumbingqld@gmail.com**.

## Business content and imagery

Research and evidence are recorded in `PRODUCT.md`. Three real photographs were downloaded from the business's public Facebook page. Original sources are recorded in `docs/downloaded-photo-sources.json`. The bathroom hero image was generated with the built-in ImageGen tool; its prompt is `docs/hero-image-prompt.txt`, and its provenance is embedded in the PNG. Image credits on the site distinguish the illustrative hero from real work.

No verified reviews were available. The site links visitors to Google and Facebook without presenting invented testimonials or a rating.

The expanded service descriptions and nearby service areas are reasonable draft copy based on the business's general plumbing, renovations and drain-clearing offer. The business should confirm these details, the listed street address and 24-hour availability before adopting the site as its official website. No licence number, operating history, prices or response-time guarantees have been invented.

## Design record

The selected concept is `.impeccable/mocks/concept-a.png`. The route strategy is `.impeccable/surfaces/home.md`; design tokens and principles are in `DESIGN.md`. Development references are never imported into the page. `src/app/hero-layout.css` contains the measured layout values used during implementation.
