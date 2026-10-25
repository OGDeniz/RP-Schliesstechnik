import styles from '../styles/hero.module.css';
import { FaWhatsapp, FaPhone } from 'react-icons/fa6';

export default function Hero() {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.grain} aria-hidden="true" />
            <div className={styles.textContainer}>
                <span className={styles.eyebrow}>
                    <span className={styles.pulse} aria-hidden="true" />
                    24/7 Schlüsselnotdienst · Region Bruchsal
                </span>
                <h1>Schlüsseldienst Bruchsal –<br />in 20 Minuten vor Ort</h1>
                <p>Türöffnung ab 79&nbsp;€ · schnell, schadenfrei &amp; mit transparentem Festpreis.</p>
                <div className={styles.ctaGroup}>
                    <a href="tel:+4917623687542" className={styles.ctaButton}>
                        <FaPhone /> Jetzt anrufen
                    </a>
                    <a
                        href="https://wa.me/4917623687542"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.whatsappButton}
                    >
                        <FaWhatsapp /> WhatsApp
                    </a>
                </div>
                <div className={styles.microTrust}>
                    <span>24/7 erreichbar</span>
                    <span>Festpreis vorab</span>
                    <span>Keine versteckten Kosten</span>
                </div>
            </div>
            <a href="#leistungen" className={styles.scrollHint} aria-label="Nach unten scrollen">
                <span />
            </a>
        </div>
    );
}
