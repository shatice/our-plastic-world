import React, {useEffect, useState} from "react";
import '../../scss/styles.scss';

/* Styles */
import './main.scss';

/***** COMPONENTS *****/
import Header from '../../components/header/Header.jsx';
import Infos from '../../components/infos/Infos.jsx';
import Nav from '../../components/nav/Nav.jsx';
import Globe from '../../components/globe/Globe.jsx';
import Timeline from '../../components/timeline/Timeline.jsx';
 

const Main = () => {
  return(
    <div className="main">
      <Header/>
      <Infos/> 
      {/* <Globe/> */}
      <Nav/>
      {/* <Timeline/> */}
    </div>
  );
}
   
export default Main;