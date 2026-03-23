import styles from '../styles/hero.module.css';

export default function Hero() {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.textContainer}>
                <h1>Willkommen bei RP Schliesstechnik</h1>
                <p>Ihr zuverlässiger Partner für Sicherheitstechnik und Schlüsseldienste im Landkreis Karlsruhe.</p>
                <a href="tel:+4917623687542" className={styles.ctaButton}>
                    Jetzt anrufen – 24h Notdienst
                </a>
            </div>
        </div>
    );
}