# CSS Dokumentations-Referenz Skill

Umfassende Referenzen zu CSS-Tricks.com und anderen Quellen mit Code-Beispielen und Best Practices.

---

## OFFIZIELLE DOKUMENTATIONS-QUELLEN

### Primary Sources
- **CSS-Tricks**: https://css-tricks.com (Hauptquelle)
- **MDN Web Docs**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **W3C CSS Spec**: https://www.w3.org/Style/CSS/
- **Can I Use**: https://caniuse.com

### CSS-Tricks Complete Guides
- **Flexbox**: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- **Grid**: https://css-tricks.com/snippets/css/complete-guide-grid/
- **Custom Properties**: https://css-tricks.com/a-complete-guide-to-custom-properties/
- **Container Queries**: https://css-tricks.com/css-container-queries/

### Tools
- **Autoprefixer**: https://autoprefixer.github.io
- **CSS Validator**: https://jigsaw.w3.org/css-validator/
- **PurgeCSS**: https://purgecss.com

---

## 1. FLEXBOX - COMPLETE GUIDE

**Referenz**: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

### Container Properties

```css
.flex-container {
  display: flex | inline-flex;
  
  /* Direction */
  flex-direction: row | row-reverse | column | column-reverse;
  
  /* Wrapping */
  flex-wrap: nowrap | wrap | wrap-reverse;
  
  /* Shorthand for direction + wrap */
  flex-flow: row wrap;
  
  /* Main Axis Alignment */
  justify-content: flex-start | flex-end | center | 
                   space-between | space-around | space-evenly;
  
  /* Cross Axis Alignment */
  align-items: stretch | flex-start | flex-end | center | baseline;
  
  /* Multi-line Alignment */
  align-content: flex-start | flex-end | center | 
                 space-between | space-around | stretch;
  
  /* Gap between items */
  gap: 1rem;
  row-gap: 1rem;
  column-gap: 1rem;
}
```

### Item Properties

```css
.flex-item {
  /* Order */
  order: 0; /* default, negative values allowed */
  
  /* Growth Factor */
  flex-grow: 0; /* default, unitless */
  
  /* Shrink Factor */
  flex-shrink: 1; /* default */
  
  /* Base Size */
  flex-basis: auto | 0 | 200px | 20%;
  
  /* Shorthand: grow shrink basis */
  flex: 0 1 auto; /* default */
  flex: 1; /* common: grow */
  flex: none; /* 0 0 auto */
  
  /* Individual Cross Axis Alignment */
  align-self: auto | flex-start | flex-end | center | 
              baseline | stretch;
}
```

### Common Flexbox Patterns

```css
/* Navigation Bar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

/* Card Layout */
.card {
  display: flex;
  flex-direction: column;
}

.card-content {
  flex: 1; /* Grow to fill space */
}

/* Centered Content */
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Holy Grail with Flexbox */
.holy-grail {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.holy-grail-body {
  display: flex;
  flex: 1;
}

.holy-grail-content {
  flex: 1;
}

.holy-grail-nav,
.holy-grail-ads {
  flex: 0 0 200px;
}
```

**Flexbox Key Concepts (CSS-Tricks):**
- Flexbox is for 1-dimensional layouts (row OR column)
- `justify-content`: aligns along main axis
- `align-items`: aligns along cross axis
- `flex: 1` is shorthand for `flex: 1 1 0`
- `gap` works in Flexbox (modern browsers)

---

## 2. CSS GRID - COMPLETE GUIDE

**Referenz**: https://css-tricks.com/snippets/css/complete-guide-grid/

### Container Properties

```css
.grid-container {
  display: grid | inline-grid;
  
  /* Template Definition */
  grid-template-columns: 100px 200px auto;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  
  grid-template-rows: 100px auto 50px;
  
  /* Named Grid Areas */
  grid-template-areas:
    "header header header"
    "nav content aside"
    "footer footer footer";
  
  /* Gaps */
  gap: 1rem;
  row-gap: 1rem;
  column-gap: 2rem;
  
  /* Implicit Grid */
  grid-auto-columns: 100px;
  grid-auto-rows: minmax(100px, auto);
  grid-auto-flow: row | column | dense;
  
  /* Alignment */
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
  place-items: center; /* align-items + justify-items */
  
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;
  place-content: center; /* align-content + justify-content */
}
```

### Item Properties

