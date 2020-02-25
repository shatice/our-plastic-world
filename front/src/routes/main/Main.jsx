import React, {useState} from "react";
import '../../scss/styles.scss';

/* Styles */
import './main.scss';

/***** COMPONENTS *****/
import Header from '../../components/header/Header.jsx';
import Infos from '../../components/infos/Infos.jsx';
import Nav from '../../components/nav/Nav.jsx';
import Globe from '../../components/globe/Globe.jsx';
import Timeline from '../../components/timeline/Timeline.jsx';
 
/* AXIOS */
import API from '../../services/Api'
const $API = new API

const Main = () => {
  const [stateInfos, setStateInfos] = useState({
    type: 'Global'
  });

  const [yearList, setYearList] = useState(null);
  const [infosContent, setInfosContent] = useState(null);

  if( !yearList ) {
    $API.getYears()
    .then((res)=>{
        setYearList(res.data);
      })
  }
  if( !infosContent) {
    $API.getInfoByYear(1980)
    .then((res)=>{
        setInfosContent(res.data);
      })
  }

  return(
    <div className="main">
      <Header/>
      <Infos stateInfos={stateInfos} infosContent={infosContent}/>
      <Globe/>
      <Nav setStateInfos={setStateInfos} />
      { setInfosContent && yearList ? <Timeline yearList={yearList} setInfosContent={setInfosContent}/> : ''}
    </div>
  );
}
   
export default Main;