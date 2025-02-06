// pages/checkout.jsx
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from '@/styles/checkout.module.css';

export default function Rechnung() {
    const [formData, setFormData] = useState({
        vorname: '',
        nachname: '',
        email: '',
        telefon: '',
        strasse: '',
        hausnummer: '',
        plz: '',
        ort: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Hier später: Bestellung absenden
        console.log('Bestellung auf Rechnung:', formData);
    };

    return (
        <div className={styles.checkoutContainer}>
            <h1 className="text-center mb-4">Bestellung abschließen</h1>

            <Form onSubmit={handleSubmit} className={styles.checkoutForm}>
                <h2>Rechnungsadresse</h2>
                
                <div className={styles.formRow}>
                    <Form.Group className={styles.formGroup}>
                        <Form.Label >Vorname*</Form.Label>
                        <Form.Control
                            type="text"
                            name="vorname"
                            value={formData.vorname}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className={styles.formGroup}>
                        <Form.Label>Nachname*</Form.Label>
                        <Form.Control
                            type="text"
                            name="nachname"
                            value={formData.nachname}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </div>

                <div className={styles.formRow}>
                    <Form.Group className={styles.formGroup}>
                        <Form.Label>E-Mail*</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className={styles.formGroup}>
                        <Form.Label>Telefon*</Form.Label>
                        <Form.Control
                            type="tel"
                            name="telefon"
                            value={formData.telefon}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </div>

                <div className={styles.formRow}>
                    <Form.Group className={styles.formGroup}>
                        <Form.Label>Straße*</Form.Label>
                        <Form.Control
                            type="text"
                            name="strasse"
                            value={formData.strasse}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className={styles.formGroup}>
                        <Form.Label>Hausnummer*</Form.Label>
                        <Form.Control
                            type="text"
                            name="hausnummer"
                            value={formData.hausnummer}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </div>

                <div className={styles.formRow}>
                    <Form.Group className={styles.formGroup}>
                        <Form.Label>PLZ*</Form.Label>
                        <Form.Control
                            type="text"
                            name="plz"
                            value={formData.plz}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className={styles.formGroup}>
                        <Form.Label>Ort*</Form.Label>
                        <Form.Control
                            type="text"
                            name="ort"
                            value={formData.ort}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </div>

                <Button 
                    type="submit" 
                    className={styles.submitButton}
                >
                    Kostenpflichtig bestellen
                </Button>
            </Form>
        </div>
    );
}