---
name: Pronos VIP
colors:
  surface: '#0f131d'
  surface-dim: '#0f131d'
  surface-bright: '#353944'
  surface-container-lowest: '#0a0e18'
  surface-container-low: '#171b26'
  surface-container: '#1c1f2a'
  surface-container-high: '#262a35'
  surface-container-highest: '#313540'
  on-surface: '#dfe2f1'
  on-surface-variant: '#d8c3ad'
  inverse-surface: '#dfe2f1'
  inverse-on-surface: '#2c303b'
  outline: '#a08e7a'
  outline-variant: '#534434'
  surface-tint: '#ffb95f'
  primary: '#ffc174'
  on-primary: '#472a00'
  primary-container: '#f59e0b'
  on-primary-container: '#613b00'
  inverse-primary: '#855300'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#b6ccff'
  on-tertiary: '#002e6a'
  tertiary-container: '#8ab0ff'
  on-tertiary-container: '#00408f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb8'
  primary-fixed-dim: '#ffb95f'
  on-primary-fixed: '#2a1700'
  on-primary-fixed-variant: '#653e00'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#0f131d'
  on-background: '#dfe2f1'
  surface-variant: '#313540'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Outfit
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  stat-numeric:
    fontFamily: Outfit
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-md: 1.5rem
  gutter-lg: 2rem
  margin: 1rem
  margin-md: 2rem
  margin-lg: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system establishes an elite, private-club atmosphere for sports forecasting. Combining the exclusivity of high-tier wealth management with the precision of high-stakes analytical betting, the experience projects confidence, precision, and verified authority. It directly counters the low-trust, neon-saturated aesthetic typical of conventional betting platforms through structured surfaces, deep charcoal foundations, and razor-sharp gold accents.

### Visual Style
- **Aesthetic Movement:** Executive Sports Club / High-Performance FinTech.
- **Surface Architecture:** Layered deep slate and obsidian substrates overlaid with micro-etched metallic outlines and ambient back-glows.
- **Emotional Intent:** Authority, discretion, mathematical edge, and immediate VIP recognition.

## Colors

The palette balances prestige with analytical rigor. Dark slate and obsidian grounds ensure high readability during late-night live event tracking, while targeted high-chroma accents prioritize critical data.

- **Primary Gold (`#F59E0B`):** Reserved for VIP tier privileges, prestige badges, premium unlocked states, and premier action indicators.
- **Secondary Profit Emerald (`#10B981`):** Applied exclusively to positive ROI, winning outcomes, live in-play indicators, and confirmed bankroll growth.
- **Tertiary Cyan/Blue (`#3B82F6`):** Employs balanced focus for general match fixtures, analytical percentages, and sport category categorization (Football, Tennis, Basketball).
- **Neutral Core (`#0B0F19` base, `#111827` elevated surface):** Deep blue-cast slate surfaces providing zero-glare, high-contrast operational staging.
- **Border / Ghost Rings (`rgba(245, 158, 11, 0.15)` and `rgba(255, 255, 255, 0.08)`):** Micro-borders defining card edges without visually fragmenting dense statistical dashboards.

## Typography

The pairing combines the architectural, luxury-sport geometry of Outfit for headlines and odds displays with the neutral, highly legible precision of Manrope for dense market data, analysis notes, and interface controls.

- **Odds & Values (`stat-numeric`):** Always render odds (`@1.85`), stake amounts, and strike rates with tabular figures enabled (`font-variant-numeric: tabular-nums`) to prevent alignment wobble across updating cards.
- **Capitalization:** Use uppercase styling exclusively on small meta labels (`label-md`) and sport-type badges with positive letter spacing (`+0.04em`) to maintain editorial authority.

## Layout & Spacing

A strictly managed vertical rhythm based on an 8-point system (0.5rem base) prevents clutter when aggregating multi-sport daily schedules.

