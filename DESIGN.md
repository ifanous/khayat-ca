---
name: Brigitte Khayat — Immigration & Refugee Consulting
description: Single-practitioner RCIC-IRB marketing site. Atom One editor palette, Inter throughout, glassmorphism cards on neutral backgrounds.
colors:
  # --- Light theme (default) ---
  fog-paper: "#fafafa"          # page background (light)
  pale-fog: "#f0f0f1"           # alt/muted surface (light)
  pure-surface: "#ffffff"       # cards / inputs (light)
  graphite-ink: "#383a42"       # primary text (light)
  ash-comment: "#6b6c72"        # secondary text (light), raised from original #a0a1a7 for AA
  fog-rule: "#e1e4e8"           # borders/dividers (light)
  # Atom One accents (shared vocabulary, values shift per theme)
  editor-blue: "#4078f2"        # primary accent / CTA (light)
  editor-green: "#50a14f"       # success / credential tick (light)
  editor-yellow-amber: "#946600" # stars / warning (light) — darkened from #c18401 for AA
  editor-red: "#e45649"         # error (light)
  editor-cyan: "#0184bc"        # gradient partner on review avatars (light)
  editor-purple: "#a626a4"      # unused in UI today, reserved (light)
  editor-orange: "#d19a66"      # unused in UI today, reserved (light)

  # --- Dark theme ---
  atom-slate: "#282c34"         # page background (dark)
  atom-slate-deep: "#21252b"    # surface + alt/muted (dark) — intentionally identical
  atom-fog: "#abb2bf"           # primary text (dark)
  atom-ash: "#90929a"           # secondary text (dark), raised from original #5c6370 for AA
  atom-rule: "#3e4451"          # borders/dividers (dark)
  atom-blue: "#61afef"          # primary accent / CTA (dark)
  atom-green: "#98c379"         # success (dark)
  atom-yellow: "#e5c07b"        # stars / warning (dark)
  atom-red: "#e06c75"           # error (dark)
  atom-cyan: "#56b6c2"          # gradient partner (dark)
  atom-purple: "#c678dd"        # reserved (dark)
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
  sm: "4px"   # theme-toggle inner buttons
  md: "8px"   # every card, input, button on the site
  full: "9999px"  # social icon discs, review avatars
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
  button-primary-hover:
    backgroundColor: "{colors.editor-blue}"
    textColor: "{colors.pure-surface}"
    rounded: "{rounded.md}"
    padding: "16px 32px"
  button-secondary:
    backgroundColor: "{colors.pure-surface}"
    textColor: "{colors.graphite-ink}"
    rounded: "{rounded.md}"
    padding: "16px 32px"
  card-glass:
    backgroundColor: "{colors.pure-surface}"
    textColor: "{colors.graphite-ink}"
    rounded: "{rounded.md}"
    padding: "32px"
  input-field:
    backgroundColor: "{colors.fog-paper}"
    textColor: "{colors.graphite-ink}"
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

The system as it stands today is the Atom One syntax-highlighting palette pressed into service as a professional-credentials site. Inter at every size. 8-pixel rounded corners everywhere. Glassmorphism cards floating on pale-fog backgrounds in light mode, and on deep slate in dark. One blue does all the work of a CTA; green ticks mark credentials; amber fills star ratings. Depth comes from backdrop blur and a 1-to-6-pixel translate-Y on hover.

The surface reads as clean, technical, and competent — the aesthetic of a developer tool repurposed for a services site. It is legible, accessible in contrast, and quiet, which matches PRODUCT.md's "calm over conversion" principle well. It is also aesthetically borrowed. The palette was not designed for this brand; it carries a developer-editor memory that competes with the skeptic-first, credential-first identity PRODUCT.md defines.

This file captures what exists today so the system is legible to future agents. The **Known Tensions** below flag where the current system pulls against PRODUCT.md, and the **Don'ts** section encodes guardrails that apply when new surfaces are built or existing ones revised.

**Key Characteristics:**

- Atom One Light / Atom One Dark as the two color moods — developer-editor neutrals and one blue accent.
- Inter for every role, weight contrast (400 / 600 / 700) carrying hierarchy.
- Glassmorphism as the default card treatment across About, Services, Reviews, Contact, Footer.
- One accent blue used at ≤10% of pixel area — the Restrained color strategy.
- 8px radius, uniformly.
- Hover motion: `translateY(-1px)` to `-6px` on cards and buttons, 200–300ms, ease out.

**Known Tensions with PRODUCT.md** (carried forward as design debt, not resolved in this pass):

