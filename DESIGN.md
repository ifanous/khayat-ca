---
name: Brigitte Khayat — Immigration & Refugee Consulting
description: Single-practitioner RCIC-IRB marketing site. Atom One editor palette, Inter throughout, hairline-bordered surfaces on warm neutrals.
colors:
  # --- Light theme (default) ---
  fog-paper: "#fafafa" # page background (light)
  pale-fog: "#f0f0f1" # alt/muted surface (light)
  pure-surface: "#ffffff" # cards / inputs (light)
  graphite-ink: "#383a42" # primary text (light)
  ash-comment: "#a0a1a7" # canonical Atom One comment color; palette reference, not normal text
  fog-rule: "#e1e4e8" # borders/dividers (light)
  field-border-light: "rgba(56, 58, 66, 0.6)" # 60% graphite-ink; form-control boundary (light)
  # Atom One accents (shared vocabulary, values shift per theme)
  editor-blue: "#4078f2" # primary accent / CTA (light)
  editor-green: "#50a14f" # success / credential tick (light)
  editor-yellow-amber: "#c18401" # canonical Atom One yellow; star graphics (light)
  editor-red: "#e45649" # error (light)
  editor-cyan: "#0184bc" # gradient partner on review avatars (light)
  editor-purple: "#a626a4" # unused in UI today, reserved (light)
  editor-orange: "#d19a66" # unused in UI today, reserved (light)

  # --- Dark theme ---
  atom-slate: "#282c34" # page background (dark)
  atom-slate-deep: "#21252b" # surface + alt/muted (dark) — intentionally identical
  atom-fog: "#abb2bf" # primary text (dark)
  atom-ash: "#5c6370" # canonical Atom One comment color; palette reference, not normal text
  atom-rule: "#3e4451" # borders/dividers (dark)
  field-border-dark: "rgba(171, 178, 191, 0.6)" # 60% atom-fog; form-control boundary (dark)
  atom-blue: "#61afef" # primary accent / CTA (dark)
  atom-green: "#98c379" # success (dark)
  atom-yellow: "#e5c07b" # stars / warning (dark)
  atom-red: "#e06c75" # error (dark)
  atom-cyan: "#56b6c2" # gradient partner (dark)
  atom-purple: "#c678dd" # reserved (dark)
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "normal"
  body-lead:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body-large:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
rounded:
  sm: "4px" # theme-toggle inner buttons
  md: "8px" # every card, input, button on the site
  full: "9999px" # social icon discs, review avatars
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "80px"
components:
  button-primary:
    backgroundColor: "{colors.editor-blue}"
    textColor: "{colors.pure-surface}"
    rounded: "{rounded.md}"
    padding: "16px 32px"
  button-secondary:
    backgroundColor: "{colors.pure-surface}"
    textColor: "{colors.graphite-ink}"
    rounded: "{rounded.md}"
    padding: "16px 32px"
  card-hairline:
    backgroundColor: "{colors.pure-surface}"
    textColor: "{colors.graphite-ink}"
    borderColor: "{colors.fog-rule}"
    rounded: "{rounded.md}"
    padding: "32px"
  input-field:
    backgroundColor: "{colors.fog-paper}"
    textColor: "{colors.graphite-ink}"
    borderColor: "{colors.field-border-light}"
    rounded: "{rounded.md}"
    padding: "16px"
    height: "48px"
  nav-header:
    backgroundColor: "{colors.pure-surface}"
    textColor: "{colors.graphite-ink}"
    rounded: "0"
    height: "96px"
---

# Design System: Brigitte Khayat — Immigration & Refugee Consulting

## 1. Overview

**Creative North Star: "The Developer's Notary."**

The system as it stands today is the Atom One syntax-highlighting palette pressed into service as a professional-credentials site. Inter at every size. 8-pixel rounded corners everywhere. Cards sit on pure-white (light) or deep-slate (dark) surfaces with a 1-pixel hairline border — no shadow at rest, no backdrop blur. Hover states are built from color shifts, not material shifts: cards darken their border on hover, arrow CTAs slide their chevron 2–4 pixels, the primary button lifts one pixel and intensifies a blue glow. The fixed header is transparent-adjacent at the top of the page and picks up a soft hairline shadow after 8 pixels of scroll. One blue does all the work of a CTA; green ticks mark credentials; amber fills star ratings.

