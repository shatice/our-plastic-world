import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 
const Infos = () => {
  return(
    <section class="infos">
      <h1>La production mondiale de matières plastiques</h1>
      <article>
        <p>Aujourd’hui, le monde produit en moyenne <span>300 millions de tonnes</span> de plastique <span>par an</span>, soit presque autant que <span>le poids total de l’humanité</span>.</p>
        <p>Alors que la fabrication de plastique à <span>usage unique</span> augmente chaque année, celle de matière plastique <span>durable</span> diminue.</p>
        <p>Depuis <span>1950</span>, presque <span>9 milliards de tonnes</span> de plastique ont été produites, dont <span>la moitié</span> n’a été produite que ces <span>13 dernières années</span>.</p>
      </article>
    </section>
  );
}
   
export default Infos;