import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/navigation.module.css";
import buttonData from "../data/buttonData";
import TexSlider from "../ui/TextSlider";
export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false); // Initialisierung des Menüs
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={styles.container}>
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
              <p className={styles.leftNavText}>RP-Schließtechnik</p>
            </Link>
          </div>
          <div className={styles.rightNav}>
            <div className={styles.rightTopNav}>
              <div className={styles.middleTop}>
                <h1>Ihr Schlüsselnotdienst | Schnell und jederzeit erreichbar!</h1>
              </div>
              <div className={styles.middleBottom}>
                <div className={styles.TexSlider}>
                  <TexSlider />
                </div>
              </div>
            </div>
            <div className={styles.rightBottomNav}>
              {/* Dynamisch alle Buttons aus buttonData anzeigen */}
              {buttonData.map((button) => (
                <button
                  key={button.id}
                  onClick={button.handleClick}
                  className={button.className} // CSS-Klasse anwenden
                >
                  {button.label}
                </button>
              ))}

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
