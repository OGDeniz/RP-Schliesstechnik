import React from "react";
import Produktliste from "../../components/features/products/Produktliste";

export default function Produkte() {
    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Unsere Dienstleistungen</h1>
            <Produktliste />
        </div>
    );
}