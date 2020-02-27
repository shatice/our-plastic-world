import React, {} from "react";
import { Link } from "react-router-dom";
import './intro.scss';
import { useTranslation } from 'react-i18next';

/***** COMPONENTS *****/
import Header from '../../components/header/Header.jsx';
import Globe from '../../components/globe/Globe.jsx';
 
const Intro = () => {
    const { t } = useTranslation();

    return(
        <div className="intro">
            <Header/>
            <section className="intro__content">
                <h1>Our Plastic World</h1>
                <div className="content">
                    <p>{t('intro.1')}</p>
                    <p>{t('intro.2')}</p>
                    <p>{t('intro.3')}</p>
                </div>
                <Link to="/main"><button className="cta">{t('intro.cta')}</button></Link>
            </section>
            <Globe/>
        </div>
    );
}
   
export default Intro;