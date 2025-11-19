# React Dokumentations-Referenz Skill

Detaillierte Referenzen zur offiziellen React-Dokumentation mit Code-Beispielen und Best Practices.

---

## OFFIZIELLE DOKUMENTATIONS-QUELLEN

### Primary Sources
- **Main Docs**: https://react.dev
- **API Reference**: https://react.dev/reference/react
- **React Hooks**: https://react.dev/reference/react/hooks
- **React DOM**: https://react.dev/reference/react-dom
- **Server Components**: https://react.dev/reference/rsc/server-components
- **Learn React**: https://react.dev/learn

### Build Tools
- **Vite**: https://vitejs.dev/guide/
- **Next.js**: https://nextjs.org/docs
- **Remix**: https://remix.run/docs

### State Management
- **TanStack Query**: https://tanstack.com/query/latest/docs/framework/react/overview
- **Zustand**: https://docs.pmnd.rs/zustand/getting-started/introduction
- **Redux Toolkit**: https://redux-toolkit.js.org

### UI Libraries
- **shadcn/ui**: https://ui.shadcn.com
- **Radix UI**: https://www.radix-ui.com/primitives/docs/overview/introduction
- **Headless UI**: https://headlessui.com
- **Chakra UI**: https://chakra-ui.com/docs/getting-started

### Styling
- **Tailwind CSS**: https://tailwindcss.com/docs
- **styled-components**: https://styled-components.com/docs
- **Emotion**: https://emotion.sh/docs/introduction

### Testing
- **Testing Library**: https://testing-library.com/docs/react-testing-library/intro
- **Vitest**: https://vitest.dev/guide/
- **Playwright**: https://playwright.dev/docs/intro

### Accessibility
- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **MDN ARIA**: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA
- **React Accessibility**: https://react.dev/learn/accessibility

---

## 1. KOMPONENTEN

### Functional Components
**Docs**: https://react.dev/learn/your-first-component

```typescript
// Basic Component
interface GreetingProps {
  name: string;
  age?: number;
}

export function Greeting({ name, age }: GreetingProps) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age && <p>Age: {age}</p>}
    </div>
  );
}

// Component mit Children
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('container', className)}>
      {children}
    </div>
  );
}

// Component mit Render Props
interface DataFetcherProps<T> {
  url: string;
  children: (data: T | null, loading: boolean, error: Error | null) => React.ReactNode;
}

export function DataFetcher<T>({ url, children }: DataFetcherProps<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return <>{children(data, loading, error)}</>;
}
```

---

## 2. HOOKS

### useState
**Docs**: https://react.dev/reference/react/useState

```typescript
// Basic State
const [count, setCount] = useState(0);
const [name, setName] = useState('');
const [isOpen, setIsOpen] = useState(false);

// Object State
interface User {
  name: string;
  email: string;
}

const [user, setUser] = useState<User>({
  name: '',
  email: ''
});

// Update einzelnes Feld
setUser(prev => ({ ...prev, name: 'John' }));

// Array State
const [items, setItems] = useState<string[]>([]);

// Add item
setItems(prev => [...prev, 'new item']);

// Remove item
setItems(prev => prev.filter(item => item !== 'remove me'));

// Lazy Initialization
const [value, setValue] = useState(() => {
  const saved = localStorage.getItem('key');
  return saved ? JSON.parse(saved) : initialValue;
});
```

### useEffect
**Docs**: https://react.dev/reference/react/useEffect

```typescript
// Mount only
useEffect(() => {
  console.log('Component mounted');
}, []);

// With dependencies
useEffect(() => {
  console.log('Count changed:', count);
}, [count]);

// With cleanup
useEffect(() => {
  const subscription = api.subscribe();
  
  return () => {
    subscription.unsubscribe();
  };
}, []);

// Fetch Data
useEffect(() => {
  let cancelled = false;
  
  async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    
    if (!cancelled) {
      setData(data);
    }
  }
  
  fetchData();
  
  return () => {
    cancelled = true;
  };
}, [url]);
```

### useMemo
**Docs**: https://react.dev/reference/react/useMemo