The surface reads as clean, restrained, and text-forward — quieter than a typical SaaS marketing page, closer to a senior practitioner's site that respects the reader's time. It is legible, accessible in contrast, and matches PRODUCT.md's "calm over conversion" principle. It remains aesthetically borrowed at the palette level — Atom One was built as a code editor theme, not for this brand — which is the main surviving tension below.

This file captures what exists today so the system is legible to future agents. The **Known Tensions** below flag where the current system still pulls against PRODUCT.md, and the **Don'ts** section encodes guardrails that apply when new surfaces are built or existing ones revised.

**Key Characteristics:**

- Atom One Light / Atom One Dark as the two color moods — developer-editor neutrals and one blue accent.
- Inter for every role, weight contrast (400 / 600 / 700) carrying hierarchy.
- Hairline-bordered surfaces on warm neutrals as the default card material across About, Services, Reviews, Contact, Footer, Hero panel, and 404.
- One accent blue used at ≤10% of pixel area — the Restrained color strategy.
- 8px radius, uniformly.
- Hover vocabulary is color-first: border-color shift on cards, chevron `translateX` on arrow CTAs, `translateY(-1px)` + shadow-intensify on the primary button only. No hover-lift on cards.

**Known Tensions with PRODUCT.md** (remaining):

1. **Atom One is not a brand palette.** It is a code-editor theme. For a single-practitioner brand, it provides no differentiation — any of a dozen consultants could use the same palette. This is the main surviving identity gap; it is the right target for a future `$impeccable shape` pass (candidates: typographic commitment via a display face, color commitment off Atom One, or a structural commitment like a numbered editorial services list).

**Resolved tensions** (kept here so future agents can see what changed and when):

- ~~Glass everywhere is SaaS-coded.~~ Replaced with the `surface-hairline` utility: solid surface, 1px border, no shadow at rest, no backdrop blur. See §4 for the current elevation vocabulary.
- ~~Hero headline reads as clickbait pathway language.~~ Hero H1 is now _"Canadian immigration and refugee matters, handled personally,"_ with the lead sentence _"I prepare every application myself. Every time."_ Neither reads as outcome-promise.
- ~~Star glyph and feature-bullet checks rendered as Unicode characters.~~ Both are now SVG icons (`mdi:star` for ratings, `lucide:check` for credential and feature bullets).

These are captured so future `$impeccable critique` / `shape` / `craft` passes can see the delta and address the remaining tension deliberately rather than silently inherit it.

## 2. Colors: The Atom One Palette (As-Built)

A two-theme system. Light mode uses warm-leaning near-white surfaces against deep graphite text. Dark mode is the Atom One editor background — slate-blue-gray, never true black. One accent blue carries every CTA and link. Four semantic accents (green/amber/red/cyan) appear only at credential, status, and rating moments. The remaining Atom One hues (purple, orange) are defined in tokens but not used in the current UI.

### Primary

- **Editor Blue** (`#4078f2` light / `#61afef` dark): Every call-to-action, active nav link, form focus ring, link underline, and the accent color of the review-card avatar gradient. The one color on the site that is allowed to be saturated.

### Neutral (light mode)

