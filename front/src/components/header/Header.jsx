import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 
const Header = () => {
    return(
      <header>
        <nav class="navIcons">
          <ul class="navList">
            <li class="navItem navItem--lang">
              <svg class="navItem__icon navItem__icon--langFr"><use xlinkHref="/sprite-sheet.svg#langFrIcon" /></svg>
            </li>
            <li class="navItem navItem--audio">
              <svg class="navItem__icon navItem__icon--audioOff"><use xlinkHref="/sprite-sheet.svg#audioOffIcon" /></svg>
            </li>
            <li class="navItem navItem--turnOff">
              <Link to="/">
                <svg class="navItem__icon navItem__icon--turnOff"><use xlinkHref="/sprite-sheet.svg#turnOffIcon" /></svg>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}
   
export default Header;