---
name: ASAP Plumbing QLD
description: Brisbane wayfinding in workwear orange, charcoal, and light paper.
colors:
  orange: "#e65012"
  orange-dark: "#b63c0d"
  ink: "#242722"
  paper: "#f7f7f2"
  white: "#ffffff"
  muted: "#60645a"
  line: "#d6d8cf"
  soft: "#eeefe7"
  contact-ink: "#14170f"
  field-border: "#828777"
  field-placeholder: "#6a6e61"
  error: "#a82914"
  dark-hover: "#3c4434"
  dark-muted: "#d7ddce"
  footer-muted: "#c8d0bf"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(100px, 12.1vw, 186px)"
    fontWeight: 900
    lineHeight: 0.77
    letterSpacing: "-.025em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(54px, 5.3vw, 82px)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-.02em"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(30px, 2.6vw, 40px)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-.01em"
  contact-display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(72px, 8vw, 124px)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-.02em"
  hero-intro:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(19px, 1.82vw, 28px)"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-.025em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.65
  action:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.05
  input:
    fontFamily: "Manrope, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  navigation:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(16px, 1.65vw, 25px)"
    fontWeight: 700
    lineHeight: 1.65
  chip:
    fontFamily: "Manrope, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.65
  locality:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(25px, 3.1vw, 48px)"
    fontWeight: 700
    lineHeight: 0.98
rounded:
  control: "5px"
  square: "0"
  hero-corner: "64px"
  hero-corner-mobile: "44px"
  locality: "50%"
spacing:
  page-gutter: "clamp(24px, 2.083vw, 40px)"
  mobile-gutter: "22px"
  section-inline: "clamp(24px, 6vw, 100px)"
  control-block: "12px"
  control-inline: "24px"
  row-block: "24px"
  project-gap: "32px"
  field-gap: "23px"
  inline-gap: "20px"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.white}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.orange-dark}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "12px 24px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "12px 24px"
  button-dark-hover:
    backgroundColor: "{colors.dark-hover}"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.input}"
    rounded: "{rounded.square}"
    padding: "12px 13px"
  navigation:
    textColor: "{colors.ink}"
    typography: "{typography.navigation}"
    padding: "9px 0"
  suburb-chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.chip}"
    rounded: "{rounded.square}"
    padding: "6px 12px"
  enquiry-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "clamp(24px, 3vw, 46px)"
  service-row:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.square}"
    padding: "24px 0"
  locality-stamp:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.white}"
    typography: "{typography.locality}"
    rounded: "{rounded.locality}"
    width: "clamp(150px, 14.2vw, 218px)"
---

# Design System: ASAP Plumbing QLD

## Overview

**Creative North Star: "Brisbane Wayfinding"**

The identity borrows the clarity of a local trade sign: heavy condensed lettering, direct arrows, workwear orange, and charcoal on light paper. It feels capable and approachable. Large headings establish direction; plain explanatory text and real work photographs supply detail.

The layout alternates generous photographic sections with compact service rows. Flat colour bands mark changes of purpose. Phone actions stay conspicuous, especially on mobile. The approved white split hero is the home page's expression of this identity; its exact composition is not a universal template for new pages.

**Key Characteristics:**

- Bold condensed signage paired with practical, readable body type.
- Orange actions and sign bands, charcoal anchors, and warm pale surfaces.
- Square photographs, fine dividers, and restrained control rounding.
- Real local evidence, visible phone access, and straightforward interaction.

This is a scan of the implemented system. Normative primitives above come from `src/app/globals.css`; the locally hosted font families and available weights come from `src/app/layout.tsx`. Component behaviour lives in `src/app/page.tsx`, `src/components/site-header.tsx`, and `src/components/quote-form.tsx`. Home-specific intent remains in `.impeccable/surfaces/home.md`. The imported `src/app/hero-layout.css` contains comp-measurement scaffold variables, not the live page's reusable layout system.

## Colors

One vivid orange sits against green-tinted charcoal and pale paper; muted olive-grey values support text, dividers, and fields.

