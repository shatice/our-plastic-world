import React from "react";

/***** STYLE *****/
import "../timeline/timeline.scss";

/***** COMPONENT(S) *****/
import Scrollbar from "../../components/timeline/Scrollbar";

const Timeline = ({ setInfosContent }) => {
  return (
    <div className="timeline">
      <Scrollbar setInfosContent={setInfosContent} />
    </div>
  );
};

export default Timeline;
