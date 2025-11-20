# React Full-Stack Development Skill für Claude Code

Umfassendes Skill für professionelle React-Entwicklung mit allen wichtigen Tools und Best Practices.

---

## 1. PROJEKT-ANALYSE & SETUP

### Projekt analysieren
```bash
cat package.json                     # Dependencies & Scripts
cat vite.config.ts                   # Vite-Konfiguration
cat tsconfig.json                    # TypeScript-Config
find src -name "*.tsx" | head -20    # Projektstruktur
npm list                             # Dependency-Tree
```

### Neues Projekt
```bash
# Vite (Empfohlen)
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev

# Next.js (Full-Stack)
npx create-next-app@latest my-app --typescript --tailwind --app
cd my-app
npm run dev
```

---

## 2. KOMPONENTEN-ENTWICKLUNG

### Functional Component
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ 
  variant = 'primary',
  size = 'md',
  children,
  onClick 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'btn',
        `btn-${variant}`,
        `btn-${size}`
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

### Custom Hooks
```typescript
// useToggle
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(v => !v);
  return [value, toggle] as const;
}

// useDebounce
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => clearTimeout(handler);
  }, [value, delay]);
  
  return debouncedValue;
}

// useMediaQuery
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);
  
  return matches;
}
```

---

## 3. STATE MANAGEMENT

### Context API
```typescript
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, []);
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be within ThemeProvider');
  return context;
};
```

### TanStack Query
```typescript
// Query
const { data, isLoading, error } = useQuery({
  queryKey: ['users'],
  queryFn: async () => {
    const res = await fetch('/api/users');
    return res.json();
  },
  staleTime: 5 * 60 * 1000,
});

// Mutation
const mutation = useMutation({
  mutationFn: (newUser: User) => 
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(newUser),
    }),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['users'] });
  },
});
```

### Zustand
```typescript
import { create } from 'zustand';

interface CartStore {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  total: number;
}

export const useCartStore = create<CartStore>()((set, get) => ({
  items: [],
  addItem: (item) => set(state => ({ 
    items: [...state.items, item] 
  })),
  removeItem: (id) => set(state => ({ 
    items: state.items.filter(i => i.id !== id) 
  })),
  get total() {
    return get().items.reduce((sum, item) => sum + item.price, 0);
  },
}));
```

---

## 4. STYLING

### Tailwind CSS
```typescript
// Installation
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

// Component
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>

// Mit cn() Utility
import { cn } from '@/lib/utils';

<div className={cn(
  'base-classes',
  isActive && 'active-classes',
  className
)} />
```

### CSS Modules
```typescript
// Button.module.css
.button {
  padding: 1rem;
  border-radius: 0.5rem;
}

.primary {
  background: blue;
}

// Button.tsx
import styles from './Button.module.css';

<button className={`${styles.button} ${styles.primary}`}>
  Click
</button>
```

---

## 5. PERFORMANCE-OPTIMIERUNG

### React.memo
```typescript
const ExpensiveComponent = memo(function ExpensiveComponent({ data }: Props) {
  return <div>{/* Complex rendering */}</div>;
}, (prevProps, nextProps) => {
  return prevProps.data.id === nextProps.data.id;
});
```

### useMemo & useCallback
```typescript
function DataTable({ items }: { items: Item[] }) {
  // Memoize expensive computation
  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => a.name.localeCompare(b.name));
  }, [items]);
  
  // Memoize callback
  const handleClick = useCallback((id: string) => {
    console.log('Clicked:', id);
  }, []);
  
  return (
    <div>
      {sortedItems.map(item => (
        <div key={item.id} onClick={() => handleClick(item.id)}>
          {item.name}
        </div>
      ))}
    </div>
  );
}
```

### Code Splitting
```typescript
import { lazy, Suspense } from 'react';

// Component Lazy Loading
const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}
```

---

## 6. TESTING

### React Testing Library
```typescript
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('LoginForm', () => {
  it('should submit form', async () => {
    const onSubmit = vi.fn();
    const user = userEvent.setup();
    
    render(<LoginForm onSubmit={onSubmit} />);
    
    await user.type(screen.getByLabelText(/email/i), 'test@example.com');
    await user.type(screen.getByLabelText(/password/i), 'password');
    await user.click(screen.getByRole('button', { name: /login/i }));
    
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password',
      });
    });
  });
});
```

### Custom Hook Testing
```typescript
import { renderHook, act } from '@testing-library/react';

describe('useCounter', () => {
  it('should increment', () => {
    const { result } = renderHook(() => useCounter(0));
    
    expect(result.current.count).toBe(0);
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
  });
});
```

---

## 7. ACCESSIBILITY

