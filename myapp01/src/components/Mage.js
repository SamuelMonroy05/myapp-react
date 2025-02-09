import React from 'react';
import { useTranslation } from 'react-i18next'; 

const Mage = () => {
    const { t } =  useTranslation();

    return (
        <div> 
            <img src={t('Mage')} alt="Magen"/>
        </div>
    );

};

export default Mage;