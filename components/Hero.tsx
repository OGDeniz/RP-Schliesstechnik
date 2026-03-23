import styles from '../styles/hero.module.css';
import { FaWhatsapp } from 'react-icons/fa6';

export default function Hero() {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.textContainer}>
                <h1>Schlüsseldienst Bruchsal –<br />24/7 sofort vor Ort</h1>
                <p>Türöffnung ab 79€ &bull; Schnell &bull; Transparent</p>
                <div className={styles.ctaGroup}>
                    <a href="tel:+4917623687542" className={styles.ctaButton}>
                        📞 Jetzt anrufen
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
                    <span>Region Bruchsal</span>
                    <span>Keine versteckten Kosten</span>
                </div>
            </div>
        </div>
    );
}
