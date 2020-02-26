import React, { useState, useEffect } from "react";

/* Styles */
import './search.scss';

 
const Search = () => {

    const countries = [
        "France",
        "Italie",
        "Maroc",
        "Espagne",
        "Portugal"
      ];

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
      };

      useEffect(() => {
        const results = countries.filter(countrie =>
          countrie.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
      }, [searchTerm]);
    
    return(
        <div className="search">
            <input className="search__input" type='text' placeholder="Chercher un pays" 
                value={searchTerm}
                onChange={handleChange}
             />
            <ul>
                {
                    searchTerm ? searchResults.map(item => (<li>{item}</li>)) : null
                }
            </ul>
        </div>
    );
}
   
export default Search;