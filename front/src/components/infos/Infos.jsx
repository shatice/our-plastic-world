import React from "react";
import "./infos.scss";

/***** COMPONENTS *****/
import Global from "./components/Global.jsx";
import Continents from "./components/Continents.jsx";
import Countries from "./components/Countries.jsx";
import views from "../../js/models/views.js";

const Infos = ({
  stateInfos,
  infosContent,
  setSelectedCountry,
  continentList,
  countryList,
  selectedCountry,
  searchTerm,
  setSearchTerm,
  color, 
  globalInfo
}) => {
  return (
    <div className="infos">
      {infosContent && stateInfos === views.Global ? (
        <Global infosContent={infosContent} globalInfo={globalInfo}/>
      ) : (
        ""
      )}
      {continentList && stateInfos === views.Continents ? (
        <Continents continentList={continentList} />
      ) : (
        ""
      )}
      {countryList && stateInfos === views.Countries ? (
        <Countries
          countryList={countryList}
          setSelectedCountry={setSelectedCountry}
          selectedCountry={selectedCountry}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          color={color}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Infos;
