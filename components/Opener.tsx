import styles from '../styles/opener.module.css';
import Accordion from './ui/Accordion';

export default function Opener() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>
                    24-STUNDEN-SCHLÜSSEL- UND SICHERHEITSDIENSTE IN DEINER NÄHE
                    <br />
                    <span>- RP SCHLIESSTECHNIK -</span>
                </h2>

                <div className={styles.accordionWrapper}>
                    <Accordion title="Über RP Schließtechnik" defaultOpen={false}>
                        <p>
                            <strong>RP Schließtechnik</strong> ist Ihr Fachbetrieb für Sicherheitstechnik mit langjähriger Erfahrung bei Türöffnungen. Wir bieten persönlichen Service rund um Sicherheit und legen großen Wert auf hohe Kundenzufriedenheit.
                        </p>
                    </Accordion>

                    <Accordion title="Unser Einsatzgebiet" defaultOpen={false}>
                        <p>
                            📍 Unser 24h Schlüsseldienst – schnell & zuverlässig – ist im gesamten Landkreis Karlsruhe im Einsatz. Ob Schlüsseldienst in Bruchsal, Ettlingen, Bretten, Stutensee oder Waghäusel: Wir bieten Sicherheit für Privathaushalte, gewerbliche Sicherheitslösungen und Mietobjekte.
                        </p>
                    </Accordion>

                    <Accordion title="Unsere Leistungen" defaultOpen={false}>
                        <p>
                            Unsere Leistungen umfassen Alarmanlagen für Wohnhäuser, Einbruchschutz für Gewerbeflächen und Sicherheitskonzepte für Vermieter. Unser Schlüsselnotdienst ist jederzeit für Sie da – auch für Schlosswechsel, Schließanlagen und Türöffnungen in Bruchsal, Ettlingen, Bretten und Umgebung.
                        </p>
                    </Accordion>

                    <Accordion title="Unser Angebot" defaultOpen={false}>
                        <p>
                            Vertrauen Sie auf unsere Expertise bei Einbruchschutz nachrüsten, Smart-Home-Sicherheitssystemen, Zutrittskontrolle und Sicherheitsberatung vor Ort. Ob Sicherheitstechnik für Haus & Gewerbe oder Türöffnung im Landkreis Karlsruhe – wir sind Ihr zuverlässiger Partner.
                        </p>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}