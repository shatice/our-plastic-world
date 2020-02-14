import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/* Styles */
import './header.scss';
 
const Header = () => {
    return(
      <header>
        <nav className="navIcons">
          <ul className="navList">
            <li className="navItem navItem--lang">
              <svg className="navItem__icon navItem__icon--langFr"><use xlinkHref="/sprite-sheet.svg#langFrIcon" /></svg>
            </li>
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