# CSS Skill Installation für Claude Code

## ⚠️ WICHTIG: YAML-Frontmatter erforderlich

Die SKILL.md-Datei **muss** mit YAML-Frontmatter beginnen:

```yaml
---
name: css-expert
description: Ultimate CSS expert skill with modern CSS features
---
```

**Nur diese Felder sind erlaubt:**
- `name` (erforderlich)
- `description` (erforderlich)
- `license` (optional)
- `allowed-tools` (optional)
- `metadata` (optional)

❌ **Nicht verwenden:** `version`, `author` oder andere Felder!

---

## 📦 Enthaltene Dateien

1. **SKILL.md** (10 KB) ⭐ HAUPT-DATEI
   - ✅ MIT korrektem YAML-Frontmatter
   - CSS Expert Skill-Definition
   - **MUSS** im Skills-Ordner liegen

2. **CSS-DOCS-REFERENCE-SKILL.md** (28 KB)
   - Umfassende CSS-Tricks Referenzen
   - Complete Guides zu Flexbox, Grid, Custom Properties
   - Code-Beispiele und Best Practices
   - Optional, aber empfohlen

3. **CSS-SKILL.md** (12 KB)
   - Kompaktes Cheat Sheet
   - Schnelle Referenz für häufige Patterns
   - Optional

---

## 🚀 Installation in Claude Code

### Schritt 1: Skill-Ordner vorbereiten

**Windows:**
```cmd
mkdir %USERPROFILE%\.claude\skills\css-expert
```

**macOS/Linux:**
```bash
mkdir -p ~/.claude/skills/css-expert
```

### Schritt 2: SKILL.md kopieren

**Windows:**
```cmd
copy SKILL.md %USERPROFILE%\.claude\skills\css-expert\SKILL.md
```

**macOS/Linux:**
```bash
cp SKILL.md ~/.claude/skills/css-expert/SKILL.md
```

### Schritt 3: Optional - Referenz-Dateien kopieren

**Windows:**
```cmd
copy CSS-DOCS-REFERENCE-SKILL.md %USERPROFILE%\.claude\skills\css-expert\
copy CSS-SKILL.md %USERPROFILE%\.claude\skills\css-expert\
```

**macOS/Linux:**
```bash
cp CSS-DOCS-REFERENCE-SKILL.md ~/.claude/skills/css-expert/
cp CSS-SKILL.md ~/.claude/skills/css-expert/
```

### Schritt 4: YAML-Format verifizieren

```bash
# macOS/Linux
head -5 ~/.claude/skills/css-expert/SKILL.md

# Windows PowerShell
Get-Content "$env:USERPROFILE\.claude\skills\css-expert\SKILL.md" -First 5
```

**Erwartete Ausgabe:**
```yaml
---
name: css-expert
description: Ultimate CSS expert skill with modern CSS features
---
```

### Schritt 5: Claude Code neu starten

Beende Claude Code komplett und starte neu.

### Schritt 6: Skill aktivieren

1. Command Palette: Strg+Shift+P / Cmd+Shift+P
2. Suche: "Claude: Manage Skills"
3. Aktiviere: "CSS Expert Development Skill"

---

## ✅ Skill testen

### Test 1: Skill erkannt?
```
Prompt: "List available skills"
```
**Erwartung:** "css-expert" wird aufgelistet

### Test 2: Flexbox Layout
```
Prompt: "@css-expert Erstelle ein Flexbox-Layout für eine Navigation"
```

### Test 3: Grid System
```
Prompt: "@css-expert Implementiere ein responsives CSS Grid"
```

### Test 4: Container Queries
```
Prompt: "@css-expert Zeige mir Container Queries Beispiele"
```

---

## 🛠 Troubleshooting

### Problem: Fehlermeldung "Unexpected key in SKILL.md frontmatter"

**Ursache:** Nur bestimmte YAML-Felder sind erlaubt.

**Lösung:** Verwende NUR:
```yaml
---
name: css-expert
description: Ultimate CSS expert skill with modern CSS features
---
```

### Problem: Skill wird nicht erkannt

**Checkliste:**
1. ✅ Datei heißt **exakt** "SKILL.md"
2. ✅ Liegt in: `~/.claude/skills/css-expert/SKILL.md`
3. ✅ Erste Zeile ist `---`
4. ✅ Nur erlaubte YAML-Felder
5. ✅ Claude Code neu gestartet

### Problem: Skill lädt nicht

**Lösungen:**

1. **YAML-Syntax prüfen:**
   ```bash
   head -10 ~/.claude/skills/css-expert/SKILL.md
   ```

2. **Berechtigungen:**
   ```bash
   chmod 644 ~/.claude/skills/css-expert/SKILL.md
   ```

3. **Cache leeren:**
   ```bash
   rm -rf ~/.claude/cache
   ```

---

## 🎯 Verwendung

### Skill referenzieren
```
@css-expert Erstelle ein responsives Grid-Layout
```

### Typische Use Cases

**Layout mit Flexbox:**
```
@css-expert Erstelle eine Navigation mit Flexbox die:
- Logo links
- Menu-Items zentriert
- Button rechts
- Responsive für Mobile
```

**Grid System:**
```
@css-expert Implementiere ein CSS Grid mit:
- 3 Spalten auf Desktop
- 2 Spalten auf Tablet
- 1 Spalte auf Mobile
- 1rem Gap
```

**Custom Properties:**
```
@css-expert Erstelle ein Theme-System mit CSS Variables für:
- Light/Dark Mode
- Primärfarben
- Spacing-Scale
- Typography
```

**Container Queries:**
```
@css-expert Zeige mir ein Card-Component mit Container Queries
```

**Animations:**
```
@css-expert Erstelle eine Fade-In Animation mit Stagger-Effect
```

---

## 💡 Best Practices

### 1. Minimale SKILL.md
```yaml
---
name: css-expert
description: Ultimate CSS expert skill with modern CSS features
---
```

### 2. Skill-Versionierung
```bash
cd ~/.claude/skills
git init
git add css-expert/
git commit -m "Add CSS Expert Skill"
```

### 3. Team-Installation
```bash
# Team-Repo
cd ~/.claude/skills
git clone <your-repo> css-expert
```

---

## 📞 Häufige Fehler

| Fehler | Ursache | Lösung |
|--------|---------|--------|
| Unexpected key | Unerlaubte YAML-Felder | Nur `name` und `description` |
| YAML frontmatter error | Kein `---` | Erste Zeile muss `---` sein |
| Skill not found | Falscher Dateiname | Muss "SKILL.md" heißen |
| Permission denied | Keine Rechte | `chmod 644 SKILL.md` |

---

## 📚 Ressourcen

- **CSS-Tricks**: https://css-tricks.com
- **MDN Web Docs**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **Can I Use**: https://caniuse.com
- **Claude Code**: https://docs.claude.com/claude-code

---

**Aktualisiert**: November 2025  
**Claude Code**: ✅ Kompatibel  
**YAML-Format**: ✅ Korrekt (nur name + description)