```css
.grid-item {
  /* Column Placement */
  grid-column-start: 1;
  grid-column-end: 3;
  grid-column: 1 / 3; /* shorthand */
  grid-column: 1 / span 2;
  
  /* Row Placement */
  grid-row-start: 1;
  grid-row-end: 3;
  grid-row: 1 / 3; /* shorthand */
  
  /* Area Placement */
  grid-area: header;
  /* or */
  grid-area: 1 / 1 / 3 / 3; /* row-start / col-start / row-end / col-end */
  
  /* Self Alignment */
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
  place-self: center; /* align-self + justify-self */
}
```

### Grid Functions

```css
/* repeat() */
grid-template-columns: repeat(3, 1fr);
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

/* minmax() */
grid-template-columns: minmax(200px, 1fr);
grid-template-rows: minmax(100px, auto);

/* fit-content() */
grid-template-columns: fit-content(300px) 1fr;

/* min() max() clamp() */
grid-template-columns: min(100%, 1200px);
grid-template-columns: clamp(200px, 50%, 400px);
```

### Common Grid Patterns

```css
/* Responsive Grid (No Media Queries!) */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

/* 12-Column Grid */
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
}

.col-6 {
  grid-column: span 6;
}

/* Full-Bleed Layout */
.full-bleed {
  display: grid;
  grid-template-columns: 
    1fr 
    min(65ch, 100%) 
    1fr;
}

.full-bleed > * {
  grid-column: 2;
}

.full-bleed-wide {
  grid-column: 1 / -1;
}

/* RAM Layout (Repeat, Auto, Minmax) */
.ram {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

**Grid Key Concepts (CSS-Tricks):**
- Grid is for 2-dimensional layouts (rows AND columns)
- `auto-fit` vs `auto-fill`: auto-fit collapses empty tracks
- `fr` unit distributes available space
- `minmax()` creates responsive columns without media queries
- Grid items can be Flex parents

**When to Use Grid vs Flexbox** (CSS-Tricks):
- Use Grid for page layout
- Use Flexbox for components
- Grid for 2D, Flexbox for 1D
- Can combine both!

---

## 3. CSS CUSTOM PROPERTIES (VARIABLES)

**Referenz**: https://css-tricks.com/a-complete-guide-to-custom-properties/

### Basic Usage

```css
/* Definition */
:root {
  --primary-color: #3b82f6;
  --secondary-color: #10b981;
  --spacing-unit: 8px;
  --font-size-base: 16px;
  --border-radius: 8px;
  --transition-speed: 0.3s;
}

/* Usage */
.button {
  background: var(--primary-color);
  padding: calc(var(--spacing-unit) * 2);
  border-radius: var(--border-radius);
  transition: all var(--transition-speed);
}

/* Fallback Values */
.element {
  color: var(--text-color, #333);
  /* If --text-color not defined, use #333 */
}
```

### Scoping & Cascading

```css
:root {
  --color: blue;
}

.component {
  --color: red; /* Overrides for this component */
}

.element {
  color: var(--color); /* Blue by default, red in .component */
}
```

### Dynamic Theming

```css
/* Light Theme (Default) */
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f3f4f6;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --border-color: #e5e7eb;
}

/* Dark Theme */
[data-theme="dark"] {
  --bg-primary: #1f2937;
  --bg-secondary: #111827;
  --text-primary: #f9fafb;
  --text-secondary: #d1d5db;
  --border-color: #374151;
}

/* Usage */
body {
  background: var(--bg-primary);
  color: var(--text-primary);
}

.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
}
```

### Responsive Variables

```css
:root {
  --spacing: 1rem;
  --container-padding: 1rem;
}

@media (min-width: 768px) {
  :root {
    --spacing: 1.5rem;
    --container-padding: 2rem;
  }
}

@media (min-width: 1024px) {
  :root {
    --spacing: 2rem;
    --container-padding: 3rem;
  }
}

.container {
  padding: var(--container-padding);
}
```

### Advanced Patterns

```css
/* Color System with HSL */
:root {
  --primary-h: 217;
  --primary-s: 91%;
  --primary-l: 60%;
  --primary: hsl(var(--primary-h), var(--primary-s), var(--primary-l));
  --primary-dark: hsl(var(--primary-h), var(--primary-s), 45%);
  --primary-light: hsl(var(--primary-h), var(--primary-s), 75%);
}

