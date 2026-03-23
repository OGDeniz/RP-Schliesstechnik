---
name: react-expert
description: Comprehensive React development skill with focus on modern React patterns, component design, UI/UX best practices, and design systems
---

# React Expert Development Skill

## Description

Umfassender React-Entwicklungs-Skill mit Fokus auf moderne React-Patterns, Komponentendesign, UI/UX-Expertise und Design Systems. Ermöglicht Claude die Bereitstellung präziser, aktueller Anleitungen für React 18+ Projekte mit Hooks, Server Components und modernen Best Practices.

## Capabilities

- **Project Analysis**: React-Projektstruktur, Architektur und Performance verstehen
- **Component Development**: Funktionale Komponenten, Custom Hooks und Patterns erstellen
- **UI/UX Design**: User-zentrierte Interfaces mit Accessibility und Usability gestalten
- **Styling Solutions**: CSS Modules, Tailwind, styled-components, CSS-in-JS implementieren
- **State Management**: Context API, Zustand, Redux Toolkit, TanStack Query nutzen
- **Performance Optimization**: Code Splitting, Memoization, Lazy Loading anwenden
- **Testing**: Unit Tests, Integration Tests, E2E Tests mit Jest, RTL, Playwright
- **Design Systems**: Konsistente Component Libraries und Design Tokens entwickeln
- **Accessibility**: WCAG-konforme Komponenten mit ARIA-Support erstellen

## Usage Instructions

### When to Use This Skill

Verwende diesen Skill wenn:

- React-Projekte analysiert oder debuggt werden
- React-Komponenten erstellt oder optimiert werden
- UI/UX-Patterns implementiert werden müssen
- Design Systems entwickelt werden
- Performance-Optimierungen erforderlich sind
- Accessibility-Standards eingehalten werden sollen
- State Management implementiert wird
- Testing-Strategien entwickelt werden
- Styling-Lösungen gewählt werden müssen

### How Claude Should Use This Skill

**ALWAYS** referenziere die offizielle React-Dokumentation bei:

1. Implementierung neuer Features oder Patterns
2. "Wie implementiere ich..."-Fragen zu React
3. Debugging React-spezifischer Fehler
4. Empfehlungen für React Best Practices
5. Unsicherheit über React API-Änderungen

**Primary Documentation Sources:**

- Main Docs: https://react.dev
- API Reference: https://react.dev/reference/react
- React Hooks: https://react.dev/reference/react/hooks
- React DOM: https://react.dev/reference/react-dom
- Learn React: https://react.dev/learn

**Additional Resources:**

- Next.js: https://nextjs.org/docs
- Vite: https://vitejs.dev/guide/
- TanStack Query: https://tanstack.com/query/latest
- Zustand: https://docs.pmnd.rs/zustand/getting-started/introduction
- Tailwind CSS: https://tailwindcss.com/docs
- Radix UI: https://www.radix-ui.com/primitives/docs/overview/introduction
- shadcn/ui: https://ui.shadcn.com

### Workflow

1. **Analyze the Request**

   - Bestimme React-Version und Setup (Vite, Next.js, CRA)
   - Identifiziere UI/UX-Anforderungen
   - Prüfe Design System-Kontext

2. **Reference Documentation**

   - Suche offizielle Docs für spezifische Features
   - Verifiziere aktuelle Best Practices
   - Prüfe auf deprecated APIs

3. **Provide Solution**

   - Code-Beispiele basierend auf offiziellen Docs
   - UI/UX-Rationale erklären
   - Design Patterns dokumentieren
   - CLI-Commands inkludieren

4. **Validate**
   - TypeScript-Strict-Mode-Kompatibilität
   - Accessibility-Standards (WCAG 2.1 AA)
   - Performance Best Practices
   - Responsive Design

## Key React Concepts

### Modern Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI Components
│   ├── features/        # Feature-specific Components
│   ├── layouts/         # Layout Components
│   └── forms/           # Form Components
├── hooks/               # Custom Hooks
├── contexts/            # React Contexts
├── lib/                 # Utilities & Helpers
├── styles/              # Global Styles
├── types/               # TypeScript Types
├── api/                 # API Layer
├── store/               # State Management
└── App.tsx              # Root Component
```

### Setup Commands

```bash
# Vite (Recommended)
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install

