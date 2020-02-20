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
			id: 4,
			mode: "Océans"
		}
	]

	function handleClick(e) {
    e.preventDefault();
    console.log(e.target.id);
  }

	return(
		<nav className="nav">
			<ul>
				{ dashboard.map(d => <li id={ d.mode } key={ d.id } onClick={handleClick}>{ d.mode }</li> )}
			</ul>
		</nav>
	);
}
   
export default Nav;