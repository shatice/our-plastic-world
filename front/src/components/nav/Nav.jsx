import React from "react";

/* Styles */
import './nav.scss';
 
const Nav = ({ settings }) => {
	const dashboard = 
	[
		{
			id: 1,
			mode: "Monde"
		},
		{
			id: 2,
			mode: "Continents"
		},
		{
			id: 3,
			mode: "Pays"
		},
		{
			id: 3,
			mode: "Océans"
		}
	]

	return(
		<nav className="nav">
			<ul>
				{ dashboard.map(d => <li key={ d.id }>{ d.mode }</li> )}
			</ul>
		</nav>
	);
}
   
export default Nav;