# Next.js (Full-Stack)
npx create-next-app@latest my-app --typescript --tailwind --app
cd my-app
npm run dev

# Add Common Dependencies
npm install @tanstack/react-query zustand
npm install -D tailwindcss postcss autoprefixer
npm install lucide-react clsx tailwind-merge
```

### Modern React Patterns (18+)

**Functional Component with TypeScript**

```typescript
interface UserCardProps {
  user: {
    id: string;
    name: string;
    email: string;
  };
  onEdit?: (id: string) => void;
  variant?: "default" | "compact";
}

export function UserCard({ user, onEdit, variant = "default" }: UserCardProps) {
  return (
    <div
      className={cn("rounded-lg border p-4", variant === "compact" && "p-2")}
    >
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      {onEdit && <button onClick={() => onEdit(user.id)}>Edit</button>}
    </div>
  );
}
```

**Custom Hooks**

```typescript
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}
```

## Performance Best Practices

1. **React.memo**

   ```typescript
   const ExpensiveComponent = memo(function ExpensiveComponent({ data }) {
     return <div>{/* ... */}</div>;
   });
   ```

2. **useMemo & useCallback**

   ```typescript
   const sortedItems = useMemo(
     () => [...items].sort((a, b) => a.name.localeCompare(b.name)),
     [items]
   );
   ```

3. **Code Splitting**

   ```typescript
   const Dashboard = lazy(() => import("./Dashboard"));

   <Suspense fallback={<Loading />}>
     <Dashboard />
   </Suspense>;
   ```

4. **Virtual Scrolling**
   ```typescript
   import { useVirtualizer } from "@tanstack/react-virtual";
   ```

## Testing Patterns

```typescript
import { render, screen, fireEvent } from "@testing-library/react";

describe("LoginForm", () => {
  it("should submit with valid credentials", async () => {
    const onSubmit = vi.fn();
    render(<LoginForm onSubmit={onSubmit} />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@example.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(onSubmit).toHaveBeenCalled();
  });
});
```

## Accessibility Guidelines

```typescript
// ARIA Patterns
<button aria-label="Close modal" aria-pressed={isOpen} onClick={onClose}>
  <X />
</button>;

// Keyboard Navigation
const handleKeyDown = (e: KeyboardEvent) => {
  switch (e.key) {
    case "ArrowDown":
      e.preventDefault();
      // Navigate down
      break;
    case "Enter":
      // Select item
      break;
    case "Escape":
      // Close
      break;
  }
};
```

## Documentation References

**Official React:**

- https://react.dev
- https://react.dev/reference/react
- https://react.dev/learn

**Build Tools:**

- https://vitejs.dev
- https://nextjs.org
- https://remix.run

**State Management:**

- https://tanstack.com/query
- https://docs.pmnd.rs/zustand
- https://redux-toolkit.js.org

**UI Libraries:**

- https://ui.shadcn.com
- https://www.radix-ui.com
- https://headlessui.com

**Testing:**

- https://testing-library.com/react
- https://vitest.dev
- https://playwright.dev

**Accessibility:**

- https://www.w3.org/WAI/WCAG21/quickref/
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA

## Notes

- Fokus auf React 18+ mit Hooks und Functional Components
- Immer TypeScript verwenden für Type Safety
- UI/UX-Prinzipien in Design-Entscheidungen einbeziehen
- WCAG 2.1 AA Standards einhalten
- Performance von Anfang an berücksichtigen
- Design Systems für Konsistenz nutzen
- Testing als integraler Bestandteil

## Version Compatibility

- **Primary Focus**: React 18+ (Hooks, Concurrent Features)
- **Modern Features**: Server Components, Suspense, Transitions
- **Build Tools**: Vite (empfohlen), Next.js 14+, Remix
- **TypeScript**: 5.0+
