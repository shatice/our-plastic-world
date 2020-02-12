import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 
const Infos = () => {
  return(
    <div className="infos">
      <section className="infos__production">
        <h2>PRODUCTION MONDIALE DE PLASTIQUE</h2>
        <ul>
          <li>400 M. de Tonnes</li>
          <li>3x plus qu’en 1980</li>
          <li>7x plus que l’année précédente</li>
        </ul>
      </section>
      <section className="infos__management">
        <h2>GESTION DES DÉCHETS PLASTIQUES</h2>
        <ul>
          <li>
            <p>Recyclés</p>
            <p>18%</p>
          </li>
          <li>
            <p>Incinérés</p>
            <p>37%</p>
          </li>
          <li>
            <p>Dans la nature</p>
            <p>45%</p>
          </li>
          <li>
            <p>Soit l’équivalent de</p>
            <p>115</p>
            <p>baleines bleues, </p>
            <p>animal le plus lourd au monde</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
   
export default Infos;