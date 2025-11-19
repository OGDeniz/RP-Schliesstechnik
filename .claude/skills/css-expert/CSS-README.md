# CSS Expert Skill für Claude Code

## ⚠️ WICHTIG: Korrektes YAML-Format

Die **SKILL.md** enthält nur erlaubte YAML-Felder:

```yaml
---
name: css-expert
description: Ultimate CSS expert skill with modern CSS features
---
```

✅ **Ready to use!**

---

## 📦 Paket-Inhalt

### **SKILL.md** (10 KB) ⭐ HAUPT-DATEI
- ✅ Korrektes YAML-Frontmatter
- Flexbox & Grid Complete Guides
- Container Queries
- CSS Custom Properties
- Moderne CSS Features
- CSS-Tricks Referenzen

### **CSS-SKILL.md** (12 KB)
- Kompaktes Cheat Sheet
- Layout Patterns
- Animation Recipes
- Performance Tips
- Optional

### **CSS-DOCS-REFERENCE-SKILL.md** (28 KB)
- Detaillierte CSS-Tricks Referenzen
- Complete Guides (Flexbox, Grid, Custom Props)
- Container Queries Deep Dive
- Responsive Design Patterns
- Animation & Transitions
- Optional, aber empfohlen

---

## 🚀 Quick Start (3 Schritte)

### 1. Ordner erstellen

**Windows:**
```cmd
mkdir %USERPROFILE%\.claude\skills\css-expert
```

**macOS/Linux:**
```bash
mkdir -p ~/.claude/skills/css-expert
```

### 2. SKILL.md kopieren

**Windows:**
```cmd
copy SKILL.md %USERPROFILE%\.claude\skills\css-expert\
```

**macOS/Linux:**
```bash
cp SKILL.md ~/.claude/skills/css-expert/
```

### 3. Claude Code neu starten

Fertig! Skill sollte jetzt funktionieren.

---

## ✅ Verifikation

### YAML prüfen

```bash
# macOS/Linux
head -5 ~/.claude/skills/css-expert/SKILL.md

# Windows
Get-Content "$env:USERPROFILE\.claude\skills\css-expert\SKILL.md" -First 5
```

**Erwartete Ausgabe:**
```yaml
---
name: css-expert
description: Ultimate CSS expert skill with modern CSS features
---
```

### Skill aktivieren

1. Command Palette: Strg+Shift+P / Cmd+Shift+P
2. Suche: "Claude: Manage Skills"
3. Aktiviere: "CSS Expert Development Skill"

---

## 🎯 Verwendung

### Flexbox Layout
```
@css-expert Erstelle eine Navbar mit Flexbox:
- Logo links
- Menu-Items mittig
- CTA-Button rechts
```

### Grid System
```
@css-expert Implementiere ein responsives CSS Grid mit auto-fit
```

### Container Queries
```
@css-expert Erstelle ein Card-Component mit Container Queries
```

### Custom Properties
```
@css-expert Baue ein Theme-System mit CSS Variables für Dark/Light Mode
```

### Animations
```
@css-expert Erstelle eine Fade-In Animation mit Stagger-Effect
```

---

## ✨ Features

### Layout Systems
- ✅ Flexbox Complete Guide
- ✅ CSS Grid Complete Guide
- ✅ Flexbox vs Grid Entscheidungshilfe
- ✅ Layout Patterns (Holy Grail, Sidebar, etc.)

### Modern CSS
- ✅ Container Queries (Size & Style)
- ✅ Custom Properties (CSS Variables)
- ✅ @property für erweiterte Variables
- ✅ :has() Parent Selector
- ✅ :is() & :where()

### Responsive Design
- ✅ Media Queries
- ✅ Fluid Typography (clamp())
- ✅ Mobile-First Approach
- ✅ Responsive Images

### Animations
- ✅ CSS Transitions
- ✅ Keyframe Animations
- ✅ Performance-optimierte Animations
- ✅ Staggered Animations

### Performance
- ✅ Critical CSS
- ✅ CSS Containment
- ✅ will-change Optimization
- ✅ Loading Strategies

---

## 🛠 Troubleshooting

### Fehler: "Unexpected key in frontmatter"

**Lösung:** Verwende NUR:
```yaml
---
name: css-expert
description: Ultimate CSS expert skill with modern CSS features
---
```

❌ **Entferne:** `version`, `author`, etc.

### Skill nicht erkannt

**Checkliste:**
1. ✅ Datei heißt "SKILL.md"
2. ✅ Liegt in: `~/.claude/skills/css-expert/`
3. ✅ Erste Zeile ist `---`
4. ✅ Nur `name` und `description` im YAML
5. ✅ Claude Code neu gestartet

---

## 📊 Installation-Varianten

### Minimal (nur SKILL.md)
```bash
mkdir -p ~/.claude/skills/css-expert
cp SKILL.md ~/.claude/skills/css-expert/
# Funktioniert sofort!
```

### Vollständig (alle Dateien)
```bash
mkdir -p ~/.claude/skills/css-expert
cp *.md ~/.claude/skills/css-expert/
# Mehr Referenzen & Beispiele
```

**Empfehlung:** Vollständige Installation für maximale Power!

---

## 🔗 Wichtige Links

### CSS-Tricks (Hauptquelle)
- **Flexbox Guide**: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- **Grid Guide**: https://css-tricks.com/snippets/css/complete-guide-grid/
- **Custom Properties**: https://css-tricks.com/a-complete-guide-to-custom-properties/
- **Container Queries**: https://css-tricks.com/css-container-queries/
- **Flexbox vs Grid**: https://css-tricks.com/quick-whats-the-difference-between-flexbox-and-grid/

### Weitere Ressourcen
- **MDN CSS**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **Can I Use**: https://caniuse.com
- **CSS Spec**: https://www.w3.org/Style/CSS/

---

## 💡 Tipps

### Beste Ergebnisse

**1. Konkret sein:**
```
✅ "Erstelle ein Grid mit repeat(auto-fit, minmax(250px, 1fr))"
❌ "Wie geht CSS Grid?"
```

**2. Layout-Typ angeben:**
```
✅ "Verwende Flexbox für die Navigation"
✅ "Verwende Grid für das Page Layout"
```

**3. Browser-Support erwähnen:**
```
✅ "Benötige Support für ältere Browser"
```

---

## 📝 Beispiel-Anfragen

### Layout
```
@css-expert Erstelle ein 12-Column Grid System mit CSS Grid
```

### Component
```
@css-expert Baue eine Card-Komponente die:
- Grid-Layout ab 400px Container-Width
- Flexbox-Layout darunter
- Container Queries nutzt
```

### Theming
```
@css-expert Implementiere Dark Mode mit CSS Variables und data-theme
```

### Animation
```
@css-expert Erstelle eine Smooth Scroll Animation für Section-Transitions
```

### Responsive
```
@css-expert Mache dieses Layout responsive mit Mobile-First Approach: [Code]
```

---

## 🎨 CSS-Tricks Integration

Dieses Skill basiert auf den Complete Guides von CSS-Tricks:
- Complete Guide to Flexbox
- Complete Guide to Grid
- Complete Guide to Custom Properties
- Container Queries Guide

Alle Code-Beispiele und Best Practices stammen von CSS-Tricks.com!

---

**Status**: ✅ Ready to use  
**YAML-Format**: ✅ Korrekt  
**Claude Code**: ✅ Kompatibel  
**Hauptquelle**: CSS-Tricks.com  
**CSS Features**: Modern CSS (2025)
