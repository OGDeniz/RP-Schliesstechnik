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

  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>
        {/* Burger-Icon – im Desktop ausgeblendet */}
        <div className={styles.burgerMenu} onClick={toggleMenu}>
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
        <div className={styles.abuslogo}>
          <Image
            src="/RP_Logos/abus-logo.png"
            alt="Abus Logo"
            width={151}
            height={65}

          />
        </div>


        {/* "Jetzt anrufen"-Button – immer sichtbar */}
        <div className={styles.rightNav}>
          <button
            onClick={() =>
              (window.location.href = "tel:+4917623687542")
            }
            className={styles.callButton}
          >
            Jetzt anrufen
          </button>
        </div>
      </div>


      {/* Mobile Menü (Dropdown) – wird eingeblendet, wenn Burger-Icon geklickt wurde */}
      {menuOpen && (
        <div className={styles.menuMobile}>
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
      )}
    </nav>
  );
}
