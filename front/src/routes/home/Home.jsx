import React, {}from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './home.scss';

/***** COMPONENTS *****/
import Header from '../../components/header/Header.jsx';
 
const Intro = () => {
    const { i18n } = useTranslation();
    const [selectLanguage, setSelectLanguage] = React.useState(false);
    const toggle = () => setSelectLanguage(!selectLanguage);

    function changeLanguage(lang){
      i18n.changeLanguage(lang);
    }

    return(
      <section className="home">
        <Header setSelectLanguage={setSelectLanguage} selectLanguage={selectLanguage}/>
        <section className="home__content">
          <h1>Choose your language</h1>
          <ul>
            <Link to="/intro"><button onClick={() => {setSelectLanguage(toggle) ; changeLanguage('fr')}} className="cta">Français</button></Link>
            <Link to="/intro"><button onClick={() => {setSelectLanguage(toggle) ; changeLanguage('en')}} className="cta">English</button></Link>
          </ul>
          <svg className="headphoneIcon"><use xlinkHref="/sprite-sheet.svg#headphoneIcon" /></svg>
        </section>
      </section>
    );
}
   
export default Intro;