```typescript
// Expensive Computation
const sortedItems = useMemo(() => {
  return items.sort((a, b) => a.name.localeCompare(b.name));
}, [items]);

// Filtered Data
const filteredUsers = useMemo(() => {
  return users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}, [users, searchTerm]);

// Complex Object
const config = useMemo(() => ({
  apiUrl: process.env.API_URL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
}), []);
```

### useCallback
**Docs**: https://react.dev/reference/react/useCallback

```typescript
// Event Handler
const handleClick = useCallback(() => {
  console.log('Clicked with count:', count);
}, [count]);

// With Parameters
const handleDelete = useCallback((id: string) => {
  setItems(prev => prev.filter(item => item.id !== id));
}, []);

// API Call
const fetchData = useCallback(async () => {
  const response = await fetch(`/api/data?filter=${filter}`);
  const data = await response.json();
  setData(data);
}, [filter]);
```

### useRef
**Docs**: https://react.dev/reference/react/useRef

```typescript
// DOM Reference
const inputRef = useRef<HTMLInputElement>(null);

useEffect(() => {
  inputRef.current?.focus();
}, []);

// Mutable Value
const countRef = useRef(0);

const handleClick = () => {
  countRef.current += 1;
  console.log('Clicks:', countRef.current);
};

// Previous Value
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  
  useEffect(() => {
    ref.current = value;
  }, [value]);
  
  return ref.current;
}
```

### useContext
**Docs**: https://react.dev/reference/react/useContext

```typescript
// Context Definition
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  
  const login = async (email: string, password: string) => {
    const user = await api.login(email, password);
    setUser(user);
  };
  
  const logout = () => {
    api.logout();
    setUser(null);
  };
  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom Hook
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
```

### useReducer
**Docs**: https://react.dev/reference/react/useReducer

```typescript
// State & Actions
interface State {
  count: number;
  error: string | null;
}

type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' }
  | { type: 'ERROR'; payload: string };

// Reducer
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'RESET':
      return { count: 0, error: null };
    case 'ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

// Usage
function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0, error: null });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}
```

---

## 3. CUSTOM HOOKS

**Docs**: https://react.dev/learn/reusing-logic-with-custom-hooks

### useLocalStorage
```typescript
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}

// Usage
const [theme, setTheme] = useLocalStorage('theme', 'light');
```

### useDebounce
```typescript
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Usage
const [searchTerm, setSearchTerm] = useState('');
const debouncedSearchTerm = useDebounce(searchTerm, 500);

useEffect(() => {
  // API call mit debounced value
  fetchResults(debouncedSearchTerm);
}, [debouncedSearchTerm]);
```

### useAsync
```typescript
interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

function useAsync<T>(asyncFunction: () => Promise<T>, immediate = true) {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: immediate,
    error: null,
  });

  const execute = useCallback(async () => {
    setState({ data: null, loading: true, error: null });
    
    try {
      const data = await asyncFunction();
      setState({ data, loading: false, error: null });
    } catch (error) {
      setState({ data: null, loading: false, error: error as Error });
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { ...state, execute };
}

// Usage
const { data, loading, error, execute } = useAsync(
  () => fetch('/api/data').then(res => res.json())
);
```

---

## 4. PERFORMANCE

### React.memo
**Docs**: https://react.dev/reference/react/memo

```typescript
// Simple Memoization
const UserCard = memo(function UserCard({ user }: { user: User }) {
  return <div>{user.name}</div>;
});

// Custom Comparison
const ExpensiveComponent = memo(
  function ExpensiveComponent({ data }: Props) {
    return <div>{/* Complex rendering */}</div>;
  },
  (prevProps, nextProps) => {
    return prevProps.data.id === nextProps.data.id;
  }
);
```

### Code Splitting
**Docs**: https://react.dev/reference/react/lazy

```typescript
// Lazy Loading
const Dashboard = lazy(() => import('./Dashboard'));
const Profile = lazy(() => import('./Profile'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Suspense>
  );
}

// Named Exports
const { AdminPanel } = lazy(() =>
  import('./Admin').then(module => ({
    default: module.AdminPanel
  }))
);
```

---

## 5. STATE MANAGEMENT

