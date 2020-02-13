import React, {useEffect, useState} from "react";
import '../scss/styles.scss';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';


/***** COMPONENTS *****/
import Header from './header/Header.jsx';
import Infos from './infos/Infos.jsx';
import Nav from './nav/Nav.jsx';
import Globe from './globe/Globe.jsx';
import Timeline from './timeline/Timeline.jsx';
 

const Main = () => {

const [yearList, setYearList] = useState(null);

  const fetchDatas = () => {
    if (!yearList) {
      axios.get('http://127.0.0.1:8000/global/manage')
      .then(response =>
        setYearList(response.data));
    }
  }

  useEffect(() => {
    fetchDatas()
  }, [])
 
  return(
    <div className="main">
      <Header/>
      { yearList ? <Infos yearList={yearList}/> : ''}
      <Globe/>
      <Nav/>
      { yearList ? <Timeline yearList={yearList}/> : ''}
    </div>
  );
}
   
export default Main;