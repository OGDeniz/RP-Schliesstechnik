---
name: css-expert
description: Ultimate CSS expert skill with modern CSS features, layout systems (Flexbox, Grid), custom properties, animations, and comprehensive CSS-Tricks references
---

# CSS Expert Development Skill

## Description

Ultimativer CSS-Experten-Skill mit umfassenden Referenzen von CSS-Tricks.com. Deckt moderne CSS-Features ab: Flexbox, Grid, Container Queries, Custom Properties, Animations, Responsive Design, und Performance-Optimierung. Ermöglicht präzise, aktuelle CSS-Entwicklung mit Best Practices.

## Capabilities

- **Layout Systems**: Flexbox, CSS Grid, und deren optimale Anwendung
- **Modern CSS Features**: Container Queries, @property, CSS Variables, :has()
- **Responsive Design**: Media Queries, Fluid Typography, Mobile-First
- **Animations & Transitions**: Keyframes, Transform, CSS Animations
- **Custom Properties**: CSS Variables, Theming, Design Tokens
- **Performance**: CSS Optimization, Critical CSS, Loading-Strategien
- **Preprocessors**: Sass/SCSS, PostCSS Integration
- **Accessibility**: ARIA, Keyboard Navigation, Screen Reader Support
- **Cross-Browser**: Vendor Prefixes, Fallbacks, Progressive Enhancement

## Usage Instructions

### When to Use This Skill

Verwende diesen Skill wenn:

- Layout-Systeme (Flexbox, Grid) implementiert werden
- Moderne CSS-Features genutzt werden sollen
- Responsive Design entwickelt wird
- Animations und Transitions erstellt werden
- CSS Performance optimiert wird
- Design Systems mit CSS Variables aufgebaut werden
- Cross-Browser-Kompatibilität sichergestellt wird
- CSS Debugging durchgeführt wird

### How Claude Should Use This Skill

**ALWAYS** referenziere CSS-Tricks.com und MDN bei:

1. Layout-Implementierung (Flexbox, Grid)
2. Modernen CSS-Features (Container Queries, @property)
3. Responsive Design-Patterns
4. Animation-Implementierung
5. CSS Best Practices

**Primary Documentation Sources:**

- **CSS-Tricks Guides**: https://css-tricks.com
  - Flexbox Guide: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  - Grid Guide: https://css-tricks.com/snippets/css/complete-guide-grid/
  - Custom Properties: https://css-tricks.com/a-complete-guide-to-custom-properties/
  - Container Queries: https://css-tricks.com/css-container-queries/

- **MDN Web Docs**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **Can I Use**: https://caniuse.com
- **CSS Spec**: https://www.w3.org/Style/CSS/

### Workflow

1. **Analyze Requirements**
   - Layout-Anforderungen verstehen
   - Browser-Support prüfen
   - Performance-Anforderungen

2. **Choose Layout System**
   - Flexbox für 1D-Layout
   - Grid für 2D-Layout
   - Kombination wenn sinnvoll

3. **Implement Solution**
   - Moderne CSS-Features nutzen
   - Fallbacks für ältere Browser
   - Performance optimieren

4. **Validate**
   - Cross-Browser Testing
   - Responsive Testing
   - Accessibility Audit
   - Performance Audit

## Key CSS Concepts

### Flexbox Fundamentals

```css
/* Container Properties */
.flex-container {
  display: flex;
  flex-direction: row | column;
  justify-content: flex-start | center | space-between | space-around;
  align-items: stretch | center | flex-start | flex-end;
  flex-wrap: nowrap | wrap | wrap-reverse;
  gap: 1rem;
}

/* Item Properties */
.flex-item {
  flex: 1; /* flex-grow, flex-shrink, flex-basis */
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto | center | flex-start | flex-end;
  order: 0;
}
```

### CSS Grid Fundamentals

