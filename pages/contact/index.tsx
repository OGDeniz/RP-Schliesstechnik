import React from 'react';
import homestyles from '../../styles/home.module.css';
import Link from 'next/link';
import Contact from '../../components/Contact';
import Image from 'next/image';
import styles from '../../styles/global.module.css';

const ContactUs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.two}>
                < h1 className='text-center mb-4 text-white'>Kontakt</h1>
                <p className='text-center col-md-8 mx-auto text-white'>
                    Haben Sie Fragen zu unseren Produkten oder Dienstleistungen? Möchten Sie einen Termin vereinbaren oder ein individuelles Angebot erhalten? Kontaktieren Sie uns – wir sind gerne für Sie da!
                </p>
                <Contact
                    // @ts-ignore
                    title="Kontaktieren Sie uns" subtitle="Wir freuen uns auf Ihre Nachricht!" className="container mt-4" />
            </div>

        </div >
    );
}

export default ContactUs;