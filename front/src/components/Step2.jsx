import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 
const Step2 = () => {
    return(
        <div>
            <h1>C'est le step 2</h1>
            <Link to="/step3">Suivant</Link>
        </div>
    );
}
   
export default Step2;