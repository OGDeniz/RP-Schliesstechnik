import { useEffect, useState } from "react";
import {
  CONSENT_UPDATED_EVENT,
  hasOptionalConsent,
  setStoredConsent,
} from "../lib/cookieConsent";

export default function GoogleMaps() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(hasOptionalConsent());

    const handleConsentUpdate = () => setEnabled(hasOptionalConsent());
    window.addEventListener(CONSENT_UPDATED_EVENT, handleConsentUpdate);

    return () => {
      window.removeEventListener(CONSENT_UPDATED_EVENT, handleConsentUpdate);
    };
  }, []);

  if (!enabled) {
    return (
      <div
        className="w-full overflow-hidden rounded-lg shadow-md"
        style={{
          padding: "1rem",
          background: "rgba(27, 58, 107, 0.92)",
          color: "#fff",
        }}
      >
        <p style={{ marginBottom: "0.75rem" }}>
          Google Maps wird erst nach Ihrer Zustimmung zu optionalen Cookies
          geladen.
        </p>
        <button
          type="button"
          onClick={() => {
            setStoredConsent("all");
            setEnabled(true);
          }}
          style={{
            border: "none",
            borderRadius: "10px",
            background: "#f97316",
            color: "#fff",
            fontWeight: 700,
            padding: "0.55rem 0.9rem",
            cursor: "pointer",
          }}
        >
          Google Maps laden
        </button>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2611.1721080351567!2d8.588379587584528!3d49.12136640835224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8acc36de52dc9aad%3A0x3d8e3d791a753563!2sRP%20Schliesstechnik!5e0!3m2!1sde!2sde!4v1772397350920!5m2!1sde!2sde"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="RP Schliesstechnik auf Google Maps"
      />
    </div>
  );
}
