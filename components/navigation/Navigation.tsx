import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/navigation.module.css";
import buttonData from "../data/buttonData";
import TexSlider from "../ui/TextSlider";
export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false); // Initialisierung des Menüs
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>

        <div className={styles.leftNav}>
          <Link href="/">
            <Image
              src="/bilder/img5.png"
              alt="RP-Schließtechnik"
              width={150}
              height={100}
            />
          </Link>
        </div>



        <div className={styles.rightNav}>
          {/* Dynamisch alle Buttons aus buttonData anzeigen */}
          {buttonData.map((button) => (
            <button
              key={button.id} // Eindeutige ID für React (wichtig bei Listen) 
              onClick={button.handleClick}
              className={button.className} // CSS-Klasse anwenden
            >
              {button.label}
            </button>
          ))}
        </div>


        <div className={styles.asideNav}>
          <Image src="/bilder/hot.png" alt="RP-Schließtechnik" width={150} height={75}
            onClick={() => { window.location.href = "tel:+4917623687542"; }}>

          </Image>
          <div className={styles.asideNavGrid}>
            <div className={styles.asideNavGridItem}>
              <li className={styles.item1}>Ausgesperrt?</li>
              <li className={styles.item2}>24H Notrufnummer</li>
              <li className={styles.item3}>+49 176 236 875 42</li>
            </div>
          </div>
        </div>
      </div>
    </nav >

  );
}
