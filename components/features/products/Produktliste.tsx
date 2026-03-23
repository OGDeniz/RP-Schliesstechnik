// components/features/products/Produktliste.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import jsonDb from "../../data/produkte";
import styles from "../../../styles/cards.module.css";

export default function Produktliste() {
    const handleAnrufen = async () => {
        try {
            await fetch('/api/button-tracking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
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
                    <article className={styles.card}>
                        <div className={styles.cardImageContainer}>
                            <Image
                                src={produkt.bild}
                                alt={produkt.name}
                                fill
                                className={styles.cardImage}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>

                        <div className={styles.cardContent}>
                            <span className={styles.categoryTag}>{produkt.kategorie}</span>
                            <h2 className={styles.cardTitle}>{produkt.name}</h2>
                            <p className={styles.cardDescription}>{produkt.produktbeschreibung}</p>
                        </div>

                        <div className={styles.cardActions}>
                            <div className={styles.cardPrice}>
                                <span className={styles.priceLabel}>ab</span>
                                <span className={styles.priceValue}>{produkt.preis} €</span>
                            </div>

                            <div className={styles.cardButtons}>
                                <button
                                    className={styles.cardButton}
                                    onClick={handleAnrufen}
                                    aria-label={`Jetzt anrufen für ${produkt.name}`}
                                >
                                    Anrufen
                                </button>
                                <Link
                                    href={`/produkte/${produkt.url}`}
                                    className={styles.cardButtonSecondary}
                                    aria-label={`Details zu ${produkt.name}`}
                                >
                                    Details
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            ))}
        </div>
    );
}
