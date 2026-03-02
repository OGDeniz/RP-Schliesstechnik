import { useEffect, useState } from "react";
import {
    CONSENT_UPDATED_EVENT,
    hasOptionalConsent,
    setStoredConsent
} from "../lib/cookieConsent";

const ElfsightWidget = () => {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        setEnabled(hasOptionalConsent());

        const handleConsentUpdate = () => setEnabled(hasOptionalConsent());
        window.addEventListener(CONSENT_UPDATED_EVENT, handleConsentUpdate);

        return () => {
            window.removeEventListener(CONSENT_UPDATED_EVENT, handleConsentUpdate);
        };
    }, []);

    useEffect(() => {
        if (!enabled) {
            return;
        }

        const scriptId = "elfsight-platform-script";

        // Script nur einmal laden
        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.src = "https://static.elfsight.com/platform/platform.js";
            script.async = true;
            script.id = scriptId;
            document.body.appendChild(script);
        }
    }, [enabled]);

    if (!enabled) {
        return (
            <div style={{ padding: "1rem", borderRadius: "12px", background: "rgba(255,255,255,0.08)", color: "#fff" }}>
                <p style={{ marginBottom: "0.75rem" }}>
                    Bewertungen und externe Widgets werden erst nach Ihrer Zustimmung zu optionalen Cookies geladen.
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
                    Externe Inhalte aktivieren
                </button>
            </div>
        );
    }

    return (
        <div
            className="elfsight-app-28b215c3-5040-4df7-b93c-365e5d8fd36d"
            data-elfsight-app-lazy
        />
    );
};

export default ElfsightWidget;
