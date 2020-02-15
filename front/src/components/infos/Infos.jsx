import React, {useState} from "react";

/* AXIOS */
import axios from 'axios';

/* STYLES */
import './infos.scss';

/***** COMPONENTS *****/
// import Continents from './components/Continents.jsx';
// import Countries from './components/Countries.jsx';
// import Global from './components/Global.jsx';
// import Oceans from './components/Oceans.jsx';

const Infos = ({ yearList }) => {

  const [selectedDate, setSelectedDate] = useState(null);

  if(!selectedDate) {
    axios.all([axios.get(process.env.REACT_APP_API_URL + '/global/manage/1980'), axios.get(process.env.REACT_APP_API_URL + '/global/production/1980')])
    .then(axios.spread((...res) => {
      let obj = res[0].data;
      obj.production = res[1].data.production
      setSelectedDate(obj)
    }))
  }

  const handleClick = (a) => {
    axios.all([axios.get(process.env.REACT_APP_API_URL + '/global/manage/' + a), axios.get(process.env.REACT_APP_API_URL + '/global/production/' + a)])
    .then(axios.spread((...res) => {
      let obj = res[0].data;
      obj.production = res[1].data.production
      setSelectedDate(obj)
    }))
  }

  const listYears = yearList.map((date) => 
    <li key={date.id} onClick={() => handleClick(date.year)}>{date.year}</li>
  );

  return (
    <div className="infos">
      <section className="infos__bloc infos__bloc--production">
        <h2>PRODUCTION MONDIALE DE PLASTIQUE</h2>
        <ul>
          <li className="data">{selectedDate ? selectedDate.production : ''} M. de Tonnes</li>
          <li><strong>3x</strong> plus qu’en <strong>1980</strong></li>
          <li><strong>7x</strong> plus que <strong>l’année précédente</strong></li>
        </ul>
      </section>
      <section className="infos__bloc infos__bloc--management">
        <h2>GESTION DES DÉCHETS PLASTIQUES</h2>
        <ul>
          <li>
            <p>Recyclés</p>
            <p className="data">{selectedDate ? selectedDate.recycled : ''}</p>
          </li>
          <li>
            <p>Incinérés</p>
            <p className="data">{selectedDate ? selectedDate.incinerated : ''}</p>
          </li>
          <li>
            <p>Dans la nature</p>
            <p className="data">{selectedDate ? selectedDate.discarded : ''}</p>
          </li>
          <li>
            <p>Soit l’équivalent de</p>
            <p className="data">{selectedDate ? ((selectedDate.production * (selectedDate.discarded / 100)) / 150) : ''}</p>
            <strong>baleines bleues,</strong>
            <p>l'animal le plus lourd du monde</p>
          </li>
        </ul>
      </section>
      <ul className="timelinetest">
        {listYears}
      </ul>
    </div>
  );
}
   
export default Infos;