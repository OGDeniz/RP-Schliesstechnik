# CSS Full-Stack Development Skill für Claude Code

Ultimatives CSS-Skill mit modernen Features, Layout-Systemen und Best Practices.

---

## 1. LAYOUT SYSTEMS

### Flexbox
```css
/* Container */
.flex {
  display: flex;
  flex-direction: row | column;
  justify-content: flex-start | center | space-between | space-around | space-evenly;
  align-items: stretch | center | flex-start | flex-end;
  flex-wrap: nowrap | wrap;
  gap: 1rem;
}

/* Items */
.flex-item {
  flex: 1; /* grow shrink basis */
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto | center;
  order: 0;
}
```

### CSS Grid
```css
/* Container */
.grid {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
  
  /* or Repeat */
  grid-template-columns: repeat(3, 1fr);
  
  /* or Auto-fit */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

/* Items */
.grid-item {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
  
  /* or */
  grid-area: header;
}
```

---

## 2. CUSTOM PROPERTIES (CSS VARIABLES)

### Definition
```css
:root {
  --primary: #3b82f6;
  --secondary: #10b981;
  --spacing: 8px;
  --radius: 4px;
}

/* Usage */
.button {
  background: var(--primary);
  padding: calc(var(--spacing) * 2);
  border-radius: var(--radius);
}
```

### Theming
```css
[data-theme="dark"] {
  --bg: #1e293b;
  --text: #f1f5f9;
  --primary: #60a5fa;
}

[data-theme="light"] {
  --bg: #ffffff;
  --text: #1e293b;
  --primary: #3b82f6;
}

body {
  background: var(--bg);
  color: var(--text);
}
```

---

## 3. CONTAINER QUERIES

```css
/* Define Container */
.card-container {
  container-name: card;
  container-type: inline-size;
}

/* Query Container */
@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 150px 1fr;
  }
}

/* Style Queries */
@container style(--variant: premium) {
  .card {
    background: linear-gradient(135deg, gold, orange);
  }
}
```

---

## 4. RESPONSIVE DESIGN

### Media Queries
```css
/* Mobile First */
.container {
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 3rem;
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

### Fluid Typography
```css
/* Using clamp() */
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
}

p {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
}
```

---

## 5. ANIMATIONS & TRANSITIONS

### Transitions
```css
.button {
  background: #3b82f6;
  transition: all 0.3s ease-in-out;
}

.button:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
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

.animate {
  animation: fadeIn 0.6s ease-out;
  animation-fill-mode: both;
}

/* Staggered Animations */
.item {
  animation: fadeIn 0.6s ease-out;
  animation-delay: calc(var(--index) * 0.1s);
}
```

---

## 6. MODERN CSS FEATURES

### :has() Selector
```css
/* Parent selector */
.card:has(img) {
  display: grid;
  grid-template-columns: 200px 1fr;
}

/* Conditional styling */
form:has(input:invalid) .submit-button {
  opacity: 0.5;
  pointer-events: none;
}
```

### @property
```css
@property --gradient-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.animated-gradient {
  background: linear-gradient(
    var(--gradient-angle),
    #ff6b6b,
    #4ecdc4
  );
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  to { --gradient-angle: 360deg; }
}
```

### aspect-ratio
```css
.video-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}

.square {
  aspect-ratio: 1;
}
```

---

## 7. LAYOUT PATTERNS

### Holy Grail Layout
```css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav content aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header { grid-area: header; }
.nav { grid-area: nav; }
.content { grid-area: content; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
```

### Sidebar Layout
```css
.sidebar-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
}

@media (max-width: 768px) {
  .sidebar-layout {
    grid-template-columns: 1fr;
  }
}
```

### Card Grid
```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
```

---

## 8. CENTERING TECHNIQUES

```css
/* Flexbox */
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Grid */
.grid-center {
  display: grid;
  place-items: center;
}

/* Absolute */
.absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Margin Auto */
.margin-center {
  max-width: 1200px;
  margin: 0 auto;
}
```

---

## 9. PERFORMANCE

### Critical CSS
```css
/* Inline in <head> */
body { margin: 0; font-family: system-ui; }
.hero { min-height: 100vh; }
```

### CSS Containment
```css
.card {
  contain: layout style paint;
}

.list-item {
  content-visibility: auto;
  contain-intrinsic-size: 0 200px;
}
```

### will-change
```css
.animated {
  will-change: transform, opacity;
}

.animated:hover {
  transform: scale(1.05);
}

/* Remove after animation */
.animated.done {
  will-change: auto;
}
```

---

## 10. UTILITY CLASSES

### Spacing
```css
.m-0 { margin: 0; }
.m-1 { margin: 0.25rem; }
.m-2 { margin: 0.5rem; }
.m-4 { margin: 1rem; }

.p-0 { padding: 0; }
.p-4 { padding: 1rem; }

.mx-auto { margin-left: auto; margin-right: auto; }
```

### Display
```css
.flex { display: flex; }
.grid { display: grid; }
.block { display: block; }
.inline { display: inline; }
.hidden { display: none; }
```

### Text
```css
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.font-bold { font-weight: 700; }
.font-normal { font-weight: 400; }

.text-sm { font-size: 0.875rem; }
.text-base { font-size: 1rem; }
.text-lg { font-size: 1.125rem; }
.text-xl { font-size: 1.25rem; }
```

---

## 11. HÄUFIGE PATTERNS

### Sticky Header
```css
.header {
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

### Gradient Overlays
```css
.hero {
  position: relative;
  background-image: url('hero.jpg');
}

.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.3),
    rgba(0,0,0,0.7)
  );
}
```

### Truncate Text
```css
/* Single Line */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Multiple Lines */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

---

## 12. DEBUGGING

### Outline All Elements
```css
* {
  outline: 1px solid red;
}
```

### Grid/Flex Debugging
```css
.grid {
  background: linear-gradient(90deg, #f0f0f0 1px, transparent 1px),
              linear-gradient(#f0f0f0 1px, transparent 1px);
  background-size: 20px 20px;
}
```

---

## 13. BROWSER PREFIXES

```css
.element {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
```

---

## BEST PRACTICES

### Performance
✅ Minimize repaints and reflows
✅ Use CSS containment
✅ Optimize animations (transform & opacity)
✅ Use will-change sparingly
✅ Lazy load non-critical CSS

### Organization
✅ Use CSS Variables für Theming
✅ Follow naming convention (BEM, SMACSS)
✅ Group related properties
✅ Mobile-First approach
✅ Comment complex code

### Responsiveness
✅ Use relative units (rem, em, %)
✅ Fluid typography with clamp()
✅ Responsive images (width: 100%)
✅ Container Queries für Components
✅ Media Queries für Layouts

### Accessibility
✅ Sufficient color contrast (4.5:1)
✅ Focus states for interactive elements
✅ Keyboard navigation support
✅ Screen reader friendly
✅ Avoid relying solely on color

---

## RESSOURCEN

- **CSS-Tricks**: https://css-tricks.com
- **MDN**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **Can I Use**: https://caniuse.com
- **Flexbox Guide**: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- **Grid Guide**: https://css-tricks.com/snippets/css/complete-guide-grid/
- **Custom Properties**: https://css-tricks.com/a-complete-guide-to-custom-properties/

---

**Version**: Modern CSS (2025)
**Erstellt für**: Claude Code Skill System
