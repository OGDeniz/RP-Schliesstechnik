# React Skill Installation für Claude Code

## ⚠️ WICHTIG: YAML-Frontmatter erforderlich

Die SKILL.md-Datei **muss** mit YAML-Frontmatter beginnen:

```yaml
---
name: react-expert
description: Comprehensive React development skill
version: 1.0.0
author: Custom
---
```

**Das SKILL.md enthält bereits das korrekte Format!**

---

## 📦 Enthaltene Dateien

1. **SKILL.md** (8 KB) ⭐ HAUPT-DATEI
   - ✅ MIT YAML-Frontmatter (---)
   - Claude Code Skill-Definition
   - **MUSS** im Skills-Ordner liegen

2. **REACT-DOCS-REFERENCE-SKILL.md** (22 KB)
   - Detaillierte Dokumentations-Referenzen
   - Code-Beispiele aus offizieller React-Doku
   - Optional, aber empfohlen

3. **REACT-SKILL.md** (10 KB)
   - Kompaktes Cheat Sheet
   - CLI-Befehle und Quick Reference
   - Optional

4. **INSTALLATION-ANLEITUNG.md** (diese Datei)
   - Schritt-für-Schritt Installation
   - Troubleshooting
   - Verifikations-Scripts

5. **README.md**
   - Übersicht über das Paket
   - Quick Start Guide

---

## 🚀 Installation in Claude Code

### Schritt 1: Skill-Ordner vorbereiten

**Windows:**
```cmd
mkdir %USERPROFILE%\.claude\skills\react-expert
```

**macOS/Linux:**
```bash
mkdir -p ~/.claude/skills/react-expert
```

### Schritt 2: SKILL.md kopieren (Wichtigste Datei!)

**Windows:**
```cmd
copy SKILL.md %USERPROFILE%\.claude\skills\react-expert\SKILL.md
```

**macOS/Linux:**
```bash
cp SKILL.md ~/.claude/skills/react-expert/SKILL.md
```

### Schritt 3: Optional - Referenz-Dateien kopieren

**Windows:**
```cmd
copy REACT-DOCS-REFERENCE-SKILL.md %USERPROFILE%\.claude\skills\react-expert\
copy REACT-SKILL.md %USERPROFILE%\.claude\skills\react-expert\
```

**macOS/Linux:**
```bash
cp REACT-DOCS-REFERENCE-SKILL.md ~/.claude/skills/react-expert/
cp REACT-SKILL.md ~/.claude/skills/react-expert/
```

### Schritt 4: YAML-Format verifizieren

Prüfe, dass SKILL.md mit `---` beginnt:

```bash
# Erste Zeilen anzeigen
head -10 ~/.claude/skills/react-expert/SKILL.md
```

**Erwartete Ausgabe:**
```yaml
---
name: react-expert
description: Comprehensive React development skill
version: 1.0.0
author: Custom
---
```

### Schritt 5: Claude Code neu starten

```bash
# Claude Code komplett beenden und neu starten
# ODER: Command Palette → "Reload Window"
```

### Schritt 6: Skill aktivieren

1. Command Palette öffnen (Strg+Shift+P / Cmd+Shift+P)
2. Suchen: "Claude: Manage Skills"
3. "React Expert Development Skill" aktivieren

---

## ✅ Skill testen

### Test 1: Skill erkannt?
```
Prompt: "List available skills"
```

**Erwartung:** "react-expert" wird aufgelistet

### Test 2: Grundfunktion
```
Prompt: "@react-expert Erstelle eine wiederverwendbare Button-Komponente"
```

**Erwartung:**
- TypeScript Code-Beispiel
- Props-Interface
- Styling-Optionen
- Dokumentations-Link

### Test 3: Dokumentations-Referenz
```
Prompt: "@react-expert Wie nutze ich useMemo richtig?"
```

**Erwartung:**
- Code-Beispiel mit useMemo
- Performance-Erklärung
- Link zu https://react.dev/reference/react/useMemo

---

## 📁 Finale Ordnerstruktur

```
~/.claude/skills/react-expert/
├── SKILL.md                           # ⭐ MUSS vorhanden sein
├── REACT-DOCS-REFERENCE-SKILL.md      # Optional (Referenz)
└── REACT-SKILL.md                     # Optional (Cheat Sheet)
```

**Minimal-Installation:** Nur SKILL.md wird benötigt!

---

## 🛠 Troubleshooting

### Problem: "SKILL.md must start with YAML frontmatter (---)"

**Ursache:** SKILL.md beginnt nicht mit `---`

**Lösung:**
1. Öffne SKILL.md in einem Editor
2. Stelle sicher, dass die **erste Zeile** `---` ist
3. YAML-Block muss geschlossen sein mit `---`

**Korrektes Format:**
```yaml
---
name: react-expert
description: Comprehensive React development skill
version: 1.0.0
author: Custom
---

# React Expert Development Skill
...
```

### Problem: Skill wird nicht erkannt

**Lösungen:**

1. **Dateiname prüfen:**
   ```bash
   ls ~/.claude/skills/react-expert/
   # MUSS "SKILL.md" heißen (Groß-/Kleinschreibung beachten)
   ```