1. **Glass everywhere is SaaS-coded.** PRODUCT.md calls for a "grounded, spacious, text-forward, credential-first" feel. Glass + backdrop blur + hover-lift is closer to 2021 SaaS marketing than to "trusted senior practitioner." The shared design laws treat decorative glass as an absolute ban.
2. **Atom One is not a brand palette.** It is a code-editor theme. For a single-practitioner brand, it provides no differentiation — any of a dozen consultants could use the same palette.
3. **The hero headline** ("Your Journey to Canada Starts Here") matches the exact clickbait-pathway language PRODUCT.md lists as the explicit enemy. This is a copy problem, not a token problem, but it is listed here because DESIGN.md agents will see it and should not treat it as correct.

These are noted so future `$impeccable critique` / `shape` / `craft` passes can address them deliberately rather than silently inherit them.

## 2. Colors: The Atom One Palette (As-Built)

A two-theme system. Light mode uses warm-leaning near-white surfaces against deep graphite text. Dark mode is the Atom One editor background — slate-blue-gray, never true black. One accent blue carries every CTA and link. Four semantic accents (green/amber/red/cyan) appear only at credential, status, and rating moments. The remaining Atom One hues (purple, orange) are defined in tokens but not used in the current UI.

### Primary
- **Editor Blue** (`#4078f2` light / `#61afef` dark): Every call-to-action, active nav link, form focus ring, link underline, and the accent color of the review-card avatar gradient. The one color on the site that is allowed to be saturated.

### Neutral (light mode)
- **Fog Paper** (`#fafafa`): Page background. The default resting surface of the whole site.
- **Pale Fog** (`#f0f0f1`): Alt/muted background — appears on Services and Contact section backgrounds to break the Hero/About rhythm.
- **Pure Surface** (`#ffffff`): Card interiors, form fields, header bar. Every card is pure white behind a glass overlay.
- **Graphite Ink** (`#383a42`): Primary body and heading color. Slightly warm, never true black.
- **Ash Comment** (`#6b6c72`): Secondary text — subheadings, footer copy, review metadata. Raised from the original `#a0a1a7` to pass 4.5:1 on fog-paper.
- **Fog Rule** (`#e1e4e8`): Borders, dividers, form-input strokes.

### Neutral (dark mode)
- **Atom Slate** (`#282c34`): Page background. The Atom One editor bg.
- **Atom Slate Deep** (`#21252b`): Surface + alt-muted background — intentionally identical for "surface" and "muted" roles, which flattens the card/page contrast.
- **Atom Fog** (`#abb2bf`): Primary text.
- **Atom Ash** (`#90929a`): Secondary text — raised from the original `#5c6370` to pass 4.5:1 on atom-slate.
- **Atom Rule** (`#3e4451`): Borders.

### Semantic Accents
- **Editor Green** (`#50a14f` / `#98c379`): Credential checkmarks in About, feature bullets in Services.
- **Editor Amber** (`#946600` / `#e5c07b`): Star glyph in reviews. Light mode darkened from `#c18401` to pass 4.5:1.
- **Editor Red** (`#e45649` / `#e06c75`): Reserved for error states. Not currently rendered.
- **Editor Cyan** (`#0184bc` / `#56b6c2`): Only used as the gradient partner on circular review avatars.

**The One-Accent Rule.** Editor Blue is the only saturated color on the site. It signals action, attention, and active state. If a new surface needs to highlight something, the answer is weight, scale, or space — not a second accent color. Reaching for purple/orange/cyan as decorative accents is prohibited.

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
- **Body** (400, 1rem, line-height 1.6): Card body, form labels, default paragraph copy. Should cap at 65–75ch.
- **Label** (600, 0.875rem, line-height 1.2): Form labels, nav links, footer metadata.

### Named Rules

**The Scale-Over-Style Rule.** Because there is one family, the hierarchy must not collapse. The weight ratio between adjacent steps is a minimum of 400 → 600 → 700. Never set a card H3 in 500 or hero copy in 300 — the hierarchy stops reading.

**The Measure Rule.** Body copy is capped at 65–75 characters per line. The About bio, FAQ answers, and blog body already respect this via `max-w-2xl` and `prose`-style constraints. New long-form surfaces inherit this.

**The No-Serif Default.** The system is single-family sans. Introducing a serif display face is a major visual decision, not a tweak — it belongs to a `shape` pass, not an ad-hoc edit.

## 4. Elevation

The system uses **glassmorphism + shadow-hover + translate-Y** as its depth language. Every card, the header, and the footer's content block render as `.glass`: a 10px backdrop blur over an 80%-opacity surface, with a 32px-blur ambient drop shadow. On hover, cards lift 1–6 pixels with a 300ms ease-out transition. No inner shadows, no layered stacks.

