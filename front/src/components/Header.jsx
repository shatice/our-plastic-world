import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 
const Header = () => {
    return(
        <header>
            <nav className="navMenu">
                <ul className="navList">
                    <li className="navItem navItem--step1">
                        <Link to="/step1">
                            <svg className="navItem__icon navItem__icon--globe"><use xlinkHref="/sprite-sheet.svg#globeIcon" /></svg>
                            <p>Le monde</p>
                        </Link>
                    </li>
                    <li className="navItem navItem--step2">
                        <Link to="/step2">
                            <svg className="navItem__icon navItem__icon--waste"><use xlinkHref="/sprite-sheet.svg#wasteIcon" /></svg>
                            <p>Le monde</p>
                        </Link>
                    </li>
                    <li className="navItem navItem--step3">
                        <Link to="/step3">
                            <svg className="navItem__icon navItem__icon--recycle"><use xlinkHref="/sprite-sheet.svg#recycleIcon" /></svg>
                            <p>Le monde</p>
                        </Link></li>
                </ul>
            </nav>

            <nav className="navIcons">
                <ul className="navList">
                    <li className="navItem navItem--mode">
                        <svg className="navItem__icon navItem__icon--darkMode"><use xlinkHref="/sprite-sheet.svg#darkModeIcon" /></svg>
                    </li>
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