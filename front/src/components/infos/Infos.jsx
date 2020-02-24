import React, {useState, useEffect} from "react";

/* AXIOS */
import axios from 'axios';
// import API from '../../services/Api'

// const $API = new API

// $API.getManageByDate(1980)
// .then((res)=>{

// })

/* STYLES */
import './infos.scss';

/***** COMPONENTS *****/
import Global from './components/Global.jsx';
import Continents from './components/Continents.jsx';
import Countries from './components/Countries.jsx';
import Oceans from './components/Oceans.jsx';

const Infos = ({ stateInfos }) => {
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

  return (
    <div className="infos">
      { stateInfos === 'Continents' ? <Continents/> : '' }
      { yearList && stateInfos === 'Global' ? <Global yearList={yearList}/> : '' }
      { stateInfos === 'Countries' ? <Countries/> : '' }
      { stateInfos === 'Oceans' ? <Oceans/> : '' }
    </div>
  );
}
   
export default Infos;