- **Fog Paper** (`#fafafa`): Page background. The default resting surface of the whole site.
- **Pale Fog** (`#f0f0f1`): Alt/muted background — appears on Services and Contact section backgrounds to break the Hero/About rhythm.
- **Pure Surface** (`#ffffff`): Card interiors, header bar, form focus target. Every card is pure white with a 1px `fog-rule` border (the `surface-hairline` utility). Form fields themselves sit on `fog-paper`, not pure surface, so the field reads as a recess within the card.
- **Graphite Ink** (`#383a42`): Primary body and heading color. Slightly warm, never true black.
- **Ash Comment** (`#a0a1a7`): Canonical Atom One Light comment color. At about 2.47:1 on fog-paper, it does not meet WCAG AA for normal text and is retained only as a palette reference. The semantic `text-secondary` role maps to Graphite Ink; size, weight, spacing, and placement provide secondary hierarchy.
- **Fog Rule** (`#e1e4e8`): Hairline borders and dividers.
- **Field Border Light** (`rgba(56, 58, 66, 0.6)`): A 60%-opacity derivative of canonical Graphite Ink used only for resting form-control boundaries. Against Fog Paper it exceeds the WCAG 2.2 non-text contrast minimum of 3:1.

### Neutral (dark mode)

- **Atom Slate** (`#282c34`): Page background. The Atom One editor bg.
- **Atom Slate Deep** (`#21252b`): Surface + alt-muted background — intentionally identical for "surface" and "muted" roles, which flattens the card/page contrast.
- **Atom Fog** (`#abb2bf`): Primary text.
- **Atom Ash** (`#5c6370`): Canonical Atom One Dark comment color. At about 2.32:1 on atom-slate, it does not meet WCAG AA for normal text and is retained only as a palette reference. The semantic `text-secondary` role maps to Atom Fog.
- **Atom Rule** (`#3e4451`): Hairline borders and dividers.
- **Field Border Dark** (`rgba(171, 178, 191, 0.6)`): A 60%-opacity derivative of canonical Atom Fog used only for resting form-control boundaries. Against Atom Slate it exceeds the WCAG 2.2 non-text contrast minimum of 3:1.

### Semantic Accents

- **Editor Green** (`#50a14f` / `#98c379`): Credential checkmarks in About, feature bullets in Services.
- **Editor Amber** (`#c18401` / `#e5c07b`): Star glyph in reviews. Canonical light yellow provides about 3.06:1 against fog-paper, meeting the 3:1 non-text contrast requirement for the star graphics.
- **Editor Red** (`#e45649` / `#e06c75`): Reserved for error states. Not currently rendered.
- **Editor Cyan** (`#0184bc` / `#56b6c2`): Only used as the gradient partner on circular review avatars.

**The One-Accent Rule.** Editor Blue is the only saturated color on the site. It signals action, attention, and active state. If a new surface needs to highlight something, the answer is weight, scale, or space — not a second accent color. Reaching for purple/orange/cyan as decorative accents is prohibited.

**The Canonical-Hue Rule.** Base hues must come from the Atom One palette. Opacity variants of those tokens are allowed for borders, shadows, and interaction states, including Tailwind modifiers such as `border-primary/20`. They must not replace accessible solid colors for readable text.

**The Secondary-Text Rule.** Canonical Atom One comment colors remain available as palette references but fail normal-text contrast in both themes. `text-secondary` therefore resolves to the theme foreground color. Secondary hierarchy comes from type size, weight, spacing, and placement rather than a noncanonical gray.

**The Warm-Neutral Rule.** No `#000`, no `#fff` as backgrounds. Light mode backgrounds tint slightly warm (fog-paper `#fafafa` over pure `#ffffff`). Dark mode backgrounds use Atom's slate-blue, not true black. If a surface looks absolutely neutral, it is wrong.

## 3. Typography

**Display Font:** Inter (with system-ui, sans-serif fallback)
**Body Font:** Inter (with system-ui, sans-serif fallback)
**Label/Mono Font:** Inter — no distinct mono face is loaded.

**Character:** Inter at every role. Hierarchy comes from size and weight contrast (400 / 600 / 700) rather than from family contrast. This keeps the system calm and readable but gives up the visual differentiation a display serif or a mono-label face would provide. The result is correct but unopinionated.

### Hierarchy