### TanStack Query
**Docs**: https://tanstack.com/query/latest/docs/framework/react/overview

```typescript
// Query
function Users() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch('/api/users');
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 Minuten
    gcTime: 10 * 60 * 1000,   // 10 Minuten
  });

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div>
      {data.map(user => <UserCard key={user.id} user={user} />)}
      <button onClick={() => refetch()}>Refresh</button>
    </div>
  );
}

// Mutation
function CreateUser() {
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: (newUser: NewUser) => {
      return fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(newUser),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const handleSubmit = (data: NewUser) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button disabled={mutation.isPending}>
        {mutation.isPending ? 'Creating...' : 'Create User'}
      </button>
    </form>
  );
}

// Infinite Query
function InfiniteUsers() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['users', 'infinite'],
    queryFn: ({ pageParam = 0 }) =>
      fetch(`/api/users?page=${pageParam}`).then(res => res.json()),
    getNextPageParam: (lastPage, pages) => lastPage.nextPage,
    initialPageParam: 0,
  });

  return (
    <div>
      {data?.pages.map((page, i) => (
        <div key={i}>
          {page.users.map(user => <UserCard key={user.id} user={user} />)}
        </div>
      ))}
      {hasNextPage && (
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
}
```

### Zustand
**Docs**: https://docs.pmnd.rs/zustand

```typescript
import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

// Store Definition
interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  get total(): number;
}

export const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set, get) => ({
        items: [],
        
        addItem: (item) =>
          set((state) => ({
            items: [...state.items, item],
          })),
        
        removeItem: (id) =>
          set((state) => ({
            items: state.items.filter((item) => item.id !== id),
          })),
        
        clearCart: () => set({ items: [] }),
        
        get total() {
          return get().items.reduce((sum, item) => sum + item.price, 0);
        },
      }),
      {
        name: 'cart-storage',
      }
    )
  )
);

// Usage in Component
function Cart() {
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.total);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <p>Total: ${total}</p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}
```

---

## 6. FORMS

### Uncontrolled Forms
```typescript
function UncontrolledForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" />
      <input name="password" type="password" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Controlled Forms
```typescript
function ControlledForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 7. STYLING

### Tailwind CSS
**Docs**: https://tailwindcss.com/docs

```typescript
// Setup
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
      },
    },
  },
  plugins: [],
};

// Component
function Button({ variant = 'primary', children }) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-md font-medium transition-colors',
        variant === 'primary' && 'bg-blue-500 text-white hover:bg-blue-600',
        variant === 'secondary' && 'bg-gray-200 text-gray-900 hover:bg-gray-300'
      )}
    >
      {children}
    </button>
  );
}
```

---

## 8. TESTING

### React Testing Library
**Docs**: https://testing-library.com/docs/react-testing-library/intro

```typescript
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('LoginForm', () => {
  it('should render form fields', () => {
    render(<LoginForm />);
    
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('should submit form with valid data', async () => {
    const onSubmit = vi.fn();
    const user = userEvent.setup();
    
    render(<LoginForm onSubmit={onSubmit} />);
    
    await user.type(screen.getByLabelText(/email/i), 'test@example.com');
    await user.type(screen.getByLabelText(/password/i), 'password123');
    await user.click(screen.getByRole('button', { name: /login/i }));
    
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
      });
    });
  });

  it('should show validation errors', async () => {
    const user = userEvent.setup();
    render(<LoginForm />);
    
    await user.click(screen.getByRole('button', { name: /login/i }));
    
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
  });
});
```

---

## 9. ACCESSIBILITY

**Docs**: https://react.dev/learn/accessibility

### ARIA Patterns
```typescript
// Modal Dialog
function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const titleId = useId();

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative bg-white rounded-lg p-6">
        <h2 id={titleId}>{title}</h2>
        {children}
        <button
          onClick={onClose}
          aria-label="Close modal"
        >
          <X />
        </button>
      </div>
    </div>
  );
}

// Tabs
function Tabs({ tabs }: { tabs: TabItem[] }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={activeTab !== index}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
```

---

**Version**: 1.0.0
**Erstellt für**: Claude Code - React Expert Skill
**Letzte Aktualisierung**: November 2025
