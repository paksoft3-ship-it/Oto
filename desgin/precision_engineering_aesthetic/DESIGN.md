---
name: Precision Engineering Aesthetic
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
  secondary: '#c3c6ce'
  on-secondary: '#2d3136'
  secondary-container: '#43474d'
  on-secondary-container: '#b2b5bc'
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
  secondary-fixed: '#e0e2ea'
  secondary-fixed-dim: '#c3c6ce'
  on-secondary-fixed: '#181c21'
  on-secondary-fixed-variant: '#43474d'
  tertiary-fixed: '#dbe3f0'
  tertiary-fixed-dim: '#bfc7d4'
  on-tertiary-fixed: '#141c25'
  on-tertiary-fixed-variant: '#3f4752'
  background: '#0c141c'
  on-background: '#dbe3ef'
  surface-variant: '#2e363e'
typography:
  display-xl:
    fontFamily: Manrope
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 32px
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
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  base: 8px
  container-max-width: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-gap-lg: 120px
  section-gap-md: 80px
---

## Brand & Style

The design system is engineered to evoke the atmosphere of a high-end, modern European automotive workshop. It balances industrial technicality with luxury hospitality. The personality is authoritative, precise, and elite, speaking directly to owners of premium vehicles who value meticulous craftsmanship and transparency.

The visual style is a fusion of **Minimalism** and **Tactile Modernism**. It utilizes deep tonal layering to create a "dark mode by default" experience that feels like a private showroom. High-contrast accents in Electric Red provide a sense of urgency and precision, while subtle metallic textures and sharp edges reinforce the hardware-centric nature of the business. The interface should feel like a high-performance dashboard: functional, fast, and uncompromising.

## Colors

The palette is anchored in deep, dark tones to simulate a premium garage interior. 

- **Primary Background (#0B0F14):** Used for the main canvas to provide maximum depth.
- **Secondary Background (#161B22):** Used for logical grouping and sectioning within the dark theme.
- **Metallic Surface (#2E3640):** The primary color for interactive cards and containers, mimicking brushed metal or carbon fiber textures.
- **Electric Red (#E11D2E):** Reserved strictly for high-priority actions (CTAs), critical status indicators, and active states. 
- **Light Contrast (#F5F6F8):** Occasionally used for "Service Reports" or "Invoicing" sections to provide a clean, paper-like break that signifies formal documentation.

## Typography

This design system utilizes a dual-font strategy to balance character with utility. 

**Manrope** is used for all headings to provide a confident, wide, and modern geometric feel. Headlines should be set with tight letter-spacing to emphasize the "heavy machinery" aesthetic. 

**Inter** is the workhorse for all body copy and technical data. Its high legibility ensures that service details and pricing are easily digestible. Use **Label-Caps** for category tags (e.g., "ENGINE DIAGNOSTICS") to create a technical, serialized look similar to automotive parts labeling.

## Layout & Spacing

The design system follows a **12-column fixed grid** for desktop, centered within the viewport. Spacing is strictly based on an **8px linear scale** to maintain technical rigor.

- **Desktop:** 12 columns, 24px gutters. Large vertical gaps (120px) are used between major service sections to allow the premium imagery to breathe.
- **Mobile:** 4 columns, 16px margins. Content is primarily stacked, but service "chips" or "stats" can be displayed in a 2-column horizontal scroll.
- **Consistency:** Use generous internal padding within cards (min 32px) to signify luxury and prevent the technical data from feeling cluttered.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** rather than traditional soft shadows. Since the environment is dark, depth is created by moving "closer" to the light source via lighter hex values.

- **Level 0 (Base):** Deep Black (#0B0F14).
- **Level 1 (Sectioning):** Dark Graphite (#161B22).
- **Level 2 (Interactive):** Metallic Gray (#2E3640).

To enhance the premium feel, use a **1px Inner Border** (Stroke) on cards using a 10% opacity white. This simulates the light catching the edge of a machined metal part. Avoid diffused ambient shadows; if a shadow is necessary for a floating element (like a sticky booking button), use a sharp, high-opacity black shadow to maintain the "hard" aesthetic.

## Shapes

In alignment with the "sharp edges" requirement, this design system utilizes a **0px (Sharp)** roundedness policy for all primary UI elements. 

Square corners on buttons, cards, and input fields communicate precision, engineering accuracy, and a non-decorative, functional attitude. This architectural approach distinguishes the brand from generic "soft" consumer apps and aligns it with luxury automotive design languages (e.g., Lamborghini, angular modern architecture).

## Components

### Buttons
- **Primary:** Electric Red background, White bold text, All-Caps. Sharp corners. No gradient. On hover: Shift to a slightly darker red with a subtle 1px white inner border.
- **Secondary:** Transparent background, 2px Metallic Gray border, White text.
- **Action:** Text-based with a right-pointing chevron, utilizing the Electric Red for the icon only.

### Cards
- **Service Cards:** Metallic Gray background. Use 1px stroke (#FFFFFF @ 5% opacity). Image at the top should have no rounding.
- **Trust Cards (Reviews):** Dark Graphite background to distinguish them from actionable service cards.

### Input Fields
- **Default:** Dark Graphite background, 1px border (#2E3640), White text.
- **Focus:** 1px Electric Red border. Labels stay above the field in "Label-Caps" style.

### Specialized Components
- **Vehicle Status Tracker:** A horizontal stepped progress bar using Electric Red for completed stages and Metallic Gray for upcoming ones.
- **Technical Spec List:** Two-column lists with Soft Gray labels on the left and White values on the right, separated by a subtle dotted leader line to evoke a technical manual.
- **Booking Sticky Bar:** A fixed bottom bar on mobile featuring the service price and a prominent "Book Now" primary button.