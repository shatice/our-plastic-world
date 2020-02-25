import React, {} from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './intro.scss';

/***** COMPONENTS *****/
import Header from '../../components/header/Header.jsx';
import Globe from '../../components/globe/Globe.jsx';
 
const Intro = () => {
    const { t } = useTranslation();

    return(
        <div className="intro">
            <Header/>
            <section className="intro__content">
                {t('Bonjour.1')}
                <h1>Our Plastic World</h1>
                <p>La production de matières plastiques ne cesse d’augmenter depuis 1950, elle fait partie de notre quotidien. Le plastique est solide et recyclable, pourtant il représente X% de la pollution mondiale...</p>
                <Link to="/main"><button className="cta">C'est parti</button></Link>
            </section>
            <Globe/>
        </div>
    );
}
   
export default Intro;