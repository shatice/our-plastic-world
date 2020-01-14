import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 
const Home = () => {
    return(
        <div class="homeIntro">
            <p>Les matières plastiques sont des ressources solides, durables et renouvelables. Pourtant leurs déchets représent  X% de la pollution mondiale....Découvre blablablablablablabla : </p>
            <Link to="/step1"><button>C'est parti</button></Link>
        </div>
    );
}
   
export default Home;