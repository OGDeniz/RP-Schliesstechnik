import React, { useState } from 'react';
import styles from '../../styles/accordion.module.css';

interface AccordionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.accordionItem}>
            <button
                className={`${styles.accordionHeader} ${isOpen ? styles.active : ''}`}
                onClick={toggleAccordion}
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
            >
                <span className={styles.accordionTitle}>{title}</span>
                <span className={`${styles.accordionIcon} ${isOpen ? styles.rotated : ''}`}>
                    ▼
                </span>
            </button>
            <div
                className={`${styles.accordionContent} ${isOpen ? styles.open : ''}`}
                id={`accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
                aria-hidden={!isOpen}
            >
                <div className={styles.accordionBody}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Accordion;