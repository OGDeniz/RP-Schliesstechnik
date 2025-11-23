import React from 'react';
import ImpressumOut from '../../components/Impressum';

const Impressum = ({ contactInfo }) => {
    return (
        <div className={'container mt-4'} style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }
        }>
            <ImpressumOut contactInfo={contactInfo} />
        </div>
    )
};

Impressum.displayName = 'Impressum';

export async function getServerSideProps() {
    const contactInfo = {
        name: "Robin Prijs",
        address: "Schwimmbadstr. 19, 76646 Bruchsal",
        phone: "+49 176 236 875 42",
        email: "info@schluesselrp.de",
        website: "https://www.schluesselrp.de" + "http://www.schluesselrp.com",
        ustId: "USt-IdNr.: DE143080672",
        odrLink: "https://ec.europa.eu/consumers/odr"
    };

    return {
        props: {
            contactInfo
        }
    };
}

export default Impressum;
