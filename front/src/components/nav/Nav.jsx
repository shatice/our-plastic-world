import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 
const Nav = () => {
	return(
		<nav className="nav">
			<ul>
				<li>Évolution mondiale</li>
				<li>Continents</li>
				<li>Pays</li>
				<li>Océans</li>
			</ul>
		</nav>
	);
}
   
export default Nav;