import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/***** COMPONENTS *****/
 
const Legend = () => {
    return(
        <legend>
            <ul class="legendContent">
                <svg class="crossIcon"><use xlinkHref="/sprite-sheet.svg#crossIcon" /></svg>
                <li class="legendItem">
                    <i class="legendItem__icon"></i>
                    <p class="legendItem__text">Défile à travers les années et découvre son évolution</p>
                </li>
            </ul>
        </legend>
    );
}
   
export default Legend;