- **Display** (700, `clamp(2.25rem, 5vw, 3.75rem)`, line-height 1.1): Hero H1 only. One per page.
- **Headline** (700, `clamp(1.875rem, 4vw, 3rem)`, line-height 1.15): Section H2s — About, Services, Reviews, FAQ, Contact.
- **Title** (600, 1.5rem, line-height 1.25): Card H3s — service names, form section titles, footer column heads.
- **Body Lead** (400, 1.25rem, line-height 1.6): Hero subtitle and section-intro copy. Caps around 55–60ch naturally via `max-w-2xl`.
- **Body Large** (400, 1.125rem, line-height 1.7): Long-form article text and the author bridge. Pull quotes and subordinate article headings reuse this size; italic or 600 weight and local line-height differences distinguish their roles.
- **Body** (400, 1rem, line-height 1.6): Card body, form labels, default paragraph copy. Should cap at 65–75ch.
- **Label** (600, 0.875rem, line-height 1.2): Form labels, nav links, footer metadata.

### Named Rules

**The Scale-Over-Style Rule.** Because there is one family, the hierarchy must not collapse. The weight ratio between adjacent steps is a minimum of 400 → 600 → 700. Never set a card H3 in 500 or hero copy in 300 — the hierarchy stops reading.

**The Measure Rule.** Body copy is capped at 65–75 characters per line. The About bio, FAQ answers, and blog body already respect this via `max-w-2xl` and `prose`-style constraints. New long-form surfaces inherit this.

**The No-Serif Default.** The system is single-family sans. Introducing a serif display face is a major visual decision, not a tweak — it belongs to a `shape` pass, not an ad-hoc edit.

## 4. Elevation

The system's depth language is **hairline-on-surface at rest, color shifts on hover**. Cards do not cast shadows at rest. They sit on a solid surface (`pure-surface` in light, `atom-slate-deep` in dark) with a 1-pixel border (`fog-rule` / `atom-rule`). The `.surface-hairline` utility in `global.css` encodes this: surface background + 1px border + 8px radius, no shadow, no blur, no opacity.

Depth is expressed by:

- **Surface vs. page.** Cards are slightly brighter than the page (pure-white on fog-paper in light; atom-slate-deep on atom-slate in dark — a subtle contrast by design, since atom-slate and atom-slate-deep are close values).
- **Hairline border.** The 1px edge separates the card from the page without announcing itself.
- **Hover color shift** on cards that are interactive (review cards, article cards): the border darkens toward `primary/20` while the card stays put. No Y-axis motion.
- **Scroll-lifted header.** The fixed header is solid surface + hairline at rest. After 8 pixels of scroll the `.is-scrolled` class adds a soft 2×8 shadow — the one place in the system where a shadow appears at rest, and only after the reader has started scrolling.

This is a single-material system — hairline-on-surface at rest, border-color or motion on hover. There is no "raised" / "overlay" / "modal" elevation tier; the site does not use modals. No ambient card shadows exist in the rendered output.

### Shadow Vocabulary

The site ships four shadows, all narrow and purposeful.

- **Button Glow (light)** (`box-shadow: 0 4px 15px rgba(64, 120, 242, 0.3)` → hover `0 6px 20px rgba(64, 120, 242, 0.4)`): Primary button only. A blue-tinted drop shadow that intensifies on hover. The one place the system uses a colored shadow at rest.
- **Button Glow (dark)** (`box-shadow: 0 4px 15px rgba(97, 175, 239, 0.3)` → hover `0 6px 20px rgba(97, 175, 239, 0.4)`): Dark-theme primary button.
- **Header Scroll Shadow (light)** (`box-shadow: 0 2px 8px 0 rgba(56, 58, 66, 0.06)`): Appears on the fixed header only after the page scrolls past 8px. Intentionally quiet — barely perceptible — so the header feels anchored but never looks like a floating chrome.
- **Header Scroll Shadow (dark)** (`box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.35)`): The dark equivalent is heavier because dark-mode shadows need more opacity to register on `atom-slate`.

There are two focus mechanisms, both blue, neither of which is an "ambient" shadow:

