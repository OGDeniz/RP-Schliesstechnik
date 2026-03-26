import { GetServerSideProps } from 'next';
import { parse } from 'cookie';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const cookies = parse(context.req.headers.cookie || '');
    if (cookies.admin !== 'true') {
        return { redirect: { destination: '/admin/login', permanent: false } };
    }
    return { props: {} };
};

interface ButtonStat {
    count: number;
    lastClick: string | null;
}

const BUTTON_LABELS: Record<string, string> = {
    stickyCall: 'Sticky Call Button',
    navigationCall: 'Navigation Call Button',
    productCall: 'Produkt Call Button',
};

function getLabel(key: string) {
    return BUTTON_LABELS[key] ?? key;
}

export default function AdminDashboard() {
    const router = useRouter();
    const [viewCount, setViewCount] = useState<number | null>(null);
    const [lastVisit, setLastVisit] = useState<string | null>(null);
    const [buttonClicks, setButtonClicks] = useState<Record<string, ButtonStat>>({});

    const handleLogout = async () => {
        await fetch('/api/admin/logout');
        router.push('/admin/login');
    };

    const resetButtonStats = async (buttonType: string) => {
        try {
            const res = await fetch('/api/button-tracking', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ buttonType }),
            });
            if (res.ok) {
                const data = await res.json();
                setButtonClicks(data.buttonClicks);
            }
        } catch (err) {
            console.error('Reset-Fehler:', err);
        }
    };

    useEffect(() => {
        fetch('/api/views')
            .then((r) => r.json())
            .then((d) => { setViewCount(d.viewCount); setLastVisit(d.lastVisit); })
            .catch(console.error);

        fetch('/api/button-tracking')
            .then((r) => r.json())
            .then((d) => setButtonClicks(d.buttonClicks ?? {}))
            .catch(console.error);
    }, []);

    const totalClicks = Object.values(buttonClicks).reduce((s, b) => s + b.count, 0);
    const buttonEntries = Object.entries(buttonClicks);

    return (
        <>
            <Head>
                <title>Admin Dashboard · RP Schliesstechnik</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            </Head>

            <div style={{
                minHeight: '100vh',
                backgroundColor: '#f0f4f8',
                fontFamily: "'Montserrat', sans-serif",
            }}>
                {/* Topbar */}
                <div style={{
                    background: 'linear-gradient(135deg, #1B3A6B 0%, #243C5A 100%)',
                    padding: '1rem 2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 2px 12px rgba(27,58,107,0.3)',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                            width: '36px', height: '36px',
                            background: '#F97316',
                            borderRadius: '8px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '1.1rem',
                        }}>
                            🔐
                        </div>
                        <div>
                            <p style={{ margin: 0, fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>RP Schliesstechnik</p>
                            <p style={{ margin: 0, fontSize: '0.7rem', color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>Admin Dashboard</p>
                        </div>
                    </div>

                    <button
                        onClick={handleLogout}
                        style={{
                            padding: '0.5rem 1.25rem',
                            background: 'rgba(255,255,255,0.08)',
                            color: '#fff',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            fontFamily: 'inherit',
                            transition: 'background 0.2s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                    >
                        Logout
                    </button>
                </div>

                {/* Content */}
                <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1.5rem' }}>

                    {/* Stat Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={cardStyle}>
                            <p style={cardLabelStyle}>Seitenaufrufe gesamt</p>
                            <p style={cardValueStyle}>{viewCount ?? '—'}</p>
                            {lastVisit && (
                                <p style={cardSubStyle}>
                                    Zuletzt: {new Date(lastVisit).toLocaleString('de-DE')}
                                </p>
                            )}
                        </div>

                        <div style={cardStyle}>
                            <p style={cardLabelStyle}>Button-Klicks gesamt</p>
                            <p style={cardValueStyle}>{totalClicks}</p>
                            <p style={cardSubStyle}>{buttonEntries.length} Button-Typen erfasst</p>
                        </div>

                        <div style={{ ...cardStyle, background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)' }}>
                            <p style={{ ...cardLabelStyle, color: 'rgba(255,255,255,0.75)' }}>Status</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                                <span style={{
                                    width: '10px', height: '10px', borderRadius: '50%',
                                    background: '#fff', boxShadow: '0 0 8px rgba(255,255,255,0.8)',
                                    flexShrink: 0,
                                }} />
                                <p style={{ margin: 0, fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>Online</p>
                            </div>
                            <p style={{ ...cardSubStyle, color: 'rgba(255,255,255,0.7)' }}>Alle Systeme aktiv</p>
                        </div>
                    </div>

                    {/* Button Tracking Table */}
                    <div style={sectionStyle}>
                        <div style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            marginBottom: '1.25rem',
                        }}>
                            <div>
                                <h2 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#1B3A6B' }}>
                                    Button-Klick Statistiken
                                </h2>
                                <p style={{ margin: '0.2rem 0 0', fontSize: '0.75rem', color: '#8a9ab5' }}>
                                    Alle Anruf-Buttons werden automatisch erfasst
                                </p>
                            </div>
                            {buttonEntries.length > 0 && (
                                <button
                                    onClick={() => resetButtonStats('all')}
                                    style={resetAllBtnStyle}
                                    onMouseEnter={(e) => e.currentTarget.style.background = '#fee2e2'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = '#fef2f2'}
                                >
                                    Alle zurücksetzen
                                </button>
                            )}
                        </div>

                        {buttonEntries.length === 0 ? (
                            <div style={{
                                textAlign: 'center', padding: '2rem',
                                color: '#a0aec0', fontSize: '0.85rem',
                            }}>
                                Noch keine Button-Klicks erfasst.
                            </div>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                {buttonEntries
                                    .sort(([, a], [, b]) => b.count - a.count)
                                    .map(([key, stat]) => (
                                        <div key={key} style={rowStyle}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                                                <div style={{
                                                    width: '8px', height: '8px', borderRadius: '50%',
                                                    background: stat.count > 0 ? '#F97316' : '#cbd5e0',
                                                    flexShrink: 0,
                                                }} />
                                                <div>
                                                    <p style={{ margin: 0, fontWeight: 600, fontSize: '0.85rem', color: '#1B3A6B' }}>
                                                        {getLabel(key)}
                                                    </p>
                                                    <p style={{ margin: '0.1rem 0 0', fontSize: '0.72rem', color: '#8a9ab5' }}>
                                                        {stat.lastClick
                                                            ? `Letzter Klick: ${new Date(stat.lastClick).toLocaleString('de-DE')}`
                                                            : 'Noch kein Klick'}
                                                    </p>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <span style={{
                                                    fontWeight: 800, fontSize: '1.4rem',
                                                    color: stat.count > 0 ? '#F97316' : '#cbd5e0',
                                                    minWidth: '2rem', textAlign: 'right',
                                                }}>
                                                    {stat.count}
                                                </span>
                                                <button
                                                    onClick={() => resetButtonStats(key)}
                                                    style={resetBtnStyle}
                                                    onMouseEnter={(e) => e.currentTarget.style.background = '#fee2e2'}
                                                    onMouseLeave={(e) => e.currentTarget.style.background = '#fef2f2'}
                                                >
                                                    Reset
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

// Styles
const cardStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #1B3A6B 0%, #243C5A 100%)',
    borderRadius: '14px',
    padding: '1.5rem',
    boxShadow: '0 4px 16px rgba(27,58,107,0.15)',
};
const cardLabelStyle: React.CSSProperties = {
    margin: 0, fontSize: '0.7rem', fontWeight: 600,
    color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.08em',
};
const cardValueStyle: React.CSSProperties = {
    margin: '0.4rem 0 0', fontSize: '2.2rem', fontWeight: 800, color: '#fff', lineHeight: 1,
};
const cardSubStyle: React.CSSProperties = {
    margin: '0.4rem 0 0', fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)',
};
const sectionStyle: React.CSSProperties = {
    background: '#fff',
    borderRadius: '14px',
    padding: '1.5rem',
    boxShadow: '0 2px 12px rgba(27,58,107,0.08)',
    border: '1px solid #e8edf5',
};
const rowStyle: React.CSSProperties = {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0.85rem 1rem',
    borderRadius: '10px',
    background: '#f8fafc',
    border: '1px solid #e8edf5',
};
const resetBtnStyle: React.CSSProperties = {
    padding: '0.3rem 0.7rem',
    background: '#fef2f2',
    color: '#ef4444',
    border: '1px solid #fecaca',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.72rem',
    fontWeight: 600,
    fontFamily: "'Montserrat', sans-serif",
    transition: 'background 0.2s',
};
const resetAllBtnStyle: React.CSSProperties = {
    padding: '0.45rem 1rem',
    background: '#fef2f2',
    color: '#ef4444',
    border: '1px solid #fecaca',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '0.78rem',
    fontWeight: 600,
    fontFamily: "'Montserrat', sans-serif",
    transition: 'background 0.2s',
};
