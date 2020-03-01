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
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const add = item => {
    setSearchTerm(item.name);
    setSelectedCountry(item);
  };

  const reset = () => {
    setSearchTerm("");
    setSelectedCountry(null);
  };

  useEffect(() => {
    const results = countries.filter(country =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (results.length < 3 ) {
      setSearchResults(results);
    }
  }, [searchTerm, countries]);

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder={t("search")}
        value={searchTerm}
        onChange={handleChange}
        onClick={() => reset()}
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
