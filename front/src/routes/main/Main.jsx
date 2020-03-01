import React, { useState } from "react";
import "../../scss/styles.scss";
import "./main.scss";
import views from "../../js/models/views.js";
import API from "../../services/Api";

/***** COMPONENTS *****/
import Header from '../../components/header/Header';
import Infos from '../../components/infos/Infos';
import Nav from '../../components/nav/Nav';
import Globe from '../../components/globe/Globe';
import Scrollbar from '../../components/scrollbar/Scrollbar';
import About from '../../components/about/About';
import Goabout from '../../components/goabout/Goabout';

const Main = () => {
  const $API = new API();
  const [stateInfos, setStateInfos] = useState(views.Global);
  const [yearList, setYearList] = useState(null);
  const [infosContent, setInfosContent] = useState(null);
  const [continentList, setContinentList] = useState(null);
  const [isDisplayAbout, setIsDisplayAbout] = useState(false);
  const [countryList, setCountryList] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [color, setColor] = useState("");
  const [globalInfo, setGlobalInfo] = useState();

  if (!yearList) {
    $API.getYears().then(res => {
      setYearList(res.data);
    });
  }
  if (!infosContent) {
    $API.getInfoByYear(1980).then(res => {
      setInfosContent(res.data);
    });
  }

  if (!continentList) {
    $API.getContinentsInfos().then(res => {
      setContinentList(res.data);
    });
  }

  if (!countryList) {
    $API.getCountriesInfos().then(res => {
      setCountryList(res.data);
    });
  }

  if (!globalInfo) {
    $API.getGlobalInfos().then(res => {
      setGlobalInfo(res.data);
    });
  }

  return(
    <div className="main">
    <Goabout isDisplayAbout={isDisplayAbout} setIsDisplayAbout={setIsDisplayAbout}/>
      {isDisplayAbout && <About />}
      <Header />
      <Infos
        stateInfos={stateInfos}
        infosContent={infosContent}
        continentList={continentList}
        countryList={countryList}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        color={color}
        globalInfo={globalInfo}
      />
      {countryList ? (
        <Globe
          countryList={countryList}
          setSelectedCountry={setSelectedCountry}
          stateInfos={stateInfos}
          continentList={continentList}
          setSearchTerm={setSearchTerm}
          setColor={setColor}
          globalInfo={globalInfo}
        />
      ) : (
        ""
      )}
      <Nav setStateInfos={setStateInfos} />
      {setInfosContent && yearList && stateInfos === views.Global ? (
        <Scrollbar yearList={yearList} setInfosContent={setInfosContent} stateInfos={stateInfos}/>
      ) : (
        ""
      )}
    </div>
  );
};

export default Main;
