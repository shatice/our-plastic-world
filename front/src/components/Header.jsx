import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 
const Header = () => {
    return(
        <header>
            <nav class="navMenu">
                <ul class="navList">
                    <li class="navItem navItem--step1">
                        <Link to="/step1">
                            <svg class="navItem__icon navItem__icon--globe"><use xlinkHref="/sprite-sheet.svg#globeIcon" /></svg>
                            <p>Le monde</p>
                        </Link>
                    </li>
                    <li class="navItem navItem--step2">
                        <Link to="/step2">
                            <svg class="navItem__icon navItem__icon--waste"><use xlinkHref="/sprite-sheet.svg#wasteIcon" /></svg>
                            <p>Le monde</p>
                        </Link>
                    </li>
                    <li class="navItem navItem--step3">
                        <Link to="/step3">
                            <svg class="navItem__icon navItem__icon--recycle"><use xlinkHref="/sprite-sheet.svg#recycleIcon" /></svg>
                            <p>Le monde</p>
                        </Link></li>
                </ul>
            </nav>

            <nav class="navIcons">
                <ul class="navList">
                    <li class="navItem navItem--mode">
                        <svg class="navItem__icon navItem__icon--darkMode"><use xlinkHref="/sprite-sheet.svg#darkModeIcon" /></svg>
                    </li>
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