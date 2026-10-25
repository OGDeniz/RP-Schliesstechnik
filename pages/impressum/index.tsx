import React from 'react';
import Head from 'next/head';
import ImpressumOut from '../../components/Impressum';

const Impressum = () => {
    return (
        <div className={'container mt-4'} style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }
        }>
            <Head>
                <title>Impressum | RP Schliesstechnik</title>
                <meta name="description" content="Impressum und Anbieterkennzeichnung von RP Schliesstechnik, Schwimmbadstraße 18, 76646 Bruchsal." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://schluesselrp.de/impressum/" />
            </Head>
            < ImpressumOut contactInfo={ImpressumOut} />
        </div>
    )
};

Impressum.displayName = 'Impressum';

export default Impressum;
