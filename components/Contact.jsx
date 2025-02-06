import React, { useState } from 'react';
import homestyles from '@/styles/home.module.css';
import Image from 'next/image';

const ContactUs = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        const formData = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
        };

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Nachricht erfolgreich gesendet!');
                form.reset();
            } else {
                setStatus('Fehler beim Senden der Nachricht.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('Fehler beim Senden der Nachricht.');
        }
    };

    return (
        <div className="container mt-4">
            <section className={homestyles.aboutus}>
              
            </section>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Linke Seite: Formular */}
                <form onSubmit={handleSubmit} style={{ backgroundColor: '#FFD500', padding: '2rem', borderRadius: '8px', width: '45%' }}>
                    <h2>Kontaktieren Sie uns</h2>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }} />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }} />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }} />
                    </div>
                    <button type="submit" style={{ padding: '0.8rem 1.5rem', backgroundColor: '#333', color: '#FFF', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                        Senden
                    </button>
                    {status && <p style={{ marginTop: '1rem', color: status.includes('erfolgreich') ? 'green' : 'red' }}>{status}</p>}
                </form>
                {/* Rechte Seite: Bild */}
                <div style={{ width: '45%' }}>
                    <Image src="/bilder/Contact-Us.jpg" alt="Contact Us" width={600} height={400} layout="responsive" />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
