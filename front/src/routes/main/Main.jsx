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
  const [stateInfos, setStateInfos] = useState({
    type: 'Global'
  });

  const [yearList, setYearList] = useState(null);

  return(
    <div className="main">
      <Header/>
      <Infos stateInfos={stateInfos}/>
      <Globe/>
      <Nav setStateInfos={setStateInfos} />
      <Timeline yearList={yearList} setYearList={setYearList}/>
    </div>
  );
}
   
export default Main;