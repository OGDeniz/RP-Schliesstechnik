import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/adacBadge.module.css';

const AdacBadge: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`${styles.wrapper} ${visible ? styles.visible : ''}`}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.badgeFrame}>
          <div className={styles.shimmer} aria-hidden="true" />
          <Image
            src="/partner/Adac_partner.jpeg"
            alt="ADAC Schlüsselnotdienst-Partner"
            width={480}
            height={216}
            className={styles.badgeImg}
            priority
          />
        </div>

        <div className={styles.text}>
          <span className={styles.eyebrow}>Zertifiziert & anerkannt</span>
          <h2 className={styles.heading}>Offizieller ADAC<br />Schlüsselnotdienst-Partner</h2>
          <p className={styles.sub}>
            Als zertifizierter ADAC-Partner stehen wir für geprüfte Qualität,
            faire Preise und professionellen Service – rund um die Uhr.
          </p>
          <a href="tel:+4917623687542" className={styles.cta}>
            Jetzt Hilfe anfordern
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdacBadge;
