import Link from "next/link";
import styles from "../../styles/fusszeile.module.css";
import SocialMediaBar from "../ui/SocialMediaBar";
import { FaPhone, FaClock } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";
import { HiOutlineMapPin } from "react-icons/hi2";

export default function Fusszeile() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brandColumn}>
            <span className={styles.eyebrow}>24h Notdienst • Raum Bruchsal</span>
            <h2 className={styles.title}>RP Schliesstechnik</h2>
            <p className={styles.description}>
              Ihr zuverlässiger Partner für Türöffnungen, Schlosswechsel,
              Sicherheitstechnik und schnelle Hilfe im Raum Bruchsal.
            </p>

            <div className={styles.contactInfo}>
              <span>
                <MdOutlineLock aria-hidden="true" />
                RP Schliesstechnik
              </span>
              <span>
                <FaPhone aria-hidden="true" />
                <a href="tel:+4917623687542">+49 176 236 875 42</a>
              </span>
              <span>
                <FaClock aria-hidden="true" />
                Mo–So: 00:00–24:00
              </span>
              <span>
                <HiOutlineMapPin aria-hidden="true" />
                Bruchsal & Umgebung
              </span>
            </div>

            <div className={styles.socialWrapper}>
              <SocialMediaBar />
            </div>
          </div>

          <div className={styles.cardColumn}>
            <div className={styles.infoCard}>
              <h3>Soforthilfe</h3>
              <p>
                Bei akuten Fällen empfehlen wir die direkte telefonische
                Kontaktaufnahme – so können wir sofort reagieren.
              </p>
              <a href="tel:+4917623687542" className={styles.callButton}>
                Jetzt anrufen
              </a>
            </div>
          </div>

          <nav className={styles.navColumn} aria-label="Footer Navigation">
            <h3>Navigation</h3>
            <div className={styles.links}>
              <Link href="/" className={styles.navLink}>
                Startseite
              </Link>
              <Link href="/produkte" className={styles.navLink}>
                Leistungen
              </Link>
              <Link href="/contact" className={styles.navLink}>
                Kontakt
              </Link>
              <Link href="/impressum" className={styles.navLink}>
                Impressum
              </Link>
              <Link href="/datenschutz" className={styles.navLink}>
                Datenschutz
              </Link>
            </div>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} RP Schliesstechnik. Alle Rechte vorbehalten.</p>
          <div className={styles.bottomLinks}>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}