2. **YAML-Syntax validieren:**
   ```bash
   head -10 ~/.claude/skills/react-expert/SKILL.md
   # Erste Zeile MUSS "---" sein
   ```

3. **Berechtigungen prüfen:**
   ```bash
   chmod 644 ~/.claude/skills/react-expert/SKILL.md
   ```

4. **Claude Code Logs prüfen:**
   - Command Palette → "Developer: Toggle Developer Tools"
   - Console nach Fehlern durchsuchen

### Problem: Skill aktiviert, aber funktioniert nicht

**Lösungen:**

1. **Skill-Kontext verwenden:**
   ```
   @react-expert [Deine Frage]
   ```

2. **Cache leeren:**
   ```bash
   rm -rf ~/.claude/cache
   ```

3. **Neustart:**
   - Claude Code komplett beenden
   - Prozess im Task Manager prüfen
   - Neu starten

---

## 📊 Skill-Verifikation

### YAML-Frontmatter Check-Script

**PowerShell (Windows):**
```powershell
$file = "$env:USERPROFILE\.claude\skills\react-expert\SKILL.md"
$firstLine = Get-Content $file -First 1
if ($firstLine -eq "---") {
    Write-Host "✅ YAML-Frontmatter korrekt" -ForegroundColor Green
} else {
    Write-Host "❌ YAML-Frontmatter fehlt" -ForegroundColor Red
    Write-Host "Erste Zeile: $firstLine"
}
```

**Bash (macOS/Linux):**
```bash
file=~/.claude/skills/react-expert/SKILL.md
first_line=$(head -1 "$file")
if [ "$first_line" = "---" ]; then
    echo "✅ YAML-Frontmatter korrekt"
else
    echo "❌ YAML-Frontmatter fehlt"
    echo "Erste Zeile: $first_line"
fi
```

---

## 🎯 Verwendung

### Skill referenzieren

**Explizit:**
```
@react-expert Wie erstelle ich einen Custom Hook?
```

**Implizit** (wenn als Default aktiviert):
```
Erstelle einen React Component mit TypeScript
```

### Typische Anwendungsfälle

**1. Projekt-Analyse:**
```
@react-expert Analysiere mein React-Projekt und gib Verbesserungsvorschläge
```

**2. Component-Entwicklung:**
```
@react-expert Erstelle eine User-List Component mit:
- TypeScript Props
- Loading State
- Error Handling
- Responsive Design
```

**3. Performance-Optimierung:**
```
@react-expert Optimiere diese Component für bessere Performance: [Code]
```

**4. UI/UX Design:**
```
@react-expert Erstelle ein Modal mit:
- Accessibility (ARIA)
- Keyboard Navigation
- Focus Trap
- Animations
```

**5. Testing:**
```
@react-expert Schreibe Tests für diese Component mit React Testing Library: [Code]
```

---

## 💡 Best Practices

### 1. Skill-Ordner-Struktur

```
~/.claude/skills/
├── react-expert/          # React Skill
│   └── SKILL.md
├── angular-expert/        # Angular Skill
│   └── SKILL.md
└── vue-expert/            # Weiteres Skill
    └── SKILL.md
```

### 2. Skill-Versionierung

Nutze Git für deine Skills:

```bash
cd ~/.claude/skills
git init
git add .
git commit -m "Add React Expert Skill v1.0.0"
```

### 3. Team-Skills teilen

**Repository erstellen:**
```bash
cd ~/.claude/skills/react-expert
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo>
git push -u origin main
```

**Team-Installation:**
```bash
cd ~/.claude/skills
git clone <your-repo> react-expert
```

---

## 🔄 Updates

### Skill aktualisieren

1. **Neue Version herunterladen**
2. **Backup erstellen:**
   ```bash
   cp ~/.claude/skills/react-expert/SKILL.md ~/.claude/skills/react-expert/SKILL.md.backup
   ```
3. **Neue Datei kopieren**
4. **YAML-Frontmatter prüfen**
5. **Claude Code neu laden**

### Version-Check

Öffne SKILL.md und prüfe:
```yaml
---
version: 1.0.0  # ← Hier steht die Version
---
```

---

## 📞 Support

### Häufige Fehler

| Fehler | Ursache | Lösung |
|--------|---------|--------|
| YAML frontmatter error | Kein `---` am Anfang | SKILL.md korrigieren |
| Skill not found | Falscher Dateiname | Muss "SKILL.md" heißen |
| Permission denied | Keine Leserechte | `chmod 644 SKILL.md` |
| Skill not loading | Cache-Problem | Cache leeren + Neustart |

### Debug-Informationen sammeln

```bash
# System-Info
echo "OS: $(uname -s)"
echo "Claude Code Version: [Manuell prüfen]"

# Skill-Info
echo "Skill Location:"
ls -la ~/.claude/skills/react-expert/

echo "SKILL.md Content (first 20 lines):"
head -20 ~/.claude/skills/react-expert/SKILL.md
```

---

## 📚 Weitere Ressourcen

- **Claude Code Docs**: https://docs.claude.com/claude-code
- **React Docs**: https://react.dev
- **Vite Docs**: https://vitejs.dev
- **Next.js Docs**: https://nextjs.org

---

**Version**: 1.0.0
**Update**: November 2025
**Claude Code**: Compatible
**YAML-Format**: ✅ Erforderlich
