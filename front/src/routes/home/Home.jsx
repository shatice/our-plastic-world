import React, { useState }from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/* Styles */
import './home.scss';

/***** COMPONENTS *****/
import Header from '../../components/header/Header.jsx';
 
const Intro = () => {

    const [selected, setSelected] = React.useState( false );

    const handleClick = (e) => {
        
    }

    return(
      <section className="home">
        <Header/>
        <section className="home__content">
          <h1>Choose your language</h1>
          <ul>
            <Link to="/intro"><button className="cta">Français</button></Link>
            <Link to="/intro"><button className="cta">English</button></Link>
          </ul>
          <svg className="headphoneIcon"><use xlinkHref="/sprite-sheet.svg#headphoneIcon" /></svg>
        </section>
      </section>
    );
}
   
export default Intro;