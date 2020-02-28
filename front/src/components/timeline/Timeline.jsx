import React from "react";
import "../timeline/timeline.scss";
import API from "../../services/Api";

import Scrollbar from "../../components/timeline/Scrollbar";

const Timeline = ({ yearList, setInfosContent }) => {
  const $API = new API();

  const handleClick = a => {
    $API.getInfoByYear(a).then(res => {
      setInfosContent(res.data);
    });
  };

  return (
    <div className="timeline">
      <ul>
        {yearList.map(y => (
          <li key={y.year} onClick={() => handleClick(y.year)}>
            {y.year}
          </li>
        ))}
      </ul>
      <Scrollbar setInfosContent={setInfosContent} />
    </div>
  );
};

export default Timeline;
