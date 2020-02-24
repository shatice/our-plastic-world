import React, {useState} from "react";

/* Style */
import '../infos.scss';

/* Axios */
import axios from 'axios';

/* Translation */
import { useTranslation } from 'react-i18next';

/* AXIOS */
// import API from '../../services/Api'
// const $API = new API
// $API.getManageByDate(1980)
// .then((res)=>{
// })

const Global = ({ yearList }) => {
  const { t } = useTranslation();
  let eiffelWeight = 7300; 
  const [selectedDate, setSelectedDate] = useState(null);

  if(!selectedDate) {
    axios.all([axios.get(process.env.REACT_APP_API_URL + '/global/manage/1980'), 
    axios.get(process.env.REACT_APP_API_URL + '/global/production/1980')])
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

  return (
    <div>
      <section className="infos__bloc infos__bloc--production">
        <ul>
          <li>
            <span className="data">{selectedDate ? selectedDate.production : ''}</span> {t('global.data-prod-mesure')}
            <p>{t('global.data-prod-desc')}</p>
          </li>
          <li><strong>3x</strong> {t('global.data-prod-calcul-1')} 1980</li>
          <li><strong>7x</strong> {t('global.data-prod-calcul-2')}</li>
        </ul>
      </section>
      <section className="infos__bloc infos__bloc--management">
        <ul>
          <li><span className="data">{selectedDate ? selectedDate.recycled : ''}%</span> {t('global.data-recycled-desc')}</li>
          {/* <li><span className="data">{selectedDate ? selectedDate.incinerated : ''}</span> incinérés</li> */}
          <li><span className="data">{selectedDate ? selectedDate.discarded : ''}%</span> {t('global.data-discarded-desc')}</li>
          <li>
            <p>{t('global.equivalence-intro')}</p>
            <p className="data">{selectedDate ? ((selectedDate.production * (selectedDate.discarded / 100)) / eiffelWeight) : ''}</p>
            <p>{t('global.equivalence-desc')}</p>
          </li>
        </ul>
      </section>
      <ul className="timelinetest">
        { yearList.map(y => <li key={y.id} onClick={() => handleClick(y.year)}>{y.year}</li> )}
      </ul>
    </div>
  );
}
   
export default Global;