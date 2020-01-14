import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 
const Step1 = () => {
 
    return(
        <div>
            <h1>C'est le step 1</h1>
            <Link to="/step2">Suivant</Link>
        </div>
    );
}
   
export default Step1;