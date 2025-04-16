import { GetServerSideProps } from 'next';
import { parse } from 'cookie';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

// Zugriffsschutz: Cookie prüfen
export const getServerSideProps: GetServerSideProps = async (context) => {
    const cookies = parse(context.req.headers.cookie || '');

    if (cookies.admin !== 'true') {
        return {
            redirect: {
                destination: '/admin/login',
                permanent: false,
            },
        };
    }

    return { props: {} };
};

export default function AdminDashboard() {
    const router = useRouter();
    const [viewCount, setViewCount] = useState<number | null>(null);
    const [lastVisit, setLastVisit] = useState<string | null>(null); // ✅ hinzugefügt

    const handleLogout = async () => {
        await fetch('/api/admin/logout');
        router.push('/admin/login');
    };

    useEffect(() => {
        fetch('/api/views')
            .then((res) => res.json())
            .then((data) => {
                setViewCount(data.viewCount);
                setLastVisit(data.lastVisit); // ✅ korrekt gesetzt
            })
            .catch((err) => console.error("Zähler-Fehler:", err)); // ✅ jetzt korrekt geschlossen
    }, []);

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f0f0f0'
        }}>
            <div style={{
                padding: '2rem',
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                width: '400px'
            }}>
                <h1>Willkommen im Adminbereich</h1>
                <p>Du bist erfolgreich eingeloggt ✅</p>

                {viewCount !== null && (
                    <p style={{ fontSize: '1.1rem' }}>
                        🔢 Seitenaufrufe gesamt: <strong>{viewCount}</strong>
                    </p>
                )}

                {lastVisit && (
                    <p style={{ fontSize: '1rem', color: '#666', marginTop: '-0.5rem' }}>
                        ⏰ Letzter Seitenaufruf: <strong>{new Date(lastVisit).toLocaleString('de-DE')}</strong>
                    </p>
                )}

                <button
                    onClick={handleLogout}
                    style={{
                        marginTop: '1rem',
                        padding: '0.8rem 1.5rem',
                        backgroundColor: '#b30000',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
