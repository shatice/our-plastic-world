import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 
const Infos = () => {
  return(
    <div className="infos">
      <section className="infos__bloc infos__bloc--production">
        <h2>PRODUCTION MONDIALE DE PLASTIQUE</h2>
        <ul>
          <li className="data">400 M. de Tonnes</li>
          <li><strong>3x</strong> plus qu’en <strong>1980</strong></li>
          <li><strong>7x</strong> plus que <strong>l’année précédente</strong></li>
        </ul>
      </section>
      <section className="infos__bloc infos__bloc--management">
        <h2>GESTION DES DÉCHETS PLASTIQUES</h2>
        <ul>
          <li>
            <p>Recyclés</p>
            <p className="data">18%</p>
          </li>
          <li>
            <p>Incinérés</p>
            <p className="data">37%</p>
          </li>
          <li>
            <p>Dans la nature</p>
            <p className="data">45%</p>
          </li>
          <li>
            <p>Soit l’équivalent de</p>
            <p className="data">115</p>
            <strong>baleines bleues,</strong>
            <p>l'animal le plus lourd du monde</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
   
export default Infos;