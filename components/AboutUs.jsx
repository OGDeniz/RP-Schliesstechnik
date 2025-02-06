import styles from "@/styles/aboutus.module.css";
import homeStyles from "@/styles/home.module.css";
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className={styles.aboutus}>
    <section className={styles.aboutUsHeader}>
      <h1 className='text-center mb-4'>Über uns – RP Schließtechnik</h1>
      <p>
      Willkommen bei <strong>RP Schließtechnik</strong>, Ihrem zuverlässigen Partner für Schließsysteme und Sicherheitstechnik. Mit Leidenschaft für innovative Lösungen und einem klaren Fokus auf Qualität bieten wir Ihnen ein umfassendes Angebot rund um mechanische und digitale Schließtechnik.
      </p>
    </section>
  
    <section className={styles.whoWeAre}>
      <h2 className='text-center mb-3'>Wer wir sind</h2>
      <p>
      RP Schließtechnik steht für Kompetenz und Kundennähe. Als erfahrene Experten in der Branche sind wir stolz darauf, unseren Kunden hochwertige Produkte und maßgeschneiderte Dienstleistungen zu bieten. Ob Privatkunde, Gewerbe oder öffentliche Einrichtung – wir finden die perfekte Lösung für Ihre individuellen Anforderungen.
      </p>
    </section>
  <section className={homeStyles.container}>
    <section className={homeStyles.aboutUs}>
      <h2>Unser Anspruch</h2>
      <ul>
      <li>
        <strong>Hochwertige Produkte:</strong> Von klassischen Zylinderschlössern bis hin zu modernen elektronischen Schließsystemen.
      </li>
      <li>
        <strong>Zuverlässiger Service:</strong> Beratung, Installation und Wartung – alles aus einer Hand.
      </li>
      <li>
        <strong>Kundenzufriedenheit:</strong> Persönlicher Support und passgenaue Lösungen stehen bei uns an erster Stelle.
      </li>
      </ul>
    </section>
    </section>  


    <section className={homeStyles.container}>
    <section className={homeStyles.aboutUs}>
      <h2>Unsere Vision</h2>
      <p>
      Wir möchten, dass Sie sich jederzeit sicher fühlen – in Ihrem Zuhause, Ihrem Unternehmen oder unterwegs. Daher investieren wir kontinuierlich in neue Technologien und setzen auf nachhaltige, zukunftsorientierte Konzepte.
      </p>
    </section>
  
    <section className={styles.whyUs}>
      <h2>Warum RP Schließtechnik?</h2>
      <ul>
      <li>
        <strong>Erfahrung und Expertise:</strong> Langjährige Branchenerfahrung und ein Team von Profis.
      </li>
      <li>
        <strong>Individuelle Lösungen:</strong> Wir hören zu, analysieren und entwickeln maßgeschneiderte Schließsysteme.
      </li>
      <li>
        <strong>Zuverlässigkeit:</strong> Pünktlichkeit und Qualität sind für uns selbstverständlich.
      </li>
      </ul>
    </section>
    </section>
  
    <section className={styles.contactUs}>
      <p>
      Entscheiden Sie sich für RP Schließtechnik – und machen Sie keine Kompromisse, wenn es um Ihre Sicherheit geht.  
      <Link href="/kontakt" className='text-secondary font-weight-bold text-decoration-none'>
      <strong> Kontaktieren Sie uns</strong> 
      </Link>
      und lassen Sie sich von unseren Experten beraten. Gemeinsam schaffen wir die Grundlage für ein sicheres und geschütztes Umfeld.
      </p>
    </section>
    </div>
  );
  };
  
  export default AboutUs;