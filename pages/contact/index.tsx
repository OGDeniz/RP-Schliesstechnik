import React from 'react';
import Head from 'next/head'; // Import für SEO
import homestyles from '../../styles/home.module.css';
import Link from 'next/link';
import Contact from '../../components/Contact';
import Image from 'next/image';
import styles from '../../styles/global.module.css';

const ContactUs = () => {
    return (
        <>
            <Head>
                <title>Kontakt - Unsere Produkte und Dienstleistungen</title>
                <meta name="description" content="Kontaktieren Sie uns für Fragen zu unseren Produkten, Dienstleistungen, Terminvereinbarungen oder individuellen Angeboten." />
                <meta name="keywords" content="Kontakt, Produkte, Dienstleistungen, Terminvereinbarung, Angebot, Nachricht senden" />
                <meta name="author" content="Ihr Unternehmen" />
            </Head>
            <div className={styles.container}>
                <div className={styles.pageContent}>
                    <h1 className="text-center">Kontakt</h1>
                    <p className="text-center">
                        Haben Sie Fragen zu unseren Produkten oder Dienstleistungen? Möchten Sie einen Termin vereinbaren oder ein individuelles Angebot erhalten? Kontaktieren Sie uns – wir sind gerne für Sie da!
                    </p>
                    <Contact />
                </div>
            </div>
        </>
    );
}

export default ContactUs;