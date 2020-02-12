import React from "react";
import '../scss/styles.scss';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/***** COMPONENTS *****/
import Header from './header/Header.jsx';
import Infos from './infos/Infos.jsx';
import Nav from './nav/Nav.jsx';
import Globe from './globe/Globe.jsx';
import Timeline from './timeline/Timeline.jsx';
 
const Main = () => {
 
  return(
    <div class="main">
      <Header/>
      <Infos/>
      <Globe/>
      <Nav/>
      <Timeline/>
    </div>
  );
}
   
export default Main;