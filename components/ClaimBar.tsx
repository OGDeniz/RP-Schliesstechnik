// components/Claimbar.tsx
import React from 'react';
import styles from '../styles/claimbar.module.css';

const Claimbar: React.FC = () => {
    return (
        <div className={styles.claimbar}>
            <div className={styles.text}>
                Ihr 24h-Schlüsselnotdienst und Schlüsseldienst in Bruchsal – RP Schließtechnik bietet schnelle Türöffnung, Notöffnung, Schlosswechsel & Einbruchschutz – Ihr regionaler Ansprechpartner für Notdienst bei zugefallenen oder verschlossenen Türen.
            </div>

        </div>
    );
};

export default Claimbar;
