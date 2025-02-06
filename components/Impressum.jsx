import React from 'react';
import Link from 'next/link';

const ImpressumOut = ({ contactInfo }) => {
    return (
        <div className="container mt-4" style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Impressum</h1>

            <section>
                <h2>Angaben gemäß § 5 TMG</h2>
                <p>{contactInfo?.address}</p>
            </section>

            <section>
                <h2>Kontakt</h2>
                <p>
                    Telefon: {contactInfo?.phone}<br />
                    E-Mail: <a href={`mailto:${contactInfo?.email}`}>{contactInfo?.email}</a><br />
                    Website: <a href={contactInfo?.website} target="_blank" rel="noopener noreferrer">
                    {contactInfo?.website.replace('https://', '').replace('www.', '')}
                </a>
                </p>
            </section>

            <section>
                <h2>Umsatzsteuer-ID</h2>
                <p>
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: {contactInfo?.ustId}
                </p>
            </section>

            <section>
                <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p>
                    {contactInfo?.name}<br />
                    {contactInfo?.address}
                </p>
            </section>

            <section>
                <h2>Streitschlichtung</h2>
                <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href={contactInfo?.odrLink} target="_blank" rel="noopener noreferrer">
                    {contactInfo?.odrLink}
                </a>.<br />
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.<br />
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
            </section>

            <section>
                <h2>Haftungsausschluss (Disclaimer)</h2>

                <h3>Haftung für Inhalte</h3>
                <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>

                <h3>Haftung für Links</h3>
                <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>

                <h3>Urheberrecht</h3>
                <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
            </section>
        </div>
    );
};

export async function getServerSideProps() {
    const contactInfo = {
        name: "Robin Prijs",
        address: "Schwimmbadstr. 18, 76646 Bruchsal",
        phone: "+49 176 236 875 42",
        email: "info@schluesselrp.de",
        website: "https://www.schluesselrp.de",
        ustId: "USt-IdNr. wird nachgereicht",
        odrLink: "https://ec.europa.eu/consumers/odr"
    };

    return {
        props: {
            contactInfo
        }
    };
}

export default ImpressumOut;