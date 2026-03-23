import styles from "../styles/aboutus.module.css";
import homeStyles from "../styles/home.module.css";
import Link from 'next/link';
import Head from 'next/head';

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>Über uns - RP Schliesstechnik</title>
        <meta name="description" content="Erfahren Sie mehr über RP Schliesstechnik - Ihr zuverlässiger Partner für professionelle Schließtechnik und Sicherheitslösungen." />
        <meta name="keywords" content="Über uns, RP Schliesstechnik, Unternehmen, Team, Sicherheit" />
      </Head>
      <div className={homeStyles.container}>
        <div className={`${styles.aboutus} about-us`}>
          <div className="hero">
            <h1>Über RP Schliesstechnik</h1>
            <p>Ihr zuverlässiger Partner für professionelle Schließtechnik und Sicherheitslösungen</p>
          </div>

          <section>
            <h2>Wer wir sind</h2>
            <p>
              RP Schliesstechnik ist Ihr kompetenter Ansprechpartner, wenn es um Sicherheit geht.
              Mit jahrelanger Erfahrung in der Branche bieten wir professionelle Lösungen für
              private und gewerbliche Kunden.
            </p>
            <p>
              Unser Team besteht aus qualifizierten Fachleuten, die mit modernster Technik
              arbeiten und stets auf dem neuesten Stand der Entwicklungen in der Schließtechnik sind.
            </p>
          </section>

          <section>
            <h2>Unsere Leistungen</h2>
            <ul>
              <li>24/7 Notdienst - Wir sind immer für Sie da</li>
              <li>Türöffnungen ohne Beschädigung</li>
              <li>Installation und Wartung von Schließanlagen</li>
              <li>Sicherheitsberatung für Ihr Zuhause oder Unternehmen</li>
              <li>Schlüsselnotdienst und Schlüsselanfertigung</li>
              <li>Moderne Zutrittskontrollsysteme</li>
            </ul>
          </section>

          <section className="ourVision">
            <h2>Unsere Vision</h2>
            <p>
              Sicherheit und Zuverlässigkeit stehen bei uns an erster Stelle. Unser Ziel ist es,
              Ihnen mit schnellem Service, fairen Preisen und höchster Qualität zur Seite zu stehen.
            </p>
          </section>

          <section>
            <h2>Warum RP Schliesstechnik?</h2>
            <ul>
              <li>Schnelle Reaktionszeiten - auch im Notfall</li>
              <li>Transparente Preisgestaltung ohne versteckte Kosten</li>
              <li>Zertifizierte und erfahrene Techniker</li>
              <li>Hochwertige Produkte von führenden Herstellern</li>
              <li>Persönliche Beratung und individuelle Lösungen</li>
            </ul>
          </section>

          <section className="contact-us">
            <h2>Kontaktieren Sie uns</h2>
            <p>
              Haben Sie Fragen oder benötigen Sie unsere Hilfe?
              <br />
              <strong>
                <Link href="/contact">Nehmen Sie jetzt Kontakt mit uns auf</Link>
              </strong>
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutUs;