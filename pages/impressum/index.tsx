import React from 'react';
import ImpressumOut from '../../components/Impressum';

const Impressum = () => {
    return (
        <div className={'container mt-4'} style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }
        }>
            < ImpressumOut contactInfo={ImpressumOut} />
        </div>
    )
};

Impressum.displayName = 'Impressum';

export default Impressum;
