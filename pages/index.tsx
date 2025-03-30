
import { useMemo } from "react";
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
  ], []);

  return (

    <div className={homeStyles.container}>
      <div className={homeStyles.header}>
        <Opener />
      </div>

      <div className={homeStyles.three} >

        <h2>Über uns – RP Schließtechnik</h2>
        <p className={homeStyles.description}>
          RP Schließtechnik ist Ihr zuverlässiger Partner für mechanische und digitale Schließsysteme. Mit langjähriger Erfahrung bieten wir maßgeschneiderte Sicherheitslösungen für Privatkunden, Unternehmen und öffentliche Einrichtungen.

          Unser Anspruch: höchste Qualität, individuelle Beratung und maximale Sicherheit.
        </p>
        {/*
            Define the 'produkt' object with the required properties.
          */}
        <Image
          src="/bilder/img4.png"
          alt="Schlüsseldienst Bild 4"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

          width={1920}
          height={1080}
          className={cardStyles.cardImage}
        />
      </div>

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

        <h2>Unsere Vision</h2>
        <p className={homeStyles.description}>
          Wir möchten, dass Sie sich jederzeit sicher fühlen – in Ihrem Zuhause, Ihrem Unternehmen oder unterwegs. Daher investieren wir kontinuierlich in neue Technologien und setzen auf nachhaltige, zukunftsorientierte Konzepte.
        </p>
      </div>

      <div className={homeStyles.three} >
        <h2>Warum RP Schließtechnik?</h2>
        <ul className={homeStyles.description}>
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
      </div >

      <div className={homeStyles.three} >

        <h2>Unsere Leistungen</h2>
        <ul className={homeStyles.description}>
          <li>
            <strong>Schließanlagen:</strong> Planung, Installation und Wartung von mechanischen und digitalen Schließsystemen.
          </li>
          <li>
            <strong>Sicherheitsberatung:</strong> Analyse und Optimierung bestehender Sicherheitskonzepte.
          </li>
          <li>
            <strong>Notdienst:</strong> 24/7-Service für Türöffnungen, Schlüsselverlust und Einbruchschäden.
          </li>
          <Link href="/produkte" className={styles.button}>
            Mehr erfahren
          </Link>
        </ul>
      </div>


      <div className={homeStyles.three} >
        <h2>RP Services</h2>

        <IconLinks />

        <p className={homeStyles.description}>
          Wir bieten Ihnen eine breite Palette an Dienstleistungen rund um Schließtechnik und Sicherheitstechnik.


          Egal, ob Sie einen Schlüssel verloren haben oder Ihre Sicherheitstechnik auf den neuesten Stand bringen möchten – wir sind für Sie da!
        </p>


      </div>
    </div >
  );
}