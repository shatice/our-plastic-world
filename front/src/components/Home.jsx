import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 
const Home = () => {
    return(
        <div>
            <h1>HELLO</h1>
            <Link to="/step1">Suivant</Link>
        </div>
    );
}
   
export default Home;