### Primary

- **Workwear Orange** (`orange`): primary call actions, the second hero line, the locality stamp, service strip, and contact section.
- **Deep Workwear Orange** (`orange-dark`): orange button hover, light-surface text-link hover, selection, focus outlines, and field carets.
- **Soft Orange for Dark Surfaces**: the existing clock icon and footer-link hover use local light-orange treatments in the stylesheet. These are contextual contrast adjustments, not a second brand accent.

### Neutral

- **Trade Charcoal** (`ink`): headings and body text; dark captions, urgent section, footer, and enquiry action.
- **Light Paper** (`paper`): page ground, enquiry panel, and reversed text on charcoal.
- **White** (`white`): reversed orange-action and stamp lettering.
- **Olive Grey** (`muted`): supporting copy, captions, optional labels, and form notes.
- **Divider Grey** (`line`): service and FAQ separators, suburb outlines, and header rule.
- **Soft Paper** (`soft`): work/community sections and map fallback surface.
- **Contact Ink** (`contact-ink`): readable text over the orange contact section and mobile quote action.
- **Field Border / Field Placeholder** (`field-border`, `field-placeholder`): distinct input boundaries and clearly visible prompt text.
- **Dark Hover / Dark Muted / Footer Muted** (`dark-hover`, `dark-muted`, `footer-muted`): dark-button feedback and quieter copy on charcoal.

The `error` token is reserved for invalid fields and their accompanying explanation.

**The Working Orange Rule.** Orange may fill an entire purposeful sign band or contact section. Keep the adjoining copy, controls, and section changes clear; an arbitrary accent-area limit is not part of this system.

## Typography

**Display Font:** Barlow Condensed, with sans-serif fallback; local normal weights (700 and 900).

**Body Font:** Manrope, with sans-serif fallback; local normal weights (400, 500, and 700).

**Character:** Narrow, weighty display lettering gives short messages the immediacy of signage. Manrope keeps the practical information calm and legible. Display size is fluid rather than a single modular ratio; explanatory copy has longer line-height and modest widths.

### Hierarchy

- **Display:** the frontmatter `display` role is the desktop hero. Its two explicit, unbroken lines use black weight; the second is orange. The heading alone has an oversized layout width (122%), horizontal compression (`scaleX(.82)`), left transform origin, and a small negative left margin. Preserve these together when maintaining this heading.
- **Headline:** the frontmatter `headline` role appears in work and local sections. The services heading instead uses a smaller fluid size (`clamp(42px, 4.5vw, 70px)`) and line-height (1). FAQ uses its own narrower fluid size (`clamp(44px, 4.3vw, 66px)`). These are deliberate context variants.
- **Title:** service titles use the `title` role; project captions are (34px), and Mike's introductory title is (38px). They remain bold rather than black.
- **Contact display:** the contact heading uses `contact-display`, with compact stacked lines. On mobile it is (91px); normal wrapping can create a third line.
- **Body:** default `body`; section prose is generally (14–18px), with content widths around (440–600px). The desktop hero introduction uses `hero-intro` and a width limit (690px). Footer and provenance details use smaller contextual sizes.
- **Label / action:** Manrope bold labels sit above fields; Barlow Condensed bold actions are visibly larger. The wordmark uses black weight, italic orange “ASAP”, a slash divider, and the charcoal business name. Italic is a wordmark treatment rather than an additional loaded font face.

At widths up to (1000px), the hero heading becomes (11.8vw). At widths up to (760px), it uses `clamp(76px, 24vw, 170px)`, line-height (.8), and letter-spacing (-.02em), while retaining the scoped horizontal compression. Mobile body is (15px); hero introduction is (17px) at line-height (1.55). Field text increases to (16px). Above (1920px), the hero display becomes (230px) and introduction (32px).

**The Signage Type Rule.** Use Barlow Condensed for headings, wordmark, prominent phone numbers, sign bands, and action buttons. Use Manrope for explanations, navigation, form fields, and small practical information. Hero compression belongs only to the measured home heading.

