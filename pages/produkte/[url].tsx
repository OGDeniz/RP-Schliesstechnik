import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../styles/produktseite.module.css";

const Produktseite = () => {
    const router = useRouter();
    const { url } = router.query;
    const [produkt, setProdukt] = useState(null);

    useEffect(() => {
        if (!router.isReady || !url) return;

        import("../../components/data/produkte")
            .then((module) => {
                const gefundenesProdukt = module.default.produkte.find(
                    (a) => a.url === url
                );
                setProdukt(gefundenesProdukt || null);
            })
            .catch((error) => console.error("Fehler beim Laden der Produkte:", error));
    }, [router.isReady, url]);

    if (!router.isReady) {
        return (
            <div className={styles.stateWrapper}>
                <div className={styles.loader}>Laden...</div>
            </div>
        );
    }

    if (!produkt) {
        return (
            <main className={styles.page}>
                <div className={styles.pageIntro}>
                    <span className={styles.eyebrow}>RP Schließtechnik</span>
                    <h1 className={styles.pageTitle}>Leistungen & Sicherheitslösungen</h1>
                    <p className={styles.pageText}>
                        Die angeforderte Leistung konnte nicht gefunden werden.
                    </p>
                </div>

                <button
                    className={styles.backButton}
                    onClick={() => router.push("/produkte")}
                >
                    Zurück zur Übersicht
                </button>
            </main>
        );
    }

    const isDienstleistung = produkt.kategorie === "Dienstleistung";

    return (
        <main className={styles.page}>
            <section className={styles.pageIntro}>
                <span className={styles.eyebrow}>24h Notdienst & Sicherheitstechnik</span>
                <h1 className={styles.pageTitle}>{produkt.name}</h1>
                <p className={styles.pageText}>
                    Professionelle Lösungen rund um Türöffnung, Schlosswechsel,
                    Sicherheitstechnik und Notdienst im Raum Bruchsal.
                </p>

                <div className={styles.badges}>
                    <span className={styles.badge}>24/7 erreichbar</span>
                    <span className={styles.badge}>Transparente Preise</span>
                    <span className={styles.badge}>Region Bruchsal</span>
                </div>
            </section>

            <button
                className={styles.backButton}
                onClick={() => router.push("/produkte")}
            >
                ← Zurück zur Produktübersicht
            </button>

            <section className={styles.serviceCard}>
                <div className={styles.imageWrap}>
                    {produkt.bild && (
                        <Image
                            src={produkt.bild}
                            alt={produkt.name}
                            width={800}
                            height={600}
                            className={styles.serviceImage}
                            priority
                        />
                    )}
                </div>

                <div className={styles.content}>
                    <div className={styles.contentTop}>
                        <span className={styles.categoryTag}>{produkt.kategorie}</span>
                        <h2 className={styles.serviceTitle}>{produkt.name}</h2>
                        <p className={styles.serviceText}>{produkt.produktbeschreibung}</p>
                    </div>

                    <ul className={styles.featureList}>
                        <li>Schnelle Hilfe im Einsatzgebiet rund um Bruchsal</li>
                        <li>Saubere und professionelle Ausführung</li>
                        <li>Persönliche Beratung & transparente Kommunikation</li>
                    </ul>

                    <div className={styles.footer}>
                        <div className={styles.priceBox}>
                            <span className={styles.priceLabel}>ab</span>
                            <span className={styles.price}>{produkt.preis} €</span>
                        </div>

                        {isDienstleistung ? (
                            <div className={styles.actions}>
                                <a href="tel:+4917623687542" className={styles.primaryButton}>
                                    Jetzt anrufen
                                </a>
                                <button
                                    className={styles.secondaryButton}
                                    onClick={() => console.log("Anfrage für:", produkt.name)}
                                >
                                    Anfrage senden
                                </button>
                            </div>
                        ) : (
                            <span className={styles.infoText}>{produkt.kategorie}</span>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Produktseite;