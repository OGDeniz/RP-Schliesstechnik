import React, { useState } from 'react';
import Head from 'next/head';
import homestyles from '../styles/home.module.css';
import styles from '../styles/contact.module.css';
import GoogleMaps from './GoogleMaps';

const ContactUs = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;

        const formData = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
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
                <title>Kontaktformular - Schreiben Sie uns eine Nachricht</title>
                <meta name="description" content="Füllen Sie unser Kontaktformular aus, um uns eine Nachricht zu senden. Wir freuen uns auf Ihre Anfrage!" />
                <meta name="keywords" content="Kontaktformular, Nachricht senden, Anfrage, Kontakt aufnehmen" />
                <meta name="author" content="RP Schliesstechnik" />
            </Head>
            <div className={homestyles.container}>
                <div className={styles.contactForm}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <h2>Kontaktieren Sie uns</h2>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Ihr vollständiger Name"
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">E-Mail:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="ihre.email@beispiel.de"
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Nachricht:</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                placeholder="Ihre Nachricht an uns..."
                            />
                        </div>
                        <button type="submit" className={styles.submitButton}>
                            Nachricht senden
                        </button>
                        {status && (
                            <p className={`${styles.statusMessage} ${status === 'success' ? styles.success : styles.error}`}>
                                {status === 'success'
                                    ? '✓ Nachricht erfolgreich gesendet!'
                                    : '✗ Fehler beim Senden der Nachricht.'}
                            </p>
                        )}
                    </form>
                </div>
                <div className={styles.mapWrapper}>
                    <GoogleMaps />
                </div>
            </div>
        </>
    );
};

export default ContactUs;
