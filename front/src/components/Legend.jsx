import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/***** COMPONENTS *****/
 
const Legend = () => {
    return(
        <legend>
            <ul className="legendContent">
                <svg className="crossIcon"><use xlinkHref="/sprite-sheet.svg#crossIcon" /></svg>
                <li className="legendItem">
                    <i className="legendItem__icon"></i>
                    <p className="legendItem__text">Défile à travers les années et découvre son évolution</p>
                </li>
            </ul>
        </legend>
    );
}
   
export default Legend;