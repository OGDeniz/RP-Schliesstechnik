import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/navigation.module.css";
import TextSlider from "../ui/TextSlider";



export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false); // Initialisierung des Menüs
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>
        {/* Logo links */}
        <div className={styles.leftNav}>
          <Link href="/">
            <Image
              src="/RP_Logos/RP_Logo_white3D.png"
              alt="RP-Schließtechnik"
              width={150}
              height={100}
            />
          </Link>
        </div>


        {/* Schriftzug in der Mitte */}
        <div className={styles.middleNav}>
          <h1>RP Schließtechnik</h1>
          {/* Menüleiste unterhalb des Schriftzugs */}
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


        <div className={styles.rightNav}>
          <button onClick={() => window.location.href = "tel:+4917623687542"} className={styles.callButton}>
            Jetzt anrufen
          </button>
        </div>
      </div>

      <div className={styles.prompt}>

      </div>
    </nav >



  );
}
