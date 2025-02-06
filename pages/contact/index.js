import React from 'react';
import homestyles from '@/styles/home.module.css';
import Link from 'next/link';
import Contact from '@/components/Contact';
import Image from 'next/image';

const ContactUs = () => {
    return (
        <div className="container  mt-4">
            <section className={homestyles.aboutus}>
                <h1 className='text-center mb-4'style={
                    {fontSize: '5rem'}
                }>Kontakt</h1>
                <p>
                    Haben Sie Fragen zu unseren Produkten oder Dienstleistungen? Möchten Sie einen Termin vereinbaren oder ein individuelles Angebot erhalten? Kontaktieren Sie uns – wir sind gerne für Sie da!
                </p>
            </section>
        <Contact title="Kontaktieren Sie uns" subtitle="Wir freuen uns auf Ihre Nachricht!" className="container mt-4" />   

        
        </div>
    );
}

export default ContactUs;