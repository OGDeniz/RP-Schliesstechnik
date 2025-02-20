import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import cardStyles from "../../styles/cards.module.css";
import dynamic from "next/dynamic";

// 🟢 Verhindert SSR-Fehler
const Produktseite = dynamic(() => Promise.resolve(PageComponent), { ssr: false });

const PageComponent = () => {
    const router = useRouter();
    const { url } = router.query;
    const [produkt, setProdukt] = useState(null);

    useEffect(() => {
        if (router.isReady) {
            import("../../components/data/produkte")
                .then((module) => {
                    const gefundenesProdukt = module.default.produkte.find((a) => a.url === url);
                    setProdukt(gefundenesProdukt);
                })
                .catch((error) => console.error("Fehler beim Laden der Produkte:", error));
        }
    }, [router.isReady, url]);

    if (!router.isReady) {
        return (
            <div className="d-flex justify-content-center m-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Laden...</span>
                </div>
            </div>
        );
    }

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
                                    onClick={() => console.log("Buchung für:", produkt.name)}
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
};

export default Produktseite;
