import React from 'react';
import styles from '../../styles/stickyCallButton.module.css';
import { FaPhone } from 'react-icons/fa';

const StickyCallButton: React.FC = () => {
    const handleCall = () => {
        window.location.href = 'tel:+4917623687542';
    };

    return (
        <button
            className={styles.stickyCallButton}
            onClick={handleCall}
            aria-label="Jetzt anrufen: +49 176 236 875 42"
            title="Jetzt anrufen"
        >
            <FaPhone className={styles.phoneIcon} />
        </button>
    );
};

export default StickyCallButton;