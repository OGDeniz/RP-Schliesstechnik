import React from "react";
import Produktliste from "../../components/features/products/Produktliste";
import styles from "../../styles/produktseite.module.css";

export default function Produkte() {
    return (
        <div className="container my-5">
            <h1 className={styles.container}>Unsere Produkte und Dienstleistungen</h1>
            <p>
                Entdecken Sie unsere hochwertigen Lösungen im Bereich Sicherheitstechnik: Schließanlagen, Schlosswechsel, Smart-Home-Sicherheitssysteme und Zutrittssysteme. Wir bieten Sicherheitskonzepte für Privathaushalte, Gewerbeflächen und Mietobjekte.
            </p>
            <p>
                Unsere Leistungen umfassen Einbruchschutz nachrüsten, Alarmanlagen für Wohnhäuser und Sicherheitsberatung vor Ort. Vertrauen Sie auf unsere Expertise für Sicherheitstechnik im Landkreis Karlsruhe, einschließlich Schlüsseldienst in Bruchsal, Ettlingen, Bretten, Stutensee und Waghäusel.
            </p>
            <p>
                Ob Schlüsselnotdienst, Türöffnung in Bruchsal, Ettlingen oder Bretten, oder umfassende Sicherheitslösungen: Wir sind Ihr Fachbetrieb für Sicherheitstechnik mit persönlichem Service und langjähriger Erfahrung.
            </p>
            <Produktliste />
        </div>
    );
}