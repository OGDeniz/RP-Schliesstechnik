import React from 'react';
import Image from 'next/image';
import styles from '../styles/partners.module.css';

const Partners: React.FC = () => {
  const partners = [
    {
      name: 'ABUS',
      logo: '/RP_Logos/abus-logo.png',
      width: 180,
      height: 80,
      url: 'https://www.abus.com'
    }
    // Weitere Partner können hier hinzugefügt werden
  ];

  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Unsere Partner</h2>
        <p className={styles.subtitle}>
          Vertrauen Sie auf Qualität – Wir arbeiten mit den besten Marken
        </p>
        <div className={styles.partnersGrid}>
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.partnerCard}
              aria-label={`${partner.name} Website besuchen`}
            >
              <div className={styles.logoWrapper}>
                <Image
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  width={partner.width}
                  height={partner.height}
                  className={styles.partnerLogo}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
