import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/***** COMPONENTS *****/
import Header from './Header.jsx';
 
const Test = () => {
    return(
        <div>
            <Header/>
            <h1>C'est le step 3</h1>
            <Link to="/">Accueil</Link>
        </div>
    );
}
   
export default Test;