This is a single-depth system — glass at rest, glass-lifted on hover. There is no "raised" / "overlay" / "modal" elevation tier; the site does not use modals. The header's glass comes through a `border-bottom`, not a shadow.

### Shadow Vocabulary

- **Glass Ambient (light)** (`box-shadow: 0 8px 32px 0 rgba(56, 58, 66, 0.1)`): Default card resting shadow in light mode. Soft, graphite-tinted.
- **Glass Ambient (dark)** (`box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3)`): Default card resting shadow in dark mode. Heavier, supports the slate background.
- **Button Glow (light)** (`box-shadow: 0 4px 15px rgba(64, 120, 242, 0.3)` → hover `0 6px 20px rgba(64, 120, 242, 0.4)`): Primary button only. A blue-tinted drop shadow that intensifies on hover.
- **Button Glow (dark)** (`box-shadow: 0 4px 15px rgba(97, 175, 239, 0.3)` → hover `0 6px 20px rgba(97, 175, 239, 0.4)`): Dark-theme primary button.
- **Focus Ring** (`box-shadow: 0 0 0 3px rgba(64, 120, 242, 0.1)`): Form-field focus halo. Blue at 10% opacity, always visible.

### Named Rules

**The Glass-At-Rest Rule (as-built).** Every card ships with `.glass` applied. This is what the system currently does; it is not an endorsement. See Known Tensions above and Don'ts below.

**The Translate-Only-On-Hover Rule.** Hover motion lives in `transform: translateY(…)`. Never animate layout properties (width, height, margin, padding). Transforms are GPU-composited; layout animations thrash.

**The One-Depth Rule.** There is a resting depth and a hover depth. That is it. Do not stack glass on glass, do not introduce a third elevation tier for "featured" or "premium" cards.

## 5. Components

Every component shares the same shape vocabulary: 8px radius, 16–32px internal padding, Inter at its role-appropriate size, and glass treatment where applicable.

### Buttons

- **Shape:** 8px radius.
- **Primary** (`.btn-primary`): Editor-Blue background, pure-surface (white) text, 16×32px padding, 600 weight, theme-aware blue glow shadow. Hover lifts `translateY(-1px)` and intensifies the shadow. Used for Hero CTA, contact form submit, and any "Request a Consultation" call.
- **Secondary** (inline Tailwind, no named class): Pure-surface (white) background, graphite-ink text, 2px fog-rule border, 16×32px padding. Hover moves to pale-fog background, `translateY(-1px)`. Used for the Hero "Meet Brigitte" secondary CTA.
- **Icon-only** (theme toggle, social links, mobile menu toggle): 36–44px square, 4–8px radius, no shadow, color-only hover state. Social icons on the footer use `rounded-full` (pill) instead of 8px.

### Cards / Containers (`.glass`)

- **Corner Style:** 8px radius, always.
- **Background:** 80%-opacity surface over a 10px backdrop blur. Light mode: `rgba(255,255,255,0.8)`. Dark mode: `rgba(33,37,43,0.8)`.
- **Border:** 1px `rgba(255,255,255,0.2)` (light) / `rgba(255,255,255,0.1)` (dark).
- **Shadow Strategy:** Glass Ambient — see Elevation.
- **Internal Padding:** 32px (`p-8`) default. About, Services, Reviews, Contact, Footer all use this.
- **Hover:** `translateY(-1px)` to `translateY(-6px)` depending on the surface. Reviews and Services lift more (`-1.5` to `-6`); About and Contact lift less (`-0.5`).

### Inputs / Fields

- **Shape:** 8px radius.
- **Background:** Fog-paper in light, atom-slate in dark — explicitly not white, so the field reads as a recess within the white glass card it sits inside.
- **Border:** 1px fog-rule.
- **Height:** 48px minimum (touch target).
- **Focus:** border becomes editor-blue, 3px blue-at-10%-opacity halo via `box-shadow`. No border-width change (no layout shift).
- **Textareas:** same treatment, `resize-y` permitted.

### Navigation

- **Header:** 96px tall, fixed, full-width, `.glass` background with a 1px fog-rule bottom border. Logo height 48–84px scaling up by breakpoint. Desktop nav: inline text links, 600 weight, hover color shift to editor-blue, `.active` state uses editor-blue on pale-fog background with 8px radius.
- **Theme toggle:** three adjacent icon buttons (sun / moon / monitor) inside a 1px-bordered pill container, 4px radius, 36×36 each. Active state: editor-blue background, white icon. Keyboard-navigable as an ARIA `radiogroup` with arrow-key focus cycling.
- **Mobile menu:** slide-down sheet, `bg-background` with 1px fog-rule top border, list of nav links in the same style as desktop but stacked. Hamburger icon (Lucide `menu`) toggles.