### ARIA Patterns
```typescript
// Modal
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">Title</h2>
  <p id="modal-description">Description</p>
</div>

// Button
<button
  aria-label="Close"
  aria-pressed={isPressed}
  aria-expanded={isExpanded}
>
  <X />
</button>

// Form
<label htmlFor="email">Email</label>
<input
  id="email"
  type="email"
  aria-required="true"
  aria-invalid={!!error}
  aria-describedby={error ? "email-error" : undefined}
/>
{error && <span id="email-error" role="alert">{error}</span>}
```

### Keyboard Navigation
```typescript
function ComboBox({ options }: Props) {
  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        // Navigate down
        break;
      case 'ArrowUp':
        e.preventDefault();
        // Navigate up
        break;
      case 'Enter':
        // Select
        break;
      case 'Escape':
        // Close
        break;
    }
  };
  
  return (
    <div
      role="combobox"
      aria-expanded={isOpen}
      onKeyDown={handleKeyDown}
    >
      {/* Content */}
    </div>
  );
}
```

---

## 8. BUILD & DEPLOYMENT

### Vite Build
```bash
# Production Build
npm run build

# Preview
npm run preview

# Analyze Bundle
npm install -D rollup-plugin-visualizer
```

### Next.js Build
```bash
# Production Build
npm run build

# Start Production Server
npm run start

# Analyze Bundle
ANALYZE=true npm run build
```

### Dockerfile
```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 9. DEBUGGING

### React DevTools
```bash
# Browser Extension installieren
# Chrome/Edge/Firefox
```

### Performance Profiling
```typescript
import { Profiler, ProfilerOnRenderCallback } from 'react';

const onRender: ProfilerOnRenderCallback = (
  id,
  phase,
  actualDuration,
  baseDuration
) => {
  console.log(`${id} (${phase}): ${actualDuration}ms`);
};

<Profiler id="App" onRender={onRender}>
  <App />
</Profiler>
```

### Error Boundary
```typescript
class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false };
  
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }
  
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

---

## 10. HÄUFIGE PROBLEME

### Infinite Re-renders
```typescript
// ❌ Problem
function Component() {
  const [count, setCount] = useState(0);
  setCount(count + 1); // Infinite loop!
}

// ✅ Lösung
useEffect(() => {
  setCount(count + 1);
}, []); // Nur einmal
```

### Stale Closures
```typescript
// ❌ Problem
function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1); // Stale closure!
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  // ✅ Lösung
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c + 1); // Functional update
    }, 1000);
    return () => clearInterval(timer);
  }, []);
}
```

---

## 11. CLI CHEAT SHEET

```bash
# Development
npm run dev
npm run dev -- --port 3001

# Build
npm run build
npm run preview

# Testing
npm test
npm run test:coverage
npx playwright test

# Linting
npm run lint
npm run lint:fix

# Type Checking
npx tsc --noEmit

# Dependencies
npm install package-name
npm install -D package-name
npm update
npm outdated
```

---

## 12. WORKFLOW: NEUES FEATURE

```bash
# 1. Feature-Component erstellen
mkdir src/features/user-dashboard
touch src/features/user-dashboard/UserDashboard.tsx

# 2. Styles hinzufügen
touch src/features/user-dashboard/UserDashboard.module.css

# 3. Types definieren
touch src/features/user-dashboard/types.ts

# 4. Custom Hooks
touch src/features/user-dashboard/useUserData.ts

# 5. Tests schreiben
touch src/features/user-dashboard/UserDashboard.test.tsx

# 6. Build prüfen
npm run build
```

---

## BEST PRACTICES

### Performance
✅ React.memo für teure Komponenten
✅ useMemo für teure Berechnungen
✅ useCallback für Event Handler
✅ Code Splitting mit lazy()
✅ Virtual Scrolling für lange Listen

### Code Quality
✅ TypeScript Strict Mode
✅ ESLint + Prettier
✅ Unit Tests (>80% Coverage)
✅ Keine any-Types
✅ Interfaces für Props

### Architecture
✅ Feature-basierte Struktur
✅ Custom Hooks für Logik
✅ Presentational vs. Container Components
✅ Single Responsibility
✅ Composition over Inheritance

### Security
✅ Input Sanitization
✅ HTTPS für APIs
✅ Environment Variables für Secrets
✅ Content Security Policy
✅ XSS Prevention

---

## RESSOURCEN

- React Docs: https://react.dev
- Vite: https://vitejs.dev
- Next.js: https://nextjs.org
- TanStack Query: https://tanstack.com/query
- Tailwind CSS: https://tailwindcss.com
- Testing Library: https://testing-library.com
- Radix UI: https://www.radix-ui.com
- shadcn/ui: https://ui.shadcn.com

---

**Version**: React 18+
**Erstellt für**: Claude Code Skill System
