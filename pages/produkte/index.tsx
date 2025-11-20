import React from "react";
import Produktliste from "../../components/features/products/Produktliste";
import styles from "../../styles/produktseite.module.css";
import Accordion from "../../components/ui/Accordion";

export default function Produkte() {
    return (
        <div className="container my-5">
            <h1 className={styles.container}>Unsere Produkte und Dienstleistungen</h1>

            <div style={{ marginBottom: '2rem' }}>
                <Accordion title="Unsere Sicherheitslösungen" defaultOpen={true}>
                    <p>
                        Entdecken Sie unsere hochwertigen Lösungen im Bereich Sicherheitstechnik: Schließanlagen, Schlosswechsel, Smart-Home-Sicherheitssysteme und Zutrittssysteme. Wir bieten Sicherheitskonzepte für Privathaushalte, Gewerbeflächen und Mietobjekte.
                    </p>
                </Accordion>

                <Accordion title="Unsere Leistungsbereiche" defaultOpen={false}>
                    <p>
                        Unsere Leistungen umfassen Einbruchschutz nachrüsten, Alarmanlagen für Wohnhäuser und Sicherheitsberatung vor Ort. Vertrauen Sie auf unsere Expertise für Sicherheitstechnik im Landkreis Karlsruhe, einschließlich Schlüsseldienst in Bruchsal, Ettlingen, Bretten, Stutensee und Waghäusel.
                    </p>
                </Accordion>

                <Accordion title="Ihr Fachbetrieb für Sicherheitstechnik" defaultOpen={false}>
                    <p>
                        Ob Schlüsselnotdienst, Türöffnung in Bruchsal, Ettlingen oder Bretten, oder umfassende Sicherheitslösungen: Wir sind Ihr Fachbetrieb für Sicherheitstechnik mit persönlichem Service und langjähriger Erfahrung.
                    </p>
                </Accordion>
            </div>

            <Produktliste />
        </div>
    );
}