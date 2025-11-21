import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AdminLogin() {
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            console.log('Attempting login with password:', password);

            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password }),
            });

            console.log('Response status:', res.status);
            console.log('Response ok:', res.ok);

            if (res.ok) {
                console.log('Login successful, redirecting...');
                router.push('/admin/dashboard');
            } else {
                const errorData = await res.json().catch(() => ({ error: 'Unknown error' }));
                console.log('Login failed:', errorData);
                alert('Falsches Passwort oder Server-Fehler');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Verbindungsfehler. Bitte versuchen Sie es erneut.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f9f9f9'
        }}>
            <form onSubmit={handleLogin} style={{
                padding: '2rem',
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: '300px'
            }}>
                <h1 style={{ textAlign: 'center' }}>Admin Login</h1>
                <input
                    type="password"
                    placeholder="Passwort"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ padding: '0.5rem' }}
                />
                <button type="submit" disabled={isLoading} style={{
                    padding: '0.5rem',
                    backgroundColor: isLoading ? '#666' : '#333',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: isLoading ? 'not-allowed' : 'pointer'
                }}>{isLoading ? 'Wird eingeloggt...' : 'Einloggen'}</button>
            </form>
        </div>
    );
}
