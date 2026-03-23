import { useEffect } from "react";
import homeStyles from "../styles/home.module.css";
import Head from "next/head";
import Hero from "../components/Hero";
import ElfsightWidget from "../components/ElfsightWidget";
import GoogleMaps from "../components/GoogleMaps";
import Accordion from "../components/ui/Accordion";
import { FaDoorOpen, FaKey, FaShield, FaCar, FaGear, FaLock, FaUserShield } from "react-icons/fa6";

export default function Home() {
  useEffect(() => {
    fetch("/api/views", { method: "POST" });
  }, []);

  return (
    <div className={homeStyles.container}>
      <Head>
        <title>Schlüsseldienst Bruchsal & Umgebung | RP Schließtechnik</title>
        <meta
          name="description"
          content="24h Schlüsselnotdienst Bruchsal, Ettlingen, Waghäusel & Umgebung. Schnelle Türöffnung ab 79€, Einbruchschutz & Sicherheitstechnik. RP Schließtechnik – sofort vor Ort."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="RP Schließtechnik – 24h Schlüsseldienst Bruchsal" />
        <meta
          property="og:description"
          content="Schnelle & günstige Türöffnungen ab 79€, Einbruchschutz und Schließanlagen in Bruchsal, Ettlingen und Umgebung."
        />
        <meta property="og:image" content="/bilder/opengraph-preview.jpg" />
        <meta property="og:url" content="https://schluesselrp.de" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://schluesselrp.de/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "RP Schließtechnik",
              image: "https://schluesselrp.de/bilder/logo.png",
              url: "https://schluesselrp.de",
              telephone: "+49 176 236 875 42",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Schwimmbadstraße 18",
                addressLocality: "Bruchsal",
                postalCode: "76646",
                addressCountry: "DE",
              },
              openingHours: "Mo-So 00:00-24:00",
            }),
          }}
        />
      </Head>

      {/* ① HERO */}
      <Hero />

      {/* ② TRUST STATS */}
      <section className={homeStyles.trustStats}>
        <div className={homeStyles.trustStatsInner}>
          <div className={homeStyles.statItem}>
            <span className={homeStyles.statNumber}>1200+</span>
            <span className={homeStyles.statLabel}>Einsätze</span>
          </div>
          <div className={homeStyles.statItem}>
            <span className={homeStyles.statNumber}>Ø 20 Min</span>
            <span className={homeStyles.statLabel}>vor Ort</span>
          </div>
          <div className={homeStyles.statItem}>
            <span className={homeStyles.statNumber}>100%</span>
            <span className={homeStyles.statLabel}>Transparente Preise</span>
          </div>
        </div>
      </section>

      {/* ③ LEISTUNGEN */}
      <section className={homeStyles.leistungenSection}>
        <div className={homeStyles.sectionHeader}>
          <h2>Unsere Leistungen</h2>
          <p>Schnell, zuverlässig & transparent – was auch immer Sie brauchen</p>
        </div>
        <div className={homeStyles.leistungenGrid}>
          <div className={homeStyles.leistungCard}>
            <div className={homeStyles.leistungIcon}>
              <FaDoorOpen />
            </div>
            <h3>Türöffnung</h3>
            <p>Schlüssel weg oder Tür zugefallen? Wir öffnen schnell & ohne Schaden – ab 79€.</p>
            <a href="tel:+4917623687542" className={homeStyles.leistungCta}>
              Jetzt anrufen →
            </a>
          </div>
          <div className={homeStyles.leistungCard}>
            <div className={homeStyles.leistungIcon}>
              <FaKey />
            </div>
            <h3>Schlosswechsel</h3>
            <p>Schloss defekt oder nach Einbruch? Wir tauschen Ihr Schloss sofort & sicher.</p>
            <a href="tel:+4917623687542" className={homeStyles.leistungCta}>
              Jetzt anrufen →
            </a>
          </div>
          <div className={homeStyles.leistungCard}>
            <div className={homeStyles.leistungIcon}>
              <FaShield />
            </div>
            <h3>Einbruchschutz</h3>
            <p>Sicherheitszylinder, Mehrfachverriegelung & Beratung – für Ihr ruhiges Gewissen.</p>
            <a href="tel:+4917623687542" className={homeStyles.leistungCta}>
              Mehr erfahren →
            </a>
          </div>
          <div className={homeStyles.leistungCard}>
            <div className={homeStyles.leistungIcon}>
              <FaCar />
            </div>
            <h3>Autoöffnung</h3>
            <p>Schlüssel im Auto eingeschlossen? Wir öffnen Ihr Fahrzeug professionell & schadensfrei.</p>
            <a href="tel:+4917623687542" className={homeStyles.leistungCta}>
              Jetzt anrufen →
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS – Elfsight Widget */}
      <ElfsightWidget />

      {/* ④ EINSATZGEBIET */}
      <section className={homeStyles.einsatzgebiet}>
        <h2>Unser Einsatzgebiet</h2>
        <p>Wir sind für Sie da in der Region Bruchsal & Umgebung</p>
        <div className={homeStyles.regionChips}>
          {[
            "Bruchsal",
            "Forst (Baden)",
            "Karlsdorf-Neuthard",
            "Hambrücken",
            "Ubstadt-Weiher",
            "Bad Schönborn",
            "Kronau",
            "Graben-Neudorf",
            "Waghäusel",
            "Kraichtal",
            "Gondelsheim",
            "Bretten",
            "Walzbachtal",
            "Weingarten (Baden)",
            "Stutensee",
            "Östringen",
            "Oberhausen-Rheinhausen",
            "Philippsburg",
            "Dettenheim",
            "Linkenheim-Hochstetten",
          ].map((city) => (
            <span key={city} className={homeStyles.regionBadge}>
              {city}
            </span>
          ))}
        </div>
      </section>

      {/* ⑤ EINBRUCHSCHUTZ UPSELL */}
      <section className={homeStyles.upsellSection}>
        <div className={homeStyles.sectionHeader}>
          <h2>Nicht nur öffnen – wir sichern Ihr Zuhause</h2>
          <p>Vorsorge ist besser als Schaden. Wir beraten Sie kostenlos.</p>
        </div>
        <div className={homeStyles.upsellGrid}>
          <div className={homeStyles.upsellCard}>
            <span className={homeStyles.upsellIcon}>
              <FaGear />
            </span>
            <h3>Sicherheitszylinder</h3>
            <p>Hochwertige Zylinder mit Bohr- & Ziehschutz – zertifizierte Qualität.</p>
          </div>
          <div className={homeStyles.upsellCard}>
            <span className={homeStyles.upsellIcon}>
              <FaLock />
            </span>
            <h3>Schließanlagen</h3>
            <p>Individuelle Systeme für Privat & Gewerbe – ein Schlüssel für alles.</p>
          </div>
          <div className={homeStyles.upsellCard}>
            <span className={homeStyles.upsellIcon}>
              <FaUserShield />
            </span>
            <h3>Sicherheitsberatung</h3>
            <p>Kostenlose Analyse Ihrer Schwachstellen – unverbindlich & kompetent.</p>
          </div>
        </div>
        <a href="tel:+4917623687542" className={homeStyles.upsellCta}>
          📞 Jetzt beraten lassen
        </a>
      </section>

      {/* ⑥ FAQ */}
      <section className={homeStyles.faqSection}>
        <div className={homeStyles.sectionHeader}>
          <h2>Häufige Fragen</h2>
        </div>
        <div className={homeStyles.faqInner}>
          <Accordion title="Was kostet eine Türöffnung?" defaultOpen={false}>
            <p>
              Eine einfache Türöffnung beginnt bei <strong>79€</strong> – transparent, ohne versteckte Kosten.
              Der genaue Preis hängt vom Schlosstyp und der Tageszeit ab. Wir nennen Ihnen den Preis immer vor dem Einsatz.
            </p>
          </Accordion>
          <Accordion title="Wie schnell seid ihr vor Ort?" defaultOpen={false}>
            <p>
              Im Durchschnitt sind wir in <strong>Ø 20 Minuten</strong> bei Ihnen – in Bruchsal und der gesamten
              Umgebung. Wir sind 24/7 im Einsatz, auch an Wochenenden und Feiertagen.
            </p>
          </Accordion>
          <Accordion title="Seid ihr wirklich 24 Stunden erreichbar?" defaultOpen={false}>
            <p>
              Ja – <strong>24/7, 365 Tage im Jahr</strong>. Egal ob 3 Uhr nachts oder an Heiligabend:
              Sie erreichen uns jederzeit unter{" "}
              <a href="tel:+4917623687542">+49 176 236 875 42</a>.
            </p>
          </Accordion>
          <Accordion title="In welchen Regionen seid ihr tätig?" defaultOpen={false}>
            <p>
              Unser Einsatzgebiet umfasst <strong>Bruchsal, Forst, Karlsdorf-Neuthard, Hambrücken,
              Ubstadt-Weiher, Bad Schönborn, Kronau, Graben-Neudorf, Waghäusel, Kraichtal,
              Gondelsheim, Bretten, Walzbachtal, Weingarten, Stutensee, Östringen,
              Oberhausen-Rheinhausen, Philippsburg, Dettenheim, Linkenheim-Hochstetten</strong> und
              den gesamten Landkreis Karlsruhe. Nicht sicher? Einfach kurz anrufen!
            </p>
          </Accordion>
        </div>
      </section>

      {/* ⑦ FINAL CTA */}
      <section className={homeStyles.finalCta}>
        <h2>Jetzt Hilfe anfordern –<br />wir sind sofort erreichbar</h2>
        <p>Kein Warteschleife, kein Callcenter – direkt zum Profi.</p>
        <a href="tel:+4917623687542" className={homeStyles.finalCtaButton}>
          📞 Jetzt anrufen
        </a>
        <span className={homeStyles.finalCtaPhone}>+49 176 236 875 42 · 24/7 Notdienst</span>
      </section>

      {/* MAPS */}
      <section className={homeStyles.mapsSection}>
        <h2>So finden Sie uns – Schlüsseldienst Bruchsal</h2>
        <GoogleMaps />
      </section>
    </div>
  );
}
