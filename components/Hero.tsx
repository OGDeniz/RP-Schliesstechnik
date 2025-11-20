import styles from '../styles/hero.module.css';
import Image from 'next/image';

export default function Hero() {
    return (

        <div className={styles.heroContainer}>
            <div className={styles.textContainer}>
                <h1>Willkommen bei RP Schliesstechnik</h1>
                <p>Ihr zuverlässiger Partner für Sicherheitstechnik und Schlüsseldienste im Landkreis Karlsruhe.</p>
            </div>
        </div>
    );
}