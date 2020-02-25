import React, {} from "react";
import '../timeline/timeline.scss'; 

/* Axios */
import API from '../../services/Api'
const $API = new API


const Timeline = ({ yearList, setInfosContent }) => {

  const handleClick = (a) => {
    console.log(a);

     $API.getInfoByYear(a)
     .then((res)=>{ 
       console.log('res', res)
        setInfosContent(res.data)
      })
  }

  return (
    <div className="timeline">
        <ul>
        { yearList.map(y => <li key={y.year} onClick={() => handleClick(y.year)}>{y.year}</li> )}
      </ul>
    </div>
  );
}
   
export default Timeline;