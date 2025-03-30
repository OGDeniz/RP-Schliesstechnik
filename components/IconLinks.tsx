// Ensure react-icons is installed and remove unused imports
import { FaCar, FaShop } from "react-icons/fa6";
import { MdOutlineLock } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";
import styles from "../styles/iconLinks.module.css"; // Korrektes CSS-Modul importieren
import Link from "next/link";

export default function IconLinks() {
    return (
        <div className={styles.containerIconLinks}>
            <div className={styles.iconLinks}>
                <div className={styles.iconLinksItem}>
                    <Link href="/produkte" className={styles.iconLinks}>
                        <FaCar />
                    </Link>
                </div>
                <p>Fahrzeugöffnung</p> {/* Text unter dem Icon */}
            </div>
            <div className={styles.iconLinks}>
                <div className={styles.iconLinksItem}>
                    <Link href="/produkte" className={styles.iconLinks}>
                        <FaShop />
                    </Link>
                </div>
                <p>Türöffnung</p> {/* Text unter dem Icon */}
            </div>
            <div className={styles.iconLinks}>
                <div className={styles.iconLinksItem}>
                    <Link href="/produkte" className={styles.iconLinks}>
                        <Ri24HoursFill />
                    </Link>
                </div>
                <p>Notdienst</p> {/* Text unter dem Icon */}
            </div>
        </div>
    );
}
