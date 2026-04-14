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
      url: 'https://www.abus.com',
    },
    {
      name: 'BKS',
      logo: '/partner/bks.png',
      width: 180,
      height: 80,
      url: 'https://www.bks.de',
    },
    {
      name: 'DOM',
      logo: '/partner/dom.svg',
      width: 180,
      height: 60,
      url: 'https://www.dom-security.com/de/de',
    },
    {
      name: 'WILKA',
      logo: '/partner/wilka-logo.svg',
      width: 180,
      height: 80,
      url: 'https://www.wilka.de',
    },
    {
      name: 'ADAC',
      logo: '/partner/adac.svg',
      width: 180,
      height: 80,
      url: 'https://www.adac.de',
    },
    {
      name: 'StadtPortal Kraichgau',
      logo: '/partner/stadtp.webp',
      width: 180,
      height: 80,
      url: 'https://www.stadtportal-kraichgau.de/',
    },
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Unsere Partner</h2>
        <p className={styles.subtitle}>
          Vertrauen Sie auf Qualität – wir arbeiten mit starken Marken und regionalen Partnern.
        </p>
        <br />
        <span className={styles.eyebrow}>Marken & Kooperationen</span>

        <div className={styles.sliderShell}>
          <div className={styles.fadeLeft} aria-hidden="true" />
          <div className={styles.fadeRight} aria-hidden="true" />

          <div className={styles.sliderTrack}>
            {duplicatedPartners.map((partner, index) => (
              <a
                key={`${partner.name}-${index}`}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.partnerItem}
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
      </div>
    </section>
  );
};

export default Partners;