/* Spacing Scale */
:root {
  --space-unit: 1rem;
  --space-xs: calc(0.5 * var(--space-unit));
  --space-sm: calc(0.75 * var(--space-unit));
  --space-md: calc(1.25 * var(--space-unit));
  --space-lg: calc(2 * var(--space-unit));
  --space-xl: calc(3.25 * var(--space-unit));
  --space-2xl: calc(5.25 * var(--space-unit));
}
```

### JavaScript Integration

```javascript
// Get Variable
const primary = getComputedStyle(document.documentElement)
  .getPropertyValue('--primary-color');

// Set Variable
document.documentElement.style
  .setProperty('--primary-color', '#ff6b6b');

// Update on Event
window.addEventListener('mousemove', (e) => {
  document.documentElement.style
    .setProperty('--mouse-x', e.clientX + 'px');
  document.documentElement.style
    .setProperty('--mouse-y', e.clientY + 'px');
});
```

**Custom Properties Key Concepts (CSS-Tricks):**
- CSS Variables cascade and inherit
- Can be updated with JavaScript
- Cannot be used in media queries
- More powerful than preprocessor variables
- Can hold almost any value (even invalid ones)
- Use `--` prefix for custom properties

---

## 4. CONTAINER QUERIES

**Referenzen**:
- https://css-tricks.com/css-container-queries/
- https://css-tricks.com/almanac/rules/c/container/

### Size Queries

```css
/* Define Container */
.card-container {
  container-name: card;
  container-type: inline-size; /* or size */
}

/* Shorthand */
.card-container {
  container: card / inline-size;
}

/* Query Container */
@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
}

@container card (min-width: 600px) {
  .card {
    grid-template-columns: 250px 1fr;
    gap: 2rem;
  }
}
```

### Style Queries

```css
/* Container with Custom Property */
.parent {
  --theme: dark;
  container-name: themed-container;
}

/* Query Style */
@container themed-container style(--theme: dark) {
  .child {
    background: #1e293b;
    color: #f1f5f9;
  }
}

/* Query Multiple Conditions */
@container (min-width: 400px) and style(--layout: grid) {
  .element {
    display: grid;
  }
}
```

### Container Query Units

```css
.card {
  /* Container Query Units */
  padding: 5cqw; /* 5% of container width */
  font-size: 3cqw;
  margin: 2cqi; /* inline direction */
  height: 50cqh; /* container height */
  
  /* cqw, cqh, cqi, cqb, cqmin, cqmax */
}
```

### Unnamed Containers

```css
/* No explicit container needed */
.parent {
  container-type: inline-size;
}

