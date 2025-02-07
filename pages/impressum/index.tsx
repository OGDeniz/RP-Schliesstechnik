import React from 'react';
import ImpressumOut from '../../components/Impressum';

const Impressum = () => {
    return (
        <div className={'container my-5'} style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }
        }>
            <h1 style={{ textAlign: 'center', marginBottom: 'mb-4' }}> Impressum </h1>
            < ImpressumOut contactInfo={ImpressumOut} />
        </div>
    )
};

Impressum.displayName = 'Impressum';

export default Impressum;