## Layout

The main desktop rhythm is asymmetric two-column composition, followed by broad horizontal sections. Use the frontmatter gutter tokens rather than a universal fixed container. The hero and services cap at (1920px); work content at (1560px); local/footer content at (1680px). Legal content uses a narrower (800px) measure.

The hero columns are (.92fr / 1.04fr), with a fluid (28–46px) gap. Services pair a narrower photo column (.56fr) with the list (1fr). Work photographs use equal columns with the `project-gap`. Local content uses equal columns; FAQ uses (1fr / 1.2fr); contact uses (.9fr / 1.1fr). Section padding varies with content, typically (60–110px) vertically. Reuse the actual section families rather than forcing a synthetic spacing scale.

- **At or below 1200px:** compact header sizing and action spacing; stamp and hours sign reduce.
- **At or below 1000px:** tighter desktop layout, equal hero columns, wrapping hero actions, single-column field groups, and reduced section gaps. Service detail padding drops on the right. Footer becomes two columns.
- **At or below 760px:** the main layout stacks; desktop navigation/phone become a menu button and dropdown. Hero copy precedes the photo, service rows precede Mike's photo, projects become a single column, and contact stacks. The normal horizontal inset is `mobile-gutter`; the hero/photo stays within that inset. The service strip becomes a two-by-two grid. A fixed two-action contact bar has (62px) action height plus the device safe-area inset; body padding reserves (64px).
- **At or below 375px:** hero inset reduces to (18px), quote action expands to the available width, and hero detail/sign typography tightens. Other sections retain their mobile inset.
- **At or above 1921px:** only the specified large-hero overrides apply; content width caps remain.

Native image fitting is `cover`. The hero image favours (53% center), Mike's desktop crop (33% 30%) becomes (center 32%) on mobile, and the stone vanity favours (center 64%). Keep meaningful subjects visible when changing image boxes. The Google map has a desaturated treatment (`saturate(.65)`), with a charcoal location caption; its iframe minimum height changes from (370px) to (310px) on mobile.

## Elevation & Depth

Depth comes from tonal section changes, image crops, overlapping signage, and contrast. Project links, service rows, fields, and the enquiry panel are flat; they do not cast card shadows. The locality stamp overlaps the hero photo with a rotation (-11deg).

### Shadow Vocabulary

- **Expanded mobile navigation** (`box-shadow: 0 16px 20px -16px #24272255`): separates the absolute dropdown from page content below the header. This is the sole box-shadow in the implemented interface.

**The Flat Surface Rule.** Keep content surfaces flat. Reserve the existing shadow treatment for the temporary mobile navigation layer.

## Shapes

Rectangles and thin rules dominate. Buttons have a small `control` radius and a transparent border (2px); outline actions expose the charcoal border. Fields, suburb tags, project frames, map caption, and enquiry panel remain square, with fine borders where needed (1px).

Two distinctive shapes are scoped to the home hero: the photograph's large upper-right corner uses `hero-corner` (and `hero-corner-mobile`), and the circular locality stamp uses `locality`. The hours link has an arrow-tip silhouette defined by `clip-path: polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)`. These do not imply pill-shaped cards or controls elsewhere.

## Components

### Buttons

Direct, large, condensed actions. The base primary uses `button-primary`, with minimum height (62px), icon gap (20px), and an inline SVG arrow (31px). Hover darkens the fill and moves the arrow (3px right, 3px up). The colour transition is (.2s); arrow motion is (.35s) using `--ease`.

The outline variant uses the existing charcoal border and fills charcoal on hover. The dark variant is used on light enquiry surfaces and shifts to `dark-hover`. Contexts intentionally vary size: header phone, hero call, urgent phone, and enquiry submit. Preserve their source rules instead of assigning every action the same footprint. Disabled buttons use opacity (.6) and the wait cursor.

### Chips

Suburb names are quiet, non-interactive rectangular tags with `suburb-chip` styling, a fine divider border, and small gaps. They have no selected or hover state. Mobile tags reduce to (11px) text and (5px 10px) padding.

