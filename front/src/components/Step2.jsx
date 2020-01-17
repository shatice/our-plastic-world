import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/***** COMPONENTS *****/
import Header from './Header.jsx';
 
const Step2 = () => {
    return(
        <div>
            <Header/>
            <h1>C'est le step 2</h1>
            <Link to="/step3">Suivant</Link>
        </div>
    );
}
   
export default Step2;