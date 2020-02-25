import React, {} from "react";

/* STYLES */
import './infos.scss';

/***** COMPONENTS *****/
import Global from './components/Global.jsx';
import Continents from './components/Continents.jsx';
import Countries from './components/Countries.jsx';

const Infos = ({ stateInfos, infosContent }) => {

  return (
    <div className="infos">
      { stateInfos === 'Continents' ? <Continents/> : '' }
      { infosContent && stateInfos === 'Global' ? <Global infosContent={infosContent}/> : '' }
      { stateInfos === 'Countries' ? <Countries/> : '' }
    </div>
  );
}
   
export default Infos;