import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

/* Styles */
import "./search.scss";

const Search = ({
  countryList,
  setSelectedCountry,
  searchTerm,
  setSearchTerm
}) => {
  const { t } = useTranslation();

  const countries = countryList;

  // countryList.forEach(country => {
  //   countries.push(country.name);
  // });

  // const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const add = item => {
    console.log(item);
    setSearchTerm(item.name);
    setSelectedCountry(item);
    // ZOOM ON COUNTRY
  };

  useEffect(() => {
    const results = countries.filter(country =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder={t("search")}
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchTerm
          ? searchResults.map(item => (
              <li key={item.name} onClick={() => add(item)}>
                {item.name}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Search;
