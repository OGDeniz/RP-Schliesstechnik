import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/auth.module.css';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState<'success' | 'error' | 'info'>('info');
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!username || !password || !firstName || !lastName) {
            setMessageType('error');
            setMessage('✗ Alle Felder müssen ausgefüllt werden.');
            return;
        }

        setIsLoading(true);
        setMessage('');

        try {
            const response = await axios.post('/api/register', {
                username,
                password,
                first_name: firstName,
                last_name: lastName,
            });

            setMessageType('success');
            setMessage(`✓ ${response.data.message}`);

            // Formular zurücksetzen bei Erfolg
            setUsername('');
            setPassword('');
            setFirstName('');
            setLastName('');
        } catch (error: any) {
            setMessageType('error');
            setMessage(error.response?.data?.message || '✗ Registrierung fehlgeschlagen. Bitte versuchen Sie es erneut.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Head>
                <title>Registrierung - RP Schliesstechnik</title>
                <meta name="description" content="Erstellen Sie ein Konto bei RP Schliesstechnik" />
            </Head>
            <div className={styles.authContainer}>
                <div className={styles.authCard}>
                    <h1>Registrierung</h1>
                    <form onSubmit={handleRegister} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="username">Benutzername</label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Wählen Sie einen Benutzernamen"
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
                                placeholder="Mindestens 8 Zeichen"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                disabled={isLoading}
                                minLength={8}
                            />
                        </div>

                        <div className={styles.nameRow}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="firstName">Vorname</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="Ihr Vorname"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="lastName">Nachname</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder="Ihr Nachname"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className={`${styles.submitButton} ${isLoading ? styles.loading : ''}`}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Wird registriert...' : 'Konto erstellen'}
                        </button>

                        {message && (
                            <p className={`${styles.message} ${styles[messageType]}`}>
                                {message}
                            </p>
                        )}
                    </form>

                    <div className={styles.footer}>
                        Bereits ein Konto? <Link href="/login" className={styles.link}>Jetzt anmelden</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
