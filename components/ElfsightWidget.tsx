import { useEffect } from "react";

const ElfsightWidget = () => {
    useEffect(() => {
        const scriptId = "elfsight-platform-script";

        // Script nur einmal laden
        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.src = "https://static.elfsight.com/platform/platform.js";
            script.async = true;
            script.id = scriptId;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div
            className="elfsight-app-28b215c3-5040-4df7-b93c-365e5d8fd36d"
            data-elfsight-app-lazy
        />
    );
};

export default ElfsightWidget;