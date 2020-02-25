import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

/* Styles */
import './header.scss';



const Header = () => {


  const [isShow, setIsShow] = useState(false);
  

  const [ menuActive, setMenuState ] = useState(false);

  const { t, i18n } = useTranslation();
  
  function changeLanguage(lang){
    i18n.changeLanguage(lang);
  }


    return(
      <header className="header">
        <nav className="navIcons">
          <ul className="navList">
            <div className="nav__language">
              <li onClick={() => {setMenuState(!menuActive) ; changeLanguage('en')}} className={`navItem navItem--lang ${menuActive ? "show" : "hidden"}`}>EN</li>
              <span className="navItem line"></span>
              <li onClick={() => {setMenuState(!menuActive) ; changeLanguage('fr')}} className={`navItem navItem--lang ${menuActive ? "hidden" : "show"}`}>FR</li>
            </div>
            <li className="navItem navItem--audio">
              <svg className="navItem__icon navItem__icon--audioOff"><use xlinkHref="/sprite-sheet.svg#audioOffIcon" /></svg>
            </li>
            <li className="navItem navItem--turnOff">
              <Link to="/">
                <svg className="navItem__icon navItem__icon--turnOff"><use xlinkHref="/sprite-sheet.svg#turnOffIcon" /></svg>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}
export default Header;
