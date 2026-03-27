import { GetServerSideProps } from 'next';
import { parse } from 'cookie';
import Head from 'next/head';
import { useAdminDashboard, getLabel } from '../../hooks/useAdminDashboard';
import styles from '../../styles/dashboard.module.css';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const cookies = parse(context.req.headers.cookie || '');
    if (cookies.admin !== 'true') {
        return { redirect: { destination: '/admin/login', permanent: false } };
    }
    return { props: {} };
};

export default function AdminDashboard() {
    const {
        viewCount,
        lastVisit,
        totalClicks,
        buttonEntries,
        health,
        handleLogout,
        resetButtonStats,
    } = useAdminDashboard();

    return (
        <>
            <Head>
                <title>Admin Dashboard · RP Schliesstechnik</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            </Head>

            <div className={styles.page}>
                {/* Topbar */}
                <div className={styles.topbar}>
                    <div className={styles.topbarBrand}>
                        <div className={styles.topbarIcon}>🔐</div>
                        <div>
                            <p className={styles.topbarTitle}>RP Schliesstechnik</p>
                            <p className={styles.topbarSubtitle}>Admin Dashboard</p>
                        </div>
                    </div>
                    <button className={styles.logoutBtn} onClick={handleLogout}>
                        Logout
                    </button>
                </div>

                {/* Content */}
                <div className={styles.content}>

                    {/* Stat Cards */}
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <p className={styles.cardLabel}>Seitenaufrufe gesamt</p>
                            <p className={styles.cardValue}>{viewCount ?? '—'}</p>
                            {lastVisit && (
                                <p className={styles.cardSub}>
                                    Zuletzt: {new Date(lastVisit).toLocaleString('de-DE')}
                                </p>
                            )}
                        </div>

                        <div className={styles.card}>
                            <p className={styles.cardLabel}>Button-Klicks gesamt</p>
                            <p className={styles.cardValue}>{totalClicks}</p>
                            <p className={styles.cardSub}>{buttonEntries.length} Button-Typen erfasst</p>
                        </div>

                        <div className={`${styles.card} ${health?.overall === 'error' ? styles.cardRed : styles.cardOrange}`}>
                            <p className={styles.cardLabel}>Status</p>
                            <div className={styles.statusRow}>
                                <span className={styles.statusDot} />
                                <p className={styles.statusLabel}>
                                    {health === null ? 'Prüfe...' : health.overall === 'ok' ? 'Online' : 'Fehler'}
                                </p>
                            </div>
                            <p className={`${styles.cardSub} ${styles.cardSubLight}`}>
                                {health === null
                                    ? '—'
                                    : `DB: ${health.db === 'ok' ? '✓' : '✗'} · Dateisystem: ${health.fs === 'ok' ? '✓' : '✗'}`}
                            </p>
                        </div>
                    </div>

                    {/* Button Tracking */}
                    <div className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <div>
                                <h2 className={styles.sectionTitle}>Button-Klick Statistiken</h2>
                                <p className={styles.sectionSubtitle}>
                                    Alle Anruf-Buttons werden automatisch erfasst
                                </p>
                            </div>
                            {buttonEntries.length > 0 && (
                                <button
                                    className={styles.resetAllBtn}
                                    onClick={() => resetButtonStats('all')}
                                >
                                    Alle zurücksetzen
                                </button>
                            )}
                        </div>

                        {buttonEntries.length === 0 ? (
                            <div className={styles.emptyState}>
                                Noch keine Button-Klicks erfasst.
                            </div>
                        ) : (
                            <div className={styles.rowList}>
                                {buttonEntries
                                    .sort(([, a], [, b]) => b.count - a.count)
                                    .map(([key, stat]) => (
                                        <div key={key} className={styles.row}>
                                            <div className={styles.rowLeft}>
                                                <span className={`${styles.rowDot} ${stat.count > 0 ? styles.rowDotActive : styles.rowDotInactive}`} />
                                                <div>
                                                    <p className={styles.rowName}>{getLabel(key)}</p>
                                                    <p className={styles.rowMeta}>
                                                        {stat.lastClick
                                                            ? `Letzter Klick: ${new Date(stat.lastClick).toLocaleString('de-DE')}`
                                                            : 'Noch kein Klick'}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={styles.rowRight}>
                                                <span className={`${styles.rowCount} ${stat.count > 0 ? styles.rowCountActive : styles.rowCountInactive}`}>
                                                    {stat.count}
                                                </span>
                                                <button
                                                    className={styles.resetBtn}
                                                    onClick={() => resetButtonStats(key)}
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
