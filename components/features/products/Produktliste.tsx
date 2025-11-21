// components/features/products/Produktliste.jsx
import React from 'react';
import jsonDb from "../../data/produkte";
import Image from "next/image";
import styles from "../../../styles/cards.module.css";

export default function Produktliste() {
    const handleAnrufen = async () => {
        try {
            await fetch('/api/button-tracking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ buttonType: 'productCall' }),
            });
        } catch (error) {
            console.error('Tracking-Fehler:', error);
        }

        window.location.href = "tel:+4917623687542";
    };

    return (
        <div className={styles.cards}>
            {jsonDb.produkte.map((produkt, index) => (
                <div key={produkt.produktId || index} className={styles.cardWrapper}>
                    <div className={styles.card}>
                        <div className={styles.cardImageContainer}>
                            <Image
                                src={produkt.bild}
                                alt={produkt.name}
                                width={300}
                                height={200}
                                className={styles.cardImage}
                            />
                        </div>

                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>{produkt.name}</h2>
                            <p className={styles.cardDescription}>{produkt.produktbeschreibung}</p>
                        </div>

                        <div className={styles.cardActions}>
                            <span className={styles.cardPrice}>{produkt.preis} €</span>
                            <button
                                className={styles.cardButton}
                                onClick={handleAnrufen}
                            >
                                Jetzt anrufen
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}