import Link from "next/link";
import { useEffect, useState } from "react";

import {
  ConsentChoice,
  CONSENT_UPDATED_EVENT,
  OPEN_COOKIE_SETTINGS_EVENT,
  getStoredConsent,
  setStoredConsent,
} from "../../lib/cookieConsent";
import styles from "../../styles/cookieBanner.module.css";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getStoredConsent()) {
      setVisible(true);
    }

    const handleOpen = () => setVisible(true);
    const handleUpdate = () => setVisible(false);

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpen);
    window.addEventListener(CONSENT_UPDATED_EVENT, handleUpdate);

    return () => {
      window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpen);
      window.removeEventListener(CONSENT_UPDATED_EVENT, handleUpdate);
    };
  }, []);

  const saveConsent = (choice: ConsentChoice) => {
    setStoredConsent(choice);
  };

  if (!visible) {
    return null;
  }

  return (
    <aside
      className={styles.banner}
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Einwilligung"
    >
      <div className={styles.content}>
        <h2 className={styles.title}>Cookie-Einstellungen</h2>
        <p className={styles.text}>
          Wir nutzen notwendige Cookies für den Betrieb der Website. Optionale
          Cookies helfen uns, die Seite zu verbessern. Details findest du in
          unserer{" "}
          <Link className={styles.link} href="/datenschutz">
            Datenschutzerklärung
          </Link>
          .
        </p>
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          className={`${styles.button} ${styles.secondary}`}
          onClick={() => saveConsent("essential")}
        >
          Nur notwendige
        </button>
        <button
          type="button"
          className={`${styles.button} ${styles.primary}`}
          onClick={() => saveConsent("all")}
        >
          Alle akzeptieren
        </button>
      </div>
    </aside>
  );
}
