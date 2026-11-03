# Website verification

Checked 3 November 2026. Stack: Next.js 16.4.5, React 19.3.1, TypeScript.

## Build and code checks

- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed; homepage server-rendered, privacy/robots/sitemap/icon/social image routes generated successfully.
- `npm audit --omit=dev`: zero production vulnerabilities.
- Impeccable detector over the changed UI: zero findings.

## Browser flow

Tested with the native in-app browser against the local Next.js server:

- Mobile menu opens, exposes navigation links, and closes with Escape.
- Service details expand using native controls.
- A service-specific enquiry link navigates to the contact form with the correct service selected.
- Invalid phone input produces a clear inline error and returns focus to the phone field.
- A valid enquiry prepares a mailto draft addressed to `asapplumbingqld@gmail.com`, including the selected service, name, phone, suburb and message.
- Preparing an enquiry does not send a message. The preview states this explicitly.
- Copy enquiry reports success; editing retains the previously entered fields.
- Phone links use `tel:+61434151105`.
- The Google Map renders the exact business, its Woolloongabba address and correct pin.
- All four business/illustrative images load, and fonts are locally served.

## Responsive evidence

No horizontal overflow at 1536, 1440, 1280, 390 or 320 CSS pixels. All images were loaded at every checked width. Primary review screenshots are in the gitignored `.impeccable/review/` directory.

Native full-page screenshots omit the offscreen cross-origin Google Map. The review images therefore use an accurate screenshot stitch: the actual same-width map viewport rectangle is inserted at its measured document position. All original captures, live map proofs, and source/destination coordinates are retained in `map-capture-manifest.json`. This is a capture limitation, not a blank map in the site. Captures also normalize the browser's Display P3 pixel data to sRGB.

## Accessibility details checked

Semantic landmarks and heading hierarchy; meaningful image alternatives; labelled fields; keyboard-operable service/FAQ controls; skip link; visible focus; reduced-motion styles; native form validation plus phone-specific recovery. Text and form boundary contrast were checked from the actual CSS colours: normal contact text on orange 4.76:1, muted text on paper 5.63:1, placeholder text 4.87:1, input boundary 3.44:1. White-on-orange actions use large bold text (3.80:1).

## Content boundaries

Phone, email, location, licensed-plumber description, renovations, general plumbing and drain clearing were found on the business's public profiles. No verified customer reviews were available; no rating or testimonial was invented. Detailed service copy and surrounding suburb coverage are draft assumptions documented in `PRODUCT.md` and `README.md`.

## Production

Live URL: https://asap-plumbing-website.vercel.app/ . Vercel deployment `dpl_7fQhbJ9NNyzvVkq6PmwRV5C7dS4S`, project `asap-plumbing-website`, target production, state READY.

The live homepage, privacy page, robots.txt, sitemap.xml, favicon and social image return HTTP 200. The production browser loaded the hero, locally served fonts and correct canonical URL. Every phone link points to the confirmed number. A browser check of the production form prepared the correct recipient's draft; no enquiry was sent. The test form was cleared, viewport override reset, and homepage left open as the deliverable.

The independent finish reviewer accepted the visual result and subsequently scored its sole persistence correction resolved. The mechanical image-comparison result is retained separately, without being relabelled as an automatic pass. See `docs/design-review.md`.
