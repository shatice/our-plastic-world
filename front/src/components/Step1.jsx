import React from "react";
import axios from 'axios';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/***** COMPONENTS *****/
import Header from './Header.jsx';
import Globe from './Globe.jsx';
import Infos from './Infos.jsx';
import Legend from './Legend.jsx';
import Footer from './Footer.jsx';
 
const Step1 = () => {
 
    return(
        <div className="step1">
            <Header/>
            <Infos/>
            <Globe/>
            <Legend/>
            <Footer/>
        </div>
    );
}
   
export default Step1;