/* Query closest container */
@container (min-width: 400px) {
  .child {
    /* styles */
  }
}
```

**Container Queries Key Concepts (CSS-Tricks):**
- Enable component-based responsive design
- Query parent container instead of viewport
- `inline-size` queries container width
- `size` queries both width and height
- Style queries only work with custom properties
- All elements are style containers by default

---

## 5. RESPONSIVE DESIGN & MEDIA QUERIES

**Referenz**: https://css-tricks.com/responsive-designs-and-css-custom-properties-building-a-flexible-grid-system/

### Mobile-First Approach

```css
/* Base (Mobile) */
.container {
  padding: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
  
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

/* Large Desktop */
@media (min-width: 1440px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### Fluid Typography

```css
/* Using clamp() */
:root {
  --fluid-type-min: 1rem;
  --fluid-type-max: 1.25rem;
}

body {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
}

h1 {
  font-size: clamp(2rem, 5vw, 4rem);
}

h2 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}

/* Manual Calculation */
html {
  font-size: calc(1rem + ((1vw - 0.32rem) * 0.625));
  /* Scales from 16px at 320px viewport to 20px at 1200px */
}
```

### Responsive Images

```css
img {
  max-width: 100%;
  height: auto;
}

/* Art Direction */
picture {
  display: block;
}

.responsive-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 16 / 9;
}
```

### Media Query Features

```css
/* Viewport Dimensions */
@media (min-width: 768px) { }
@media (max-width: 767px) { }
@media (min-height: 600px) { }

/* Orientation */
@media (orientation: landscape) { }
@media (orientation: portrait) { }

/* Resolution */
@media (min-resolution: 2dppx) {
  /* Retina displays */
}

/* Pointer Capability */
@media (hover: hover) and (pointer: fine) {
  /* Mouse/trackpad */
}

@media (hover: none) and (pointer: coarse) {
  /* Touch devices */
}

/* Prefers Color Scheme */
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #1e293b;
    --text: #f1f5f9;
  }
}

/* Prefers Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 6. ANIMATIONS & TRANSITIONS

### Transitions

```css
.button {
  background: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  
  /* Transition Properties */
  transition-property: background, transform, box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  
  /* Shorthand */
  transition: all 0.3s ease-in-out;
}

.button:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.button:active {
  transform: translateY(0);
}
```

### Keyframe Animations

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

/* Usage */
.animated {
  animation-name: fadeIn;
  animation-duration: 0.6s;
  animation-timing-function: ease-out;
  animation-delay: 0.2s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;
  animation-play-state: running;
  
  /* Shorthand */
  animation: fadeIn 0.6s ease-out 0.2s 1 normal both running;
}
```

### Staggered Animations

```css
.list-item {
  animation: fadeIn 0.5s ease-out both;
  animation-delay: calc(var(--index) * 0.1s);
}

/* HTML: <div class="list-item" style="--index: 0">...</div> */
```

### Performance-Optimized Animations

```css
/* Only animate transform and opacity */
.optimized {
  will-change: transform, opacity;
  transform: translateX(0);
  transition: transform 0.3s, opacity 0.3s;
}

.optimized:hover {
  transform: translateX(10px);
  opacity: 0.8;
}

/* Remove will-change after animation */
.optimized:not(:hover) {
  will-change: auto;
}
```

---

## 7. MODERN CSS SELECTORS

### :has() - Parent Selector

```css
/* Card with image gets different layout */
.card:has(img) {
  display: grid;
  grid-template-columns: 200px 1fr;
}

/* Form with invalid input */
form:has(input:invalid) .submit-button {
  opacity: 0.5;
  pointer-events: none;
}

/* List item with checked checkbox */
li:has(input[type="checkbox"]:checked) {
  text-decoration: line-through;
  opacity: 0.6;
}
```

### :is() & :where()

```css
/* :is() - with specificity */
:is(h1, h2, h3) {
  margin-top: 2rem;
}

:is(.dark, .night) :is(a, button) {
  color: white;
}

/* :where() - zero specificity */
:where(h1, h2, h3) {
  margin-bottom: 1rem;
}
```

### :not()

```css
/* All paragraphs except first */
p:not(:first-child) {
  margin-top: 1rem;
}

/* Links without class */
a:not([class]) {
  color: blue;
  text-decoration: underline;
}

/* Multiple negations */
button:not(.primary):not(.secondary) {
  background: gray;
}
```

---

## 8. PERFORMANCE & OPTIMIZATION

### Critical CSS

```html
<head>
  <style>
    /* Critical Above-the-Fold CSS */
    body { margin: 0; font-family: system-ui; }
    .hero { min-height: 100vh; display: grid; place-items: center; }
  </style>
  
  <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="styles.css"></noscript>
</head>
```

### CSS Containment

```css
.card {
  /* Isolate rendering context */
  contain: layout style paint;
}

.list-item {
  /* Virtualization-friendly */
  content-visibility: auto;
  contain-intrinsic-size: 0 200px;
}
```

### will-change

```css
.animated-element {
  will-change: transform, opacity;
}

.animated-element:hover {
  transform: scale(1.1);
  opacity: 0.9;
}

/* Remove after use */
.animated-element.animation-done {
  will-change: auto;
}
```

**Performance Tips (CSS-Tricks):**
- Animate only `transform` and `opacity`
- Use `will-change` sparingly
- Avoid layout thrashing
- Use CSS containment
- Minimize specificity
- Reduce selector complexity

---

## 9. CROSS-BROWSER COMPATIBILITY

### Feature Detection

```css
@supports (display: grid) {
  .container {
    display: grid;
  }
}

@supports not (display: grid) {
  .container {
    display: flex;
  }
}

/* Multiple Features */
@supports (display: grid) and (gap: 1rem) {
  .grid {
    display: grid;
    gap: 1rem;
  }
}
```

### Vendor Prefixes

```css
.element {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
```

---

## 10. ACCESSIBILITY

### Focus States

```css
/* Better Focus Indicators */
:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

:focus:not(:focus-visible) {
  outline: none;
}

:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
```

### Screen Reader Only

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

### Skip Links

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

---

**Version**: 1.0.0
**Erstellt für**: Claude Code - CSS Expert Skill
**Hauptquelle**: CSS-Tricks.com
**Letzte Aktualisierung**: November 2025
