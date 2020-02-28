import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../scss/styles.scss";
import "./main.scss";
import views from "../../js/models/views.js";
import API from "../../services/Api";

/***** COMPONENTS *****/
import Header from '../../components/header/Header.jsx';
import Infos from '../../components/infos/Infos.jsx';
import Nav from '../../components/nav/Nav.jsx';
import Globe from '../../components/globe/Globe.jsx';
import Timeline from '../../components/timeline/Timeline.jsx';
import About from '../../components/about/About.jsx';
import Goabout from '../../components/goabout/Goabout.jsx';

const Main = () => {
  const { t } = useTranslation();
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
      />
      {countryList ? (
        <Globe
          countryList={countryList}
          setSelectedCountry={setSelectedCountry}
          stateInfos={stateInfos}
          continentList={continentList}
          setSearchTerm={setSearchTerm}
          setColor={setColor}
        />
      ) : (
        ""
      )}
      <Nav setStateInfos={setStateInfos} />
      {setInfosContent && yearList ? (
        <Timeline yearList={yearList} setInfosContent={setInfosContent} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Main;