### Review Card

- Distinguishing signature: a 48px round avatar with the reviewer's initial on a linear-gradient from editor-blue to editor-cyan. This is the only place the system intentionally uses two accent colors together.
- Horizontal scroll snap on mobile, 3-column grid at `lg`. 8px radius, glass, 32px padding.
- Star rating as ★ character (text), not SVG — the only structural icon on the site that is not an SVG. (Flag: consider replacing with Lucide `star` for consistency with the "no emoji/character icons" site-level rule.)

### Service Card

- Uses the glass card vocabulary. Leads with a 48×48px icon in editor-blue (`mdi:*` from Material Design Icons Iconify set). Feature bullets use a `✓` character in editor-green, again inconsistent with the SVG-icons-only site rule — flagged as existing drift to resolve.

### Signature Component: The Credential Footer

The footer's bottom bar shows the RCIC insignia (theme-swapped color/B&W via `.light-only` / `.dark-only`) and the CAPIC logo at 80px height, above copyright. This is load-bearing for PRODUCT.md's "Credentials do the selling" principle and should never be demoted, compressed, or moved above the fold as mere ornament.

## 6. Do's and Don'ts

Concrete guardrails for new surfaces and revisions. Carries PRODUCT.md's anti-references through to visual rules.

### Do:

- **Do** use `#4078f2` (light) / `#61afef` (dark) as the single accent. Action, focus, active state, links — one color.
- **Do** cap body copy at 65–75ch measure.
- **Do** use a 400 → 600 → 700 Inter weight ladder for hierarchy; never collapse the contrast.
- **Do** keep every radius at 8px unless the element is a pill / circle (social discs, avatars).
- **Do** lift cards on hover via `transform: translateY(…)` in 200–300ms ease-out. Not margin, not padding.
- **Do** keep the warm neutrals: fog-paper over pure white in light, atom-slate over true black in dark.
- **Do** give the RCIC + CAPIC credential badges structural weight — 80px min, footer-anchored, never decorative.
- **Do** respect `prefers-reduced-motion` — the global.css override zeros animation durations; new components inherit this automatically if they use CSS transitions.
- **Do** use SVG icons (Lucide for UI, MDI for service categories, Simple Icons for socials). Never Unicode glyphs for structural icons — the existing `★` in reviews and `✓` in service cards are drift, not precedent.

### Don't:

- **Don't** introduce a second accent color. Reaching for purple, orange, or cyan to "add life" is prohibited. The one-accent discipline is the discipline.
- **Don't** use `#000` or `#fff` as backgrounds. The neutrals are tinted on purpose.
- **Don't** add a third elevation tier. Glass-at-rest and glass-on-hover are the full vocabulary. No "featured" shadow, no overlay, no modal.
- **Don't** animate `width`, `height`, `margin`, `padding`, `top`, `left`. Only `transform` and `opacity`.
- **Don't** ship bounce or elastic easing. The system is `ease-out`; motion decelerates into rest, never overshoots.
- **Don't** stack glass on glass. A glass card inside a glass card is prohibited.
- **Don't** introduce border-left > 1px as a colored stripe on cards, callouts, or list items. Full borders, tinted backgrounds, or no border.
- **Don't** use `background-clip: text` with a gradient. The single-accent rule covers text color too. Gradient text is banned regardless.
- **Don't** write hero copy in the form "Your Journey to Canada Starts Here," "We make your Canadian dream come true," "Your pathway starts here." These are the exact clickbait-consultant patterns PRODUCT.md lists as the explicit enemy.
- **Don't** add manufactured-urgency elements — countdowns, "X spots left," "act now before rules change." PRODUCT.md rules these out absolutely.
- **Don't** use stock immigration imagery: airport-arrivals families, maple leaves, red-and-white flag flourishes, Toronto-skyline-at-sunset, passport-in-hand. Banned site-wide.
- **Don't** build testimonial walls of identical 5-star cards. Reviews render as real Google reviews with real metadata (author, date, sourced rating) — never as marketing collateral.
- **Don't** reach for law-firm navy-and-gold, serifs, or marble-lobby visual vocabulary. Brigitte is not a white-shoe firm.
- **Don't** collapse the faceless-consultancy "we" voice in. Copy reads in the first person ("I") when Brigitte is speaking.
