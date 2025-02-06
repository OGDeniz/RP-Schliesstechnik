import { useRouter } from 'next/router';
import jsonDb from '@/components/data/produkte';
import Image from "next/image";
import cardStyles from '@/styles/cards.module.css';

export default function Produktseite() {
    const router = useRouter();
    const { url } = router.query;

    if (!router.isReady) {
        return (
            <div className="d-flex justify-content-center m-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Laden...</span>
                </div>
            </div>
        );
    }

    const produkt = jsonDb.produkte.find((a) => a.url === url);

    if (!produkt) {
        return (
            <div className="container mt-4">
                <button className={cardStyles.cardButton} onClick={() => router.push('/produkte')}>
                    Zurück zur Produktübersicht
                </button>
                <h2>Produkt nicht gefunden</h2>
            </div>
        );
    }

    const handleBooking = () => {
        // Hier kommt später die Buchungsfunktion hin
        console.log('Buchung für:', produkt.name);
    };

    return (
        <div className="container mt-4">
            <button className={cardStyles.cardButton} onClick={() => router.push('/produkte')}>
                Zurück zur Produktübersicht
            </button>
            <div className={cardStyles.cards}>
                <div className={cardStyles.cardWrapper}>
                    <div className={cardStyles.card}>
                        {produkt.bild && (
                            <Image
                                src={produkt.bild}
                                alt={produkt.name}
                                width={500}
                                height={500}
                                className={cardStyles.cardImage}
                            />
                        )}
                        <h2 className={cardStyles.cardTitle}>{produkt.name}</h2>
                        <p className={cardStyles.cardDescription}>{produkt.produktbeschreibung}</p>
                        <div className={cardStyles.cardFooter}>
                            <span className={cardStyles.cardPrice}>{produkt.preis} €</span>
                            {produkt.kategorie === "Dienstleistung" ? (
                                <button 
                                    className={cardStyles.cardButton}
                                    onClick={handleBooking}
                                >
                                    Jetzt buchen
                                </button>
                            ) : (
                                <span className={cardStyles.cardDescription}>{produkt.kategorie}</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}