- **Form focus ring** (Tailwind `focus:ring-2 focus:ring-accent`): 2px box-shadow in editor-blue, emitted by the input on `:focus`. Applied to every `<input>`, `<select>`, and `<textarea>` in the contact form.
- **Non-form focus ring** (`@utility focus-ring` in `global.css`): `outline: 2px solid var(--ao-blue)` with `outline-offset: 2px`, emitted on `:focus-visible`. Applied to every link, button, nav item, social disc, theme-toggle button, mobile-menu toggle, and skip link. The outline inherits the element's own border-radius, so round buttons stay round when focused.

### Named Rules

**The No-Shadow-At-Rest Rule.** Cards, form blocks, and container surfaces do not carry ambient shadows. Depth comes from the 1-pixel hairline edge plus the surface-vs-page contrast. Reaching for a drop shadow to make a card "pop" is a violation — the discipline is that cards don't pop.

**The Purposeful-Motion Rule.** Prefer transforms and opacity for decorative motion so state changes stay smooth without disturbing document flow. Do not animate layout properties casually. Disclosure controls may transition height when the motion communicates expanded state, preserves flow, uses the implemented `interpolate-size` approach, and respects reduced-motion preferences.

**The One-Material Rule.** There is one card material (hairline on surface) and one elevated element (the primary button, which earns its glow because it is the one action the page is asking the reader to take). Do not introduce a third surface material for "featured," "premium," or "highlighted" cards. Emphasis comes from type weight, position, and space — not from a new material.

## 5. Components

Every component shares the same shape vocabulary: 8px radius, 16–32px internal padding, Inter at its role-appropriate size, and hairline-on-surface treatment where applicable.

### Buttons

- **Shape:** 8px radius.
- **Primary** (`.btn-primary`): Editor-Blue background, pure-surface (white) text, 16×32px padding, 600 weight, theme-aware blue glow shadow. Hover lifts `translateY(-1px)` and intensifies the shadow. Used for Hero CTA, contact form submit, and any "Request a Consultation" call.
- **Secondary** (inline Tailwind, no named class): Transparent background, primary text, 2px fog-rule border, 16×32px padding. Hover moves to `bg-muted` (pale-fog / atom-slate-deep). No lift, no shadow — the secondary is quiet by design. Reserved for places where the reader genuinely has two meaningful next steps at the same hierarchy (e.g. a services page pairing "Request a Consultation" with "See the full fee schedule"). **Not** used to link to a section that's already visually next on scroll — a button that scrolls one screen is noise.
- **Icon-only** (theme toggle, social links, mobile menu toggle): 36–44px square, 4–8px radius, no shadow, color-only hover state. Social icons on the footer use `rounded-full` (pill) instead of 8px.

### Cards / Containers (`.surface-hairline`)

One card material across the site. The `@utility surface-hairline` in `global.css` is the single source of truth: surface background, 1px border, 8px radius, no shadow at rest, no blur.

- **Corner Style:** 8px radius, always.
- **Background:** `pure-surface` (`#ffffff`) in light, `atom-slate-deep` (`#21252b`) in dark. Solid, fully opaque.
- **Border:** 1px `fog-rule` (`#e1e4e8`) in light, 1px `atom-rule` (`#3e4451`) in dark.
- **Shadow Strategy:** none at rest. See §4 for the full shadow vocabulary.
- **Internal Padding:** 32px (`p-8`) default. Review card, Contact form, Hero right-column panel, Reviews summary block, blog empty-state card.
- **Hover (interactive cards only):** `hover:border-primary/20` — the border shifts toward a blue-tinted rule, the card itself does not move. Applied to `ReviewCard`, `ArticleCard`, and the Reviews carousel arrow buttons. Non-interactive cards (Hero panel, Contact form, About credentials list) have no hover state.
- **Vertical rhythm as separator.** The Services list and About credentials list use `border-t` / `border-b` hairline rules between rows instead of wrapping each row in its own card — same hairline material, different structural role. Avoids nesting hairline cards inside hairline sections.

### Inputs / Fields

