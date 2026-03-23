import React from "react";
import Produktliste from "../../components/features/products/Produktliste";
import styles from "../../styles/cards.module.css";
import Accordion from "../../components/ui/Accordion";

export default function Produkte() {
    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <span className={styles.eyebrow}>Schließtechnik & Sicherheit</span>
                <h1 className={styles.heroTitle}>Unsere Leistungen</h1>
                <p className={styles.heroText}>
                    Professionelle Schlüsseldienst-Leistungen im Raum Bruchsal – von der Türöffnung
                    bis zur modernen Sicherheitstechnik. Schnell, transparent und zuverlässig.
                </p>
                <div className={styles.badges}>
                    <span className={styles.badge}>24/7 Notdienst</span>
                    <span className={styles.badge}>Festpreise</span>
                    <span className={styles.badge}>Region Bruchsal</span>
                </div>
            </section>

            <Produktliste />

            <div className={styles.infoSection}>
                <Accordion title="Unsere Sicherheitslösungen" defaultOpen={false}>
                    <p>
                        Entdecken Sie unsere hochwertigen Lösungen im Bereich Sicherheitstechnik: Schließanlagen,
                        Schlosswechsel, Smart-Home-Sicherheitssysteme und Zutrittssysteme. Wir bieten
                        Sicherheitskonzepte für Privathaushalte, Gewerbeflächen und Mietobjekte.
                    </p>
                </Accordion>

                <Accordion title="Unsere Leistungsbereiche" defaultOpen={false}>
                    <p>
                        Unsere Leistungen umfassen Einbruchschutz nachrüsten, Alarmanlagen für Wohnhäuser und
                        Sicherheitsberatung vor Ort. Vertrauen Sie auf unsere Expertise für Sicherheitstechnik im
                        Landkreis Karlsruhe, einschließlich Schlüsseldienst in Bruchsal, Ettlingen, Bretten,
                        Stutensee und Waghäusel.
                    </p>
                </Accordion>

                <Accordion title="Ihr Fachbetrieb für Sicherheitstechnik" defaultOpen={false}>
                    <p>
                        Ob Schlüsselnotdienst, Türöffnung in Bruchsal, Ettlingen oder Bretten, oder umfassende
                        Sicherheitslösungen: Wir sind Ihr Fachbetrieb für Sicherheitstechnik mit persönlichem
                        Service und langjähriger Erfahrung.
                    </p>
                </Accordion>
            </div>
        </main>
    );
}
