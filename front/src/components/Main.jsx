import React, {useEffect, useState} from "react";
import '../scss/styles.scss';

/* Styles */
import './main.scss';


/***** COMPONENTS *****/
import Header from './header/Header.jsx';
import Infos from './infos/Infos.jsx';
import Nav from './nav/Nav.jsx';
import Globe from './globe/Globe.jsx';
import Timeline from './timeline/Timeline.jsx';
 

const Main = () => {
  return(
    <div className="main">
      <Header/>
      <Infos/>
      <Globe/>
      <Nav/>
      <Timeline/>
    </div>
  );
}
   
export default Main;