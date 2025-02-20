
import { useMemo } from "react";
import homeStyles from "../styles/home.module.css";
import styles from "../styles/navigation.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "../components/ui/Slider";
import Link from "next/link";

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

    <div className={homeStyles.container} >

      <Slider images={sliderImages} className={homeStyles.slider} />


      <div className={homeStyles.three}>
        <div className={homeStyles.two} >

          <h2>Über uns – RP Schließtechnik</h2>
          <p className={homeStyles.description}>
            RP Schließtechnik ist Ihr zuverlässiger Partner für mechanische und digitale Schließsysteme. Mit langjähriger Erfahrung bieten wir maßgeschneiderte Sicherheitslösungen für Privatkunden, Unternehmen und öffentliche Einrichtungen.

            Unser Anspruch: höchste Qualität, individuelle Beratung und maximale Sicherheit.
          </p>
        </div>

        <div className={homeStyles.two} >
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

        <div className={homeStyles.two} >

          <h2>Unsere Vision</h2>
          <p className={homeStyles.description}>
            Wir möchten, dass Sie sich jederzeit sicher fühlen – in Ihrem Zuhause, Ihrem Unternehmen oder unterwegs. Daher investieren wir kontinuierlich in neue Technologien und setzen auf nachhaltige, zukunftsorientierte Konzepte.
          </p>
        </div>

        <div className={homeStyles.two} >
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
      </div >
    </div>
  );
}