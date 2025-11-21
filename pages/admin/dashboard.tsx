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
    const [buttonClicks, setButtonClicks] = useState<any>(null);

    const handleLogout = async () => {
        await fetch('/api/admin/logout');
        router.push('/admin/login');
    };

    const resetButtonStats = async (buttonType: string) => {
        try {
            const response = await fetch('/api/button-tracking', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ buttonType }),
            });

            if (response.ok) {
                const data = await response.json();
                setButtonClicks(data.buttonClicks);
            }
        } catch (error) {
            console.error('Fehler beim Reset:', error);
        }
    };

    const resetAllButtonStats = () => resetButtonStats('all');

    useEffect(() => {
        fetch('/api/views')
            .then((res) => res.json())
            .then((data) => {
                setViewCount(data.viewCount);
                setLastVisit(data.lastVisit); // ✅ korrekt gesetzt
            })
            .catch((err) => console.error("Zähler-Fehler:", err)); // ✅ jetzt korrekt geschlossen

        // Neuer Button-Tracking API Call
        fetch('/api/button-tracking')
            .then((res) => res.json())
            .then((data) => {
                setButtonClicks(data.buttonClicks);
            })
            .catch((err) => console.error("Button-Tracking-Fehler:", err));
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

                {buttonClicks && (
                    <div style={{ marginTop: '1rem', width: '100%' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <h3 style={{ margin: 0 }}>📞 Button-Klick Statistiken</h3>
                            <button
                                onClick={resetAllButtonStats}
                                style={{
                                    padding: '0.4rem 0.8rem',
                                    backgroundColor: '#6c7b95',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    fontSize: '0.8rem',
                                    transition: 'background-color 0.2s ease'
                                }}
                                title="Alle Button-Statistiken zurücksetzen"
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5a6980'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6c7b95'}
                            >
                                🗑️ Alle zurücksetzen
                            </button>
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div>
                                    <p><strong>Sticky Call Button:</strong> {buttonClicks.stickyCall?.count || 0} Klicks</p>
                                    {buttonClicks.stickyCall?.lastClick && (
                                        <p style={{ fontSize: '0.9rem', color: '#666' }}>
                                            Letzter Klick: {new Date(buttonClicks.stickyCall.lastClick).toLocaleString('de-DE')}
                                        </p>
                                    )}
                                </div>
                                <button
                                    onClick={() => resetButtonStats('stickyCall')}
                                    style={{
                                        padding: '0.2rem 0.5rem',
                                        backgroundColor: '#81c784',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        fontSize: '0.7rem',
                                        transition: 'background-color 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#66bb6a'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#81c784'}
                                >
                                    Reset
                                </button>
                            </div>
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div>
                                    <p><strong>Navigation Call Button:</strong> {buttonClicks.navigationCall?.count || 0} Klicks</p>
                                    {buttonClicks.navigationCall?.lastClick && (
                                        <p style={{ fontSize: '0.9rem', color: '#666' }}>
                                            Letzter Klick: {new Date(buttonClicks.navigationCall.lastClick).toLocaleString('de-DE')}
                                        </p>
                                    )}
                                </div>
                                <button
                                    onClick={() => resetButtonStats('navigationCall')}
                                    style={{
                                        padding: '0.2rem 0.5rem',
                                        backgroundColor: '#81c784',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        fontSize: '0.7rem',
                                        transition: 'background-color 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#66bb6a'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#81c784'}
                                >
                                    Reset
                                </button>
                            </div>
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div>
                                    <p><strong>Produkt Call Button:</strong> {buttonClicks.productCall?.count || 0} Klicks</p>
                                    {buttonClicks.productCall?.lastClick && (
                                        <p style={{ fontSize: '0.9rem', color: '#666' }}>
                                            Letzter Klick: {new Date(buttonClicks.productCall.lastClick).toLocaleString('de-DE')}
                                        </p>
                                    )}
                                </div>
                                <button
                                    onClick={() => resetButtonStats('productCall')}
                                    style={{
                                        padding: '0.2rem 0.5rem',
                                        backgroundColor: '#81c784',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        fontSize: '0.7rem',
                                        transition: 'background-color 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#66bb6a'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#81c784'}
                                >
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>
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
