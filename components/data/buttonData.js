import styles from "@/styles/navigation.module.css";
const buttonData = [
    {
        id: 1,
        label: "Hotline",
        handleClick: () => {
            window.location.href = "tel:+4917623687542";
        },
        className: styles.hotButton,
    },
    {
        id: 2,
        label: "Diensleistungen",
        handleClick: () => {
            window.location.href = "/produkte";
        },
        className: styles.normalButton,
    },
    {
        id: 3,
        label: "Kontakt",
        handleClick: () => {
            window.location.href = "/contact";
        },
        className: styles.normalButton,
    },
    {
        id: 4,
        label: "Impressum",
        handleClick: () => {
            window.location.href = "/impressum";
        },
        className: styles.normalButton,
    },
];

export default buttonData;