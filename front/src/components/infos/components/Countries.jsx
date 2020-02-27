import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import API from "../../../services/Api";

/***** COMPONENTS *****/
import Search from "./search/Search.jsx";

const Countries = ({ setStateInfos }) => {
  const { t } = useTranslation();
  const $API = new API();

  const [countryList, setCountryList] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  if (!countryList) {
    $API.getCountriesInfos().then(res => {
      setCountryList(res.data);
      setSelectedCountry(res.data[0]);
      console.log("cList", res.data);
    });
  }

  return (
    <>
      {selectedCountry ? (
        <section className="infos__bloc infos__bloc--countries">
          <h2 className="countries__title">
            <p>{t("current-year")}</p>
            <p>{t("countries.title")}</p>
          </h2>
          <div className="input__infos">
            <Search />
            <i>{t("countries.detail")}</i>
          </div>
          <ul>
            <li className="data__countries">
              <p className="data">
                <span>{selectedCountry.value}</span>%
              </p>
              <p>{t('countries.data-reycled-desc')}</p>
            </li>
            <li className="data__countries">
              <p className="data">
                <span>{Math.round(selectedCountry.per_person_per_day * 365)}</span>kg
              </p>
              <p>{t('countries.data-perperson-desc')}</p>
            </li>
          </ul>
        </section>
      ) : (
        ""
      )}
    </>
  );
};
export default Countries;
