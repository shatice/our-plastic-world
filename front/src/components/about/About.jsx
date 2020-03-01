import React from "react";
import './about.scss';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return(
        <div className="background__about">
            <div className="about">
                <h2 className="second__title">{t('about.about-title')}</h2>
                <h3 className="third__title">{t('about.about-subtitle')}</h3>
                <p className="first__text">{t('about.about-desc')}</p>
                <div className="container__four--one">
                    <div className="one__text">
                        <h4 className="four__title">{t('about.evol-title')}</h4>
                        <p>{t('about.evol-content-1')}</p>
                        <p>{t('about.evol-content-2')}</p>
                        <p>{t('about.evol-content-3')}</p>
                    </div>
                    <div className="one__text">
                        <h4 className="four__title">{t('about.repartition-title')}</h4>
                        <p>{t('about.repartition-content-1')}</p>
                        <p>{t('about.repartition-content-2')}</p>
                    </div>
                </div>
                <div className="container__four--one">
                    <div className="one__text">
                        <h4 className="four__title">{t('about.consequences-title')}</h4>
                        <p>{t('about.consequences-content-1')}</p>
                        <p>{t('about.consequences-content-2')}</p>
                        <p>{t('about.consequences-content-3')}</p>
                    </div>
                    <div className="one__text">
                        <h4 className="four__title">{t('about.responsability-title')}</h4>
                        <p>{t('about.responsability-content-1')}</p>
                        <p>{t('about.responsability-content-2')}</p>
                    </div>
                </div>
                <h2 className="second__title">{t('about.sources-title')}</h2>
                {t('about.sources-content')}
            </div>
        </div>
        

    )
}
export default About;