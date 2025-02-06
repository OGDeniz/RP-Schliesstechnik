import React, { useState, useEffect } from "react"; // Import von useEffect hinzugefügt
import { slidesData } from "@/components/data/slidesData";
import styles from "@/styles/TextSlider.module.css";

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
    <div className="text-slider-container">
      <div className="text-slider controls">
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            {index === currentSlide && (
              <>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextSlider;
