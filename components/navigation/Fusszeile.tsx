import Link from "next/link";
import styles from "../../styles/fusszeile.module.css";
import SocialMediaBar from "../ui/SocialMediaBar";
import { openCookieSettings } from "../../lib/cookieConsent";



export default function Fusszeile() {
  return (
    <div className={styles.fusszeile}>

      <div className={styles.fusszeileContainer}>

        <h2 className="text-center">Ihr Schlüsseldienst in Bruchsal</h2>
        <div className={styles.contentzone}>
          <div className={styles.infos}>
            <p className="text-center">
              Wir sind Ihr zuverlässiger Partner für alle Schlüsseldienstleistung
              in Bruchsal.
            </p>
            <p className="text-center">
              24 Stunden Notdienst | 365 Tage im Jahr
            </p>
          </div>
          <h4>
            🔓 RP Schlüsseldienst | 📞 +49 176 236 875 42 | ⌚ Mo-So: 0:00-24:00
          </h4>
          <SocialMediaBar />
        </div>
        <div className={styles.links}>
          <Link href="/" className={styles.navLink}>
            <p className="nav-link">Startseite</p>
          </Link>
          <Link href="/" className={styles.navLink}>
            <p className="nav-link">Über uns</p>
          </Link>
          <Link href="/produkte" className={styles.navLink}>

            <p className="nav-link">Leistungen</p>
          </Link>
          <Link href="/contact" className={styles.navLink}>
            <p className="nav-link">Kontakt</p>

          </Link>
          <Link href="/impressum" className={styles.navLink}>
            <p className="nav-link">Impressum</p>
          </Link>
          <button
            type="button"
            className={`${styles.navLink} ${styles.cookieButton}`}
            onClick={openCookieSettings}
          >
            <p className="nav-link">Cookie-Einstellungen</p>
          </button>
        </div>
      </div>
    </div>

  );
}
