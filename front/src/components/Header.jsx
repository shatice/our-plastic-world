import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 
const Header = () => {
    return(
        <header>
            <nav class="navMenu">
                <ul class="navList">
                    <li class="navItem navItem--step1"><Link to="/step1"></Link></li>
                    <li class="navItem navItem--step2"><Link to="/step2"></Link></li>
                    <li class="navItem navItem--step3"><Link to="/step3"></Link></li>
                </ul>
            </nav>

            <nav class="navIcons">
                <ul class="navList">
                    <li class="navItem navItem--mode"></li>
                    <li class="navItem navItem--lang"></li>
                    <li class="navItem navItem--audio"></li>
                    <li class="navItem navItem--turnOff"><Link to="/"></Link></li>
                </ul>
            </nav>
        </header>
    );
}
   
export default Header;