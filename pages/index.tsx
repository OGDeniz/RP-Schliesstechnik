import { useEffect } from "react";
import homeStyles from "../styles/home.module.css";
import Head from "next/head";
import Hero from "../components/Hero";
import ElfsightWidget from "../components/ElfsightWidget";
import GoogleMaps from "../components/GoogleMaps";
import Accordion from "../components/ui/Accordion";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import { FaDoorOpen, FaKey, FaShield, FaCar, FaGear, FaLock, FaUserShield, FaWrench, FaLocationDot, FaTag, FaPhone } from "react-icons/fa6";
import Partners from "../components/Partners";
import dynamic from "next/dynamic";
const AdacBadge = dynamic(() => import("../components/AdacBadge"), { ssr: false });

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
        <meta property="og:image" content="https://schluesselrp.de/bilder/brusl.jpg" />
        <meta property="og:url" content="https://schluesselrp.de/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RP Schließtechnik – 24h Schlüsseldienst Bruchsal" />
        <meta name="twitter:description" content="Schnelle & günstige Türöffnungen ab 79€, Einbruchschutz und Schließanlagen in Bruchsal, Ettlingen und Umgebung." />
        <meta name="twitter:image" content="https://schluesselrp.de/bilder/brusl.jpg" />
        <link rel="canonical" href="https://schluesselrp.de/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Locksmith",
              "@id": "https://schluesselrp.de/#business",
              name: "RP Schließtechnik",
              image: "https://schluesselrp.de/bilder/brusl.jpg",
              url: "https://schluesselrp.de/",
              telephone: "+49 176 236 875 42",
              priceRange: "ab 79 €",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Schwimmbadstraße 18",
                addressLocality: "Bruchsal",
                postalCode: "76646",
                addressRegion: "Baden-Württemberg",
                addressCountry: "DE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 49.1244,
                longitude: 8.5981,
              },
              areaServed: [
                "Bruchsal", "Ettlingen", "Waghäusel", "Bretten", "Stutensee",
                "Karlsdorf-Neuthard", "Ubstadt-Weiher", "Bad Schönborn", "Philippsburg",
                "Landkreis Karlsruhe",
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday", "Tuesday", "Wednesday", "Thursday",
                  "Friday", "Saturday", "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Was kostet eine Türöffnung?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Eine einfache Türöffnung beginnt bei 79 € – transparent, ohne versteckte Kosten. Der genaue Preis hängt vom Schlosstyp und der Tageszeit ab. Wir nennen Ihnen den Preis immer vor dem Einsatz.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie schnell seid ihr vor Ort?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Im Durchschnitt sind wir in rund 20 Minuten bei Ihnen – in Bruchsal und der gesamten Umgebung. Wir sind 24/7 im Einsatz, auch an Wochenenden und Feiertagen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Seid ihr wirklich 24 Stunden erreichbar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ja – 24/7, 365 Tage im Jahr. Egal ob 3 Uhr nachts oder an Heiligabend: Sie erreichen uns jederzeit unter +49 176 236 875 42.",
                  },
                },
                {
                  "@type": "Question",
                  name: "In welchen Regionen seid ihr tätig?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Unser Einsatzgebiet umfasst Bruchsal, Forst, Karlsdorf-Neuthard, Hambrücken, Ubstadt-Weiher, Bad Schönborn, Kronau, Graben-Neudorf, Waghäusel, Kraichtal, Gondelsheim, Bretten, Walzbachtal, Weingarten, Stutensee, Östringen, Oberhausen-Rheinhausen, Philippsburg, Dettenheim, Linkenheim-Hochstetten und den gesamten Landkreis Karlsruhe.",
                  },
                },
              ],
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
            <span className={homeStyles.statNumber}>
              <AnimatedCounter to={500} suffix="+" />
            </span>
            <span className={homeStyles.statLabel}><FaWrench />Einsätze</span>
          </div>
          <div className={homeStyles.statItem}>
            <span className={homeStyles.statNumber}>
              <AnimatedCounter to={20} toRange={30} suffix=" Min" />
            </span>
            <span className={homeStyles.statLabel}><FaLocationDot />vor Ort</span>
          </div>
          <div className={homeStyles.statItem}>
            <span className={homeStyles.statNumber}>
              <AnimatedCounter to={100} suffix="%" />
            </span>
            <span className={homeStyles.statLabel}><FaTag />Transparente Preise</span>
          </div>
        </div>
      </section>

      {/* ADAC PARTNER BADGE */}
      <AdacBadge />

      <Partners />

      {/* ③ LEISTUNGEN */}
      <section id="leistungen" className={homeStyles.leistungenSection}>
        <div className={homeStyles.sectionHeader} data-eyebrow="Was wir können">
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
        <div className={homeStyles.sectionHeader} data-eyebrow="Einbruchschutz">
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
          <FaPhone /> Jetzt beraten lassen
        </a>
      </section>

      {/* ⑥ FAQ */}
      <section className={homeStyles.faqSection}>
        <div className={homeStyles.sectionHeader} data-eyebrow="FAQ">
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
          <FaPhone /> Jetzt anrufen
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
