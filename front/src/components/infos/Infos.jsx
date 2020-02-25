import React, {} from "react";
import './infos.scss';

/***** COMPONENTS *****/
import Global from './components/Global.jsx';
import Continents from './components/Continents.jsx';
import Countries from './components/Countries.jsx';
import views from "../../js/models/views.js";

const Infos = ({ stateInfos, infosContent, continentList }) => {
  return (
    <div className="infos">
      { infosContent && stateInfos === views.Global ? <Global infosContent={infosContent}/> : '' }
      { continentList && stateInfos === views.Continents ? <Continents continentList={continentList}/> : '' }
      { stateInfos === views.Countries ? <Countries/> : '' }
    </div>
  );
}
   
export default Infos;