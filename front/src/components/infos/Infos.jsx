import React, {} from "react";

/* STYLES */
import './infos.scss';

/***** COMPONENTS *****/
import Global from './components/Global.jsx';
import Continents from './components/Continents.jsx';
import Countries from './components/Countries.jsx';
import views from "../../models/views";

const Infos = ({ stateInfos, infosContent }) => {

  return (
    <div className="infos">
      { stateInfos === views.Continents ? <Continents/> : '' }
      { infosContent && stateInfos === views.Global ? <Global infosContent={infosContent}/> : '' }
      { stateInfos === views.Countries ? <Countries/> : '' }
    </div>
  );
}
   
export default Infos;