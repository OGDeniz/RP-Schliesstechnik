// components/features/products/Produktliste.jsx
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useRouter } from 'next/router';
import jsonDb from "@/components/data/produkte";
import Image from "next/image";
import styles from "@/styles/cards.module.css";
import modalStyles from "@/styles/modal.module.css";

export default function Produktliste() {
    const [showModal, setShowModal] = useState(false);
    const [selectedProdukt, setSelectedProdukt] = useState(null);
    const router = useRouter();

    const handleBuchen = (produkt) => {
        setSelectedProdukt(produkt);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedProdukt(null);
    };

    const handlePaymentSelection = (paymentMethod) => {
        switch(paymentMethod) {
            case 'paypal':
                router.push('/checkout/paypal');
                break;
            case 'sofort':
                router.push('/checkout/sofort');
                break;
            case 'rechnung':
                router.push('/checkout/rechnung');
                break;
        }
        handleClose();
    };

    return (
        <>
            <div className={styles.cards}>
                {jsonDb.produkte.map((produkt, index) => (
                    <div key={produkt.id || index} className={styles.cardWrapper}>
                        <div className={styles.card}>
                            <div className={styles.cardImageContainer}>
                                <Image
                                    src={produkt.bild}
                                    alt={produkt.name}
                                    width={300}
                                    height={200}
                                    className={styles.cardImage}
                                />
                            </div>
                            
                            <div className={styles.cardContent}>
                                <h2 className={styles.cardTitle}>{produkt.name}</h2>
                                <p className={styles.cardDescription}>{produkt.produktbeschreibung}</p>
                            </div>
                            
                            <div className={styles.cardActions}>
                                <span className={styles.cardPrice}>{produkt.preis} €</span>
                                <button 
                                    className={styles.cardButton}
                                    onClick={() => handleBuchen(produkt)}
                                >
                                    Jetzt buchen
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Modal 
                show={showModal} 
                onHide={handleClose}
                centered
            >
                <div className={modalStyles.modalContent}>
                    <div className={modalStyles.productInfo}>
                        <div className={modalStyles.productHeader}>
                            <span>Türöffnung</span>
                            <span>50 €</span>
                        </div>
                    </div>
                    
                    <div className={modalStyles.paymentOptions}>
                        <h4>Wählen Sie Ihre Zahlungsart:</h4>
                        <div className={modalStyles.paymentButtons}>
                            <button
                            className={`${modalStyles.paymentButton} ${modalStyles.paypal}`}
                            onClick={() => handlePaymentSelection('paypal')}
                            >
                            <Image
                                src="/svg/paypal.svg"
                                alt="PayPal Express Checkout"
                                width={50}
                                height={50}
                                className={modalStyles.paymentIcon}
                            />
                            </button>
                            <button
                            className={`${modalStyles.paymentButton} ${modalStyles.sofort}`}
                            onClick={() => handlePaymentSelection('sofort')}
                            >
                            <Image
                                src="/svg/sofort.svg"
                                alt="Sofort Überweisung"
                                width={50}
                                height={50}
                                className={modalStyles.paymentIcon}
                            />
                            </button>
                            <button
                            className={`${modalStyles.paymentButton} ${modalStyles.rechnung}`}
                            onClick={() => handlePaymentSelection('rechnung')}
                            >
                            <Image
                                src="/svg/rechnung.svg"
                                alt="Rechnung"
                                width={50}
                                height={50}
                                className={modalStyles.paymentIcon}
                            />
                            </button>
                            
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}