- **Shape:** 8px radius.
- **Background:** Fog-paper in light, atom-slate in dark — explicitly not `pure-surface`, so the field reads as a recess within the white hairline card it sits inside.
- **Border:** 1px field-border: 60% canonical foreground (`graphite-ink` in light, `atom-fog` in dark). It remains within the Atom One palette and provides at least 3:1 contrast against the field background for WCAG 2.2 non-text contrast.
- **Height:** 48px minimum (touch target).
- **Focus:** border becomes editor-blue, 3px blue-at-10%-opacity halo via `box-shadow`. No border-width change (no layout shift).
- **Textareas:** same treatment, `resize-y` permitted.

### Navigation

- **Header:** 96px tall, fixed, full-width. Solid `pure-surface` / `atom-slate-deep` background with a 1px `fog-rule` bottom border at rest. After 8px of scroll the `.is-scrolled` class adds the quiet Header Scroll Shadow (see §4). Logo height 48–84px scaling up by breakpoint. Desktop nav: inline text links, 600 weight, hover color shift to editor-blue, `.active` state uses editor-blue on pale-fog background with 8px radius.
- **Theme toggle:** three adjacent icon buttons (sun / moon / monitor) inside a 1px-bordered pill container, 4px radius, 36×36 each. Active state: editor-blue background, white icon. Keyboard-navigable as an ARIA `radiogroup` with arrow-key focus cycling.
- **Mobile menu:** slide-down sheet, `bg-background` with 1px fog-rule top border, list of nav links in the same style as desktop but stacked. Hamburger icon (Lucide `menu`) toggles.

### Review Card

- Distinguishing signature: a 48px round avatar with the reviewer's initial on a linear-gradient from editor-blue to editor-cyan. This is the only place the system intentionally uses two accent colors together.
- Horizontal scroll snap on mobile (snap-start), 2-up at `md`, 3-up at `lg`. Previous/next chevron controls sit together below the track on narrow screens and move to the track sides at `md`. 8px radius, hairline on surface, 32px padding.
- The track preserves native list semantics. Each review includes screen-reader-only `Review X of Y` position text, and expandable text is connected to its disclosure button.
- Star rating is `mdi:star` SVG in `text-star` (editor-yellow), not a Unicode glyph.
- Read-more disclosure expands via a `height: 0 ↔ auto` transition using `interpolate-size: allow-keywords` (declared on `html` in `global.css`). Review and FAQ disclosures are the only height-animated controls in the system.

### Service Card

- Uses the hairline-row treatment rather than a boxed card: each service is an `<li>` inside a single `<ol>` with `border-t` / `border-b` dividers between rows. Leads with a 48×48px icon in editor-blue using the Lucide set (`lucide:home`, `lucide:plane`, `lucide:badge-check`, `lucide:shield`). Feature bullets use `lucide:check` SVG icons in editor-green. No Unicode glyphs; no per-service card stack.

### Signature Component: The Credential Footer

The footer's bottom bar shows the RCIC insignia (theme-swapped color/B&W via `.light-only` / `.dark-only`) and the CAPIC logo at 80px height, above copyright. Both badges link to their official verification sources. This is load-bearing for PRODUCT.md's "Credentials do the selling" principle and should never be demoted, compressed, or moved above the fold as mere ornament.

## 6. Do's and Don'ts

Concrete guardrails for new surfaces and revisions. Carries PRODUCT.md's anti-references through to visual rules.

**Honesty is the aesthetic, not asceticism.** PRODUCT.md holds two modes in tension — _warm & human_ and _precise & rigorous_. This section used to weight only the second. The bans below are narrow and specific (outcome guarantees, manufactured urgency, dream-selling, clickbait pathway-language). Warmth, invitation, first-person voice, and quiet factual reassurance are not banned — they are required by the _warm & human_ half of the brand. A site that reads as clinical-only fails PRODUCT.md as surely as one that reads as hypey.

### Do:

