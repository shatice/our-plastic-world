import React, {}from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './home.scss';

/***** COMPONENTS *****/
import Header from '../../components/header/Header.jsx';
 
const Intro = () => {


    // Transalation (fr, en)
    const { t, i18n } = useTranslation();
    function changeLanguage(lang){
      i18n.changeLanguage(lang);
    }

    return(
      <section className="home">
        <Header/>
        <section className="home__content">
          <h1>Choose your language</h1>
          <ul>
            <Link to="/intro"><button onClick={() => changeLanguage('fr')} className="cta">Français</button></Link>
            <Link to="/intro"><button onClick={() => changeLanguage('en')} className="cta">English</button></Link>
          </ul>
          <svg className="headphoneIcon"><use xlinkHref="/sprite-sheet.svg#headphoneIcon" /></svg>
        </section>
      </section>
    );
}
   
export default Intro;