```css
/* Container Properties */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
  grid-auto-flow: row | column | dense;
}

/* Item Properties */
.grid-item {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
  /* or */
  grid-area: header;
}

/* Responsive Grid */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

### CSS Custom Properties

```css
/* Define Variables */
:root {
  --primary-color: #3b82f6;
  --spacing-unit: 8px;
  --font-size-base: 16px;
  --border-radius: 8px;
}

/* Use Variables */
.button {
  background: var(--primary-color);
  padding: calc(var(--spacing-unit) * 2);
  border-radius: var(--border-radius);
}

/* Dynamic Theming */
[data-theme="dark"] {
  --primary-color: #60a5fa;
  --bg-color: #1e293b;
  --text-color: #f1f5f9;
}
```

### Container Queries

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
@container style(--theme: dark) {
  .element {
    background: #1e293b;
  }
}
```

## Layout Patterns

### Holy Grail Layout (Grid)

```css
.holy-grail {
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

### Centering Techniques

```css
/* Flexbox Centering */
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Grid Centering */
.grid-center {
  display: grid;
  place-items: center;
}

/* Absolute Centering */
.absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### Responsive Typography

```css
/* Fluid Typography */
:root {
  --fluid-min-width: 320;
  --fluid-max-width: 1200;
  --fluid-min-size: 16;
  --fluid-max-size: 24;
}

body {
  font-size: clamp(
    var(--fluid-min-size) * 1px,
    calc(var(--fluid-min-size) * 1px + (var(--fluid-max-size) - var(--fluid-min-size)) * (100vw - var(--fluid-min-width) * 1px) / (var(--fluid-max-width) - var(--fluid-min-width))),
    var(--fluid-max-size) * 1px
  );
}
```

## Animations & Transitions

### CSS Transitions

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

### CSS Animations

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: fadeInUp 0.6s ease-out;
}

/* With Animation Timing */
.stagger-animation {
  animation: fadeInUp 0.6s ease-out;
  animation-fill-mode: both;
  animation-delay: calc(var(--index) * 0.1s);
}
```

## Performance Best Practices

### Critical CSS

```css
/* Above-the-fold styles */
/* Inline this in <head> for faster initial render */
body {
  margin: 0;
  font-family: system-ui, -apple-system, sans-serif;
}

.hero {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
```

### CSS Containment

```css
.card {
  contain: layout style paint;
  /* Isolates rendering context for better performance */
}
```

### Will-Change

```css
.animated-element {
  will-change: transform, opacity;
  /* Hints browser to optimize */
}

.animated-element.animating {
  transform: translateX(100px);
  opacity: 0.5;
}
```

## Documentation References

**CSS-Tricks (Primary Source):**
- Complete Guide to Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- Complete Guide to Grid: https://css-tricks.com/snippets/css/complete-guide-grid/
- Custom Properties Guide: https://css-tricks.com/a-complete-guide-to-custom-properties/
- Container Queries: https://css-tricks.com/css-container-queries/
- Flexbox vs Grid: https://css-tricks.com/quick-whats-the-difference-between-flexbox-and-grid/

**MDN Web Docs:**
- https://developer.mozilla.org/en-US/docs/Web/CSS
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout

**Tools:**
- Can I Use: https://caniuse.com
- CSS Validator: https://jigsaw.w3.org/css-validator/
- Autoprefixer: https://autoprefixer.github.io

## Notes

- Flexbox für 1D-Layout (Zeile ODER Spalte)
- Grid für 2D-Layout (Zeile UND Spalte)
- Container Queries für komponentenbasiertes Responsive Design
- Custom Properties für Theming und Design Tokens
- Performance immer berücksichtigen
- Mobile-First Approach
- Progressive Enhancement
- Browser-Support prüfen

## Browser Compatibility

- **Flexbox**: Voll unterstützt in allen modernen Browsern
- **Grid**: Voll unterstützt in allen modernen Browsern
- **Custom Properties**: Voll unterstützt (IE11 nicht)
- **Container Queries**: Moderne Browser (2023+)
- **:has()**: Moderne Browser (2023+)
