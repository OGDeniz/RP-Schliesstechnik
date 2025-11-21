import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/navigation.module.css";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false); // Initialisierung des Menüs
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavigationCall = async () => {
    try {
      await fetch('/api/button-tracking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ buttonType: 'navigationCall' }),
      });
    } catch (error) {
      console.error('Tracking-Fehler:', error);
    }

    window.location.href = "tel:+4917623687542";
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>
        {/* Burger-Icon – im Desktop ausgeblendet */}
        <div className={`${styles.burgerMenu} ${menuOpen ? styles.burgerMenuOpen : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Logo – immer sichtbar */}
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/RP_Logos/RP_Logo_whiteShadow.png"
              alt="RP-Schließtechnik"
              width={125}
              height={50}
            />
            <p>Schliesstechnik</p>
          </Link>
        </div>

        {/* Desktop Menü: wird nur im Desktop sichtbar */}
        <div className={styles.desktopMenu}>
          <h1>RP Schließtechnik</h1>
          <p>Weil jedes Schloss die richtige Lösung verdient.</p>
          <ul className={styles.menu}>
            <li>
              <Link href="/">Startseite</Link>
            </li>
            <li>
              <Link href="/produkte">Leistungen</Link>
            </li>
            <li>
              <Link href="/contact">Kontakt</Link>
            </li>
            <li>
              <Link href="/impressum">Impressum</Link>
            </li>
          </ul>
        </div>

        {/* "Jetzt anrufen"-Button – immer sichtbar */}
        <div className={styles.rightNav}>
          <button
            onClick={handleNavigationCall}
            className={styles.callButton}
          >
            <svg className={styles.phoneIcon} viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" width="20" height="20">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <div className={styles.callText}>
              <span className={styles.callLabel}>Ausgesperrt?</span>
              <span>24h Schlüsselnotdienst</span>
              <span className={styles.callNumber}>+49 176 23687542</span>
            </div>
          </button>
        </div>
      </div>


      {/* Mobile Menü (Dropdown) – wird eingeblendet, wenn Burger-Icon geklickt wurde */}
      {menuOpen && (
        <div className={styles.menuMobile}>
          {/* Close Button */}
          <button
            className={styles.closeButton}
            onClick={toggleMenu}
            aria-label="Menü schließen"
          >
            <span className={styles.closeIcon}></span>
            <span className={styles.closeIcon}></span>
          </button>

          <ul className={styles.menu}>
            <li>
              <Link href="/" onClick={toggleMenu}>Startseite</Link>
            </li>
            <li>
              <Link href="/produkte" onClick={toggleMenu}>Leistungen</Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggleMenu}>Kontakt</Link>
            </li>
            <li>
              <Link href="/impressum" onClick={toggleMenu}>Impressum</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
