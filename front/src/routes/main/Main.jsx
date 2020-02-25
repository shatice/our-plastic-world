import React, {useState} from "react";
import '../../scss/styles.scss';
import './main.scss';
import views from "../../js/models/views.js";
import API from '../../services/Api';

/***** COMPONENTS *****/
import Header from '../../components/header/Header.jsx';
import Infos from '../../components/infos/Infos.jsx';
import Nav from '../../components/nav/Nav.jsx';
import Globe from '../../components/globe/Globe.jsx';
import Timeline from '../../components/timeline/Timeline.jsx';

const Main = () => {
  const $API = new API();
  const [stateInfos, setStateInfos] = useState(views.Global);
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