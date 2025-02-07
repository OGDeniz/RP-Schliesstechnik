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
              src="/RP_Logos/RP_Logo_white3D.png"
              alt="RP-Schließtechnik"
              width={150}
              height={100}
            />
          </Link>
          <p >RP Schliesstechnik</p>
        </div>


        <div>
          <div className={styles.asideNav}>
            <div className={styles.asideNavGridItem}>
              <li className={styles.item1}>Ausgesperrt?</li>
              <li className={styles.item1}>24H Notdienst</li>

            </div>
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
        </div>



        <div className={styles.asideNav}>
          <Image src="/bilder/hot.png" alt="RP-Schließtechnik" width={150} height={75}
            onClick={() => { window.location.href = "tel:+4917623687542"; }}>

          </Image>
        </div>
      </div>
      <hr className={styles.line} />
    </nav >


  );
}
