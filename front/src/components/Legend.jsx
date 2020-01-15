import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/***** COMPONENTS *****/
import Svg from './Svg.jsx';
 
const Legend = () => {
    return(
        <legend>
            <ul class="legendContent">
                <Svg/>
                <li class="legendItem">
                    <i class="legendItem__icon"></i>
                    <p class="legendItem__text">Défile à travers les années et découvre son évolution</p>
                </li>
            </ul>
        </legend>
    );
}
   
export default Legend;