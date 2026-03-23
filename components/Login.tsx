import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/auth.module.css';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState<'success' | 'error' | 'info'>('info');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        try {
            const response = await axios.post('/api/login', {
                username,
                password,
                name,
                address,
            });

            setMessageType('success');
            setMessage(`✓ Willkommen, ${response.data.name}!`);
        } catch (error: any) {
            setMessageType('error');
            setMessage(error.response?.data?.message || '✗ Anmeldung fehlgeschlagen. Bitte überprüfen Sie Ihre Eingaben.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Head>
                <title>Login - RP Schliesstechnik</title>
                <meta name="description" content="Melden Sie sich bei Ihrem RP Schliesstechnik Konto an" />
            </Head>
            <div className={styles.authContainer}>
                <div className={styles.authCard}>
                    <h1>Anmelden</h1>
                    <form onSubmit={handleLogin} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="username">Benutzername</label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Ihr Benutzername"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="password">Passwort</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Ihr Passwort"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Ihr vollständiger Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="address">Adresse</label>
                            <input
                                type="text"
                                id="address"
                                placeholder="Ihre Adresse"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <button
                            type="submit"
                            className={`${styles.submitButton} ${isLoading ? styles.loading : ''}`}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Wird angemeldet...' : 'Anmelden'}
                        </button>

                        {message && (
                            <p className={`${styles.message} ${styles[messageType]}`}>
                                {message}
                            </p>
                        )}
                    </form>

                    <div className={styles.footer}>
                        Noch kein Konto? <Link href="/register" className={styles.link}>Jetzt registrieren</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
