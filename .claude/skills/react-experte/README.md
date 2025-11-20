# React Expert Skill für Claude Code

## ⚠️ WICHTIG: YAML-Frontmatter

Die **SKILL.md** enthält das **korrekte YAML-Frontmatter-Format**:

```yaml
---
name: react-expert
description: Comprehensive React development skill
version: 1.0.0
author: Custom
---
```

✅ **Ready to use!** Die SKILL.md funktioniert mit Claude Code.

---

## 📦 Paket-Inhalt

### 1. **SKILL.md** (8 KB) ⭐ HAUPT-DATEI
- ✅ MIT YAML-Frontmatter (---) 
- Claude Code Skill-Definition
- **MUSS** im Skills-Ordner liegen

### 2. **REACT-DOCS-REFERENCE-SKILL.md** (22 KB)
- Detaillierte Dokumentations-Referenzen
- Code-Beispiele aus offizieller React-Doku
- Custom Hooks, Performance, State Management
- Optional, aber empfohlen

### 3. **REACT-SKILL.md** (10 KB)
- Kompaktes Cheat Sheet
- CLI-Befehle und Quick Reference
- Best Practices
- Optional

### 4. **INSTALLATION-ANLEITUNG.md** (8 KB)
- Schritt-für-Schritt Installation
- Troubleshooting mit YAML-Hinweisen
- Verifikations-Scripts

### 5. **README.md** (diese Datei)
- Übersicht über das Paket
- Quick Start Guide

---

## 🚀 Quick Start (3 Schritte)

### 1. Ordner erstellen

**Windows:**
```cmd
mkdir %USERPROFILE%\.claude\skills\react-expert
```

**macOS/Linux:**
```bash
mkdir -p ~/.claude/skills/react-expert
```

### 2. SKILL.md kopieren

**Windows:**
```cmd
copy SKILL.md %USERPROFILE%\.claude\skills\react-expert\
```

**macOS/Linux:**
```bash
cp SKILL.md ~/.claude/skills/react-expert/
```

### 3. Claude Code neu starten

Fertig! Das Skill sollte jetzt funktionieren.

---

## ✅ Verifikation

### YAML-Format prüfen

**Windows (PowerShell):**
```powershell
Get-Content "$env:USERPROFILE\.claude\skills\react-expert\SKILL.md" -First 5
```

**macOS/Linux:**
```bash
head -5 ~/.claude/skills/react-expert/SKILL.md
```

**Erwartete Ausgabe:**
```yaml
---
name: react-expert
description: Comprehensive React development skill
version: 1.0.0
```

### Skill aktivieren

1. Command Palette: Strg+Shift+P (Windows) / Cmd+Shift+P (macOS)
2. Suche: "Claude: Manage Skills"
3. Aktiviere: "React Expert Development Skill"

---

## 🎯 Verwendung

### Grundlegende Nutzung

```
@react-expert Erstelle eine wiederverwendbare Button-Komponente mit TypeScript
```

### Component Development

```
@react-expert Erstelle einen User Dashboard mit:
- TanStack Query für Data Fetching
- Loading und Error States
- Responsive Design
- Accessibility
```

### Performance-Optimierung

```
@react-expert Optimiere diese Component: [Code]
```

### UI/UX Design

```
@react-expert Erstelle ein Modal mit ARIA-Support und Keyboard Navigation
```

### Testing

```
@react-expert Schreibe React Testing Library Tests für: [Code]
```

---

## ✨ Features

### Abgedeckte React-Versionen
- ✅ React 18 (Hooks, Concurrent Features)
- ✅ React 19 (Actions, use() Hook)
- ✅ Server Components
- ✅ Suspense & Transitions

### Build Tools
- ✅ Vite (empfohlen)
- ✅ Next.js 14+ (App Router)
- ✅ Remix

### Hauptfunktionen
- ✅ Component Development (TypeScript)
- ✅ Custom Hooks
- ✅ UI/UX Design Patterns
- ✅ State Management (Context, TanStack Query, Zustand)
- ✅ Performance-Optimierung
- ✅ Testing (Jest, Vitest, RTL, Playwright)
- ✅ Accessibility (WCAG 2.1 AA)
- ✅ Design Systems
- ✅ Dokumentations-Referenzen

---

## 📖 Dokumentation

- **Installation**: INSTALLATION-ANLEITUNG.md (vollständige Anleitung)
- **Referenz**: REACT-DOCS-REFERENCE-SKILL.md (detaillierte Doku)
- **Cheat Sheet**: REACT-SKILL.md (Quick Reference)

---

## 🛠 Troubleshooting

### Problem: "SKILL.md must start with YAML frontmatter (---)"

**Lösung:** Die neue SKILL.md beginnt korrekt mit:
```yaml
---
name: react-expert
...
---
```

Stelle sicher, dass du die aktuelle Version verwendest.

