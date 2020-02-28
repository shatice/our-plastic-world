import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

/***** COMPONENTS *****/
import Search from "./search/Search.jsx";

const Countries = ({
  countryList,
  setSelectedCountry,
  selectedCountry,
  searchTerm,
  setSearchTerm,
  color
}) => {
  useEffect(() => {});
  const { t } = useTranslation();
  console.log("color", color);

  return (
    <>
      <section className="infos__bloc infos__bloc--countries">
        <h2>
          <p>{t("current-year")}</p>
          <p>{t("countries.title")}</p>
        </h2>
        <Search
          countryList={countryList}
          setSelectedCountry={setSelectedCountry}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <i>{t("countries.detail")}</i>
        {selectedCountry ? (
          <ul style={{ color: color }}>
            <li>
              <p className="data">
                <span>
                  {selectedCountry.value || selectedCountry.value === 0
                    ? selectedCountry.value + "%"
                    : "no data"}
                </span>
              </p>
              <p>{t("countries.data-reycled-desc")}</p>
            </li>
            <li>
              <p className="data">
                <span>
                  {selectedCountry.per_person_per_day
                    ? Math.round(selectedCountry.per_person_per_day * 365) +
                      "kg"
                    : "no data"}
                </span>
              </p>
              <p>{t("countries.data-perperson-desc")}</p>
            </li>
          </ul>
        ) : (
          ""
        )}
      </section>
    </>
  );
};
export default Countries;
