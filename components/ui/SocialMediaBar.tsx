import Image from "next/image";
import styles from "../../styles/socialMediaBar.module.css";



export default function SocialMediaBar() {
    return (
        <div className={styles.socialMediaBar}>
            <a href="https://www.facebook.com/profile.php?id=61571203033158" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/facebook.svg" alt="Facebook" width={50} height={50} />
            </a>
            <a href="https://de.linkedin.com/in/rp-schliesstechnik-bruchsal-38b0b9367" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={50} height={50} />
            </a>
            <a href="https://www.instagram.com/p/DO3KJsejvg3/" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/instagram.svg" alt="Instagram" width={50} height={50} />
            </a>
            <a href="https://wa.me/4917623687542?text=Hallo%2C%20ich%20habe%20eine%20Frage%20zu%20Ihren%20Schließanlagen" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={50} height={50} />
            </a>
        </div>
    );
}