### Cards / Containers

The enquiry panel is a square paper surface sitting directly on orange. It uses `enquiry-panel` padding, reducing to (26px) at the tablet threshold and (25px 20px) on mobile. Project links are large photographs with flat caption rows and an outward arrow; hover scales the photograph to (1.035) over (.7s) and lifts the arrow. No floating card wrapper is present.

### Inputs / Fields

Fields use `input` styling, the `field-border` stroke, and minimum height (48px); textareas are vertically resizable with minimum height (110px). Place labels above controls and distinguish optional labels with normal weight and muted colour. Hover darkens the border. Focus uses a charcoal outline (2px) offset by (2px); invalid phone input uses `error` for both border and a nearby alert message.

The enquiry flow switches from the form to a reviewable draft, then lets the visitor open an email app, copy the text, or edit. Focus moves to the draft panel on preparation and returns to the name field on editing. Copy feedback uses a status region. Keep the explanatory and error states as readable as the default form; the interface must not imply that preparing the draft has sent an email.

### Navigation

The desktop wordmark, four bold Manrope links, and orange phone action share one horizontal header. Links grow an orange underline from the left over (.28s). The mobile menu is an absolute paper dropdown with divider rows; its button exposes `aria-expanded` and `aria-controls`. Choosing a link closes it; Escape closes it and returns focus to the menu button.

The mobile contact bar pairs a charcoal call action and orange quote action. Preserve its safe-area padding and inset white focus treatment. A skip link appears on keyboard focus. Global visible focus uses a deep-orange outline (3px) with offset (5px); orange buttons and service-band links use charcoal instead.

### Service and FAQ rows

Services use native `details` / `summary`, fine horizontal separators, a bold title, muted one-line summary, and a square arrow control (51px desktop, 43px at the tablet threshold). Hover or open state fills the arrow orange and reverses its colour. Opening rotates the SVG (90deg) over (.4s) and reveals content using opacity and clipping over (.35s). The shared details name keeps service disclosure selection exclusive; an enquiry link preserves the selected service in the contact form.

FAQ disclosures use the same flat separators with Manrope question text. Their chevron rotates (180deg) over (.3s), and answers use muted text with line-height (1.8). Native semantics keep both patterns keyboard operable.

### Locality and directional signage

Use the stamp as a concise locality marker, not a review badge. The service band uses broad orange fill, uppercase bold headings, and simple SVG arrows with a short horizontal hover movement. Desktop runs four items in one row; mobile uses the two-by-two arrangement in Layout. Inline text links pair bold practical text with an SVG arrow and a small diagonal movement.

All motion uses the existing ease curve `cubic-bezier(.16, 1, .3, 1)` where specified. Under `prefers-reduced-motion: reduce`, smooth scrolling becomes automatic, and animation/transition durations reduce to (.01ms), with a single animation iteration. Preserve this override when adding component states.

## Do's and Don'ts

### Do:

- **Do** keep orange, charcoal, and light paper as the primary visual relationship, including purposeful full-width sign bands.
- **Do** retain the loaded Barlow Condensed and Manrope weights, the distinct display/body roles, and the home hero's scoped compression.
- **Do** preserve direct phone access, the mobile contact bar, visible keyboard focus, native disclosure semantics, and reduced-motion support.
- **Do** use real project photographs as project evidence, preserve useful crops, and identify illustrative imagery honestly.
- **Do** maintain mobile fields at 16px and keep labels, validation, draft review, and copy feedback visible and meaningful.

### Don't:

- **Don't** apply the home hero's horizontal compression, circular stamp, or single rounded photo corner to every new component.
- **Don't** introduce floating shadows on the flat content containers or replace the square field and row geometry with pills.
- **Don't** substitute text glyphs for the existing SVG directional icons or remove focus treatment in favour of hover alone.
- **Don't** use invented ratings, testimonials, licence numbers, or arrival guarantees as visual proof.
- **Don't** present an illustrative hero image as a completed job, or an email draft as an enquiry already sent.
