import React, {useState}from "react";
import axios from 'axios';

const Infos = ({ yearList }) => {

  const [selectedDate, setSelectedDate] = useState(null);

  if(!selectedDate) {
    axios.all([axios.get('http://127.0.0.1:8000/global/manage/1980'), axios.get('http://127.0.0.1:8000/global/production/1980')])
    .then(axios.spread((...res) => {
      let obj = res[0].data;
      obj.production = res[1].data.production
      setSelectedDate(obj)
    }))
  }

  const handleClick = (a) => {
    axios.all([axios.get('http://127.0.0.1:8000/global/manage/' + a), axios.get('http://127.0.0.1:8000/global/production/' + a)])
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
    <div className="timeline">
      <ul className="timelinetest">
        {listYears}
      </ul>
    </div>
  );
}
   
export default Infos;