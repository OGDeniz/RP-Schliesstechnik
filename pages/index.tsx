
import { useMemo, useEffect } from "react";
import homeStyles from "../styles/home.module.css";
import styles from "../styles/navigation.module.css";
import openerStyles from "../styles/opener.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "../components/ui/Slider";
import Link from "next/link";
import Image from "next/image";
import cardStyles from "../styles/cards.module.css";
import IconLinks from "../components/IconLinks";
import Opener from "../components/Opener";
import Head from "next/head";
import TextSlider from "../components/ui/TextSlider";
import textStyles from "../styles/textSlider.module.css";
import ElfsightWidget from "../components/ElfsightWidget";
import Hero from "../components/Hero";
import Accordion from "../components/ui/Accordion";
import GoogleMaps from "../components/GoogleMaps";


export default function Home() {
  const sliderImages = useMemo(() => [
    {
      url: "/bilder/img1.jpg",
      alt: "Schlüsseldienst Bild 1",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    },
    {
      url: "/bilder/img2.png",
      alt: "Schlüsseldienst Bild 2",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    },
    {
      url: "/bilder/img3.png",
      alt: "Schlüsseldienst Bild 3",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    },
    {
      url: "/bilder/img4.png",
      alt: "Schlüsseldienst Bild 4",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    },
    {
      url: "/bilder/img5.png",
      alt: "Schlüsseldienst Bild 5",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    },

    {
      url: "/bilder/24std.png",
      alt: "Schlüsseldienst Bild 6",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    },
    {
      url: "/bilder/türöffnung.webp",
      alt: "Schlüsseldienst Bild 7",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    },
    {
      url: "/bilder/abus1.webp",
      alt: "Schlüsseldienst abus",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    },
  ], []);

  useEffect(() => {
    fetch("/api/views", { method: "POST" });
  }, []);


  return (



    <div className={homeStyles.container}>
      <Head>
        <title>Schlüsseldienst Bruchsal & Umgebung | RP Schließtechnik</title>
        <meta name="description" content="24h Schlüsselnotdienst Bruchsal, Ettlingen, Waghäusel & Umgebung. Schnelle Türöffnung, Einbruchschutz & Sicherheitstechnik. Ihr Experte – RP Schließtechnik!" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="RP Schließtechnik – 24h Schlüsseldienst Bruchsal" />
        <meta property="og:description" content="Schnelle & günstige Türöffnungen, Einbruchschutz und Schließanlagen in Bruchsal, Ettlingen und Umgebung." />
        <meta property="og:image" content="/bilder/opengraph-preview.jpg" />
        <meta property="og:url" content="https://schluesselrp.de" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://schluesselrp.de/" />


        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "RP Schließtechnik",
            "image": "https://schluesselrp.de/bilder/logo.png",
            "url": "https://schluesselrp.de",
            "telephone": "+49 176 236 875 42",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Schwimmbadstraße 18",
              "addressLocality": "Bruchsal",
              "postalCode": "76646",
              "addressCountry": "DE"
            },
            "openingHours": "Mo-So 00:00-24:00"
          })
        }} />

      </Head>
      <div className={homeStyles.header}>
        <Hero />
        <div className={homeStyles.textslide}>
          <Opener />
          <Slider images={sliderImages} className={homeStyles.slider} />
        </div>
        <ElfsightWidget />
      </div>

      <div className={homeStyles.sliderContainer}>
        <Slider images={sliderImages} className={undefined} />
      </div>
      {/* 
      <div className={homeStyles.three} >
      
      <h2>Über uns – RP Schließtechnik</h2>
      <p className={homeStyles.description}>
      RP Schließtechnik ist Ihr zuverlässiger Partner für mechanische und digitale Schließsysteme. Mit langjähriger Erfahrung bieten wir maßgeschneiderte Sicherheitslösungen für Privatkunden, Unternehmen und öffentliche Einrichtungen.
      
      Unser Anspruch: höchste Qualität, individuelle Beratung und maximale Sicherheit.
      </p>
      {/*
      Define the 'produkt' object with the required properties.
      }
      
      </div> */}


      <div className={homeStyles.three} >
        <h2>Unser Anspruch</h2>
        <ul className={homeStyles.description}>
          <li>
            <strong>Hochwertige Produkte:</strong> Von klassischen Zylinderschlössern bis hin zu modernen elektronischen Schließsystemen.
          </li>
          <li>
            <strong>Zuverlässiger Service:</strong> Beratung, Installation und Wartung – alles aus einer Hand.
          </li>
          <li>
            <strong>Kundenzufriedenheit:</strong> Persönlicher Support und passgenaue Lösungen stehen bei uns an erster Stelle.
          </li>
        </ul>
      </div>

      <div className={homeStyles.three} >
        <Accordion title="Unsere Vision" defaultOpen={false}>
          <p>
            Wir möchten, dass Sie sich jederzeit sicher fühlen – in Ihrem Zuhause, Ihrem Unternehmen oder unterwegs. Daher investieren wir kontinuierlich in neue Technologien und setzen auf nachhaltige, zukunftsorientierte Konzepte.
          </p>
        </Accordion>
      </div>

      <div className={textStyles.textSliderContainer} >
        <TextSlider />
      </div>

      <div className={homeStyles.three} >
        <Accordion title="Warum RP Schließtechnik?" defaultOpen={false}>
          <ul>
            <li>
              <strong>Erfahrung und Expertise:</strong> Langjährige Branchenerfahrung und ein Team von Profis.
            </li>
            <li>
              <strong>Individuelle Lösungen:</strong> Wir hören zu, analysieren und entwickeln maßgeschneiderte Schließsysteme.
            </li>
            <li>
              <strong>Zuverlässigkeit:</strong> Pünktlichkeit und Qualität sind für uns selbstverständlich.
            </li>
          </ul>
        </Accordion>
      </div >

      <div className={homeStyles.three} >
        <Accordion title="Unsere Leistungen" defaultOpen={false}>
          <ul>
            <li>
              <strong>Schließanlagen:</strong> Planung, Installation und Wartung von mechanischen und digitalen Schließsystemen.
            </li>
            <li>
              <strong>Sicherheitsberatung:</strong> Analyse und Optimierung bestehender Sicherheitskonzepte.
            </li>
            <li>
              <strong>Notdienst:</strong> 24/7-Service für Türöffnungen, Schlüsselverlust und Einbruchschäden.
            </li>
          </ul>
          <Link href="/produkte" className={styles.button}>
            Mehr erfahren
          </Link>
        </Accordion>
      </div>


      <div className={homeStyles.three} >
        <h2>RP Services</h2>

        <IconLinks />

        <p className={homeStyles.description}>
          Wir bieten Ihnen eine breite Palette an Dienstleistungen rund um Schließtechnik und Sicherheitstechnik.


          Egal, ob Sie einen Schlüssel verloren haben oder Ihre Sicherheitstechnik auf den neuesten Stand bringen möchten – wir sind für Sie da!
        </p>


      </div>

      <div className={homeStyles.three}>
        <h2>Schlüsseldienst Bruchsal – So finden Sie uns</h2>
        <GoogleMaps />
      </div>
    </div >
  );
}