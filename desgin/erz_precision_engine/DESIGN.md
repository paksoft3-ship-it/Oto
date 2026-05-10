---
name: ERZ Precision Engine
colors:
  surface: '#0c141c'
  surface-dim: '#0c141c'
  surface-bright: '#323a43'
  surface-container-lowest: '#070f17'
  surface-container-low: '#141c24'
  surface-container: '#182029'
  surface-container-high: '#232b33'
  surface-container-highest: '#2e363e'
  on-surface: '#dbe3ef'
  on-surface-variant: '#e6bdb9'
  inverse-surface: '#dbe3ef'
  inverse-on-surface: '#29313a'
  outline: '#ad8885'
  outline-variant: '#5d3f3d'
  surface-tint: '#ffb3ae'
  primary: '#ffb3ae'
  on-primary: '#68000c'
  primary-container: '#e11d2e'
  on-primary-container: '#fff8f7'
  inverse-primary: '#c0001f'
  secondary: '#c2c7d0'
  on-secondary: '#2c3138'
  secondary-container: '#42474f'
  on-secondary-container: '#b1b5bf'
  tertiary: '#bfc7d4'
  on-tertiary: '#29313b'
  tertiary-container: '#6c747f'
  on-tertiary-container: '#f9faff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad7'
  primary-fixed-dim: '#ffb3ae'
  on-primary-fixed: '#410004'
  on-primary-fixed-variant: '#930015'
  secondary-fixed: '#dee2ec'
  secondary-fixed-dim: '#c2c7d0'
  on-secondary-fixed: '#171c23'
  on-secondary-fixed-variant: '#42474f'
  tertiary-fixed: '#dbe3f0'
  tertiary-fixed-dim: '#bfc7d4'
  on-tertiary-fixed: '#141c25'
  on-tertiary-fixed-variant: '#3f4752'
  background: '#0c141c'
  on-background: '#dbe3ef'
  surface-variant: '#2e363e'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  technical-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style

The design system is engineered to evoke the high-performance atmosphere of a specialist German automotive workshop. It targets owners of premium marques (BMW, Mercedes, Audi) who value technical expertise and surgical precision over generic service.

The visual style is a blend of **Minimalism** and **High-Contrast Corporate**, utilizing a dark, atmospheric palette to create a sense of exclusivity and technical depth. The interface should feel like a diagnostic tool: purposeful, efficient, and devoid of unnecessary ornamentation. Every element must communicate strength and reliability, mirroring the mechanical excellence of the vehicles serviced at the Nilüfer facility.

## Colors

The palette is anchored by **Deep Black (#0B0F14)** to provide a premium, infinite-depth backdrop. **Graphite** and **Metallic Gray** are used for structural layering, defining surfaces and containers without breaking the dark theme.

**Electric Red (#E11D2E)** is the "Ignition Color." It is reserved exclusively for high-priority actions, critical status alerts, and performance-oriented highlights. To maintain a professional engineering aesthetic, this red should never be used for large decorative surfaces; it must remain a high-impact accent.

For technical documentation and service details, a **Light Section Background (#F5F6F8)** is utilized to provide a stark, high-contrast environment that ensures perfect legibility for dense information, such as service checklists or pricing tables.

## Typography

This design system utilizes a dual-font strategy to balance brand confidence with technical utility. **Manrope** is used for headlines, providing a modern, bold, and slightly geometric appearance that feels engineered. **Inter** is the workhorse for body copy and UI labels, chosen for its exceptional clarity and neutral, functional tone.

A secondary **Technical Mono** (JetBrains Mono) is introduced for vehicle VIN numbers, part codes, and specific mechanical specs to reinforce the workshop/engineering narrative. Headings should utilize tight tracking and heavy weights to project authority, while body text requires generous line heights (1.6x) to ensure readability against dark backgrounds.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain a structured, architectural feel, while transitioning to a fluid model on mobile devices. 

- **Desktop:** 12-column grid with 24px gutters. Content is centered with a max-width of 1280px to prevent excessive line lengths.
- **Rhythm:** An 8px linear scale governs all padding and margins. Vertical rhythm should be generous between sections (e.g., 80px or 120px) to allow the premium imagery of German engineering to breathe.
- **Technical Insets:** Use consistent internal padding for cards and containers (typically 24px or 32px) to maintain a rigid, box-modeled structure consistent with technical blueprints.

## Elevation & Depth

In this design system, depth is achieved through **Tonal Layers** rather than traditional shadows. This mirrors the "flat" precision of engineering diagrams.

1.  **Level 0 (Floor):** Deep Black (#0B0F14) for the primary application background.
2.  **Level 1 (Surface):** Graphite (#161B22) for cards, navigation bars, and secondary sections.
3.  **Level 2 (Interaction):** Metallic Gray (#2E3640) for hover states and active UI elements.

Depth is further defined by **Low-Contrast Outlines**. Instead of drop shadows, use 1px borders in Metallic Gray or subtle highlights on the top edge of elements to simulate the chamfered edges of machined metal parts.

## Shapes

To reflect "Precision Engineering," the shape language is strictly **Sharp**. Elements like buttons, input fields, and cards should utilize 0px border-radii to convey a sense of strength, durability, and uncompromising accuracy. 

Where a softer touch is absolutely required for ergonomics in mobile contexts, a maximum of 2px rounding may be used, but the default global state remains 90-degree corners. This creates a distinctive, aggressive silhouette that separates the brand from softer, consumer-grade automotive platforms.

## Components

### Buttons
- **Primary:** Electric Red background, White text. High-contrast, sharp corners. On hover, background shifts to a slightly darker red with a subtle 1px white inner border.
- **Secondary/Ghost:** Transparent background with a 2px Metallic Gray border. Text in White.

### Input Fields
Background should be Graphite (#161B22) with a 1px Metallic Gray border. Labels are in Soft Gray Text, pinned above the input. Active states should use an Electric Red bottom-border only (2px thick).

### Cards
Cards are Graphite (#161B22) with no shadows. Use a 1px Metallic Gray border. For service packages (BMW/Mercedes/Audi), cards may feature a "Technical Header" in the Light Surface color for high-impact pricing info.

### Specialty Components
- **Vehicle Selection Chip:** A sharp-edged, low-profile toggle used to switch between manufacturer-specific service views (BMW, Mercedes, Audi icons).
- **Service Progress Bar:** A thin, 4px track in Graphite with an Electric Red progress indicator, styled like a diagnostic loading bar.
- **Spec Table:** High-density data rows with alternating Deep Black and Graphite backgrounds, separated by 1px Metallic Gray dividers.