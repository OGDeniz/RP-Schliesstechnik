
import { useMemo } from "react";
import homeStyles from "../styles/home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "../components/ui/Slider";

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

    </div>

  );
}


