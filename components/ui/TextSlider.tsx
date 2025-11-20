import React, { useState, useEffect } from "react"; // Import von useEffect hinzugefügt
import { slidesData } from "../../components/data/slidesData";
import styles from "../../styles/home.module.css"; // Importieren der CSS-Module
import textstyles from "../../styles/textSlider.module.css"; // Importieren der CSS-Module

const TextSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatisches Wechseln des Sliders
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
    }, 3000); // Alle 3 Sekunden wechseln

    return () => clearInterval(interval); // Cleanup-Funktion
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={textstyles.textSliderContainer}>
      <div className={textstyles.textSlider}>
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            className={`${textstyles.slide} ${index === currentSlide ? textstyles.active : ""}`}
          >
            {index === currentSlide && (
              <>
                <h2 className={textstyles.slideTitle}>{slide.title}</h2>
                <p className={textstyles.slideDescription}>{slide.description}</p>
              </>
            )}
          </div>
        ))}
      </div>

      <button
        className={`${textstyles.sliderBtn} ${textstyles.prev}`}
        onClick={handlePrev}
        aria-label="Vorheriger Slide"
      >
        ‹
      </button>

      <button
        className={`${textstyles.sliderBtn} ${textstyles.next}`}
        onClick={handleNext}
        aria-label="Nächster Slide"
      >
        ›
      </button>
    </div>
  );
};

export default TextSlider;