- **Do** use `#4078f2` (light) / `#61afef` (dark) as the single accent. Action, focus, active state, links — one color.
- **Do** cap body copy at 65–75ch measure.
- **Do** use a 400 → 600 → 700 Inter weight ladder for hierarchy; never collapse the contrast.
- **Do** keep every radius at 8px unless the element is a pill / circle (social discs, avatars).
- **Do** keep interactive cards stationary on hover and signal state through the implemented border-color treatment. Reserve translation for contained affordances such as chevrons and the primary button.
- **Do** keep the warm neutrals: fog-paper over pure white in light, atom-slate over true black in dark.
- **Do** give the RCIC + CAPIC credential badges structural weight — 80px min, footer-anchored, linked to official verification sources, never decorative.
- **Do** respect `prefers-reduced-motion` — the global.css override zeros animation durations; new components inherit this automatically if they use CSS transitions.
- **Do** use SVG icons only: Lucide for UI and service categories, `mdi:star` for the star glyph in reviews, Simple Icons for socials. Never Unicode glyphs for structural icons.
- **Do** invite the reader. Copy can be warm, first-person, and human ("I take care of both," "I work with clients in English, French, Arabic, and Greek"). Warmth is not marketing theatre — faceless distance is.
- **Do** pair a primary CTA with a calm secondary path **only when the second door is genuinely elsewhere**. A secondary button that scrolls to the section directly underneath the hero is furniture, not a UX affordance — the reader scrolls past it for free. Reserve secondary CTAs for links off-page, to later sections, or to content the next scroll would not reveal.
- **Do** ground claims in specifics. Office location, languages, license number, the exact tribunals Brigitte appears before. Specificity is the warmth — it's how a real practitioner sounds, not a firm. Put each specific where it actually earns the pixels: the Hero carries a single quiet fact (languages, because they affect the whole engagement — not just the consultation); the office and service area live in Contact and the footer, where a reader asking "where is she?" is actually asking.

### Don't:

- **Don't** introduce a second accent color. Reaching for purple, orange, or cyan to "add life" is prohibited. The one-accent discipline is the discipline.
- **Don't** use `#000` or `#fff` as backgrounds. The neutrals are tinted on purpose.
- **Don't** add a third surface material or a card drop-shadow at rest. Hairline-on-surface is the one card material. Emphasis comes from type weight, position, and space, not from a new material or a raised elevation tier. No "featured" shadow, no overlay, no modal.
- **Don't** animate layout properties casually. Prefer transforms and opacity for decorative motion; reserve height transitions for disclosure controls that communicate expanded state, preserve flow, use `interpolate-size`, and respect reduced-motion preferences.
- **Don't** ship bounce or elastic easing. The system is `ease-out`; motion decelerates into rest, never overshoots.
- **Don't** stack card materials. A hairline card inside a hairline card is prohibited — if a region inside a card needs visual separation, use a hairline `border-t` divider or a nested `bg-muted` block, not a second bordered container.
- **Don't** introduce border-left > 1px as a colored stripe on cards, callouts, or list items. Full borders, tinted backgrounds, or no border.
- **Don't** use `background-clip: text` with a gradient. The single-accent rule covers text color too. Gradient text is banned regardless.
- **Don't** write hero copy in the form "Your Journey to Canada Starts Here," "We make your Canadian dream come true," "Your pathway starts here," or any phrasing that promises or implies an outcome Brigitte cannot control. The ban is on **outcome-language and pathway-cliché**, not on inviting the reader; "Meet Brigitte" and "Request a Consultation" are correct.
- **Don't** add manufactured-urgency elements — countdowns, "X spots left," "act now before rules change." PRODUCT.md rules these out absolutely.
- **Don't** use stock immigration imagery: airport-arrivals families, maple leaves, red-and-white flag flourishes, Toronto-skyline-at-sunset, passport-in-hand. Banned site-wide.
- **Don't** build testimonial walls of identical 5-star cards. Reviews render as real Google reviews with real metadata (author, date, sourced rating) — never as marketing collateral.
- **Don't** reach for law-firm navy-and-gold, serifs, or marble-lobby visual vocabulary. Brigitte is not a white-shoe firm.
- **Don't** collapse the faceless-consultancy "we" voice in. Copy reads in the first person ("I") when Brigitte is speaking.
