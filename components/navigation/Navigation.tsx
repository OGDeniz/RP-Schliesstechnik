import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { AnimatePresence, motion, MotionConfig, useReducedMotion } from "framer-motion";
import { FaPhone, FaXmark } from "react-icons/fa6";
import styles from "../../styles/navigation.module.css";

const NAV_LINKS = [
  { href: "/", label: "Startseite" },
  { href: "/produkte", label: "Leistungen" },
  { href: "/contact", label: "Kontakt" },
  { href: "/impressum", label: "Impressum" },
];

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
  exit: { opacity: 0, transition: { staggerChildren: 0.03, staggerDirection: -1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.2, ease: "easeIn" as const } },
};

export default function Navigation() {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  // Transparent nur über dem dunklen Hero der Startseite – sonst immer solide
  const solid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menü bei Routenwechsel schließen
  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  // Body-Scroll sperren, solange das mobile Menü offen ist
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  const handleNavigationCall = async () => {
    try {
      await fetch("/api/button-tracking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ buttonType: "navigationCall" }),
      });
    } catch (error) {
      console.error("Tracking-Fehler:", error);
    }

    window.location.href = "tel:+4917623687542";
  };

  return (
    <MotionConfig reducedMotion="user">
      <motion.nav
        className={`${styles.navigation} ${solid ? styles.scrolled : ""}`}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.navContainer}>
          <div className={styles.navLeft}>
            {/* Burger-Icon – im Desktop ausgeblendet */}
            <button
              type="button"
              className={`${styles.burgerMenu} ${menuOpen ? styles.burgerMenuOpen : ""}`}
              onClick={toggleMenu}
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* Logo – immer sichtbar */}
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src="/RP_Logos/RP_white.svg"
                  alt="RP-Schliesstechnik"
                  width={150}
                  height={150}
                  priority
                />
                <div className={styles.logoText}>
                  <p>Schliesstechnik</p>
                  <p className={styles.logoClaim}>SICHERHEIT | VERTRAUEN | LÖSUNGEN</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop Menü: wird nur im Desktop sichtbar */}
          <div className={styles.desktopMenu}>
            <ul className={styles.menu}>
              {NAV_LINKS.map((link) => {
                const active = router.pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${styles.menuLink} ${active ? styles.menuLinkActive : ""}`}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                      {active && (
                        <motion.span
                          className={styles.activeIndicator}
                          layoutId="nav-active-indicator"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* "Jetzt anrufen"-Button – immer sichtbar */}
          <div className={styles.rightNav}>
            <motion.button
              onClick={handleNavigationCall}
              className={styles.callButton}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <span className={styles.phoneIconWrap}>
                {!prefersReducedMotion && (
                  <motion.span
                    className={styles.pulseRing}
                    animate={{ scale: [1, 1.7], opacity: [0.55, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                  />
                )}
                <FaPhone className={styles.phoneIcon} aria-hidden="true" />
              </span>
              <span className={styles.callText}>
                <span className={styles.callLabel}>Ausgesperrt?</span>
                <span className={styles.callMain}>24h Schlüsselnotdienst</span>
                <span className={styles.callNumber}>+49 176 23687542</span>
              </span>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menü (Fullscreen-Overlay) */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              className={styles.menuMobile}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Kopfzeile im Overlay: Logo (räumliche Kontinuität) + Close */}
              <div className={styles.mobileHeader}>
                <Link href="/" onClick={closeMenu} className={styles.mobileLogo}>
                  <Image
                    src="/RP_Logos/RP_white.svg"
                    alt="RP-Schliesstechnik"
                    width={120}
                    height={120}
                  />
                  <span className={styles.mobileLogoText}>Schliesstechnik</span>
                </Link>
                <button
                  className={styles.closeButton}
                  onClick={closeMenu}
                  aria-label="Menü schließen"
                >
                  <FaXmark aria-hidden="true" />
                </button>
              </div>

              <motion.ul
                className={styles.mobileMenuList}
                variants={listVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {NAV_LINKS.map((link) => {
                  const active = router.pathname === link.href;
                  return (
                    <motion.li key={link.href} variants={itemVariants} className={styles.mobileMenuItem}>
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={active ? styles.mobileMenuLinkActive : styles.mobileMenuLink}
                        aria-current={active ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}

                {/* Notdienst-CTA – mobil besonders wichtig */}
                <motion.li variants={itemVariants} className={styles.mobileCtaItem}>
                  <button
                    type="button"
                    className={styles.mobileCallButton}
                    onClick={() => {
                      closeMenu();
                      handleNavigationCall();
                    }}
                  >
                    <FaPhone className={styles.mobileCallIcon} aria-hidden="true" />
                    <span className={styles.mobileCallText}>
                      <span className={styles.mobileCallLabel}>24h Schlüsselnotdienst</span>
                      <span className={styles.mobileCallNumber}>+49 176 23687542</span>
                    </span>
                  </button>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </MotionConfig>
  );
}
