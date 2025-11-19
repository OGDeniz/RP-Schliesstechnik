import styles from "../../styles/navigation.module.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";
const Button = dynamic(() => import("react-bootstrap/Button"), { ssr: false });

const buttonData = [



    {
        id: 1,
        label: "Diensleistungen",
        handleClick: () => {
            window.location.href = "/produkte";
        },
        className: styles.button,
    },
    {
        id: 2,
        label: "Kontakt",
        handleClick: () => {
            window.location.href = "/contact";
        },
        className: styles.button,
    },
    {
        id: 3,
        label: "Impressum",
        handleClick: () => {
            window.location.href = "/impressum";
        },
        className: styles.button,
    },
];

export default buttonData;