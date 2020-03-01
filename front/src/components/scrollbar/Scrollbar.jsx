import React from "react";

/***** STYLE *****/
import "./scrollbar.scss";

/***** COMPONENT(S) *****/
import Timeline from "./components/Timeline";

const Scrollbar = ({ setInfosContent }) => {
  return (
    <div className="scrollbar">
      <Timeline setInfosContent={setInfosContent} />
    </div>
  );
};

export default Scrollbar;
