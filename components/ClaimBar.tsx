// components/ClaimBar.tsx
import React, { useEffect, useState } from 'react';
import styles from '../styles/claimbar.module.css';

const Claimbar: React.FC = () => {
    // Sitzt immer bündig unter der Navigation – Höhe wird live gemessen
    // (Nav ändert Höhe je nach Breakpoint und Scroll-Zustand).
    const [navHeight, setNavHeight] = useState<number>(116);

    useEffect(() => {
        const nav = document.querySelector('nav');
        if (!nav) return;

        const update = () => setNavHeight(Math.round(nav.getBoundingClientRect().height));
        update();

        const ro = new ResizeObserver(update);
        ro.observe(nav);
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);

        return () => {
            ro.disconnect();
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, []);

    return (
        <div className={styles.claimbar} style={{ top: navHeight }} role="complementary" aria-label="Notdienst-Hinweis">
            <div className={styles.inner}>
                <span className={styles.badge}>
                    <span className={styles.dot} aria-hidden="true" />
                    24/7 Notdienst
                </span>
                <span className={styles.services}>
                    Türöffnung · Schlosswechsel · Einbruchschutz
                </span>
                <span className={styles.region}>
                    Bruchsal &amp; Umgebung · Festpreis · schnell vor Ort
                </span>
            </div>
        </div>
    );
};

export default Claimbar;
