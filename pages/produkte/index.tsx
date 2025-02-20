import React from "react";
import Produktliste from "../../components/features/products/Produktliste";
import styles from "../../styles/produktseite.module.css";

export default function Produkte() {
    return (
        <div className="container my-5">
            <h1 className={styles.container}></h1>
            <Produktliste />
        </div>
    );
}