import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import homestyles from '../styles/home.module.css';
import styles from '../styles/contact.module.css';
import GoogleMaps from './GoogleMaps';
import { FaPhone, FaEnvelope, FaClock, FaHandshake } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';

const ContactUs = () => {
    const [status, setStatus] = useState<'success' | 'error' | ''>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;

        const formData = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
            message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
        };

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
        }
    };

    return (
        <>
            <Head>
                <title>Kontakt | RP Schließtechnik</title>
                <meta
                    name="description"
                    content="Kontaktieren Sie RP Schließtechnik für Türöffnung, Schlosswechsel, Einbruchschutz und Schlüsseldienst im Raum Bruchsal."
                />
                <meta
                    name="keywords"
                    content="Schlüsseldienst Bruchsal, Kontakt, Türöffnung, Schlosswechsel, Einbruchschutz, RP Schließtechnik"
                />
                <meta name="author" content="RP Schließtechnik" />
            </Head>

            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <span className={styles.eyebrow}>24h erreichbar • Raum Bruchsal</span>
                        <h1>Kontakt & Soforthilfe</h1>
                        <p>
                            Sie benötigen schnelle Hilfe bei einer Türöffnung, einem Schlosswechsel
                            oder Fragen zur Sicherheitstechnik? Wir sind für Sie da – schnell,
                            zuverlässig und transparent.
                        </p>

                        <div className={styles.heroActions}>
                            <a href="tel:+4917623687542" className={styles.primaryButton}>
                                Jetzt anrufen
                            </a>
                            <a href="mailto:info@schluesselrp.de" className={styles.secondaryButton}>
                                E-Mail senden
                            </a>
                        </div>

                        <div className={styles.trustRow}>
                            <span><FaClock />24/7 erreichbar</span>
                            <span><FaMapLocationDot />Region Bruchsal</span>
                            <span><FaHandshake />Transparente Kommunikation</span>
                        </div>
                    </div>

                    <div className={styles.heroImage}>
                        <Image
                            src="/bilder/contact.png"
                            alt="Kontakt RP Schließtechnik"
                            width={480}
                            height={480}
                            priority
                        />
                    </div>
                </div>
            </section>

            <div className={`${homestyles.container} ${styles.contactPage}`}>
                <section className={styles.infoGrid}>
                    <article className={styles.infoCard}>
                        <div className={styles.infoCardIcon}><FaPhone /></div>
                        <h3>Telefon</h3>
                        <p>Für Notfälle und Soforthilfe empfehlen wir die direkte telefonische Kontaktaufnahme.</p>
                        <a href="tel:+4917623687542">+49 176 23687542</a>
                    </article>

                    <article className={styles.infoCard}>
                        <div className={styles.infoCardIcon}><FaEnvelope /></div>
                        <h3>E-Mail</h3>
                        <p>Für allgemeine Anfragen, Rückfragen oder Beratung rund um Schließtechnik.</p>
                        <a href="mailto:info@schluesselrp.de">info@schluesselrp.de</a>
                    </article>

                    <article className={styles.infoCard}>
                        <div className={styles.infoCardIcon}><FaMapLocationDot /></div>
                        <h3>Einsatzgebiet</h3>
                        <p>
                            Bruchsal, Forst, Karlsdorf-Neuthard, Hambrücken, Ubstadt-Weiher,
                            Bad Schönborn, Kronau, Waghäusel und Umgebung.
                        </p>
                    </article>
                </section>

                <section className={styles.contentGrid}>
                    <div className={styles.contactForm}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formHeader}>
                                <span className={styles.formTag}>Nachricht senden</span>
                                <h2>Kontaktieren Sie uns</h2>
                                <p>
                                    Bei Notfällen bitte direkt anrufen. Für alle anderen Anliegen
                                    können Sie uns bequem über das Formular schreiben.
                                </p>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Ihr vollständiger Name"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="phone">Telefon</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        placeholder="Ihre Telefonnummer"
                                    />
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">E-Mail</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="ihre.email@beispiel.de"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="subject">Betreff</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        placeholder="Worum geht es?"
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Nachricht</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                                />
                            </div>

                            <button type="submit" className={styles.submitButton}>
                                Nachricht senden
                            </button>

                            {status && (
                                <p
                                    className={`${styles.statusMessage} ${status === 'success' ? styles.success : styles.error
                                        }`}
                                >
                                    {status === 'success'
                                        ? '✓ Nachricht erfolgreich gesendet!'
                                        : '✗ Fehler beim Senden der Nachricht.'}
                                </p>
                            )}
                        </form>
                    </div>

                    <aside className={styles.sidePanel}>
                        <div className={styles.serviceBox}>
                            <h3>Wobei wir helfen</h3>
                            <ul>
                                <li>Türöffnungen</li>
                                <li>Schlosswechsel</li>
                                <li>Autoöffnungen</li>
                                <li>Einbruchschutz</li>
                                <li>Schließtechnik & Beratung</li>
                            </ul>
                        </div>

                        <div className={styles.serviceBox}>
                            <h3>Hinweis</h3>
                            <p>
                                Bei dringenden Fällen ist der schnellste Weg immer der direkte Anruf.
                                So können wir Ihr Anliegen sofort einschätzen.
                            </p>
                            <a href="tel:+4917623687542" className={styles.ctaButton}>
                                <FaPhone /> Jetzt anrufen
                            </a>
                        </div>
                    </aside>
                </section>

                <section className={styles.mapSection}>
                    <div className={styles.mapHeader}>
                        <span className={styles.formTag}>Standort & Region</span>
                        <h2>Für Sie im Raum Bruchsal im Einsatz</h2>
                        <p>
                            Wir sind in Bruchsal und Umgebung für Sie erreichbar und unterstützen
                            Sie schnell bei Notdienst- und Sicherheitsanfragen.
                        </p>
                    </div>

                    <div className={styles.mapWrapper}>
                        <GoogleMaps />
                    </div>
                </section>
            </div>
        </>
    );
};

export default ContactUs;