### Problem: Skill wird nicht erkannt

**Checkliste:**
1. ✅ Datei heißt genau "SKILL.md" (Groß-/Kleinschreibung!)
2. ✅ Liegt in: `~/.claude/skills/react-expert/SKILL.md`
3. ✅ Erste Zeile ist `---`
4. ✅ Claude Code neu gestartet

### Problem: Skill aktiviert, aber funktioniert nicht

**Lösungen:**
1. Verwende `@react-expert` explizit
2. Cache leeren: `rm -rf ~/.claude/cache`
3. Claude Code komplett neu starten

---

## 📊 Minimale vs. Vollständige Installation

### Minimale Installation (nur SKILL.md)
```bash
mkdir -p ~/.claude/skills/react-expert
cp SKILL.md ~/.claude/skills/react-expert/
# Fertig! Skill funktioniert
```

### Vollständige Installation (alle Dateien)
```bash
mkdir -p ~/.claude/skills/react-expert
cp *.md ~/.claude/skills/react-expert/
# Mehr Referenzen & Dokumentation verfügbar
```

**Empfehlung:** Vollständige Installation für beste Ergebnisse!

---

## 🔗 Wichtige Links

### React-Dokumentation
- **Haupt-Docs**: https://react.dev
- **API-Referenz**: https://react.dev/reference/react
- **Learn React**: https://react.dev/learn
- **Hooks**: https://react.dev/reference/react/hooks

### Build Tools
- **Vite**: https://vitejs.dev
- **Next.js**: https://nextjs.org
- **Remix**: https://remix.run

### State Management
- **TanStack Query**: https://tanstack.com/query
- **Zustand**: https://docs.pmnd.rs/zustand
- **Redux Toolkit**: https://redux-toolkit.js.org

### UI Libraries
- **shadcn/ui**: https://ui.shadcn.com
- **Radix UI**: https://www.radix-ui.com
- **Headless UI**: https://headlessui.com

### Testing
- **Testing Library**: https://testing-library.com
- **Vitest**: https://vitest.dev
- **Playwright**: https://playwright.dev

---

## 📝 Changelog

### Version 1.0.0 (November 2025)
- ✅ YAML-Frontmatter hinzugefügt
- ✅ Kompatibel mit Claude Code
- ✅ React 18+ Support
- ✅ UI/UX Design Patterns
- ✅ Accessibility Guidelines (WCAG 2.1 AA)
- ✅ Performance-Optimierungen
- ✅ Testing Patterns
- ✅ Design Systems
- ✅ Vollständige Installation-Anleitung

---

## 💡 Tipps

### Beste Ergebnisse erzielen

1. **Konkreter sein:**
   ```
   ❌ "Wie geht React?"
   ✅ "Erstelle einen Custom Hook für Form-Validierung mit TypeScript"
   ```

2. **Kontext geben:**
   ```
   ✅ "Ich nutze React 18 mit Vite und TypeScript"
   ```

3. **Code teilen:**
   ```
   ✅ "Optimiere diese Component: [Code einfügen]"
   ```

4. **Spezifische Anforderungen:**
   ```
   ✅ "Erstelle ein Modal mit:
   - ARIA-Support
   - Keyboard Navigation (Esc, Tab)
   - Focus Trap
   - Tailwind CSS Styling"
   ```

### Skill-Kombination

Kombiniere mit anderen Skills:
```
@react-expert und @testing-expert Erstelle Unit Tests für diese Component
```

---

## 🤝 Team-Nutzung

### Skill im Team teilen

**1. Repository erstellen:**
```bash
cd ~/.claude/skills/react-expert
git init
git add .
git commit -m "Add React Expert Skill"
git remote add origin <your-repo>
git push
```

**2. Team-Installation:**
```bash
cd ~/.claude/skills
git clone <your-repo> react-expert
```

---

## 🎨 Beispiel-Anfragen

### Component Development
```
@react-expert Erstelle eine Card-Komponente mit:
- TypeScript Props
- Variants (default, elevated, outlined)
- Hover-Effekte
- Responsive Design
```

### Custom Hook
```
@react-expert Erstelle einen useInfiniteScroll Hook mit:
- TypeScript
- Loading State
- Error Handling
- Intersection Observer
```

### Performance
```
@react-expert Optimiere diese Liste mit 10.000 Items:
[Code]
```

### Accessibility
```
@react-expert Mache dieses Formular WCAG 2.1 AA konform:
[Code]
```

### Testing
```
@react-expert Schreibe Tests für diesen Custom Hook:
[Code]
```

---

**Version**: 1.0.0  
**Status**: ✅ Ready to use  
**YAML-Format**: ✅ Korrekt  
**Claude Code**: ✅ Kompatibel  
**React**: 18+ (Hooks, Concurrent Features, Server Components)