### Responsive Breakpoints & Grids
- **Mobile (< 768px):** 4-column fluid grid. Full-bleed cards with `1rem` outer screen margin. Single-column card stacking.
- **Tablet (768px - 1024px):** 8-column layout. 2-column card grouping for active match slips and summary telemetry.
- **Desktop (> 1024px):** 12-column layout with a fixed max-width container of `1280px`. Left rail for navigation and VIP bankroll status; central 8 columns for ticket analysis feeds; right 4 columns for real-time odds fluctuations and VIP locks.

## Elevation & Depth

Visual hierarchy is constructed through luminous layering, frosted backdrops, and selective gold/emerald rim lights on absolute pitch backgrounds rather than standard dropshadows.

- **Level 0 (Canvas Base):** Solid deep background `#0B0F19`. Zero elevation.
- **Level 1 (Feed Cards & Panels):** Fill `#111827` with a 1px border `rgba(255, 255, 255, 0.06)`. Flat surface.
- **Level 2 (Interactive Cards / Focused Predictions):** Fill `#162032` with a 1px gradient stroke running from `rgba(245, 158, 11, 0.35)` to `transparent`. Soft ambient glow: `0 8px 24px -4px rgba(0, 0, 0, 0.6)`.
- **Level 3 (Modals, Overlays, Floating Action Slips):** Fill `rgba(17, 24, 39, 0.85)` with `backdrop-filter: blur(16px)` and subtle outer rim `rgba(245, 158, 11, 0.25)`. Elevation shadow: `0 16px 36px -8px rgba(0, 0, 0, 0.8)`.
- **VIP Accent Glow:** For locked or exclusive VIP cards, a soft radial gradient underlay (`rgba(245, 158, 11, 0.08)`) illuminates the upper-right corner.

## Shapes

The geometric form factor strikes a balance between contemporary sports agility and high-end club membership credentials. 

- **Level 2 (`roundedness: 2`):** Base components, odds pill selectors, and prediction chips inherit `0.5rem` (8px).
- **Cards & Slips:** Utilize `rounded-lg` (`1rem` / 16px) to house grouped sports data cleanly.
- **VIP Badges & Status Indicators:** Use full rounded-pill geometry (`rounded-full`) to differentiate transient status metadata from foundational content blocks.

## Components

### Buttons & Action Controls
- **Primary VIP CTA:** Solid gold background `#F59E0B`, text `#0B0F19`, font weight bold (`700`). On hover, scale 1.01 with a diffuse outer glow (`0 0 20px rgba(245, 158, 11, 0.4)`).
- **Secondary Action (Odds Selector):** Surface `#1E293B`, border `rgba(255, 255, 255, 0.1)`, text white. Active state triggers an emerald outline `#10B981` with emerald numeric text.
- **Ghost Action:** Transparent background, text `rgba(255, 255, 255, 0.7)`, hover background `rgba(255, 255, 255, 0.05)`.

### Prediction Ticket Cards
- **Card Header:** Sport indicator tag (e.g., Football / Champions League), kickoff timestamp, and confidence gauge bar (0 to 100% gradient fill).
- **Card Body:** Team pairing with high-legibility typographic hierarchy, followed by the specific market tip (e.g., "Over 2.5 Goals").
- **Card Footer:** Odd block paired with the direct confidence rating. Unlocked tips display explicit reasoning; locked VIP tips feature a frosted glass blur filter (`backdrop-filter: blur(8px)`) overlaid with a gold padlock badge and "Unlock Tip" trigger.

### Status Chips & Badges
- **Won (Gagné):** Solid green tint background (`rgba(16, 185, 129, 0.12)`), text `#10B981`, border `rgba(16, 185, 129, 0.3)`. Accompanied by a check icon.
- **In-Play (En cours):** Pulsing micro-dot indicator in amber (`#F59E0B`), background `rgba(245, 158, 11, 0.1)`, text `#FBBF24`.
- **VIP Exclusive:** Metallic gradient pill with gold micro-icon, border `rgba(245, 158, 11, 0.5)`.

### Form Fields & Inputs
- Dark surface `#0F172A`, inset hairline border `rgba(255, 255, 255, 0.12)`, placeholder text `#64748B`. Focus state transitions to a clean 1px border in `#F59E0B` with zero harsh outer ring offset.